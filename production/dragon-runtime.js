/**
 * Production dragon runtime (staging only).
 * Loads artist-authored skinned GLB assets; never fabricates geometry as a substitute.
 * Three.js and GLTFLoader are passed in by the host to avoid duplicate Three copies.
 */
export const DRAGON_LEVELS=100;
export const dragonPhaseForLevel=level=>level<=10?'egg':level<=30?'hatchling':level<=60?'juvenile':level<100?'adult':'legendary';
export function validateLevel(level){
 if(!Number.isInteger(level)||level<0||level>DRAGON_LEVELS)throw new RangeError('dragon level must be 0..100');
 return level;
}
export function createGrowthManifest(level){
 validateLevel(level);
 return {
  level,phase:dragonPhaseForLevel(level),
  base:level<=10?'egg.glb':'dragon.glb',
  appearance:`appearances/${String(level).padStart(3,'0')}.json`,
  previous:level>0?level-1:null,
  next:level<100?level+1:null
 };
}
export class ProductionDragon {
 constructor({THREE,GLTFLoader,root,assetBase='assets/dragon-v3/',onError=()=>{}}){
  if(!THREE||!GLTFLoader||!root)throw new Error('THREE, GLTFLoader and root are required');
  this.THREE=THREE;this.root=root;this.base=assetBase;
  this.loader=new GLTFLoader();this.onError=onError;this.mixer=null;
  this.model=null;this.clips=new Map();this.active=null;this.request=0;
 }
 async load(level){
  const token=++this.request,manifest=createGrowthManifest(level);
  const [gltf,appearance]=await Promise.all([
   this.loader.loadAsync(this.base+manifest.base),
   fetch(this.base+manifest.appearance).then(r=>{if(!r.ok)throw new Error('Missing authored appearance '+level);return r.json()})
  ]);
  if(token!==this.request)return false;
  if(appearance.level!==level)throw new Error('Appearance level mismatch');
  if(!Array.isArray(appearance.visibleMeshes))throw new Error('visibleMeshes must be authored');
  if(this.model)this.root.remove(this.model);
  if(this.mixer)this.mixer.stopAllAction();
  this.model=gltf.scene;this.model.traverse(o=>{
   if(o.isMesh){o.castShadow=true;o.receiveShadow=true}
   if(o.isSkinnedMesh&&!o.skeleton)throw new Error('Skinned mesh missing skeleton');
  });
  const named=new Map();this.model.traverse(o=>{if(o.name)named.set(o.name,o)});
  for(const name of appearance.visibleMeshes){
   if(!named.has(name))throw new Error('Missing authored growth mesh: '+name);
  }
  for(const [name,obj] of named){
   if(name.startsWith('growth_'))obj.visible=appearance.visibleMeshes.includes(name);
  }
  if(appearance.scale){const v=appearance.scale;if(!Number.isFinite(v)||v<=0)throw new Error('Invalid scale');this.model.scale.setScalar(v)}
  this.root.add(this.model);
  this.mixer=new this.THREE.AnimationMixer(this.model);
  this.clips=new Map(gltf.animations.map(c=>[c.name,c]));
  this.active=null;this.level=level;this.play('idle',{fade:0});
  return true;
 }
 play(name,{fade=.25,loop=true}={}){
  if(!this.mixer)return false;
  const clip=this.clips.get(name);
  if(!clip){this.onError(new Error('Missing authored animation: '+name));return false}
  const next=this.mixer.clipAction(clip);
  next.reset();next.setLoop(loop?this.THREE.LoopRepeat:this.THREE.LoopOnce,loop?Infinity:1);
  next.clampWhenFinished=!loop;next.fadeIn(fade).play();
  if(this.active&&this.active!==next)this.active.fadeOut(fade);
  this.active=next;return true;
 }
 update(seconds){if(this.mixer&&Number.isFinite(seconds)&&seconds>=0)this.mixer.update(Math.min(seconds,.1))}
 async grow(){
  if(this.level>=100)return false;
  const before=this.level;
  await this.load(before+1);
  this.play(before===10?'hatch':'grow',{fade:.15,loop:false});
  return {before,after:this.level,phase:dragonPhaseForLevel(this.level)};
 }
 dispose(){++this.request;if(this.mixer)this.mixer.stopAllAction();if(this.model)this.root.remove(this.model);this.model=null;this.mixer=null;this.clips.clear()}
}

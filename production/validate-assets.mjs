import {readFile,stat} from 'node:fs/promises';
import {join} from 'node:path';
const root=process.argv[2]||'assets/dragon-v3';
const errors=[],looks=[];
for(const file of ['egg.glb','dragon.glb']){
 try{const s=await stat(join(root,file));if(s.size<100000)errors.push(file+': file unusually small')}
 catch{errors.push(file+': missing')}
}
for(let level=0;level<=100;level++){
 const path=join(root,'appearances',String(level).padStart(3,'0')+'.json');
 try{
  const data=JSON.parse(await readFile(path,'utf8'));
  if(data.level!==level)errors.push(path+': wrong level');
  if(!Array.isArray(data.visibleMeshes)||data.visibleMeshes.some(x=>typeof x!=='string'||!x.startsWith('growth_')))errors.push(path+': invalid growth meshes');
  if(!data.visualChange||data.visualChange.trim().length<12)errors.push(path+': visual change description missing');
  if(!Array.isArray(data.reviewImages)||data.reviewImages.length<2)errors.push(path+': visual review images missing');
  if(data.scale!==undefined&&(!Number.isFinite(data.scale)||data.scale<=0))errors.push(path+': invalid scale');
  looks.push(data);
 }catch(e){errors.push(path+': missing/invalid')}
}
for(let i=1;i<looks.length;i++){
 const a=looks[i-1],b=looks[i];
 if(b.level!==a.level+1)continue;
 if(JSON.stringify(a.visibleMeshes)===JSON.stringify(b.visibleMeshes)&&a.scale===b.scale)
  errors.push('levels '+a.level+'->'+b.level+': no authored mesh/scale change');
}
if(errors.length){
 console.error('RELEASE BLOCKED: '+errors.length+' issues');
 for(const e of errors)console.error(' - '+e);
 process.exitCode=1;
}else console.log('Manifest structural checks passed; manual artistic and iPhone QA still required.');

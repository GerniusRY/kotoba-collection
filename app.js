import * as THREE from 'https://esm.sh/three@0.170.0';
const $=id=>document.getElementById(id);
const WORDS={りんご:['🍎','apple'],みかん:['🍊','orange'],オレンジ:['🍊','orange'],いちご:['🍓','strawberry'],ぶどう:['🍇'],ばなな:['🍌'],バナナ:['🍌'],ぞう:['🐘'],きりん:['🦒'],ごりら:['🦍'],らっぱ:['🎺','trumpet'],ぱん:['🍞'],ぱんだ:['🐼'],くるま:['🚗','car'],でんしゃ:['🚃'],たいよう:['☀️','sun'],つき:['🌙'],ほし:['⭐'],き:['🌳','tree'],はな:['🌸'],ねこ:['🐈'],いぬ:['🐕'],うさぎ:['🐇'],さかな:['🐟'],とり:['🐦'],くま:['🐻'],かめ:['🐢'],かさ:['☂️'],ぼうし:['🧢'],くつ:['👟'],とけい:['🕰️'],ほん:['📚'],いえ:['🏠'],ひこうき:['✈️'],ふね:['🚢'],じてんしゃ:['🚲'],ばす:['🚌'],バス:['🚌'],あめ:['🍬'],あいす:['🍨'],アイス:['🍨'],けーき:['🎂'],ケーキ:['🎂'],すいか:['🍉'],めろん:['🍈'],たまご:['🥚'],にんじん:['🥕'],とまと:['🍅'],トマト:['🍅'],ごま:['🫘'],まくら:['🛏️'],だるま:['🎎'],さる:['🐒'],るびー:['💎'],ぱせり:['🌿','parsley'],パセリ:['🌿','parsley'],きゅうり:['🥒'],なす:['🍆'],じゃがいも:['🥔'],たまねぎ:['🧅'],とうもろこし:['🌽'],ぴーまん:['🫑'],れもん:['🍋'],もも:['🍑'],さくらんぼ:['🍒'],なし:['🍐'],ぱいなっぷる:['🍍'],きのこ:['🍄'],ぶろっこりー:['🥦'],きゃべつ:['🥬'],にんにく:['🧄'],しょうが:['🫚'],えび:['🦐'],かに:['🦀'],たこ:['🐙'],いか:['🦑'],ぺんぎん:['🐧'],らいおん:['🦁'],とら:['🐯'],うし:['🐄'],うま:['🐎'],ぶた:['🐖'],ひつじ:['🐑'],やぎ:['🐐'],きつね:['🦊'],りす:['🐿️'],ちょうちょ:['🦋'],はち:['🐝'],あり:['🐜'],かえる:['🐸'],へび:['🐍'],わに:['🐊'],いるか:['🐬'],くじら:['🐳'],さめ:['🦈'],たこやき:['🐙'],おにぎり:['🍙'],ごはん:['🍚'],ぱんけーき:['🥞'],どーなつ:['🍩'],ぷりん:['🍮'],ちょこれーと:['🍫'],くっきー:['🍪'],ぴざ:['🍕'],はんばーがー:['🍔'],すし:['🍣'],らーめん:['🍜'],うどん:['🍜'],ぎゅうにゅう:['🥛'],じゅーす:['🧃'],こっぷ:['🥛'],すぷーん:['🥄'],ふぉーく:['🍴'],はさみ:['✂️'],えんぴつ:['✏️'],くれよん:['🖍️'],かばん:['🎒'],りぼん:['🎀'],ぼーる:['⚽'],ふうせん:['🎈'],たいこ:['🥁'],ぴあの:['🎹'],ぎたー:['🎸'],ばいおりん:['🎻'],ふるーと:['🪈'],とらんぺっと:['🎺','trumpet'],しょうぼうしゃ:['🚒'],ぱとかー:['🚓'],きゅうきゅうしゃ:['🚑'],しんかんせん:['🚄'],ろけっと:['🚀'],へりこぷたー:['🚁'],ばいく:['🏍️'],とらっく:['🚚'],たくしー:['🚕'],しんごう:['🚦'],ゆきだるま:['⛄'],にじ:['🌈'],くも:['☁️'],あめふり:['🌧️'],かみなり:['⚡'],やま:['⛰️'],うみ:['🌊'],かわ:['🏞️'],ひまわり:['🌻'],ちゅーりっぷ:['🌷'],さくら:['🌸'],ばら:['🌹'],くりすますつりー:['🎄']};
const EXTENDED_WORDS={"あひる":["🐤"],"あざらし":["🦭"],"あしか":["🦭"],"あらいぐま":["🦝"],"あるぱか":["🦙"],"いたち":[],"いのしし":["🐗"],"おおかみ":["🐺"],"おっとせい":["🦭"],"かば":["🦛"],"かものはし":[],"かも":["🦆"],"からす":["🐦"],"かんがるー":["🦘"],"きつつき":[],"こうもり":["🦇"],"こあら":["🐨"],"さい":["🦏"],"しまうま":["🦓"],"しろくま":["🐻‍❄️"],"すずめ":["🐦"],"せみ":["🪲"],"たぬき":["🦝"],"だちょう":[],"ちーたー":[],"つばめ":["🐦"],"てんとうむし":["🪲"],"とんぼ":[],"にわとり":["🐔"],"はと":["🐦"],"はむすたー":["🐹"],"ひよこ":["🐤"],"ふくろう":["🦉"],"ふらみんご":["🦩"],"みみず":["🐛"],"むし":["🐛"],"めだか":[],"もぐら":[],"やどかり":[],"らくだ":["🦙"],"れっさーぱんだ":[],"わし":[],"わんわん":["🐶"],"にゃんにゃん":["🐱"],"がおー":["🦁"],"ぴよぴよ":["🐤"],"こっこ":["🐤"],"ぶーぶー":[],"あんぱん":["🍞"],"ういんなー":[],"えだまめ":[],"おかし":["🍪"],"おせんべい":[],"おもち":[],"おみそしる":["🍲"],"おべんとう":[],"かれー":["🍛"],"からあげ":["🍖"],"きゅうしょく":[],"ぎょうざ":[],"ぐみ":[],"けちゃっぷ":[],"こーん":[],"ころっけ":[],"さつまいも":[],"さんどいっち":[],"しちゅー":["🍲"],"じゃむ":[],"しゅうまい":[],"すーぷ":["🍲"],"すぱげってぃ":["🍝"],"せんべい":[],"そーせーじ":[],"そば":["🍜"],"たいやき":[],"たまごやき":["🍳"],"ちーず":["🧀"],"ちゃーはん":["🍚"],"とうふ":[],"とんかつ":["🍖"],"なっとう":[],"のり":[],"はちみつ":[],"はむ":[],"ばたー":[],"ぱすた":["🍝"],"ふらいどぽてと":["🥔"],"べーこん":[],"ほっとけーき":["🥞"],"ぽてと":["🥔"],"まめ":[],"まよねーず":[],"みかんぜりー":[],"めだまやき":["🍳"],"やきいも":["🍠"],"やきそば":["🍝"],"やきにく":["🍖"],"よーぐると":[],"わかめ":[],"あぼかど":["🥑"],"あんず":[],"いちじく":[],"うめ":[],"えんどうまめ":[],"おくら":["🥒"],"かき":["🍊"],"かぼちゃ":["🎃"],"きうい":["🥝"],"ぐれーぷふるーつ":[],"こまつな":["🥬"],"ごぼう":[],"さといも":[],"しそ":[],"すもも":[],"せろり":[],"だいこん":[],"ちんげんさい":["🥬"],"とうがらし":[],"ながねぎ":[],"にら":[],"はくさい":["🥬"],"ぱぷりか":[],"びわ":[],"ふどう":[],"ぶるーべりー":["🍇"],"ほうれんそう":["🥬"],"まんごー":["🥭"],"みょうが":[],"ゆず":["🍊"],"らでぃっしゅ":[],"れたす":["🥬"],"れんこん":[],"いちりんしゃ":["🚲"],"うんてんしゅ":[],"えすかれーたー":[],"えれべーたー":[],"かーと":[],"きしゃ":["🚃"],"くれーんしゃ":[],"けーぶるかー":["🚡"],"ごみしゅうしゅうしゃ":["🚛"],"さんりんしゃ":["🚲"],"じぇっとき":[],"じどうしゃ":["🚗"],"じょうようしゃ":["🚗"],"すくーたー":["🛴"],"せんすいかん":[],"だんぷかー":["🚛"],"でんきじてんしゃ":[],"とらくたー":["🚜"],"ばぎー":[],"ばすてい":[],"ひこうじょう":[],"ふぇりー":["🚢"],"ふみきり":[],"ぶるどーざー":["🚜"],"べびーかー":[],"ほいーる":[],"ゆうらんせん":["🚢"],"れっしゃ":["🚃"],"ろーぷうぇい":["🚡"],"あかちゃん":["👶"],"あくび":[],"あし":[],"あたま":[],"あご":[],"いす":["🪑"],"いと":[],"うで":[],"えほん":["📚"],"おさら":["🍽️"],"おしり":[],"おなか":[],"おふろ":["🛁"],"おむつ":[],"おもちゃ":[],"かお":[],"かがみ":["🪞"],"かぎ":["🔑"],"かみ":[],"かみのけ":[],"からだ":[],"くち":[],"くび":[],"くし":[],"くつした":["🧦"],"こし":[],"こたつ":[],"ごみばこ":[],"さいふ":[],"さら":["🍽️"],"した":[],"しっぽ":[],"しゃしん":[],"しゃわー":[],"しんぶん":[],"すいとう":[],"すりっぱ":["🩴"],"せなか":[],"せっけん":["🧼"],"せんたくき":["🧺"],"そうじき":[],"たおる":[],"たな":[],"たんす":[],"ちりがみ":[],"つくえ":[],"つめ":[],"て":[],"てぶくろ":["🧤"],"てれび":["📺"],"でんき":[],"でんわ":["📞"],"といれ":["🚽"],"とびら":[],"なべ":[],"なみだ":[],"にんぎょう":["🧸"],"ぬいぐるみ":[],"ねまき":[],"は":[],"はぶらし":["🪥"],"はんかち":[],"ひざ":[],"ひじ":[],"ふとん":["🛏️"],"ふく":["👕"],"ふろしき":[],"べっど":["🛏️"],"ほっぺ":[],"まど":[],"まゆげ":[],"みみ":[],"め":[],"めがね":[],"もうふ":["🛏️"],"ゆび":[],"よだれかけ":[],"りもこん":[],"れいぞうこ":["🧊"],"わんぴーす":["👗"],"あやとり":[],"いろえんぴつ":[],"うきわ":[],"えのぐ":["🖌️"],"おりがみ":[],"おままごと":[],"かくれんぼ":[],"かるた":[],"きしゃぽっぽ":[],"きっくぼーど":["🛴"],"きゃっちぼーる":[],"けんけんぱ":[],"こま":[],"しゃぼんだま":["🫧"],"しーる":[],"すべりだい":["🛝"],"すな":[],"すなば":["🪣"],"すこっぷ":[],"たいそう":[],"つみき":[],"てつぼう":[],"とらんぽりん":[],"なわとび":[],"ねんど":[],"ぱずる":["🧩"],"ぶらんこ":[],"ぶろっく":[],"ぼう":[],"ぼーるぷーる":[],"みずあそび":[],"めいろ":[],"ゆうぐ":[],"よーよー":["🪀"],"あさがお":[],"いけ":[],"いし":[],"いなずま":["⚡"],"うちゅう":[],"えだ":[],"おひさま":["☀️"],"かぜ":[],"きり":["☁️"],"くさ":["🌱"],"こおり":[],"こなゆき":["❄️"],"さばく":[],"しずく":["💧"],"しも":["❄️"],"しろつめくさ":["🌼"],"すなはま":[],"そら":["☁️"],"たいふう":["🌧️"],"たき":[],"たんぽぽ":["🌼"],"つち":[],"つぼみ":["🌱"],"ながれぼし":[],"なみ":["🌊"],"はっぱ":["🌱"],"はなび":["🎆"],"はる":[],"ひかり":[],"ひる":["☀️"],"ふゆ":[],"ほしぞら":[],"まつぼっくり":[],"みず":["💧"],"みずたまり":["💧"],"むしめがね":[],"もり":["🌲"],"やしのき":[],"ゆき":["❄️"],"よる":["🌙"],"らいめい":[],"おうち":["🏠"],"おかあさん":["👩"],"おとうさん":["👨"],"おじいちゃん":["👴"],"おばあちゃん":["👵"],"おにいちゃん":[],"おねえちゃん":[],"おともだち":[],"かぞく":[],"こうえん":[],"こうばん":[],"しょくどう":[],"すーぱー":["🛒"],"せんせい":["🧑‍🏫"],"だいどころ":[],"ちかてつ":[],"でぱーと":[],"としょかん":["📚"],"どうぶつえん":[],"にわ":[],"はたけ":[],"びょういん":["🏥"],"ぷーる":[],"へや":[],"ほいくえん":["🏫"],"ほんや":["📚"],"まち":[],"みせ":[],"やおや":[],"ゆうびんきょく":[],"ようちえん":["🏫"],"うわぎ":["🧥"],"えぷろん":[],"おようふく":["👕"],"かっぱ":[],"かーでぃがん":["🧥"],"きもの":[],"こーと":["🧥"],"しゃつ":["👕"],"すかーと":["👗"],"ずぼん":["👖"],"せーたー":[],"たいつ":["🧦"],"てぃーしゃつ":["👕"],"どれす":["👗"],"ねくたい":[],"ぱじゃま":[],"ぱんつ":["👖"],"ひーる":[],"ぶーつ":["👢"],"ぼたん":[],"まふらー":["🧣"],"みずぎ":["🩱"],"ゆびわ":[],"りゅっく":["🎒"],"あいろん":[],"うちわ":[],"えあこん":[],"おたま":[],"かなづち":[],"かめら":["📷"],"きーぼーど":[],"くぎ":[],"けいたい":["📱"],"さいころ":[],"じょうろ":[],"せんぷうき":[],"たいおんけい":[],"ちりとり":[],"つりざお":[],"でんち":[],"にもつ":[],"ぬいばり":[],"はし":["🥢"],"ひも":[],"へあぶらし":[],"ほうき":["🧹"],"まぐかっぷ":["🥤"],"みずでっぽう":[],"むしとりあみ":[],"やかん":["🫖"],"ゆのみ":[],"ようじ":[],"らんぷ":[],"れんじ":[],"おたんじょうび":[],"おまつり":[],"おしょうがつ":[],"おひなさま":["🎎"],"おばけ":[],"かぼちゃおばけ":[],"くりすます":["🎄"],"こいのぼり":["🎏"],"しちごさん":[],"せつぶん":[],"たなばた":[],"つりー":["🎄"],"としこし":[],"ひなにんぎょう":["🎎"],"ぷれぜんと":["🎁"],"ぼんおどり":[]};Object.assign(WORDS,EXTENDED_WORDS);
const ALIASES={'パセリ':'ぱせり','トランペット':'とらんぺっと','林檎':'りんご','象':'ぞう','車':'くるま','猫':'ねこ','犬':'いぬ','電車':'でんしゃ','苺':'いちご','ミカン':'みかん','リンゴ':'りんご','ゾウ':'ぞう','キリン':'きりん','ゴリラ':'ごりら','ラッパ':'らっぱ','パン':'ぱん','パンダ':'ぱんだ','クルマ':'くるま','ネコ':'ねこ','イヌ':'いぬ','木':'き','花':'はな','太陽':'たいよう'};
const stored=()=>{try{return JSON.parse(localStorage.getItem('kotoba-library-v1')||'{}')}catch{return {}}};let library=stored();let session=[];let mode='collect',first='child',turn=0,previous='',busy=false,queue=[],listeningWanted=false,recognition=null,recognitionRunning=false,tts=false,sounds=true,voiceBusy=false,runToken=0;let currentObject=null;let audioContext=null;
const renderer=new THREE.WebGLRenderer({canvas:$('scene'),antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(36,1,.1,100);camera.position.set(0,0,9);scene.add(new THREE.HemisphereLight(0xffffff,0x415775,2.4));const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(4,6,7);scene.add(key);const fill=new THREE.DirectionalLight(0xb3d4ff,1.3);fill.position.set(-5,1,-4);scene.add(fill);
function resize(){const r=$('scene').getBoundingClientRect();if(r.width&&r.height){renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix()}}window.addEventListener('resize',resize);window.addEventListener('orientationchange',()=>setTimeout(resize,300));new ResizeObserver(resize).observe($('scene'));resize();
function mat(color,roughness=.4,metalness=0){return new THREE.MeshStandardMaterial({color,roughness,metalness})}function sphere(group,x,y,z,sx,sy,sz,color){const m=new THREE.Mesh(new THREE.SphereGeometry(1,40,24),mat(color));m.position.set(x,y,z);m.scale.set(sx,sy,sz);group.add(m);return m}function cyl(group,x,y,z,rt,rb,h,color){const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,20),mat(color));m.position.set(x,y,z);group.add(m);return m}
function make3D(type){const g=new THREE.Group();if(type==='apple'||type==='orange'){sphere(g,0,0,0,1.2,1.12,1.1,type==='apple'?0xc92320:0xf58b0d);cyl(g,0,1.13,0,.07,.09,.42,0x5b3b19);const leaf=sphere(g,.35,1.27,0,.4,.11,.2,0x398b35);leaf.rotation.z=.35}else if(type==='strawberry'){const b=new THREE.Mesh(new THREE.ConeGeometry(1.2,2.2,48),mat(0xe52e31,.65));b.rotation.z=Math.PI;g.add(b);for(let i=0;i<55;i++){let a=i*2.399,yy=-.85+(i%11)*.16,rr=.9*Math.max(.2,1-Math.abs(yy)/1.3);sphere(g,Math.cos(a)*rr,yy,Math.sin(a)*rr,.045,.06,.04,0xf7e5a2)}for(let i=0;i<6;i++){const l=sphere(g,Math.cos(i)*.45,1,Math.sin(i)*.45,.5,.08,.18,0x358a32);l.rotation.y=i}}else if(type==='sun'){sphere(g,0,0,0,1.05,1.05,1.05,0xffc928);for(let i=0;i<12;i++){const a=i*Math.PI/6;const ray=new THREE.Mesh(new THREE.ConeGeometry(.22,.7,12),mat(0xffdc47));ray.position.set(Math.cos(a)*1.5,Math.sin(a)*1.5,0);ray.rotation.z=a-Math.PI/2;g.add(ray)}}else if(type==='tree'){cyl(g,0,-.9,0,.19,.3,2,0x7c4d2d);sphere(g,0,.7,0,1.05,1.15,.95,0x267b38);sphere(g,-.55,.15,.25,.7,.7,.65,0x348e40);sphere(g,.6,.25,-.2,.65,.8,.7,0x2f873e)}else if(type==='car'){const body=new THREE.Mesh(new THREE.BoxGeometry(3, .7,1.5),mat(0xd52728,.28,.3));body.position.y=-.3;g.add(body);const roof=new THREE.Mesh(new THREE.BoxGeometry(1.65,.6,1.35),mat(0xe34d48,.27,.25));roof.position.set(-.15,.3,0);g.add(roof);for(const x of [-1,1])for(const z of [-.8,.8]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,.2,32),mat(0x17191c,.95));wheel.rotation.x=Math.PI/2;wheel.position.set(x,-.72,z);g.add(wheel)}for(const z of [-.76,.76]){const glass=new THREE.Mesh(new THREE.BoxGeometry(1.2,.42,.03),mat(0x80bcd5,.12,.3));glass.position.set(-.15,.33,z);g.add(glass)}}else if(type==='parsley'){const stem=mat(0x4e9a3b,.55);const leaf=mat(0x278343,.7);for(let i=0;i<9;i++){const a=i*2.399;const radius=.35+(i%3)*.16;const x=Math.cos(a)*radius,z=Math.sin(a)*radius;const h=.85+(i%4)*.18;const stalk=new THREE.Mesh(new THREE.CylinderGeometry(.025,.045,h,10),stem);stalk.position.set(x*.35,-.65+h*.5,z*.35);stalk.rotation.z=-x*.28;g.add(stalk);for(let j=0;j<5;j++){const theta=a+j*1.256;const lx=x+Math.cos(theta)*.27,lz=z+Math.sin(theta)*.27;const m=new THREE.Mesh(new THREE.SphereGeometry(1,12,10),leaf);m.position.set(lx,-.65+h+(j%2)*.11,lz);m.scale.set(.32,.15,.27);g.add(m)}}g.rotation.x=-.2}else if(type==='trumpet'){const gold=mat(0xe8b331,.2,.65);const dark=mat(0x8e6519,.25,.55);function tube(a,b,r=.085){const d=new THREE.Vector3().subVectors(new THREE.Vector3(...b),new THREE.Vector3(...a));const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),16),gold);m.position.copy(new THREE.Vector3(...a).add(new THREE.Vector3(...b)).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());g.add(m)}tube([-1.55,.2,0],[.85,.2,0],.12);tube([-1.4,-.4,0],[.4,-.4,0],.075);tube([-1.4,-.4,0],[-1.4,.2,0],.075);tube([.4,-.4,0],[.4,.2,0],.075);const bell=new THREE.Mesh(new THREE.CylinderGeometry(.58,.13,.95,48,1,true),gold);bell.rotation.z=-Math.PI/2;bell.position.set(1.28,.2,0);g.add(bell);const rim=new THREE.Mesh(new THREE.TorusGeometry(.58,.055,12,48),gold);rim.rotation.y=Math.PI/2;rim.position.set(1.76,.2,0);g.add(rim);for(const x of [-.65,-.25,.15]){tube([x,.2,0],[x,.85,0],.09);const cap=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.075,24),gold);cap.position.set(x,.89,0);g.add(cap)}const mouth=new THREE.Mesh(new THREE.CylinderGeometry(.15,.1,.3,20),dark);mouth.rotation.z=Math.PI/2;mouth.position.set(-1.7,.2,0);g.add(mouth);g.rotation.y=-.18}else return null;g.scale.setScalar(type==='car'?.95:1.1);return g}
const meshType=w=>(WORDS[w]||[])[1];
const imageCache=new Map();function show3D(word){if(currentObject){scene.remove(currentObject);currentObject.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){o.material.map?.dispose();o.material.dispose()}})}currentObject=make3D(meshType(word));if(currentObject){const bounds=new THREE.Box3().setFromObject(currentObject);const center=bounds.getCenter(new THREE.Vector3());const size=bounds.getSize(new THREE.Vector3());for(const child of currentObject.children)child.position.sub(center);currentObject.userData.fitScale=2.7/Math.max(size.x,size.y,size.z,0.01);currentObject.scale.setScalar(.15*currentObject.userData.fitScale);scene.add(currentObject);$('photo').classList.add('hidden');$('empty').classList.add('hidden');return true}return false}
let lastTime=0;function animate(t){requestAnimationFrame(animate);if(currentObject){const s=currentObject.scale.x;const target=currentObject.userData.fitScale||1;if(s<target)currentObject.scale.setScalar(Math.min(target,s+(t-lastTime)*.0028));currentObject.rotation.y+=currentObject.userData.isQuizRelief?Math.sin(t*.001)*.0006:Math.min(.02,(t-lastTime)*.0003);currentObject.position.y=Math.sin(t*.002)*.09}if(dragonModel&&playMode==='pet'){const p=Math.min(100,petLevel);dragonModel.rotation.y=-.14+Math.sin(t*.0006)*(.15+p*.0015);dragonModel.rotation.x=Math.sin(t*.0011)*.045;dragonModel.position.y=-.1+(p>=51?.18:0)+Math.sin(t*(p>=61?.004:.0017))*(p>=51?.03+p*.002:.08);dragonModel.rotation.z=p>=80?Math.sin(t*.0019)*.09:0;dragonModel.children.forEach(c=>{if(c.userData?.wing)c.rotation.z=c.userData.side*Math.sin(t*(p>=41?.009:.003))*(p>=41?.05+p*.003:.008);if(c.userData?.fire)c.scale.setScalar(.88+Math.sin(t*.018)*.14)})}if(dragonSideRenderer&&playMode==='pet'){updateDragonSideSize();dragonSideRenderer.render(dragonSideScene,dragonSideCamera)}renderer.render(scene,camera);lastTime=t}requestAnimationFrame(animate);
function normalize(w){w=w.trim().replace(/[。、！？!?\s]+$/g,'').replace(/^(これは|それは|あれは)/,'').replace(/(です|だよ|だね)$/,'').trim();return ALIASES[w]||w.toLowerCase()}
function kana(w){return w.normalize('NFKC').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96)).replace(/[^ぁ-ゖー]/g,'')}
// しりとりは清音・濁音・半濁音を厳密に区別する（例: ご≠こ、ぱ≠は）。
const small={'ゃ':'や','ゅ':'ゆ','ょ':'よ','ぁ':'あ','ぃ':'い','ぅ':'う','ぇ':'え','ぉ':'お','っ':'つ'};function firstKana(w){let s=kana(w);return s[0]||''}function lastKana(w){let s=kana(w);if(!s)return '';let c=s.at(-1);if(c==='ー'){let p=s.at(-2);const map={'あ':'あ','か':'あ','さ':'あ','た':'あ','な':'あ','は':'あ','ま':'あ','や':'あ','ら':'あ','わ':'あ','が':'あ','ざ':'あ','だ':'あ','ば':'あ','ぱ':'あ','い':'い','き':'い','し':'い','ち':'い','に':'い','ひ':'い','み':'い','り':'い','ぎ':'い','じ':'い','ぢ':'い','び':'い','ぴ':'い','う':'う','く':'う','す':'う','つ':'う','ぬ':'う','ふ':'う','む':'う','ゆ':'う','る':'う','ぐ':'う','ず':'う','づ':'う','ぶ':'う','ぷ':'う','え':'え','け':'え','せ':'え','て':'え','ね':'え','へ':'え','め':'え','れ':'え','げ':'え','ぜ':'え','で':'え','べ':'え','ぺ':'え','お':'お','こ':'お','そ':'お','と':'お','の':'お','ほ':'お','も':'お','よ':'お','ろ':'お','を':'お','ご':'お','ぞ':'お','ど':'お','ぼ':'お','ぽ':'お'};return map[p]||p||''}return small[c]||c}
function setPrompt(s){$('prompt').textContent=s}function currentPlayer(){return (turn%2===0?first:(first==='child'?'parent':'child'))}function turnUI(){const active=mode!=='collect';$('turn').classList.toggle('hidden',!active);if(active)$('turn').textContent=(currentPlayer()==='child'?'こどもの ばん':'おとなの ばん')+(previous?'　「'+lastKana(previous)+'」から':'');$('modeBtn').textContent='あそび：'+({collect:'コレクション',easy:'やさしいしりとり',battle:'たいせんしりとり'}[mode])}
function sound(){if(!sounds)return;try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();let o=audioContext.createOscillator(),g=audioContext.createGain(),t=audioContext.currentTime;o.type='sine';o.frequency.setValueAtTime(450,t);o.frequency.exponentialRampToValueAtTime(880,t+.18);g.gain.setValueAtTime(.09,t);g.gain.exponentialRampToValueAtTime(.001,t+.32);o.connect(g);g.connect(audioContext.destination);o.start(t);o.stop(t+.33)}catch{}}
function say(text){if(!tts||!('speechSynthesis'in window))return;try{voiceBusy=true;if(recognitionRunning)recognition.stop();speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.rate=.86;u.pitch=1.15;u.onend=u.onerror=()=>{voiceBusy=false;setTimeout(startRecognition,250)};speechSynthesis.speak(u)}catch{voiceBusy=false}}
function addCollection(w,img){session.push({word:w,img});const item=document.createElement('div');item.className='col-item';const icon=document.createElement(img?'img':'div');if(img){icon.src=img;icon.alt='';icon.onerror=()=>{icon.replaceWith(Object.assign(document.createElement('div'),{className:'glyph',textContent:inferredGlyph(w).emoji}))}}else{icon.className='glyph';icon.textContent=inferredGlyph(w).emoji}item.append(icon,Object.assign(document.createElement('span'),{textContent:w}));$('collection').append(item);item.scrollIntoView({block:'nearest',inline:'end',behavior:'smooth'});const existing=library[w]||{count:0,first:new Date().toISOString()};library[w]={...existing,count:existing.count+1,last:new Date().toISOString(),img:img||existing.img||''};try{localStorage.setItem('kotoba-library-v1',JSON.stringify(library))}catch{setPrompt('保存領域がいっぱいです。図鑑を保存できませんでした')}}
// Wikipedia is used only when no local 3D/emoji illustration is available.
// Exact Japanese article matches only: unrelated search hits are intentionally rejected.
let photoRequestId=0;
const categoryFallbacks=[
 ['🐾','どうぶつ',/犬|猫|鳥|魚|虫|うさぎ|ぞう|きりん|くま|さる|かば|りす|とら|らいおん|ぱんだ|かぴばら|カピバラ|あざらし|ぺんぎん|ペンギン|わに|へび|いぬ|ねこ|ねずみ|ハムスター|はむすたー|ゴリラ|ごりら|ひつじ|うし|ぶた|うま|かえる|きつね|たぬき|しか|きょうりゅう|恐竜/],
 ['🍎','くだもの',/りんご|みかん|いちご|ぶどう|ばなな|バナナ|めろん|メロン|もも|なし|れもん|レモン|キウイ|きうい|ぱいなっぷる|パイナップル|まんごー|マンゴー|フルーツ|ふるーつ/],
 ['🥬','やさい',/やさい|野菜|きゃべつ|キャベツ|れたす|レタス|ぱせり|パセリ|にんじん|たまねぎ|じゃがいも|ぴーまん|ピーマン|なす|とまと|トマト|きゅうり|だいこん|ほうれんそう|ブロッコリー|ぶろっこりー/],
 ['🚗','のりもの',/くるま|車|バス|ばす|電車|でんしゃ|じてんしゃ|自転車|トラック|とらっく|タクシー|たくしー|飛行機|ひこうき|船|ふね|新幹線|しんかんせん|ロケット|ろけっと|ヘリコプター|へりこぷたー/],
 ['🍽️','たべもの',/ごはん|ぱん|パン|おかし|お菓子|あいす|アイス|ケーキ|けーき|うどん|らーめん|ラーメン|そば|すし|寿司|ぴざ|ピザ|たまご|卵|にく|肉|さかな|魚|おにぎり|ぎょうざ|餃子|スープ|すーぷ/],
 ['🧸','おもちゃ',/おもちゃ|玩具|ぬいぐるみ|にんぎょう|人形|つみき|積み木|ぶろっく|ブロック|ぱずる|パズル|ぼーる|ボール|あそび|遊び|しゃぼん|ふうせん|風船/],
 ['🌼','しぜん',/はな|花|くさ|草|木|はっぱ|葉|さくら|桜|ひまわり|たんぽぽ|ちゅーりっぷ|チューリップ|ゆき|雪|雨|雲|そら|空|ほし|星|つき|月|たいよう|太陽|うみ|海|やま|山/],
 ['👕','おようふく',/ふく|服|くつ|靴|ぼうし|帽子|ずぼん|ズボン|しゃつ|シャツ|こーと|コート|すかーと|スカート|どれす|ドレス|くつした|靴下/],
 ['🏠','おうち',/いえ|家|おうち|おへや|部屋|まど|窓|どあ|ドア|おふろ|お風呂|といれ|トイレ|だいどころ|台所|べっど|ベッド|まくら|枕|いす|椅子|つくえ|机/]
];
function inferredGlyph(word){
 const normalized=word.normalize('NFKC').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96));
 const exact=WORDS[normalized]?.[0]||WORDS[word]?.[0];if(exact)return {emoji:exact,guess:false};
 const match=Object.entries(WORDS).filter(([key,v])=>v?.[0]&&key.length>=2&&normalized.includes(key)).sort((a,b)=>b[0].length-a[0].length)[0];
 if(match&&match[0].length>=3)return {emoji:match[1][0],guess:true};
 const category=categoryFallbacks.find(([, ,pattern])=>pattern.test(word)||pattern.test(normalized));
 return category?{emoji:category[0],guess:true}:{emoji:'✨',guess:true};
}
function renderInferred(word,waiting=false){
 const result=inferredGlyph(word);const root=$('empty');root.replaceChildren();
 const icon=document.createElement('div');icon.className='empty-symbol';icon.textContent=result.emoji;
 const label=document.createElement('div');label.textContent=waiting?'しゃしんを さがしているよ':result.guess?'イメージだよ':'';
 root.append(icon,label);root.classList.remove('hidden');$('photo').classList.add('hidden');
}
async function wikiImage(word){
 if(imageCache.has(word))return imageCache.get(word);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4800);
 try{
  const params=new URLSearchParams({action:'query',format:'json',formatversion:'2',redirects:'1',prop:'pageimages',piprop:'thumbnail',pithumbsize:'900',pilicense:'free',titles:word,origin:'*'});
  const response=await fetch('https://ja.wikipedia.org/w/api.php?'+params,{signal:controller.signal});
  if(!response.ok)throw Error('wikipedia unavailable');
  const data=await response.json();
  const page=data.query?.pages?.[0];
  const title=page?.title||'';
  const norm=x=>x.normalize('NFKC').replace(/[\s　]/g,'').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96)).toLowerCase();
  const exact=norm(title)===norm(word)||norm(title).replace(/[（(].*?[）)]/g,'')===norm(word);
  const url=exact&&page?.ns===0&&page?.thumbnail?.source||null;
  const safe=typeof url==='string'&&url.startsWith('https://upload.wikimedia.org/')?url:null;
  if(safe){imageCache.set(word,safe);return safe}
  const searchParams=new URLSearchParams({action:'query',format:'json',formatversion:'2',generator:'search',gsrsearch:word,gsrnamespace:'0',gsrlimit:'5',prop:'pageimages',piprop:'thumbnail',pithumbsize:'900',pilicense:'free',origin:'*'});
  const sr=await fetch('https://ja.wikipedia.org/w/api.php?'+searchParams,{signal:controller.signal});
  if(!sr.ok)return null;
  const results=(await sr.json()).query?.pages||[];
  const clean=x=>norm(x).replace(/[（(].*?[）)]/g,'');
  const ranked=results.filter(p=>p.ns===0&&p.thumbnail?.source?.startsWith('https://upload.wikimedia.org/')).map(p=>{
   const title=clean(p.title),query=clean(word);
   const score=title===query?100:title.startsWith(query)&&query.length>=3?75:title.includes(query)&&query.length>=3?60:query.includes(title)&&title.length>=3?45:0;
   return {url:p.thumbnail.source,score};
  }).sort((a,b)=>b.score-a.score);
  const candidate=ranked[0]?.score>=60?ranked[0].url:null;
  imageCache.set(word,candidate);return candidate;
 }catch{return null}finally{clearTimeout(timer)}
}
function displayPhoto(url,w){
 const img=$('photo');img.onload=()=>{if(img.dataset.word!==w)return;img.classList.remove('hidden');$('empty').classList.add('hidden')};
 img.onerror=()=>{if(img.dataset.word===w){renderInferred(w,false)}};
 img.dataset.word=w;img.alt=w;img.src=url;
}
function fetchMissingImage(w){
 const requestId=++photoRequestId;
 renderInferred(w,true);
 wikiImage(w).then(url=>{
  if(requestId!==photoRequestId||$('word').textContent!==w)return;
  if(url){displayPhoto(url,w);const entry=session.find(x=>x.word===w);if(entry)entry.img=url;const cells=[...$('collection').children];const cell=cells.find(x=>x.lastElementChild?.textContent===w);if(cell){const icon=cell.firstElementChild;if(icon?.tagName!=='IMG'){const img=document.createElement('img');img.src=url;img.alt='';img.onerror=()=>img.replaceWith(Object.assign(document.createElement('div'),{className:'glyph',textContent:inferredGlyph(w).emoji}));icon?.replaceWith(img)}}if(library[w]){library[w].img=url;try{localStorage.setItem('kotoba-library-v1',JSON.stringify(library))}catch{}}}
  else{renderInferred(w,false)}
 }).catch(()=>{if(requestId===photoRequestId)renderInferred(w,false)});
}
async function processWord(raw){const w=normalize(raw);if(!w||w.length>35)return;if(playMode==='quiz'){checkQuiz(w);return}if(playMode==='pet'){dragonAnswer(w);return}if(magicCommand(w))return;if(busy){queue.push(w);return}busy=true;let msg='';if(mode!=='collect'&&previous){if(mode==='battle'&&session.some(x=>x.word===w))msg='その ことばは つかったよ';else if(firstKana(w)!==lastKana(previous))msg='「'+lastKana(previous)+'」から はじまる ことばを いってね'}if(msg){setPrompt(msg);say(msg);busy=false;return}const isBattleEnd=mode==='battle'&&lastKana(w)==='ん';const isEasyN=mode==='easy'&&lastKana(w)==='ん';$('word').textContent=w;$('effect').classList.remove('flash');void $('effect').offsetWidth;$('effect').classList.add('flash');sound();animalVoice(w);magicColor=null;$('empty').style.transform='';$('stage').style.removeProperty('--magic-tint');++photoRequestId;let has3D=show3D(w),imageUrl='';if(!has3D){$('photo').classList.add('hidden');$('empty').classList.remove('hidden');const emoji=WORDS[w]?.[0];$('empty').replaceChildren();if(emoji){const symbol=document.createElement('div');symbol.className='empty-symbol';symbol.textContent=emoji;$('empty').append(symbol)}else{fetchMissingImage(w)}}if(!session.some(x=>x.word===w)){addCollection(w,imageUrl);rewardWord(w)}if(mode!=='collect'){previous=w;turn++;turnUI()}if(isBattleEnd){setPrompt('「ん」で おわった！ '+(currentPlayer()==='child'?'おとな':'こども')+'の かち！');say('んでおわったよ。おしまい！');previous='';turn=0;turnUI()}else if(isEasyN){setPrompt('「ん」で おわったね。つぎは すきな ことばを いってね');previous='';turnUI();say(w)}else{setPrompt(mode==='collect'?'つぎの ことばを いってね':'つぎは「'+lastKana(w)+'」から はじまる ことば！');say(w)}busy=false;if(queue.length)processWord(queue.shift())}

/* Child-friendly play features. All visuals are local: no arbitrary web images. */
const animalSounds={'いぬ':[440,330],'ねこ':[650,480],'ぞう':[180,120],'うし':[210,160],'ひつじ':[530,390],'とり':[950,1200],'ひよこ':[1100,1350],'かえる':[240,200],'らいおん':[160,100],'ぶた':[280,240],'にわとり':[700,1000],'あひる':[480,410]};
let playMode='words',quizAnswer='',quizChoices=[],quizLocked=false,magicColor=null,petLevel=0,chestCount=0,trainCount=0;
const gameLayer=$('gameLayer'),gamePanel=$('gamePanel'),petStatus=$('petStatus'),trainStatus=$('trainStatus');
function playTone(f,d=.22,shape='sine'){if(!sounds)return;try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();const o=audioContext.createOscillator(),g=audioContext.createGain(),t=audioContext.currentTime;o.type=shape;o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(Math.max(80,f*.72),t+d);g.gain.setValueAtTime(.065,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(audioContext.destination);o.start(t);o.stop(t+d+.01)}catch{}}
function animalVoice(w){const pair=animalSounds[w];if(!pair)return;playTone(pair[0],.18,'triangle');setTimeout(()=>playTone(pair[1],.25,'triangle'),190)}
function localGlyph(w){return WORDS[w]?.[0]||'❔'}
const PET_KEY='kotoba-dragon-progress-v1';
try{petLevel=Math.max(0,Math.min(999,Number(localStorage.getItem(PET_KEY))||0))}catch{}
function dragonStage(){return petLevel>=100?'adult':petLevel>=35?'young':petLevel>=6?'baby':'egg'}
function dragonArt(){
 const stage=dragonStage(),cracks=Math.min(5,petLevel);
 if(stage==='egg'){
  const paths=['M153 48l-15 32 20 17-18 28','M91 131l29 13-15 26 22 15','M229 126l-28 18 14 24-25 18','M130 227l24-26 22 21 20-16','M160 66l20 20-14 25 20 25'];
  return '<svg class="dragon-svg" viewBox="0 0 320 300" aria-label="魔法の卵"><defs><radialGradient id="eggLight" cx="32%" cy="25%" r="80%"><stop stop-color="#fffaf0"/><stop offset=".48" stop-color="#e7f4ff"/><stop offset="1" stop-color="#8eaed5"/></radialGradient></defs><ellipse cx="160" cy="280" rx="106" ry="12" fill="#071527" opacity=".5"/><ellipse cx="160" cy="153" rx="89" ry="126" fill="url(#eggLight)" stroke="#fff4d6" stroke-width="3"/><ellipse cx="125" cy="100" rx="18" ry="48" fill="#fff" opacity=".26" transform="rotate(24 125 100)"/>'+paths.slice(0,cracks).map(p=>'<path d="'+p+'" stroke="#294c70" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>').join('')+'</svg>';
 }
 return '';
}
function buildDragon3D(stage){
 // A: pearlescent white / ice-blue dragon, identical character across all stages.
 const g=new THREE.Group(),adult=stage==='adult',young=stage==='young';
 const skin=mat(0xe9f4ff,.32,.12),face=mat(0xf9fcff,.38,.06),belly=mat(0xfff7e9,.78),horn=mat(0xf7dfac,.42,.08),ridge=mat(0xaedaff,.42,.08);
 const iris=mat(0x36a8ed,.18,.2),pupil=mat(0x102e5c,.1,.14),white=mat(0xffffff,.16,.04),nostril=mat(0x829cae,.9),mouth=mat(0x607e96,.9),claw=mat(0xfff3d8,.36);
 const add=(geo,m,x,y,z)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o};
 const ball=(x,y,z,a,b,c,m)=>{const o=add(new THREE.SphereGeometry(1,24,16),m,x,y,z);o.scale.set(a,b,c);return o};
 const cone=(x,y,z,r,h,m,rz=0,rx=0)=>{const o=add(new THREE.ConeGeometry(r,h,10),m,x,y,z);o.rotation.z=rz;o.rotation.x=rx;return o};
 const stageScale=.78+Math.min(100,petLevel)*.0062;
 // Baby: larger head and eyes; adult: longer body, horns, wings and tail.
 const headSize=adult?.89:young?.91:1.06,bodySize=adult?1.22:young?1.1:.93;
 ball(0,-.38,-.06,.61*bodySize,.72*bodySize,.54*bodySize,skin);
 ball(0,-.48,.45,.41*bodySize,.51*bodySize,.16,belly);
 ball(0,.64,.09,.73*headSize,.62*headSize,.64*headSize,face);
 ball(0,.38,.68,.48*headSize,.29*headSize,.52*headSize,face);
 ball(0,.27,1.03,.4*headSize,.2*headSize,.31*headSize,skin);
 // Gentle smile, tiny nose, sapphire eyes with distinct highlights.
 for(const side of [-1,1]){
  ball(side*.38,.7,.65,.235*headSize,.25*headSize,.13,white);
  ball(side*.395,.7,.761,.167*headSize,.19*headSize,.077,iris);
  ball(side*.41,.7,.817,.089*headSize,.14*headSize,.045,pupil);
  ball(side*.36,.78,.856,.052,.064,.026,white);
  ball(side*.45,.65,.854,.021,.028,.014,white);
  ball(side*.19,.3,1.33,.035,.026,.021,nostril);
  ball(side*.34,.25,1.04,.17,.085,.045,mat(0xf5d8dc,.9));
  if(petLevel>=21)cone(side*.43,1.21,-.1,.1+Math.min(1,(petLevel-20)/70)*.09,.15+Math.min(1,(petLevel-20)/70)*.57,horn,-side*(adult?.43:.3),-.16);
  if(petLevel>=23)cone(side*.58,.99,-.3,.08,Math.min(.38,(petLevel-22)*.012),ridge,-side*.65);
  // Four sturdy paws with ivory claws.
  ball(side*.53,-.9,.31,.3,.22,.36,skin);
  if(petLevel>=11)for(let toe=-1;toe<=1;toe++)cone(side*.53+toe*.145,-1.045,.61,.035+Math.min(.03,(petLevel-10)*.0006),.06+Math.min(.2,(petLevel-10)*.003),claw,Math.PI/2);
  ball(side*.65,-.23,.16,.235,.43,.23,skin).rotation.z=side*.27;
  ball(side*.72,-.53,.35,.19,.16,.23,skin);
  // Curved iridescent lavender wing with pale leading-edge spar.
  const wing=new THREE.Group();wing.position.set(side*.49,.23,-.19);wing.userData.wing=true;wing.userData.side=side;wing.visible=petLevel>=31;g.add(wing);
  const reach=.24+Math.max(0,Math.min(70,petLevel-30))*.019;
  const sh=new THREE.Shape();sh.moveTo(0,0);
  sh.quadraticCurveTo(side*reach*.4,reach*.68,side*reach,reach*.7);
  sh.quadraticCurveTo(side*reach*1.13,reach*.24,side*reach*.97,-reach*.27);
  sh.quadraticCurveTo(side*reach*.73,-reach*.05,side*reach*.59,-reach*.37);
  sh.quadraticCurveTo(side*reach*.33,-reach*.12,side*reach*.18,-reach*.31);
  sh.quadraticCurveTo(side*reach*.09,-reach*.12,0,0);
  const membrane=new THREE.Mesh(new THREE.ShapeGeometry(sh,14),new THREE.MeshStandardMaterial({color:adult?0x9ca5f2:0xc5b9f2,side:THREE.DoubleSide,roughness:.46,metalness:.12,transparent:true,opacity:.94}));
  membrane.position.z=-.15;wing.add(membrane);
  const bone=new THREE.Mesh(new THREE.CylinderGeometry(.025,.045,reach*1.1,8),ridge);bone.position.set(side*reach*.48,reach*.35,-.13);bone.rotation.z=-side*.8;wing.add(bone);
  wing.rotation.y=side*.14;
 }
 // Small pearl scales and gradually larger dorsal fins.
 if(petLevel>=23)for(let i=0;i<Math.min(9,1+Math.floor((petLevel-23)/4));i++)cone(0,.98-i*.23,-.55,.11+i*.003,.2+i*.01,ridge,.08);
 // Thick tapering tail.
 for(let i=0;i<Math.min(6,1+Math.floor(Math.max(0,petLevel-15)/3));i++){const t=i/6;ball(0,-.72-i*.12,-.46-i*.22,.29*(1-t)+.045,.25*(1-t)+.045,.29*(1-t)+.045,skin)}
 if(petLevel>=25)cone(0,-1.34,-1.71,.17,.37,ridge,0,-.75);
 if(adult){cone(0,1.37,.15,.12,.34,horn);cone(-.2,.98,-.46,.1,.3,ridge);cone(.2,.98,-.46,.1,.3,ridge)}
 if(petLevel>=71){
  const fire=new THREE.Group();fire.userData.fire=true;fire.position.set(0,.2,1.33);g.add(fire);
  const flame=new THREE.Mesh(new THREE.ConeGeometry(.08+petLevel*.002,.12+Math.max(0,petLevel-70)*.022,12),new THREE.MeshBasicMaterial({color:0xffa42a,transparent:true,opacity:.85}));
  flame.rotation.x=Math.PI/2;flame.position.z=.3;fire.add(flame);
  const core=new THREE.Mesh(new THREE.ConeGeometry(.045,.08+Math.max(0,petLevel-70)*.012,12),new THREE.MeshBasicMaterial({color:0xffe789,transparent:true,opacity:.9}));
  core.rotation.x=Math.PI/2;core.position.z=.28;fire.add(core);
 }

 g.scale.setScalar(stageScale);g.rotation.y=-.12;
 return g;
}
let dragonModel=null;
function buildEgg3D(){
 const g=new THREE.Group();
 const shell=new THREE.Mesh(new THREE.SphereGeometry(1,48,32),new THREE.MeshPhysicalMaterial({color:0xe6f2ff,roughness:.25,metalness:.16,clearcoat:.85,clearcoatRoughness:.14}));
 shell.scale.set(.83,1.13,.78);g.add(shell);
 const bottom=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),new THREE.MeshStandardMaterial({color:0xa6c7e8,roughness:.38,transparent:true,opacity:.27}));
 bottom.scale.set(.85,1.15,.8);bottom.position.set(0,-.02,-.035);g.add(bottom);
 const cracks=Math.min(5,petLevel);
 for(let j=0;j<cracks;j++){
  const line=new THREE.Group(),angle=j*Math.PI*2/5;
  for(let i=0;i<5;i++){
   const y=.75-i*.23,x=Math.sin(i*2.3+j)*.08;
   const point=new THREE.Mesh(new THREE.SphereGeometry(.035,8,8),new THREE.MeshBasicMaterial({color:0x426f9d}));
   point.position.set(x,y,Math.sqrt(Math.max(.05,1-y*y/1.3))*.79+.005);line.add(point);
  }
  line.rotation.y=angle;g.add(line);
 }
 g.userData.egg=true;return g;
}
const dragonSideScene=new THREE.Scene();
const dragonSideCamera=new THREE.PerspectiveCamera(40,1,.1,100);dragonSideCamera.position.set(0,1.05,7.5);dragonSideCamera.lookAt(0,0,0);
dragonSideScene.add(new THREE.HemisphereLight(0xf2f8ff,0x54728e,2.3));
const sideLight=new THREE.DirectionalLight(0xffffff,2.5);sideLight.position.set(-3,5,5);dragonSideScene.add(sideLight);
let dragonSideRenderer=null,dragonSideCanvas=null;
function setupDragonSide(){
 if(dragonSideRenderer)return;
 dragonSideCanvas=document.createElement('canvas');dragonSideCanvas.id='dragonSideCanvas';
 $('stage').appendChild(dragonSideCanvas);
 dragonSideRenderer=new THREE.WebGLRenderer({canvas:dragonSideCanvas,alpha:true,antialias:true});
 dragonSideRenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
 dragonSideRenderer.outputColorSpace=THREE.SRGBColorSpace;
}
function updateDragonSideSize(){
 if(!dragonSideRenderer)return;
 const r=dragonSideCanvas.getBoundingClientRect();
 if(r.width>0&&r.height>0){
  dragonSideRenderer.setSize(r.width,r.height,false);
  dragonSideCamera.aspect=r.width/r.height;dragonSideCamera.updateProjectionMatrix();
 }
}
function disposeDragonModel(){
 if(!dragonModel)return;
 dragonSideScene.remove(dragonModel);
 dragonModel.traverse(o=>{o.geometry?.dispose();if(o.material){const m=Array.isArray(o.material)?o.material:[o.material];m.forEach(x=>x.dispose())}});
 dragonModel=null;
}
function updateDragon3D(){
 setupDragonSide();disposeDragonModel();
 dragonModel=dragonStage()==='egg'?buildEgg3D():buildDragon3D(dragonStage());
 dragonModel.position.set(0,-.1,0);dragonSideScene.add(dragonModel);
 updateDragonSideSize();
}
// Every correct answer advances one of 100 distinct visual states.
const DRAGON_QUIZ=[["き","🌳"],["りんご","🍎"],["みかん","🍊"],["いちご","🍓"],["くるま","🚗"],["たいよう","☀️"],["ねこ","🐈"],["いぬ","🐕"],["ぞう","🐘"],["うさぎ","🐇"],["ばなな","🍌"],["ぱん","🍞"],["さかな","🐟"],["とり","🐦"],["くま","🐻"],["かさ","☂️"],["くつ","👟"],["ほん","📚"],["いえ","🏠"],["はな","🌸"],["ほし","⭐"],["つき","🌙"],["たまご","🥚"],["とまと","🍅"],["にんじん","🥕"],["すいか","🍉"],["ぶどう","🍇"],["かめ","🐢"],["さる","🐒"],["ぱんだ","🐼"],["ぼうし","🧢"],["でんしゃ","🚃"],["ひこうき","✈️"],["ふね","🚢"],["ばす","🚌"],["きりん","🦒"],["らいおん","🦁"],["とら","🐯"],["うし","🐄"],["うま","🐎"],["ぶた","🐖"],["ひつじ","🐑"],["きつね","🦊"],["りす","🐿️"],["ぺんぎん","🐧"],["かえる","🐸"],["へび","🐍"],["わに","🐊"],["いるか","🐬"],["くじら","🐳"],["かに","🦀"],["たこ","🐙"],["えび","🦐"],["ちょうちょ","🦋"],["はち","🐝"],["きのこ","🍄"],["ぶろっこりー","🥦"],["きゅうり","🥒"],["なす","🍆"],["たまねぎ","🧅"],["じゃがいも","🥔"],["とうもろこし","🌽"],["れもん","🍋"],["もも","🍑"],["さくらんぼ","🍒"],["ぱいなっぷる","🍍"],["おにぎり","🍙"],["ごはん","🍚"],["ぷりん","🍮"],["くっきー","🍪"],["どーなつ","🍩"],["ぴざ","🍕"],["はんばーがー","🍔"],["すし","🍣"],["らーめん","🍜"],["ぎゅうにゅう","🥛"],["すぷーん","🥄"],["ふぉーく","🍴"],["はさみ","✂️"],["えんぴつ","✏️"],["かばん","🎒"],["りぼん","🎀"],["ぼーる","⚽"],["ふうせん","🎈"],["たいこ","🥁"],["ぴあの","🎹"],["しょうぼうしゃ","🚒"],["ぱとかー","🚓"],["きゅうきゅうしゃ","🚑"],["しんかんせん","🚄"],["ろけっと","🚀"],["へりこぷたー","🚁"],["しんごう","🚦"],["ゆきだるま","⛄"],["にじ","🌈"],["かみなり","⚡"],["ひまわり","🌻"],["ちゅーりっぷ","🌷"],["くりすますつりー","🎄"],["らっぱ","🎺"]];
const DRAGON_ALIASES={'き':['木'],'りんご':['リンゴ'],'みかん':['ミカン'],'いちご':['イチゴ'],'くるま':['車','ぶーぶー'],'たいよう':['太陽','おひさま'],'らっぱ':['ラッパ','トランペット'],'ぱせり':['パセリ']};
function dragonDifficulty(){return petLevel<30?0:petLevel<65?1:2}
function dragonSpeechKey(v){return kana(normalize(v)).replace(/ー/g,'').replace(/っ/g,'つ')}
function dragonSpeechMatch(v){
 const a=dragonSpeechKey(v),e=dragonSpeechKey(dragonQuestion);if(!a)return false;
 const aliases=[dragonQuestion,...(DRAGON_ALIASES[dragonQuestion]||[])].map(dragonSpeechKey);
 if(aliases.some(x=>a===x||(x.length>=2&&a.includes(x)&&a.length<=x.length+5)))return true;
 if(a.length>=3&&e.length>=3&&Math.abs(a.length-e.length)<=1){let misses=Math.abs(a.length-e.length);for(let i=0;i<Math.min(a.length,e.length);i++)if(a[i]!==e[i])misses++;if(misses<=1)return true}
 return false;
}
let dragonQuestion='',dragonPhase='question',dragonTimer=null,dragonLast='',dragonFeedback='',dragonWrong=0;
function dragonGrowthLabel(n){
 const milestones=['たまごに ひび','あかちゃん たんじょう','おめめ ぱっちり','あしと つめ','ながい しっぽ','つのが のびる','キラキラ うろこ','ちいさな つばさ','つばさが ひろがる','ぱたぱた はばたく','おおきく ジャンプ','ふわっと うかぶ','はじめて とんだ','そらで くるり','たかく とべた','はやく とべる','ひかる はなさき','ちいさな ひばな','ちいさな ほのお','つよい ほのお','おおきな つの','りっぱな つめ','ながい つばさ','キラキラの からだ','おおぞらを とぶ'];
 if(n>=100)return 'でんせつの しろがねドラゴン！';
 return milestones[Math.min(24,Math.floor((Math.max(1,n)-1)/4))]+'！';
}
function nextDragonQuestion(){
 if(playMode!=='pet')return;
 if(petLevel>=100){dragonPhase='reward';dragonFeedback='100もん クリア！ でんせつの ドラゴン';showGame();setPrompt(dragonFeedback);return}
 dragonPhase='question';dragonFeedback='';dragonWrong=0;
 dragonQuestion=DRAGON_QUIZ[Math.min(99,petLevel)][0];
 dragonLast=dragonQuestion;
 showGame();setPrompt('これは なあに？ こえで こたえてね');
}
function dragonAnswer(w){
 if(playMode!=='pet'||dragonPhase!=='question')return;
 if(!dragonSpeechMatch(w)){
  dragonWrong++;
  if(dragonWrong===1){setPrompt('もういちど ゆっくり いってね');return}
  playTone(190,.19,'sawtooth');setTimeout(()=>playTone(145,.23,'sawtooth'),130);
  dragonFeedback='ぶっぶー！ もういちど';showGame();setPrompt('もういちど いってみよう');return;
 }
 dragonPhase='reward';petLevel=Math.min(100,petLevel+1);
 try{localStorage.setItem(PET_KEY,String(petLevel))}catch{}
 petStatus.textContent='🐲 '+petLevel+'/100';
 playTone(784,.13);setTimeout(()=>playTone(1047,.26),135);
 dragonFeedback='ピンポン！ '+dragonGrowthLabel(petLevel);
 showGame();setPrompt(dragonFeedback);
 if(dragonTimer)clearTimeout(dragonTimer);
 dragonTimer=setTimeout(()=>{dragonTimer=null;if(playMode==='pet')nextDragonQuestion()},petLevel===100?4200:2700);
}
// Every question has a dedicated pictogram on a shaded, rotating 3D display.
// Existing hand-built 3D meshes take priority; the rest use a textured 3D relief.
function makeQuizRelief(word){
 const pair=DRAGON_QUIZ.find(x=>x[0]===word),emoji=pair?.[1]||'✨';
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;
 const ctx=canvas.getContext('2d');
 ctx.clearRect(0,0);ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.font='350px "Apple Color Emoji","Noto Color Emoji",sans-serif';
 ctx.fillText(emoji,256,270);
 const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;
 const group=new THREE.Group();
 const back=new THREE.Mesh(new THREE.CylinderGeometry(1.55,1.55,.15,64),mat(0x80b6da,.3,.2));
 back.rotation.x=Math.PI/2;back.position.z=-.15;group.add(back);
 const face=new THREE.Mesh(new THREE.CircleGeometry(1.51,64),new THREE.MeshStandardMaterial({color:0xf6fbff,roughness:.6,metalness:.02}));
 face.position.z=-.05;group.add(face);
 const picture=new THREE.Mesh(new THREE.PlaneGeometry(2.8,2.8),new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide,depthWrite:false}));
 picture.position.z=.06;group.add(picture);
 group.userData.isQuizRelief=true;
 return group;
}
function showDragonQuestionObject(word){
 const hasModel=!!meshType(word);
 if(hasModel){show3D(word);return}
 if(currentObject){scene.remove(currentObject);currentObject.traverse(o=>{o.geometry?.dispose();if(o.material){o.material.map?.dispose();o.material.dispose()}})}
 currentObject=makeQuizRelief(word);currentObject.userData.fitScale=1;
 currentObject.scale.setScalar(.15);scene.add(currentObject);
 $('photo').classList.add('hidden');$('empty').classList.add('hidden');
}
function renderDragon(){
 const question=dragonPhase==='question';
 if(!dragonModel)updateDragon3D();
 if(question){
  if(currentObject)currentObject.visible=true;
  showDragonQuestionObject(dragonQuestion);
  const title=document.createElement('div');title.className='dragon-quiz-question';title.textContent='これ な〜んだ？';gamePanel.append(title);
 }else{
  if(currentObject)currentObject.visible=false;
  updateDragon3D();
  const title=document.createElement('div');title.className='dragon-caption';title.textContent=dragonFeedback;gamePanel.append(title);
 }
 const count=document.createElement('div');count.className='dragon-progress';
 const n=Math.min(100,petLevel);
 count.innerHTML='<span>'+n+' / 100 せいかい · '+dragonGrowthLabel(Math.max(1,n))+'</span><div class="dragon-progress-track"><div style="width:'+n+'%"></div></div>';
 gamePanel.append(count);
 if(question&&dragonFeedback){const fb=document.createElement('div');fb.className='dragon-incorrect';fb.textContent=dragonFeedback;gamePanel.append(fb)}
 if(question){const hint=document.createElement('div');hint.className='dragon-help';hint.textContent='こえで こたえてね';gamePanel.append(hint);const assist=document.createElement('button');assist.type='button';assist.className='dragon-parent-help';assist.textContent='おとなの せいかいボタン';assist.onclick=()=>dragonAnswer(dragonQuestion);gamePanel.append(assist)}
}
function renderGamePanel(){gamePanel.replaceChildren();if(playMode==='quiz'){const h=document.createElement('div');h.className='quiz-title';h.textContent='どれが「'+quizAnswer+'」かな？';gamePanel.append(h);const options=document.createElement('div');options.className='quiz-options';quizChoices.forEach(w=>{const b=document.createElement('button');b.className='quiz-option';b.textContent=localGlyph(w);b.setAttribute('aria-label',w);b.onclick=()=>checkQuiz(w);options.append(b)});gamePanel.append(options)}else if(playMode==='pet'){renderDragon()}else if(playMode==='train'){const d=document.createElement('div');d.className='train-hero';d.textContent='🚂'+'🚃'.repeat(Math.min(trainCount,7));gamePanel.append(d);const p=document.createElement('div');p.textContent=trainCount>=5?'でんしゃが しゅっぱつ！':'ことばを いうと しゃりょうが ふえるよ';gamePanel.append(p)}else if(playMode==='chest'){const d=document.createElement('div');d.className='chest-hero';d.textContent=chestCount>=3?'🎁':'🧰';gamePanel.append(d);const p=document.createElement('div');p.textContent=chestCount>=3?'たからばこが あいた！':'あと '+(3-chestCount)+'こで たからばこが あくよ';gamePanel.append(p)}}
function showGame(){gameLayer.classList.toggle('hidden',playMode==='words');$('nextQuiz').classList.toggle('hidden',playMode!=='quiz');renderGamePanel()}
function newQuiz(){const pool=Object.keys(WORDS).filter(w=>WORDS[w]?.[0]&&w.length<=7&&kana(w)===w&&WORDS[w][0]!=='✦');const seed=['りんご','ぞう','ねこ','いぬ','くるま','ばなな','ぱんだ','らっぱ','ぱせり','うさぎ','すいか','ひこうき'].filter(w=>pool.includes(w));const candidates=seed.length>=3?seed:pool;quizAnswer=candidates[Math.floor(Math.random()*candidates.length)];quizChoices=[quizAnswer];while(quizChoices.length<3&&candidates.length>=3){const w=candidates[Math.floor(Math.random()*candidates.length)];if(!quizChoices.includes(w)&&localGlyph(w)!==localGlyph(quizAnswer)&&!quizChoices.some(x=>localGlyph(x)===localGlyph(w)))quizChoices.push(w)}quizChoices.sort(()=>Math.random()-.5);quizLocked=false;showGame();setPrompt('「'+quizAnswer+'」は どれかな？ こえで こたえてね')}
function checkQuiz(w){if(quizLocked)return;if(normalize(w)===quizAnswer){quizLocked=true;playTone(880,.35);setPrompt('せいかい！ '+quizAnswer+'！');gamePanel.classList.add('celebrate');setTimeout(()=>{gamePanel.classList.remove('celebrate');if(playMode==='quiz')newQuiz()},1250)}else{playTone(240,.12);setPrompt('もういちど！ 「'+quizAnswer+'」は どれかな？')}}
function selectPlayMode(v){if(dragonTimer){clearTimeout(dragonTimer);dragonTimer=null}if(currentObject)currentObject.visible=v!=='pet';if(v!=='pet')disposeDragonModel();playMode=v;const sel=$('playMode');if(sel)sel.value=v;gameLayer.classList.toggle('hidden',v==='words');if(v==='quiz')newQuiz();else if(v==='pet'){nextDragonQuestion()}else{showGame();setPrompt(v==='words'?'ことばを いってね':'ことばを いって あそぼう')}}
function rewardWord(w){if(playMode==='quiz'){checkQuiz(w);return true}if(playMode==='pet'){dragonAnswer(w)}else if(playMode==='train'){trainCount++;trainStatus.textContent='🚂 '+trainCount;showGame();if(trainCount%5===0){gamePanel.classList.add('train-go');setTimeout(()=>gamePanel.classList.remove('train-go'),1500)}}else if(playMode==='chest'){chestCount++;if(chestCount>=3){showGame();playTone(990,.35);setTimeout(()=>{chestCount=0;if(playMode==='chest')showGame()},2000)}else showGame()}return false}
function magicCommand(w){const c={'あか':0xf34343,'あお':0x3899fa,'きいろ':0xffdc37,'みどり':0x45c76a,'ぴんく':0xff8fd0,'むらさき':0xa774ec,'しろ':0xffffff};const cmd=w.replace(/(にしてね|にして|になれ|くして|くなれ)$/,'');if(c[cmd]){magicColor=c[cmd];if(currentObject)currentObject.traverse(o=>{if(o.isMesh&&o.material?.color)o.material.color.setHex(c[cmd])});$('stage').style.setProperty('--magic-tint','#'+c[cmd].toString(16).padStart(6,'0'));setPrompt(cmd+'に なったよ！');playTone(950);return true}if(['おおきくなあれ','おおきくなれ','おおきく','ちいさくなあれ','ちいさくなれ','ちいさく'].includes(w)){const big=w.startsWith('おお');if(currentObject)currentObject.scale.multiplyScalar(big?1.5:.65);const el=$('empty');el.style.transform='scale('+(big?1.45:.7)+')';setPrompt(big?'おおきく なった！':'ちいさく なった！');playTone(big?650:420);return true}if(['とんで','とべ','とんでいけ'].includes(w)){gamePanel.classList.add('train-go');$('empty').classList.add('fly');if(currentObject)currentObject.position.y+=.5;setTimeout(()=>{$('empty').classList.remove('fly');gamePanel.classList.remove('train-go')},1000);setPrompt('とんだ！');return true}return false}

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;function setupRecognition(){if(!SpeechRecognition){$('micState').textContent='音声認識に未対応';setPrompt('このブラウザは音声認識に対応していません。ことばを入力してください');return}recognition=new SpeechRecognition();recognition.lang='ja-JP';recognition.continuous=true;recognition.interimResults=true;recognition.maxAlternatives=5;recognition.onresult=e=>{if(voiceBusy)return;for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal){let alternatives=Array.from(e.results[i]).map(x=>x.transcript.trim()).filter(Boolean);if(playMode==='pet'&&alternatives.length){dragonAnswer(alternatives.find(dragonSpeechMatch)||alternatives[0])}else if(alternatives[0])processWord(alternatives[0])}}};recognition.onstart=()=>{recognitionRunning=true;$('micState').textContent='● きいているよ';$('micState').classList.add('on');$('startBtn').textContent='■ マイクをとめる'};recognition.onend=()=>{recognitionRunning=false;$('micState').textContent='● マイク待機中';$('micState').classList.remove('on');if(listeningWanted&&!voiceBusy)setTimeout(startRecognition,180)};recognition.onerror=e=>{if(['not-allowed','service-not-allowed'].includes(e.error)){listeningWanted=false;$('micState').textContent='マイクの許可が必要';setPrompt('マイクを許可するか、ことばを入力してください')}else if(e.error==='network'){setPrompt('音声認識に接続できません。ことばを入力してください')}}}
function startRecognition(){if(!listeningWanted||voiceBusy||recognitionRunning||!recognition)return;try{recognition.start()}catch{}}function toggleMic(){if(!recognition){setupRecognition();if(!recognition)return}listeningWanted=!listeningWanted;if(listeningWanted){startRecognition()}else{try{recognition.stop()}catch{}$('startBtn').textContent='🎤 マイクをはじめる';$('micState').textContent='● マイク停止'}}
$('startBtn').onclick=toggleMic;$('modeBtn').onclick=()=>$('settings').showModal();$('settingsBtn').onclick=()=>$('settings').showModal();$('libraryBtn').onclick=()=>{const grid=$('libraryGrid');grid.replaceChildren();for(const [w,d] of Object.entries(library)){const cell=document.createElement('div');cell.className='library-item';{const g=document.createElement('div');g.className='glyph';g.textContent=inferredGlyph(w).emoji;cell.append(g)}const label=document.createElement('div');label.textContent=w+' ×'+d.count;cell.append(label);grid.append(cell)}$('libraryCount').textContent=Object.keys(library).length+'こ';$('library').showModal()};$('helpBtn').onclick=()=>$('manual').showModal();document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());$('manualForm').onsubmit=e=>{e.preventDefault();const v=$('manualWord').value;$('manualWord').value='';$('manual').close();processWord(v)};function setMode(v){mode=v;turn=0;previous='';session=[];$('collection').replaceChildren();$('word').textContent='';if(currentObject){scene.remove(currentObject);currentObject=null}$('photo').classList.add('hidden');$('empty').classList.remove('hidden');$('empty').innerHTML='<div class="empty-symbol">✦</div><div>ことばを いってみよう</div><small>「りんご」「ぞう」「くるま」</small>';turnUI();setPrompt(mode==='collect'?'ことばを いってね':'最初の ことばを いってね')}$('mode').onchange=e=>setMode(e.target.value);$('first').onchange=e=>{first=e.target.value;turnUI()};$('tts').onchange=e=>tts=e.target.checked;$('sounds').onchange=e=>sounds=e.target.checked;$('resetSession').onclick=()=>{setMode(mode);$('settings').close()};$('playMode').onchange=e=>selectPlayMode(e.target.value);$('nextQuiz').onclick=()=>newQuiz();petStatus.textContent='🐲 '+Math.min(100,petLevel)+'/100';setupRecognition();turnUI();selectPlayMode('words');

import './style.css'

import * as THREE from 'three';
import gsap from 'gsap';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';


//Initializing scene, camera, and renderer objects
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});
camera.position.set(0,30,28);

//Settings for renderer
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render( scene, camera );

//Ground
const geometry = new THREE.BoxGeometry(100,5,100);
const material = new THREE.MeshStandardMaterial({
  color: 0x00FF66,
  wireframe: false
});
const ground = new THREE.Mesh(geometry, material);
scene.add(ground);

const pointLight = new THREE.PointLight(0xFFFFFF, 100);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);

scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50)
// scene.add(lightHelper);

//Load in background image into texture then add to scene background
const background = new THREE.TextureLoader().load('background.png');
scene.background = background;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;

const controls2 = new TrackballControls(camera, renderer.domElement);
controls2.noRotate = true;
controls2.noPan = true;

controls2.target.set(0,3,10);
controls2.update();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Resizing
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const assetLoader = new GLTFLoader();

const treeURL = new URL('./Assets/Assets_glb/fir_001.glb', import.meta.url);
//Woods far left
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-21,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-18,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,-14);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-21,3,-11);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-15,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
//Woods far right
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(21,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(18,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,-14);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(21,3,-11);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(15,3,-17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
//Woods close left
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-21,3,28);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-18,3,30);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,26);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-21,3,25);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-15,3,29);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
//Woods close right
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(21,3,28);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(18,3,30);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,26);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(21,3,25);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(15,3,29);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});

const tree001URL = new URL('./Assets/Assets_glb/tree_001.glb', import.meta.url);
//Trees far left
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-14,3,-13);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-12,3,-18);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-9,3,-10);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-8,3,-16);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-4,3,-12);
  model.rotation.set(0,-0.523599,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-2,3,-16);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees far right
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(14,3,-13);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(12,3,-18);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,-10);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(8,3,-16);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(4,3,-12);
  model.rotation.set(0,-0.523599,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(2,3,-16);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees close left
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-11,3,31);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-8.4,3,28);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-4,3,31);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-5,3,26);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees close right
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(11,3,31);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(8.4,3,28);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(4,3,31);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(5,3,26);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees close
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0,3,34);
  model.rotation.set(0,3.38594,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(7,3,34);
  model.rotation.set(0,3.38594,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-7,3,34);
  model.rotation.set(0,3.38594,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees on left
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-17,3,-8);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,-4);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-20,3,0);
  model.rotation.set(0,-0.523599,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,5);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-23,3,8);
  model.rotation.set(0,0.122173,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-21,3,12);
  model.rotation.set(0,1.13446,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,16);
  model.rotation.set(0,0.383972,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-19,3,20);
  model.rotation.set(0,1.85005,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-16,3,24);
  model.rotation.set(0,2.51327,0);
}, undefined, function(error) {
  console.error(error);
});
//Trees on right
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(17,3,-8);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,-4);
  model.rotation.set(0,0.785398,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(20,3,0);
  model.rotation.set(0,-0.523599,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,5);
  model.rotation.set(0,1.44862,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(23,3,8);
  model.rotation.set(0,0.122173,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(21,3,12);
  model.rotation.set(0,1.13446,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,16);
  model.rotation.set(0,0.383972,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(19,3,20);
  model.rotation.set(0,1.85005,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(tree001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(16,3,24);
  model.rotation.set(0,2.51327,0);
}, undefined, function(error) {
  console.error(error);
});

const house001URL = new URL('./Assets/Assets_glb/house_001.glb', import.meta.url);
//Tiny houses on left
assetLoader.load(house001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-15,3,2);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(house001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-15,3,18);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
//Tiny houses on right
assetLoader.load(house001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(14.3,3,2);
  model.rotation.set(0,3.1415,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(house001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(14.3,3,18);
  model.rotation.set(0,3.1415,0);
}, undefined, function(error) {
  console.error(error);
});

const house002URL = new URL('./Assets/Assets_glb/house_002.glb', import.meta.url);
//Big house left
assetLoader.load(house002URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-17,3,10);
}, undefined, function(error) {
  console.error(error);
});
//Big house far
assetLoader.load(house002URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0,3,-9);
  model.rotation.set(0,-1.6,0);
}, undefined, function(error) {
  console.error(error);
});
//Big house right
assetLoader.load(house002URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(16.4,3,10);
  model.rotation.set(0,3.1,0);
}, undefined, function(error) {
  console.error(error);
});
//Big house close
assetLoader.load(house002URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0,3,28);
  model.rotation.set(0,1.53,0);
}, undefined, function(error) {
  console.error(error);
});

const house003URL = new URL('./Assets/Assets_glb/house_003.glb', import.meta.url);
//Small houses on left
assetLoader.load(house003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-13,3,-7);
  model.rotation.set(0,-1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(house003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-13,3,25);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
//Small houses on right
assetLoader.load(house003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(12,3,-7);
  model.rotation.set(0,-1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(house003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(12,3,25);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});

const cobbleURL = new URL('./Assets/cobble2.glb', import.meta.url);
//Cobble far middle
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,-5);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,-1);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,3);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,7);
}, undefined, function(error) {
  console.error(error);
});
//Cobble close middle
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,12);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,16);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,20);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-1.4,5,24);
}, undefined, function(error) {
  console.error(error);
});
//Cobble left side
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,-3);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,1);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,5);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,9);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,13);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,17);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(-14.4,5,21);
}, undefined, function(error) {
  console.error(error);
});
//Cobble right side
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,-3);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,1);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,5);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,9);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,13);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,17);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(cobbleURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.rotation.set(1.6, 0.5, 0.5);
  model.scale.set(10, 10, 10);
  model.position.set(11,5,21);
}, undefined, function(error) {
  console.error(error);
});

const alch_chestURL = new URL('./Assets/alchemists_chest.glb', import.meta.url);
//Alch chests
assetLoader.load(alch_chestURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(4,3,-8);
  model.rotation.set(0,1.5708,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(alch_chestURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(15,3,14);
}, undefined, function(error) {
  console.error(error);
});

const stallURL = new URL('./Assets/Assets_glb/stall_001.glb', import.meta.url);
const stall_tableURL = new URL('./Assets/Assets_glb/stall_table_001.glb', import.meta.url);
//Stalls and stall tables on right
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,0);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(10,3,0);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(3,3,0);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(2,3,0);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,10);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(10,3,10);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(3,3,10);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(2,3,10);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,20);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(10,3,20);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(3,3,20);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(2,3,20);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
//Stalls and stall tables on left
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-9,3,0);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-10,3,0);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-3,3,0);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-2,3,0);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-9,3,10);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-10,3,10);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-3,3,10);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-2,3,10);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-9,3,20);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-10,3,20);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stallURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-3,3,20);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(stall_tableURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-2,3,20);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});

const logs001URL = new URL('./Assets/Assets_glb/log_001.glb', import.meta.url);
//Big log pile
assetLoader.load(logs001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,3);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(logs001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-9,3,13);
  model.rotation.set(0,3.14159,0);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(logs001URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(9,3,17);
  model.rotation.set(0,0,0);
}, undefined, function(error) {
  console.error(error);
});

const logs002URL = new URL('./Assets/Assets_glb/log_002.glb', import.meta.url);
//Log with axe
assetLoader.load(logs002URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(14,3,5);
  model.rotation.set(0,0,0);
  model.scale.set(1.5,1.5,1.5);
}, undefined, function(error) {
  console.error(error);
});

const logs003URL = new URL('./Assets/Assets_glb/log_003.glb', import.meta.url);
//Short log pile
assetLoader.load(logs003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(8,3,10);
  model.rotation.set(0,0,0);
  model.scale.set(1.7,1.7,1.7);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(logs003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(10,3,-7);
  model.rotation.set(0,0,0);
  model.scale.set(2,2,2);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(logs003URL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-16,3,12);
  model.rotation.set(0,1.5708,0);
  model.scale.set(2,2,2);
}, undefined, function(error) {
  console.error(error);
});

const cartURL = new URL('./Assets/Assets_glb/cart_001.glb', import.meta.url);
//Cart
assetLoader.load(cartURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-10,3,-7);
  model.rotation.set(0,-1.5708,0);
}, undefined, function(error) {
  console.error(error);
});

const barrelsURL = new URL('./Assets/Assets_glb/barrel_001.glb', import.meta.url);
//Barrells
assetLoader.load(barrelsURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-7,3,5.2);
  model.scale.set(1.5,1.5,1.5);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(barrelsURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-6.2,3,5.3);
  model.scale.set(1.5,1.5,1.5);
}, undefined, function(error) {
  console.error(error);
});
assetLoader.load(barrelsURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-6.5,3,6);
  model.scale.set(1.5,1.5,1.5);
}, undefined, function(error) {
  console.error(error);
});

const craneURL = new URL('./Assets/Assets_glb/crane_001.glb', import.meta.url);
//Crane
assetLoader.load(craneURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-4,3,2.8);
  model.scale.set(1.5,1.5,1.5);
  model.rotation.set(0,-2.26893,0);
}, undefined, function(error) {
  console.error(error);
});

const center_treeURL = new URL('./Assets/Assets_glb/big_fabulous_tree_001.glb', import.meta.url);
//CENTER TREE
assetLoader.load(center_treeURL.href, function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0,3,10);
}, undefined, function(error) {
  console.error(error);
});

document.getElementById("home").addEventListener("click", home);
document.getElementById("tree").addEventListener("click", tree);
document.getElementById("crane").addEventListener("click", crane);
document.getElementById("axe").addEventListener("click", axe);
document.getElementById("chest").addEventListener("click", chest);

function home() {
  camera.position.set(0,30,28);
  controls2.target.set(0,3,10);
  controls2.update();
}

function tree() {
  camera.position.set(-10,8,15);
  controls2.target.set(0,7,10);
  controls2.update();
}

function crane() {
  camera.position.set(-10,6,4);
  controls2.target.set(-4,3,2.8);
  controls2.update();
}

function axe() {
  camera.position.set(7, 6, 8);
  controls2.target.set(14,3,5);
  controls2.update();
}

function chest() {
  camera.position.set(8,7,-5);
  controls2.target.set(4,3,-8);
  controls2.update();
}

function animate() {
  requestAnimationFrame( animate );

  const target = controls.target;
  controls.update();
  // controls2.target.set(target.x, target.y, target.z);
  controls2.update();

  renderer.render( scene, camera );
}
animate();

const tl = gsap.timeline({default: {duration: 1}});
tl.fromTo("nav", {y: "-100%"}, {y: "0%"});






// //function to create and add specified number of 'stars' to the scene
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25,24,24);
//   const material = new THREE.MeshStandardMaterial({});
//   const star = new THREE.Mesh( geometry, material );

//   const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

//   star.position.set(x,y,z);
//   scene.add(star);
// }
// Array(1500).fill().forEach(addStar);
import './style.css';

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer(); // { alpha: true }
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// const geometry = new THREE.SphereGeometry();
// const texture = new THREE.TextureLoader().load('texture.jpg');
// const material = new THREE.MeshBasicMaterial({ map: texture });

// const geometry = new THREE.TorusGeometry();
// const texture = new THREE.TextureLoader().load('texture2.jpeg');
// const material = new THREE.MeshBasicMaterial({ map: texture });

const object = new THREE.Mesh( geometry, material );
scene.add( object );

camera.position.z = 5;

function animate() {
	// requestAnimationFrame( animate );

  // object.rotation.x += 0.01;
  // object.rotation.y += 0.01;
  // object.rotation.z += 0.01;

	renderer.render( scene, camera );
}

animate();
import * as THREE from './node_modules/three/build/three.module.js';

/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();*/




// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Création du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création d'une lumière ambiante
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Création d'une lumière directionnelle
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Création d'un plan pour afficher du texte
const textSize = 1;
const text = "Victoire !";

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
context.font = `${textSize * 30}px Arial`;
const textWidth = context.measureText(text).width;
const textHeight = textSize * 30;
canvas.width = textWidth;
canvas.height = textHeight;
context.font = `${textSize * 30}px Arial`;
context.fillStyle = 'white';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText(text, canvas.width / 2, canvas.height / 2);
const texture = new THREE.CanvasTexture(canvas);
texture.needsUpdate = true;
const textMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
const textMesh = new THREE.Mesh(new THREE.PlaneGeometry(textWidth / 100, textHeight / 100), textMaterial);
scene.add(textMesh);

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    // Animation de rotation du plan
    textMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Lancement de l'animation
animate();
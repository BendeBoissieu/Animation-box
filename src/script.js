import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CubeReflectionMapping } from 'three'

var box;
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objet
const loader = new GLTFLoader();
// Load a glTF resource

loader.load(
	// resource URL
	'box.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        box = gltf.scene
        box.scale.set(1,1,1)
		scene.add( box );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// Load a glTF resource
var lead;
loader.load(
	// resource URL
	'lead.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        lead =  gltf.scene
        lead.position.set(0,0.015, 0 )
        // gui.add(lead.position, 'x').min(-2).max(2).step(0.01)
        // gui.add(lead.position, 'y').min(-2).max(2).step(0.01)
        // gui.add(lead.position, 'z').min(-2).max(2).step(0.01)
        lead.scale.set(1,1,1)
		scene.add( lead );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var mug;
loader.load(
	// resource URL
	'mug.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        mug =  gltf.scene
        mug.position.set(-0.27,0.01, 0.1 )
        mug.scale.set(1,1,1)
		scene.add( mug );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var notebook;
loader.load(
	// resource URL
	'notebook.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        notebook =  gltf.scene
        notebook.rotation.set(0.1,-1.55,0 )
        notebook.position.set(0.07,0.05, 0.05 )
        notebook.scale.set(0.08,0.08,0.08)
        // gui.add(notebook.position, 'x').min(-20).max(20).step(0.01)
        // gui.add(notebook.position, 'y').min(-20).max(20).step(0.01)
        // gui.add(notebook.position, 'z').min(-20).max(20).step(0.01)
		scene.add( notebook );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var cloth;
loader.load(
	// resource URL
	'folded_cloth.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        cloth =  gltf.scene
        cloth.rotation.set(0.1,6.27,0 )
        cloth.position.set(-0.04,-0.01, 0.16)
        cloth.scale.set(0.7,.7,0.7)
		scene.add( cloth );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// const geometry = new THREE.SphereGeometry( 0.3, 32, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const sphere = new THREE.Mesh( geometry, material );
// sphere.position.set(0.29,-0.58, -0.14 )
// gui.add(sphere.position, 'x').min(-20).max(20).step(0.01)
// gui.add(sphere.position, 'y').min(-20).max(20).step(0.01)
// gui.add(sphere.position, 'z').min(-20).max(20).step(0.01)
// scene.add( sphere );

// Lights
//const light = new THREE.AmbientLight( 0xfaf7f7 ); // soft white light
//scene.add( light );
const pointLight = new THREE.PointLight(0xfcfcdf, 1.85)
pointLight.position.x = -1.88
pointLight.position.y = 6.36
pointLight.position.z = 5.06
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xfcfcdf, 1.85)
pointLight2.position.x = 3.76
pointLight2.position.y = 2.89
pointLight2.position.z = 5.06
// gui.add(pointLight2.position, 'x').min(-20).max(20).step(0.01)
// gui.add(pointLight2.position, 'y').min(-20).max(20).step(0.01)
// gui.add(pointLight2.position, 'z').min(-20).max(20).step(0.01)
// gui.add(pointLight2, 'intensity').min(-2).max(5).step(0.01)
scene.add(pointLight2)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.64
camera.position.z = 0.46
camera.rotation.x = -1
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
 const clock = new THREE.Clock()

//  const controls = new OrbitControls(camera, renderer.domElement);
//  controls.target.set(0, 0.5, 0);
//  controls.minPolarAngle = 0
//  controls.maxPolarAngle = 1.71
//  controls.minDistance = 1.2;
//  controls.maxDistance = 3.9;
//  controls.update();
//  controls.enablePan = false;
//  controls.enableDamping = true;

 const animate = () => {
     const elapsedTime = clock.getElapsedTime()

     // Update Orbital Controls
     // controls.update()

     // Render
     renderer.render(scene, camera)

     // Call tick again on the next frame
     window.requestAnimationFrame(animate)

     const currentTimeline = window.pageYOffset / 3000

     const ry = currentTimeline

     var rotationBoxY = 0.0
     var notebookX
     var notebookRotationX
     var mugX
    //  lead.rotation.set(ry, ry/2, 0)
    //  box.rotation.set(ry, ry/2, 0)
     lead.position.set(0,0.02 + 1.2*ry, 0)
     //lead.position.set(0,3, 0)
     box.position.set(0,-ry, 0)
     //camera.lookAt(lead);
     if ( window.pageYOffset > 200) {
        const ry2 = (window.pageYOffset - 200) / 3000

        rotationBoxY = 1.685*ry2
        notebookX = 0.07 + 2*ry2
        mugX = -0.27 - 0.01*ry2
        notebookRotationX = 0.1 + 0.8*ry2
        lead.rotation.set(0.3*ry2,rotationBoxY, 0 )
        box.rotation.set(0.3*ry2,rotationBoxY, 0 )
        cloth.position.set(-0.04- 0.05*ry ,-0.01 - 0.2*ry,  0.16 )
        cloth.rotation.set(0.1 -0.6*ry2 ,6.27,  0 )
        notebook.position.set(notebookX- 1.7*ry2,0.05 - 0.2*ry2, 0.05+ 0.2*ry2 )
        notebook.rotation.set(notebookRotationX,-1.55, notebook.rotation.z )
        notebook.scale.set(0.08+0.01*ry2,0.08+0.01*ry2,0.08+0.01*ry2)
        mug.position.set(mugX, 0.01+0.1*ry2 , 0.1+0.4*ry2)
        mug.rotation.set(-1.1*ry2 ,1*ry2, 0)
        camera.position.set(0, 0.64-0.4*ry2,0.46)
     }


     //camera.lookAt();
 }
 
 animate()
//  cloth.rotation.set(0.1,6.27,0 )
//  cloth.position.set(-0.04,-0.01, 0.16)

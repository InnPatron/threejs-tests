var THREE = require('three');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//var camera = new THREE.OrthographicCamera(window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var spriteMap = new THREE.TextureLoader().load("image/test.jpg");
var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
spriteMaterial.sizeAttenuation = false;
var sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(0.1, 0.1, 1);

var sprite2 = new THREE.Sprite( spriteMaterial.clone() );
sprite2.scale.set(0.1, 0.1, 1);

sprite.position.x = 0;
sprite.position.y = 0;
sprite.position.z = 0;
scene.add( sprite );

sprite2.position.x = 0;
sprite2.position.y = -0.5;
sprite2.position.z = -1;

scene.add( sprite2 );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

//camera.lookAt(sprite);

var foo = false;
function animate() {
	requestAnimationFrame( animate );

  if (sprite2.material.rotation < 3.1) {
    sprite2.material.rotation += 0.1;
  } else {
    if (foo == false) {
      sprite2.material = sprite.material.clone();
    }
  }

	renderer.render( scene, camera );
}
animate();

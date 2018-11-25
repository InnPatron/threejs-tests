function threejs() {
  var THREE = require('three');

  var scene = new THREE.Scene();
  //var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var camera = new THREE.OrthographicCamera(window.innerWidth / window.innerHeight, 0.1, 1000);

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
  camera.position.z = -5;

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
}

function matterjs() {
  var MATTER = require('matter-js');
  // module aliases
  var Engine = MATTER.Engine,
      Render = MATTER.Render,
      World = MATTER.World,
      Bodies = MATTER.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
      element: document.body,
      engine: engine
  });

  // create two boxes and a ground
  var boxA = Bodies.rectangle(400, 400, 80, 80);
  var boxB = Bodies.rectangle(450, 450, 80, 80);
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

function matterthree() {
  var THREE = require('three');
  var MATTER = require('matter-js');

  // Set up threejs
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // Set up threejs object
  var spriteMap = new THREE.TextureLoader().load("image/test.jpg");
  var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
  spriteMaterial.sizeAttenuation = false;

  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set(0.1, 0.1, 1);

  sprite.position.x = 2;
  sprite.position.y = 8;
  sprite.position.z = 0;
  scene.add( sprite );

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 40;

  camera.lookAt(new THREE.Vector3(0, 0, 1));

  
  var groundGeometry = new THREE.BoxGeometry( 20, 5, 0.1 );
  var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var ground = new THREE.Mesh( groundGeometry, groundMaterial );
  ground.position.y = -4;
  scene.add( ground );

  
  // Matter module aliases
  var Engine = MATTER.Engine,
      Render = MATTER.Render,
      World = MATTER.World,
      Bodies = MATTER.Bodies;

  // create an engine
  var engine = Engine.create();

  // Create collision box for sprite
  var spriteCollider = Bodies.rectangle(2, -8, 10, 10);
  spriteCollider.restitution = 0;
  var groundCollider = Bodies.rectangle(0, 4, 20, 2, { isStatic: true });
  groundCollider.restitution = 0;

  // add all of the bodies to the world
  World.add(engine.world, [spriteCollider, groundCollider]);

  // run the engine
  Engine.run(engine);

  /*
  var render = Render.create({
      element: document.body,
      engine: engine
  });
  */

  // Render.run(render);

  function animate() {
    requestAnimationFrame( animate );

    // sprite.position.x = spriteCollider.position.x;
    sprite.position.y = -spriteCollider.position.y;

    // console.log(spriteCollider.position.y);
    renderer.render( scene, camera );
  }
  
  animate();
}

// threejs();
// matterjs();
matterthree();

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

let counterNumber = Scene.root.find('number');
let scoreNumber = Patches.getScalarValue('score');
counterNumber.text = scoreNumber.toString();

let timerNumber = Scene.root.find('time');
let time = Patches.getScalarValue('timer');
timerNumber.text = time.toString();

// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');


// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');

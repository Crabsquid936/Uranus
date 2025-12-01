// Example: load the sample cube.obj into a Three.js scene
// Requires three and the OBJLoader from examples/jsm/loaders
// Usage: import { loadSampleModel } from './loaders/objLoaderExample.js';
//        loadSampleModel(scene);

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export function loadSampleModel(scene, onLoaded = () => {}, onProgress = null, onError = console.error) {
  const loader = new OBJLoader();
  loader.load(
    '/assets/models/cube.obj', // path relative to your public/ root
    (object) => {
      // Apply a simple material so meshes render nicely
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x9999ff, metalness: 0.1, roughness: 0.8 });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Optionally center / scale
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3()).length();
      if (size > 0) {
        const scale = 2.0 / size; // scale cube to roughly fit
        object.scale.setScalar(scale);
      }

      scene.add(object);
      onLoaded(object);
    },
    onProgress,
    onError
  );
}

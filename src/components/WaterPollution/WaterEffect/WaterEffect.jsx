import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

// GLSL Shader for the water effect
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform sampler2D uTexture;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    uv.y += sin(uv.x * 10.0 + uTime) * 0.05;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

const WaterEffectMesh = () => {
  const material = useRef();
  const loader = new TextureLoader();
  const texture = loader.load('/path-to-your-image.jpg'); // Replace with your image path

  useFrame(({ clock }) => {
    if (material.current) {
      material.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[5, 3, 32, 32]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: texture },
        }}
      />
    </mesh>
  );
};

const WaterEffect = () => {
  return (
    <Canvas>
      <WaterEffectMesh />
    </Canvas>
  );
};

export default WaterEffect;

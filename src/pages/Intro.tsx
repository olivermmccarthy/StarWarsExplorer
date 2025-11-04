import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

// Placeholder model — you can replace this with any GLTF/GLB
function PlaceholderModel() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color="#ffe81f" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

// Example model loader (uncomment + point to a GLTF file once you have one)
function StarWarsModel() {
  const { scene } = useGLTF('/models/helmet.glb');
  return <primitive object={scene} scale={10} />;
}

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="intro-container">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100vh', background: 'black' }}
      >
        <ambientLight intensity={50} />
        <Environment files="/hdri/kloppenheim_02_2k.exr" background={false} />
        <pointLight position={[5, 5, 5]} intensity={200} />
        <Stars radius={300} depth={60} count={8000} factor={7} fade />

        <Suspense fallback={null}>
          {/* Replace <PlaceholderModel /> with <StarWarsModel /> when ready */}
          <StarWarsModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      <div className="intro-box">
        <h1>STAR WARS EXPLORER</h1>
        <button onClick={() => navigate('/home')}>MAIN MENU</button>
        <p className="p-small">(PS: Use the mouse to spin the view...)</p>
      </div>
    </div>
  );
}

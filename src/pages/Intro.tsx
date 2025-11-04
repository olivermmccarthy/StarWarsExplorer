import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useProgress, Html } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loader-container">
        <h1 style={{ color: 'white' }}>Loading...</h1>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p style={{ color: 'white' }}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}

function StarWarsModel() {
  const { scene } = useGLTF('/models/helmet.glb');
  return <primitive object={scene} scale={10} />;
}

export default function Intro() {
  const navigate = useNavigate();
  // Get progress for the entire Canvas
  const { progress } = useProgress();

  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    // Once progress hits 100%, set the loaded state to true
    if (progress === 100) {
      const timer = setTimeout(() => setIsModelLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const loadedClass = isModelLoaded ? 'loaded' : '';

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

        <Suspense fallback={<Loader />}>
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

      <div className={`instruction-box intro-content ${loadedClass}`}>
        <p className="p-small">Use the mouse to spin the view.</p>
      </div>
      <div className={`intro-box intro-content ${loadedClass}`}>
        <h1 className="sw-font">STAR WARS</h1>
        <h2>EXPLORER</h2>
        <button onClick={() => navigate('/home')}>MAIN MENU</button>
      </div>
    </div>
  );
}

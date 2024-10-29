import { useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Mesh } from 'three'
import { EarthWithMoon } from './components/planets/EarthWithMoon';
import { Sun } from './components/planets/Sun';
import { Mars } from './components/planets/Mars';
import { Jupiter } from './components/planets/Jupiter';
import { Mercury } from './components/planets/Mercury';
import { Pluto } from './components/planets/Pluto';
import { Saturn } from './components/planets/Saturn';
import { Uranus } from './components/planets/Uranus';
import { Venus } from './components/planets/Venus';
import { Background } from './components/common/Background';

function App() {
  
  const cameraRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  const sunRef = useRef<Mesh>(null);


  return (
    <div id="canvas-container" style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          fov={220}
          position={[0, 0, 10]}
        />
        <OrbitControls ref={controlsRef} enableZoom={true} />
      
        <ambientLight intensity={0.5} /> 

        <Background />
        
      
        <Sun ref={sunRef} />

        <EarthWithMoon sunRef={sunRef} />

        <Mercury sunRef={sunRef} />

        <Venus sunRef={sunRef} />

        <Mars sunRef={sunRef} />

        <Jupiter sunRef={sunRef} />

        <Saturn sunRef={sunRef} />

        <Uranus sunRef={sunRef} />

        <Pluto sunRef={sunRef} />

      </Canvas>
    </div>
  );
}

export default App;

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import model from "./scene.glb";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Device = () => {
  const gltf = useLoader(GLTFLoader, model);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
      />
      <mesh>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <primitive
          object={gltf.scene}
          scale={isMobile ? 2 : 4}
          position={isMobile ? [0, 0, 0] : [0, 0, 0]}
          rotation={[1, 0, 0]}
        />
      </mesh>
    </Suspense>
  );
};

const DeviceModel = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Device />
      <Preload all />
    </Canvas>
  );
};
export default DeviceModel;

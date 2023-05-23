import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, useGLTF } from "@react-three/drei";
import styles from "./RotatingModelViewer.module.css";
import { IModel } from "../../../shared/types/IModel";


function RotatingModelViewer({ model }: { model: IModel }) {


  const Model = () => {
    const gltf = useGLTF(model.path);
    const { camera } = useThree();
    const modelRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
      if (gltf) {
        gltf.scene.traverse((o) => {
          o.castShadow = true;
          o.receiveShadow = true;
        });
        gltf.scene.scale.set(model.scale, model.scale, model.scale);
      }
    }, [gltf]);

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
        
        camera.lookAt(modelRef.current.position);
      }
    });

    return (
      <primitive object={gltf.scene} ref={modelRef} castShaddows />
    );
  };

  return (
    <div className={styles.threeDModelComponent}>
      <Canvas
        shadows
      >
          <ambientLight intensity={.5} />
          <directionalLight
            position={[0, 100, 100]}
            intensity={0.5}
            castShadow
          />
          <OrthographicCamera makeDefault position={[0, 2, 15]} zoom={70} />
          <group>
            <Model />
            <mesh receiveShadow position={[0, model.pedistalPositionY, 0]}>
              <cylinderBufferGeometry args={[4, 4, 0.5, 64]} />
              <meshLambertMaterial color="#515054" />
            </mesh>
          </group>
      </Canvas>
    </div>
  );
}

export default RotatingModelViewer;

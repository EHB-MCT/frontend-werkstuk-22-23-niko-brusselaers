import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, useGLTF } from "@react-three/drei";
import styles from "./RotatingModelViewer.module.css";
import { IModel } from "../../../types/IModel";

function RotatingModelViewer({ chapterModel }: { chapterModel: IModel }) {
  const Model = () => {
    const model = useGLTF(chapterModel.path);
    const { camera } = useThree();
    const modelRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
      if (model) {
        model.scene.traverse((o) => {
          o.castShadow = true;
          o.receiveShadow = true;
        });
        model.scene.scale.set(chapterModel.scale, chapterModel.scale, chapterModel.scale);
      }
    }, [model]);

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
        
        camera.lookAt(modelRef.current.position);
      }
    });

    return (
      <primitive object={model.scene} ref={modelRef} castShaddows />
    );
  };

  return (
    <div className={styles.threeDModelComponent}>
      <Canvas
        shadows={true}
        camera={{ position: [5, 3, 5] }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={.5} />
          <directionalLight
            position={[0, 100, 100]}
            intensity={0.5}
            castShadow
          />
          <OrthographicCamera makeDefault position={[0, 2, 15]} zoom={50} />
          <group>
            <Model />
            <mesh receiveShadow position={[0, -0.125, 0]}>
              <cylinderBufferGeometry args={[4, 4, chapterModel.pedistalPositionY, 64]} />
              <meshLambertMaterial color="#515054" />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default RotatingModelViewer;

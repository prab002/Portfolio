import { Canvas } from "@react-three/fiber";
import { Mac } from "./Mac";
import { Suspense, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as web } from "@react-spring/web";

export function PrabMac() {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });
  const containerStyle = {
    width: "100%",
    height: "100vh",
    background: props.open.to([0, 0.9], ["#1d1d1b", "#cbc6bf"]),
    borderRadius: "50%",
    backgroundSize: "cover",
  };

  return (
    <>
      <web.main style={containerStyle}>
        <web.h1
          style={{
            transform: props.open.to(
              (o) =>
                `translate3d(${o === 1 ? "-100%" : "40%"},${
                  0 * 400 + 150
                }px, 0px)`
            ),
            fontFamily: "sans-serif",
            fontSize: "2em",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          Tap on Laptop
        </web.h1>
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            >
              <Mac open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </web.main>
    </>
  );
}

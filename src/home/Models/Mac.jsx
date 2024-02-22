import React, { useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import { MacScreenWrapper } from './Mac.styled';
import { AboutMeMac } from '../AboutMeMac/AboutMeMac';
import { a as three } from '@react-spring/three'

export function Mac({ open, hinge, ...props}) {
  const refs=useRef();
  const { nodes, materials } = useGLTF('/mac-draco.glb')

  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    refs.current.rotation.x = THREE.MathUtils.lerp(refs.current.rotation.x,open ? Math.cos(t / 2) / 20 + 0.25: 0, 0.1)
    refs.current.rotation.y = THREE.MathUtils.lerp(refs.current.rotation.y,open ? Math.sin(t / 4) / 20 + 0.25 : 0, 0.1)
    refs.current.rotation.z = THREE.MathUtils.lerp(refs.current.rotation.z,open ? Math.sin(t / 8) / 20 : 0, 0.1)
    refs.current.position.y = THREE.MathUtils.lerp(refs.current.position.y,open ? (-2 + Math.sin(t / 2)) / 3 : -4.3, 0.1)
  })
  return (
    <group ref={refs} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube008.geometry} material={materials.aluminium} />
          <mesh geometry={nodes.Cube008_1.geometry} material={materials['matte.001']} />
          <mesh geometry={nodes.Cube008_2.geometry} />
          {/* changing mac screen from here */}
          <Html rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
            <MacScreenWrapper>
              <AboutMeMac/>
            </MacScreenWrapper>
          </Html>
        </group>
      </three.group>
      <mesh geometry={nodes.keyboard.geometry} material={materials.keys} position={[1.793, 0, 3.451]} />
      <group position={[0, -0.1, 3.394]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.aluminium} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.trackpad} />
      </group>
      <mesh geometry={nodes.touchbar.geometry} material={materials.touchbar} position={[0, -0.027, 1.201]} />
    </group>
  )
}

useGLTF.preload('/mac-draco.glb')

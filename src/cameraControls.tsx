import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function CameraControls() {
  const controlsRef = useRef<any>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        setMouse({ x, y })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  useFrame(() => {
    if (!isMobile && controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(-mouse.x * Math.PI * 0.2) // rotación horizontal
      controlsRef.current.setPolarAngle(Math.PI / 2.5 + mouse.y * 0.5) // vertical
      controlsRef.current.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={!isMobile}
      autoRotate={isMobile}
      autoRotateSpeed={-11}
      makeDefault
    />
  )
}

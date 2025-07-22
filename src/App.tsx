import "./styles/app.css";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import room from "./assets/ortodoncia.jpg";
import {CameraControls } from './cameraControls'
import { useState, useEffect } from 'react'
import { AppBar } from "./components/appBar";
import { Footer } from "./components/footer";

export default function App() {
  const targetDate = new Date(new Date().getFullYear(), 7, 29, 14, 59, 59)
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const content=(
    <div className="bg-[var(--color-two)] w-full h-screen relative flex justify-center items-center overflow-hidden">
        <img
          src={room}
          alt="consultorio"
          className="object-cover w-full blur-sm z-0 absolute"
        />
        <div className="absolute flex flex-col items-center w-74
      ">
          <Canvas
            className="absolute"
            camera={{ position: [0, 0, 1], fov: 20 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Environment preset="sunset" />
            <Model />
            <CameraControls />
          </Canvas>
          <span className="font-[var(--font)] text-shadow-md text-white text-lg text-balance text-center bg-black/23 rounded-xl px-4 py-2  ">
             Faltan {days} días, {hours} horas, {minutes} minutos, {seconds} segundos
          </span>
        </div>
      </div>
  )

  return (
    <>
      <AppBar/>
      {content}
      <Footer/>
    </>
  );
}

function Model() {
  const gltf = useGLTF("/diente.glb");
  return <primitive object={gltf.scene} scale={0.6} />;
}

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime()

  const seconds = Math.max(Math.floor((total / 1000) % 60), 0)
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0)
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0)
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0)

  return { days, hours, minutes, seconds }
}
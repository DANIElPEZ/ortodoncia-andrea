import { FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <div className="flex flex-col bg-[var(--color-three)] px-12 py-6 text-white">
      <div className="flex items-start flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col">
          <span className="font-semibold">Dirección</span>
          <span className="text-balance mt-1">
            Cl. 33 #33-34, Local 209, Villavicencio, Meta
          </span>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0">
          <span className="font-semibold">Redes sociales</span>
          <a className="mt-1" href="https://www.instagram.com/draandreaarias/" target="_blank">
            <FiInstagram size={32}/>
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-balance">
        @2025 Todos los derechos reservados
      </div>
    </div>
  );
}

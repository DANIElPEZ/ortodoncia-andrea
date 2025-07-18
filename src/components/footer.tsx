export function Footer() {
  return <div className="flex flex-col h-40 bg-[var(--color-three)] px-12 py-6 justify-between z-10 text-white">
     <div className="flex flex-1 items-center">
        <div>
          <span className="block font-semibold">Dirección</span>
          <span>Villavicencio: Cra 34 Cl 33 #33-34, Torre 33</span>
        </div>
      </div>
     <div className="text-center">
        <span>Todos los derechos reservados</span>
      </div>
  </div>;
}

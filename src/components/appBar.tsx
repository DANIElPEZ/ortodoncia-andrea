import logo from './../assets/logo.jpg'

export function AppBar(){
     return(
     <div className="w-full h-16 bg-[var(--color-one)] px-7 flex items-center z-10">
          <img src={logo} alt="logo" className='h-15 rounded-full mask-top' />
          <span className="font-[var(--font)] text-[1.4rem] font-medium">Dra. Andrea Arias</span>
     </div>
     )
}
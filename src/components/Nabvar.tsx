
import Logo from '../assets/logo 2.png'

const Nabvar = () => {
  return (
    
<nav className="fixed z-50 border-gray-200 bg-[#0d0d0d67] w-full mb-8">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={Logo} alt="logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-[#FFFFFF]">
        <li>
          <a href="#hero" className="block py-2 pl-3 font-light pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">INICIO</a>
        </li>
        <li>
          <a href="#nosotros" className="block py-2 pl-3 font-light pr-4 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">NOSOTROS</a>
        </li>
        <li>
          <a href="#valores" className="block py-2 pl-3 font-light pr-4 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">VALORES</a>
        </li>
        <li>
          <a href="#shows" className="block py-2 pl-3 font-light pr-4 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">SHOWS</a>
        </li>
        <li>
          <a href="#contactanos" className="block py-2 pl-3 font-light pr-4 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">CONTÁCTANOS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nabvar
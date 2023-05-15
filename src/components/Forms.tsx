import "./valores.css";

const Forms = () => {
  return (
    <section id="contactanos" className="forms">
      <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mt-12 h-auto lg:mt-0">
              <h2
                className="text-[white] text-7xl font-normal text-start"
                style={{
                  fontFamily: "Dr Sugiyama",
                }}
              >
                Contáctanos
              </h2>
              <div className="space-y-1">
                  <h2 className="font-bold text-white">Escríbenos:</h2>
                <span className="flex ml-3 text-white items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="text-white">
                    armandoromeroesmexico@gmail.com
                  </span>
                </span>
                  <h2 className="font-bold text-white">Llámanos:</h2>
                <span className="flex ml-3 text-white items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-white">+52 55 9147 5497</span>
                </span>
              </div>
            </div>
            <div className="mb-12 max-sm:mb-24 lg:mb-0">
              <h3 className="mb-6 text-xl text-white ml-4 font-normal">Escríbenos</h3>
              <div className="block rounded-lg shadow-lg bg-black px-6 py-12 md:px-12">
                <form>
                  <div className="relative mb-6">
                    <label htmlFor="name" className="text-sm sr-only">
                      Nombres
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Nombres"
                      className="w-full rounded-md p-4"
                    />
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="email" className="text-sm sr-only">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Correo Electrónico"
                      className="w-full rounded-md p-4"
                    />
                  </div>

                  <div className="relative mb-6">
                    <textarea rows={3} required className="text-sm sr-only">
                      Mensaje
                    </textarea>
                    <input
                      type="text"
                      placeholder="Mensaje"
                      className="w-full rounded-md p-8"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-block ring-[black] ring-current w-48 rounded bg-[#353535] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-2xl text-white"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;

import Hero2 from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="px-6 pt-12 md:px-12 bg-[#0D0D0D] text-[#353535] lg:text-left"
    >
      <div className="container mx-auto xl:px-32">
        <section className=" text-gray-100">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold text-[#AE812D] leading-none sm:text-6xl">
                Hacemos que
                <br className="hidden md:block" />
                cada momento
                <br />
                sea
                <br />
                <span
                  className="text-[#FFF]"
                  style={{
                    fontFamily: "Dr Sugiyama",
                  }}
                >
                  Especial
                </span>
              </h1>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#contactanos"
                  className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
                >
                  Contáctanos
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={Hero2}
                alt=""
                className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

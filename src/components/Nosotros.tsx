import Sombrero from "../assets/sombrero.png";
import Decorative from "../assets/decorative.png";

const Nosotros = () => {
  return (
    <div id="nosotros" className="text-[#353535] lg:text-left" style={{
        "backgroundImage": "linear-gradient( 107.8deg,  rgba(255,255,255,1) 37%, rgba(174,129,45,1) 37.2% )"
    }}>
      <div className="container mx-auto xl:px-32">
        <section className="text-gray-100">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={Sombrero}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            
            <div className="flex text-[#0D0D0D] flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <div className="flex flex-col justify-center item-center mb-6" style={{"alignItems": "center"}}>
                <h2
                  className="text-[white] text-7xl font-normal text-start"
                  style={{
                    fontFamily: "Dr Sugiyama",
                  }}
                >
                  Nosotros
                </h2>
                <img className="w-1/2" src={Decorative} alt="" />
              </div>
              <p className="text-xl text-center">
                La música de mariachi a lo largo de los años sigue siendo la más
                representativa de nuestro 🇲🇽 México lindo querido y esque a
                quien no le gusta cantar con gran sentimiento y a todo pulmón
                con una botella de tequila talvez o bailar con esa emoción que
                solo los instrumentos de mariachi hacen sentir o aún mejor
                dedicarle una hermosa canción a esa persona para demostrarle
                todo tu amor y cariño
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;

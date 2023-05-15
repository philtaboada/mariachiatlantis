import './valores.css'
import Primer from '../assets/primero.png'
import Segundo from '../assets/segundo.png'
import Tercero from '../assets/tercero.png'

const Valores = () => {
  return (
    <div id='valores' className="px-6 md:px-12 text-[#353535] lg:text-left valores" >
      <div className="container mx-auto xl:px-32">
        <section className="p-6 text-gray-100">
          <div className="container mx-auto">
            <h2
                  className="text-[white] text-7xl font-normal text-center"
                  style={{
                    fontFamily: "Dr Sugiyama",
                  }}
                >
                 Nuestros Valores
                </h2>
            <div className="grid gap-6 my-16 lg:grid-cols-3">
              <div className="flex flex-col p-8 space-y-4 rounded-md bg-[#000000]">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full text-[black]">
                  <img src={Primer} alt="" />
                </div>
                <p className="text-sm font-semibold">
                  <b className='underline'>Responsabilidad.</b> Somos responsables de llevar a cada uno de nuestros eventos, el mejor espectaculo mexicano con el debido respeto y con los mejores acuerdos.
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md bg-[#000000]">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full text-[black]">
                  <img src={Segundo} alt="" />
                </div>
                <p className="text-sm font-semibold">
                  <b className='underline'>Pasión.</b> Somos un grupo de musicos que dedican su vida a la mejor musica y mas representativa de nuestro Mexico, queremos compartir la alegria y emocion que solo hace sentir la musica del Mariachi.
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md bg-[#000000]">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full text-[black]">
                  <img src={Tercero} alt="" />
                </div>
                <p className="text-sm font-semibold">
                  <b className='underline'>Excelencia.</b> La musica del mariachi es un lujo por lo tanto cumplimos con diferentes normas para brindarte el mejor servicio en calidad musical y con la mejor presentaciòn.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Valores;

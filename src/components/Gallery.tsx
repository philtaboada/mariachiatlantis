import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'

const Gallery = () => {
  return (
    <section id='shows' className="py-6" style={{
        "backgroundImage": "radial-gradient( circle 547px at 50% 50.7%,  rgba(255,255,255,1) 0%, rgba(174,129,45,1) 90% )"
    }}>
        
	<div className="container flex flex-col justify-center p-4 mx-auto">
    <h2
                  className="text-[white] text-7xl font-normal text-start"
                  style={{
                    fontFamily: "Dr Sugiyama",
                  }}
                >
                  Shows
                </h2>
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full bg-gray-500 aspect-square" src={Img1} />
			<img className="object-cover w-full bg-gray-500 aspect-square" src={Img2} />
			<img className="object-cover w-full bg-gray-500 aspect-square" src={Img3} />
			<img className="object-cover w-full bg-gray-500 aspect-square" src={Img4} />
		</div>
	</div>
</section>
  )
}

export default Gallery
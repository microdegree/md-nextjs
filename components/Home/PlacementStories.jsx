import {useState} from 'react'
import Image from 'next/image'
import {studentData} from '../../data'
import Slider  from 'react-slick'
const PlacementStories = () => {
  const [responsive, setResponsive] = useState(true)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.6775,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows:true,
        className:"slides"
      };

      var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.59,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows:true,
        className:"slides"
      };
    return (
        <section className="mt-10 ">
        <h1 className="text-4xl text-center py-7">Placement Stories</h1>
       
        <div className="hidden sm:block w-11/12 mx-auto" >
        <Slider {...settings} >
            {studentData.map((sd)=> (
                <>
                
                 <div className="my-6 mx-3 flex flex-col shadow-xl rounded-xl border border-white-400">
                     <div className="bg-gray-100 w-full py-3 px-8 text-center">
                     <Image src={sd.image} alt="image" width={150} height={150} className="rounded"/>
                     </div>
                     <hr />
                     <div className="py-6 px-2 text-center bg-white">
                  <h2 className =" font-semibold pt-4" style={{color:"#062A42"}}>{sd.name}</h2>
                  <p className="text-center text-gray-500">{sd.role}</p>
                  <p className="text-gray-500">{sd.company}</p>
                  </div>
                 </div>
                 {/* <div>
                 <Image src={sd.image} alt="image" width={200} height={150} className="rounded"/>
                 <h2 >{sd.name}</h2>
                  <p>{sd.role}</p>
                  <p>{sd.company}</p>
                 </div> */}
                
                </>
            ))}
           </Slider>
             
        </div>
       
       {responsive && (
            <div className="block w-10/12 mx-auto sm:hidden" >
            <Slider {...settings1} >
                {studentData.map((sd)=> (
                    <>
                    
                     <div className="my-6 mx-2 flex flex-col shadow-xl rounded-xl border border-white-400">
                         <div className="bg-gray-100 w-full p-2 text-center">
                         <Image src={sd.image} alt="image" width={150} height={150} className="rounded"/>
                         </div>
                         <hr />
                         <div className="py-6 px-2 text-center bg-white">
                      <h2 className =" font-semibold pt-4" style={{color:"#062A42"}}>{sd.name}</h2>
                      <p className="text-center text-gray-500">{sd.role}</p>
                      <p className="text-gray-500">{sd.company}</p>
                      </div>
                     </div>
                     {/* <div>
                     <Image src={sd.image} alt="image" width={200} height={150} className="rounded"/>
                     <h2 >{sd.name}</h2>
                      <p>{sd.role}</p>
                      <p>{sd.company}</p>
                     </div> */}
                    
                    </>
                ))}
               </Slider>
                 
            </div>
       )}
        
     </section>
    )
}

export default PlacementStories

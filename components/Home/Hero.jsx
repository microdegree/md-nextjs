import Image from 'next/image';
import Link from 'next/link';
import { DeviceMobileIcon} from "@heroicons/react/outline";
const Hero = () => {
    return (
        <section className="w-11/12 mx-auto h-h-nav flex flex-col justify-center sm:grid grid-cols-2 gap-2 content-center  ">
          <div className="sm:mx-5">
          <Image
            src='/heroimg.jpg'
            alt='logo'
            width={700}
            height={500}
          />
              </div>  
              <div className="sm:self-center">
              <h3 className="text-2xl font-semibold py-5 sm:text-3xl" style={{color:"#26395f"}}>ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready

                ಮಾಡುವ ಅಭಿಯಾನ</h3>
                <div className="mt-3">
              <Link href="/courses"><a className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg " style={{backgroundColor:"#EB5C74"}}>View Our Courses</a></Link>
              <a href="/" className="ml-4 px-3 py-3 border rounded shadow-xl sm:ml-6" style={{borderColor:"#623F99",color:"#623F99"}}>

            
              <i class="fa fa-download" aria-hidden="true" style={{color:"#623F99"}}></i>  Download </a>
              </div>
              </div>
        </section>
    )
}

export default Hero

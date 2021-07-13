import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <section className='mt-10 bg-white-100  shadow' style={{boxShadow:"2px 2px 30px #000000"}}>
      <div className='w-10/12 mx-auto sm:grid grid-cols-4 gap-1'>
        <div className='my-5   py-5' style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Company</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>About us</h1>
            <h1 className='py-2 text-xl'>Terms & Conditions</h1>
            <h1 className='py-2 text-xl'>LeaderBaord</h1>
          </div>
        </div>
        <div className='my-5 py-5'  style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Platform</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>Scholarship</h1>
            <h1 className='py-2 text-xl'>Terms & Conditions</h1>
            <h1 className='py-2 text-xl'>Free Courses</h1>
            <h1 className='py-2 text-xl'>Community</h1>
          </div>
        </div>
        <div className='my-5  py-5'  style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Get In Touch</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>Phone : +91 83108 82795</h1>
            <h1 className='py-2 text-xl'>Email : hello@microdegree.work</h1>
            <h1 className='py-2 text-xl'>
              Pillpouch Healthtech Private Limited K-tech Innovation Hub 3rd
              Floor, Plama Building Bejai, Mangaluru , Karnataka 575004.
            </h1>
          </div>
        </div>
        <div className='text-center place-self-center'>
          <div className='px-2 pt-1 mx-3 cursor-pointer text-center'>
            <Link href='/'>
              <Image
                src='/microdegreelogo.png'
                alt='logo'
                width={200}
                height={50}
              />
            </Link>
          </div>
          <div className='flex justify-center '>
            <div className='text-2xl px-3 border border-gray-500 rounded-full h-10 w-10 flex items-center justify-center mx-2'>
              <i className='fa fa-facebook' />
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
              <i className='fa fa-youtube' />
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
              <i className='fa fa-linkedin' />
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
              <i className='fa fa-instagram' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import { course } from "../../data";
import Image from "next/image";
import Link from "next/link";
const Course = () => {
  return (
    <section className='my-8' style={{backgroundColor:"#f1f1f1"}}>
      <h1 className='text-4xl text-center pt-7'>Courses</h1>
      <div className='w-10/12 mx-auto mt-8 sm:grid grid-cols-3 gap-3' >
        {course.map((courses) => (
          <>
            <div className=' my-5 shadow-xl border border-gray-200 rounded' style={{backgroundColor:"#ffff"}}>
              <div className='pt-0 px-0'>
                <Image src={courses.image} alt='img' width={500} height={300} />
              </div>
              <div className='my-3'>
                  {/* <h1 style={{textAlign:"right",paddingRight:"10px"}} >kannadadalli</h1> */}
                <h1 className='text-xl py-2 text-center' style={{fontWeight:"bold"}}>{courses.name}</h1>
                {/* <h1 className='text-sm py-2'>{courses.course}</h1> */}
                <h1 className='px-3 text-center'>{courses.review}</h1>
             
              </div>
              <div className='my-5 ' style={{textAlign:"end",paddingRight:"15px"}}>
              <a href= {courses.url} className='text-center ' style={{color:"#9b9b9b",fontSize:"12px"}}>
              <i className="fa fa-clock-o" aria-hidden="true"></i> {courses.lessons}
                </a>
                <a href= {courses.url} className='text-center ' style={{color:"#EB5C74",fontWeight:"bold",marginLeft:"110px"}}>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
                {/* <a href= {courses.url} style={{color:"",backgroundColor:"purple"}} className='text-center  px-1 py-1 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl'>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a> */}
              </div>
              
            </div>
          </>
        ))}
      </div>
      <div className='text-center mt-8'>
        <Link href='/testimonial'>
          <a className='text-center px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl' style={{backgroundColor:"#EB5C74"}}>
            View More
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Course;

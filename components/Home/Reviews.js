import { reviews } from "../../data";
import Image from "next/image";
import Link from "next/link";
const Reviews = () => {
  return (
    <section className='my-8'>
      <h1 className='text-4xl text-center pt-7'>Reviews</h1>
      <div className='w-10/12 mx-auto mt-8 sm:grid grid-cols-3 gap-3'>
        {reviews.map((review) => (
          <>
            <div className='text-center my-5 shadow-xl border border-gray-200 rounded'>
              {/* <div className='pt-4 px-4'>
                <Image src={review.image} alt='img' width={100} height={100} />
              </div> */}
              <div className='my-3'>
                <h1 className='text-xl py-2' style={{color:"#26395f"}}>{review.name}</h1>
                <h1 className='text-sm py-2' >{review.course}</h1>
                <h1 className='px-3'style={{color:"#26395f"}}>{review.review}</h1>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='text-center mt-5'>
        <Link href='/testimonial'>
          <a className='text-center  px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl' style={{backgroundColor:"#EB5C74"}}>
            View More
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Reviews;

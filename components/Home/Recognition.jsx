import Image from "next/image"

const Recognition = () => {
    return (
        <section className="my-10">
           <h1 className="text-4xl text-center pt-7">Our Recognition</h1>
           <div className="w-10/12 mx-auto mt-8  mb-8 sm:grid grid-cols-3 content-center" >
               <div className="my-7 justify-self-center">
                   <Image src="/elevate_logo.png" alt="elevate_logo"  width={300} height={200}/>
                   <h3 className="text-center">Winners at Startup Karnataka Elevate (Mar 2020)</h3>
               </div>
               <div className="my-7 justify-self-center">
                   <Image src="/indianexpress.jpeg" alt="elevate_logo"  width={300} height={200}/>
                   <h3 className="text-center">The New Indian Express</h3>
               </div>
               <div className="my-7 justify-self-center">
                   <Image src="/toi.png" alt="elevate_logo"  width={300} height={200}/>
                   <h3 className="text-center">The Times of India</h3>
               </div>
           </div>
        </section>
    )
}

export default Recognition

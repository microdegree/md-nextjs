import Link from "next/link"

const About = () => {
    return (
        <section className="my-8">
              <h1 className="text-4xl text-center pt-7">About Microdegree</h1>
            <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
           <div>
               <iframe src="https://www.youtube.com/embed/01qSumyUrpU"  className=" w-iframemob h-iframemob sm:w-iframeweb h-iframeWeb"></iframe>
           </div>
           <div className="my-7">
               <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f"}} >Join 10,000+ Learners.</h1>
               <p className="text-gray-700 py-2">Learn coding and job-ready skills from industry experts in Kannada. MicroDegree is chosen among top innovative startups by Govt. of Karnataka's flagship Elevate-Call2 program</p>
               <div className="mt-4">
               <Link href="/courses"><a className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-4 text-lg" style={{backgroundColor:"#EB5C74"}}>ಬನ್ನಿ ಕೈಜೋಡಿಸಿ </a></Link>
               </div>
           </div>
           </div>
        </section>
    )
}

export default About

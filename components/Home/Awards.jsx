import Image from 'next/image'
const Awards = () => {
    return (
        <section className="hidden sm:grid  mt-4 py-2">
        <div className="w-10/12 mx-auto grid grid-cols-4 content-center">
            <div className="mt-2 justify-self-center">
           <Image src="/startup.png" alt="startup" width={150} height={50}/>
           </div>
           <div className="mt-2 justify-self-center">
           <Image src="/riidl.jpg" alt="startup" width={150} height={50}/>
           </div>
           <div className="mt-2 justify-self-center">
           <Image src="/banglore.png" alt="startup" width={150} height={50}/>
           </div>
           <div className="mt-2 justify-self-center">
           <Image src="/xvc.png" alt="startup" width={150} height={50}/>
           </div>
        </div>
        </section>
    )
}

export default Awards

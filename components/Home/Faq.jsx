import {faqs} from '../../data';


import FaqItems from './FaqItems';
const Faq = () => {
   
    return (
        <section className='my-8'>
      <h1 className='text-4xl text-center pt-7'>Frequently Asked Questions</h1>
      <div className="w-10/12 mx-auto mt-8">
          {faqs.map((faq)=> (
           <FaqItems faq={faq}/>
           ))}
      </div>

        </section>
    )
}

export default Faq

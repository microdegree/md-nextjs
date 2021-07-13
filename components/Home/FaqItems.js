import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
const FaqItems = ({ faq }) => {
  const [show, setShow] = useState(false);

  const showHide = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className='flex justify-between items-center py-5 cursor-pointer'
        onClick={showHide}
      >
        <h1 className='text-xl sm:text-2xl text-gray-700'>{faq.question}</h1>
        <div>
          {show ? (
            <MinusCircleIcon
              className='h-5 w-5 cursor-pointer text-blue-600 hover:text-red-600'
              onClick={showHide}
            />
          ) : (
            <PlusCircleIcon
              className='h-5 w-5 cursor-pointer text-blue-600 hover:text-red-600'
              onClick={showHide}
            />
          )}
        </div>
      </div>
      {!show ? <hr /> : <div className='h-0.5 bg-red-400 w-full'></div>}

      {show && (
        <div>
          <p className='py-5 sm:text-xl text-purple-500'>{faq.answer}</p>
        </div>
      )}
    </>
  );
};

export default FaqItems;

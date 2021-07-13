import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className='h-h-nav flex flex-col justify-center items-center'>
        <div className='w-10/12 mx-auto text-center sm:grid grid-cols-2 place-items-center'>
          <div className='mb-5'>
            <Image src='/login.jpg' alt='login' width={400} height={400} />
          </div>
          <form className='py-3'>
            <h1 className='hidden sm:grid text-3xl mb-5 font-bold text-purple-700'>
              Sign In
            </h1>
            <input
              type='email'
              placeholder='example@gmail.com'
              className='px-3 my-2 border border-gray-400 py-3 shadow-xl rounded w-full active:border-transparent sm:w-8/12 px-2 py-2'
            />
            <input
              type='password'
              placeholder='password'
              className='px-3 my-2 border border-gray-400 py-3 shadow-xl rounded w-full sm:w-8/12 px-2 py-2'
            />
            <button
              type='submit'
              className='w-full px-3 py-3  my-2 rounded bg-regal-red text-white font-semibold sm:w-8/12 px-2 py-2'
            >
              Login
            </button>
          </form>
          <div className='sm:text-center'>
            <p>
              Don't have account?{" "}
              <Link href='/register'>
                <a className='text-regal-red underline'>Register</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;

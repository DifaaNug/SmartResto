import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div
         
        >
          <div className=" text-2xl mb-6 ">
            <h1 className='font-bold text-3xl'>Hello, Welcome SmartResto!</h1>
            <small className='text-xs'>Login to your account below</small>
          </div>

          <div>
            <form action="">
              <label htmlFor="" className="block text-sm">
                Username{' '}
              </label>
              <input type="text" name="" id="" className="border w-96 h-9 rounded-md text-center" />

              <label htmlFor="" className="block mt-4 text-sm">
                Password{' '}
              </label>

              <input type="text" name="" id="" className="border w-96 h-9 rounded-md text-center" />
            </form>
          </div>

          <div
            className="flex items-center justify-center w-96 hover:shadow-xl h-8 mt-6 border rounded-lg font-bold"
            style={{ backgroundColor: '#5a4fcf' }}
          >
            <button className="text-white text-sm">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

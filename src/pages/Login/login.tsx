import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className="p-8 w-96 border shadow-xl rounded-xl"
          style={{
            boxShadow: '0 4px 6px #9088dd, 0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="text-center text-2xl mb-6 ">
            <h1>SmartResto</h1>
          </div>

          <div>
            <form action="">
              <label htmlFor="" className="block text-sm">
                Username{' '}
              </label>
              <input type="text" name="" id="" className="border" />

              <label htmlFor="" className="block mt-4 text-sm">
                Password{' '}
              </label>

              <input type="text" name="" id="" className="border" />
            </form>
          </div>

          <div
            className="flex items-center justify-center mt-6 border rounded-lg font-bold"
            style={{ backgroundColor: '#5a4fcf' }}
          >
            <button className="">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

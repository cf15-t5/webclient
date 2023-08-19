import React from 'react'

function Wallet() {
  return (
    <div className='bg-white px-4 py-6 rounded-xl'>
      <h6 className='inline'>Balance</h6>
      <h6 className='inline font-bold ms-4'>10000</h6>
      <div class="relative my-3">
        <input type="text" id="value" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="value" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Value</label>
      </div>
      <div className='flex justify-end' >
        <button type="button" class="px-3 py-2 text-xs text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-2 mb-2">Isi Ulang</button>
        <button type="button" class="px-3 py-2 text-xs text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-2 mb-2">Tarik</button>
      </div>
    </div>
  )
}

export default Wallet 
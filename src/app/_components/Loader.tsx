import Image from 'next/image'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className=' w-full py-5 text-center font-semibold text-xl flex justify-center'>
      <Image src={"/loading.gif"} width={100} height={100} alt='loading' />
    </div>
  )
}

export default Loader
import React from 'react'

type Props = {
  title: string;
  description: string;
}

const Card = (props: Props) => {
  return (
    <div className=' p-5 rounded-lg shadow-md hover:shadow-lg bg-white'>
      <h2 className=' text-xl font-semibold'>{props.title}</h2>
      <p className=' text-base'>{props.description}</p>
      <p className=' text-base text-blue-400 font-medium text-end cursor-pointer underline'>Read more</p>
    </div>
  )
}

export default Card
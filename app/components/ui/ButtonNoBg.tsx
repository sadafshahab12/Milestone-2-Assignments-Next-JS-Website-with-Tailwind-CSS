import React from 'react'

interface TNoBgbutton {
    NoBgbtnText: string,
  }
const ButtonNoBg = ({NoBgbtnText}: TNoBgbutton) => {
  return (
    <>
           <button className='rounded-md border border-black hover:bg-black text-black hover:text-white duration-500 py-[0.5rem] px-5 text-[1rem] font-medium'>{NoBgbtnText}</button>
    </>
  )
}

export default ButtonNoBg

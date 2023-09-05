import React from 'react'
import './styling/Home.css';
import { BsArrowRightCircle, BsFillInfoCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className='max-w-screen h-[1000px]'>
      <div className="TEXT m-12 flex mt-12 space-x-40">
        <div className="BOX bg-slate-600 w-72 h-44 flex rounded-3xl">
          <div className='m-2 ml-4 text-white MAIN text-2xl'>
            <div className='w-48'>Text Tokenization</div>
          </div>
          <div className="grid ml-6 mt-24">
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsFillInfoCircleFill size={30} className='' />
            </span>
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsArrowRightCircle size={30} className='' />
            </span>
          </div>
        </div>
        <div className="BOX bg-slate-600 w-72 h-44 flex rounded-3xl">
          <div className='m-2 ml-4 text-white flex MAIN text-2xl'>
            <div className='w-48'>Stop Word Removal</div>
          </div>
          <div className="grid ml-6 mt-24">
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsFillInfoCircleFill size={30} className='' />
            </span>
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsArrowRightCircle size={30} className='' />
            </span>
          </div>
        </div>
        <div className="BOX bg-slate-600 w-72 h-44 flex rounded-3xl">
          <div className='m-2 ml-4 text-white MAIN text-2xl'>
            <div className='w-48'>Stemming /Lemmatization</div>
          </div>
          <div className="grid ml-6 mt-24">
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsFillInfoCircleFill size={30} className='' />
            </span>
            <span className='grid-flow-col cursor-pointer text-white hover:text-black'>
              <BsArrowRightCircle size={30} className='' />
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Home
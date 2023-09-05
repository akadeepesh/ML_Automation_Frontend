import React from 'react';
import './styling/Home.css';
import { BsArrowRightCircle, BsFillInfoCircleFill } from "react-icons/bs";

const data = [
  { title: 'Text Tokenization', description: 'Text tokenization is the process of breaking down a piece of text into smaller units called tokens. These tokens can be words, characters, or subwords.' },
  { title: 'Stop Word Removal', description: 'Stop word removal is the process of removing commonly used words, such as “the”, “a”, “an”, and “in”, from a text.' },
  { title: 'Stemming / Lemmatization', description: 'Stemming and lemmatization are both techniques used in natural language processing (NLP) to reduce words to their base or root form.' },
];

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className="flex flex-wrap -mx-4 mt-20">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className='bg-slate-600 rounded-3xl p-4 h-full flex flex-col justify-between'>
              <div>
                <div className='text-white text-2xl mb-2'>{item.title}</div>
                <p className="text-white">{item.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className='cursor-pointer text-white hover:text-indigo-600'>
                  <BsFillInfoCircleFill size={30} />
                </span>
                <span className='cursor-pointer text-white hover:text-indigo-600'>
                  <BsArrowRightCircle size={30} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-8" />
    </div>
  );
}

export default Home;

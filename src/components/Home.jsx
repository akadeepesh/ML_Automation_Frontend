import React from 'react';
import './styling/Home.css';
import { BsArrowRightCircle, BsFillInfoCircleFill } from "react-icons/bs";
import { Link as RouteLink } from 'react-router-dom';

const data = [
  { title: 'Text Tokenization', description: 'Text tokenization is the process of breaking down a piece of text into smaller units called tokens. These tokens can be words, characters, or subwords.' },
  { title: 'Stop Word Removal', description: 'Stop word removal is the process of removing commonly used words, such as “the”, “a”, “an”, and “in”, from a text.' },
  { title: 'Stemming/ Lemmatization', description: 'Stemming and lemmatization are both techniques used in natural language processing (NLP) to reduce words to their base or root form.' },
];

const bertData = {
  title: 'NLP Q/A model fine-tuning',
  description: 'Fine-tuning is the process of training a pre-trained model on a specific task, This is for creating dataset for question answer model means for you have to provide a context, question and then answer from that context.',
};

const Audio = [
  { title: 'Noise Reduction', description: 'Noise reduction is the process of removing unwanted noise from an audio signal.' },
  { title: 'Feature Extraction', description: 'Feature extraction is the process of transforming raw data into a set of features that can be easily understood and analyzed.' },
];

const Home = () => {
  const datapages = [
    "/tokenization",
    "/stop-word-removal",
    "/Stem-Lem",
  ];
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className="flex flex-wrap -mx-4 mt-20">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className='bg-slate-600 rounded-3xl p-4 h-full BOX flex flex-col justify-between'>
              <div>
                <div className='text-white MAIN text-2xl mb-4'>{item.title}</div>
                <p className="text-white">{item.description}</p>
              </div>
              <div className="mt-4 z-10 flex justify-between items-center">
                <span className='cursor-pointer text-white hover:text-blueish'>
                  <BsFillInfoCircleFill size={30} />
                </span>
                <span className='cursor-pointer text-white hover:text-blueish'>
                  <RouteLink to={datapages[index]}><BsArrowRightCircle size={30} /></RouteLink>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-8 h-[2px] bg-white" />
      <div className="flex flex-wrap -mx-4 mt-20">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className='bg-slate-600 rounded-3xl p-4 h-full BOX flex flex-col justify-between'>
            <div>
              <div className='text-white MAIN text-2xl mb-4'>{bertData.title}</div>
              <p className="text-white">{bertData.description}</p>
            </div>
            <div className="flex"></div>
            <div className="mt-4 z-10 flex justify-between items-center">
              <span className='cursor-pointer text-white hover:text-blueish'>
                <BsFillInfoCircleFill size={30} />
              </span>
              <span className='cursor-pointer text-white hover:text-blueish'>
                <BsArrowRightCircle size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 h-[2px] bg-white" />
      <div className="flex flex-wrap -mx-4 mt-20">
        {Audio.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className='bg-slate-600 rounded-3xl p-4 h-full BOX flex flex-col justify-between'>
              <div>
                <div className='text-white MAIN text-2xl mb-4'>{item.title}</div>
                <p className="text-white">{item.description}</p>
              </div>
              <div className="mt-4 z-10 flex justify-between items-center">
                <span className='cursor-pointer text-white hover:text-blueish'>
                  <BsFillInfoCircleFill size={30} />
                </span>
                <span className='cursor-pointer text-white hover:text-blueish'>
                  <BsArrowRightCircle size={30} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

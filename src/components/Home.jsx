import React from "react";
import "./styling/Home.css";
import { Link as RouteLink } from "react-router-dom";
import Navbar from "./Navbar";

const data = [
  {
    title: "Text Tokenization",
    description:
      "Text tokenization is the process of breaking down a piece of text into smaller units called tokens. These tokens can be words, characters, or subwords.",
    Imagelink:
      "https://miro.medium.com/v2/resize:fit:1400/1*PZYP2nL6Zc_jpkaHLRxLQQ.png",
  },
  {
    title: "Stop Word Removal",
    description:
      "Stop word removal is the process of removing commonly used words, such as “the”, “a”, “an”, and “in”, from a text. You can add your own stop words too. It will be removed.",
    Imagelink: "https://byteiota.com/wp-content/uploads/2021/01/Stopwords.jpg",
  },
  {
    title: "Stemming/ Lemmatization",
    description:
      "Stemming and lemmatization are both techniques used in natural language processing (NLP) to reduce words to their base or root form. Stemming converts 'run', 'running', 'runs', all to 'run'.",
    Imagelink:
      "https://byteiota.com/wp-content/uploads/2021/01/Stemming-and-Lemmatization-800x400.jpg",
  },
];

const bertData = {
  title: "NLP Q/A model fine-tuning",
  description:
    "Fine-tuning is the process of training a pre-trained model on a specific task, This is for creating dataset for question answer model means for you have to provide a context, question and then answer from that context.",
};

const Audio = [
  {
    title: "Noise Reduction",
    description:
      "Noise reduction is the process of removing unwanted noise from an audio signal.",
    Imagelink:
      "https://images.wondershare.com/ailab/image2023/products-7/remove-noise-banner.png",
  },
  {
    title: "Feature Extraction",
    description:
      "Feature extraction is the process of transforming raw data into a set of features that can be easily understood and analyzed.",
    Imagelink:
      "https://www.einfochips.com/blog/wp-content/uploads/2021/10/Building_Intelligent_Audio_Systems_Audio_Feature_Extraction_using_Machine_Learning_Blog_Fetaured_Image.jpg",
  },
];

const Home = () => {
  const datapages = ["/tokenization", "/stop-word-removal", "/StemLem"];
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap mt-20">
          {data.map((item, index) => (
            <div key={index} className="">
              <div className="mr-10 my-10 min-h-[515.86px] rounded-lg overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-[380px]">
                <div className="relative min-h-[213px]">
                  <img
                    src={item.Imagelink}
                    alt="Text Processing"
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-7">
                  <h2 className="mb-2 text-lg font-bold leading-none tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mb-5 text-neutral-500">{item.description}</p>
                  <RouteLink to={datapages[index]}>
                    <button className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90">
                      Let's Go!
                    </button>
                  </RouteLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-8 h-[2px] bg-white" />
        <div className="flex items-center max-w-4xl overflow-hidden bg-white border rounded-lg shadow-sm border-neutral-200/60">
          <img
            src="https://images.ctfassets.net/k42vp4yl2q3q/2FFU53ah4JKq9wz4y4mcJj/5325b9fb40612eb6352a0e525c3d28b0/pre-training_fine-tuning_in-context_learning.jpg?w=1920&h=1080&fl=progressive&q=50&fm=jpg"
            alt="Fine tuining"
            className="object-cover w-auto h-[232px] aspect-video"
          />
          <div className="p-8">
            <a href="#_" className="block mb-3">
              <h5 className="text-xl font-bold leading-none tracking-tight text-neutral-900">
                {bertData.title}
              </h5>
            </a>
            <p className="mb-4 text-sm text-neutral-500">
              {bertData.description}
            </p>
            <button className="inline-flex items-center justify-between w-auto h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90">
              <span>Let's go!</span>
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <hr className="my-8 h-[2px] bg-white" />
        <div className="flex flex-wrap -mx-4 mt-20">
          {Audio.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="rounded-lg overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-[380px]">
                <div className="relative">
                  <img
                    src={item.Imagelink}
                    alt="Auido Features"
                    className="w-full h-[244px]"
                  />
                </div>
                <div className="p-7">
                  <h2 className="mb-2 text-lg font-bold leading-none tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mb-5 h-[96px] text-neutral-500">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90">
                    Let's go!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

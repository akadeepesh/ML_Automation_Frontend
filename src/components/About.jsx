import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const About = () => {
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font">
      <div name="about" className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-black flex-shrink-0">
            <svg
              viewBox="-6 -6 36.00 36.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="black"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.144"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M7 12H17M11 18H13"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.536"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Text Data Pre-processesing.
            </h2>
            <p className="leading-relaxed text-base">
              It involves tokenization (breaking text into words), stemming and
              lemmatization (reducing words to their root form), and stop word
              removal (eliminating common words).
            </p>
            <a
              href="/"
              className="mt-3 z-30 text-black inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Bert Fine Tune.
            </h2>
            <p className="leading-relaxed text-base">
              Fine-tuning a BERT model for QnA involves training the model on a
              specific task, like SQuAD, where it learns to predict start and
              end tokens for answers in a given passage.
            </p>
            <a
              href="/"
              className="mt-3 z-30 text-black inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white text-black flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-black flex-shrink-0">
            <svg
              fill="black"
              width="196px"
              height="196px"
              viewBox="-4 -4 24.00 24.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="black"
              strokeWidth="0.00016"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 10.171V0h12v6H6v7c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM4 12H2v2h2v-2zM6 2v2h8V2H6zm8 6.171V6h2v5c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM14 10h-2v2h2v-2z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Audio Processesing
            </h2>
            <p className="leading-relaxed text-base">
              Involves extracting meaningful features from audio signals and
              reducing noise for clearer sound analysis.
            </p>
            <a
              href="/"
              className="mt-3 z-30 text-black inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <Button
          onClick={() => navigate("signup/")}
          className="flex mx-auto mt-20"
        >
          SIGN UP
        </Button>
      </div>
    </section>
  );
};

export default About;

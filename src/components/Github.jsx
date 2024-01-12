import React from "react";
import { Button } from "@material-tailwind/react";
const Github = () => {
  return (
    <section className="text-gray-600 body-font">
      <div
        name="contact"
        className="container mx-auto flex px-40 py-44 md:flex-row flex-col items-center"
      >
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={require("./images/Github.png")}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Data Processing and Audio Analysis
            <br className="hidden lg:inline-block" />
            on GitHub
          </h1>
          <p className="mb-8 leading-relaxed">
            Discover the innovative project that is revolutionizing text and
            audio data processing. Explore the repository, delve into the code,
            and see how advanced features like Text Tokenization, Lemmatization,
            Stop Word Removal, NLP Model Training Data Creation, Noise
            Reduction, and Audio Feature Extraction are implemented. Be a part
            of this exciting journey, star the repository, and stay updated with
            every commit.
          </p>
          <div className="flex z-30 justify-center">
            <a href="https://github.com/akadeepesh">
              <Button className="">Visit Profile</Button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/akadeepesh/ML_Automation_Backend"
            >
              <Button variant="outlined" className="ml-4">
                Star Repository
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;

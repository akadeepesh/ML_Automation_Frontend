import React from "react";

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
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Visit Profile
              </button>
            </a>
            <a href="https://github.com/akadeepesh/ML_Automation_Backend">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Star Repository
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;

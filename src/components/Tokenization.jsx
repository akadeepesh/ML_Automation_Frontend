import React, { useState } from "react";
import axios from "axios";
// import Button from "@material-tailwind/react";

const Tokenization = () => {
  const [inputText, setInputText] = useState("");
  const [tokenizationOption, setTokenizationOption] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTokenizationOptionChange = (event) => {
    setTokenizationOption(event.target.value);
  };

  const handleTokenize = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/tokenize/",
        {
          sentence: inputText,
          type: tokenizationOption,
        }
      );
      console.log(response);
      setOutputText(response.data.tokenized_sentence.join(", "));
    } catch (error) {
      console.error("Failed to tokenize text:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tokenization</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Enter text to tokenize..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">Tokenization Option:</label>
          <select
            className="p-2 border rounded"
            value={tokenizationOption}
            onChange={handleTokenizationOptionChange}
          >
            <option value="sentence">Sentence Tokenize</option>
            <option value="word">Word Tokenize</option>
          </select>
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleTokenize}
        >
          Tokenize
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Tokenization Result:</h2>
        <pre className="p-2 border rounded">{outputText}</pre>
      </div>
    </div>
  );
};

export default Tokenization;

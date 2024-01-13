import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";

const Lemmatization = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLemmatize = async () => {
    try {
      const response = await axios.post("http://localhost:8000/lemmatize/", {
        text: inputText,
      });
      setOutputText(response.data.tokens.join(", "));
    } catch (error) {
      console.error("Failed to lemmatize text:", error);
    }

    setOutputText(`Sample lemmatization output.`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Lemmatization</h1>
      <div className="flex mb-4"></div>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Enter text for lemmatization..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <Button onClick={handleLemmatize}>Lemmatize</Button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Result:</h2>
        <pre className="p-2 border rounded">{outputText}</pre>
      </div>
    </div>
  );
};

export default Lemmatization;

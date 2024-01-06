import React, { useState, useEffect } from "react";

const StopWord = () => {
  const [inputText, setInputText] = useState("");
  const [stopWords, setStopWords] = useState([]);
  const [outputText, setOutputText] = useState("");
  const [customStopWords, setCustomStopWords] = useState("");
  const [showCustomStopWords, setShowCustomStopWords] = useState(false);

  useEffect(() => {
    // Fetch stop words from your backend based on the selected language
    // Replace this with your actual backend API call.
    // Example:
    // fetch(`/api/stopwords?language=${selectedLanguage}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setStopWords(data.stopwords);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching stop words:", error);
    //   });

    // Placeholder stop words for demonstration
    const sampleStopWords = ["the", "and", "is", "in", "it"];
    setStopWords(sampleStopWords);
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleToggleCustomStopWords = () => {
    setShowCustomStopWords(!showCustomStopWords);
  };

  const handleCustomStopWordsChange = (event) => {
    setCustomStopWords(event.target.value);
  };

  const handleRemoveStopWords = () => {
    // Remove stop words from input text
    const inputWords = inputText.split(/\s+/);
    const filteredWords = inputWords.filter(
      (word) => !stopWords.includes(word.toLowerCase())
    );
    const output = filteredWords.join(" ");
    setOutputText(output);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Stop Word Removal</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Enter text for stop word removal..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">Custom Stop Words:</label>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            onClick={handleToggleCustomStopWords}
          >
            {showCustomStopWords ? "Hide" : "Show"}
          </button>
        </div>
        {showCustomStopWords && (
          <textarea
            className="w-full p-2 border rounded mt-2"
            rows="3"
            placeholder="Enter custom stop words separated by spaces..."
            value={customStopWords}
            onChange={handleCustomStopWordsChange}
          ></textarea>
        )}
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleRemoveStopWords}
        >
          Remove Stop Words
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Output:</h2>
        <pre className="p-2 border rounded">{outputText}</pre>
      </div>
    </div>
  );
};

export default StopWord;

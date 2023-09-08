import React, { useState } from "react";

const Tokenization = () => {
    const [inputText, setInputText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("eng");
    const [tokenizationOption, setTokenizationOption] = useState("sentence");
    const [outputText, setOutputText] = useState("");

    // Function to handle input text change
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // Function to handle language selection change
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    // Function to handle tokenization option change
    const handleTokenizationOptionChange = (event) => {
        setTokenizationOption(event.target.value);
    };

    // Function to submit tokenization request to backend
    const handleTokenize = () => {
        // Send a request to your backend to tokenize inputText
        // and update the outputText state with the result.
        // Replace this with your actual backend API call.
        // Example:
        // fetch(`/api/tokenize?language=${selectedLanguage}&option=${tokenizationOption}`, {
        //   method: "POST",
        //   body: JSON.stringify({ text: inputText }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setOutputText(data.result);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching data:", error);
        //   });

        // Placeholder result for demonstration
        setOutputText(`Sample ${tokenizationOption} tokenization output.`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Tokenization</h1>
            <div className="flex mb-4">
                <div className="flex-grow">
                    <select
                        className="p-2 border rounded"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        <option value="eng">English</option>
                        <option value="spanish">Spanish</option>
                        {/* Add more language options here */}
                    </select>
                </div>
            </div>
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
                <pre className="p-2 border rounded">
                    {outputText}
                </pre>
            </div>
        </div>
    );
};

export default Tokenization;

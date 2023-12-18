import React, { useState } from "react";

const Lemmatization = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleLemmatize = () => {
        // Send a request to your backend for stemming/lemmatization
        // You will need to pass the inputText and selectedLanguage to your backend
        // Replace this with your actual backend API call.
        // Example:
        // fetch(`/api/stemlemmatize?language=${selectedLanguage}`, {
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
        setOutputText(`Sample lemmatization output.`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Lemmatization</h1>
            <div className="flex mb-4">
            </div>
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
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleLemmatize}
                >
                    Lemmatize
                </button>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Result:</h2>
                <pre className="p-2 border rounded">
                    {outputText}
                </pre>
            </div>
        </div >
    );
};

export default Lemmatization;

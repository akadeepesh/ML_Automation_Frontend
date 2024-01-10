import React, { useState } from "react";
import axios from "axios";

const StopWord = () => {
  const [sentence, setSentence] = useState("");
  const [filteredSentence, setFilteredSentence] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/remove_stop_words/",
        { sentence }
      );
      setFilteredSentence(response.data.filtered_sentence);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white rounded shadow p-6 m-4">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          Remove Stopwords
        </h1>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          type="text"
          placeholder="Enter sentence"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {filteredSentence.length > 0 && (
          <div className="mt-4">
            <h2 className="mb-2 text-lg font-semibold text-gray-700">
              Filtered Sentence:
            </h2>
            <p className="text-gray-700">{filteredSentence.join(" ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StopWord;

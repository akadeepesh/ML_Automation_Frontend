import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

const StopWord = () => {
  const [sentence, setSentence] = useState("");
  const [filteredSentence, setFilteredSentence] = useState([]);
  const [showTick, setShowTick] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openadd, setOpenadd] = React.useState(false);
  const [stopwords, setStopwords] = React.useState([]);
  const [customwords, setCustomwords] = React.useState([]);

  const handleClick = async () => {
    setShowTick(true);
    await navigator.clipboard.writeText(filteredSentence.join(" "));
    setTimeout(() => setShowTick(false), 3000);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/remove_stop_words/",
        { sentence: sentence, demand: "filtered" }
      );
      console.log(response);
      if (response.data.filtered_sentence === undefined) {
        console.error("Error fetching sentence");
      } else {
        setFilteredSentence(response.data.filtered_sentence);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = async () => {
    setOpen(!open);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/remove_stop_words/",
        { demand: "stopwords" }
      );
      setStopwords(response.data.stopwords.join(", "));
    } catch (error) {
      console.error(error);
    }
  };
  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/remove_stop_words/",
        { customwords: customwords, demand: "edit" }
      );
      console.log(response);
      if (response.data !== "Error") {
        setStopwords(response.data.stop_words.join(", "));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white rounded shadow p-6 m-4">
        <div className="flex justify-between mb-5">
          <h1 className="mb-4 text-xl font-semibold text-gray-700">
            Remove Stop words
          </h1>
          <Button onClick={handleOpen} variant="gradient">
            Show Stop words
          </Button>
          <Dialog open={open} handler={() => setOpen(!open)}>
            <DialogHeader>Stop Words</DialogHeader>
            <DialogBody>{stopwords}</DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleEdit}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Dialog open={openadd} handler={() => setOpenadd(!openadd)}>
                <DialogHeader>Set Custom Stop Words</DialogHeader>
                <div className="w-full px-10">
                  <Textarea
                    onChange={(e) => setCustomwords(e.target.value)}
                    size="lg"
                    label="Set You Words (Currently Not in Use)"
                    error
                  />
                </div>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={() => setOpenadd(!openadd)}
                    className="mr-1"
                  >
                    <span>Close</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleSave}>
                    <span>Save</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <Button
                variant="gradient"
                color="green"
                onClick={() => setOpenadd(!openadd)}
              >
                <span>Set Custom Words</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
        <div className="w-full mx-auto">
          <textarea
            type="text"
            placeholder="Enter your data here."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            className="shadow appearance-none flex w-full h-auto px-3 py-2 text-gray-700 leading-tight mb-4 bg-white border rounded border-neutral-300 placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
        <Button
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          type="button"
          onClick={handleSubmit}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Submit</span>
        </Button>
        {filteredSentence.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between">
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Filtered Sentence:
              </h2>
              {showTick ? (
                <svg
                  className="relative w-5 h-5 mt-2 -translate-x-0.5 opacity-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mt-2 stroke-current hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  onClick={handleClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  ></path>
                </svg>
              )}
            </div>
            <div className="flex p-4 bg-gray-400 rounded-2xl">
              <p className="text-black">{filteredSentence.join(" ")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StopWord;

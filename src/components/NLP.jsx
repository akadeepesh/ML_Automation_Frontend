import React, { useState } from "react";
import { Input, Textarea, Button, Alert } from "@material-tailwind/react";
import { v4 as uuidv4 } from "uuid";

const NLP = () => {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([{ text: "", start: null }]);
  const [qas, setQas] = useState([]);

  const handleTextSelect = (e) => {
    const selectedText = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );
    const newAnswers = [...answers];
    newAnswers[answers.length - 1].text = selectedText;
    newAnswers[answers.length - 1].start = e.target.selectionStart;
    setAnswers(newAnswers);
  };
  const addAnswer = () => {
    setAnswers([...answers, { text: "", start: null }]);
  };

  const deleteAnswer = () => {
    const newAnswers = answers.slice(0, answers.length - 1);
    setAnswers(newAnswers);
  };

  const addQuestion = () => {
    setQas([...qas, { id: uuidv4(), question, answers }]);
    setQuestion("");
    setAnswers([{ text: "", start: null }]);
  };

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  // const deleteQuestion = (id) => {
  //   setQas(qas.filter((qa) => qa.id !== id));
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Alert className="w-fit" color="red" variant="gradient" icon={<Icon />}>
        Sorry, This page is under development.
      </Alert>
      <div className="flex flex-col w-5/6 bg-white rounded space-y-6 shadow p-6 m-4">
        <Textarea
          variant="outlined"
          size="lg"
          label="Context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          spellCheck="true"
          onMouseUp={handleTextSelect}
        />
        <div className="flex flex-col space-y-6">
          <Input
            variant="outlined"
            size="lg"
            label={`Question ${qas.length + 1}`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex flex-col ml-5 space-y-6">
            {answers.map((answer, index) => (
              <div className="flex flex-row items-center" key={index}>
                <Input
                  variant="outlined"
                  size="lg"
                  label={`${index + 1}. Answer`}
                  value={
                    answer.start !== null && answer.text !== ""
                      ? `${answer.text} (Start Index - ${answer.start})`
                      : `${index + 1}. Select Answer From Context`
                  }
                  disabled
                />
                {index === answers.length - 1 && index !== 0 && (
                  <i
                    className="fa fa-trash ml-2 cursor-pointer text-gray-500"
                    onClick={deleteAnswer}
                  />
                )}
              </div>
            ))}
            <Button
              className="w-fit"
              size="md"
              loading={answers[answers.length - 1].text === ""}
              onClick={addAnswer}
            >
              Add Answer
            </Button>
          </div>
          <Button
            className="w-fit"
            size="md"
            loading={question === "" || answers[answers.length - 1].text === ""}
            onClick={addQuestion}
          >
            Add Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NLP;

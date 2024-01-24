import React, { useState } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { v4 as uuidv4 } from "uuid";

const NLP = () => {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([{ text: "", start: null }]);
  const [qas, setQas] = useState([]);

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index].text = e.target.value;
    newAnswers[index].start = context.indexOf(e.target.value);
    setAnswers(newAnswers);
  };

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

  // const deleteQuestion = (id) => {
  //   setQas(qas.filter((qa) => qa.id !== id));
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-5/6 bg-white rounded space-y-6 shadow p-6 m-4">
        <Textarea
          variant="outlined"
          size="lg"
          label="Context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
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
                  onChange={(e) => handleAnswerChange(e, index)}
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

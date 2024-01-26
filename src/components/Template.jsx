import React, { useState } from "react";
import { Input, Textarea, Button, Checkbox } from "@material-tailwind/react";

const MyForm = () => {
  const [data, setData] = useState([
    {
      context: "",
      qas: [
        {
          id: "",
          is_impossible: false,
          question: "",
          answers: [
            {
              text: "",
              answer_start: 0,
            },
          ],
        },
      ],
    },
  ]);

  const handleChange = (e, contextIndex, qaIndex, answerIndex) => {
    const updatedData = [...data];
    // const selectedText = e.target.value.substring(
    //   e.target.selectionStart,
    //   e.target.selectionEnd
    // );
    if (answerIndex !== undefined) {
      updatedData[contextIndex].qas[qaIndex].answers[answerIndex][
        e.target.name
      ] = e.target.value;
    } else if (qaIndex !== undefined) {
      updatedData[contextIndex].qas[qaIndex][e.target.name] = e.target.value;
    } else {
      updatedData[contextIndex][e.target.name] = e.target.value;
    }
    setData(updatedData);
  };

  const addContext = () => {
    setData([
      ...data,
      {
        context: "",
        qas: [
          {
            id: "",
            is_impossible: false,
            question: "",
            answers: [
              {
                text: "",
                answer_start: 0,
              },
            ],
          },
        ],
      },
    ]);
  };

  const addQuestion = (contextIndex) => {
    const updatedData = [...data];
    updatedData[contextIndex].qas.push({
      id: "",
      is_impossible: false,
      question: "",
      answers: [
        {
          text: "",
          answer_start: 0,
        },
      ],
    });
    setData(updatedData);
  };

  const addAnswer = (contextIndex, qaIndex) => {
    const updatedData = [...data];
    updatedData[contextIndex].qas[qaIndex].answers.push({
      text: "",
      answer_start: 0,
    });
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-5/6 bg-white rounded space-y-6 shadow p-6 m-4">
        <form onSubmit={handleSubmit}>
          {data.map((contextData, contextIndex) => (
            <div className="flex flex-col space-y-6" key={contextIndex}>
              <Textarea
                variant="outlined"
                size="lg"
                label="Context"
                name="context"
                onChange={(e) => handleChange(e, contextIndex)}
              />
              {/* <div className="flex flex-col space-y-6"></div> */}
              {contextData.qas.map((qa, qaIndex) => (
                <div className="flex flex-col space-y-6 ml-5" key={qaIndex}>
                  <Input
                    variant="outlined"
                    label="Question"
                    size="lg"
                    onChange={(e) => handleChange(e, contextIndex, qaIndex)}
                  />
                  <div className="flex flex-col ml-10 space-y-6">
                    {qa.answers.map((answer, answerIndex) => (
                      <div className="flex flex-col" key={answerIndex}>
                        <Input
                          variant="outlined"
                          size="lg"
                          label="Answer"
                          name="text"
                          onChange={(e) =>
                            handleChange(e, contextIndex, qaIndex, answerIndex)
                          }
                        />
                        {/* <Input
                          type="number"
                          name="answer_start"
                          label="Remove - Answer Start"
                          onChange={(e) =>
                            handleChange(e, contextIndex, qaIndex, answerIndex)
                          }
                        /> */}
                      </div>
                    ))}
                    <div className="flex flex-row justify-between">
                      <Button
                        className="w-fit"
                        size="md"
                        onClick={() => addAnswer(contextIndex, qaIndex)}
                      >
                        Add Answer
                      </Button>
                      <Checkbox
                        label="Is Impossible"
                        name="is_impossible"
                        onChange={(e) => handleChange(e, contextIndex, qaIndex)}
                      />
                    </div>
                  </div>
                  <Button
                    size="md"
                    className="w-fit"
                    onClick={() => addQuestion(contextIndex)}
                  >
                    Add Question
                  </Button>
                </div>
              ))}
              <Button onClick={addContext}>Add Context</Button>
            </div>
          ))}
          <Button
            className="relative mt-10 inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            type="submit"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Generate JSON</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;

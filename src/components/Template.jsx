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
                <div key={qaIndex}>
                  <Input
                    variant="outlined"
                    label="Question"
                    size="lg"
                    onChange={(e) => handleChange(e, contextIndex, qaIndex)}
                  />
                  <div className="flex flex-col ml-5 space-y-6">
                    {qa.answers.map((answer, answerIndex) => (
                      <div className="flex flex-col mt-6" key={answerIndex}>
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
                </div>
              ))}
              <Button
                size="md"
                className="w-fit"
                onClick={() => addQuestion(contextIndex)}
              >
                Add Question
              </Button>
            </div>
          ))}
          <Button className="mt-10 mr-10" onClick={addContext}>
            Add Context
          </Button>
          <Button className="mt-10" type="submit">
            Generate JSON
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;

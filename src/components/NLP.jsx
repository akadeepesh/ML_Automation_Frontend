import React from "react";
import { Input, Textarea } from "@material-tailwind/react";

const NLP = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-5/6 bg-white rounded space-y-6 shadow p-6 m-4">
        <Textarea variant="outlined" size="lg" label="Context" />
        <div className="flex flex-row space-x-6">
          <Input variant="outlined" size="lg" label="Question" />
          <Input variant="outlined" size="lg" label="Answers" />
        </div>
      </div>
    </div>
  );
};

export default NLP;

import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const FeatureExtraction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Popover>
        <PopoverHandler>
          <Button>Error</Button>
        </PopoverHandler>
        <PopoverContent>
          Sorry for the inconvenience, this feature is not available yet.
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FeatureExtraction;

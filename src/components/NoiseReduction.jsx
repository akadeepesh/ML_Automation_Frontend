import React, { useRef, useState } from "react";
import { Checkbox, Alert } from "@material-tailwind/react";

const NoiseReduction = () => {
  const [audioFile, setAudioFile] = useState("");
  const [noiseFile, setNoiseFile] = useState("");
  const [uploadedNoise, setUploadedNoise] = useState(false);
  const [uploadedAudio, setUploadedAudio] = useState(false);
  const [isSameFile, setIsSameFile] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);
  const noiseRef = useRef(null);

  const handleAudioChange = (event) => {
    setUploadedAudio(true);
    setAudioFile(event.target.files[0]);
    setError(true);
    // const formData = new FormData();
    // formData.append("audio_file", event.target.files[0]);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8000/api/user/noise-reduction/",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleNoiseChange = (event) => {
    setUploadedNoise(true);
    setNoiseFile(event.target.files[0]);
    setError(true);
  };

  // const handleFile = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("audio_file", file);

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/noise-reduction/",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Alert
        className={`w-fit  ${error ? "" : "hidden"}`}
        color="red"
        variant="gradient"
        icon={<Icon />}
      >
        Sorry, We Recived your file(s) {audioFile.name}{" "}
        {noiseFile ? `and ${noiseFile.name}` : ""} but not able to process it.
      </Alert>
      <div className="flex flex-col w-5/6 bg-white rounded space-y-6 shadow p-6 m-4">
        <Checkbox
          className="relative"
          label="Noise File Same as Audio File"
          ripple={true}
          checked={isSameFile}
          onChange={() => setIsSameFile(!isSameFile)}
        />
        <div className="flex flex-col md:flex-row w-full gap-12">
          <div
            className={`flex items-center justify-center ${
              isSameFile ? "w-full" : "md:w-1/2 w-full"
            }`}
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <p className="mb-2 text-xl font-bold text-gray-500">Audio</p>
              {!uploadedAudio && (
                <>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      Choose any audio file.
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="audio/*"
                    onChange={handleAudioChange}
                  />
                </>
              )}
              {audioFile && (
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-gray-500 my-5 ml-5">
                    {audioFile.name} :
                  </p>
                  <audio
                    ref={audioRef}
                    src={URL.createObjectURL(audioFile)}
                    controls
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </label>
          </div>
          {!isSameFile && (
            <div className="flex items-center justify-center md:w-1/2 w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <p className="mb-2 text-xl font-bold text-gray-500">Noise</p>
                {!uploadedNoise && (
                  <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        Choose any audio file.
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="audio/*"
                      onChange={handleNoiseChange}
                      multiple
                    />
                  </>
                )}
                {noiseFile && (
                  <div className="flex flex-col justify-between">
                    <p className="text-sm text-gray-500 my-5 ml-5">
                      {noiseFile.name} :
                    </p>
                    <audio
                      ref={noiseRef}
                      src={URL.createObjectURL(noiseFile)}
                      controls
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoiseReduction;

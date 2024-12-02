import React from "react";

const FileStackSection = () => {
  return (
    <div className="flex items-center p-8 pl-40 mt-20">
      <div className="flex-none w-auto mr-4">
        {" "}
        <img
          src="./assets/filestack.png"
          alt="File Upload"
          className="w-48 h-auto rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex-none w-2/5">
        <div className="flex-none w-2/5">
          <p className="text-sm text-gray-600 w-48">
            <a
              href="#"
              className="font-bold text-sky-500 hover:text-sky-700 cursor-pointer block"
            >
              One API to manage all your file uploads.
            </a>
            <a href="#" className="block cursor-pointer">
              Effortless integration; Reliable performance.
            </a>
            <a
              href="#"
              className="font-bold text-sky-500 hover:text-sky-700 cursor-pointer block"
            >
              Try for Free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileStackSection;

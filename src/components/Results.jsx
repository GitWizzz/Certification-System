import React from "react";

const Results = ({ subjects, sgpa }) => {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Results</h2>
      <ul className="mb-4">
        {subjects.map((subj, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-medium">{subj.name}</span>: {subj.grade} -{" "}
            {subj.credits} Credits
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold">
        SGPA: <span className="text-blue-500">{sgpa}</span>
      </h3>
    </div>
  );
};

export default Results;

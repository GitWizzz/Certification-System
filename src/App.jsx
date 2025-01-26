import React, { useState } from "react";
import SubjectInput from "./components/SubjectInput";
import Results from "./components/Results";

const App = () => {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const calculateSGPA = () => {
    const totalCredits = subjects.reduce((sum, subj) => sum + subj.credits, 0);
    const weightedGP = subjects.reduce((sum, subj) => sum + subj.gp * subj.credits, 0);
    return totalCredits > 0 ? (weightedGP / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8">SGPA Calculator</h1>
      <SubjectInput addSubject={addSubject} />
      <Results subjects={subjects} sgpa={calculateSGPA()} />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const SubjectInput = ({ addSubject }) => {
  const [subject, setSubject] = useState({ name: "", grade: "A", credits: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const gradePoints = { "A+": 10, A: 9, B: 8, C: 7, D: 6 };
    const gp = gradePoints[subject.grade] || 0;
    addSubject({ ...subject, gp });
    setSubject({ name: "", grade: "A", credits: 0 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md mb-8 w-full max-w-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Subject Name</label>
        <input
          type="text"
          placeholder="Enter subject name"
          value={subject.name}
          onChange={(e) => setSubject({ ...subject, name: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Grade</label>
        <select
          value={subject.grade}
          onChange={(e) => setSubject({ ...subject, grade: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>A+</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Credits</label>
        <input
          type="number"
          placeholder="Enter credits"
          value={subject.credits}
          onChange={(e) => setSubject({ ...subject, credits: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Subject
      </button>
    </form>
  );
};

export default SubjectInput;

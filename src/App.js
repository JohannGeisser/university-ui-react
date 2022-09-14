import React from "react";
import StudentManagement from "./components/StudentManagement";
import UpdateStudent from "./components/UpdateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<StudentManagement />} />
          <Route path="/" element={<StudentManagement />} />
          <Route path="/editStudent/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

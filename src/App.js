import './App.css';
import React from 'react';
import ProjectsSidebar from "./components/ProjectsSidebar";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <h5>PROJECT MANAGER</h5>
      <div className="grid">
        <div className="col-4">
          <div className="border-round-sm font-bold">
            <ProjectsSidebar/>
          </div>
        </div>
        <div className="col-6">
          <div className="border-round-sm font-bold mt-5 ">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

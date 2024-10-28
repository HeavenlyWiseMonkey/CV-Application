import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Resume from './components/Resume'
import { resumeInformation } from './resumeInformation'

function App() {
  const [resumeInfo, setResumeInfo] = useState(resumeInformation);

  function handleProperty(e, ...args) {
    if (args.length === 1) {
      resumeInfo[args[0]] = e.target.value;
    }
    else {
      (args[0] === 'education') ? resumeInfo.education[resumeInfo.education.length-1][args[1]] = e.target.value :
      resumeInfo.practical[resumeInfo.practical.length-1][args[1]] = e.target.value;
    }
    const newResumeInfo = {...resumeInfo}
    setResumeInfo(newResumeInfo);
  }

  function handleSubmit(e, property) {
    const newResumeInfo = {...resumeInfo};

    e.preventDefault();
    if (property === 'education') {
      newResumeInfo.createEducation("", "", "", "");
    }
    else {
      newResumeInfo.createPractical("", "", "", "", "");
    }
    setResumeInfo(newResumeInfo);
  }

  return <div className="app">
    <Form resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} />
    <Resume resumeInfo={resumeInfo} />
  </div>
}

export default App
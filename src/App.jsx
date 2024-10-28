import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Resume from './components/Resume'
import { resumeInformation } from './resumeInformation'

function App() {
  const [resumeInfo, setResumeInfo] = useState(resumeInformation);
  const [index, setIndex] = useState(0);

  function handleProperty(e, ...property) {
    if (property.length === 1) {
      resumeInfo[property[0]] = e.target.value;
    }
    else {
      (property[0] === 'education') ? resumeInfo.education[index][property[1]] = e.target.value :
      resumeInfo.practical[index][property[1]] = e.target.value;
    }
    const newResumeInfo = {...resumeInfo}
    setResumeInfo(newResumeInfo);
  }

  return <div className="app">
    <Form resumeInfo={resumeInfo} index={index} handleProperty={handleProperty}/>
    <Resume resumeInfo={resumeInfo} index={index} />
  </div>
}

export default App
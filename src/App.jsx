import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Resume from './components/Resume'
import { resumeInformation } from './resumeInformation'

function App() {
  const [resumeInfo, setResumeInfo] = useState(resumeInformation);
  return <div className="app">
    <Form />
    <Resume resumeInfo={resumeInfo} />
  </div>
}

export default App

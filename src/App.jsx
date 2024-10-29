import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Resume from './components/Resume'
import EditDialog from './components/EditDialog'
import { resumeInformation } from './resumeInformation'

function App() {
  const [resumeInfo, setResumeInfo] = useState(resumeInformation);
  const [curEdit, setCurEdit] = useState('');

  function handleProperty(e, ...args) {
    if (args.length === 1) {
      resumeInfo[args[0]] = e.target.value;
    }
    else {
      (args[0] === 'education') ? resumeInfo.education[args[2]][args[1]] = e.target.value :
      resumeInfo.practical[args[2]][args[1]] = e.target.value;
    }
    const newResumeInfo = {...resumeInfo}
    setResumeInfo(newResumeInfo);
  }

  function handleSubmit(property) {
    const newResumeInfo = {...resumeInfo};

    if (property === 'education') {
      newResumeInfo.createEducation("", "", "", "");
    }
    else {
      newResumeInfo.createPractical("", "", "", "", "");
    }
    setResumeInfo(newResumeInfo);
  }

  function handleEdit(property) {
    const editDialog = document.querySelector('.edit');
    (property === 'education') ? setCurEdit('education') : setCurEdit('practical');
    editDialog.showModal();
  }

  function endEdit() {
    const editDialog = document.querySelector('.edit');
    editDialog.close();
    setCurEdit('');
  }

  function handleDelete(property, cryptoId) {
    const array = resumeInfo[property];
    for (let i=0; i<array.length; i++) {
      if (array[i].id===cryptoId) {
        array.splice(i, 1);
        break;
      }
    }
    const newResumeInfo = {...resumeInfo};
    setResumeInfo(newResumeInfo);
  }

  return <div className="app">
    <Form resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} handleEdit={handleEdit} />
    <Resume resumeInfo={resumeInfo} />
    <EditDialog resumeInfo={resumeInfo} curEdit={curEdit} endEdit={endEdit} handleProperty={handleProperty} handleDelete={handleDelete} />
  </div>
}

export default App
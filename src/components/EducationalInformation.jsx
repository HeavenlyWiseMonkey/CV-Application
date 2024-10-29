import Input from './Input';
import '../styles/Information.css';

function EducationalInputs({resumeInfo, handleProperty, index}) {
    const education = resumeInfo.education[index];

    return <div className="education inputs">
        <Input name="School Name" value={education.schoolName} onChange={(e) => handleProperty(e, 'education', 'schoolName', index)} index={index} />

        <Input name="Study Ttile" value={education.studyTitle} onChange={(e) => handleProperty(e, 'education', 'studyTitle', index)} index={index} />

        <div className="date">
            <Input name="Study Start Date" value={education.studyStartDate} onChange={(e) => handleProperty(e, 'education', 'studyStartDate', index)} index={index} />

            <Input name="Study End Date" value={education.studyEndDate} onChange={(e) => handleProperty(e, 'education', 'studyEndDate', index)} index={index} />
        </div>
    </div>
}

function EducationalInformation({resumeInfo, handleProperty, handleSubmit, handleEdit}) {
    return <div className="educational information">
        <h1>Educational Information</h1>
        <EducationalInputs resumeInfo={resumeInfo} handleProperty={handleProperty} index={resumeInfo.education.length-1} />
        <div>
            <button type="button" onClick={() => handleEdit('education')}>Edit</button>
            <button type="button" onClick={() => handleSubmit('education')}>Submit</button>
        </div>
    </div>
}

export {EducationalInformation, EducationalInputs};
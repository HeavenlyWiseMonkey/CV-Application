import Input from './Input';
import '../styles/Information.css';

export default function EducationalInformation({resumeInfo, handleProperty, handleSubmit}) {
    const education = resumeInfo.education[resumeInfo.education.length-1];

    return <div className="educational information">
        <h1>Educational Information</h1>

        <Input name="School Name" value={education.schoolName} onChange={(e) => handleProperty(e, 'education', 'schoolName')} />

        <Input name="Study Ttile" value={education.studyTitle} onChange={(e) => handleProperty(e, 'education', 'studyTitle')} />

        <div className="date">
            <Input name="Study Start Date" value={education.studyStartDate} onChange={(e) => handleProperty(e, 'education', 'studyStartDate')} />

            <Input name="Study End Date" value={education.studyEndDate} onChange={(e) => handleProperty(e, 'education', 'studyEndDate')} />
        </div>

        <button onClick={(e) => handleSubmit(e, 'education')}>Submit</button>

    </div>
}


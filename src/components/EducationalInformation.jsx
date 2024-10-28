import Input from './Input';
import '../styles/Information.css';

export default function EducationalInformation({resumeInfo, index, handleProperty}) {
    const education = resumeInfo.education[index];

    return <div className="educational information">
        <h1>Educational Information</h1>

        <Input name="School Name" value={education.schoolName} onChange={(e) => handleProperty(e, 'education', 'schoolName')} />

        <Input name="Study Ttile" value={education.studyTitle} onChange={(e) => handleProperty(e, 'education', 'studyTitle')} />

        <div className="date">
            <Input name="Start Date" value={education.studyStartDate} onChange={(e) => handleProperty(e, 'education', 'studyStartDate')} />

            <Input name="End Date" value={education.studyStartDate} onChange={(e) => handleProperty(e, 'education', 'studyEndDate')} />
        </div>

        <button>Submit</button>
    </div>
}


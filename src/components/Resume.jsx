import PersonalSection from './PersonalSection';
import EducationalSection from './EducationalSection';
import PracticalSection from './PracticalSection';
import '../styles/Resume.css'

export default function Resume({resumeInfo}) {
    return <div className="resume">
        <PersonalSection resumeInfo={resumeInfo}/>
        <EducationalSection resumeInfo={resumeInfo} />
        <PracticalSection resumeInfo={resumeInfo} />
    </div>
}
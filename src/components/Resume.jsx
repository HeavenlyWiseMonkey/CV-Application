import PersonalSection from './PersonalSection';
import EducationalSection from './EducationalSection';
import PracticalSection from './PracticalSection';
import '../styles/Resume.css'

export default function Resume({resumeInfo, index}) {
    return <div className="resume">
        <PersonalSection resumeInfo={resumeInfo}/>
        <EducationalSection resumeInfo={resumeInfo} index={index} />
        <PracticalSection resumeInfo={resumeInfo} index={index} />
    </div>
}
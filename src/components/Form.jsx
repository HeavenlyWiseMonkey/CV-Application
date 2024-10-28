import PersonalInformation from "./PersonalInformation";
import EducationalInformation from "./EducationalInformation";
import PracticalInformation from "./PracticalInformation";
import '../styles/Form.css'

export default function Form({resumeInfo, index, handleProperty}) {
    return <form className="form">
        <PersonalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} />
        <EducationalInformation resumeInfo={resumeInfo} index={index} handleProperty={handleProperty} />
        <PracticalInformation resumeInfo={resumeInfo} index={index} handleProperty={handleProperty} />
    </form>
}
import PersonalInformation from "./PersonalInformation";
import EducationalInformation from "./EducationalInformation";
import PracticalInformation from "./PracticalInformation";
import '../styles/Form.css'

export default function Form({resumeInfo, handleProperty, handleSubmit}) {
    return <form className="form">
        <PersonalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} />
        <EducationalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} />
        <PracticalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} />
    </form>
}
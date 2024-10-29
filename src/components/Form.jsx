import PersonalInformation from "./PersonalInformation";
import {EducationalInformation} from "./EducationalInformation";
import {PracticalInformation} from "./PracticalInformation";
import '../styles/Form.css'

export default function Form({resumeInfo, handleProperty, handleSubmit, handleEdit}) {
    return <form className="form">
        <PersonalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} />
        <EducationalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} handleEdit={handleEdit} />
        <PracticalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} handleEdit={handleEdit} />
    </form>
}
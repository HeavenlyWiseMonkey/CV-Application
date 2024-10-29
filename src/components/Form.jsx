import PersonalInformation from "./PersonalInformation";
import {EducationalInformation} from "./EducationalInformation";
import {PracticalInformation} from "./PracticalInformation";
import '../styles/Form.css'

export default function Form({resumeInfo, handleProperty, handleSubmit, handleEdit, headerColor, handleColor}) {
    return <form className="form">
        <PersonalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} />
        <EducationalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} handleEdit={handleEdit} />
        <PracticalInformation resumeInfo={resumeInfo} handleProperty={handleProperty} handleSubmit={handleSubmit} handleEdit={handleEdit} />
        <div className="color">
            <label htmlFor="headerColor">Header Color </label>
            <input type="color" id="headerColor" value={headerColor} onChange={(e) => handleColor(e)} />
        </div>
    </form>
}
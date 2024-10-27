import PersonalInformation from "./PersonalInformation";
import EducationalInformation from "./EducationalInformation";
import PracticalInformation from "./PracticalInformation";
import '../styles/Form.css'

export default function Form() {
    return <form className="form">
        <PersonalInformation />
        <EducationalInformation />
        <PracticalInformation />
    </form>
}
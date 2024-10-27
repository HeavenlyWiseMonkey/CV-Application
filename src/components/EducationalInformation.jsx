import Input from './Input';
import '../styles/Information.css';

function EducationInfo() {
    return <div className="educational experience">
        <Input name="School" />

        <Input name="Study Ttile" />

        <Input name="Study Start Date" type="date"/>

        <Input name="Study End Date" type="date"/>
    </div>
}

export default function EducationalInformation() {
    return <div className="educational information">
        <h1>Educational Information</h1>
        <EducationInfo />
    </div>
}


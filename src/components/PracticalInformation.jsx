import Input from './Input';
import '../styles/Information.css';

function PracticalInfo() {
    return <div className="practical experience">
        <Input name="Company" />

        <Input name="Position Title" />

        <Input name="Responsibilities" />

        <Input name="Company Start Date" type="date"/>

        <Input name="Company End Date" type="date"/>
    </div>
}
export default function PracticalInformation() {
    return <div className="practical information">
        <h1>Practical Information</h1>

        <PracticalInfo />
    </div>
}
import Input from './Input';
import '../styles/Information.css';

export default function PracticalInformation({resumeInfo, handleProperty, handleSubmit}) {
    const practical = resumeInfo.practical[resumeInfo.practical.length-1];

    return <div className="practical information">
        <h1>Practical Information</h1>
        
        <Input name="Company Name" value={practical.companyName} onChange={(e) => handleProperty(e, 'practical', 'companyName')} />

        <Input name="Position Title" value={practical.positionTitle} onChange={(e) => handleProperty(e, 'practical', 'positionTitle')} />

        <Input name="Responsibilities" value={practical.responsibilities} onChange={(e) => handleProperty(e, 'practical', 'responsibilities')} />

        <div className="date">
            <Input name="Company Start Date" value={practical.companyStartDate} onChange={(e) => handleProperty(e, 'practical', 'companyStartDate')} />

            <Input name="Company End Date" value={practical.companyEndDate} onChange={(e) => handleProperty(e, 'practical', 'companyEndDate')} />
        </div>

        <button onClick={(e) => handleSubmit(e, 'practical')}>Submit</button>
    </div>
}
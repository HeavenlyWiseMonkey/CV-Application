import Input from './Input';
import '../styles/Information.css';
export {PracticalInformation, PracticalInputs};

function PracticalInputs({resumeInfo, handleProperty, index}) {
    const practical = resumeInfo.practical[index];

    return <div className="practical inputs">
        <Input name="Company Name" value={practical.companyName} onChange={(e) => handleProperty(e, 'practical', 'companyName', index)} index={index} />

        <Input name="Position Title" value={practical.positionTitle} onChange={(e) => handleProperty(e, 'practical', 'positionTitle', index)} index={index} />

        <Input name="Responsibilities" type="area" value={practical.responsibilities} onChange={(e) => handleProperty(e, 'practical', 'responsibilities', index)} index={index} />

        <div className="date">
            <Input name="Company Start Date" value={practical.companyStartDate} onChange={(e) => handleProperty(e, 'practical', 'companyStartDate', index)} index={index} />

            <Input name="Company End Date" value={practical.companyEndDate} onChange={(e) => handleProperty(e, 'practical', 'companyEndDate', index)} index={index} />
        </div>
    </div>
}

function PracticalInformation({resumeInfo, handleProperty, handleSubmit, handleEdit}) {
    return <div className="practical information">
        <h1>Practical Information</h1>
        <PracticalInputs resumeInfo={resumeInfo} handleProperty={handleProperty} index={resumeInfo.practical.length-1} />
        <div>
            <button type="button" onClick={() => handleEdit('practical')}>Edit</button>
            <button type="button" onClick={() => handleSubmit('practical')}>Submit</button>
        </div>
    </div>
}
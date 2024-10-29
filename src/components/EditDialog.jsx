import {EducationalInputs} from './EducationalInformation';
import {PracticalInputs} from './PracticalInformation';
import '../styles/Edit.css'

export default function EditDialog({resumeInfo, curEdit, endEdit, handleProperty, handleDelete}) {
    let editItems;
    let i = 0;
    if (curEdit === 'education') {
        editItems = resumeInfo.education.map((item) => 
            <div className="box" key={item.id}>
                <EducationalInputs resumeInfo={resumeInfo} handleProperty={handleProperty} index={i++} />
                {(resumeInfo.education.length>1) && <button type="button" onClick={() => handleDelete('education', item.id)}>Delete</button>}
            </div>
        );
    }
    else if (curEdit === 'practical') {
        editItems = resumeInfo.practical.map((item) =>
            <div className="box" key={item.id}>
                <PracticalInputs resumeInfo={resumeInfo} handleProperty={handleProperty} index={i++} />
                {(resumeInfo.practical.length>1) && <button type="button" onClick={() => handleDelete('practical', item.id)}>Delete</button>}
            </div>
        );
    }

    return <dialog className='edit'>
        <div className='editArea'>
            {editItems}
        </div>
        <button type="button" onClick={endEdit}>Finish Changes</button>
    </dialog>
}
import {useState} from 'react';
import Input from './Input';
import '../styles/Information.css';

export default function PersonalInformation() {
    const [name, setName] = useState('John Doe');

    function handleName(e) {
        setName(e.target.value);
    }

    return <div className="personal information">
        <h1>Personal Information</h1>

        <Input name="Name" value={name} onChange={handleName} />

        <Input name="Email" />

        <Input name="Phone Number" />
    </div>
}
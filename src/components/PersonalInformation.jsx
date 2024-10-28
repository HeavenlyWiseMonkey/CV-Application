import {useState} from 'react';
import Input from './Input';
import '../styles/Information.css';

export default function PersonalInformation({resumeInfo, handleProperty}) {
    return <div className="personal information">
        <h1>Personal Information</h1>

        <Input name="Name" value={resumeInfo.name} onChange={(e) => handleProperty(e, 'name')} />

        <Input name="Email" value={resumeInfo.email} onChange={(e) => handleProperty(e, 'email')} />

        <Input name="Phone Number" value={resumeInfo.phoneNumber} onChange={(e) => handleProperty(e, 'phoneNumber')} />
    </div>
}
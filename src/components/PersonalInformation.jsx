import Input from './Input';
import '../styles/Information.css';

// function personalInformation(name, email, phoneNumber) {
//     return {name, email, phoneNumber};
// }

export default function PersonalInformation() {
    return <div className="personal information">
        <h1>Personal Information</h1>

        <Input name="Name" />

        <Input name="Email" />

        <Input name="Phone Number" />
    </div>
}
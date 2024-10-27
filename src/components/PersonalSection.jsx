export default function PersonalSection({resumeInfo}) {
    return <section className="personal section">
        <h1>{resumeInfo.name}</h1>
        <h2>Email: {resumeInfo.email}</h2>
        <h2>Phone Number: {resumeInfo.phoneNumber}</h2>
    </section>
}
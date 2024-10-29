export default function PersonalSection({resumeInfo}) {
    return <section className="personal section">
        <h1>{resumeInfo.name}</h1>
        <div className="personal info">
            <h2><img src="/email-outline.svg"></img> {resumeInfo.email}</h2>
            <h2><img src="/phone-outline.svg"></img> {resumeInfo.phoneNumber}</h2>
        </div>
    </section>
}
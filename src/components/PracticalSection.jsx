import '../styles/Experience.css';

function PracticalExperience({resumeInfo, index}) {
    const practical = resumeInfo.practical[index];
    return <div className="practical experience">
        <h1>Practical Experience</h1>
        <h2>{practical.companyName}</h2>
        <h2>{practical.positionTitle}</h2>
        <h2>{practical.responsibilities}</h2>
        <h3>{practical.companyStartDate} - {practical.companyEndDate}</h3>
    </div>
}

export default function PracticalSection({resumeInfo, index}) {
    return <section className="practical section">
        <PracticalExperience resumeInfo={resumeInfo} index={index} />
    </section>
}
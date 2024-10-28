import '../styles/Experience.css';

function EducationExperience({resumeInfo, index}) {
    const education = resumeInfo.education[index];
    return <div className="educational experience">
        <h1>Educational Experience</h1>
        <h2>{education.studyTitle}</h2>
        <h2>{education.schoolName}</h2>
        <h3>{education.studyStartDate} - {education.studyEndDate}</h3>
    </div>
}

export default function EducationalSection({resumeInfo, index}) {
    return <section className="educational section">
        <EducationExperience resumeInfo={resumeInfo} index={index} />
    </section>
}
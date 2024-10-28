import '../styles/Experience.css';

export default function EducationalSection({resumeInfo}) {
    const education = resumeInfo.education;

    const degrees = education.map(degree => 
        <div key={degree.id} className="educational experience">
            <h2>{degree.studyTitle}</h2>
            <h2>{degree.schoolName}</h2>
            <h3>{degree.studyStartDate} - {degree.studyEndDate}</h3>
        </div>
    );

    return <section className="educational section">
        <h1>Educational Experience</h1>
        {degrees}
    </section>
}
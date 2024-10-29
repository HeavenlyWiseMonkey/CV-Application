import '../styles/Experience.css';

export default function EducationalSection({resumeInfo}) {
    const education = resumeInfo.education;

    const degrees = education.map(degree => 
        <div key={degree.id} className="educational experience">
            {(degree.studyTitle) && <p className="study">{degree.studyTitle}</p>}
            {(degree.schoolName) && <h2 className="school">{degree.schoolName}</h2>}
            {(degree.studyStartDate && degree.studyEndDate) && <p className="date">{degree.studyStartDate} - {degree.studyEndDate}</p>}
        </div>
    );

    return <section className="educational section">
        <h1>Educational Experience</h1>
        {degrees}
    </section>
}
import '../styles/Experience.css';

export default function PracticalSection({resumeInfo}) {
    const practical = resumeInfo.practical;

    const jobs = practical.map(job => 
        <div key={job.id} className="practical experience">
            <h2>{job.companyName}</h2>
            <h2>{job.positionTitle}</h2>
            <h3>{job.responsibilities}</h3>
            <h3>{job.companyStartDate} - {job.companyEndDate}</h3>
        </div>
    );


    return <section className="practical section">
        <h1>Practical Experience</h1>
        {jobs}
    </section>
}
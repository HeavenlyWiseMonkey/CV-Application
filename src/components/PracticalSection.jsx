import '../styles/Experience.css';

export default function PracticalSection({resumeInfo}) {
    const practical = resumeInfo.practical;

    const jobs = practical.map(job => 
        <div key={job.id} className="practical experience">
            {(job.companyName) && <h2 className="job">{job.companyName}</h2>}
            {(job.positionTitle) && <p className="position">{job.positionTitle}</p>}
            {(job.responsibilities) && <p className="responsibilities">{job.responsibilities}</p>}
            {(job.companyStartDate && job.companyEndDate) && <p className="date">{job.companyStartDate} - {job.companyEndDate}</p>}
        </div>
    );

    return <section className="practical section">
        <h1>Practical Experience</h1>
        {jobs}
    </section>
}
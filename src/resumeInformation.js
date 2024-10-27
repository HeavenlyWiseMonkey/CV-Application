function createEducation(schoolName, studyTitle, studyStartDate, studyEndDate) {
    return {schoolName, studyTitle, studyStartDate, studyEndDate};
}
  
function createPractical(company, positionTitle, responsibilities, companyStartDate, companyEndDate) {
    return {company, positionTitle, responsibilities, companyStartDate, companyEndDate};
}
  
const resumeInformation = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "(555)-555-5555",
    education: [createEducation("Fake University", "Computer Science", "09/03/2020", "06/20/2024")],
    practical: [createPractical("Fake company", "Fake position", "Fake responsibilities", "08/20/2024", "08/21/2024")]
}

export {createEducation, createPractical, resumeInformation};
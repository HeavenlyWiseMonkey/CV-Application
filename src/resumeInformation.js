function createEducation(schoolName, studyTitle, studyStartDate, studyEndDate) {
    return {schoolName, studyTitle, studyStartDate, studyEndDate};
}
  
function createPractical(companyName, positionTitle, responsibilities, companyStartDate, companyEndDate) {
    return {companyName, positionTitle, responsibilities, companyStartDate, companyEndDate};
}
  
const resumeInformation = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "(555)-555-5555",
    education: [createEducation("Fake University", "Computer Science", "09/2020", "06/2024")],
    practical: [createPractical("Fake company", "Fake position", "Fake responsibilities", "08/2024", "08/2024")],
}

resumeInformation.createEducation = createEducation;
resumeInformation.createPractical = createPractical;

export {resumeInformation};
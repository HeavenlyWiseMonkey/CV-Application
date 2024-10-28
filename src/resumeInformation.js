const resumeInformation = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "(555)-555-5555",
    education: [],
    practical: [],
    createEducation(schoolName, studyTitle, studyStartDate, studyEndDate, id=self.crypto.randomUUID()) {
        this.education.push({schoolName, studyTitle, studyStartDate, studyEndDate, id});
    },
    createPractical(companyName, positionTitle, responsibilities, companyStartDate, companyEndDate, id=self.crypto.randomUUID()) {
        this.practical.push({companyName, positionTitle, responsibilities, companyStartDate, companyEndDate, id});
    },
}

resumeInformation.createEducation("Fake University", "Computer Science", "09/2020", "06/2024");
resumeInformation.createPractical("Fake company", "Fake position", "Fake responsibilities", "08/2024", "08/2024");

export {resumeInformation};
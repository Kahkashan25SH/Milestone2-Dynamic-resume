// Get form and resume container elements

var form = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resumeContainer");

// Add event listener to the form submission

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        education: formData.get("education"),
        workExperience: formData.get("workExperience"),
        skills: formData.get("skills").split(",").map(function (skill) { return skill.trim(); })
    };

    // Generate the resume
    generateResume(resumeData);
});

// Function to generate resume dynamically
function generateResume(data) {

    // Clear previous resume content
    resumeContainer.innerHTML = "";

    // Create the resume structure
    var resumeHTML = "\n      <h2>".concat(data.name, "</h2>\n      <p>Email: ").concat(data.email, "</p>\n      <p>Phone: ").concat(data.phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(data.education, "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(data.workExperience, "</p>\n      <h3>Skills</h3>\n      <ul>\n        ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n      </ul>\n    ");
   
    // Append the resume to the container
    resumeContainer.innerHTML = resumeHTML;
}

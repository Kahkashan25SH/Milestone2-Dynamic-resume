// Define the Resume Data interface
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    workExperience: string;
    skills: string[];
  }
  
  // Get form and resume container elements
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;
  
  // Add event listener to the form submission
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(form);
    
    const resumeData: ResumeData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      education: formData.get("education") as string,
      workExperience: formData.get("workExperience") as string,
      skills: (formData.get("skills") as string).split(",").map(skill => skill.trim())
    };
  
    // Generate the resume
    generateResume(resumeData);
  });
  
  // Function to generate resume dynamically
  function generateResume(data: ResumeData) {
    // Clear previous resume content
    resumeContainer.innerHTML = "";
  
    // Create the resume structure
    const resumeHTML = `
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <h3>Education</h3>
      <p>${data.education}</p>
      <h3>Work Experience</h3>
      <p>${data.workExperience}</p>
      <h3>Skills</h3>
      <ul>
        ${data.skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    `;
  
    // Append the resume to the container
    resumeContainer.innerHTML = resumeHTML;
  }
  
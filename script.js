```javascript
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const overlay = document.getElementById("overlay");
const modalContent = document.getElementById("modalContent");

const projectData = {

  pcb: `

    <h2>PCB Design & Validation</h2>

    <p>
      This project focused on designing and evaluating
      a printed circuit board from schematic planning
      through testing and validation.
    </p>

    <h4>Overview</h4>

    <p>
      A hardware-centered project focused on turning
      a board concept into a functional and testable design.
    </p>

    <h4>Tools Used</h4>

    <p>
      PCB workflows, circuit planning,
      hardware debugging, and validation testing.
    </p>

    <h4>My Role</h4>

    <ul>
      <li>Worked through schematic planning</li>
      <li>Organized board layouts</li>
      <li>Tested hardware behavior</li>
      <li>Documented debugging steps</li>
    </ul>

    <h4>Challenges</h4>

    <p>
      One challenge was identifying smaller hardware issues
      that affected overall board performance.
    </p>

    <h4>Result</h4>

    <p>
      Strengthened my understanding of hardware validation,
      testing workflows, and debugging processes.
    </p>

  `,



  firmware: `

    <h2>Embedded Firmware System</h2>

    <p>
      Built firmware focused on sensors,
      communication systems,
      and structured real-time behavior.
    </p>

    <h4>Overview</h4>

    <p>
      An embedded systems project connecting
      firmware logic with hardware interaction.
    </p>

    <h4>Tools Used</h4>

    <p>
      Embedded C/C++,
      debugging workflows,
      sensor interfacing,
      and testing systems.
    </p>

    <h4>My Role</h4>

    <ul>
      <li>Built structured firmware logic</li>
      <li>Handled sensor communication</li>
      <li>Tested reliability behavior</li>
      <li>Improved debugging structure</li>
    </ul>

    <h4>Challenges</h4>

    <p>
      The biggest challenge was making firmware behavior
      reliable while keeping the code readable.
    </p>

    <h4>Result</h4>

    <p>
      Improved my understanding of maintainable firmware
      and embedded debugging systems.
    </p>

  `,



  cloud: `

    <h2>Cloud Deployment Dashboard</h2>

    <p>
      This project explored cloud deployment concepts
      through a dashboard focused on uptime monitoring,
      deployment systems,
      and infrastructure visibility.
    </p>

    <h4>Overview</h4>

    <p>
      A cloud-focused project centered around scalable
      infrastructure concepts and deployment workflows.
    </p>

    <h4>Tools Used</h4>

    <p>
      Cloud hosting concepts,
      deployment pipelines,
      monitoring systems,
      infrastructure visualization,
      and GitHub workflow integration.
    </p>

    <h4>My Role</h4>

    <ul>
      <li>Designed dashboard structure</li>
      <li>Built deployment workflow concepts</li>
      <li>Focused on scalability systems</li>
      <li>Worked on uptime monitoring ideas</li>
    </ul>

    <h4>Challenges</h4>

    <p>
      One challenge was designing a system
      that represented complex infrastructure
      in a clean and readable way.
    </p>

    <h4>Result</h4>

    <p>
      Strengthened my understanding of cloud systems,
      deployment workflows,
      and scalable infrastructure concepts.
    </p>

  `,



  software: `

    <h2>Software Application Prototype</h2>

    <p>
      Built a modular software prototype
      with clean organization and readable structure.
    </p>

    <h4>Overview</h4>

    <p>
      A software project focused on creating
      maintainable and scalable application architecture.
    </p>

    <h4>Tools Used</h4>

    <p>
      HTML,
      CSS,
      JavaScript,
      modular structure,
      and interface planning.
    </p>

    <h4>My Role</h4>

    <ul>
      <li>Built modular structure</li>
      <li>Improved code readability</li>
      <li>Worked on interface presentation</li>
      <li>Documented architecture decisions</li>
    </ul>

    <h4>Challenges</h4>

    <p>
      The main challenge was balancing simplicity
      with scalability and organization.
    </p>

    <h4>Result</h4>

    <p>
      Created a stronger foundation
      for scalable application development.
    </p>

  `
};



function openModal(projectKey) {

  if (!overlay || !modalContent) return;

  modalContent.innerHTML =
    projectData[projectKey] ||
    "<p>Project details coming soon.</p>";

  overlay.classList.add("active");

}



function closeModal() {

  if (!overlay) return;

  overlay.classList.remove("active");

}



if (overlay) {

  overlay.addEventListener("click", function (e) {

    if (e.target === overlay) {
      closeModal();
    }

  });

}



document.addEventListener("keydown", function (e) {

  if (e.key === "Escape") {
    closeModal();
  }

});



window.openModal = openModal;
window.closeModal = closeModal;
```

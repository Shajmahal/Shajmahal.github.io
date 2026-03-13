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
      This project focused on designing and validating a printed circuit board from the schematic stage through physical testing.
      The goal was to build a reliable hardware system while documenting the design decisions and debugging process clearly.
    </p>

    <h4>What the project is</h4>
    <p>
      A hardware design project centered on PCB planning, component placement, signal flow, and validation.
      It involved moving from concept to a real board that could be tested and improved.
    </p>

    <h4>What I worked on</h4>
    <ul>
      <li>Schematic design and layout planning</li>
      <li>Component organization and board structure</li>
      <li>Testing and debugging hardware issues</li>
      <li>Validation of board behavior and documentation</li>
    </ul>

    <h4>What I learned</h4>
    <p>
      I learned how small design decisions affect overall board performance and how important structured debugging is in hardware work.
    </p>
  `,

  firmware: `
    <h2>Embedded Firmware System</h2>

    <p>
      This project involved developing firmware for a system that interacts with sensors and handles real-time behavior.
      The focus was on writing clear, reliable code for embedded use.
    </p>

    <h4>What the project is</h4>
    <p>
      An embedded systems project that connects firmware logic with hardware communication and real-time data handling.
    </p>

    <h4>What I worked on</h4>
    <ul>
      <li>Sensor communication and data handling</li>
      <li>Structured firmware logic</li>
      <li>Error handling and debugging</li>
      <li>Testing for reliability and system behavior</li>
    </ul>

    <h4>What I learned</h4>
    <p>
      I learned how important code structure, testing, and defensive design are when writing firmware for systems that need to behave reliably.
    </p>
  `,

  software: `
    <h2>Software Application Prototype</h2>

    <p>
      This project focused on building a modular software prototype with clean organization, simple interface design, and readable documentation.
    </p>

    <h4>What the project is</h4>
    <p>
      A software project aimed at creating a clear and organized application structure that is easy to understand, improve, and present.
    </p>

    <h4>What I worked on</h4>
    <ul>
      <li>Modular code structure</li>
      <li>Simple and clean user interface ideas</li>
      <li>Documentation of design choices</li>
      <li>Improving readability and maintainability</li>
    </ul>

    <h4>What I learned</h4>
    <p>
      I learned how much good architecture and documentation improve both development and presentation of software work.
    </p>
  `
};

function openModal(projectKey) {
  if (!overlay || !modalContent) return;
  modalContent.innerHTML = projectData[projectKey];
  overlay.classList.add("active");
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("active");
}

if (overlay) {
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

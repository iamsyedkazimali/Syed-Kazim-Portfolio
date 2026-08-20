const roles = [
  "Computer Science Student",
  "Aspiring Cybersecurity Specialist",
  "Networking Enthusiast",
  "Software Developer"
];


let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const display = document.getElementById("typing");

  if (i < roles.length) {
    currentRole = roles[i];

    if (!isDeleting) {
      display.textContent = currentRole.substring(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      display.textContent = currentRole.substring(0, j--);
      if (j === 0) {
        isDeleting = false;
        i++;
        if (i >= roles.length) i = 0;
      }
    }
  }

  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// 🔥 Auto-close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});



function openSkillModal(skill) {
  const title = document.getElementById("skill-title");
  const desc = document.getElementById("skill-description");
  const modal = document.getElementById("skillModal");

  const skills = {
  cpp: {
    title: "C++",
    desc: "Programming language used in academic and practical projects, including object-oriented programming, file handling, and console-based applications."
  },

  java: {
    title: "Java",
    desc: "Object-oriented programming language used to build academic projects involving classes, objects, file handling, and application logic."
  },

  python: {
    title: "Python (Basics)",
    desc: "Currently developing foundational Python skills for scripting, automation, programming practice, and future cybersecurity projects."
  },

  csharp: {
    title: "C# (Basics)",
    desc: "Foundational knowledge of C# syntax, programming concepts, and object-oriented programming."
  },

  sql: {
    title: "SQL",
    desc: "Foundational knowledge of relational databases, SQL queries, and working with structured data."
  },

  cyber: {
    title: "Cybersecurity Fundamentals",
    desc: "Developing foundational cybersecurity knowledge including security concepts, cyber threats, risk management, network security, and security awareness."
  },

  networking: {
    title: "Computer Networking",
    desc: "Building foundational knowledge of computer networks, network communication, IP addressing, routing concepts, and TCP/IP."
  },

  tcpip: {
    title: "TCP/IP Fundamentals",
    desc: "Understanding the fundamentals of the TCP/IP model and how network protocols support communication between devices."
  },

  ip: {
    title: "IP Addressing",
    desc: "Understanding IPv4 addressing, network identification, host addressing, and the role of IP addresses in network communication."
  },

  html: {
    title: "HTML",
    desc: "Used to structure web pages and build the semantic foundation of web-based projects."
  },

  css: {
    title: "CSS",
    desc: "Used to style interfaces, create layouts, and build responsive web pages."
  },

  js: {
    title: "JavaScript",
    desc: "Used to add interactivity and functionality to web projects, including forms, modals, navigation, and dynamic interface behavior."
  },

  react: {
    title: "React (Basic)",
    desc: "Foundational knowledge of React components, props, state, and component-based interface development."
  },

  tailwind: {
    title: "Tailwind CSS (Basic)",
    desc: "Foundational experience using utility classes to build and style responsive user interfaces."
  },

  git: {
    title: "Git",
    desc: "Used for version control, tracking project changes, managing repositories, and maintaining development history."
  },

  github: {
    title: "GitHub",
    desc: "Used to host, manage, document, and share software projects and source code."
  },

  vscode: {
    title: "Visual Studio Code",
    desc: "Primary code editor used for web development, programming practice, and project development."
  },

  terminal: {
    title: "Command Line / Terminal",
    desc: "Familiar with command-line operations for file navigation, Git, compiling programs, running scripts, and development workflows."
  },

  intellij: {
    title: "IntelliJ IDEA",
    desc: "Java development environment used for object-oriented programming and Java-based academic projects."
  },

  oop: {
    title: "Object-Oriented Programming",
    desc: "Understanding of classes, objects, encapsulation, inheritance, polymorphism, and object-oriented program structure."
  },

  dsa: {
    title: "Data Structures & Algorithms",
    desc: "Developing foundational knowledge of data structures, algorithms, problem-solving, and algorithmic thinking."
  },

  file: {
    title: "File Handling",
    desc: "Used file input and output to store, retrieve, and manage data in console-based programming projects."
  },

  database: {
    title: "Database Fundamentals",
    desc: "Foundational understanding of structured data, relational databases, database concepts, and SQL."
  }
};

  
  const data = skills[skill];
  if (data) {
    title.textContent = data.title;
    desc.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeSkillModal() {
  document.getElementById("skillModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("skillModal");
  if (e.target === modal) {
    closeSkillModal();
  }
});


function openAchievement(key) {
  const title = document.getElementById("achievement-title");
  const desc = document.getElementById("achievement-description");
  const modal = document.getElementById("achievementModal");

  const data = {
  hero: {
    title: "Hero of Hyderabad Shield",
    desc: "Recognized for outstanding participation and contribution at a college-level event."
  },

  book: {
    title: "Author — Periodic Table Book",
    desc: "Author of an educational resource about chemical elements, their properties, uses, and history."
  },

  leadership: {
    title: "University Leadership",
    desc: "Served in a student leadership role at HITMS, contributing to class coordination, communication, and academic activities."
  }
};

  if (data[key]) {
    title.textContent = data[key].title;
    desc.textContent = data[key].desc;
    modal.style.display = "flex";
  }
}

function closeAchievementModal() {
  document.getElementById("achievementModal").style.display = "none";
}

// Optional: Close achievement modal on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("achievementModal");
  if (e.target === modal) {
    closeAchievementModal();
  }
});



function openCert(certId) {
  const modal = document.getElementById("certModal");
  const title = document.getElementById("cert-title");
  const image = document.getElementById("cert-image");
  const description = document.getElementById("cert-description");
  const placeholder = document.getElementById("cert-placeholder");

  const certs = {
    cpp: {
      title: "C++ Essentials — Cisco ",
      image: "media/certificates/cpp-essentials.jpg",
      desc: "Completed in 2024 via Virtual University. Covered OOP, memory management, and file handling. Skills Gained: Object-Oriented Thinking, Syntax Mastery, Project Implementation."
    },
    cppSololearn: {
     title: "C++ Programming — SoloLearn",
     image: "media/certificates/cpp-sololearn.jpg",  
     desc: "Completed SoloLearn’s interactive C++ course. Covered syntax, functions, OOP, file I/O, and basic problem-solving. Skills Gained: C++ Syntax Mastery, Project Implementation, and OOP Concepts."
    },
    promptEng: {
     title: "Prompt Engineering — SoloLearn",
     image: "media/certificates/prompt-engineering-sololearn.jpg", 
     desc: "Completed SoloLearn’s Prompt Engineering course covering effective prompt crafting for AI models, prompt optimization, and task-specific AI interactions. Skills Gained: Prompt Design, AI Command Structuring, and Language Model Handling."
    },
    java: {
      title: "Java Programming Basics — Coursera",
      image: "",
      desc: "Learned Java fundamentals, loops, conditionals, OOP structure. Platform: Coursera. Skills Gained: Java Logic, Class Structures, Data Types."
    },
    cyber: {
       title: "Cybersecurity — Currently Enrolled (Cisco Networking Academy)",
       image: "",
       desc: "Learning fundamental concepts of cybersecurity including network security, ethical hacking, threat detection, and secure communication. Skills Gained: Risk Management, Basic Pen Testing, and Cyber Awareness."
    },
    frontend: {
       title: "Frontend for Beginners — Currently Enrolled (SoloLearn)",
       image: "media/certificates/frontend-sololearn.jpg",
       desc: "Completed SoloLearn's interactive course covering the basics of HTML, CSS, and JavaScript. Skills Gained: Page structure, styling, responsive layout, and basic DOM interaction."
    },
    githubActions: {
       title: "GitHub Actions — Microsoft Learn (Currently Enrolled)",
       image: "media/certificates/github-actions.jpg",
       desc: "Learning how to automate the software development lifecycle using GitHub Actions. Topics include CI/CD workflows, GitHub Script, API integration, and publishing with GitHub Packages. Part 1 & Part 2 enrolled."
    }


  };
  

  const data = certs[certId];
  if (data) {
    title.textContent = data.title;
    image.src = data.image;
    description.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}


// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeCertModal();
  }
});


function openProject(id) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("project-title");
  const image = document.getElementById("project-image");
  const desc = document.getElementById("project-description");

  const projects = {
hospital: {
  title: "Hospital Management System",
  image: "media/projects/hospital-code.png",
  desc: "Java-based object-oriented console application for managing patient records, appointments, billing, and file-based data storage. Developed as a team project. I served as the group leader responsible for coordinating the project..."
},
    carbike: {
  title: "Car & Bike Rental System",
  image: "media/projects/car-rental-code.png",
  desc: "Java console application for managing vehicle rentals and returns, with file-based data storage and receipt generation."
},
    atm: {
  title: "ATM Banking Simulator",
  image: "media/projects/atm-simulator-output.png",
  desc: "C++ console-based ATM simulation implementing PIN authentication, balance management, deposits, withdrawals, transfers, and PIN recovery."
},
   clothShop: {
  title: "Cloth Shop Management System",
  image: "media/projects/cloth-shop-output.png",
  desc: "C++ console application for managing shop inventory, billing, stock levels, daily sales records, and administrative operations."
}
  };

  const data = projects[id];
  if (data) {
    title.textContent = data.title;
    image.src = data.image;
    desc.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});


function openLightbox(imgElement) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  modalImg.src = imgElement.src;
  modal.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Optional: close on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

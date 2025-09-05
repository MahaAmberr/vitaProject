
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".sps-navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

 const navbar = document.querySelector('.sps-navbar');
  const logo = document.querySelector('.navbar-brand img');
  const originalLogo = "https://vita.spsnet.com/assets/images/logo-white.png"; 
  const scrolledLogo = "https://vita.spsnet.com/assets/images/logo-white.png"; 
  const scrollOffset = 50; 

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollOffset) {
      navbar.classList.add('scrolled');
      logo.src = scrolledLogo;
    } else {
      navbar.classList.remove('scrolled');
      logo.src = originalLogo;
    }
  });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId !== "#") {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


document.querySelectorAll(".plan-card .btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Thanks for choosing a plan! Our team will contact you soon.");
  });
});

const contents = {
  policy: `
    <h2>Information Security Policy</h2>
    <p>Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction.
    <a href="#">Learn More ›</a></p>
  `,
  roles: `
    <h2>Roles and Responsibilities</h2>
    <p>Clearly defines the responsibilities of executives, managers, and employees in maintaining security practices. Each role is accountable for ensuring compliance with security requirements and reporting security incidents. This framework strengthens accountability and creates a security-aware culture throughout the organization.
    <a href="#">Learn More ›</a></p>
  `,
  bia: `
    <h2>Business Impact Analysis</h2>
    <p>Identifies and evaluates the impact of disruptions to business operations. The analysis prioritizes critical business functions, defines recovery strategies, and ensures minimal operational downtime in the event of incidents or disasters.
    <a href="#">Learn More ›</a></p>
  `,
  classification: `
    <h2>IT System and Data Sensitivity Classification</h2>
    <p>Establishes levels of sensitivity for data and systems, ranging from public to highly confidential. This classification ensures appropriate safeguards and access controls are applied to protect sensitive assets.
    <a href="#">Learn More ›</a></p>
  `,
  inventory: `
    <h2>Sensitive IT System Inventory and Definition</h2>
    <p>Maintains an inventory of IT systems that process, store, or transmit sensitive information. Each system is defined, monitored, and secured to ensure compliance with security standards.
    <a href="#">Learn More ›</a></p>
  `,
  risk: `
    <h2>Risk Assessment</h2>
    <p>Conducts systematic risk identification, evaluation, and prioritization to protect organizational assets. The process determines risk levels and applies appropriate mitigation strategies to safeguard critical resources.
    <a href="#">Learn More ›</a></p>
  `,
  audits: `
    <h2>IT Security Audits</h2>
    <p>Performs regular audits to evaluate the effectiveness of security controls, compliance with policies, and alignment with industry standards. Audits provide actionable insights to continuously strengthen security posture.
    <a href="#">Learn More ›</a></p>
  `,
  controls: `
    <h2>Security Controls Catalog</h2>
    <p>Provides a comprehensive list of security controls mapped to regulatory frameworks and organizational needs. This catalog ensures consistent application of safeguards across all IT systems.
    <a href="#">Learn More ›</a></p>
  `
};

const buttons = document.querySelectorAll(".accordion");
const contentBox = document.getElementById("content");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
  
    buttons.forEach(b => b.classList.remove("active"));
    
    this.classList.add("active");

    
    const section = this.getAttribute("data-section");
    contentBox.innerHTML = contents[section];
  });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".checklist input[type='checkbox']").forEach(checkbox => {
  checkbox.addEventListener("change", function() {
    this.parentElement.style.color = this.checked ? "#333" : "#aaa";
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let company = document.getElementById("company").value.trim();
  let role = document.getElementById("role").value.trim();
  let date = document.getElementById("date").value.trim();

  // Regex patterns
  let phonePattern = /^[0-9]{10}$/; 
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/; 

  // Validation checks
  if(name === "") valid = false;
  if(!phonePattern.test(phone)) valid = false;
  if(!emailPattern.test(email)) valid = false;
  if(company === "") valid = false;
  if(role === "") valid = false;
  if(!datePattern.test(date)) valid = false;

  if(valid) {
    document.getElementById("success-banner").style.display = "block";
    this.reset();
    setTimeout(() => {
      document.getElementById("success-banner").style.display = "none";
    }, 4000); 
  } else {
    alert("Please fill out all fields correctly.\nPhone: 10 digits\nEmail: valid format\nDate: dd/mm/yyyy");
  }
});

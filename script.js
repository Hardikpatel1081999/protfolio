function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".pmenu-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function contactBot() {
  const options = ["Call", "Text"];
  const choice = prompt("How would you like to contact Me ? Enter '1' to call or '2' to send a text message.");

  if (choice === "1") {
    window.location.href = 'tel:+447436349109'; 
  } else if (choice === "2") {
    window.location.href = 'sms:+447436349109'; 
  } else {
    alert("Invalid choice. Please try again.");
  }
}
document.addEventListener('DOMContentLoaded', function () {
  try {
    const skillsPerPage = 6; 
    const skills = document.querySelectorAll('.skill-card');
    const totalPages = Math.ceil(skills.length / skillsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const skillsGrid = document.querySelector('.skills-grid');

        
        skillsGrid.style.opacity = 0;

        setTimeout(() => {
            skills.forEach(skill => skill.classList.add('hidden'));

            const start = (page - 1) * skillsPerPage;
            const end = start + skillsPerPage;
            for (let i = start; i < end; i++) {
                if (skills[i]) {
                    skills[i].classList.remove('hidden');
                }
            }

            skillsGrid.style.opacity = 1;

            document.querySelector('#prev').disabled = page === 1;
            document.querySelector('#next').disabled = page === totalPages;

        }, 500); 
    }

    showPage(currentPage);

    document.querySelector('#prev').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.querySelector('#next').addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
  } catch (error) {
    console.error(error);
  }
});
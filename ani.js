const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-pop");
    const popup = document.getElementById("skill-popup");
  
    skillItems.forEach(skill => {
      skill.addEventListener("mouseover", (event) => {
        const skillName = skill.getAttribute("data-skill");
        const level = skill.getAttribute("data-level");
  
        
        popup.innerHTML = `
          <strong>${skillName}</strong><br>
          <div style="background: #444; border-radius: 5px; overflow: hidden; height: 10px; margin-top: 5px;">
            <div style="width: ${level}; height: 100%; background: linear-gradient(to right, #2e30ac, #E75474);"></div>
          </div>
        `;
  
        
        popup.style.top = `${event.pageY - 20}px`;
        popup.style.left = `${event.pageX}px`;
        popup.style.visibility = "visible";
      });
  
      skill.addEventListener("mousemove", (event) => {
        popup.style.top = `${event.pageY - 20}px`;
        popup.style.left = `${event.pageX}px`;
      });
  
      skill.addEventListener("mouseout", () => {
        popup.style.visibility = "hidden";
      });
    });
  });
  function submitForm() {
    
    const form = document.getElementById("myForm");
    if (form.checkValidity()) {
      
      alert("You have successfully filled the form!");
      form.reset();
    } else {
      
      form.reportValidity();
    }
  }
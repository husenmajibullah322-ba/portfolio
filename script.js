// Smooth Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if(top > offset){
            section.classList.add("show");
        }

    });

});
function addCertificate(){

    const name =
    document.getElementById("certificateName").value;

    const fileInput =
    document.getElementById("certificateFile");

    const file =
    fileInput.files[0];

    if(!name || !file){
        alert("Please enter certificate name and select file");
        return;
    }

    const fileURL =
    URL.createObjectURL(file);

    const card =
    document.createElement("div");

    card.className =
    "certificate-card";

    card.innerHTML = `
        <span>${name}</span>

        <div class="certificate-actions">

            <a href="${fileURL}"
               target="_blank"
               class="view-btn">
               View
            </a>

            <button
                class="remove-btn"
                onclick="removeCertificate(this)">
                Remove
            </button>

        </div>
    `;

    document
        .getElementById("certificateList")
        .appendChild(card);

    document.getElementById("certificateName").value="";
    document.getElementById("certificateFile").value="";
}

function removeCertificate(btn){
    btn.parentElement.parentElement.remove();
}
// Contact Form Alert

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank You! Your message has been sent.");

        form.reset();

    });

}
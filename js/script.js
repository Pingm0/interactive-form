// Below are place holders for the HTML elements

const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
const design = document.querySelector("#design");
const colorDropdown = document.querySelector("#color");

const colorOpstion = colorDropdown.children
console.log(colorOpstion)




// adding the foucs to the Name input element 
nameInput.focus();

// making the OtherJobRole Input hidden by defualt 
otherJobRole.style.display = "none";
//disableing the color dropdown menue 
colorDropdown.setAttribute("disabled","");

/**
 * event Listiners
 * **/ 
// showing the OtherJobRole input element if the user selects other from the JobRole Drop Down
jobRoleSelect.addEventListener('change', (e) => {
    if (e.target.value === "other"){

    otherJobRole.style.display = "block";
} else {
    otherJobRole.style.display = "none";
}
});

// filtering the color result based on the Design drop down 

design.addEventListener('change', (e) => {
    colorDropdown.removeAttribute("disabled","");
    
    const selection = e.target.value;
    //colorOpstion[0].style.display = "none";
   
   
   for (let i = 0; i < colorOpstion.length; i++) {
       if (colorOpstion[i].dataset.theme !== selection) {
            //colorOpstion[i].style.display = "none";
            colorOpstion[i].setAttribute('hidden', 'false');
       }
       else {

        //colorOpstion[i].style.display = "block";
        colorOpstion[i].setAttribute('selected', 'true');

       }       
   }
   //colorOpstion[0].setAttribute('selected', 'true');
});












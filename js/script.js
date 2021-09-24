// Below are place holders for the HTML elements

const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
const design = document.querySelector("#design");
const colorDropdown = document.querySelector("#color");
const totalPlaceholder = document.querySelector(".activities-cost")
const form = document.querySelector('form');
let amount = 0;

const colorOption = colorDropdown.children
const activities = document.querySelector('#activities-box')
console.log(activities)




// adding the foucs to the Name input element 
nameInput.focus();

// making the OtherJobRole Input hidden by defualt 
otherJobRole.hidden = true;
//disableing the color dropdown menue 
colorDropdown.setAttribute("disabled","");

/**
 * event Listiners
 * **/ 
// showing the OtherJobRole input element if the user selects other from the JobRole Drop Down
jobRoleSelect.addEventListener('change', (e) => {
    if (e.target.value === "other"){

      otherJobRole.hidden = false ;

} else {

    otherJobRole.hidden = true ;
}
});

// filtering the color result based on the Design drop down 

design.addEventListener('change', (e) => {
    colorDropdown.removeAttribute("disabled","");
    
    const selection = e.target.value;
     
   for (let i = colorOption.length -1 ; i > 0 ; i--) {
       if (colorOption[i].dataset.theme === selection) {
        colorOption[i].hidden = false;
        colorOption[i].setAttribute('selected', true)
       
       }
       else {

        colorOption[i].hidden = true;
        colorOption[i].removeAttribute('selected', false)
       }      
   }  
});


// Activities section work 

activities.addEventListener('click', (e) => {

    console.log(e.target)

    if (e.target.tagName === "INPUT") {

        if (e.target.checked) {
            amount += parseInt(e.target.dataset.cost)
        }
        else {
            amount -= parseInt(e.target.dataset.cost)
        }   
    }
    totalPlaceholder.innerHTML = `Total: $${amount}`
})



// Credicat card Section
const creditCard = document.querySelector("#credit-card")
console.log(creditCard.className)
const paypal = document.querySelector("#paypal")
const bitcoin = document.querySelector("#bitcoin")
const paymentSelector = document.querySelector("#payment")

paymentSelector.firstElementChild.nextElementSibling.setAttribute("selected", true)

paypal.hidden = true;
bitcoin.hidden = true;

paymentSelector.addEventListener("change", (e) => {

    const payMethod = e.target.value ;
    const paymentsTypes = [creditCard,paypal,bitcoin]

    for (let i = 0; i < paymentsTypes.length; i++) {

        if (payMethod == paymentsTypes[i].className) {
            //paymentsTypes[i].hidden = false ;
            paymentsTypes[i].hidden = false;
            
        }

        else {
            paymentsTypes[i].hidden = true;
        }     
    }

})

//Form Validation helper functions Section

const nameVal = () => {
   return /^[\w]+\s*[\w]+$/.test(nameInput);
   

}

const emailVal = (email) => {
    return  /^\D[^@\s]+@\S[^@\s]+\.[^@\s]+$/.test(email);
  }


  form.addEventListener('submit', (e) => {

    if(nameVal()) {
        console.log('Submmited')
    }
    else
    {
        e.preventDefault()
        console.log('not')
    }


  })



  console.log(nameVal())
  console.log(emailVal("zoom779@gmail.com"))



















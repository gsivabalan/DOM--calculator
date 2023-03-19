// let firstName=document.getElementById("firstName");;
// let log=document.getElementById("log");
// function SubmitForm(event){
//     event.preventDefault();
//     console.log(firstName.value);
//     log.innerText=firstName.value;
//     log.innerText=lastname.value;

// }
// let form=document.getElementById("myForm");
// form.addEventListener("submit", SubmitForm);
// function SubmitForm(){
    // let firstname=document.getElementById("first-name");
//     let lastName=document.getElementById("lastName").value;
//     let address=document.getElementById("address").value;
//     let pincode=document.getElementById("pincode").value;


let form = document.getElementById('form');
		const table = document.getElementById('table');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let formData = new FormData(form);
            let foodValues = Array.from(formData.getAll('food[]')).join(', ');
            let newRow = table.insertRow(-1);
            newRow.insertCell(0).textContent = formData.get('first-name');
            newRow.insertCell(1).textContent = formData.get('last-name');
            newRow.insertCell(2).textContent = formData.get('address');
            newRow.insertCell(3).textContent = formData.get('pincode');
            newRow.insertCell(4).textContent = formData.get('gender');
            newRow.insertCell(5).textContent = foodValues;
            newRow.insertCell(6).textContent = formData.get('state');
            newRow.insertCell(7).textContent = formData.get('country');
            form.reset();
        });
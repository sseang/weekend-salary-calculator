console.log('!!!Hello!!!')




// [x]This application should have a form with five inputs that collect
// a new employee's first name, last name, ID number, job title, annual salary.

// When the "Submit" button is clicked:
// [x]Create button 

let annualArr = []
let totalMonthly = 0;

//create funtion for on clicksubmit event
function submitForm(event) {
    console.log('In the submit function:');
  
    
    //obtain all input elements
    const firstName = document.querySelector('#firstName-input').value;
    console.log(firstName);
    
    const lastName = document.querySelector('#lastName-input').value;
    console.log(lastName);
    
    const ID = document.querySelector('#ID-input').value;
    console.log(ID);
    
    const title = document.querySelector('#title-input').value;
    console.log(title);
    
    const annual = document.querySelector('#annual-input').value;
    console.log(annual);

    const monthly = document.querySelector('#monthly');

    
    // A new employee row should be added to the table.
    const employeeTable = document.querySelector ('#tableContent');
    console.log('Table:', employeeTable);
    employeeTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${ID}</td>
        <td>${title}</td>
        <td>${annual}</td>
        <td><button>Delete</button></td>
    </tr>
    `;
    
    // The form inputs should be cleared out. Ask class why this does not work
    // firstName.value= '';
    // lastName.value= '';
    // ID.value= '';
    // title.value= '';
    // annual.value= '';
 
    if (annual != '') {
        annualArr.push(parseInt(annual));
        totalMonthly += annualArr[0];
        annualArr.shift();
    }

    console.log(totalMonthly);
    console.log('Monthly:', monthly);
    //let newAnnual = annual;
    //console.log(newAnnual);

    document.querySelector('#firstName-input').value = '';
    document.querySelector('#lastName-input').value = '';
    document.querySelector('#ID-input').value = '';
    document.querySelector('#title-input').value = '';
    document.querySelector('#annual-input').value = '';

    //const monthly = document.querySelector('#monthly');
    //console.log('Monthly:', monthly);
    //let newAnnual = annual;
    //console.log(newAnnual);



}

submitForm();
// The footer's total monthly cost should be updated.
//penguinsElement.innerHTML = '';
// If the total monthly cost exceeds $20,000, apply an over-budget CSS class
// to the footer element.

//  When applied, this CSS class should provide a clear visual indication that the 
// monthly cost has been exceeded. (This could be as simple as turning the footer text red.)

// Create a "Delete" button that removes an employee from the DOM.

// For base mode, the total monthly cost does not need to be updated when an employee is deconsted.
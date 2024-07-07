let navbar=document.querySelector('.header.flex.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{
    inputNumber.oninput=()=>{
        if(inputNumber.value.length>inputNumber.maxLength)inputNumber.value=
        inputNumber.value.slice(0,inputNumber.maxLength);
    }
});
document.getElementById('jobapply').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);
    const title = document.getElementById('title').value;

    // Define minimum experience required
    const minimumExperience = 2; // Example value

    // Check if the applicant meets the requirement
    if (experience >= minimumExperience) {
        alert(`${name}, your application for the ${title} position has been accepted.`);
    } else {
        alert(`${name}, your application for the ${title} position has been rejected due to insufficient experience.`);
    }

    // Clear the form
    document.getElementById('jobapply').reset();
});


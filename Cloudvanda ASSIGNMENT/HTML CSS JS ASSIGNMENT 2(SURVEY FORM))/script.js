const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');


submitBtn.addEventListener('click', function() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderElements).map(el => el.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('Please fill in all required fields.');
        return;
    }

    document.getElementById('popupFirstName').textContent = 'First Name: ' + firstName;
    document.getElementById('popupLastName').textContent = 'Last Name: ' + lastName;
    document.getElementById('popupDob').textContent = 'Date of Birth: ' + dob;
    document.getElementById('popupCountry').textContent = 'Country: ' + country;
    document.getElementById('popupGender').textContent = 'Gender: ' + gender;
    document.getElementById('popupProfession').textContent = 'Profession: ' + profession;
    document.getElementById('popupEmail').textContent = 'Email: ' + email;
    document.getElementById('popupMobile').textContent = 'Mobile Number: ' + mobile;

    
    popup.style.display = 'block';
});


closePopup.addEventListener('click', function() {
    
    popup.style.display = 'none';

    
    surveyForm.reset();
});

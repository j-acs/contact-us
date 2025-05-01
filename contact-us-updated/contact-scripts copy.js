function handleStep(orgType) {
ElementById('contactFormContainer');

    const displayNewFormOrStep = () => {
        if (orgType === 'government' || orgType === 'corporate') {
            contactFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm2').innerHTML}</div>`;
        } else if (orgType === 'academic') {
            contactFormContainer.innerHTML = `
                <div id="academicStep">
                    <h2>Step 2: Please select your role</h2>
                    <div class="box-container">
                        <div class="box" onclick="handleAcademicStep('librarian')">Librarian</div>
                        <div class="box" onclick="handleAcademicStep('faculty')">Faculty</div>
                        <div class="box" onclick="handleAcademicStep('students')">Students</div>
                    </div>
                    <div id="academicFormContainer"></div>
                </div>
            `;
        }

        setTimeout(() => {
            contactFormContainer.classList.add('show');
            contactFormContainer.classList.remove('hide');
        }, 10);
    };

    if (contactFormContainer.classList.contains('show')) {
        contactFormContainer.classList.add('hide');
        contactFormContainer.classList.remove('show');
        setTimeout(() => {
            displayNewFormOrStep();
        }, 300);
    } else {
        displayNewFormOrStep();
    }
}

function handleAcademicStep(role) {
    const academicFormContainer = document.getElementById('academicFormContainer');

    if (role === 'librarian' || role === 'faculty') {
        academicFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm1').innerHTML}</div>`;
    } else if (role === 'students') {
        academicFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm3').innerHTML}</div>`;
    }

    setTimeout(() => {
        academicFormContainer.classList.add('show');
        academicFormContainer.classList.remove('hide');
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
    const initialStep = document.querySelector('.step.active');
    setTimeout(() => {
        initialStep.classList.remove('animate');
    }, 300);
});

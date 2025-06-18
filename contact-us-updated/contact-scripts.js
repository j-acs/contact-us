function handleStep(orgType) { 
    const contactFormContainer = document.getElementById('contactFormContainer');

    const displayNewFormOrStep = () => {
        if (orgType === 'government' || orgType === 'corporate') {
            contactFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm2').innerHTML}</div>`;
        } else if (orgType === 'academic') {
            contactFormContainer.innerHTML = `
                <div id="academicStep">
                   <div class="step">
                    <h2>Step 2: Select your job role</h2>
                    <div class="box-container">
                        <div class="box" onclick="handleAcademicStep('librarian')">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                            </svg>
                            Librarian
                        </div>
                        <div class="box" onclick="handleAcademicStep('faculty')">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3-1.3431 3-3 3-3-1.34315-3-3Zm2 3.62992c-.1263-.04413-.25-.08799-.3721-.13131-1.33928-.47482-2.49256-.88372-4.77995-.8482C4.84875 8.66593 4 9.46413 4 10.5v7.2884c0 1.0878.91948 1.8747 1.92888 1.8616 1.283-.0168 2.04625.1322 2.79671.3587.29285.0883.57733.1863.90372.2987l.00249.0008c.11983.0413.24534.0845.379.1299.2989.1015.6242.2088.9892.3185V9.62992Zm2-.00374V20.7551c.5531-.1678 1.0379-.3374 1.4545-.4832.2956-.1034.5575-.1951.7846-.2653.7257-.2245 1.4655-.3734 2.7479-.3566.5019.0065.9806-.1791 1.3407-.4788.3618-.3011.6723-.781.6723-1.3828V10.5c0-.58114-.2923-1.05022-.6377-1.3503-.3441-.29904-.8047-.49168-1.2944-.49929-2.2667-.0352-3.386.36906-4.6847.83812-.1256.04539-.253.09138-.3832.13765Z"/>
                            </svg>
                            Faculty/Staff
                        </div>
                        <div class="box" onclick="handleAcademicStep('student')">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                            </svg>
                            Student
                        </div>
                    </div>
                   </div>
                    <div id="academicFormContainer" class="step"></div>
                </div>
            `;
        }

        setTimeout(() => {
            console.log('Adding show class')
            contactFormContainer.classList.add('show');
            contactFormContainer.classList.remove('hide');
            contactFormContainer.scrollIntoView({ behavior: 'smooth' });
        }, 10);
    };

    if (contactFormContainer.classList.contains('show')) {
        console.log('Adding hide class');
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
    } else if (role === 'student') {
        academicFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm3').innerHTML}</div>`;
    }

    setTimeout(() => {
        academicFormContainer.classList.add('show');
        academicFormContainer.classList.remove('hide');
        academicFormContainer.scrollIntoView({ behavior: 'smooth' });
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
    const initialStep = document.querySelector('.step.active');
    console.log('Initial step:', initialStep); // Add this line
    if (initialStep) {
        initialStep.classList.add('show');
    }
});

//add active class upon selection
document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    var btnContainer = document.getElementById("myDIV");

    // Get all elements with class="box" inside the container
    var boxes = btnContainer.getElementsByClassName("box");

    // Loop through the elements and add the selected class to the current/clicked element
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            // Remove the "selected" class from all elements
            for (var j = 0; j < boxes.length; j++) {
                boxes[j].classList.remove('selected');
            }

            // Add the "selected" class to the clicked element
            this.classList.add('selected');
        });
    }
});

//add active class upon selection
document.addEventListener('DOMContentLoaded', function() {
    // Function to add event listeners to boxes within a container
    function addEventListenersToBoxes(container) {
        var boxes = container.getElementsByClassName("box");

        for (var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("click", function() {
                // Remove the "selected" class from all elements in the current container
                for (var j = 0; j < boxes.length; j++) {
                    boxes[j].classList.remove('selected');
                }

                // Add the "selected" class to the clicked element
                this.classList.add('selected');
            });
        }
    }

    // Get the academicStep container
    var academicStepContainer = document.getElementById("academicStep");

    // Add event listeners to boxes within the academicStep container
    if (academicStepContainer) {
        addEventListenersToBoxes(academicStepContainer);
    }

    // Use MutationObserver to detect changes in the DOM
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.id === 'academicStep') {
                    addEventListenersToBoxes(node);
                }
            });
        });
    });

    // Observe changes in the contactFormContainer
    var contactFormContainer = document.getElementById('contactFormContainer');
    observer.observe(contactFormContainer, { childList: true, subtree: true });
});



// New function to show the contact form with smooth scroll
function showContactForm() {
    const contactFormContainer = document.getElementById('contactFormContainerPage2');

    if (contactFormContainer.classList.contains('show')) {
        contactFormContainer.classList.add('hide');
        contactFormContainer.classList.remove('show');
        setTimeout(() => {
            contactFormContainer.style.display = 'block';
            contactFormContainer.classList.add('show');
            contactFormContainer.classList.remove('hide');
            // Smooth scroll to the contact form
            contactFormContainer.scrollIntoView({
                behavior: 'smooth'
            });
        }, 300);
    } else {
        contactFormContainer.style.display = 'block';
        contactFormContainer.classList.add('show');
        contactFormContainer.classList.remove('hide');
        // Smooth scroll to the contact form
        contactFormContainer.scrollIntoView({
            behavior: 'smooth'
        });
    }
}





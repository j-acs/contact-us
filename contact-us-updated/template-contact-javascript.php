<?php
/*
Template Name: Access Options Form
*/
get_header();
?>

<?php get_template_part('partials/pageTitle'); ?>

<section class="multi-step">
 <div class="container">
    <div id="main-content">
        <?php
        while ( have_posts() ) :
            the_post();
            the_content();
        endwhile;
        ?>

        <div id="organizationStep" class="step active">
         <div>
            <nav class="breadcrumb">
                <a href="#">Connect with Us >></a>
                <span>Access Inquiry</span>
            </nav>
            <!-- Contact form content will be dynamically inserted here -->
        </div>
            <h2>Step 1: Please select your organization type</h2>
            <div class="box-container">
                <div class="box" onclick="handleStep('academic')">Academic</div>
                <div class="box" onclick="handleStep('corporate')">Business</div>
                <div class="box" onclick="handleStep('government')">Government</div>
            </div>
        </div>
        <div id="contactFormContainer"></div> <!-- Added this div to display the contact form -->

        <script>
            function handleStep(orgType) {
                // Remove active class from all boxes
                const boxes = document.querySelectorAll('.box');
                boxes.forEach(box => box.classList.remove('is-active'));

                // Add active class to the clicked box
                const clickedBox = document.querySelector(`.box[onclick="handleStep('${orgType}')"]`);
                clickedBox.classList.add('is-active');

                // Get the contact form container
                const contactFormContainer = document.getElementById('contactFormContainer');

                // Function to display the new contact form or step
                const displayNewFormOrStep = () => {
                    if (orgType === 'government' || orgType === 'corporate') {
                        contactFormContainer.innerHTML = `<div id="contactForm">${document.getElementById('contactForm2').innerHTML}</div>`;
                    } else if (orgType === 'academic') {
                        contactFormContainer.innerHTML = `
                            <div id="academicStep" class="step">
                                <h2>Step 2: Please select your role</h2>
                                <div class="box-container">
                                    <div class="box" onclick="handleAcademicStep('librarian')">Librarian</div>
                                    <div class="box" onclick="handleAcademicStep('faculty')">Faculty</div>
                                    <div class="box" onclick="handleAcademicStep('students')">Students</div>
                                </div>
                                <div id="academicFormContainer"></div> <!-- Added this div to display the academic contact form -->
                            </div>
                        `;
                    }

                    // Trigger the sliding effect for the new form or step
                    setTimeout(() => {
                        contactFormContainer.classList.add('show');
                        contactFormContainer.classList.remove('hide');
                    }, 10); // Slight delay to ensure the transition is applied
                };

                // If a form is already displayed, slide it up first
                if (contactFormContainer.classList.contains('show')) {
                    contactFormContainer.classList.add('hide');
                    contactFormContainer.classList.remove('show');
                    setTimeout(() => {
                        displayNewFormOrStep();
                    }, 500); // Match the transition duration
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

                // Trigger the sliding effect for the new form
                setTimeout(() => {
                    academicFormContainer.classList.add('show');
                    academicFormContainer.classList.remove('hide');
                }, 10); // Slight delay to ensure the transition is applied
            }

            document.addEventListener('DOMContentLoaded', () => {
                const initialStep = document.querySelector('.step.active');
                setTimeout(() => {
                    initialStep.classList.remove('animate');
                }, 500); // Match the transition duration
            });
        </script>

        <!-- Eloqua Contact form -->
        <div id="contactForm1" style="display:none;">
           <form>
                <h3>Contact Form 1</h3>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <button type="submit">Submit</button>
            </form>

        </div>

        <div id="contactForm2" style="display:none;">
            <form>
                <h3>Contact Form 2</h3>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div id="contactForm3" style="display:none;">
            <form>
                <h3>Contact Form 3</h3>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea><br><br>
                <button type="submit">Submit</button>
            </form>
        </div>
     </div>
  </div>
</section>

<?php get_footer(); ?>

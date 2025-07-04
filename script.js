// Sticky Header Functionality
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile Menu Toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Close Mobile Menu on Scroll (or when clicking a nav item)
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Portfolio Modal Functionality
const portfolioItems = document.querySelectorAll('.portfolio-content .row');
const modal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close-button');

// Add event listeners to each portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get content from the clicked portfolio item
        const img = this.querySelector('img').src;
        const title = this.querySelector('.layer h5').innerText;
        const description = this.querySelector('.layer p').innerText;
        // Check if the link exists before trying to get its href
        const linkElement = this.querySelector('.layer a');
        const link = linkElement ? linkElement.href : '#'; // Default to '#' if no link

        // Populate the modal with the content
        modalImage.src = img;
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modalLink.href = link;
        
        // Handle the visibility of the "View Project" button
        if (link && link !== '#') { // If a valid link exists
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none'; // Hide the button if no link
        }


        // Activate the modal and prevent background scrolling
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });
});

// Close modal when close button is clicked
closeButton.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
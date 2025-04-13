fetch('../research/shared/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load header');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        document.getElementById('researchDropdown').addEventListener('change', function () {
            if (this.value) {
                window.location.href = this.value;
            }
        });
    
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });
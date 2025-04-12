document.getElementById('researchDropdown').addEventListener('change', function() {
    if (this.value) {
        console.log(this.value);
        window.location.href = this.value;
        console.log('Redirecting to:', this.value);
    }
});
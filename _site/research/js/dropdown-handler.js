// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const researchDropdown = document.getElementById('researchDropdown');
    
    if (researchDropdown) {
        // 1. Set current page as selected on load
        setCurrentPageSelection();
        
        // 2. Handle dropdown changes
        researchDropdown.addEventListener('change', function() {
            handleDropdownChange(this);
        });
    }
    
    function setCurrentPageSelection() {
        const currentPage = window.location.pathname.split('/').pop();
        for (let i = 0; i < researchDropdown.options.length; i++) {
            if (researchDropdown.options[i].value.includes(currentPage)) {
                researchDropdown.selectedIndex = i;
                break;
            }
        }
    }
    
    function handleDropdownChange(selectElement) {
        const selectedValue = selectElement.value;
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
        
        if (selectedValue) {
            // You can now use both the value and text
            console.log('Navigating to:', selectedValue);
            console.log('Selected option text:', selectedText);
            
            // Store the selected name if needed
            localStorage.setItem('lastSelectedResearch', selectedText);
            
            // Navigate to the selected page
            window.location.href = selectedValue;
        }
    }
});
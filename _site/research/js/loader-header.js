fetch('../research/shared/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load header');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });
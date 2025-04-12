document.addEventListener('DOMContentLoaded', async () => {
  try {
      // Load header
      const headerResponse = await fetch('../shared/header.html');
      if (!headerResponse.ok) throw new Error('Header failed to load');
      const header = await headerResponse.text();
      
      // Inject header
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
          headerPlaceholder.innerHTML = header;
          
          // Load dropdown handler after header is injected
          const script = document.createElement('script');
          script.src = '../js/dropdown-handler.js';
          document.body.appendChild(script);
      }
      
      // Load footer (if needed)
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) {
          const footerResponse = await fetch('../shared/footer.html');
          if (!footerResponse.ok) throw new Error('Footer failed to load');
          footerPlaceholder.innerHTML = await footerResponse.text();
      }
      
  } catch (error) {
      console.error('Component loading error:', error);
  }
});
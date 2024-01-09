function preventClick() {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
  }
  
  function redirectToNextPage() {
    window.location.href = 'nextpage.html';
  }
  
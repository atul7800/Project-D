// Use the chrome.runtime API instead of chrome.extension
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const logoutButton = document.querySelector('.notBtn'); // Replace with the actual selector
  
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        alert('Notification button clicked!');  // You can customize this alert message
      });
    }
  });
  
  
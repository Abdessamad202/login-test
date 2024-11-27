// Select the login button
const loginButton = document.querySelector('.login-button');

// Add mouseover event
loginButton.addEventListener('mouseover', () => {
  // Add the "change" class to both <i> and <span> elements
  loginButton.querySelector("i").classList.add("change");
  loginButton.querySelector("span").classList.add("change");
});

// Add mouseout event
loginButton.addEventListener('mouseout', () => {
  // Remove the "change" class from both <i> and <span> elements
  loginButton.querySelector("i").classList.remove("change");
  loginButton.querySelector("span").classList.remove("change");
});

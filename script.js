document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var dob = new Date(document.getElementById('dob').value);
  var now = new Date();
  var age = Math.floor((now - dob) / (365.25 * 24 * 60 * 60 * 1000));

  if (age >= 18) {
    if (username === '1234' && password === '1234') {
      window.location.href = 'menu.html';
    } else {
      document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
  } else {
    document.getElementById('error-message').innerText = 'Você precisa ser maior de 18 anos para acessar esse site.';
  }
});

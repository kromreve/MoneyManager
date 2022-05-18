function signUpOn() {
    document.getElementById("sign_up").style.display = "block";
}
  
function signUpOff() {
    document.getElementById("sign_up").style.display = "none";
}

const formLog = document.getElementById('login-form');

formLog.addEventListener('submit', (e) => {
  e.preventDefault();

  //console.log(document.getElementById("email-login").value);

  fetch("http://localhost:8080/userinfo/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: document.getElementById("email-login").value,
      password: document.getElementById("password-login").value
    })
  }).then(res => {
    if (res.status === 200) {
      res.json().then(data => {
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem("userInfo")));
        window.location.href='dashboard.html';
      })
    }
  })
    .catch((error) => {
      console.error('Error', error);
    });
});


const signform = document.getElementById("signup-form")
signform.addEventListener('submit', (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let name = fname.concat(" ", lname);
  console.log(name);

  fetch("http://localhost:8080/userinfo/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  }).then((res) => {
    if (res.status === 201) {
      window.location.href = 'dashboard.html';
    } else {
      //error message
    }
  })
});
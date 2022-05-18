function contactOn() {
    document.getElementById("contact").style.display = "block";
}
  
function contactOff() {
    document.getElementById("contact").style.display = "none";
}

const errorForm = document.getElementById("contact-form");

errorForm.addEventListener('submit', (e) => {
e.preventDefault();



  fetch("http://localhost:8080/bug/reportError", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      description: document.getElementById('subject').value
    })
  }).then((res) => {
    if (res.status === 201) {
      window.location.href='faqs.html';
    } else {
      //error message
    }
  })
});

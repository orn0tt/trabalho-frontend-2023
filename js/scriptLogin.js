function mostrarSenha() {
  var tipo = document.getElementById("password");
  var img = document.getElementById("show-pass");
  if (tipo.type == "password") {
    tipo.type = "text";
    img.src = "../img/eye-slash-svgrepo-com.svg";
  } else {
    tipo.type = "password";
    img.src = "../img/view-eye-svgrepo-com.svg";
  }
}

// const form = document.getElementById(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = form.elements.email.value;
//   const senha = form.elements.password.value;

//   const data = {
//     email: email,
//     senha: senha,
//   };

//   const jsonData = JSON.stringify(data);

//   // Aqui você pode fazer o envio do jsonData para o servidor ou salvá-lo em um arquivo

//   console.log(jsonData); // Exibe o JSON no console para fins de demonstração
// });

// // let formElement = document.querySelector(".form");
// // formElement.addEventListener("submit", (event) => {
// //   const email = "email1@gmail.com";
// //   const senha = "pass1";

// //   realizarConsulta(email, senha);
// // });

let formElement = document.querySelector(".form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  fetch("https://6490f04c2f2c7ee6c2c79afc.mockapi.io/projeto/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(alert("Dados enviados com sucesso!"))
    .catch(alert("Erro ao enviar os dados."));
});

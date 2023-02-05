const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  name = document.querySelector("#name"),
  confirmPassword = document.querySelector("#confirm-password"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (confirmPassword.value !== password.value)
    return alert("비밀번호가 서로 다른뎁쇼?");

  if (!id.value) return alert("아이디 입력하셈");
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입중 에러발생"));
    });
}

const loginForm = document.querySelector(".login-form");
const loginEmailInput = document.querySelector(".login-email-input");
const loginPasswordInput = document.querySelector(".login-pw-input");
const largeLoginBtn = document.querySelector(".large-login-btn");
const LoginError = document.querySelector(".form-error-message");

function checkBtn() {
  if (loginEmailInput.value !== "" && loginPasswordInput.value !== "") {
    largeLoginBtn.disabled = false;
  } else {
    largeLoginBtn.disabled = true;
  }
}

// 아이디 입력시
loginEmailInput.addEventListener("input", checkBtn);
// 비밀번호 입력시
loginPasswordInput.addEventListener("input", checkBtn);

async function login(e) {
  const userEmail = loginEmailInput.value;
  const userPassword = loginPasswordInput.value;
  const url =
    location.protocol === "https:"
      ? "https://localhost:8001"
      : "http://localhost:8001";

  const loginData = {
    email: userEmail,
    password: userPassword,
  };
  try {
    const response = await fetch(url + "/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const resJson = response;
    console.log(response);
    if (resJson.status !== 201) {
      // 로그인 실패한 경우
      LoginError.style.display = "block";
      LoginError.textContent = `*${resJson.data} 오류입니다.`;
    } else {
      // 로그인 성공한 경우
      alert("로그인에 성공했습니다!");
      //   localStorage.setItem("accountname", resJson.user.id);
      //   localStorage.setItem("Token", resJson.user.token);
      location.href = "./";
    }
  } catch (e) {
    console.error("err", e);
  }
}

largeLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

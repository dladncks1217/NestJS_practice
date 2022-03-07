const joinForm = document.querySelector(".join-form");
const joinEmailInput = document.querySelector(".join-email-input");
const joinNameInput = document.querySelector(".join-name-input");
const joinPasswordInput = document.querySelector(".join-pw-input");
const joinCheckPwInput = document.querySelector(".join-pw-input-check");
const largejoinBtn = document.querySelector(".large-join-btn");
const joinError = document.querySelector(".form-error-message");
const joinError2 = document.querySelector(".form-error-message2");

joinError.disabled = true;
joinError2.disabled = true;

function checkBtn() {
  if (
    joinEmailInput.value !== "" &&
    joinPasswordInput.value !== "" &&
    joinCheckPwInput.value !== ""
  ) {
    largejoinBtn.disabled = false;
  } else {
    largejoinBtn.disabled = true;
  }
}
function passwordCheckBtn() {
  if (
    joinPasswordInput.value === joinCheckPwInput.value &&
    joinPasswordInput.value !== "" &&
    joinCheckPwInput.value !== ""
  ) {
    largejoinBtn.disabled = false;
    joinError2.disabled = true;
  } else {
    largejoinBtn.disabled = true;
    joinError.disabled = false;
  }
}

// 아이디 입력시
joinEmailInput.addEventListener("input", checkBtn);
// 비밀번호 입력시
joinPasswordInput.addEventListener("input", checkBtn);
// 비밀번호 확인용
joinCheckPwInput.addEventListener("input", passwordCheckBtn);

// 회원가입
async function join(e) {
  const userEmail = joinEmailInput.value;
  const userName = joinNameInput.value;
  const userPassword = joinPasswordInput.value;
  const url =
    location.protocol === "https:"
      ? "https://localhost:8001"
      : "http://localhost:8001";

  const loginData = {
    email: userEmail,
    name: userName,
    age: 24, // 귀찮아서더못만들음
    password: userPassword,
  };
  try {
    const response = await fetch(url + "/users/join", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(loginData),
    });
    const resJson = await response.json();
    console.log(resJson);
    if (resJson.code === 201) {
      // 회원가입 성공한 경우
      alert("회원가입에 성공했습니다!");
      //   localStorage.setItem("accountname", resJson.user.accountname);
      //   localStorage.setItem("Token", resJson.user.token);
      // location.href = "./";
    } else if (resJson.code === 401) {
      alert("이미 있는 사용자입니다.");
    } else {
      // 회원가입 실패한 경우
      joinError.style.display = "block";
      joinError.textContent = `*${resJson.message}`;
    }
  } catch (e) {
    console.error("err", { e });
  }
}

largejoinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  join();
});

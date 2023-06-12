// 각 입력된 정보값 받아오기
const id = document.querySelector('#userId');
const pw = document.querySelector('#pwd');

const errId = document.querySelector('#errId');
const errPw = document.querySelector('#errPw');

function showImage() {
  const image = document.getElementById("image");
  image.classList.remove("hidden");
}
// 로그인 버튼 클릭 시 실행되는 함수
function login() {
  // 아이디 유효성 검사
  if (!validationsId(id.value)) {
    return;
  }

  // 비밀번호 유효성 검사
  if (!validationsPw(pw.value)) {
    return;
  }

  // 로그인 로직 수행
  // ...

  // 성공적으로 로그인했을 경우 처리
  // ...
}

// 아이디 유효성 검사 함수
function validationsId(id) {
  const validationsId = [
    { reId: /^.{4,12}$/, msg: '아이디는 4~12자리여야 합니다.' },
    { reId: /^[a-z]/, msg: '아이디의 시작은 영소문자여야 합니다.' },
    { reId: /\d/, msg: '아이디는 숫자 하나 이상 포함해야 합니다.' },
  ];
  for (const { reId, msg } of validationsId) {
    if (!reId.test(id)) {
      errId.innerHTML = msg;
      errId.style.display = 'inline';
      return false;
    }
  }
  return true;
}

// 비밀번호 유효성 검사 함수
function validationsPw(pw) {
  const validationsPw = [
    { rePw: /^.{8,15}$/, msg: '비밀번호는 8~15자리여야 합니다.' },
    { rePw: /\d/, msg: '비밀번호는 숫자를 하나 이상 포함해야 합니다.' },
    { rePw: /[a-z]/i, msg: '비밀번호는 영문자를 하나 이상 포함해야 합니다.' },
  ];
  for (const { rePw, msg } of validationsPw) {
    if (!rePw.test(pw)) {
      errPw.innerHTML = msg;
      errPw.style.display = 'inline';
      return false;
    }
  }
  return true;
}

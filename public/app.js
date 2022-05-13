const question = document.querySelector(".question");
const send = document.querySelector(".btn");
const input = document.querySelector(".inp");
const questions = ["what is your USN ?", "Where do you live?"];
let user_arr = [];
let user = {
  uname: "",
  usn: "",
  city: "",
};

let count = 0;

send.addEventListener("click", () => {
  if (count == 0) {
    user.uname = input.value;
    question.textContent = `Hello!! ${user.uname} ${questions[0]}`;
    count++;
  } else if (count == 1) {
    user.usn = input.value;
    question.textContent = `${questions[1]}`;
    count++;
  } else {
    user.city = input.value;
    question.textContent = "Thanks for chatting";
    input.style.display = "none";
    send.style.display = "none";
  }

  if ((user.uname, user.usn, user.city)) {
    user_arr.push(user);
    postData("http://localhost:3000", user_arr);
  }
});

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}


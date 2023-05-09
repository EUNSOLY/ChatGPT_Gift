const btnSend = document.querySelector("#btnSendMessage");
const chatMessage = document.querySelector(".chat_message");

const place = document.querySelector("#place");
const date = document.querySelector("#date");

const chatCon = document.querySelector(".chat_con");
const guide_chat = document.querySelector(".guide_chat");
const loder = document.querySelector(".loder");
const restart = document.querySelector(".restart");

const chatInputDiv = document.querySelector(".chat-input");
chatCon.style.display = "none";
loder.style.display = "none";
chatInputDiv.style.display = "none";

place.focus();

let userMessages = [];
let assistanMessages = [];

const sendMessage = async () => {
  let myPlace = place.value;
  let myDate = date.value;

  const chatInput = document.querySelector(".chat-input input");
  let chatMessageDiv = document.createElement("div");
  chatMessageDiv.classList.add("chat_message");
  chatMessageDiv.innerHTML = `<p class="userMessages">${chatInput.value}</p>`;

  chatCon.appendChild(chatMessageDiv);
  userMessages.push(chatInput.value);

  guide_chat.style.display = "none";
  loder.style.display = "flex";

  const response = await fetch("http://localhost:3000/guide", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      myPlace: myPlace,
      myDate: myDate,
      userMessages: userMessages,
      assistanMessages: assistanMessages,
    }),
  });

  const data = await response.json();
  assistanMessages.push(data.assistant);

  const astrologerMessage = document.createElement("div");
  astrologerMessage.classList.add("chat_message");
  astrologerMessage.innerHTML = `<p class="assistant">${data.assistant.replace(
    /\n/g,
    "<br/>"
  )}</p>`;

  chatMessageDiv.innerHTML = `<p class="userMessages"> 성별 : ${myPlace}, 연령 : ${myDate}세의 생일선물을 추천해줘</p>`;
  chatCon.appendChild(astrologerMessage);

  chatCon.style.display = "block";
  chatCon.scrollTop = chatCon.scrollHeight;
  chatInputDiv.style.display = "flex";
  loder.style.display = "none";
  chatInput.value = "";
};
const reStart = () => {
  window.location.reload();
};

const cssFun = () => {
  console.log(loder);
};
btnSend.addEventListener("click", sendMessage);
document.querySelector("#btn").addEventListener("click", sendMessage, cssFun);
restart.addEventListener("click", reStart);

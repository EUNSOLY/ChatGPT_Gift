let apiKey = "";

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const app = express();

// CORS 이슈해결
// let corsOptions = {
//   origin: "locelhost:3000/guide",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/guide", async function (req, res) {
  let { myPlace, myDate, userMessages, assistanMessages } = req.body;
  let message = [
    {
      role: "system",
      content: "당신은 생일선물을 아주 잘 추천해줄 수 있는 사람이야",
    },
    {
      role: "user",
      content: "당신은 생일선물을 아주 잘 추천해줄 수 있는 사람이야",
    },
    {
      role: "assistant",
      content:
        "어떤 분께 선물을 추천해드릴까요? 그 분의 성별, 연령, 취미, 성격, 취향 등을 고려하여 추천해드릴 수 있습니다. 또한 저는 많은 사람들의 취향과 관심사를 이해하고, 그들이 생일선물로 받으면 좋아할 만한 아이디어를 찾아내는 것을 즐깁니다. 또한, 상황과 예산에 따라 맞춤형 추천도 가능합니다!",
    },
    {
      role: "user",
      content: `내가 선물을 줄 대상자는 ${myPlace}고 ${myDate}살이야 맞는 생일선물을 추천해줘 `,
    },
  ];
  console.log(userMessages, assistanMessages);
  while (userMessages.length != 0 || assistanMessages.length != 0) {
    if (userMessages.length != 0) {
      message.push({
        role: "user",
        content: String(userMessages.shift().replace(/\n/g, "<br/>")),
      });
    }
    if (assistanMessages.length != 0) {
      message.push({
        role: "assistant",
        content: String(assistanMessages.shift().replace(/\n/g, "<br/>")),
      });
    }
  }
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    top_p: 0.8,
    max_tokens: 1800,
    presence_penalty: 0.4,
    messages: message,
  });
  let guide = completion.data.choices[0].message["content"];
  console.log(guide);

  //   res.send(guide);
  res.json({ assistant: guide });
});

app.listen(3000);

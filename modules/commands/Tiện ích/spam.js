module.exports.config = {
  name: "treo",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "Vtuan",
  description: "treo đến chết một nội dung",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 1,
  envConfig: {
    spamDelay: 5  
  }
};

const spamThreads = new Set();  
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.run = async function ({ api, event, args }) { 
  const { threadID, messageID, senderID } = event;
  const content = (args.length != 0) ? args.join(" ") : "𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝑷𝑺𝒂𝒏𝒉 𝑯𝒐𝒕 𝑻𝒓𝒆𝒐 𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒓 𝑪𝒂̂̀𝒏 𝑲𝒆̂̀ 𝑩𝒆̂𝒏 𝑬𝒎 𝑻𝒉𝒆𝒐 𝑵𝒂̆𝒎 𝑻𝒉𝒂́𝒏𝒈 🐼❄️💫🌊ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ;
  if (args[0] === "stop") {
    if (spamThreads.has(threadID)) {
      spamThreads.delete(threadID);
      return api.sendMessage('Đã dừng spam!', threadID, messageID);
    } 
    return api.sendMessage('Không có quá trình spam nào đang diễn ra!', threadID, messageID);
  } 
  if (!spamThreads.has(threadID)) {
    spamThreads.add(threadID);
    api.sendMessage(`Bắt đầu treo!`, threadID, messageID);
    while (spamThreads.has(threadID)) {
      await delay(this.config.envConfig.spamDelay * 1000);
      if (spamThreads.has(threadID)) {
        api.sendMessage(content, threadID);
      }
    }
  } else {
    api.sendMessage('Đang spam rồi cut!', threadID, messageID);
  }
};

const { smd, sleep } = require('../lib');

smd({ cmdname: "developer", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
    "𝗟𝗢𝗔𝗗𝗜𝗡𝗚..............",
    " `𝗥𝗖𝗗 𝗠𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥` ",
    " `𝗥𝗘𝗔𝗟 𝗗𝗘𝗫𝗧𝗘𝗥` 94789958225 ",
    " `𝗖𝗬𝗕𝗘𝗥 𝗗𝗘𝗫𝗧𝗘𝗥` 94785274495 ",
    " `𝗞𝗜𝗡𝗚 𝗥𝗔𝗩𝗜` 94740802978 ",
    " `𝗧𝗘𝗦𝗧𝗜𝗡𝗚` 94753574803 ",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    " 𝗦𝗥𝗜 𝗟𝗔𝗡𝗞𝗔 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥.. \\n 𝗣𝗢𝗪𝗘𝗥 𝗙𝗨𝗟𝗟 𝗕𝗢𝗧  ",
    " `𝗧𝗛𝗔𝗡𝗞𝗦 𝗔𝗟𝗟 💛` "
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
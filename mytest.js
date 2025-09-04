const { assignTo, selectionLogic } = require("./assignLogic.js");

const repA_G = {
  criteria: selectionLogic("a", "g"),
  URI: "google.com",
};
const repM_P = {
  criteria: selectionLogic("m", "p"),
  URI: "yahoo.com",
};
const repNoCriteria = {
  URI: "bing.com",
};
const defaultRep = {
  URI: "default.com",
};
const rep1 = {
  criteria: selectionLogic("a", "g"),
  URI: "google.com",
};
const rep2 = {
  criteria: selectionLogic("m", "p"),
  URI: "yahoo.com",
};
const rep3 = {
  URI: "bing.com",
};

const repArr = [rep1, rep2, rep3, repNoCriteria, defaultRep, repA_G, repM_P];

// list of 100 randome chars
const charList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "|",
  "\\",
];

charList.forEach((char) => {
  const assignedURI = assignTo(char, repArr, defaultRep);
  console.log(`Character: ${char} is assigned to: ${assignedURI}`);
});

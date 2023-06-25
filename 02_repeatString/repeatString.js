const repeatString = function(message, num) {
  let completeMessage = message;
  if (num === 0 || message === "") {
    completeMessage = "";
  } else if (num < 0) {
    completeMessage = "ERROR";
  } else if (num == "number") {
    num = number;
  }
  for (i = 0; i < num - 1; i++) {
    completeMessage += message;
  }
  return completeMessage;
};

// Do not edit below this line
module.exports = repeatString;

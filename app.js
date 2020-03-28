function isValidPassword(password, username) {
  let passwordLength = password.length;
  let passwordHasSpaces = password.indexOf(" ") >= 0;
  let passwordIncludeUserName = password.includes(username);

  if (passwordLength && !passwordHasSpaces && !passwordIncludeUserName)
    return true;
  return false;
}

function pick(arr) {
  let pickNum = Math.floor(Math.random() * arr.length);
  return arr[pickNum];
}

function getCard() {
  const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardSuit = ["clubs", "spades", "hearts", "diamonds"];
  let randomPickValue = pick(cardValue);
  let randomPickSuit = pick(cardSuit);

  const playingCard = {
    value: `${randomPickValue}`,
    suit: `${randomPickSuit}`
  };

  console.log(playingCard);
}

function multiplyby(num) {
  return function(x) {
    return x * num;
  };
}

const triple = multiplyby(3);
const double = multiplyby(2);

function makeBetweenFunc(start, end) {
  return function(num) {
    return num >= start && num <= end;
  };
}

const isChild = makeBetweenFunc(0, 18);
isChild(18);
console.log("hello");

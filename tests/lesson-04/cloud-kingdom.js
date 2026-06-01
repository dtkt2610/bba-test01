let playerName = "Mario";
let currentLives = 3;
const Level1 = 25;
const Level2 = 30;
const Level3 = 45;
// Tổng coin của 3 level
const tongCoins3lvs = Level1 + Level2 + Level3;
// Giá trị trung bình
const giaTriTB = tongCoins3lvs / 3;
// số coin dư
const soCoinDu = tongCoins3lvs % 3;

console.log("Tổng coin của 3 level:", tongCoins3lvs);
console.log("Trung bình coin:", giaTriTB);
console.log("Coin dư khi chia cho 3:", soCoinDu);
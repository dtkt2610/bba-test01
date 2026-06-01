let powerUp = "mushroom";
let effect = '';
if (powerUp = "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp = "star") {
    effect = "Mario is invincible!";
} else if (powerUp = "none") {
    effect = "Mario is normal";
} else if (powerUp = "mushroom") {
    effect = "Mario becomes Super!";
} else {
    effect = "Unknown power-up";
}

console.log(effect);
//Bai 1
function createCharacters() {

    const characters = [
        { name: "A", level: 10, health: 500 },
        { name: "B", level: 20, health: 400 }
    ];

    const charactersPowerUp = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(
        character => character.health > 1000
    );

    console.log(charactersPowerUp);
    console.log(possibleWinners);
}
createCharacters();

// Bai 2
function printLeaderboard(players) {

    players.sort((a, b) => b.score - a.score);

    players.forEach((player, index) => {
        let medal = "";
        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        }

        console.log(
            `${medal} Hạng ${index + 1}: ${player.name} - ${player.score} điểm`
        );
    });
}

// Test
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];

printLeaderboard(players);
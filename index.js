// Representar os jogadores (Objetos)
const players = {
    player1: { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
    player2: { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 }
};

//---

// Função para sortear dados
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

//---

// Função para definir a pista
async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.30: // 30% RETA
            result = "RETA";
            break;
        case random < 0.60: // 30% CURVA
            result = "CURVA";
            break;
        case random < 0.90: // 30% CONFRONTO
            result = "CONFRONTO";
            break;
        default: // 10% ITEM
            result = "ITEM";
    }
    return result;
};

//---

// Log da rodada
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 Rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

//---

// O Motor do Jogo: Orquestra a corrida, rodada por rodada
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round}`);
        
        let block = await getRandomBlock();
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        console.log(`Bloco: ${block}`);

        if (block === "RETA") {
            const totalTestSkill1 = character1.VELOCIDADE + diceResult1;
            const totalTestSkill2 = character2.VELOCIDADE + diceResult2;

            console.log(`\n🏎️ Pista RETA: Aceleração total!`);
            await logRollResult(character1.NOME, "Velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "Velocidade", diceResult2, character2.VELOCIDADE);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`🎉 ${character1.NOME} venceu a corrida de velocidade!`);
                character1.PONTOS++;
                if (diceResult1 >= 1 && diceResult1 <= 3) {
                    console.log(`🐢 Casco Verde! ${character2.NOME} perde 1 ponto de Velocidade.`);
                    character2.VELOCIDADE = Math.max(0, character2.VELOCIDADE - 1);
                } else {
                    console.log(`🍄 Cogumelo! ${character1.NOME} ganha 1 ponto de Velocidade.`);
                    character1.VELOCIDADE += 1;
                }
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`🎉 ${character2.NOME} venceu a corrida de velocidade!`);
                character2.PONTOS++;
                if (diceResult2 >= 1 && diceResult2 <= 3) {
                    console.log(`🐢 Casco Verde! ${character1.NOME} perde 1 ponto de Velocidade.`);
                    character1.VELOCIDADE = Math.max(0, character1.VELOCIDADE - 1);
                } else {
                    console.log(`🍄 Cogumelo! ${character2.NOME} ganha 1 ponto de Velocidade.`);
                    character2.VELOCIDADE += 1;
                }
            } else {
                console.log("Corrida empatada! Ninguém pontuou.");
            }
        } 
        
        // Lógica alterada para que CURVA também tenha um vencedor por rodada
        else if (block === "CURVA") {
            const totalTestSkill1 = character1.MANOBRABILIDADE + diceResult1;
            const totalTestSkill2 = character2.MANOBRABILIDADE + diceResult2;

            console.log(`\n🌪️ Pista CURVA: Manobrabilidade em ação!`);
            await logRollResult(character1.NOME, "Manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "Manobrabilidade", diceResult2, character2.MANOBRABILIDADE);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`🎉 ${character1.NOME} venceu a curva e marcou um ponto!`);
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`🎉 ${character2.NOME} venceu a curva e marcou um ponto!`);
                character2.PONTOS++;
            } else {
                console.log("A curva foi muito apertada! Ninguém pontuou.");
            }
        } 
        
        // Lógica alterada para que CONFRONTO/ITEM também tenha um vencedor por rodada
        else if (block === "CONFRONTO" || block === "ITEM") {
            const totalTestSkill1 = character1.PODER + diceResult1;
            const totalTestSkill2 = character2.PODER + diceResult2;

            console.log(`\n💥 CONFRONTO! Poder à prova!`);
            await logRollResult(character1.NOME, "Poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "Poder", diceResult2, character2.PODER);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`🎉 ${character1.NOME} venceu o confronto e marcou um ponto!`);
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`🎉 ${character2.NOME} venceu o confronto e marcou um ponto!`);
                character2.PONTOS++;
            } else {
                console.log("Confronto empatado! Ninguém pontuou.");
            }
        }

        console.log("------------------------------------------------\n");
    }

    // A verificação final para definir o vencedor está fora do loop
    console.log("🏁Final da Corrida!");
    console.log(`${players.player1.NOME}: ${players.player1.PONTOS} ponto(s)`);
    console.log(`${players.player2.NOME}: ${players.player2.PONTOS} ponto(s)`);

    if (players.player1.PONTOS > players.player2.PONTOS) {
        console.log(`🏆 ${players.player1.NOME} Venceu a corrida!`);
    } else if (players.player2.PONTOS > players.player1.PONTOS) {
        console.log(`🏆 ${players.player2.NOME} Venceu a corrida!`);
    } else {
        console.log("Corrida empatada!");
    }
}

//---

(async function main() {
    console.log(`🏁🚨 Corrida Entre ${players.player1.NOME} e ${players.player2.NOME} começando...\n`);
    await playRaceEngine(players.player1, players.player2);
})();
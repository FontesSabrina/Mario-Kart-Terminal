<h1>Desafio de projeto do Felipão (DIO): Mario Kart.JS</h1>

<table style="margin: 0 auto; border-collapse: collapse;">
    <tr>
        <td>
            <img src="https://i.pinimg.com/originals/6b/f4/62/6bf4626f0679056c89859c98d6db885e.gif" alt="Mario Kart" width="200">
        </td>
        <td style="text-align: center; vertical-align: middle;">
            <b>Objetivo:</b>
            <p>É hora de ligar o motor e pisar fundo! Este é o nosso desafio de projeto: construir um simulador de corrida do Mario Kart do zero, usando Node.js para dar vida a essa aventura. O que vamos fazer? Vamos pegar tudo que aprendemos nas videoaulas e aplicar com uma pitada de criatividade, implementando novas regras e mecânicas que serão reveladas abaixo. Prepare-se para uma experiência de programação épica, onde cada linha de código é um atalho para a vitória!</p>
        </td>
        <td>
            <img src="https://static.wikia.nocookie.net/mario/images/7/78/MKWorld_Lakitu.png/revision/latest?cb=20250402231914" alt="Mario Kart" width="400">
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 100%; margin: 0 auto; text-align: center;">
    <thead>
        <tr>
            <th style="border: 1px solid black; padding: 8px; width: 50%;">Mario</th>
            <th style="border: 1px solid black; padding: 8px; width: 50%;">Bowser</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid black; padding: 8px; vertical-align: top; width: 50%;">
                <p>Mario</p>
                <img src="https://i.pinimg.com/originals/82/a0/6c/82a06cb026b7088dee13d13ba460a05f.gif" alt="Mario" width="150" >
                <br>
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
            <td style="border: 1px solid black; padding: 8px; vertical-align: top; width: 50%;">
                <p>Bowser</p>
                <img src="https://www.mariowiki.com/images/7/76/MK8-Line-Bowser-Fire.gif" alt="Bowser" width="150" ">
                <br>
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </tbody>
</table>

<h3><img src="https://i.pinimg.com/originals/bb/a7/ff/bba7ff75d0034045961d842de0ba14fa.gif" width="50"> Regras & mecânicas:</h3>

<p>
    <b>Jogadores:</b><br>
    Preparem-se, a CPU deve receber dois pilotos para este desafio. Que o melhor vença!
</p>

<p>
    <b>Pistas:</b><br>
    Os personagens irão correr em uma pista aleatória de 5 rodadas. A cada rodada, além de Reta, Curva ou Confronto, há uma pequena chance de ser sorteado um Bloco de Item. Ao cair nesse bloco, o jogador joga um dado de 6 lados para determinar o item recebido.
</p>

<p>
    <b>Regras da Pista RETA</b><br>
    Quando o bloco da pista sorteado for uma RETA, a prova de Velocidade começa. Para vencer o desafio, cada jogador deve jogar um dado de 6 lados e somar o resultado ao seu atributo de VELOCIDADE. O jogador que obtiver o maior valor total vence a rodada e, dependendo do resultado do dado, uma das seguintes condições se aplica:
    <ul>
        <li>Se o dado do vencedor cair entre 1 e 3: Ele lança um Casco Verde que atinge o oponente, fazendo com que o adversário perca 1 ponto de Velocidade. <img src="https://64.media.tumblr.com/3b0598331502b40f4ea9b69587d5331a/65f70fb326020668-c9/s400x600/f9f0c3bd96e7ac97227a84c3f61117f3d05d5632.gifv" alt="Koopa Troopa lançando casco" width="50"></li>
        <li>Se o dado do vencedor cair entre 4 e 6: Ele ganha um Cogumelo, que lhe concede um bônus de 1 ponto em seu próprio atributo de Velocidade. <img src="https://media1.tenor.com/m/DHWIrFJzjdsAAAAC/mushroom-mario.gif" alt="Cogumelo de Mario Bros" width="45"></li>
    </ul>
</p>

<p>
    <b>Regras da Pista CURVA</b><br>
    Quando o bloco da pista sorteado for uma CURVA, a prova de Manobrabilidade começa. Cada jogador deve jogar um dado de 6 lados. Dependendo do resultado do dado, uma das seguintes condições se aplica ao jogador que fez a jogada:
    <ul>
        <li>Se o dado cair em um número ímpar (1, 3 ou 5): O jogador ganha uma Flor de Fogo, que lhe concede um bônus de 2 pontos em seu atributo de Manobrabilidade. <img src="https://media.tenor.com/ndeNF_y9m2QAAAAj/fire-flower-super-mario-world.gif" alt="Flor de Fogo" width="45"></li>
        <li>Se o dado cair em um número par (2, 4 ou 6): Uma Concha Espinhosa atinge o jogador, fazendo com que ele perca 2 pontos em seu atributo de Manobrabilidade. <img src="https://media1.tenor.com/m/sM4DcwVUx8QAAAAC/excited-spiny.gif" alt="Concha Espinhosa" width="45"></li>
    </ul>
</p>

<p>
    <b>Regras da Pista CONFRONTO</b><br>
    Quando o bloco da pista sorteado for um CONFRONTO, a prova de Poder começa. Cada jogador deve jogar um dado de 6 lados. O resultado do dado determina qual item ou efeito será ativado:
    <ul>
        <li>Se sair 1: Um casco vermelho é lançado em sua direção, removendo 2 pontos de seu Poder. <img src="https://static.wikia.nocookie.net/mariokart/images/b/b3/Tumblr_inline_nq3vn9SGHv1tn0tli_500.png/revision/latest?cb=20151013235413&path-prefix=pt-br" alt="Casco Vermelho" width="50"></li>
        <li>Se sair 2: O jogador desliza em uma casca de banana na pista, removendo 1 ponto de seu Poder. <img src="https://media.tenor.com/c2oxQ7oWI3oAAAAj/giant-banana-artwork.gif" alt="Casca de Banana" width="50"></li>
        <li>Se sair 3: O jogador ganha um Cogumelo Dourado, que lhe permite avançar rapidamente e aumentar seu Poder em 3 pontos. <img src="https://i.pinimg.com/1200x/21/20/ba/2120baa3ffd31e02933b8fb5f6e0318d.jpg" alt="Cogumelo Dourado" width="50"></li>
        <li>Se sair 4: O jogador ativa uma Estrela, tornando-se invencível por um breve momento e ganhando 2 pontos de Poder. <img src="https://i.pinimg.com/originals/d4/24/cc/d424cc3b24ecd9ce443e22aa834f5790.gif" alt="Estrela" width="50"></li>
        <li>Se sair 5: O jogador é atingido por um Casco Azul, removendo 3 pontos de seu Poder. <img src="https://static.wikia.nocookie.net/fanintendo/images/9/90/480px-BlueShell.png/revision/latest?cb=20130725151256&path-prefix=pt" alt="Casco Azul" width="50"></li>
        <li>Se sair 6: O jogador se transforma em um Bullet Bill por um instante, o que lhe dá uma grande aceleração e o faz ganhar 4 pontos de Poder. <img src="https://giffiles.alphacoders.com/633/6332.gif" alt="Bullet Bill" width="50"></li>
    </ul>
</p>

<p>Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).</p>

<p>
    <b>Condição de vitória:</b>
    <br>Ao final, vence quem acumulou mais pontos.<img src="https://www.mariowiki.com/images/1/15/MK8-Line-Mario-Trophy.gif" alt="Troféu de Vitória" width="50">
</p>

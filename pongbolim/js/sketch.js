//Jogadores
let xJogadores = [80, 400, 190, 510]
let yJogadores = [115, 115, 215, 215];
let jogadoresComprimento = 10;
let jogadoresAltura = 70;

//Váriaveis do gol

let xGols = [1, 595];
let yGol = 140;
let comprimentoGol = 4;
let alturaGol = 120;

//placar do jogo
let meusGols = 0;
let golsOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function draw() {
  background(0, 128, 0);
  desenhaCenario();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraJogadores();
  movimentaMeusJogadores();
  movimentaJogadoresTimeAdversario();
  verificaColisaoJogadores()
  incluiPlacar();
  mostraGols();
  verificaColisaoGol();
}

function mostraJogadores(){
  for (let i = 0; i < xJogadores.length ; i++){
    if (i < 2){
    fill(0,0,205)
    rect(xJogadores[i], yJogadores[i], jogadoresComprimento, jogadoresAltura)
    } else {
    fill(139,0,139)
    rect(xJogadores[i], yJogadores[i], jogadoresComprimento, jogadoresAltura)
    }
  }
}

function mostraGols(){
  for ( i = 0; i < xGols.length; i++){
  rect(xGols[i], yGol, comprimentoGol, alturaGol)
 }
}

function movimentaMeusJogadores() {
  if (keyIsDown(UP_ARROW)) {
    yJogadores[0] -= 10;
    yJogadores[1] -= 10;
  }
    
  if (keyIsDown(DOWN_ARROW)) {
    yJogadores[0] += 10;
    yJogadores[1] += 10;    
  }
}

function movimentaJogadoresTimeAdversario(){
  if (keyIsDown(87)) {
    yJogadores[2] -= 10;
    yJogadores[3] -= 10;
    
    }
  if (keyIsDown(83)) {
    yJogadores[2] += 10;
    yJogadores[3] += 10;    
  }
 }

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16);
  fill(color(255,140,0))
  rect(150, 15, 40, 20);
  fill(255);
  text(meusGols, 170, 31);
  fill(color(255,140,0))
  rect(450, 15, 40, 20);
  fill(255);
  text(golsOponente, 470, 31);
}

function verificaColisaoGol(){
  for (i = 0; i < xGols.length; i++) {
  colidiuComGol = collideRectCircle(xGols[i], yGol, comprimentoGol, alturaGol, xBolinha, yBolinha, raio);
    
  if (colidiuComGol) {
    velocidadeXBolinha *= -1;  
    marcaPonto();
  }
 }
}

function marcaPonto(){
    if(xBolinha < 11){
      meusGols += 1;
      xBolinha = 300;
      ponto.play();
    }
    if(xBolinha > 594){
      golsOponente += 1;
      xBolinha = 300;
      ponto.play();
 }
}
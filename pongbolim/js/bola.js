//variáveis da bola
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//variáveis da velocidade da bola
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

function mostraBolinha() {
  fill(255)
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  
  if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    velocidadeXBolinha *= -1}

  if (yBolinha + raio > height || 
      yBolinha - raio < 0) {
    velocidadeYBolinha *= -1}
  
  }

function verificaColisaoJogadores(){
  for( i = 0; i < xJogadores.length; i++){
  colidiuComJogadores = collideRectCircle(xJogadores[i], yJogadores[i], jogadoresComprimento, jogadoresAltura, xBolinha, yBolinha, raio);
    
  if (colidiuComJogadores) {
    velocidadeXBolinha *= -1;
    raquetada.play()
    
  }
 }
}



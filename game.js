let fundo;
let fundoImg;

let ladrao;
let ladraoImgDireita;
let ladraoImgEsquerda;
let ladraoImgFrente;
let ladraoImgCostas;

let diamante;
let diamanteImg;

let laser1;
let laser2;
let laserImg;

let porta;
let portaImg;
let portaAnim;

let botaoRestart;
let diamanteColetado = false;
let venceu = false;
let gameOver = false;

function preload (){
    fundoImg = loadImage("cenario.png");
    diamanteImg = loadImage("diamante.png");
    laserImg = loadImage("laser.png");
}

function setup (){
    createCanvas(400, 400);

    fundo = createSprite(200, 200);
    fundo.addImage("fundo", fundoImg);

    laser1 = createSprite(40, 300);
    laser1.addImage("laser", laserImg);
    laser2 = createSprite(360, 150);
    laser2.addImage("laser", laserImg);

    diamante = createSprite(358, 45);
    diamante.addImage("diamante", diamanteImg)
}

function draw (){
    background (0);

    drawSprites();
}
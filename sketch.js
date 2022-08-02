// Aula C20 - MOTOR DE FISICA
// Utilizamos a biblioteca matter.min, pois ela contem propriedades de motor de fisíca que podem ser aplicados aos objetos do nosso projeto
// OBS* lembrar de verificar se todas as bibliotecas foram chamadas no index para que não ocorram erros de execução


//Declaramos variáveis const para chamar as propriedades no projeto com mais facilidade 
//INFO: A variável 'const' é uma váriavel de escopo local, o que significa que o valor dela não pode ser alterado
const Engine = Matter.Engine;  //motor de física
const World = Matter.World;   //mundo físico para que as regras possam ser aplicadas
const Bodies = Matter.Bodies;  // corpos no mundo físico
const Body = Matter.Body;   // corpo no mundo físico

//Váriáveis para a criação dos objetos
// INFO: a variável LET, assim como CONST não permite alteração de valor
let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  // Criação do motor de física
  engine = Engine.create();
  // Criação do Mundo físico e adição do motor de física ao mundo
  world = engine.world;
  

  // Declaração de propriedades físicas que serão aplicadas ao objeto (Restituição=Elasticidade/fricção=atrito do ar)
   var ball_options = {restitution: 0.3, frictionAir: 0.1}
   //Criação do objeto (var = criação do corpo.formato do corpo (posx, posy, raio, propriedades físicas))
   ball = Bodies.circle(100,10,20,ball_options);
   //Adição do corpo ao mundo físico
   World.add(world, ball);


  // Declaração de propriedades físicas que serão aplicadas ao objeto (isStatic = objeto parado quando TRUE)
   var ground_options = { isStatic : true}
   //Criação do objeto (var = criação do corpo.formato do corpo (posx, posy, wid, heig,propriedades físicas))
   ground = Bodies.rectangle(200,390,400,20,ground_options);
   //Adição do corpo ao mundo físico
   World.add(world,ground);


  //posicionamento do raio
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background(51);
 //Atualização continua do motor de física
 Engine.update(engine);
 //chamada para que objeto seja criado na tela (ellipse para figuras circulares)
 ellipse(ball.position.x,ball.position.y, 20);
 //chamada para que objeto seja criado na tela (rect para figuras quadrilatero)
 rect(ground.position.x,ground.position.y,400,20);
  
}


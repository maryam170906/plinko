const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canyas = createCanvas(800,800);
 
  engine = Engine.create();
  world = engine.world;
 //createSprite(400, 200, 50, 50);

 ground = new Ground(width/2,height,width,20);

 for (var j = 0; j <=width; j = j + 80) {
  divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}


}

function draw() {
  background("black");
   //stroke("brown");
  //strokeWeight(6)
  Engine.update(engine);  

  ground.display();

  for (var j = 0; j < plinkos.length; j++) {
     plinkos[j].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  if(particles!=null){
     particles.display();

      if(particles.body.position.y>760){
         if(particles.body.position.x<300){
            score = score+500;
            particles=null;
            if(count>=5) gameState = "End";
         }
      }
  }

drawSprites();

function mousePressed(){
  if(gameState!=="End"){
     count++;
     particles = new Particle(mouseX,10,10,10);
}
}
}
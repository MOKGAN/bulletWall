var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  speed = random(30,52)
 weight = random(223,321)
  bullet=createSprite(50, 200, 50,5);
bullet.velocityX = speed;
 bullet.shapeColor=color(255);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
 
 
}

function draw() {
  background(0);
 

if (hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
}

if (damage>10)
{
      wall.shapeColor=color(255,0,0);
}

if (damage<10)
{
      wall.shapeColor=color(0,255,0);
}
drawSprites();
}
function hasCollided(lbullet,lwall)
{
    bulletRidhtEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRidhtEdge >= wallLeftEdge)
 {
    return true
 } 
    return false;
}
//hola hola comentarios

//la función setup se ejecuta una vez al principio

var diametro;
diametro=50;

//hay 2 tipos de variables: GLOBALES y LOCALEs
//globales viven fuera de una función
//locales viven dentro
function setup() {
  createCanvas(400,300);
  //background define el color de fondo, en este caso tiene random() 
  //anidado en los parametros para crear siempre un color diferente
  background(200,200,200);
}

//funcion draw() se ejecuta después de setup()
//y se ejectua 60 veces por segundo
function draw() {
  //(posX,posY,width,height)
  
  var anchoBorde;
  anchoBorde = 10;
  
  background(200,200,200);
  
  //fill(0,255,0);
  //stroke(100,50,100);
  //strokeWeight(anchoBorde);
 
 estilo2();
 ellipse(mouseX,mouseY,diametro/3,diametro/2);
  
  estilo2();
  //(x1,y1,x2,y2,x3,y3,x4,y4)
 // quad(mouseX, mouseY, 86, 250, mouseX, mouseY+50, 350, 76);
  
  diametro = diametro + 1;
  

  

}

//crear funciones con function(){}

function estilo1(){
  strokeWeight(10);
  stroke(20,20,200);
  fill(200,20,20);
  
}

function estilo2(){
  fill(0,255,0);
  stroke(100,50,100);
  strokeWeight(5);
}




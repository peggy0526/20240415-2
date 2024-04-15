let p = ["#E26761", "#6693A0", "#EBC06F", "#605951"];
var mountains = []
var mountain
class mountain_class{
 constructor(args){
  this.p = args.p || {x:width/2,y:height/2};
  this.w = args.w || random(100,120);
  this.h = args.h || random(10,12);
  this.d = args.d || random(50,120);
  this.v = args.v || {x:random(-2,2),y:random(-2,2)}
 }

draw(){
  push();
  translate(this.p.x + this.w / 2, this.p.y + this.h / 2);
  rotate(random(-30,30));

  let c = random(p);

  noStroke();
  fill(c);
  ellipse(0, 0, this.d / 2, this.d);

  noFill();
  stroke(c);
  strokeWeight(this.d / 2*random(0.5,1));
  strokeCap(ROUND);

  arc(0, 0, this.d, this.d, 0, 180);

  pop();
}
update(){
  
  if(this.p.x<0){
    this.v.x = -this.v.x
  }
  if(this.p.x>width){
    this.v.x = -this.v.x
  }
  if(this.p.y<0){
    this.v.y = -this.v.y
  }
  if(this.p.y>height){
    this.v.y = -this.v.y
  }
} 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#F2EDEC");
  for(i=0;i<10;i=i+1){  //產生多個球資料
    mountain = new mountain_class({   //傳一串參數直到class內 
      v:{x:random(-2,2),y:random(-2,2)},
      p:{x:random(0,width),y:random(0,height)},
      //a:{x:0,y:0}
     })
    mountains.push(mountain)}
    print(mountains)

  // let cells = 5;
  // let offset = width / 8;
  // let margin = offset / 1.3;
  // let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  // let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  // for (let j = 0; j < cells; j++) {
  //   for (let i = 0; i < cells; i++) {
  //     let x = offset + i * (w + margin);
  //     let y = offset + j * (h + margin);

  //     let d = w * random(0.5, 1.2);

  //     push();
  //     translate(x + w / 2, y + h / 2);
  //     rotate(random(-30,30));

  //     let c = random(p);

  //     noStroke();
  //     fill(c);
  //     ellipse(0, 0, d / 2, d);

  //     noFill();
  //     stroke(c);
  //     strokeWeight(d / 2*random(0.5,1));
  //     strokeCap(ROUND);

  //     arc(0, 0, d, d, 0, 180);

  //     pop();
  //   }
  // }
}

function draw() {
  background("#F2EDEC");
  for(j=0;j<mountains.length;j=j+1){
   mountain = mountains[j]
   mountain.draw()   //繪出球的位子
   mountain.update()
  }
 }



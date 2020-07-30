let values;
let flag=0
let i=0;
let j=0;
function setup() {
  createCanvas(800,500)
  values=new Array(width);
  for(let i=0;i<values.length;i++){
    values[i]=random(height);
  }
  // for(let i=0;i<values.length;i++){
  //   for(let j=0;j<values.length-2;j++){
  //     if(values[j]>values[j+1]){
  //       temp=values[j]
  //       values[j]=values[j+1]
  //       values[j+1]=temp
  //       flag=1
  //     }
  //   }
  //   if(flag==0){
  //     break;
  //   }
  //   flag=0
  // }
  // put setup code here
}

function draw() {
  background(0);
      if(values[j]>values[j+1]){
        temp=values[j]
        values[j]=values[j+1]
        values[j+1]=temp
        flag=1
      }
      j=j+1
      if(i<values.length-1){
    for(let j=0;j<values.length-2;j++){
      if(values[j]>values[j+1]){
        temp=values[j]
        values[j]=values[j+1]
        values[j+1]=temp
        flag=1
      }
    }
    }
    else{
      noLoop();
    }
    i++;
  for(let i=0;i<values.length;i++){
    stroke(255);
    line(i,height,i,height-values[i]);
  }
  // put drawing code here
}
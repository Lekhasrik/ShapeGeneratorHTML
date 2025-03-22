let button=document.getElementById("button");
var numberInShape=1;
var oldvalue=0;
button.onclick = () => {
  let n=document.getElementById("number").value ;
  const circle=document.getElementById("circle");
  const rectangle=document.getElementById("rectangle");
  const square=document.getElementById("square");
  const box=document.getElementById("box");
//   let c=document.getElementById("color").value;

  n = Number(n) + Number(oldvalue);

  for(let j=numberInShape;j<=n;j++){
    let shape=document.createElement("div");
    shape.innerHTML += numberInShape;
    if(circle.checked)
        shape.classList.add("circle");
    
    else if(square.checked)
        shape.classList.add("square");
    
    else if(rectangle.checked)
        shape.classList.add("rectangle");
    // else if(triangle.checked)
    //     shape.classList.add("triangle");
    else
        document.write("Inavlid Input");
    
    numberInShape++;
    box.appendChild(shape);
    oldvalue=document.getElementById("box").lastElementChild.innerHTML;
  }
}
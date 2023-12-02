var a=document.getElementById("b1");
var b=document.getElementById("b2");
var c=document.getElementById("b3");

var d=document.getElementById("b4");
var e=document.getElementById("b5");
var f=document.getElementById("b6");

var g=document.getElementById("b7");
var h=document.getElementById("b8");
var i=document.getElementById("b9");
var x=1
function c1()
{
    if(x%2!=0)
    {
        a.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        a.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c2()
{
    if(x%2!=0)
    {
        b.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        b.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c3()
{
    if(x%2!=0)
    {
        c.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        c.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c4()
{
    if(x%2!=0)
    {
        d.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        d.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c5()
{
    if(x%2!=0)
    {
        e.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        e.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c6()
{
    if(x%2!=0)
    {
        f.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        f.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c7()
{
    if(x%2!=0)
    {
        g.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        g.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c8()
{
    if(x%2!=0)
    {
        h.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        h.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function c9()
{
    if(x%2!=0)
    {
        i.textContent="X"; 
        x+=1;
        chekwin()
    }
    else{
        i.textContent="O"; 
        x+=1;
        chekwin()
    }
    
}
function chekwin()
{
    var y=document.getElementById("re");

    if(b1.textContent=="X" && b2.textContent=="X" && b3.textContent=="X")
    {
        y.textContent="Player X Won";
        b1.style.color="pink";
        b2.style.color="pink";
        b3.style.color="pink";
    }
    else if(b4.textContent=="X" && b5.textContent=="X" && b6.textContent=="X")
    {
        y.textContent="Player X Won";
        b5.style.color="pink";
        b6.style.color="pink";
        b4.style.color="pink";
    }
   else if(b7.textContent=="X" && b8.textContent=="X" && b9.textContent=="X")
    {
        y.textContent="Player X Won";
        b7.style.color="pink";
        b8.style.color="pink";
        b9.style.color="pink";
    }
    else if(b1.textContent=="X" && b4.textContent=="X" && b7.textContent=="X")
    {
        y.textContent="Player X Won";
        b1.style.color="pink";
        b4.style.color="pink";
        b7.style.color="pink";
    }
    else if(b2.textContent=="X" && b5.textContent=="X" && b8.textContent=="X")
    {
        y.textContent="Player X Won";
        b2.style.color="pink";
        b5.style.color="pink";
        b8.style.color="pink";
    }
    else if(b3.textContent=="X" && b6.textContent=="X" && b9.textContent=="X")
    {
        y.textContent="Player X Won";
        b3.style.color="pink";
        b6.style.color="pink";
        b9.style.color="pink";
    }
    else if(b3.textContent=="X" && b5.textContent=="X" && b7.textContent=="X")
    {
        y.textContent="Player X Won";
        b3.style.color="pink";
        b5.style.color="pink";
        b7.style.color="pink";
    }
    else if(b1.textContent=="X" && b5.textContent=="X" && b9.textContent=="X")
    {
        y.textContent="Player X Won";
        b1.style.color="pink";
        b5.style.color="pink";
        b9.style.color="pink";
    }



    else if(b1.textContent=="O" && b2.textContent=="O" && b3.textContent=="O")
    {
        y.textContent="Player O Won";
        b1.style.color="pink";
        b2.style.color="pink";
        b3.style.color="pink";
    }
    else if(b4.textContent=="O" && b5.textContent=="O" && b6.textContent=="O")
    {
        y.textContent="Player O Won";
        b5.style.color="pink";
        b6.style.color="pink";
        b4.style.color="pink";
    }
   else if(b7.textContent=="O" && b8.textContent=="O" && b9.textContent=="O")
    {
        y.textContent="Player O Won";
        b7.style.color="pink";
        b8.style.color="pink";
        b9.style.color="pink";
    }
    else if(b1.textContent=="O" && b4.textContent=="O" && b7.textContent=="O")
    {
        y.textContent="Player O Won";
        b1.style.color="pink";
        b4.style.color="pink";
        b7.style.color="pink";
    }
    else if(b2.textContent=="O" && b5.textContent=="O" && b8.textContent=="O")
    {
        y.textContent="Player O Won";
        b2.style.color="pink";
        b5.style.color="pink";
        b8.style.color="pink";
    }
    else if(b3.textContent=="O" && b6.textContent=="O" && b9.textContent=="O")
    {
        y.textContent="Player O Won";
        b3.style.color="pink";
        b6.style.color="pink";
        b9.style.color="pink";
    }
    else if(b3.textContent=="O" && b5.textContent=="O" && b7.textContent=="O")
    {
        y.textContent="Player O Won";
        b3.style.color="pink";
        b5.style.color="pink";
        b7.style.color="pink";
    }
    else if(b1.textContent=="O" && b5.textContent=="O" && b9.textContent=="O")
    {
        y.textContent="Player O Won";
        b1.style.color="pink";
        b5.style.color="pink";
        b9.style.color="pink";
    }

}

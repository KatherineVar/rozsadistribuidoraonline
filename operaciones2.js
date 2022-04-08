var num1 = 0;
var res = 0;
var res1 = 0;
var res2 = 0;
var res3=0;
function impuestos(){
    num1=Number(document.getElementById('n1').value);
    res= (num1 *0.07);
    res1 = (num1+res)*0.30 
    res2=0;
    res3=0;
    res2=res.toFixed(2);
    res3 = res1.toFixed(2)
    document.getElementById('usa').value=res2;
    document.getElementById('cr').value=res3;
    
}

var peso=0;
total = 0;
total1 = 0;
totalfin=0;
totalfin2 = 0;
function dolar(){
    peso=Number(document.getElementById('peso2').value);
    total= (9.5/1000)*peso ;
    total1= num1+ res + res1;
    totalfin= total + total1;
    totalfin2 = totalfin.toFixed(2);
    document.getElementById('dol').value=totalfin2;
    
}
var colones = 0;
var colones2 = 0;
var camb = 0;
function colon(){
    camb=Number(document.getElementById('cambio').value);
    colones = totalfin*camb;
    colones2 = colones.toFixed(0)
    document.getElementById('col').value=colones2;
}

function borrar(){
    document.getElementById('n1').value="";
    document.getElementById('usa').value="";
    document.getElementById('cr').value="";
    document.getElementById('peso2').value="";
    document.getElementById('dol').value="";
    document.getElementById('cambio').value="";
    document.getElementById('col').value="";
}
function ms1(){
    alert("Precio en doláres de la prenda o accesorio en la aplicación. *Dígite solo números, de lo contrario no va a poder realizar los cálculos correspondientes.");
}
function ms2(){
    alert("Impuesto correspondiente por ingresar la mercadería a Florida, 7% sobre el valor de la prenda en la aplicación.");
}
function ms3(){
    alert("Impuesto correspondiente por ingresar la mercadería a Florida, 29.95% sobre el valor de la prenda en la aplicación.");
}
function ms4(){
    alert("Tarifa 10$ el kg, peso real, recomendaciones, blusas, vestidos; conjuntos, 300 g; pantalones, 600 g; accesorios, 200; zapatos, 700 g aproximadamente.");
}
function ms5(){
    alert("Tipo de cambio según BAC Credomatic, aplica el correspondiente a la fecha de cierre del pedido. ");
}
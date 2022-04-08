var num1 = 0;
var res = 0;
var res2 = 0;
function impuestos(){
    num1=Number(document.getElementById('n1').value);
    res= (num1 *0.07);
    res2=0;
    res2=res.toFixed(2);
    document.getElementById('res').value=res2;
    
}

var prenda = "";

total = 0;
function dolar(){
    prenda=String(document.getElementById('Articulo').value);
    
    
    
    
    
    if(prenda =="Articulos"){
        
        alert("Seleccione un artículo");
    }else if(prenda == "Joyería"){
        
        total = (num1 + 1)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Fundas para móvil"){
        total = (num1 + 1.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Brassier 1 unidad"){
        
        total = (num1 + 2)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Fun"){
        
        total = (num1 + 2)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Panties 1 unidad"){
        total = (num1 + 2)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Fajas 1 unidad"){
        
        total = (num1 + 2)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Camisas Niños"){
        total = (num1 + 2.5)+res
        document.getElementById('dol').value=total;
    }else if(prenda == "Blusas Niñas"){
        
        total = (num1 + 2.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Lentes"){
        total = (num1 + 3)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Bolso Pequeño"){
        
        total = (num1 + 3)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Bolso Pequeño"){
        
        total = (num1 + 3)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Reloj"){
        
        total = (num1 + 3)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Enagua Niñas"){
        total = (num1 + 3.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Boinas"){
        total = (num1 + 4)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Blusas"){
        
        total = (num1 + 4.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Conjunto De Ropa Interior"){
        total = (num1 + 4.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Short"){
        
        total = (num1 + 4.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Vestido Niñas"){
        total = (num1 + 4.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Minifalda"){
        
        total = (num1 + 5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Con"){
        
        total = (num1 + 5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Licra"){
        total = (num1 + 5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Sandalias"){
        
        total = (num1 + 5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Salida De Playa"){
        total = (num1 + 5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Lencería"){
        
        total = (num1 + 5.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Vestido Corto"){
        total = (num1 + 5.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Enterizo short"){
        
        total = (num1 + 5.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Falda Larga"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Traje De Baño"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Sombreros"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Pijama De Short"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Enterizo Pantalón"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Camisas"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Enterizo Pantalón"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Camisas"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Enterizo Pantalón"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Camisas"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Pantalón Niños"){
        
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Sueter Niños"){
        total = (num1 + 6)+res;
        document.getElementById('dol').value=total;

    }else if(prenda == "Conjuntos 2 piezas"){
        
        total = (num1 + 6.5)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Vestido Maxi"){
        total = (num1 + 7)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Pijama de Pantalón"){
        
        total = (num1 + 8)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Pantalón de mezclilla"){
        total = (num1 + 8)+res;
        document.getElementById('dol').value=total;
    }else if(prenda == "Bolso grande"){
        
        total = (num1 + 8)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Candigan"){
        total = (num1 + 8)+res;
        document.getElementById('dol').value=total;
    }else if(prenda =="Conjunto Deportivo"){
        total = (num1 + 8)+res;
        document.getElementById('dol').value=total;
    }else{
        total = (num1 + 12)+res;
        document.getElementById('dol').value=total;
        
    }
}
var colones = 0;
var colones2 = 0;
var camb = 0;
function colon(){
    camb=Number(document.getElementById('cambio').value);
    colones = total*camb;
    colones2 = colones.toFixed(0);
    document.getElementById('col').value=colones2;
}
function borrar(){
    document.getElementById('n1').value="";
    document.getElementById('res').value="";
    document.getElementById('Articulo').value="Seleccione:";
    document.getElementById('dol').value="";
    document.getElementById('cambio').value="";
    document.getElementById('col').value="";
    
}

function ms1(){
    alert("Precio en doláres de la prenda o accesorio en la aplicación.");
}
function ms2(){
    alert("Impuesto correspondiente por ingresar la mercadería a Florida, 7% sobre el valor de la prenda en la aplicación.");
}
function ms3(){
    alert("Ropa de niño, caballero, dama, talla plus, conjuntos, pantalones, blusas, ropa interior... Zapatos tanto de hombre como de mujer y accesorios, pulceras, anillos y collares...");
}
function ms4(){
    alert("Tipo de cambio según BAC Credomatic, aplica el correspondiente a la fecha de cierre del pedido. ");
}


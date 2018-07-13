/*/**var nome = "Arthur";
//var idade = "13";
//var numero;
//var numero2;
//var soma ;
//document.getElementByid('nome').innerHTML=(nome);
// aqua i merror ki doli
/*estas linhas não estão funcionando
alert(nome+idade);

alert('não entre nesta pagina ')
//concatenendo
alert("bem vindo"+nome+ "sua idade é +idade");
var numero;
alert(numero)
numero=25
numero2=10
soma=numero+numero2
alert(soma);*/


/*
var nome = prompt("digite seu nome ? ");
var idade = prompt("digite sua idade");
var ano =2018-idade;

document.write("<div><p>"+nome+"</p><p>"+idade+"</p> <p> voce nasceu em " +ano+ " </p></div>");*/

//document.getElementById('nome').innerHTML=nome;
 
 //var nome =document.getElementById("nome");
 //document.write("<p>"+nome+"</p>" ); 

/*var valor1=prompt("digite valor 1");
var valor2=prompt("digite valor 2");

 function soma(valor1, valor2) {

 	alert(typeof valor1);
    return valor1 + valor2;
}
document.getElementById("soma").innerHTML = soma();
document.write("<div><p>a soma entre 10 e 20 e "+soma (10,20)+"</p></div>");



function somaValores(){
var Valor3 , Valor4;
Valor1=document.getElementById('Valor1').value;
Valor2=document.getElementById('Valor2').value;
var soma=parseInt(Valor1)+parseInt(Valor2);

document.getElementByid(  )

alert("soma");
}

function dividirValores(){
var Valor3 , Valor4;
Valor3=document.getElementById('Valor3').value;
Valor4=document.getElementById('Valor4').value;
var dividir=parseInt(Valor3)/parseInt(Valor4);

alert("dividir");
}


function multiplicaValores(){
var Valor3 , Valor4;
Valor3=document.getElementById('Valor3').value;
Valor4=document.getElementById('Valor4').value;
var multiplica=parseInt(Valor3)/parseInt(Valor4);

alert("multiplica")
}


function subtrairValores(){
var Valor3 , Valor4;
Valor3=document.getElementById('Valor3').value;
Valor4=document.getElementById('Valor4').value;
var dividir=parseInt(Valor3)/parseInt(Valor4);

alert("subtrair");
}

var numero=0;

function mais(){
	 numero++;
	 document.getElementById("valor").innerHTML=numero;
}


function menos(){
	 numero--;
	 document.getElementById("valor").innerHTML=numero;



}

/*
 var peso= +document.getElementById('Peso').value;
 var metro= +document.getElementById('Metro').value;
 var centimetros= +document.getElementById('Centimetros').value;
 var nome = +document.getElementById('nome').value;




*/

function calcularIMC(){

var form = document.getElementById('form');

var peso= +form.Kilo.value;

var metro= +form.Metro.value;

var centimetros= +form.Centimetros.value;



 var altura = ((metro*100)+centimetros) /100;

 var imc = peso /(altura * altura);
 	

form.imc.value=imc.toFixed(2);


//condicional


if (imc <=18.5) {

	alert("Vc esta magro d+ da conta")


}


else if(imc>18.5 && imc<=24.9){

	alert("Vc esta no peso ideal continue assim")

} 


if (imc >=24.9){

	alert("Vc esta acima do peso ideal, procure um medico")
}

}	
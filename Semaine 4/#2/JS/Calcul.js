function TextEnter(val)
{
	document.querySelector("#in").value += val;
}

function Clear()
{
	document.querySelector("#in").value = "";
}

function Equals()
{
	var calcul = document.querySelector("#in");
	calcul.value = eval(calcul.value);
}
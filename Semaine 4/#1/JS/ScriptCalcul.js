function calcul()
{
	var nb = document.querySelector("#nb").value;
	if(document.querySelector("#nb").value != "" && !isNaN(nb))
	{
		var divProduit = document.querySelector("#pr");
		divProduit.innerHTML = "";
		for(i=1; i<10; i++)
		{
			var rep = nb * i;
			var line = document.createElement("p");
			line.innerHTML = i + " * " + nb + " = " + rep;
			document.querySelector("#pr").appendChild(line);
		}
		document.querySelector("#nb").value = "";
	}
	else
	{
		alert("Enter a number");
		document.querySelector("#nb").value = "";
	}
}
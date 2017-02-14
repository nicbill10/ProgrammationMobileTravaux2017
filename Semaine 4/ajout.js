function ajoutNom()
{
	if(document.querySelector("#ajoutNom").value != "")
	{
		var nouveauNom = document.createElement("li");
		var nom = document.querySelector("#ajoutNom").value;
		nouveauNom.innerHTML = nom;
		document.body.querySelector("#lst").appendChild(nouveauNom);
		document.querySelector("#ajoutNom").value = "";
	}
}

var liste = document.querySelectorAll("#lst");

for(var i=0; i<liste.length; i++)
{
	liste[i].addEventListener("click", supprimerNomList)
}

function supprimerNomList(ck)
{
	if(ck.target.nodeName = "li")
		ck.target.parentNode.removeChild(ck.target);
}


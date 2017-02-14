var titres = document.querySelectorAll("h1");
var nbClick = 0;
var deplacementTitre;
var deplacementParagraphe;

for (var i = 0; i < titres.length; i++)
{
	titres[i].addEventListener("click", déplacer);
}

function ajouter()
{
	var i = 3;
	var nouveauTitre = document.querySelector("#titre").value;
	var nouveauParagraphe = document.querySelector("#contenuParagraphe").value;
	
	if(nouveauTitre == "" || nouveauParagraphe == "")
	{
		alert("Veuillez entrer un titre et/ou un pragraphe.");
	}
	else
	{
		var _titre = document.createElement("h1");
		var _paragraphe = document.createElement("p");
		_titre.innerHTML = nouveauTitre;
		_paragraphe.innerHTML = nouveauParagraphe;
		_titre.id = i;
		_paragraphe.id = "p" + i;
		document.body.querySelector("#s").appendChild(_titre);
		document.body.querySelector("#s").appendChild(_paragraphe);
		_titre.addEventListener("click", déplacer);
	}
	document.querySelector("#titre").value = "";
	document.querySelector("#contenuParagraphe").value = "";
}

function déplacer(SelectedElement)
{
	if(nbClick == 0)
	{
			document.body.style.cursor = "help";
			deplacementTitre = SelectedElement.target;
			deplacementParagraphe = document.querySelector("#p" + SelectedElement.target.id);
			nbClick++;
	}
	else
	{
		var cible = SelectedElement.target;
		document.body.querySelector("#s").insertBefore(deplacementParagraphe, cible);
		document.body.querySelector("#s").insertBefore(deplacementTitre, deplacementParagraphe);
		nbClick = 0;
		document.body.style.cursor = "default";
	}
}
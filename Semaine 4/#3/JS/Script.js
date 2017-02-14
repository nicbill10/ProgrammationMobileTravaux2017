var imageLoc = document.querySelector("#pic");

var picsDir = 
[	
	"Photos/X360Console.png",
	"Photos/X360Controller.jpg",
	"Photos/OneConsole.png",
	"Photos/OneController.jpg",
	"Photos/PS3Console.jpg",
	"Photos/PS3Controller.jpg",
	"Photos/PS4Console.png",
	"Photos/PS4Controller.jpg",
]

var posPhoto = Math.floor((Math.random() * picsDir.length) + 0)

function showPic()
{
	imageLoc.src = picsDir[posPhoto];
}

function next()
{
	if(posPhoto < picsDir.length - 1)
	{
		posPhoto++;	
	}
	else
	{
		posPhoto = 0;
	}
	imageLoc.src = picsDir[posPhoto];
}

function prev()
{
	if(posPhoto > 0)
	{
		posPhoto--;	
	}
	else
	{
		posPhoto = picsDir.length-1;
	}
	imageLoc.src = picsDir[posPhoto];
}


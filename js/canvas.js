//Software local com <canvas>, <form> e javascript.

function draw()
{
	let superficie = document.getElementById("canvas01");
	let Rect =
	{
		'X':100,
		'Y':100
	};

	let control = 1;
	while( control < 100 )
	{
		control++;
		Rect.X++;
		Rect.Y++;
		if( superficie.getContext )
		{
			let contexto = superficie.getContext("2d");

			contexto.fillStyle = "#ff0000";
			contexto.fillRect( Rect.X, Rect.Y, 55, 55);
		}
		else document.write("<br><br><h2>Erro ao Ober contexto<h2>");
	}
}

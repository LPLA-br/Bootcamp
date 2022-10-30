/*input e output usando elementos de formulário do html*/

//variáveis globais
let nome = "Dispositivo", volume = 0, estado = "desligado";

//flags de checkboxes
let ecoPermission = true;

function NomeDoDispositivo(form)
{
	//fazendo uso de variável global
	nome = form.inputbox.value;
	return nome;
}

function EstadoDoDispositivo(form)
{

	for(Contador = 0; Contador < 2; Contador++)
	{
		if(form.estado[Contador].checked)
			break;
	}

	switch(Contador)
	{
		case 0:
			estado = "ligado";
			return `${nome} ligado`;
			break;
		case 1:
			estado = "desligado";
			return `${nome} desligado`;
			break;
		default:
			return "queimou_rsrsrs";
			break;
	}
}

/*checa os checkboxes e altera
flags globais dos checkboxes*/
function ValidarCheckboxes(form)
{
	//Opções só devem funcionar com o microfone ligado.
	if(form.checar.checked == true && estado !== "desligado")
		ecoPermission = true;
	else
		ecoPermission = false;
}

/*funções usadas por outras funções para
leitura e escrita do textarea. Vulgo: Saída Principal*/

function LerTexto(form)
{
	let Texto = form.inputbox2.value;
	return Texto;
}

//permissaoDeEco é uma gambiarra.
function EscreverTexto(form, Text, permissaoDeEco)
{
	if(permissaoDeEco === true)
		form.saida.value = Text;
	else
		form.saida.value = "NEGADO";
}

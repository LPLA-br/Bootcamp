/* ---- CRUD ---- */
/*Programação Orientada a Gambiarra
  Programação Procedimental
  Programação Orientada a Objetos*/

/*VARIÁVEIS GLOBAIS*/

let campo = document.getElementById("DELERE");
let campoII = document.getElementById("MOSTRAR");
let campoIII = document.getElementById("SELECIONAR");

//Base de dados volátil
const db = {
	"Usuarios":[
		{
			'nome':'Default',
			'idade':0,
			'altura':0,
			'peso':0,
			'sexo':'f'
		}
	]
};

campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );

/*CLASSES*/

class Pessoa
{
	nome;
	idade;
	altura;
	peso;
	sexo;

	//Função construtora
	constructor(Nome, Idade, Altura, Peso, Sexo)
	{
		this.nome = Nome;
		this.idade = Idade;
		this.altura = Altura;
		this.peso = Peso;
		this.sexo = Sexo;
	}
};

/*FUNÇÕES UTILITÁRIAS*/

/*retorna se uma string é ou não constituida
somente de números*/
function stringNumero(string)
{
	//Regular Expressions
	return /^[0-9]+$/.test(string);
}

/*retorna tamanho de matriz com valor corrigido para
index do primeiro elemento, que é zero*/
function tamanhoMatrizIndexZero(tamanho)
{
	return tamanho - 1;
}

function removeTresUltimoChar(string)
{
	return string.replace(/MOD/, '');
}

/*FUNÇÕES ATIVADAS POR GATILHOS HTML*/

/*obtem o conteúdo dos inputs e salva na memória em forma de objeto literal*/
function criar()
{
	let tagId = ["nome","idade","altura","peso","sexo"];
	let dadosExtraidos = [];

	for(let inputsHtml = 0; inputsHtml < 5; inputsHtml++)
	{
		let dadoDoInputAlvo = document.getElementById(tagId[inputsHtml]);

		if( stringNumero(dadoDoInputAlvo.value) )
		{
			dadosExtraidos.push(Number(dadoDoInputAlvo.value));
		}
		else
		{
			dadosExtraidos.push(dadoDoInputAlvo.value);
		}
		dadoDoInputAlvo.value = "";
	}

	//formando e jogando o objeto para memória.
	let objetoTemporario = new Pessoa(dadosExtraidos[0], dadosExtraidos[1],
					dadosExtraidos[2], dadosExtraidos[3], dadosExtraidos[4]);

	db["Usuarios"].push(objetoTemporario);

	campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
	campoII.max = campo.max;
	campoIII.max = campo.max;
}

function read()
{
	let numId = (document.getElementById("SELECIONAR").value);
	let Output = document.getElementById("leitura");
	Output.value = `NOME ${db['Usuarios'][numId].nome}\nIDADE ${db['Usuarios'][numId].idade}\nALTURA ${db['Usuarios'][numId].altura}\nPESO ${db['Usuarios'][numId].peso}\nSEXO ${db['Usuarios'][numId].sexo}`;

	campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
	campoII.max = campo.max;
	campoIII.max = campo.max;
}

function modificar()
{
	let tagId = ["nomeMOD","idadeMOD","alturaMOD","pesoMOD","sexoMOD"];
	campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
	campoII.max = campo.max;
	campoIII.max = campo.max;

	for(let inputsHtml = 0; inputsHtml < 5; inputsHtml++)
	{
		let identificador = removeTresUltimoChar(tagId[inputsHtml]);
		let dadoDoInputAlvo = document.getElementById(tagId[inputsHtml]);
		dadoDoInputAlvo.value = db["Usuarios"][(campoII.value)][identificador];
	}
}

function mostrar()
{
	let tagId = ["nomeMOD","idadeMOD","alturaMOD","pesoMOD","sexoMOD"];
	campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
	campoII.max = campo.max;
	campoIII.max = campo.max;

	for(let inputsHtml = 0; inputsHtml < 5; inputsHtml++)
	{
		let identificador = removeTresUltimoChar(tagId[inputsHtml]);
		let dadoDoInputAlvo = document.getElementById(tagId[inputsHtml]);
		db["Usuarios"][(campoII.value)][identificador] = dadoDoInputAlvo.value;
	}

}

function apagar()
{
	db["Usuarios"].splice((campo.value),1); //splice(indicie, quantosDeletarAFrente);

	//atualizando range maximo do range ápos deleção confirmada
	campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
	campoII.max = campo.max;
	campoIII.max = campo.max;
}

/*OBSERVAÇÕES FINAIS
	
*/


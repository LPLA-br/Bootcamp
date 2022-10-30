/* ---- CRUD ---- */
/*Programação Orientada a Gambiarra
  Programação Procedimental
  Programação Orientada a Objetos*/

/*VARIÁVEIS GLOBAIS*/


//Base de dados volátil

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

class Script
{
	//utilitários do script.

	constructor()
	{}

	/*retorna se uma string é ou não constituida
	somente de números*/
	stringNumero(string)
	{
		//Regular Expressions
		return /^[0-9]+$/.test(string);
	}

	/*retorna tamanho de matriz com valor corrigido para
	index do primeiro elemento, que é zero*/
	tamanhoMatrizIndexZero(tamanho)
	{
		return tamanho - 1;
	}

	removeTresUltimoChar(string)
	{
		return string.replace(/MOD/, '');
	}

};

class CRUD extends func
{
	tagId;
	tagIdMOD;
	campo;
	campoII;
	campoIII;
	db;

	constructor(campo, campoII, campoIII)
	{
		tagId = ["nome","idade","altura","peso","sexo"];
		tagIdMOD = ["nomeMOD","idadeMOD","alturaMOD","pesoMOD","sexoMOD"];

		let campo = document.getElementById("DELERE");
		let campoII = document.getElementById("MOSTRAR");
		let campoIII = document.getElementById("SELECIONAR");
		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		db = {
			"Usuarios":[
				{
					'nome':'Padrão',
					'idade':0,
					'altura':0,
					'peso':0,
					'sexo':'f'
				}
			]
		};
	}

	criar()
	{
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
		let objetoTemporario = new Pessoa(dadosExtraidos[0], dadosExtraidos[1], dadosExtraidos[2], dadosExtraidos[3], dadosExtraidos[4]);

		db["Usuarios"].push(objetoTemporario);
		delete objetoTemporario;

		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		campoII.max = campo.max;
		campoIII.max = campo.max;
	}

	read()
	{
		let numId = (document.getElementById("SELECIONAR").value);
		let Output = document.getElementById("leitura");
		Output.value = `NOME ${db['Usuarios'][numId].nome}\nIDADE ${db['Usuarios'][numId].idade}\nALTURA ${db['Usuarios'][numId].altura}\nPESO ${db['Usuarios'][numId].peso}\nSEXO ${db['Usuarios'][numId].sexo}`;

		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		campoII.max = campo.max;
		campoIII.max = campo.max;
	}

	modificar()
	{
		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		campoII.max = campo.max;
		campoIII.max = campo.max;

		for(let inputsHtml = 0; inputsHtml < 5; inputsHtml++)
		{
			let identificador = removeTresUltimoChar(tagIdMOD[inputsHtml]);
			let dadoDoInputAlvo = document.getElementById(tagIdMOD[inputsHtml]);
			dadoDoInputAlvo.value = db["Usuarios"][(campoII.value)][identificador];
		}
	}

	mostrar()
	{
		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		campoII.max = campo.max;
		campoIII.max = campo.max;

		for(let inputsHtml = 0; inputsHtml < 5; inputsHtml++)
		{
			let identificador = removeTresUltimoChar(tagIdMOD[inputsHtml]);
			let dadoDoInputAlvo = document.getElementById(tagIdMOD[inputsHtml]);
			db["Usuarios"][(campoII.value)][identificador] = dadoDoInputAlvo.value;
		}
	}

	apagar()
	{
		db["Usuarios"].splice((campo.value),1); //splice(indicie, quantosDeletarAFrente);

		//atualizando range maximo do range ápos deleção confirmada
		campo.max = tamanhoMatrizIndexZero( db["Usuarios"].length );
		campoII.max = campo.max;
		campoIII.max = campo.max;
	}
};




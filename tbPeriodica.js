$(document).ready(function () {
	//⁰¹²³⁴⁵⁶⁷⁸⁹
	var klmnopq = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
	var cl = {
		"alcalino": {
			"link": "https://www.tabelaperiodicacompleta.com/metais-alcalinos",
			"title": "Metais Alcalinos"
		},
		"alcalino-terroso": {
			"link": "https://www.tabelaperiodicacompleta.com/metais-alcalino-terrosos",
			"title": "Metais alcalino-terrosos"
		},
		"metal-transicao": {
			"link": "https://www.tabelaperiodicacompleta.com/metais-de-transicao",
			"title": "Metais de transição"
		},
		"metal-representativo": {
			"link": "https://www.tabelaperiodicacompleta.com/metais-representativos",
			"title": "Metais representativos"
		},
		"semi-metal": {
			"link": "https://www.tabelaperiodicacompleta.com/semi-metais",
			"title": "Semi-metais"
		},
		"nao-metal": {
			"link": "https://www.tabelaperiodicacompleta.com/nao-metais",
			"title": "Não-metais"
		},
		"lantanideo": {
			"link": "https://www.tabelaperiodicacompleta.com/lantanideos",
			"title": "Lantanídeos"
		},
		"calcogenio": {
			"link": "https://www.tabelaperiodicacompleta.com/calcogenios/",
			"title": "Calcogênios"
		},
		"halogenio": {
			"link": "https://www.tabelaperiodicacompleta.com/halogenios",
			"title": "Halogênios"
		},
		"actinideo": {
			"link": "https://www.tabelaperiodicacompleta.com/actinideos",
			"title": "Actinídeos"
		},
		"gas-nobre": {
			"link": "https://www.tabelaperiodicacompleta.com/gases-nobres",
			"title": "Gases nobres"
		}
	};
	var prop = {
		"solido": {
			"subtitle": "C",
			"link": "#",
			"title": "Sólido"
		},
		"liquido": {
			"subtitle": "Hg",
			"link": "#",
			"title": "Líquido"
		},
		"gasoso": {
			"subtitle": "H",
			"link": "#",
			"title": "Gasoso"
		},
		"desconhecido": {
			"subtitle": "Rf",
			"link": "#",
			"title": "Desconhecido"
		},
	};
	var groups = [
		{
			"group": "1",
			"family": "1A",
			"cl": "alcalino"
		},
		{
			"group": "2",
			"family": "2A",
			"cl": "alcalino-terroso"
		},
		{
			"group": "3",
			"family": "3B",
			"cl": "metal-transicao"
		},
		{
			"group": "4",
			"family": "4B",
			"cl": "metal-transicao"
		},
		{
			"group": "5",
			"family": "5B",
			"cl": "metal-transicao"
		},
		{
			"group": "6",
			"family": "6B",
			"cl": "metal-transicao"
		},
		{
			"group": "7",
			"family": "7B",
			"cl": "metal-transicao"
		},
		{
			"group": "8",
			"family": "8B",
			"cl": "metal-transicao"
		},
		{
			"group": "9",
			"family": "8B",
			"cl": "metal-transicao"
		},
		{
			"group": "10",
			"family": "8B",
			"cl": "metal-transicao"
		},
		{
			"group": "11",
			"family": "1B",
			"cl": "metal-transicao"
		},
		{
			"group": "12",
			"family": "2B",
			"cl": "metal-transicao"
		},
		{
			"group": "13",
			"family": "3A",
			"cl": "",
			"title": "Família do Boro"
		},
		{
			"group": "14",
			"family": "4A",
			"cl": "",
			"title": "Família do Carbono"
		},
		{
			"group": "15",
			"family": "5A",
			"cl": "",
			"title": "Família do Nitrogênio"
		},
		{
			"group": "16",
			"family": "6A",
			"cl": "calcogenio"
		},
		{
			"group": "17",
			"family": "7A",
			"cl": "halogenio"
		},
		{
			"group": "18",
			"family": "8A",
			"cl": "gas-nobre"
		}
	];
	var element = {
		"1": {
			"class": "nao-metal",
			"state": "gasoso",
			"group": 1,
			"period": 1,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/hidrogenio",
			"mass": "1,00794",
			"symbol": "H",
			"name": "Hidrogênio",
			"distr": [1],
			"ec": ["1s¹"]
		},
		"2": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 1,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/helio",
			"mass": "4,002602",
			"symbol": "He",
			"name": "Hélio",
			"distr": [2],
			"ec": ["1s²"]
		},
		"3": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/litio",
			"mass": "6,941",
			"symbol": "Li",
			"name": "Lítio",
			"distr": [2, 1],
			"ec": ["1s²", "2s¹"]
		},
		"4": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/berilio",
			"mass": "9,012182",
			"symbol": "Be",
			"name": "Berílio",
			"distr": [2, 2],
			"ec": ["1s²", "2s²"]
		},
		"5": {
			"class": "semi-metal",
			"state": "solido",
			"group": 13,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/boro",
			"mass": "10,811",
			"symbol": "B",
			"name": "Boro",
			"distr": [2, 3],
			"ec": ["1s²", "2s²", "2p¹"]
		},
		"6": {
			"class": "nao-metal",
			"state": "solido",
			"group": 14,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/carbono",
			"mass": "12,0107",
			"symbol": "C",
			"name": "Carbono",
			"distr": [2, 4],
			"ec": ["1s²", "2s²", "2p²"]
		},
		"7": {
			"class": "nao-metal",
			"state": "gasoso",
			"group": 15,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/nitrogenio",
			"mass": "14,0067",
			"symbol": "N",
			"name": "Nitrogênio",
			"distr": [2, 5],
			"ec": ["1s²", "2s²", "2p³"]
		},
		"8": {
			"class": "nao-metal",
			"state": "gasoso",
			"group": 16,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/oxigenio",
			"mass": "15,9994",
			"symbol": "O",
			"name": "Oxigênio",
			"distr": [2, 6],
			"ec": ["1s²", "2s²", "2p⁴"]
		},
		"9": {
			"class": "halogenio",
			"state": "gasoso",
			"group": 17,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/fluor",
			"mass": "18,9984032",
			"symbol": "F",
			"name": "Flúor",
			"distr": [2, 7],
			"ec": ["1s²", "2s²", "2p⁵"]
		},
		"10": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 2,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/neonio",
			"mass": "20,1797",
			"symbol": "Ne",
			"name": "Neônio",
			"distr": [2, 8],
			"ec": ["1s²", "2s²", "2p⁶"]
		},
		"11": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/sodio",
			"mass": "22,98976928",
			"symbol": "Na",
			"name": "Sódio",
			"distr": [2, 8, 1],
			"ec": ["[Ne]", "3s¹"]
		},
		"12": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/magnesio",
			"mass": "24,305",
			"symbol": "Mg",
			"name": "Magnésio",
			"distr": [2, 8, 2],
			"ec": ["[Ne]", "3s²"]
		},
		"13": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 13,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/aluminio",
			"mass": "26,9815386",
			"symbol": "Al",
			"name": "Alumínio",
			"distr": [2, 8, 3],
			"ec": ["[Ne]", "3s²", "3p¹"]
		},
		"14": {
			"class": "semi-metal",
			"state": "solido",
			"group": 14,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/silicio",
			"mass": "28,0855",
			"symbol": "Si",
			"name": "Silício",
			"distr": [2, 8, 4],
			"ec": ["[Ne]", "3s²", "3p²"]
		},
		"15": {
			"class": "nao-metal",
			"state": "solido",
			"group": 15,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/fosforo",
			"mass": "30,973762",
			"symbol": "P",
			"name": "Fósforo",
			"distr": [2, 8, 5],
			"ec": ["[Ne]", "3s²", "3p³"]
		},
		"16": {
			"class": "nao-metal",
			"state": "solido",
			"group": 16,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/enxofre",
			"mass": "32,065",
			"symbol": "S",
			"name": "Enxofre",
			"distr": [2, 8, 6],
			"ec": ["[Ne]", "3s²", "3p⁴"]
		},
		"17": {
			"class": "halogenio",
			"state": "gasoso",
			"group": 17,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cloro",
			"mass": "35,453",
			"symbol": "Cl",
			"name": "Cloro",
			"distr": [2, 8, 7],
			"ec": ["[Ne]", "3s²", "3p⁵"]
		},
		"18": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/argonio",
			"mass": "39,948",
			"symbol": "Ar",
			"name": "Argônio",
			"distr": [2, 8, 8],
			"ec": ["[Ne]", "3s²", "3p⁶"]
		},
		"19": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/potassio",
			"mass": "39,0983",
			"symbol": "K",
			"name": "Potássio",
			"distr": [2, 8, 8, 1],
			"ec": ["[Ar]", "4s¹"]
		},
		"20": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/calcio",
			"mass": "40,078",
			"symbol": "Ca",
			"name": "Cálcio",
			"distr": [2, 8, 8, 2],
			"ec": ["[Ar]", "4s²"]
		},
		"21": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 3,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/escandio",
			"mass": "44,955912",
			"symbol": "Sc",
			"name": "Escândio",
			"distr": [2, 8, 9, 2],
			"ec": ["[Ar]", "3d¹", "4s²"]
		},
		"22": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 4,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/titanio",
			"mass": "47,867",
			"symbol": "Ti",
			"name": "Titânio",
			"distr": [2, 8, 10, 2],
			"ec": ["[Ar]", "3d²", "4s²"]
		},
		"23": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 5,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/vanadio",
			"mass": "50,9415",
			"symbol": "V",
			"name": "Vanádio",
			"distr": [2, 8, 11, 2],
			"ec": ["[Ar]", "3d³", "4s²"]
		},
		"24": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 6,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cromo",
			"mass": "51,9961",
			"symbol": "Cr",
			"name": "Cromo",
			"distr": [2, 8, 13, 1],
			"ec": ["[Ar]", "3d⁴", "4s²"]
		},
		"25": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 7,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/manganes",
			"mass": "54,938045",
			"symbol": "Mn",
			"name": "Manganês",
			"distr": [2, 8, 13, 2],
			"ec": ["[Ar]", "3d⁵", "4s²"]
		},
		"26": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 8,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ferro",
			"mass": "55,845",
			"symbol": "Fe",
			"name": "Ferro",
			"distr": [2, 8, 14, 2],
			"ec": ["[Ar]", "3d⁶", "4s²"]
		},
		"27": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 9,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cobalto",
			"mass": "58,933195",
			"symbol": "Co",
			"name": "Cobalto",
			"distr": [2, 8, 15, 2],
			"ec": ["[Ar]", "3d⁷", "4s²"]
		},
		"28": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 10,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/niquel",
			"mass": "58,6934",
			"symbol": "Ni",
			"name": "Níquel",
			"distr": [2, 8, 16, 2],
			"ec": ["[Ar]", "3d⁸", "4s²"]
		},
		"29": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 11,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cobre",
			"mass": "63,546",
			"symbol": "Cu",
			"name": "Cobre",
			"distr": [2, 8, 18, 1],
			"ec": ["[Ar]", "3d¹⁰", "4s¹"]
		},
		"30": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 12,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/zinco",
			"mass": "65,38",
			"symbol": "Zn",
			"name": "Zinco",
			"distr": [2, 8, 18, 2],
			"ec": ["[Ar]", "3d¹⁰", "4s²"]
		},
		"31": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 13,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/galio",
			"mass": "69,723",
			"symbol": "Ga",
			"name": "Gálio",
			"distr": [2, 8, 18, 3],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p¹"]
		},
		"32": {
			"class": "semi-metal",
			"state": "solido",
			"group": 14,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/germanio",
			"mass": "72,63",
			"symbol": "Ge",
			"name": "Germânio",
			"distr": [2, 8, 18, 4],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p²"]
		},
		"33": {
			"class": "semi-metal",
			"state": "solido",
			"group": 15,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/arsenio",
			"mass": "74,9216",
			"symbol": "As",
			"name": "Arsênio",
			"distr": [2, 8, 18, 5],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p³"]
		},
		"34": {
			"class": "nao-metal",
			"state": "solido",
			"group": 16,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/selenio",
			"mass": "78,96",
			"symbol": "Se",
			"name": "Selênio",
			"distr": [2, 8, 18, 6],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p⁴"]
		},
		"35": {
			"class": "halogenio",
			"state": "liquido",
			"group": 17,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/bromo",
			"mass": "79,904",
			"symbol": "Br",
			"name": "Bromo",
			"distr": [2, 8, 18, 7],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p⁵"]
		},
		"36": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 4,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/criptonio",
			"mass": "83,798",
			"symbol": "Kr",
			"name": "Criptônio",
			"distr": [2, 8, 18, 8],
			"ec": ["[Ar]", "3d¹⁰", "4s²", "4p⁶"]
		},
		"37": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/rubidio",
			"mass": "85,4678",
			"symbol": "Rb",
			"name": "Rubídio",
			"distr": [2, 8, 18, 8, 1],
			"ec": ["[Kr]", "5s¹"]
		},
		"38": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/estroncio",
			"mass": "87,62",
			"symbol": "Sr",
			"name": "Estrôncio",
			"distr": [2, 8, 18, 8, 2],
			"ec": ["[Kr]", "5s²"]
		},
		"39": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 3,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/itrio",
			"mass": "88,90585",
			"symbol": "Y",
			"name": "Ítrio",
			"distr": [2, 8, 18, 9, 2],
			"ec": ["[Kr]", "4d¹", "5s²"]
		},
		"40": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 4,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/zirconio",
			"mass": "91,224",
			"symbol": "Zr",
			"name": "Zircônio",
			"distr": [2, 8, 18, 10, 2],
			"ec": ["[Kr]", "4d²", "5s²"]
		},
		"41": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 5,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/niobio",
			"mass": "92,90638",
			"symbol": "Nb",
			"name": "Nióbio",
			"distr": [2, 8, 18, 12, 1],
			"ec": ["[Kr]", "4d³", "5s²"]
		},
		"42": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 6,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/molibdenio",
			"mass": "95,96",
			"symbol": "Mo",
			"name": "Molibdênio",
			"distr": [2, 8, 18, 13, 1],
			"ec": ["[Kr]", "4d⁴", "5s²"]
		},
		"43": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 7,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/tecnecio",
			"mass": "(98)",
			"symbol": "Tc",
			"name": "Tecnécio",
			"distr": [2, 8, 18, 13, 2],
			"ec": ["[Kr]", "4d⁵", "5s²"]
		},
		"44": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 8,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/rutenio",
			"mass": "101,07",
			"symbol": "Ru",
			"name": "Rutênio",
			"distr": [2, 8, 18, 15, 1],
			"ec": ["[Kr]", "4d⁶", "5s²"]
		},
		"45": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 9,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/rodio",
			"mass": "102,9055",
			"symbol": "Rh",
			"name": "Ródio",
			"distr": [2, 8, 18, 16, 1],
			"ec": ["[Kr]", "4d⁷", "5s²"]
		},
		"46": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 10,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/paladio",
			"mass": "106,42",
			"symbol": "Pd",
			"name": "Paládio",
			"distr": [2, 8, 18, 18],
			"ec": ["[Kr]", "4d⁸", "5s²"]
		},
		"47": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 11,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/prata",
			"mass": "107,8682",
			"symbol": "Ag",
			"name": "Prata",
			"distr": [2, 8, 18, 18, 1],
			"ec": ["[Kr]", "4d¹⁰", "5s¹"]
		},
		"48": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 12,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cadmio",
			"mass": "112,411",
			"symbol": "Cd",
			"name": "Cádmio",
			"distr": [2, 8, 18, 18, 2],
			"ec": ["[Kr]", "4d¹⁰", "5s²"]
		},
		"49": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 13,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/indio",
			"mass": "114,818",
			"symbol": "In",
			"name": "Índio",
			"distr": [2, 8, 18, 18, 3],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p¹"]
		},
		"50": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 14,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/estanho",
			"mass": "118,71",
			"symbol": "Sn",
			"name": "Estanho",
			"distr": [2, 8, 18, 18, 4],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p²"]
		},
		"51": {
			"class": "semi-metal",
			"state": "solido",
			"group": 15,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/antimonio",
			"mass": "121,76",
			"symbol": "Sb",
			"name": "Antimônio",
			"distr": [2, 8, 18, 18, 5],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p³"]
		},
		"52": {
			"class": "semi-metal",
			"state": "solido",
			"group": 16,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/telurio",
			"mass": "127,6",
			"symbol": "Te",
			"name": "Telúrio",
			"distr": [2, 8, 18, 18, 6],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p⁴"]
		},
		"53": {
			"class": "halogenio",
			"state": "solido",
			"group": 17,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/iodo",
			"mass": "126,90447",
			"symbol": "I",
			"name": "Iodo",
			"distr": [2, 8, 18, 18, 7],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p⁵"]
		},
		"54": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 5,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/xenonio",
			"mass": "131,293",
			"symbol": "Xe",
			"name": "Xenônio",
			"distr": [2, 8, 18, 18, 8],
			"ec": ["[Kr]", "4d¹⁰", "5s²", "5p⁶"]
		},
		"55": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cesio",
			"mass": "132,9054519",
			"symbol": "Cs",
			"name": "Césio",
			"distr": [2, 8, 18, 18, 8, 1],
			"ec": ["[Xe]", "6s¹"]
		},
		"56": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/bario",
			"mass": "137,327",
			"symbol": "Ba",
			"name": "Bário",
			"distr": [2, 8, 18, 18, 8, 2],
			"ec": ["[Xe]", "6s²"]
		},
		"57-71": {
			"class": "lantanideo",
			"state": "",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/lantanideos",
			"mass": "",
			"symbol": "La-Lu",
			"name": "Lantanídeos",
			"distr": [],
			"ec": []
		},
		"57": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/lantanio",
			"mass": "138,90547",
			"symbol": "La",
			"name": "Lantânio",
			"distr": [2, 8, 18, 18, 9, 2],
			"ec": ["[Xe]", "4f¹", "6s²"]
		},
		"58": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/cerio",
			"mass": "140,116",
			"symbol": "Ce",
			"name": "Cério",
			"distr": [2, 8, 18, 19, 9, 2],
			"ec": ["[Xe]", "4f²", "6s²"]
		},
		"59": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/praseodimio",
			"mass": "140,90765",
			"symbol": "Pr",
			"name": "Praseodímio",
			"distr": [2, 8, 18, 21, 8, 2],
			"ec": ["[Xe]", "4f³", "6s²"]
		},
		"60": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/neodimio",
			"mass": "144,242",
			"symbol": "Nd",
			"name": "Neodímio",
			"distr": [2, 8, 18, 22, 8, 2],
			"ec": ["[Xe]", "4f⁴", "6s²"]
		},
		"61": {
			"class": "lantanideo",
			"state": "desconhecido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/promecio",
			"mass": "(145)",
			"symbol": "Pm",
			"name": "Promécio",
			"distr": [2, 8, 18, 23, 8, 2],
			"ec": ["[Xe]", "4f⁵", "6s²"]
		},
		"62": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/samario",
			"mass": "150,36",
			"symbol": "Sm",
			"name": "Samário",
			"distr": [2, 8, 18, 24, 8, 2],
			"ec": ["[Xe]", "4f⁶", "6s²"]
		},
		"63": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/europio",
			"mass": "151,964",
			"symbol": "Eu",
			"name": "Európio",
			"distr": [2, 8, 18, 25, 8, 2],
			"ec": ["[Xe]", "4f⁷", "6s²"]
		},
		"64": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/gadolinio",
			"mass": "157,25",
			"symbol": "Gd",
			"name": "Gadolínio",
			"distr": [2, 8, 18, 25, 9, 2],
			"ec": ["[Xe]", "4f⁸", "6s²"]
		},
		"65": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/terbio",
			"mass": "158,92535",
			"symbol": "Tb",
			"name": "Térbio",
			"distr": [2, 8, 18, 27, 8, 2],
			"ec": ["[Xe]", "4f⁹", "6s²"]
		},
		"66": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/disprosio",
			"mass": "162,5",
			"symbol": "Dy",
			"name": "Disprósio",
			"distr": [2, 8, 18, 28, 8, 2],
			"ec": ["[Xe]", "4f¹⁰", "6s²"]
		},
		"67": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/holmio",
			"mass": "164,93032",
			"symbol": "Ho",
			"name": "Hólmio",
			"distr": [2, 8, 18, 29, 8, 2],
			"ec": ["[Xe]", "4f¹¹", "6s²"]
		},
		"68": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/erbio",
			"mass": "167,259",
			"symbol": "Er",
			"name": "Érbio",
			"distr": [2, 8, 18, 30, 8, 2],
			"ec": ["[Xe]", "4f¹²", "6s²"]
		},
		"69": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/tulio",
			"mass": "168,93421",
			"symbol": "Tm",
			"name": "Túlio",
			"distr": [2, 8, 18, 31, 8, 2],
			"ec": ["[Xe]", "4f¹³", "6s²"]
		},
		"70": {
			"class": "lantanideo",
			"state": "solido",
			"group": 3,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/iterbio",
			"mass": "173,054",
			"symbol": "Yb",
			"name": "Itérbio",
			"distr": [2, 8, 18, 32, 8, 2],
			"ec": ["[Xe]", "4f¹⁴", "6s²"]
		},
		"71": {
			"class": "lantanideo",
			"state": "solido",
			"period": 6,
			"group": 3,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/lutecio",
			"mass": "174,9668",
			"symbol": "Lu",
			"name": "Lutécio",
			"distr": [2, 8, 18, 32, 9, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d¹", "6s²"]
		},
		"72": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 4,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/hafnio",
			"mass": "178,49",
			"symbol": "Hf",
			"name": "Háfnio",
			"distr": [2, 8, 18, 32, 10, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d²", "6s²"]
		},
		"73": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 5,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/tantalo",
			"mass": "180,94788",
			"symbol": "Ta",
			"name": "Tântalo",
			"distr": [2, 8, 18, 32, 11, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d³", "6s²"]
		},
		"74": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 6,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/tungstenio",
			"mass": "183,84",
			"symbol": "W",
			"name": "Tungstênio",
			"distr": [2, 8, 18, 32, 12, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d⁴", "6s²"]
		},
		"75": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 7,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/renio",
			"mass": "186,207",
			"symbol": "Re",
			"name": "Rênio",
			"distr": [2, 8, 18, 32, 13, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d⁵", "6s²"]
		},
		"76": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 8,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/osmio",
			"mass": "190,23",
			"symbol": "Os",
			"name": "Ósmio",
			"distr": [2, 8, 18, 32, 14, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d⁶", "6s²"]
		},
		"77": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 9,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/iridio",
			"mass": "192,217",
			"symbol": "Ir",
			"name": "Irídio",
			"distr": [2, 8, 18, 32, 15, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d⁷", "6s²"]
		},
		"78": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 10,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/platina",
			"mass": "195,084",
			"symbol": "Pt",
			"name": "Platina",
			"distr": [2, 8, 18, 32, 17, 1],
			"ec": ["[Xe]", "4f¹⁴", "5d⁸", "6s²"]
		},
		"79": {
			"class": "metal-transicao",
			"state": "solido",
			"group": 11,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ouro",
			"mass": "196,966569",
			"symbol": "Au",
			"name": "Ouro",
			"distr": [2, 8, 18, 32, 18, 1],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s¹"]
		},
		"80": {
			"class": "metal-transicao",
			"state": "liquido",
			"group": 12,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/mercurio",
			"mass": "200,59",
			"symbol": "Hg",
			"name": "Mercúrio",
			"distr": [2, 8, 18, 32, 18, 2],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²"]
		},
		"81": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 13,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/talio",
			"mass": "204,3833",
			"symbol": "Tl",
			"name": "Tálio",
			"distr": [2, 8, 18, 32, 18, 3],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p¹"]
		},
		"82": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 14,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/chumbo",
			"mass": "207,2",
			"symbol": "Pb",
			"name": "Chumbo",
			"distr": [2, 8, 18, 32, 18, 4],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p²"]
		},
		"83": {
			"class": "metal-representativo",
			"state": "solido",
			"group": 15,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/bismuto",
			"mass": "208,9804",
			"symbol": "Bi",
			"name": "Bismuto",
			"distr": [2, 8, 18, 32, 18, 5],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p³"]
		},
		"84": {
			"class": "semi-metal",
			"state": "solido",
			"group": 16,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/polonio",
			"mass": "(209)",
			"symbol": "Po",
			"name": "Polônio",
			"distr": [2, 8, 18, 32, 18, 6],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p⁴"]
		},
		"85": {
			"class": "halogenio",
			"state": "solido",
			"group": 17,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/astato",
			"mass": "(210)",
			"symbol": "At",
			"name": "Ástato",
			"distr": [2, 8, 18, 32, 18, 7],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p⁵"]
		},
		"86": {
			"class": "gas-nobre",
			"state": "gasoso",
			"group": 18,
			"period": 6,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/radonio",
			"mass": "(222)",
			"symbol": "Rn",
			"name": "Radônio",
			"distr": [2, 8, 18, 32, 18, 8],
			"ec": ["[Xe]", "4f¹⁴", "5d¹⁰", "6s²", "6p⁶"]
		},
		"87": {
			"class": "alcalino",
			"state": "solido",
			"group": 1,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/francio",
			"mass": "(223)",
			"symbol": "Fr",
			"name": "Frâncio",
			"distr": [2, 8, 18, 32, 18, 8, 1],
			"ec": ["[Rn]", "7s¹"]
		},
		"88": {
			"class": "alcalino-terroso",
			"state": "solido",
			"group": 2,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/radio",
			"mass": "(226)",
			"symbol": "Ra",
			"name": "Rádio",
			"distr": [2, 8, 18, 32, 18, 8, 2],
			"ec": ["[Rn]", "7s²"]
		},
		"89-103": {
			"class": "actinideo",
			"state": "",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/actinideos",
			"mass": "",
			"symbol": "AC-Lr",
			"name": "Actinídeo",
			"distr": [],
			"ec": []
		},
		"89": {
			"class": "actinideo",
			"state": "solido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/actinio",
			"mass": "(227)",
			"symbol": "Ac",
			"name": "Actínio",
			"distr": [2, 8, 18, 32, 18, 9, 2],
			"ec": ["[Rn]", "5f¹", "7s²"]
		},
		"90": {
			"class": "actinideo",
			"state": "solido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/torio",
			"mass": "232,03806",
			"symbol": "Th",
			"name": "Tório",
			"distr": [2, 8, 18, 32, 18, 10, 2],
			"ec": ["[Rn]", "5f²", "7s²"]
		},
		"91": {
			"class": "actinideo",
			"state": "solido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/protactinio",
			"mass": "231,03588",
			"symbol": "Pa",
			"name": "Protactínio",
			"distr": [2, 8, 18, 32, 20, 9, 2],
			"ec": ["[Rn]", "5f³", "7s²"]
		},
		"92": {
			"class": "actinideo",
			"state": "solido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/uranio",
			"mass": "238,02891",
			"symbol": "U",
			"name": "Urânio",
			"distr": [2, 8, 18, 32, 21, 9, 2],
			"ec": ["[Rn]", "5f⁴", "7s²"]
		},
		"93": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/neptunio",
			"mass": "(237)",
			"symbol": "Np",
			"name": "Netúnio",
			"distr": [2, 8, 18, 32, 22, 9, 2],
			"ec": ["[Rn]", "5f⁵", "7s²"]
		},
		"94": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/plutonio",
			"mass": "(244)",
			"symbol": "Pu",
			"name": "Plutônio",
			"distr": [2, 8, 18, 32, 24, 8, 2],
			"ec": ["[Rn]", "5f⁶", "7s²"]
		},
		"95": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/americio",
			"mass": "(243)",
			"symbol": "Am",
			"name": "Amerício",
			"distr": [2, 8, 18, 32, 25, 8, 2],
			"ec": ["[Rn]", "5f⁷", "7s²"]
		},
		"96": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/curio",
			"mass": "(247)",
			"symbol": "Cm",
			"name": "Cúrio",
			"distr": [2, 8, 18, 32, 25, 9, 2],
			"ec": ["[Rn]", "5f⁸", "7s²"]
		},
		"97": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/berquelio",
			"mass": "(247)",
			"symbol": "Bk",
			"name": "Berquélio",
			"distr": [2, 8, 18, 32, 27, 8, 2],
			"ec": ["[Rn]", "5f⁹", "7s²"]
		},
		"98": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/californio",
			"mass": "(251)",
			"symbol": "Cf",
			"name": "Califórnio",
			"distr": [2, 8, 18, 32, 28, 8, 2],
			"ec": ["[Rn]", "5f¹⁰", "7s²"]
		},
		"99": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/einstenio",
			"mass": "(252)",
			"symbol": "Es",
			"name": "Einsténio",
			"distr": [2, 8, 18, 32, 29, 8, 2],
			"ec": ["[Rn]", "5f¹¹", "7s²"]
		},
		"100": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/fermio",
			"mass": "(257)",
			"symbol": "Fm",
			"name": "Férmio",
			"distr": [2, 8, 18, 32, 30, 8, 2],
			"ec": ["[Rn]", "5f¹²", "7s²"]
		},
		"101": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/mendelevio",
			"mass": "(258)",
			"symbol": "Md",
			"name": "Mendelévio",
			"distr": [2, 8, 18, 32, 31, 8, 2],
			"ec": ["[Rn]", "5f¹³", "7s²"]
		},
		"102": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/nobelio",
			"mass": "(259)",
			"symbol": "No",
			"name": "Nobélio",
			"distr": [2, 8, 18, 32, 32, 8, 2],
			"ec": ["[Rn]", "5f¹⁴", "7s²"]
		},
		"103": {
			"class": "actinideo",
			"state": "desconhecido",
			"group": 3,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/laurencio",
			"mass": "(262)",
			"symbol": "Lr",
			"name": "Laurêncio",
			"distr": [2, 8, 18, 32, 32, 8, 3],
			"ec": []
		},
		"104": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 4,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/rutherfordio",
			"mass": "(267)",
			"symbol": "Rf",
			"name": "Rutherfórdio",
			"distr": [2, 8, 18, 32, 32, 10, 2],
			"ec": []
		},
		"105": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 5,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/dubnio",
			"mass": "(268)",
			"symbol": "Db",
			"name": "Dúbnio",
			"distr": [2, 8, 18, 32, 32, 11, 2],
			"ec": []
		},
		"106": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 6,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/seaborgio",
			"mass": "(271)",
			"symbol": "Sg",
			"name": "Seabórgio",
			"distr": [2, 8, 18, 32, 32, 12, 2],
			"ec": []
		},
		"107": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 7,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/bohrio",
			"mass": "(272)",
			"symbol": "Bh",
			"name": "Bóhrio",
			"distr": [2, 8, 18, 32, 32, 13, 2],
			"ec": []
		},
		"108": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 8,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/hassio",
			"mass": "(270)",
			"symbol": "Hs",
			"name": "Hássio",
			"distr": [2, 8, 18, 32, 32, 14, 2],
			"ec": []
		},
		"109": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 9,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/meitnerio",
			"mass": "(276)",
			"symbol": "Mt",
			"name": "Meitnério",
			"distr": [2, 8, 18, 32, 32, 15, 2],
			"ec": []
		},
		"110": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 10,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/darmastadio",
			"mass": "(281)",
			"symbol": "Ds",
			"name": "Darmstádio",
			"distr": [2, 8, 18, 32, 32, 17, 1],
			"ec": []
		},
		"111": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 11,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/roentgenio",
			"mass": "(280)",
			"symbol": "Rg",
			"name": "Roentgênio",
			"distr": [2, 8, 18, 32, 32, 18, 1],
			"ec": []
		},
		"112": {
			"class": "metal-transicao",
			"state": "desconhecido",
			"group": 12,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/copernicio",
			"mass": "(285)",
			"symbol": "Cn",
			"name": "Copernício",
			"distr": [2, 8, 18, 32, 32, 18, 2],
			"ec": []
		},
		"113": {
			"class": "metal-representativo",
			"state": "desconhecido",
			"group": 13,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ununtrio",
			"mass": "(284)",
			"symbol": "Nh",
			"name": "Nihônio",
			"distr": [2, 8, 18, 32, 32, 18, 3],
			"ec": []
		},
		"114": {
			"class": "metal-representativo",
			"state": "desconhecido",
			"group": 14,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/flerovio",
			"mass": "(289)",
			"symbol": "Fl",
			"name": "Fleróvio",
			"distr": [2, 8, 18, 32, 32, 18, 4],
			"ec": []
		},
		"115": {
			"class": "metal-representativo",
			"state": "desconhecido",
			"group": 15,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ununpentio",
			"mass": "(288)",
			"symbol": "Mc",
			"name": "Moscóvio",
			"distr": [2, 8, 18, 32, 32, 18, 5],
			"ec": []
		},
		"116": {
			"class": "metal-representativo",
			"state": "desconhecido",
			"group": 16,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/livermorio",
			"mass": "(293)",
			"symbol": "Lv",
			"name": "Livermório",
			"distr": [2, 8, 18, 32, 32, 18, 6],
			"ec": []
		},
		"117": {
			"class": "halogenio",
			"state": "desconhecido",
			"group": 17,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ununseptio",
			"mass": "(294)",
			"symbol": "Ts",
			"name": "Tenessino",
			"distr": [2, 8, 18, 32, 32, 18, 7],
			"ec": []
		},
		"118": {
			"class": "gas-nobre",
			"state": "desconhecido",
			"group": 18,
			"period": 7,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/ununoctio",
			"mass": "(294)",
			"symbol": "Og",
			"name": "Oganessônio",
			"distr": [2, 8, 18, 32, 32, 18, 8],
			"ec": []
		}
	};

	var $group = $('.group');
	var $family = $('.family');
	var $period = $('.period');
	var $element = $('.element');
	var $klmnopq = $('.klmnopq-descr');

	function grpTitle(idx) {
		return groups[idx].title == undefined ? cl[groups[idx].cl].title : groups[idx].title;
	}
	function mountCell(o) {
		var html = '';
		html += '<div>';
		html += '<div class="an">' + o.an + '</div>';
		html += '<div class="symbol">' + o.symbol + '</div>';
		html += '<div class="name">' + o.name + '</div>';
		html += '<div class="mass">' + o.mass + '</div>';
		html += '<div class="ec">' + o.ec.join(' ') + '</div>';
		/*
		html += '<abbr>' + o.symbol + '</abbr>';
		html += '<em>' + o.name + '</em>';
		html += '<i>' + o.mass + '</i>';
		html += '</big>';
		html += '<small>' + (o.distr.join('<br>')) + '</small>';
		*/
		html += '</div>';
		html += '<div class="klmnopq">' + o.distr.join('<br>') + '</div>';
		return html;
	}
	function elementTitle(o) {
		var out = [];
		if (o.an) out.push("Atomic Nº: " + o.an);
		if (o.symbol) out.push("Symbol: " + o.symbol);
		if (o.name) out.push("Name: " + o.name);
		if (o.mass) out.push("Mass: " + o.mass);
		if (o.distr.length) out.push("Distr: " + o.distr.join(','));
		if (o.ec.length) out.push("EC: " + o.ec.join(' '));
		return out.join("\n");
	}
	function buildInfo() {
		var out = '';
		out += '<div class="details">'
		out += '<table>';
		out += '<tr><th>Símbolo:</th><td id="symbol"></td><th>Nome:</th><td id="name"></td></tr>';
		out += '<tr><th>Nº Atômico:</th><td id="an"></td><th>Estado:</th><td id="state"></td></tr>';
		out += '<tr><th>Massa Atômica:</th><td id="mass"></td><th>Classe</th><td id="cl"></td></tr>'
		out += '<tr><th>Grupo:</th><td id="group"></td><th>Grp Name:</th><td id="grpName"></td></tr>';
		out += '<tr><th>Família:</th><td id="family"></td><th>Distr KLM.:</th><td id="klm"></td></tr>';
		out += '<tr><th>Período:</th><td id="period"></td><th>Distr Geo:</th><td id="ec"></td></tr>';
		out += '</table>';
		out += '</div>';

		out += '<div class="subtitle">';
		var a = [];
		for (var i in cl) a.push(
			'<td>' +
			'<a class="tick ' + i + '" href="' + cl[i].link + '" target="_blank"></a>' +
			'<a class="descr"      href="' + cl[i].link + '" target="_blank">' + cl[i].title + '</a>' +
			'</td>'
		);
		for (var i in prop) a.push(
			'<td>' +
			'<a class="tick prop ' + i + '" href="' + prop[i].link + '">' + prop[i].subtitle + '</a>' +
			'<a class="descr"      href="' + prop[i].link + '">' + prop[i].title + '</a>' +
			'</td>'
		)
		var i, j, t, chunk = 3;
		out += '<table>';
		for (i = 0, j = a.length; i < j; i += chunk) {
			t = a.slice(i, i + chunk);
			out += '<tr>' + t.join('') + '</tr>';
		}
		out += '</table>';
		out += '</div>';

		$('.info').html(out);
	}
	function example() {
		$e = $('.example');
		//$e.addClass('element');
		$e.html(mountCell({
			"an": "Nº Atômico",
			"symbol": "Símbolo",
			"name": "Nome",
			"mass": "Massa Atômica",
			"distr": klmnopq,
			"ec": ["Distrib"],
		}));
	}
	buildInfo();
	example();
	var $details = $('.details');
	$details.hide();
	var $detaildItens = {
		"an": $('#an'),
		"mass": $('#mass'),
		"symbol": $('#symbol'),
		"name": $('#name'),
		"group": $('#group'),
		"period": $('#period'),
		"family": $('#family'),
		"cl": $('#cl'),
		"grpName": $('#grpName'),
		"stateTitle": $('#state'),
		"distr": $('#klm'),
		"ec": $('#ec')
	};
	/*
		"1": {
			"class": "nao-metal",
			"state": "gasoso",
			"group": 1,
			"period": 1,
			"link": "https://www.tabelaperiodicacompleta.com/elemento-quimico/hidrogenio",
			"mass": "1,00794",
			"symbol": "H",
			"name": "Hidrogênio",
			"distr": [1],
			"ec": ["1s¹"]
		},
		*/

	$group.each(function (idx) {
		var $this = $(this);
		$this.html(groups[idx].group);
		$this.attr('idx', idx);
		$this.attr('title', grpTitle(idx));
	});
	$family.each(function () {
		var $this = $(this);
		var idx = $this.attr('group') - 1;
		$this.html('<div>' + groups[idx].family + '</div>');
		$this.attr('idx', idx);
		$this.attr('title', grpTitle(idx));
	});
	$period.each(function (idx) {
		var $this = $(this);
		$this.html(idx + 1);
	});
	$klmnopq.each(function (idx) {
		if (idx > 6) idx -= 2;
		var out = [];
		for (var i = 0; i <= idx; i++) out.push(klmnopq[i]);
		$(this).html(out.join('<br>'));
	});
	$element.each(function (idx) {
		var $this = $(this);
		var an = $this.attr('an');
		var o = element[an];
		o.an = an;
		o.idxGrp = o.group - 1;
		o.family = groups[o.idxGrp].family;
		o.cl = cl[o.class].title;;
		o.grpName = grpTitle(o.idxGrp);
		o.stateTitle = o.state ? prop[o.state].title : '';
		o.objGroup = $($group[o.idxGrp]);
		o.objFamily = $('.family[idx="' + o.idxGrp + '"] div');
		o.objPeriod = $($period[o.period - 1]);

		$this.addClass(o.class);
		$this.addClass(o.state);
		if (an == '57-71' || an == '89-103') $this.addClass('compact');
		$this.attr('title', elementTitle(o));
		$this.html(mountCell(o));
	});


	$group.click(function () {
		var idx = $(this).prop('idx');
		window.open(groups[idx].link, 'blank');
	});
	$family.click(function () {
		var idx = $(this).prop('idx');
		window.open(groups[idx].link, 'blank');
	});
	$period.click(function () {
		window.open("https://www.tabelaperiodicacompleta.com/periodos-tabela-periodica", 'blank');
	});
	$element.click(function () {
		var $this = $(this);
		var an = $this.attr('an');
		window.open(element[an].link, 'blank');
	});
	$element.mouseover(function () {
		var $this = $(this);
		var an = $this.attr('an');
		var o = element[an];
		$details.addClass(o.class);
		for (var i in $detaildItens) {
			//console.log([i , typeof o[i]]);

			$detaildItens[i].html(typeof o[i] == 'object' ? o[i].join(', ') : o[i]);
		}
		$details.show();
		o.objGroup.addClass('active');
		o.objFamily.addClass('active');
		o.objPeriod.addClass('active');
	});
	$element.mouseout(function () {
		var $this = $(this);
		var an = $this.attr('an');
		var o = element[an];
		$details.removeClass(o.class);
		$details.hide();
		o.objGroup.removeClass('active');
		o.objFamily.removeClass('active');
		o.objPeriod.removeClass('active');
	});
	//console.log(idx);
});

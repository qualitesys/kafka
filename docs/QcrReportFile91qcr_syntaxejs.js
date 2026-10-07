function doEcrire(aeDebug) {
	var lsStr = "<table border='1'>";
	if (0<aeDebug) console.log("doEcrire01 _syntax "+_syntax);
	if (0<aeDebug) console.log("doEcrire02 start "+_syntax.get("start"));
	if (0<aeDebug) console.log("doEcrire03 expression "+_syntax.get("expression"));
	_syntax.forEach((value, key) => {
		if (0<aeDebug) console.log('doEcrire04 Key is: ' + key + ' Value is: ' + value);
		lsStr += "<tr><td>"+key+"</td><td></td><td></td></tr>";
		value.forEach((valeur, cle) => {
			if (0<aeDebug) console.log('doEcrire05 detail cle is: ' + cle + ' Valeur nature is: ' + valeur.nature+ ' Valeur is: ' + valeur.valeur);
			lsStr += "<tr><td></td><td>"+valeur.nature+"</td><td>"+JSON.stringify(valeur.valeur)+"</td></tr>";
		});
	});
	var leRoot = document.getElementById("racine");
	lsStr+="</table>";
	leRoot.innerHTML = lsStr;
	var leRootTexteAnalyse = document.getElementById("texte_analyse");
	leRootTexteAnalyse.innerHTML = "texte valide :";
}
function doTraiterChange(event, aeDebug) {
	if (0<aeDebug) console.log(event.target.value);
	var leDebut = new Date();
	var lsLaLigne = document.getElementById("zone_textearea").value + " TOKENDEFIN";
	if (0<aeDebug) console.log("doTraiterChange01 la ligne "+lsLaLigne);
	var ltTab = lsLaLigne.split(" ");
	if (0<aeDebug) console.log("doTraiterChange02 le tableau "+ltTab);
	if (0<aeDebug) console.log("doTraiterChange03 _syntax.get(Start) "+_syntax.get("Start"));
	let leReturn = doTraiterDF(aeDebug, 0, ltTab, _syntax.get("Start"), 0); 
	if ("TOKENDEFIN"===ltTab[leReturn.indice]) {
		if (0<aeDebug) console.log("doTraiterChange98 chaine complete analysee");
	}
	//var liInd = leReturn.indice;
	var liInd = leReturn.suggestion.indice;
	// On decla vers le dernier indice valide
	if (0<liInd) liInd--;
	if (0<aeDebug) console.log("doTraiterChange99 fin status "+leReturn.status+" indice KO "+leReturn.indice+" soit OK '"+ltTab[liInd]+"' soit KO '"+ltTab[leReturn.indice]+"' taille "+ltTab.length);
	var lsStr = "";
	for (var liIndice=0; liIndice<=liInd; liIndice++) {
		lsStr += ltTab[liIndice]+"&nbsp;";
	}
	if ("OK"!=leReturn.status) lsStr += "&nbsp;("+JSON.stringify(leReturn.suggestion.texte)+")";
	var lsStrErreur = "";
	for (var liIndice=liInd+1; liIndice<ltTab.length-1; liIndice++) {
		lsStrErreur += ltTab[liIndice]+"&nbsp;";
	}
	var leRootTexteAnalyseValide         = document.getElementById("texte_analyse");
	leRootTexteAnalyseValide.innerHTML   = "<div style=\"color: green;\">"+lsStr+"</div>";
	var leRootTexteAnalyseInvalide       = document.getElementById("texte_analyse_invalide");
	leRootTexteAnalyseInvalide.innerHTML = "<div style=\"color: red;\">"+lsStrErreur+"</div>"
	var leFin = new Date();
	var leRootTempsCalcul               = document.getElementById("tempscalcul");
	leRootTempsCalcul.innerHTML         = "<div>"+(leFin - leDebut)+" ms</div>";
	;
}
function doTraiterDF(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceTexte) {
	// On balaie en comparant avec _syntax
	let lsStatus      = "OK";
	let lsSuggestion  = "";
	var liIndiceTexte = aiIndiceTexte;
	if (0<aeDebug) console.log("doTraiterDF01 aiNiv "+aiNiv+" liIndiceTexte "+liIndiceTexte);
	for (var liIndiceSyntaxe=0; 
		 liIndiceSyntaxe<atSyntaxe.length && liIndiceTexte<atTab.length && "OK" == lsStatus; 
		 liIndiceSyntaxe++) {
		if (0<aeDebug) console.log("doTraiterDF02 aiNiv "+aiNiv+" indice liIndiceSyntaxe "+liIndiceSyntaxe+" nature "+atSyntaxe[liIndiceSyntaxe].nature+" valeur "+atSyntaxe[liIndiceSyntaxe].valeur);
		if (
			"TOKENDEFIN"!=atTab[liIndiceTexte]
			&&
			""!=atTab[liIndiceTexte]
			
           ) {
			let liNext = -1;
			switch (atSyntaxe[liIndiceSyntaxe].nature) {
				case "MC" : {
					let leReturn = doTraiterMC(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = leReturn.status;
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "EL" : {
					let leReturn = doTraiterEL(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = leReturn.status;
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "CR" : {
					let leReturn = doTraiterCR(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = "OK";
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "PA" : {
					let leReturn = doTraiterPA(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = leReturn.status;
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "CM" : {
					let leReturn = doTraiterCM(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = "OK";
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "PM" : {
					let leReturn = doTraiterPM(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = leReturn.status;
					lsSuggestion = leReturn.suggestion;
					break;
				}
				case "TL" : {
					let leReturn = doTraiterTL(aeDebug, 1+aiNiv, atTab, atSyntaxe, liIndiceSyntaxe, liIndiceTexte);
					liNext       = leReturn.indice;
					lsStatus     = leReturn.status;
					lsSuggestion = leReturn.suggestion;
					break;
				}
				default : {
					lsStatus = "????";
					break;
				}
			}
			if ("KO" === lsStatus) {
				liIndiceTexte = liNext;
				break;
			} else {
				liIndiceTexte = liNext;
			}
		} else if ("TOKENDEFIN"==atTab[liIndiceTexte]) {
			if (0<aeDebug) console.log("doTraiterDF03 aiNiv "+aiNiv+" token TOKENDEFIN");
			lsStatus = "KO";
			lsSuggestion  = {indice : liIndiceTexte, texte : atSyntaxe[liIndiceSyntaxe].valeur};
		} else {
			if (0<aeDebug) console.log("doTraiterDF04 aiNiv "+aiNiv+" autre cas");
			lsStatus = "KO";
			lsSuggestion  = {indice : liIndiceTexte, texte : atSyntaxe[liIndiceSyntaxe].valeur};
		}
    }
	if (0<aeDebug) console.log("doTraiterDF99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" termine liIndiceTexte "+liIndiceTexte+" atTab[liIndiceTexte] nexttoken '"+atTab[liIndiceTexte]+"' lsSuggestion '"+JSON.stringify(lsSuggestion)+"'");
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}
function doTraiterCasVI(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "??";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterCasVI01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	let lsVI              = atSyntaxe[aiIndiceSyntaxe].valeur;
	if (0<aeDebug) console.log("doTraiterCasVI02 aiNiv "+aiNiv+" lsVI "+JSON.stringify(lsVI));
	let liIndicePrecedent = liIndiceTexte;
	// On passe revue chaque bloc casvi
	for (var liInd=0; liInd<lsVI.length; liInd++) {
		if (0<aeDebug) console.log("doTraiterCasVI03 aiNiv "+aiNiv+" liInd "+liInd+" lsVI[liInd].casvi "+JSON.stringify(lsVI[liInd].casvi));
		let leReturn  = doTraiterDF(aeDebug, 1+aiNiv, atTab, lsVI[liInd].casvi, liIndiceTexte);
		lsStatus      = leReturn.status;
		liIndiceTexte = leReturn.indice;
		lsSuggestion  = leReturn.suggestion;
		// Si status KO, alors on continue
		if ("KO"===lsStatus) {
			// On restaure le pointeur a la valeur d origine
			liIndiceTexte = liIndicePrecedent;
		} else {
			// On a trouve, fin
			break;
		}
	}
	if (0<aeDebug) console.log("doTraiterCasVI99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" termine liIndiceTexte "+liIndiceTexte+" atTab[liIndiceTexte] nexttoken '"+atTab[liIndiceTexte]+"'"+" suggestion '" +JSON.stringify(lsSuggestion)+"'");
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}

function doTraiterCR(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "??";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterCR01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	// En cas d echec, pour restaure du pointeur
	let liIndicePrecedent = liIndiceTexte;
	let leReturn          = doTraiterCasVI(aeDebug, 1+aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, liIndiceTexte);
	lsStatus              = leReturn.status;
	lsSuggestion          = leReturn.suggestion;
	// CR optionnel, si OK on garde l'indice, si KO on restaure l'indice
	// dans tous les cas le status de retour est OK
	if ("OK" === lsStatus) {
		if (0<aeDebug) console.log("doTraiterCR02 aiNiv "+aiNiv+" lsStatus "+lsStatus+" cas OK");
		liIndiceTexte = leReturn.indice;
		lsStatus      = "OK";
	} else {
		if (0<aeDebug) console.log("doTraiterCR03 aiNiv "+aiNiv+" lsStatus "+lsStatus+" cas KO");
		liIndiceTexte = liIndicePrecedent;
		lsStatus      = "KO";
	}
	if (0<aeDebug) console.log("doTraiterCR99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}
function doTraiterCM(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "??";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterCM01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	// En cas d echec, pour restaure du pointeur
	let liIndicePrecedent = liIndiceTexte;
	let lbPremierPassageOk = false;
	// On boucle tant que le bloc CR est OK
	do {
		let liIndicePrecedent = liIndiceTexte;
		let leReturn          = doTraiterCR(aeDebug, 1+aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, liIndiceTexte);
		lsStatus      = leReturn.status;
		lsSuggestion          = leReturn.suggestion;
		// CR optionnel, si OK on garde l'indice, si KO on restaure l'indice
		// dans tous les cas le status de retour est OK
		if ("OK" === lsStatus) {
			if (0<aeDebug) console.log("doTraiterCM02 aiNiv "+aiNiv+" lsStatus "+lsStatus+" cas OK");
			liIndiceTexte = leReturn.indice;
			lbPremierPassageOk = true;
			lsStatus      = "OK";
		} else {
			if (0<aeDebug) console.log("doTraiterCM03 aiNiv "+aiNiv+" lsStatus "+lsStatus+" cas KO");
			liIndiceTexte = liIndicePrecedent;
			lsStatus      = "KO";
		}
	} while ("OK" === lsStatus);
	if (true==lbPremierPassageOk) {
		lsStatus      = "OK";
	}
	if (0<aeDebug) console.log("doTraiterCM99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}

function doTraiterPA(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "??";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterPA01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	// En cas d echec, pour restaure du pointeur
	let liIndicePrecedent = liIndiceTexte;
	let leReturn  = doTraiterCasVI(aeDebug, 1+aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, liIndiceTexte);
	lsStatus      = leReturn.status;
	lsSuggestion  = leReturn.suggestion;

	// PA si OK on garde l'indice, si KO on restaure l'indice
	// dans tous les cas le status de retour est OK
	if ("OK" === lsStatus) {
		liIndiceTexte = leReturn.indice;
		lsStatus      = "OK";
	} else {
		//liIndiceTexte = liIndicePrecedent;
		lsStatus      = "KO";
	}
	if (0<aeDebug) console.log("doTraiterPA99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}
function doTraiterPM(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "??";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterPM01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	//  { un deux , unbis deuxbis } ...
	//  un deux un deux       --> OK
	//  un deux unbis deuxbis --> OK pour un deux unbis deuxbis
	//  un deux sss           --> OK pour un deux

	// En cas d echec, pour restaure du pointeur
	let liIndicePrecedent = liIndiceTexte;
	let lbPremierPassageOk = false;
	// On boucle tant que le bloc CR est OK
	do {
		let liIndicePrecedent = liIndiceTexte;
		let leReturn  = doTraiterPA(aeDebug, 1+aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, liIndiceTexte);
		lsStatus      = leReturn.status;
		lsSuggestion  = leReturn.suggestion;
		// PM si OK on garde l'indice, si KO on restaure l'indice
		// dans tous les cas le status de retour est OK
		if ("OK" === lsStatus) {
			liIndiceTexte      = leReturn.indice;
			lsStatus           = "OK";
			lbPremierPassageOk = true;
		} else {
			liIndiceTexte = liIndicePrecedent;
			lsStatus      = "KO";
		}
	} while ("OK" === lsStatus);
	if (true==lbPremierPassageOk) {
		lsStatus      = "OK";
	} else {
		lsStatus      = "KO";
	}
	// on garde le dernier status calcule
	if (0<aeDebug) console.log("doTraiterPM99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}

function doTraiterMC(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus      = "OK";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterMC01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	//let liCalc = parseInt(aiIndiceSyntaxe)+parseInt(aiIndiceTexte);
	if (0<aeDebug) console.log("doTraiterMC02 aiNiv "+aiNiv+" atSyntaxe[aiIndiceSyntaxe].valeur '"+atSyntaxe[aiIndiceSyntaxe].valeur + "' atTab[aiIndiceTexte] '"+atTab[aiIndiceTexte]+"'");
	if (atSyntaxe[aiIndiceSyntaxe].valeur === atTab[aiIndiceTexte]) {
		if (0<aeDebug) console.log("doTraiterMC03 aiNiv "+aiNiv+" Ok ici pour "+aiIndiceSyntaxe+" "+atTab[aiIndiceTexte]);
		liIndiceTexte++;
	} else {
		if (0<aeDebug) console.log("doTraiterMC04 aiNiv "+aiNiv+" Ko ici pour "+aiIndiceSyntaxe+" "+atTab[aiIndiceTexte]);
		//liIndiceTexte = -1;
		lsStatus      = "KO";
	}
	if (0<aeDebug) console.log("doTraiterMC99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte,    "suggestion" : 	{indice : liIndiceTexte, texte : atSyntaxe[aiIndiceSyntaxe].valeur}};
}
function doTraiterEL(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus = "OK";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterEL01 aiNiv "+aiNiv+" pour aiIndiceSyntaxe "+aiIndiceSyntaxe);
	if (0<aeDebug) console.log("doTraiterEL02 aiNiv "+aiNiv+" pour liIndiceTexte   "+liIndiceTexte);
	var lsInstruction = atSyntaxe[aiIndiceSyntaxe].valeur;
	var lsDF          = _syntax.get(lsInstruction);
	if (null==lsDF) {
		lsStatus      = "KO";
	} else {
		if (0<aeDebug) console.log("doTraiterEL03 aiNiv "+aiNiv+" lsDF "+JSON.stringify(lsDF));
		let leReturn  = doTraiterDF(aeDebug, 1+aiNiv, atTab,lsDF, liIndiceTexte);
		liIndiceTexte = leReturn.indice;
		lsStatus      = leReturn.status;
		lsSuggestion  = leReturn.suggestion;
	}
	if (0<aeDebug) console.log("doTraiterEL99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" termine liIndiceTexte "+liIndiceTexte+" suggestion '" +JSON.stringify(lsSuggestion)+"'");
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : lsSuggestion};
}
function doTraiterTL(aeDebug, aiNiv, atTab, atSyntaxe, aiIndiceSyntaxe, aiIndiceTexte) {
	let liIndiceTexte = aiIndiceTexte;
	let lsStatus = "OK";
	let lsSuggestion  = "";
	if (0<aeDebug) console.log("doTraiterTL01 aiNiv "+aiNiv+" aiIndiceSyntaxe "+aiIndiceSyntaxe+" liIndiceTexte "+liIndiceTexte);
	//let liCalc = parseInt(aiIndiceSyntaxe)+parseInt(aiIndiceTexte);
	if (0<aeDebug) console.log("doTraiterTL02 aiNiv "+aiNiv+" atSyntaxe[aiIndiceSyntaxe].valeur '"+atSyntaxe[aiIndiceSyntaxe].valeur + "' atTab[aiIndiceTexte] '"+atTab[aiIndiceTexte]+"'");
	let liCode = atTab[aiIndiceTexte].charCodeAt(0);
	if (0<aeDebug) console.log("doTraiterTL03 aiNiv "+aiNiv+" liCode "+liCode);
	if (
			//   (64<liCode && liCode<58) 
			//|| 
				(64<liCode && liCode<91) 
			|| 
				(96<liCode && liCode<123)
		) {
		if (0<aeDebug) console.log("doTraiterTL04 aiNiv "+aiNiv+" Ok ici pour "+aiIndiceSyntaxe+" "+atTab[aiIndiceTexte]);
		liIndiceTexte++;
	} else {
		if (0<aeDebug) console.log("doTraiterTL05 aiNiv "+aiNiv+" KO ici pour "+aiIndiceSyntaxe+" "+atTab[aiIndiceTexte]);
		lsStatus = "KO";
	}
	if (0<aeDebug) console.log("doTraiterTL99 aiNiv "+aiNiv+" lsStatus "+lsStatus+" liIndiceTexte "+liIndiceTexte);
	return {"status" : lsStatus , "indice" : liIndiceTexte, "suggestion" : 	{indice : liIndiceTexte, texte : atSyntaxe[aiIndiceSyntaxe].valeur}};
}

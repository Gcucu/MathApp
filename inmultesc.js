"use strict";
const V1 = ["zero", "unu", "doi", "trei", "patru", "cinci", "şase", "şapte", "opt", "nouă", "zece", "unsprezece", "doisprezece", "treisprezece", "paisprezece", "cincisprezece", "şaisprezece", "şaptesprezece", "optsprezece", "nouăsprezece", "douăzeci", "douăzeci şi unu", "douăzeci şi doi", "douăzeci şi trei", "douăzeci şi patru", "douăzeci şi cinci", "douăzeci şi şase", "douăzeci şi şapte", "douăzeci şi opt", "douăzeci şi nouă", "treizeci", "treizeci şi unu", "treizeci şi doi", "treizeci şi trei", "treizeci şi patru", "treizeci şi cinci", "treizeci şi şase", "treizeci şi şapte", "treizeci şi opt", "treizeci şi nouă", "patruzeci", "patruzeci şi unu", "patruzeci şi doi", "patruzeci şi trei", "patruzeci şi patru", "patruzeci şi cinci", "patruzeci şi şase", "patruzeci şi şapte", "patruzeci şi opt", "patruzeci şi nouă", "cincizeci", "cincizeci şi unu", "cincizeci şi doi", "cincizeci şi trei", "cincizeci şi patru", "cincizeci şi cinci", "cincizeci şi şase", "cincizeci şi şapte", "cincizeci şi opt", "cincizeci şi nouă", "şaizeci", "şaizeci şi unu", "şaizeci şi doi", "şaizeci şi trei", "şaizeci şi patru", "şaizeci şi cinci", "şaizeci şi şase", "şaizeci şi şapte", "şaizeci şi opt", "şaizeci şi nouă", "şaptezeci", "şaptezeci şi unu", "şaptezeci şi doi", "şaptezeci şi trei", "şaptezeci şi patru", "şaptezeci şi cinci", "şaptezeci şi şase", "şaptezeci şi şapte", "şaptezeci şi opt", "şaptezeci şi nouă", "optzeci", "optzeci şi unu", "optzeci şi doi", "optzeci şi trei", "optzeci şi patru", "optzeci şi cinci", "optzeci şi şase", "optzeci şi şapte", "optzeci şi opt", "optzeci şi nouă", "nouăzeci", "nouăzeci şi unu", "nouăzeci şi doi", "nouăzeci şi trei", "nouăzeci şi patru", "nouăzeci şi cinci", "nouăzeci şi şase", "nouăzeci şi şapte", "nouăzeci şi opt", "nouăzeci şi nouă", "o sută"];
const V2 = ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien", "twintig", "eenentwintig", "tweeëntwintig", "drieëntwintig", "vierëntwintig", "vijfëntwintig", "zesëntwintig", "zevenëntwintig", "achtëntwintig", "negenëntwintig", "dertig", "eenëndertig", "tweeëndertig", "drieëndertig", "vierëndertig", "vijfëndertig", "zesëndertig", "zevenëndertig", "achtëndertig", "negenëndertig", "veertig", "eenënveertig", "tweeënveertig", "drieënveertig", "vierënveertig", "vijfënveertig", "zesënveertig", "zevenënveertig", "achtënveertig", "negenënveertig", "vijftig", "eenënvijftig", "tweeënvijftig", "drieënvijftig", "vierënvijftig", "vijfënvijftig", "zesënvijftig", "zevenënvijftig", "achtënvijftig", "negenënvijftig", "zestig", "eenënzestig", "tweeënzestig", "drieënzestig", "vierënzestig", "vijfënzestig", "zesënzestig", "zevenënzestig", "achtënzestig", "negenënzestig", "zeventig", "eenënzeventig", "tweeënzeventig", "drieënzeventig", "vierënzeventig", "vijfënzeventig", "zesënzeventig", "zevenënzeventig", "achtënzeventig", "negenënzeventig", "tachtig", "eenëntachtig", "tweeëntachtig", "drieëntachtig", "vierëntachtig", "vijfëntachtig", "zesëntachtig", "zevenëntachtig", "achtëntachtig", "negenëntachtig", "negentig", "eenënnegentig", "tweeënnegentig", "drieënnegentig", "vierënnegentig", "vijfënnegentig", "zesënnegentig", "zevenënnegentig", "achtënnegentig", "negenënnegentig", "honderd"];
let input = document.querySelector('#numar');
let elem = document.querySelector('#elem');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p0 = document.querySelector('#p0');
let p1 = document.querySelector('#p1');
let ecran = document.querySelector('#ecran');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
	
input.addEventListener('keypress', function() {
	console.log(input.value);
});

input.addEventListener('keypress', function(event) {
	if (event.code == 'Enter'){
		let n = Number(input.value);
		ecran.innerHTML = '';
		if ((n > 0) && (n <= 10)){
		p0.innerHTML = `Tabla înmulțirii cu ${n}:`;
		elem.appendChild(p0); 
		operatie();
		}		
		input.value = null;
		}
});

input.addEventListener('blur', function() {
		let n = Number(input.value);
		ecran.innerHTML = '';
		if ((n > 0) && (n <= 10)){
		p0.innerHTML = `Tabla înmulțirii cu ${n}:`;
		elem.appendChild(p0); 
		operatie();
		}		
		input.value = null;
});
	
function operatie(){
	let i = 0;
	let n = Number(input.value);
	if ((n > 0) && (n <= 10)){
	inmultesc(n,i);
	ecran.appendChild(afisez(i, n));
	elem.appendChild(ecran);
	}
	btn2.addEventListener('click', function() {
		if ((i < 10)&& (n > 0) && (n <= 10)){
			ecran.innerHTML = null;
			i++;
			inmultesc(n,i);
			ecran.appendChild(afisez(i, n));
			elem.appendChild(ecran);
		}
	});
	btn1.addEventListener('click', function() {
			if ((i >= 1) && (n > 0) && (n <= 10)){
			ecran.innerHTML = null;
			i--;
			inmultesc(n,i);
			ecran.appendChild(afisez(i, n));
			elem.appendChild(ecran);
		}
	});
}
	
function inmultesc(num1, num2){
	let result = 0;
	result = num1 * num2;
	p1.innerHTML = `${num1}  *  ${num2}  =  ${result}`;
	elem.appendChild(p1);
	
	p2.innerHTML = `${V1[num1]}  *  ${V1[num2]}  =  ${V1[result]}`;
	elem.appendChild(p2);
	p3.innerHTML = `${V2[num1]}  *  ${V2[num2]}  =  ${V2[result]}`;
	elem.appendChild(p3);
}

function afisez(nr, num){
	let list = document.createElement('table');
	for (let i = 0; i < nr; i++){
		let tr1 = document.createElement('tr');
		for (let j = 0; j < num; j++){
			let td1 = document.createElement('td');
			tr1.appendChild(td1);
			td1.classList = 'colorTab1';
		}
		list.appendChild(tr1);
	}
	return list;
}


const calculateButton = document.getElementById("btn");
const base = 15000;
const higherThresh = 50000;


function salaryCalculator(){


	/* Main variables*/
	let salaryInput = document.getElementById("salary-input").value;
	let taxDue = document.getElementById("tax-due");
	let natIns = document.getElementById("nat-ins");
	let netPay = document.getElementById("net-pay");
	let salaryNumber = parseFloat(salaryInput); /* ensuring that the salaryInput variable converts to number*/

	let higherRateTax = 7000;
	let higherRateNi = 4200;
	
	
		/* Tax and NI for salary up to 15000*/
	if (salaryNumber <= base){
		netPay.innerHTML = salaryInput;
		/* Tax and NI for salary of 15000 - 50000*/
	} else if ( salaryInput > base && salaryInput <= higherThresh){
		let difference =  salaryNumber - base;
		let tax = difference * 0.2;
		let ni = difference * 0.12;
		let net = salaryNumber - (tax + ni); 

		taxDue.innerHTML = tax;
		natIns.innerHTML = ni;
		netPay.innerHTML = net;

		/* Tax and NI for salary of over 50000 */
	} else if (salaryNumber > higherThresh){
		let highDifference = salaryNumber - higherThresh;
		let highTax = higherRateTax + (highDifference * 0.4);
		let highNi = higherRateNi + (highDifference * 0.02);
		let highNet = salaryNumber - (highTax + highNi);

		taxDue.innerHTML = highTax;
		natIns.innerHTML = highNi;
		netPay.innerHTML = highNet;
	}


}

calculateButton.onclick = salaryCalculator;
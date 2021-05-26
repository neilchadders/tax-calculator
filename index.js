

const calculateButton = document.getElementById("btn");
const clear = document.getElementById("clear").addEventListener("click", startAgain);




/* Initial variables*/
const base = 15000;
const higherThresh = 50000;
const higherRateTax = 7000;
const higherRateNi = 4200;
const basicTax = 0.2;
const basicNi = 0.12;
const upperTax = 0.4;
const upperNi = 0.02;

function salaryCalculator(){


	/* DOM variables*/
	let salaryInput = document.getElementById("salary-input").value;
	let taxDue = document.getElementById("tax-due");
	let natIns = document.getElementById("nat-ins");
	let netPay = document.getElementById("net-pay");
	let salaryNumber = parseFloat(salaryInput); /* ensuring that the salaryInput variable converts to number*/

	
	
	
		/* Tax and NI for salary up to 15000*/
	if (salaryNumber <= base){
		netPay.innerHTML = salaryInput;


		/* Tax and NI for salary of 15000 - 50000*/
	} else if ( salaryInput > base && salaryInput <= higherThresh){
		let difference =  salaryNumber - base;
		let tax = difference * basicTax;
		let ni = difference * basicNi;
		let net = salaryNumber - (tax + ni); 

		taxDue.innerHTML = tax;
		natIns.innerHTML = ni;
		netPay.innerHTML = net;


		/* Tax and NI for salary of over 50000 */
	} else if (salaryNumber > higherThresh){
		let highDifference = salaryNumber - higherThresh;
		let highTax = higherRateTax + (highDifference * upperTax);
		let highNi = higherRateNi + (highDifference * upperNi);
		let highNet = salaryNumber - (highTax + highNi);

		taxDue.innerHTML = highTax;
		natIns.innerHTML = highNi;
		netPay.innerHTML = highNet;
	}


}

calculateButton.onclick = salaryCalculator;

function startAgain () {
 
 window.location.reload();

}
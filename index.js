
	



	

function salaryCalculator(){

	/*Main variables*/
	let salaryInput = document.getElementById("salary-input").value;
	let taxDue = document.getElementById("tax-due");
	let natIns = document.getElementById("nat-ins");
	let netPay = document.getElementById("net-pay");



	/*Salary less than 15000*/	
	if (salaryNumber <= 15000){
		netPay.innerHTML = salaryInput;

		/* salary of 15000 - 50000*/
	} else if ( salaryInput > 15000 && salaryInput <= 50000){
		let difference =  salaryNumber - 15000;
		let tax = difference * 0.2;
		let ni = difference * 0.12;
		let net = salaryNumber - (tax + ni); 

		taxDue.innerHTML = tax;
		natIns.innerHTML = ni;
		netPay.innerHTML = net;

		/*Salary of 50000 plus*/
	} else if (salaryNumber > 50000){
		let highDifference = salaryNumber - 50000;
		let highTax = higherRateTax + (highDifference * 0.4);
		let highNi = higherRateNi + (highDifference * 0.02);
		let highNet = salaryNumber - (highTax + highNi);

		taxDue.innerHTML = highTax;
		natIns.innerHTML = highNi;
		netPay.innerHTML = highNet;
	}

}
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

employees.forEach(function(peon){
	var empComp = [];
	empComp.push(peon[0]);
	var sti;
	switch (peon[3]) {
		case 3: sti = 0.04;
		break;
		case 4: sti = 0.06;
		break;
		case 5: sti = 0.10;
		break;
		case 0:
		case 1:
		case 2:
		default: sti = 0;
		break;
	}
	if (peon[1].length == 4) {
		sti += 0.05;
	}
	if (peon[2] > 65000) {
		sti -= 0.01;
	}
	if (sti > 0.13) {
		sti = 0.13;
	}
	empComp.push(sti);

	empComp.push(parseInt(peon[2]) + (peon[2] * sti));
	empComp.push(Math.round(peon[2] * sti));
	console.log(empComp);
}
);

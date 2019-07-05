var mas = [
	document.getElementById("c1"),
	document.getElementById("c2"),
	document.getElementById("c3")
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function fun(check) {
	if (mas[0].checked & mas[1].checked & mas[2].checked) {
		var rand = 0;
		while (rand == check){
			rand = getRandomInt(0, 3);
		}
		if (mas[rand].checked) mas[rand].checked = false;
	}
}
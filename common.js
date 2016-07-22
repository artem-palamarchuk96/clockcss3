var d = document;

window.addEventListener('load', clockGo, false);

function clockGo() {
	// get elements
	var secArrow = d.getElementById('arrow-seconds');
	var minArrow = d.getElementById('arrow-minutes');
	var hourArrow = d.getElementById('arrow-hours');
	// get  current time
	var seconds = new Date().getSeconds();
	var minutes = new Date().getMinutes();
	var hours = new Date().getHours();
	// start point data
	var degreeSeconds = seconds*6;
	var degreeMinutes = minutes*6;
	var degreeHours = (hours/2)*30;
	// start point rotation
	secArrow.style.transform = "rotate("+degreeSeconds+"deg)";
	minArrow.style.transform = "rotate("+degreeMinutes+"deg)";
	hourArrow.style.transform = "rotate("+degreeHours+"deg)";
	// seconds interval
	function secondsInterval() {
		var seconds = new Date().getSeconds();
		var degreeSeconds = seconds*6;
		var styles = getComputedStyle(secArrow).getPropertyValue('transform');
		secArrow.style.transform = "rotate("+degreeSeconds+"deg)";
	}
	// minutes interval
	function minutesInterval() {
		var minutes = new Date().getMinutes();
		var degreeMinutes = minutes*6;
		var styles = getComputedStyle(minArrow).getPropertyValue('transform');
		minArrow.style.transform = "rotate("+degreeMinutes+"deg)";
	}
	// hours interval
	function hoursInterval() {
		var hours = new Date().getHours();
		var degreeHours = (hours/2)*30;
		var styles = getComputedStyle(hourArrow).getPropertyValue('transform');
		hourArrow.style.transform = "rotate("+degreeHours+"deg)";
	}
	// starting intervals
	setInterval(secondsInterval, 1000);
	setInterval(minutesInterval, 1000);
	setInterval(hoursInterval, 1000);

}







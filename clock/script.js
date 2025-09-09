/*
Plan:
Define elements

Initialize
	Get time, save it (in seconds since start of day)

Check time:
	Get time, compare (second-wise) to the saved time
	If differs:
		Save it
		Show formatted time on the page


*/

// -- Definitions --
clockE = document.getElementsByTagName('h1')[0]

// -- Functions --
function initialize() {
	returnTime()
	savedTime = 3600*hh + 60*mm + ss
}

function returnTime() {
	var time = new Date()

	hh = time.getHours()
	mm = time.getMinutes()
	ss = time.getSeconds()
}

function formatTime(num) {
	if (num <= 9) { return '0'+num }
		else      { return num }
}

function checkTime() {
	returnTime()
	if (3600*hh+60*mm+ss != savedTime) {
		clockE.innerHTML = formatTime(hh)+':'+formatTime(mm)+':'+formatTime(ss)
		savedTime = 3600*hh+60*mm+ss
	}
}

initialize()

setInterval(checkTime, 20)
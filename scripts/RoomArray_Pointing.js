function simulateClick(x, y) {
    var clickEvent= document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(
    'click', true, true, window, 0,
    0, 0, x, y, false, false,
    false, false, 0, null
    );
    document.elementFromPoint(x, y).dispatchEvent(clickEvent);
	}

	function foo() {
		simulateClick(620, 650);		
		simulateClick(620, 650);
	}
	
	function FindPath() {
    	var a = document.getElementById("Dept").value;
	var b = document.getElementById("Goal").value;
	var position;
	var sw = document.width();
	var x = (sw-550)/2;
	
	if (a == "Entrance" && b == "Set Class"){
		simulateClick(x+60, 650);		
		simulateClick(x+60, 650);
		return;
	}
	if (b == "Entrance"){
		simulateClick(x+60, 650);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "TM1-01"){
		simulateClick(x+50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Blue Zone"){
		simulateClick(x+50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Red Zone"){
		simulateClick(x+50, 300);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}	
	}

function simulateClick(a, b) {
    var sw =  $(window).width();
    var val = (sw-550)/2;
    var x = val + a;
    var y = b;
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
	
	
	if (a == "Entrance" && b == "Set Class"){
		simulateClick(60, 650);		
		simulateClick(60, 650);
		return;
	}
	if (b == "Entrance"){
		simulateClick(60, 650);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "TM1-01"){
		simulateClick(50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Blue Zone"){
		simulateClick(50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Red Zone"){
		simulateClick(50, 300);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}	
	}

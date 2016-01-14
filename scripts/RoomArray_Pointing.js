function simulateClick(x, y) {
    var clickEvent= document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(
    'click', true, true, window, 0,
    0, 0, x, y, false, false,
    false, false, 0, null
    );
    document.elementFromPoint(x, y).dispatchEvent(clickEvent);
	}
    function pos(x,y){
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		iw = w.innerWidth || e.clientWidth || g.clientWidth,
		ih = w.innerHeight|| e.clientHeight|| g.clientHeight;
    if (iw>=550){
    var val = (iw-550)/2;
    var a = val + x;
    var b = y;
    } else (
    var a = x;
    var b = y;
    }
    simulateClick(a,b);
    }
	function start() {
		pos(60, 650);		
		pos(60, 650);
	}
	function FindPath() {
	$.when(SetA()).then(SetB());
	}
	
	function SetA(){
	var a = document.getElementById("Dept").value;
	if (a == "Entrance"){
		pos(60, 650);
	}
	else if (a == "TM1-01"){
		pos(50, 500);
	}
	else if (a == "Blue Zone"){
		pos(50, 500);
	}
	else if (a == "Red Zone"){
		pos(50, 310);
	}
	}
	
	function SetB(){
	var b = document.getElementById("Goal").value;
	var position;
	
	if (b == "Set Class"){
		pos(60, 650);		
		return;
	}
	else if (b == "Entrance"){
		pos(60, 650);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "TM1-01"){
		pos(50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Blue Zone"){
		pos(50, 500);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}
	else if (b == "Red Zone"){
		pos(50, 310);
		position = b;
		document.getElementById("Dept").value = b;
		return;
	}	
	}

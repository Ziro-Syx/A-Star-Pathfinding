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
	    simulateClick(a,b);
    }else{
	    var a = x;
	    var b = y;
	    simulateClick(a,b);
    }
    
    }
	function start() {
		pos(200,790); //Initialise the LMU associated Walls.
		pos(60, 650); //Two click on the entrance to be on the starting point.
		pos(60, 650);
	}
	
	
	function FindPath() {
	$.when(SetA()).then(SetB()); //Click on location said by 1st box, then on the 2nd one.
	}
	
	function SetA(){
	var aw = document.getElementById("Dept").value; //Get value from Text box with same ID
	var a = [];
	a = aw.split("-");
	if (a[0] == "Entrance"){
		pos(60, 650);
	}else if (a[0] == "Blue Zone"){
		pos(50, 500);
	}else if (a[0] == "Red Zone"){
		pos(50, 310);
	}else if (a[0] == "Yellow Zone"){
		pos(500, 310);
	}else if (a[0] == "Green Zone"){
		pos(500, 140);
	}else if (a[0]=="TM"){
		pos(50, 400);
	}else if (a[0]=="BEL"){
		pos(500, 140);
	}else if (a[0]=="T1"){
		pos(195, 400);
	}else if (a[0]=="T2"){
		pos(195, 400);
	}else if (a[0]=="T3"){
		pos(195, 400);
	}else if (a[0]=="T4"){
		pos(195, 400);
	}else if (a[0]=="T5"){
		pos(195, 400);
	}else if (a[0]=="T6"){
		pos(195, 400);
	}else if (a[0]=="T7"){
		pos(195, 400);
	}else if (a[0]=="T8"){
		pos(195, 400);
	}else if (a[0]=="T9"){
		pos(195, 400);
	}else if (a[0]=="T10"){
		pos(195, 400);
	}else{
		return;
	}
	}
	
	function SetB(){
	var bh = document.getElementById("Goal").value; //Get value from Text box with same ID
	var b = [];
	b = bh.split("-");
	
	if (b[0] == "Set Class"){
		pos(60, 650);		
		return;
	}else if (b[0] == "Entrance"){
		pos(60, 650);
		return;
	}else if (b[0] == "TM1-01"){
		pos(50, 500);
		return;
	}else if (b[0] == "Blue Zone"){
		pos(50, 500);
		return;
	}else if (b[0] == "Red Zone"){
		pos(50, 310);
		return;
	}else if (b[0] == "Yellow Zone"){
		pos(500, 310);
		return;
	}else if (b[0] == "Green Zone"){
		pos(500, 140);
		return;
	}else if (b[0]=="TM"){
		pos(50, 400);
		return;
	}else if (b[0]=="BEL"){
		pos(500, 140);
		return;
	}else if (b[0]=="T1"){
		pos(195, 400);
		return;
	}else if (b[0]=="T2"){
		pos(195, 400);
		return;
	}else if (b[0]=="T3"){
		pos(195, 400);
		return;
	}else if (b[0]=="T4"){
		pos(195, 400);
		return;
	}else if (b[0]=="T5"){
		pos(195, 400);
		return;
	}else if (b[0]=="T6"){
		pos(195, 400);
		return;
	}else if (b[0]=="T7"){
		pos(195, 400);
		return;
	}else if (b[0]=="T8"){
		pos(195, 400);
		return;
	}else if (b[0]=="T9"){
		pos(195, 400);
		return;
	}else if (b[0]=="T10"){
		pos(195, 400);
		return;
	}else{
		return;
	}
	}

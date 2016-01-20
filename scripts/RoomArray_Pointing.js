$.getScript("board.js");

	var deptstart;
	var deptchange;
	var goalend;
	var goalchange;
	var leveldept;
	var levelgoal;
	var error;
	
	function whereclick(){
		var x = event.clientX;     // Get the horizontal coordinate
		var y = event.clientY;     // Get the vertical coordinate
		var coor = "X coords: " + x + ", Y coords: " + y;
		//alert(coor);
	}
	
	function levels(){
		var x = event.clientX;     // Get the horizontal coordinate
		var y = event.clientY;     // Get the vertical coordinate
		if(x >= 580 && x < 680 && y >= 65 && y < 120){
			alert(leveldept + levelgoal);
			
		}
	}
	
	function Start(){
		SetFloorZero();
		setTimeout(myFunction, 300);
		SetEntrance();
		return;
	}
	
	function SetFloorZero(){
		reset(FloorZero);
	}
	
	
    
	function SetEntrance() {
		pos(60, 650); //Two click on the entrance to be on the starting point.
		pos(60, 650);
	}

	
	function FindPath() {
	$.when(SetA()).then(SetB()); //Click on location dictated by 1st box, then on the 2nd one.
	return;
	}
	
	function SetA(){
	var aw = document.getElementById("Dept").value; //Get value from Text box with same ID
	var a = [];
	a = aw.split("-"); // Split with "-"
	TransData(a[0],a[1]);
	leveldept = level;
	if (error == 1){
		alert("Unknown departure point.")
		error = 0;
		}
	}
	
	function SetB(){
	var bh = document.getElementById("Goal").value; //Get value from Text box with same ID
	var b = [];
	b = bh.split("-"); // Split with "-"
	TransData(b[0],b[1]);
	levelgoal = level;
	if (error == 1){
		alert("Unknown destination point.")
		error = 0;
		}
	}
	
	//Database of the rooms
	
	function TransData(zone,room){
	if (zone == "Entrance"){
		level = '0';
		pos(60, 650);
	}else if (zone == "Blue Zone"){
		level = '0';
		pos(50, 500);
	}else if (zone == "Red Zone"){
		level = '0';
		pos(50, 310);
	}else if (zone == "Yellow Zone"){
		level = '0';
		pos(500, 310);
	}else if (zone == "Green Zone"){
		level = '0';
		pos(500, 140);
	}else if (zone =="TM"){
		level = '0';
		pos(50, 400);
	}else if (zone =="BEL"){
		level = '0';
				if(room >= 0 && room <20){
					pos(500, 140);
				}else if(room >= 20 && room <40){
					pos(450, 140);
				}else if(room >= 40 && room <60){
					pos(400, 140);
				}else{
					pos(60, 650);
					error = 1;
					return;
				}		
	}else if (zone =="T1"){
		level = '1';
		pos(195, 400);
	}else if (zone =="T2"){
		level = '2';
		pos(195, 400);
	}else if (zone =="T3"){
		level = '3';
		pos(195, 400);
	}else if (zone =="T4"){
		level = '4';
		pos(195, 400);
	}else if (zone =="T5"){
		level = '5';
		pos(195, 400);
	}else if (zone =="T6"){
		level = '6';
		pos(195, 400);
	}else if (zone =="T7"){
		level = '7';
		pos(195, 400);
	}else if (zone =="T8"){
		level = '8';
		pos(195, 400);
	}else if (zone =="T9"){
		level = '9';
		pos(195, 400);
	}else if (zone =="T10"){
		level = '10';
		pos(195, 400);
	}else if (zone =="T11"){
		level = '11';
		pos(195, 400);
	}else if (zone =="T12"){
		level = '12';
		pos(195, 400);
	}else if (zone =="T13"){
		level = '13';
		pos(195, 400);
	}else{
		pos(60, 650);
		error = 1;
	}
	
	}
	
	
	
	
	//Click function by system
	
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
<<<<<<< HEAD
=======
    
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
>>>>>>> origin/gh-pages
	}

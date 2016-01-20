
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
		if(leveldept != levelgoal){
			if (levelgoal == 0){
				alert(levelgoal);
			}else if (levelgoal == 1){
				alert(x);
				alert(y);
				alert(levelgoal);
				$('#Floors').val('1');
				ChangeFloor(1);
				
			}else if (levelgoal >= 2 && levelgoal < 14){
				alert(levelgoal);
			}else{
				return;
			}
		}else{
			alert("You don't need to go on another floor for your path.")
		}
	}
	
	
	
	function ChangeFloor(x){
		if(x == 0){
			$('#boardType').val('FloorZero').change();
			$('#resetButton').click();
		}else if(x == 1){
			$('#boardType').val('FloorOne').change();
			$('#resetButton').click();
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('FloorOne.png')";
		}else if(x >= 2 && x < 14){
			$('#boardType').val('FloorUpper').change();
			$('#resetButton').click();
		}else{
			return;
		}
		
	}
	
	function Entrance(){
		pos(60, 650); //Two click on the entrance to be on the starting point.
		pos(60, 650);
	}
	
	function Start(){
		
		document.getElementById('astar').style.backgroundImage = "url('FloorZero.png')";
		ChangeFloor(0);
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
	}

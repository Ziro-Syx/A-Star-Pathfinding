
	var deptstart = [];
	var deptchange = [];
	var goalend = [];
	var goalchange = [];
	var leveldept;
	var levelgoal;
	var level;
	
	
	
	function Start(){
		document.getElementById('astar').style.backgroundImage = "url('Images/FloorZero.png')";
		ChangeFloor(0);
		Entrance();
	}
	function Entrance(){
		ChangeFloor(0);
		pos(60, 650); //Two click on the entrance to be on the starting point.
		pos(60, 650);
	}
	
	function FindPath() {
	Start();
	$.when(SetA()).then(SetB()); //Click on location dictated by 1st box, then on the 2nd one.
	TransData(deptstart[0],deptstart[1]);
	leveldept = level;
	TransData(goalend[0],goalend[1]);
	levelgoal = level;

	if(leveldept != 0 || leveldept != levelgoal){
		if (leveldept == levelgoal){
			ChangeFloor(leveldept);
			TransData(deptstart[0],deptstart[1]);
			TransData(goalend[0],goalend[1]);
		}else{
		ChangeFloor(leveldept);
		TransData(deptstart[0],deptstart[1]);
		pos(225, 420);
		alert("Your path is on multiple floors. \nTo see the rest of the way to go, click on toggle below the map !")
		}
	}
	return;
	}
	
	function levels(){
		if(leveldept != levelgoal){
			if (level == leveldept){
				$('#Floors').val(levelgoal);
				ChangeFloor(levelgoal);
				MultiFindPath();
			}else if (level == levelgoal){
				$('#Floors').val(leveldept);
				ChangeFloor(leveldept);
				MultiFindPath();
			}
		}else{
			alert("You don't need to go on another floor for your path.");
			return;
		}
	}
	
	function MultiFindPath(){
		if (level == leveldept){
			pos(225, 420);
			TransData(goalend[0],goalend[1]);
		} else if (level == levelgoal){
			TransData(deptstart[0],deptstart[1]);
			pos(225, 420);
			
		}
	}
	
	function SetA(){
	var aw = document.getElementById("Dept").value; //Get value from Text box with same ID
	var a = [];
	a = aw.split("-"); // Split with "-"
	deptstart[0] = a [0];
	deptstart[1] = a [1];
	}
	
	function SetB(){
	var bh = document.getElementById("Goal").value; //Get value from Text box with same ID
	var b = [];
	b = bh.split("-"); // Split with "-"
	goalend[0] = b [0];
	goalend[1] = b [1];
	}
	
	function ChangeFloor(x){
		if(x == 0){
			$('#boardType').val('FloorZero').change();
			$('#resetButton').click();
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorZero.png')";
		}else if(x == 1){
			$('#boardType').val('FloorOne').change();
			$('#resetButton').click();
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorOne.png')";
			return;
		}else if(x == 2){
			$('#boardType').val('FloorOne').change();
			$('#resetButton').click();
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorTwo.png')";
			return;
		}else if(x >= 3 && x < 14){
			$('#boardType').val('FloorUpper').change();
			$('#resetButton').click();
			if (x == 3){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 4){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 5){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";
			}else if (x == 6){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 7){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";
			}else if (x == 8){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";
			}else if (x == 9){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 10){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 11){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 12){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else if (x == 13){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper.png')";	
			}else{
				return;
			}
		}else{
			return;
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

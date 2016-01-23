
	var deptstart = [];
	var deptchange = [];
	var goalend = [];
	var goalchange = [];
	var leveldept;
	var levelgoal;
	var level;
	
	
	//Start Function
	function Start(){
		document.getElementById('astar').style.backgroundImage = "url('Images/FloorZero.png')";   //Change Background to FloorZero.png
		ChangeFloor(0);																			  //Change level to 0
		Entrance();																				  //Launch Entrance Function
	}
	//This function brings you to the entrance on floor zero.
	function Entrance(){
		ChangeFloor(0);
		pos(60, 650); 																			  //Two clicks on the entrance to be on the starting point.
		pos(60, 650);
	}
	//This function swaps the set Departure and Goal.
	function Swap(){
		var aw = document.getElementById("Dept").value; //Get value from Text box with same ID
		var bh = document.getElementById("Goal").value; //Get value from Text box with same ID
		document.getElementById("Dept").value = bh;
		document.getElementById("Goal").value = aw;
	}
	
	function FindPath() {
	Start();																					  //Act as a reset
	$.when(SetA()).then(SetB()); 																  //Click on location dictated by 1st box, then on the 2nd one.
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
	
	//This Function changes the background picture, and the position of the walls
	function ChangeFloor(x){
		if(x == 0){
			$('#boardType').val('FloorZero').change();    					//Layout = Walls Floor Zero
			$('#resetButton').click();										//Reset the Board
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorZero.png')";
		}else if(x == 1){
			$('#boardType').val('FloorOne').change();    					//Layout = Walls Floor One
			$('#resetButton').click();										//Reset the Board
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorOne.png')";
			return;
		}else if(x >= 2 && x < 14){
			$('#boardType').val('FloorUpper').change();						//Layout = Walls Upper Floors
			$('#resetButton').click();										//Reset the Board
			if (x == 2){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorTwo.png')";
			}else if (x == 3){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorThree.png')";	
			}else if (x == 4){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorFour.png')";	
			}else if (x == 5){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorFive.png')";
			}else if (x == 6){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorSix.png')";	
			}else if (x == 7){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorSeven.png')";
			}else if (x == 8){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorEight.png')";
			}else if (x == 9){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorNine.png')";	
			}else if (x == 10){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorTen.png')";	
			}else if (x == 11){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorEleven.png')";	
			}else if (x == 12){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorTwelve.png')";	
			}else if (x == 13){
			document.getElementById('astar').style.backgroundImage = "url('Images/FloorUpper/FloorThirteen.png')";	
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

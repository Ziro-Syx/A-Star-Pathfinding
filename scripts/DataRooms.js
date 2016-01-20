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
					alert("Unknown Location/Destination");
					return;
				}		
	}else if (zone =="T1"){
		level = '1';
				if(room >= 0 && room <20){
					pos(165, 400);
				}else if(room >= 20 && room <40){
					pos(125, 400);
				}else if(room >= 40 && room <60){
					pos(85, 400);
				}else{
					pos(165, 400);
					alert("Unknown Location/Destination");
					return;
				}	
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
		alert("Unknown Location/Destination");
		return;	
	}
	return;
	}

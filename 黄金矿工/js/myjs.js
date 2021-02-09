function $(id){
	return document.getElementById(id);
}

let ogame_show = $("mycanvas"),ogame_show2 = $("line");let ogame_show3 = $("material");
let ogame_show4 = $("movematerial");let movecontext = ogame_show4.getContext("2d");
let ogame_show5 = $("guodu");let Guoducontext = ogame_show5.getContext("2d");
let Context = ogame_show.getContext("2d"),Linecontext = ogame_show2.getContext("2d");
let Materialcontext = ogame_show3.getContext("2d");

let Messcontext = $("messshow").getContext("2d");


let nowx = 0,nowy = 0,bita,alpha,catch_material = 0,dollar = 0,mspeed = 0,musicre = 0;
let now_floor = 0,mater_number = [12,13,14,15,16,17,18,19,20,21,22,23],leave_time = 6000;
let need_money = [600,1200,1900,2600,3800,5000,7000,9500,13000,16000,18000,22000,26000];

let back_pic = new Image();
let hook_pic = new Image();

let ran = 0,direction = false;

let hook_state = 0,mark_time = 0,speed = 3;

back_pic.src = "img/back3.png";
hook_pic.src = "img/hook.png";

function draw_material(){
	
	$("material").height = $("material").height;
	for(let i = 1;i <= mater_number[now_floor];++i)
	{
		if(exist[i])
		Materialcontext.drawImage(material_pic[species[i]],posx[i],posy[i],radius[i]*2,radius[i]*2);
	}
	Materialcontext.font = "32px bold 黑体";
	Materialcontext.fillStyle = "coral";
	Materialcontext.fillText(dollar,140,40);
}

window.onload = function(){
	
	Context.drawImage(back_pic,0,0);
	
	draw_material();
	
	setInterval(function(){
		
		leave_time -- ;
		
		if(leave_time > 0)
		{
			$("messshow").height = $("messshow").height;
			Messcontext.font = "28px bold 黑体";
			Messcontext.fillStyle = "red";
			Messcontext.fillText(parseInt(leave_time/100) ,980,35);
			Messcontext.fillText(now_floor + 1 ,935,80);
			Messcontext.font = "32px bold 黑体";
			Messcontext.fillStyle = "blueviolet";
			Messcontext.fillText(need_money[now_floor]  ,185,90);
		}
		
		
		if(leave_time == 0)
		{
			if(dollar < need_money[now_floor]) 
			{
				$("messshow").height = $("messshow").height;
				Guoducontext.drawImage(guodupic,0,0,1100,750);
				Guoducontext.font = "72px bold 黑体";
				Guoducontext.fillStyle = "gold";
				Guoducontext.fillText("您失败咯"  ,415,390);
				leave_time = -9999;
			}
			else{
				$("messshow").height = $("messshow").height;
				Guoducontext.drawImage(guodupic,0,0,1100,750);
				Guoducontext.font = "72px bold 黑体";
				Guoducontext.fillStyle = "gold";
				Guoducontext.fillText(need_money[now_floor + 1]  ,415,390);
				$("guodu_mu").src = "music/过渡音效.mp3";
				$("guodu_mu").play();
			}
			
		}
		else if(leave_time == -450)
		{
			$("guodu").height = $("guodu").height;
			leave_time = 6000;now_floor ++;
			for(let i = 1;i <= mater_number[now_floor];++i)
			{
				posx[i] = Math.random()*900;posy[i] = Math.random()*500+100;exist[i] = true;
				species[i] = parseInt(Math.random()*5);
				if(species[i] == 4) radius[i] = 15;
				else if(species[i] == 2||species[i] == 1)  radius[i] = Math.random()*20 + 20;
				else radius[i] = Math.random()*60 + 20;
			}	
			draw_material();

		}
		else{
		if(hook_state == 0)
		{
			if(!direction) ran ++;else ran --;
			if(ran == 90) direction = !direction;
			if(ran == -90) direction = !direction;
			$("hook").style.transform = 'rotate('+ran+'deg)';	
		}
		else if(hook_state == 1)
		{
			nowx = 690 - speed * mark_time*Math.sin(ran/57.29578),
			nowy = 100 + speed * mark_time*Math.cos(ran/57.29578);
			$("hook").style.left = nowx+"px";
			$("hook").style.top = nowy+"px";
			mark_time ++;
			Linecontext.lineWidth = 3;
			Linecontext.moveTo(512,100);
			Linecontext.lineTo(nowx - 178,nowy);
			Linecontext.stroke();
			for(let i = 1;i <= mater_number[now_floor];++i)
			if(exist[i])
			{
				bita = ran - 34.5;
				let mi = Math.pow((nowx - Math.sin(bita/57.29578)*38.83 - posx[i] - 200 - radius[i]),2);
				mi += Math.pow(nowy+ Math.cos(bita/57.29578)*38.83 - posy[i] - radius[i],2);
				if(i == 1) console.log(mi);
				if(mi< radius[i] * radius[i]*1)
				{
					hook_state = 2;exist[i] = false;
					mspeed = 3/(radius[i]/30);
					mark_time *= 3;mark_time= parseInt(mark_time/mspeed);speed = mspeed;
					$("material").height = $("material").height;
					draw_material();catch_material = i;
					
					if(species[i] == 0||species[i] == 3)
					{
						if(radius[i] >= 60) $("getthing").src = "music/大矿石音效.mp3";
						else $("getthing").src = "music/小矿石音效.mp3";
					}
					else if(species[i] == 4) $("getthing").src = "music/chime.ogg";
					else $("getthing").src = "music/石头.mp3";
					$("getthing").play();
					
					$("hook_back").src = "music/收勾音效.mp3";
					$("hook_back").play();
					musicre = 0;
					break;
				}
			}
			if(mark_time == 215) 
			{
				hook_state = 2;
				$("hook_back").src = "music/收勾音效.mp3";
				$("hook_back").play();
				musicre = 0;
			}
		}
		else if(hook_state == 2)
		{
			mark_time --;
			if(mark_time == 0)
			{
				if(catch_material == 0) {hook_state = 0;mark_time = 0;$("movematerial").height = $("movematerial").height;}
				else
				{
					Materialcontext.font = "32px bold 黑体";
					Materialcontext.fillStyle = "black";
					Materialcontext.fillText("$"+parseInt(value[species[catch_material]]*radius[catch_material]),340,80);
					$("money_get").src = "music/金钱到账.mp3";
					$("money_get").play();
				}
				
			}
			if(mark_time > 0) 
			{
				musicre ++;
				if(musicre % 120 == 0)
				{
					$("hook_back").src = "music/收勾音效.mp3";
					$("hook_back").play();
				}
				nowx = 690 - speed * mark_time*Math.sin(ran/57.29578),
				nowy = 100 + speed * mark_time*Math.cos(ran/57.29578);
				$("hook").style.left = nowx+"px";
				$("hook").style.top = nowy+"px";
				$("line").height = $("line").height;
				Linecontext.lineWidth = 3;
				Linecontext.moveTo(512,100);
				Linecontext.lineTo(nowx - 178,nowy);
				Linecontext.stroke();
				if(catch_material != 0)
				{
					$("movematerial").height = $("movematerial").height;
					bita = ran - 34.5;
					// Math.pow((nowx - Math.sin(bita/57.29578)*38.83 - posx[i] - 200 - radius[i]),2);
					// Math.pow(nowy+ Math.cos(bita/57.29578)*38.83 - posy[i] - radius[i],2);
					movecontext.drawImage(material_pic[species[catch_material]],nowx - 200 
						- Math.sin(bita/57.29578)*38.83
					- radius[catch_material],nowy - radius[catch_material]+ 
					Math.cos(bita/57.29578)*38.83,
					radius[catch_material]*2,radius[catch_material]*2);
				}
			}
			if(mark_time == -90) 
			{
				hook_state = 0;mark_time = 0;$("movematerial").height = $("movematerial").height;
				dollar += parseInt(value[species[catch_material]]*radius[catch_material]) ;
				$("material").height = $("material").height;draw_material();
				$("mention").src = "music/提示音.mp3";
				$("mention").play();
			}
			
		}
		}
	},10);
	
	
	
}

document.onkeydown = function(e){
		
	switch(e.keyCode){
		
		case 40:
			if(hook_state != 0) break;
			console.log("ok");
			catch_material = 0;
			$("hook_out").src = "music/出勾音效.mp3";
			$("hook_out").play();
			hook_state = 1;speed = 3;
			mark_time = 0;
			break;
		
		
		
	}
}

function $(id){
	return document.getElementById(id);
}

let ogame_show = $("game_show");
let Context = ogame_show.getContext("2d");

let hero_life = 1000,hero_money = 20,hero_att = 10,hero_def = 10;
let dollar = 0,exp = 0,yellow_key = 0,red_key = 0,blue_key = 0;	
let peo_pos_x = 305,peo_pos_y = 54,now_floor = 0;
let pos_x = 0,pos_y = 0,gox,goy,open_shop = false,shop_choose = 1;
let upx = [0,7,0],upy = [0,0,9],downx = [8,1],downy = [2,10];
let open_exp = false,time_mark = 0;
	
	
	
	
	
	window.onload = function(){
		
		Context.drawImage(back,0,0);
		for(let i = 0;i <= 10;++i)
			for(let j = 0;j <= 10;++j)
				Context.drawImage(backpic[mymap[now_floor][i][j]],305+i*49,54+j*49);
		Context.drawImage(peo_pic,pos_x*49+305,pos_y*49+54);
		Context.font = "24px Arial";
		Context.fillStyle = "#FFFFFF";
		Context.fillText("生命:					"+hero_life.toFixed(0),60,160);
		Context.fillText("攻击:					"+hero_att,60,195);
		Context.fillText("防御:					"+hero_def,60,230);	
		Context.fillText("金币:					"+dollar,60,265);
		Context.fillText("经验:					"+exp,60,300);
		Context.fillText(yellow_key+"把",180,365);
		Context.fillText(blue_key+"把",180,412);
		Context.fillText(red_key+"把",180,461);
		setInterval(function(){
		if(open_shop) return ;
		Context.drawImage(peo_pic,pos_x*49+305,pos_y*49+54);
	},100);
	}
	
	
	function fresh_table()
	{
		Context.drawImage(back,0,0);
		Context.drawImage(peo_pic,pos_x*49+305,pos_y*49+54);
		Context.font = "24px Arial";
		Context.fillStyle = "#FFFFFF";
		Context.fillText("生命:					"+hero_life.toFixed(0),60,160);
		Context.fillText("攻击:					"+hero_att,60,195);
		Context.fillText("防御:					"+hero_def,60,230);
		Context.fillText("金币:					"+dollar,60,265);
		Context.fillText("经验:					"+exp,60,300);
		Context.fillText(yellow_key+"把",180,365);
		Context.fillText(blue_key+"把",180,412);
		Context.fillText(red_key+"把",180,461);
	}
	function fresh_game_page(){
		
		for(let i = 0;i <= 10;++i)
			for(let j = 0;j <= 10;++j)
				Context.drawImage(backpic[mymap[now_floor][i][j]],305+i*49,54+j*49);
		if(open_shop) {
			Context.drawImage(shop_page,450,130);
			Context.drawImage(arrow,470,240 + (shop_choose-1)*42);
		}
		if(open_exp) {
			Context.drawImage(exp_show,450,130);
			Context.drawImage(arrow,450,240 + (shop_choose-1)*42);
		}
		
	}
	function move_solve(){
		
		
				if(mymap[now_floor][gox][goy] == 0)
				{
					Context.drawImage(ground,pos_x*49+305,pos_y*49+54);
					pos_x = gox ;pos_y = goy;
					Context.drawImage(peo_pic,pos_x*49+305,pos_y*49+54);
				}
				else if(mymap[now_floor][gox][goy] == 2)
				{
					yellow_key ++;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] >= 3&&mymap[now_floor][gox][goy] <= 14)
				{
					x = mymap[now_floor][gox][goy];
					att_time = monster_life[x] / Math.max((hero_att - monster_def[x]),1);
					if(att_time * (monster_att[x] - hero_def) >= hero_life) 
					{
						alert("无法战胜");return;
					}
					hero_life -= att_time * Math.max((monster_att[x] - hero_def),0);
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					dollar += monster_money[x];
					exp += monster_exp[x];
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 15)	//yellow_dor
				{
					if(yellow_key < 1) return ;
					yellow_key --;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 16)	//blue_key
				{
					blue_key ++;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 17)	//blue_dor
				{
					if(blue_key < 1) return ;
					blue_key --;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}else if(mymap[now_floor][gox][goy] == 18)	//red_key
				{
					red_key ++;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 19)	//red_dor
				{
					if(red_key < 1) return ;
					red_key --;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 20)	//red_gem
				{
					hero_att += 3;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 21)	//blue_gem
				{
					hero_def += 3;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 22)	//red_bottle
				{
					hero_life += 200;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 23)	//blue_bottle
				{
					hero_life += 500;
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 24||mymap[now_floor][gox][goy] == 25)
				{
					if(open_shop) return ;open_shop = true;
					shop_choose = 1;fresh_game_page();
				}
				else if(mymap[now_floor][gox][goy] == 28)
				{
					now_floor ++;pos_x = upx[now_floor];pos_y = upy[now_floor];
					fresh_game_page();
				}
				else if(mymap[now_floor][gox][goy] == 29)
				{
					now_floor --;pos_x = downx[now_floor];pos_y = downy[now_floor];
					fresh_game_page();
				}
				else if(mymap[now_floor][gox][goy] == 26)
				{
					hero_att += 15;
					alert("获得铁剑，攻击+15");
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 27)
				{
					hero_def += 15;
					alert("获得铁盾，防御+15");
					mymap[now_floor][gox][goy] = 0;
					Context.drawImage(backpic[0],gox*49+305,goy*49+54);
					fresh_table();
				}
				else if(mymap[now_floor][gox][goy] == 30)
				{
					if(open_exp) return ; open_exp = true;
					shop_choose = 1;fresh_game_page();
				}
				else if(mymap[now_floor][gox][goy] == 31)
				{
					alert("恭喜你游戏通关");
				}
	}
	
	
	document.onkeydown = function(e){
		
		switch(e.keyCode){
			
			case 37:
			case 65:
				peo_pic.src = "img/peo/人物le.png";let go_flag = false;
				gox = pos_x - 1;goy = pos_y;
				if(pos_x <= 0||open_shop) break;
				move_solve();
				break;
			case 38:
			case 87:
				peo_pic.src = "img/peo/人物up.png";
				gox = pos_x;goy = pos_y - 1;
				if(pos_y <= 0||open_shop) break;
				move_solve();
				break;
			case 39:
			case 68:
				peo_pic.src = "img/peo/人物right.png";
				gox = pos_x + 1;goy = pos_y;
				if(pos_x >= 10||open_shop) break;
				move_solve();
				break;
			case 40:
			case 83:
				peo_pic.src = "img/PEO49.png";
				gox = pos_x;goy = pos_y + 1;
				if(pos_y >= 10||open_shop) break;
				move_solve();
				break;
			case 50:
				if(open_shop||open_exp) 
				{
					shop_choose = (shop_choose - 2 + 4) % 4 + 1;
					fresh_game_page();
				}
				break;
			case 56:
				if(open_shop||open_exp) 
				{
					shop_choose = shop_choose % 4 + 1;
					fresh_game_page();
				}
				break;
			case 32:
				if(open_shop)
				{
					if(shop_choose == 1) {if(dollar < 25) break;hero_life += 800;dollar -= 25;}
					else if(shop_choose == 2) {if(dollar < 25) break;hero_att += 4;dollar -= 25;}
					else if(shop_choose == 3) {if(dollar < 25) break;hero_def += 4;dollar -= 25;}
					else {open_shop = false;fresh_game_page();}
					fresh_table();fresh_game_page();
				}
				if(open_exp)
				{
					if(shop_choose == 1) {
						if(exp < 100) break;
						hero_life += 1200;hero_att += 8;hero_def += 8;
						exp -= 100;
					}
					else if(shop_choose == 2){if(exp < 30) break;hero_att += 5;exp -= 30;}
					else if(shop_choose == 3){if(exp < 30) break;hero_def += 5;exp -= 30;}
					else {open_exp = false;fresh_game_page();}
					fresh_table();fresh_game_page();
				}
				break;
			case 27:
				if(open_shop) open_shop = !open_shop;
				if(open_exp) open_exp = !open_exp;
				fresh_game_page();
				break;
				
		}
		
		
		
	}
	



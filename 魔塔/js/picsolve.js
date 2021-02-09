	
	let mymap =[[
	[0,0,1,20,7,15,16,1,2,21,22],
	[0,4,0,1,1,1,2,0,1,3,2],
	[1,0,20,0,0,3,0,0,1,15,1],
	[21,1,0,0,7,23,1,21,0,0,3],
	[7,1,1,1,1,1,22,1,1,1,0],
	[15,1,0,0,7,4,0,4,7,0,0],
	[0,0,0,1,1,1,1,1,1,1,1],
	[1,3,0,4,0,5,16,20,23,3,2],
	[1,28,0,0,0,0,3,21,2,3,0],
	[1,1,1,1,1,1,1,1,1,1,0],
	[1,26,0,9,21,7,21,5,17,0,0]],
	[
	[24,7,7,7,20,7,0,8,23,8,28],
	[25,20,7,20,7,20,0,0,8,0,0],
	[25,7,20,7,7,7,0,0,0,0,0],
	[17,1,1,1,1,1,6,1,1,15,1],
	[0,0,0,0,0,1,22,1,0,9,0],
	[17,1,1,1,0,1,22,1,2,0,2],
	[16,0,0,1,22,1,6,1,1,17,1],
	[0,29,5,6,5,7,0,1,0,8,0],
	[0,0,0,1,20,1,1,1,2,0,2],
	[1,15,1,1,0,1,27,1,1,10,1],
	[1,22,0,0,21,19,21,1,18,0,18]
	],
	[
	[10,23,0,5,0,20,0,5,0,0,29],
	[15,1,1,1,1,1,1,1,1,1,1],
	[0,20,21,5,0,21,0,5,0,0,10],
	[1,1,1,1,1,1,1,1,1,1,15],
	[0,0,0,5,0,22,0,5,21,20,0],
	[0,1,1,1,1,1,1,1,0,1,1],
	[0,1,10,2,1,20,12,1,0,15,11],
	[11,15,12,22,15,13,31,17,0,1,20],
	[22,1,10,2,1,20,12,1,0,1,30],
	[22,1,1,1,1,1,1,1,0,1,1],
	[0,0,0,0,0,0,0,0,0,0,0]
	]
];
	
	
	let peo_pic = new Image();
	let ground = new Image();
	let wall_pic = new Image();
	let back = new Image();
	
	let yellow_key_pic = new Image();
	
	let red_slim = new Image(),green_slim = new Image(),black_slim = new Image();
	let skeleton = new Image(),bat = new Image(),big_bat = new Image();
	let stone_human = new Image(),orcs = new Image(),red_mage = new Image();
	let big_mage = new Image(),yellow_skeleton = new Image(),orcs_hero = new Image();
	
	let yellow_dor = new Image(),blue_key_pic = new Image(),blue_dor = new Image();
	let red_key_pic = new Image(),red_dor = new Image(),red_gem = new Image();
	let blue_gem = new Image(),red_bottle = new Image(),blue_bottle = new Image();
	
	let shop_pic = new Image(),tou = new Image(),shop_page = new Image();
	let arrow = new Image(),sword_1 = new Image(),shield_1 = new Image();
	let upstairs = new Image(),downstairs = new Image(),exp_oldman = new Image();
	
	let exp_show = new Image(),girl = new Image();
	
	
	let backpic = [];
	
	peo_pic.setAttribute("class","peopic");
	
	
	peo_pic.src = "img/PEO49.png";
	ground.src = "img/地.png";
	wall_pic.src = "img/back/墙.png";
	yellow_key_pic.src = "img/back/黄钥匙.png";
	green_slim.src = "img/monster/绿史莱姆.png";
	
	red_slim.src = "img/monster/红色史莱姆.png";
	back.src = "img/back5.png";
	black_slim.src = "img/monster/黑史莱姆.png";
	skeleton.src = "img/monster/骷髅.png";
	bat.src = "img/monster/蝙蝠.png";
	big_bat.src = "img/monster/大蝙蝠.png";
	stone_human.src = "img/monster/石人.png";
	orcs.src = "img/monster/兽人.png";
	red_mage.src = "img/monster/红法师.png";
	big_mage.src = "img/monster/大法师.png";
	yellow_skeleton.src = "img/monster/黄骷髅.png";
	orcs_hero.src = "img/monster/兽人勇士.png";
	yellow_dor.src = "img/zaxiang/黄色门.png";
	blue_dor.src = "img/zaxiang/蓝门.png";
	blue_key_pic.src = "img/zaxiang/蓝钥匙.png";
	red_dor.src = "img/zaxiang/红门.png";
	red_key_pic.src = "img/zaxiang/红钥匙.png";
	red_gem.src = "img/zaxiang/红宝石.png";
	blue_gem.src = "img/zaxiang/蓝宝石.png";
	red_bottle.src = "img/zaxiang/红血瓶.png";
	blue_bottle.src = "img/zaxiang/蓝血瓶.png";
	shop_pic.src = "img/zaxiang/商店.png";
	tou.src = "img/透明.png";
	shop_page.src = "img/商店页面2.png";
	arrow.src = "img/箭头.png";
	sword_1.src = "img/zaxiang/剑.png";
	shield_1.src = "img/zaxiang/盾牌.png";
	upstairs.src = "img/zaxiang/上楼梯.png";
	downstairs.src = "img/zaxiang/下楼梯.png";
	exp_oldman.src = "img/zaxiang/经验老头.png";
	exp_show.src = "img/经验界面1.png";
	girl.src = "img/公主.png";
	
	backpic.push(ground);backpic.push(wall_pic);backpic.push(yellow_key_pic);
	//3开始
	backpic.push(red_slim);backpic.push(green_slim);backpic.push(black_slim);
	//6
	backpic.push(skeleton);backpic.push(bat);backpic.push(big_bat);
	//9
	backpic.push(orcs);backpic.push(stone_human);backpic.push(yellow_skeleton);
	//12
	backpic.push(red_mage);backpic.push(big_mage);backpic.push(orcs_hero);
	//15
	backpic.push(yellow_dor);backpic.push(blue_key_pic);backpic.push(blue_dor);
	//18
	backpic.push(red_key_pic);backpic.push(red_dor);backpic.push(red_gem);
	//21
	backpic.push(blue_gem);backpic.push(red_bottle);backpic.push(blue_bottle);
	//24
	backpic.push(shop_pic);backpic.push(tou);backpic.push(sword_1);
	//27
	backpic.push(shield_1);backpic.push(upstairs);backpic.push(downstairs);
	//30
	backpic.push(exp_oldman);backpic.push(girl);
	
	
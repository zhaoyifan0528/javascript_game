let posx = new Array(),posy = new Array(),exist = new Array();
let species = new Array(),radius = new Array();material_pic = [];
let value = [3,1,1,2,40];

// 0 -4

let jin_pic = new Image();let shi1 = new Image();let shi2 = new Image(),baiyin = new Image();
let zuan = new Image();zuan.src = "img/5.png";
jin_pic.src = "img/1.png";shi1.src = "img/2.png";shi2.src = "img/3.png";baiyin.src = "img/4.png";
material_pic.push(jin_pic);material_pic.push(shi1);material_pic.push(shi2);material_pic.push(baiyin);
material_pic.push(zuan);

let guodupic = new Image();guodupic.src = "img/过渡界面.png";



for(let i = 1;i <= 12;++i)
{
	posx[i] = Math.random()*900;posy[i] = Math.random()*500+100;exist[i] = true;
	species[i] = parseInt(Math.random()*5);
	if(species[i] == 4) radius[i] = 15;
	else if(species[i] == 2||species[i] == 1)  radius[i] = Math.random()*20 + 20;
	else radius[i] = Math.random()*60 + 20;
}

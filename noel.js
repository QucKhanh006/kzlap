var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var tenDev = "Dev Quốc Khánh";

function veNen() {
 ctx.fillStyle = '#f2f2f2';
 ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function veCayThong() {
 ctx.fillStyle = '#0f770f';
 ctx.beginPath();
 ctx.arc(400, 300, 150, 0, 2 * Math.PI);
 ctx.fill();
 ctx.fillRect(350, 450, 100, 150);
}

function veOngGia() {
 ctx.fillStyle = '#ff0000';
 ctx.beginPath();
 ctx.arc(700, 400, 50, 0, 2 * Math.PI);
 ctx.fill();
 ctx.fillRect(650, 500, 100, 50);
}

function veTenDev() {
 ctx.font = '30px Arial';
 ctx.fillStyle = '#000';
 ctx.textAlign = 'center';
 ctx.textBaseline = 'top';
 ctx.fillText(tenDev, canvas.width / 2, 50);
}

function veMoiThing() {
 veNen();
 veCayThong();
 veOngGia();
 veTenDev();
}

setInterval(veMoiThing, 1000);
veMoiThing();

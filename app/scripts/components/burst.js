'use strict';


class Burst {

	constructor(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.src = 'images/star.png';

		this.ctx = null;
		this.img = null;

		this.init();
	}

	init(){
		let self = this;
		let canvas = document.createElement('canvas');
		let canvasParent = document.getElementById('title-canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.setAttribute('id', 'burst');
		canvas.style.position = 'absolute';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.zIndex = 2;

		this.ctx = canvas.getContext('2d');

		canvasParent.appendChild(canvas);

		this.img = new Image();

		this.img.onload = function(){

			self.img.width = 20;
			self.img.height = 20;

			self.ctx.drawImage(self.img, Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), self.img.width, self.img.height);

			self.move();
		};

		this.img.src = this.src;
	}


	move(){
		let self = this;

		setTimeout(function(){
			self.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			self.ctx.drawImage(self.img, Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 20, 20);
			self.ctx.drawImage(self.img, Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 20, 20);

			self.move();
		}, 500);


	}

}


module.exports = Burst;
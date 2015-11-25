'use strict';

const fx = require('fx');



class Wavy {
	constructor(img, width, height, imgWidth, imgHeight, el, amt){
		
		this.height = height || window.innerHeight;
		this.width = width || window.innerWidth;
		this.imgWidth = imgWidth || 500;
		this.imgHeight = imgHeight || 300;
		
		this.el = el || null;
		this.img = img || null;
		this.amt = amt || 0;
		
		this.canvas = null;
		this.texture = null;

		this.counter = 0;

		this.init();
	}

	init(){

		let self = this;

		// ------------------------------------------------
		// If mobile, don't bother
		//
		
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return null;
		}


		//try to create WebGL canvas
		try {
			this.canvas = fx.canvas();
		}
		catch (e){
			console.log('WEB GL Not supported');
			return null;
		}

		let container = document.getElementById(this.el);
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.canvas.style.marginTop = '0';
		this.canvas.style.right = '0';
		this.canvas.setAttribute('id', 'title-canvas-el');
		container.appendChild(this.canvas);


		//convert image to texture
		this.texture = this.canvas.texture(this.img);

		this.update();

		window.addEventListener('resize', function(){
			self.onResize();
		}, false);

		
	}


	onResize(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.canvas.width = this.width;
		this.canvas.height = this.height;
		let x = Math.sin(this.counter);

		this.canvas.draw(this.texture, this.width).swirl(self.width / 3, self.height / 2, this.width / 2, x).update();

	}

	update(){
		let self = this;

		if (this.counter > 100){
			this.counter = -100;
		}

		let x = Math.sin(this.counter);

		this.canvas.draw(this.texture, this.width).swirl(self.width / 3, self.height / 2, this.width / 2, x).update();

		this.counter = this.counter + 0.005;

		//draw to canvas
		setTimeout(function(){
			self.update();
		}, 60);
	}
}


module.exports = Wavy;
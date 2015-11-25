'use strict';

const fx = require('fx');



class Wavy {
	
	constructor(){

		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.imgSrc = 'images/eliane-radigue.jpg';
		this.el = 'title-canvas';
		this.img = null;
		this.imgSize = {};
		
		
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

		// ------------------------------------------------
		// Try to create WebGL canvas
		//
		
		try {
			this.canvas = fx.canvas();
		}
		catch (e){
			console.log('WEB GL Not supported');
			return null;
		}

		// ------------------------------------------------
		// Set canvas attrs
		//
		
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.canvas.style.marginTop = '0';
		this.canvas.style.right = '0';
		this.canvas.setAttribute('id', 'title-canvas-el');

		// ------------------------------------------------
		// Append canvas
		//
		let container = document.getElementById(this.el);
		container.appendChild(this.canvas);


		// ------------------------------------------------
		// Load image
		//
		this.loadImage();
		


		window.addEventListener('resize', function(){
			self.onResize();
		}, false);

		
	}



	loadImage(){
		let self = this;
		this.img = new Image();

		this.img.onload = function(){


			// ------------------------------------------------
			// Size image
			//
			self.imgSize = self.calcImgSize();
			
			
			// ------------------------------------------------
			// Convert image to texture
			//
		
			self.texture = self.canvas.texture(self.img);


			// ------------------------------------------------
			// Begin animation
			//
			self.update();
		};

		this.img.src = this.imgSrc;
	}


	calcImgSize(){
		let self = this;

		let parent = document.getElementById(self.el);
		let parentW = parent.offsetWidth;
		let parentH = parent.offsetHeight;


		//use max so we always have the thing filled. min would constrain
		let ratio = Math.max(parentW / self.img.width, parentH / self.img.height);


		let returnWidth = self.img.width * ratio;
		let returnHeight = self.img.height * ratio;


		return {
			width: returnWidth,
			height: returnHeight
		};
		
	}


	onResize(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.imgSize = this.calcImgSize();

		console.log(this.imgSize);
	}

	update(){
		let self = this;

		if (this.counter > 10){
			this.counter = -10;
		}

		let x = Math.sin(this.counter);

		this.canvas.draw(self.texture, self.imgSize.width, self.imgSize.height).swirl(self.width / 3, self.height / 2, self.width / 2, x).update();

		this.counter = this.counter + 0.005;

		//draw to canvas
		setTimeout(function(){
			self.update();
		}, 60);
	}
}


module.exports = Wavy;
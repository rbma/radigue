'use strict';


const Wavy = require('./components/wavy');
const Video = require('./components/video');
const Nav = require('./components/nav');
const social = require('./components/social');

class Piece {
	
	constructor(){
		this.titleWidth = window.innerWidth;
		this.titleHeight = window.innerHeight;
		this.title_img_src = 'images/eliane-radigue.jpg';
		this.titleDom = 'title-canvas';
		
		this.init();

	}

	init(){
		this.nav = new Nav();
		this.loadTitle();
		this.bindSocials();
	}

	resize(img){

		let maxWidth = window.innerWidth;
		let maxHeight = window.innerHeight;

		let ratio = 0;

		let width = img.width;
		let height = img.height;

		let size = {
			width: 0,
			height: 0
		};

		if (width > maxWidth){
			ratio = maxWidth / width;
			size.width = maxWidth;
			size.height = height * ratio;
			height = height * ratio;
			width = width * ratio;

		}

		if (height > maxHeight){
			ratio = maxHeight / height;
			size.height = maxHeight;
			size.width = width * ratio;
			width = width * ratio;
			height = height * ratio;
		}

		return size;

	}

	bindSocials(){
		let self = this;
		let socials = document.getElementsByClassName('share-icon');

		for (let i = 0; i < socials.length; i++ ){
			socials[i].addEventListener('click', self.share, false);
		}

	}


	share(ev){

		ev.preventDefault();

		let site = this.getAttribute('data-site');
		social(site);

	}

	loadTitle(){
		let self = this;
		let img = new Image();

		img.onload = function(){

			let sizes = self.resize(img);

			// sizes.width = sizes.width;
			// sizes.height = sizes.height;

			img.width = sizes.width;
			img.height = sizes.height;

			//instantiate new wavy class
			let wavyTitle = new Wavy(img, self.titleWidth, self.titleHeight, sizes.width, sizes.height, self.titleDom);
		};

		img.src = this.title_img_src;

	}


}



let piece = new Piece();
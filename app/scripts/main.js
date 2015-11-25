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
		this.bindSocials();
		this.bindVideos();

		//start canvas
		let wave = new Wavy();
	}

	// ------------------------------------------------
	// Resize img for canvas and keep aspect
	//
	
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


	// ------------------------------------------------
	// Listen for social click events
	//
	
	bindSocials(){
		let self = this;
		let socials = document.getElementsByClassName('share-icon');

		for (let i = 0; i < socials.length; i++ ){
			socials[i].addEventListener('click', self.share, false);
		}
	}

	// ------------------------------------------------
	// Share to correct platform
	//
	
	share(ev){

		ev.preventDefault();

		let site = this.getAttribute('data-site');
		social(site);

	}


	// ------------------------------------------------
	// Add event listeners on all videos
	//
	
	bindVideos(){
		let self = this;
		let videos = document.getElementsByClassName('video-inner');

		for (let i = 0; i < videos.length; i++ ){
			videos[i].addEventListener('click', self.playVideo, false);
		}

	}


	playVideo(){

		let target = this;
		let src = target.getAttribute('data-src');

		let video = new Video(target, src);
	}




}



let piece = new Piece();
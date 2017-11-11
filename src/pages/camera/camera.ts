import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage {
	// Constructor
    constructor(private _platform: Platform, private _cameraPreview: CameraPreview, private _base64ToGallery: Base64ToGallery) {
    	// Wait until platform is ready
    	_platform.ready().then(() => {
    		// Set camera options
    		let cameraPreviewOptions: CameraPreviewOptions = {
    			x: 0,
		    	y: 0,
		    	width: window.screen.width,
		    	height: window.screen.height,
		    	camera: 'rear',
		    	tapPhoto: true,
		    	toBack: true
    		}

    		// Start the camera
    		_cameraPreview.startCamera(cameraPreviewOptions);
    	})
    }

    // Take a picture upon clicking the button
    takePicture() {
    	// Set camera preview options
    	let pictureOptions: CameraPreviewPictureOptions = {
    		width: this._platform.width(),
    		height: this._platform.height(),
    		quality: 100
    	}

    	// Take a picture
    	this._cameraPreview.takePicture(pictureOptions).then((data) => {
    		let base64Image = 'data:image/png;base64,' + data;

    		// Save to gallery
    		this._base64ToGallery.base64ToGallery(base64Image, { prefix: '_img' }).then(
    			res => console.log('Saved image to gallery ', res),
    			err => console.log('Error saving image to gallery ', err)
    		);
    	}, (err) => {
    		console.log(err);
    	});
    };

    // Categorize a picture according to a model
    predictPicture(imageString) {
    	// Set request parameters
    	var params = {

    	}
    };
}

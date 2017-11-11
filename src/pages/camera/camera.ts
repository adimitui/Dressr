import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage {
	private cameraPreviewOptions: CameraPreviewOptions;

	// Constructor
    constructor(private _platform: Platform, private _cameraPreview: CameraPreview) {
    	// Wait until platform is ready
    	_platform.ready().then(() => {
    		// Set camera options
    		let cameraPreviewOptions = {
    			x: 0,
		    	y: 0,
		    	width: window.screen.width,
		    	height: window.screen.height - 80,
		    	camera: 'rear',
		    	tapPhoto: true
    		}

    		_cameraPreview.startCamera(cameraPreviewOptions);
    	})
    }
}

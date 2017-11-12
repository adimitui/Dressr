import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage {
	// Constructor
    constructor(private _platform: Platform, private _cameraPreview: CameraPreview, private _base64ToGallery: Base64ToGallery, private _http: Http) {
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
    		// Save the image in a base-64 string
    		let base64Image = 'data:image/png;base64,' + data;

    		// Save to gallery
    		this._base64ToGallery.base64ToGallery(base64Image, { prefix: '_img' }).then(
    			res => console.log('Saved image to gallery ', res),
    			err => console.log('Error saving image to gallery ', err)
    		);

    		this.predictPicture(base64Image);
    	}, (err) => {
    		console.log(err);
    	});
    };

    // Categorize a picture according to a model
    predictPicture(imageString) {
    	// Set request parameters
    	// var params = {};
    	// var url = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/a60d4dbc-9d43-4ac8-bb8c-2710b50fbd81/image?';
    	// var h = new Headers();
    	// h.append('Content-Type', 'multipart/form-data');
    	// h.append('Prediction-key', '91b292c55d2740f9b9176f489366cb4a');
    	// var body = imageString;

    	// this._http.put(url, body, {headers: h}).map((res) => res.json()).subscribe((res) => {
    	// 	console.log(res);
    	// });

		// Convert the base-64 string to an image
		// var canvas = document.createElement('canvas');
		// canvas.width = imageString.width;
		// canvas.height = imageString.height;
		// var ctx = canvas.getContext('2d');
		// ctx.drawImage(imageString, 0, 0);
		// var imageUrl = canvas.toDataURL('image/png');
		// console.log(imageUrl);

		console.log(imageString);

		var params = {};

		$.ajax({
            url: "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/a60d4dbc-9d43-4ac8-bb8c-2710b50fbd81/image?" + $.param(params),
            beforeSend: function(xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Content-Type","multipart/form-data");
                xhrObj.setRequestHeader("Prediction-key", "91b292c55d2740f9b9176f489366cb4a");
            },
            type: "POST",
            // Request body
            data: "{ 'url': imageString }",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    };
}

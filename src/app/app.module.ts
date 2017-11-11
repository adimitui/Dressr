import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CameraPage,
    BookmarksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CameraPage,
    BookmarksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CameraPreview,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

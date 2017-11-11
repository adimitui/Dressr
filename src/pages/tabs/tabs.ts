import { Component } from '@angular/core';

import { CameraPage } from '../camera/camera';
import { BookmarksPage } from '../bookmarks/bookmarks';

@Component({
	selector: 'page-tabs',
    templateUrl: 'tabs.html'
})

export class TabsPage {
    cameraRoot = CameraPage;
    bookmarksRoot = BookmarksPage;

    constructor() {

    }
}

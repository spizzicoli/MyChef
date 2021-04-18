//API
import {
    Plugins,
} from '@capacitor/core';

const { StatusBar } = Plugins;

export class StatusBarExample {
    isStatusBarLight = true

    changeStatusBar() {
        // Display content under transparent status bar (Android only)
        StatusBar.setOverlaysWebView({
            overlay: true
        });
        const info = StatusBar.getInfo();
    }

    hideStatusBar() {
        StatusBar.hide();
    }

    showStatusBar() {
        StatusBar.show();
    }
}
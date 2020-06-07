/*global MAIN_WINDOW_WEBPACK_ENTRY*/
import 'regenerator-runtime/runtime';
import { app, BrowserWindow, protocol } from 'electron';
import { normalize } from 'path';
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';
import './image-size';

app.whenReady().then(() => {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    // eslint-disable-line global-require
    app.quit();
}

const mode = process.env.APP_MODE || 'prod';

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    if (mode == 'dev') {
        mainWindow.webContents.openDevTools();
    }
};

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.whenReady().then(() => {
    protocol.registerFileProtocol(
        'gallery',
        (request, callback) => {
            const url = request.url.substr(9);
            callback({ path: normalize(url) });
        },
        (error) => {
            if (error) {
                console.error('[ERROR] error registering gallery:// protocol!');
            } else {
                console.log(
                    '[INFO] protocol gallery:// successfully registered',
                );
            }
        },
    );

    createWindow();
});

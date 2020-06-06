import { ipcMain } from 'electron';
import fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(fs.readFile);

ipcMain.handle('get-image', async (event, imagePath) => {
    return readFile(imagePath, { encoding: 'base64' });
});

ipcMain.handle('get-images', async (event, imagesInfo) => {
    return Promise.all(
        imagesInfo.map(async (imageInfo) => {
            const image = await readFile(imageInfo.path, {
                encoding: 'base64',
            });
            return {
                ...imageInfo,
                content: image,
            };
        }),
    );
});

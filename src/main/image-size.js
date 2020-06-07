import { ipcMain } from 'electron';
import { promisify } from 'util';
import imageSize from 'image-size';
const sizeOf = promisify(imageSize);

ipcMain.handle('get-image-sizes', async (event, images) => {
    return Promise.all(
        images.map(async (imagePath) => {
            const dimensions = await sizeOf(imagePath);
            return {
                path: imagePath,
                width: dimensions.width,
                height: dimensions.height,
            };
        }),
    );
});

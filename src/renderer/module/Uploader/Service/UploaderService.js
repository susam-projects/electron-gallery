import * as log from 'loglevel';
import { ipcRenderer } from 'electron';

const logger = log.getLogger('uploader-service');
logger.setLevel(log.levels.DEBUG);

class UploaderService {
    async createCollection(name, images) {
        logger.debug(
            `creating collection "${name}" with ${images.length} images`,
        );
        const imagePaths = images.map((imageFile) => imageFile.path);
        const imageSizes = await ipcRenderer.invoke(
            'get-image-sizes',
            imagePaths,
        );

        // const image = await ipcRenderer.invoke('get-image', imagePaths[0]);

        // const image = await ipcRenderer.invoke(
        //     'get-images',
        //     images.map((imageFile) => ({
        //         name: imageFile.path,
        //         path: imageFile.path,
        //     })),
        // );
    }
}

const uploaderService = new UploaderService();
export default uploaderService;

import * as log from 'loglevel';
import { ipcRenderer } from 'electron';
import storage from '../../Storage/Storage';
import { kebabCase } from 'lodash';
import { basename } from 'path';

const logger = log.getLogger('uploader-service');
logger.setLevel(log.levels.DEBUG);

class CollectionCreatorService {
    async createCollection(name, images) {
        logger.debug(
            `creating collection "${name}" with ${images.length} images`,
        );
        const imagePaths = images.map((imageFile) => imageFile.path);
        const imageSizes = await ipcRenderer.invoke(
            'get-image-sizes',
            imagePaths,
        );

        const imagesInfo = imageSizes.map((it) => ({
            name: basename(it.path),
            path: it.path,
            width: it.width,
            height: it.height,
        }));
        const imageIds = await storage.addImages(imagesInfo);

        return storage.addCollection({
            slug: kebabCase(name),
            title: name,
            content: imageIds,
        });

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

const uploaderService = new CollectionCreatorService();
export default uploaderService;

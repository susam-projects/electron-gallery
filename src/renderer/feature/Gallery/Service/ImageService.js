import { catalogsInfo, favCatalog, allImagesInfo } from '../TestImages/.hidden';
import * as log from 'loglevel';

const logger = log.getLogger('images-service');
logger.setLevel(log.levels.DEBUG);

class ImageService {
    getHomeImages() {
        logger.debug('getting home images');
        return [...allImagesInfo];
    }

    getFavoriteImages() {
        logger.debug('getting favorite images');
        const ids = favCatalog.content;
        return allImagesInfo.filter((image) => ids.includes(image.id));
    }

    getPhotoCollections() {
        logger.debug('getting collections');
        return [...catalogsInfo];
    }

    getPhotoCollectionImages(collectionSlug) {
        logger.debug('getting content of collection', collectionSlug);
        const catalog = catalogsInfo.filter(
            (it) => it.slug === collectionSlug,
        )[0];
        if (!catalog) return [];
        return allImagesInfo.filter((image) =>
            catalog.content.includes(image.id),
        );
    }
}

const imageService = new ImageService();
export default imageService;

import * as log from 'loglevel';
import storage from '../../Storage/Storage';

const logger = log.getLogger('images-service');
logger.setLevel(log.levels.DEBUG);

class ImageService {
    getHomeImages() {
        logger.debug('getting home images');
        return storage.getAllImages();
    }

    getFavoriteImages() {
        logger.debug('getting favorite images');
        const favCatalog = storage.getFavorites();
        const allImagesInfo = storage.getAllImages();
        const ids = favCatalog.content;
        return allImagesInfo.filter((image) => ids.includes(image.id));
    }

    getPhotoCollections() {
        logger.debug('getting collections');
        return storage.getCollections();
    }

    getPhotoCollectionImages(collectionSlug) {
        logger.debug('getting content of collection', collectionSlug);
        const catalogsInfo = storage.getCollections();
        const allImagesInfo = storage.getAllImages();
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

import { v4 as uuidv4 } from 'uuid';
import { catalogsInfo, favCatalog, allImagesInfo } from './TestImages/.hidden';

const data = {
    collections: {},
    images: {},
};

class Storage {
    getAllImages() {
        const images = Object.keys(data.images).map((imageId) => {
            return { ...data.images[imageId] };
        });
        return [...allImagesInfo].concat(images);
    }

    getFavorites() {
        return favCatalog;
    }

    getCollections() {
        const collections = data.collections;
        return Object.keys(collections).map((collectionId) => {
            return { ...collections[collectionId] };
        });
    }

    setImages() {}
    addImage() {}
    removeImage() {}

    async addCollection(collectionInfo) {
        data.collections[collectionInfo.slug] = { ...collectionInfo };
    }

    async addImages(imagesInfo) {
        const ids = imagesInfo.map((imageInfo) => {
            const id = uuidv4();
            data.images[id] = { id, ...imageInfo };
            return id;
        });
        return ids;
    }
}

const storage = new Storage();
export default storage;

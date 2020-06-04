import { catalogsInfo, favCatalog, allImagesInfo } from './TestImages/.hidden';

class Storage {
    getAllImages() {
        return [...allImagesInfo];
    }

    getFavorites() {
        return favCatalog;
    }

    getCollections() {
        return [...catalogsInfo];
    }

    setImages() {}
    addImage() {}
    removeImage() {}
}

const storage = new Storage();
export default storage;

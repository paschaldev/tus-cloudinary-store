const DataStore = require('tus-node-server/lib/stores/DataStore');
const cloudinary = require('cloudinary');

const assert = require('assert');
const File = require('tus-node-server/lib/models/File');

const ERRORS = require('tus-node-server/lib/constants').ERRORS;
const EVENTS = require('tus-node-server/lib/constants').EVENTS;
const TUS_RESUMABLE = require('tus-node-server/lib/constants').TUS_RESUMABLE;

const debug = require('debug');
const log = debug('tus-node-server:stores:cloudinarystore');

class CloudinaryStore extends DataStore {

    constructor(options){

        super(options);

        this.extensions = ['creation', 'creation-defer-length'];
    }

    create(req){

        const upload_length = req.headers['upload-length'];
        const upload_defer_length = req.headers['upload-defer-length'];
        const upload_metadata = req.headers['upload-metadata'];

        if (upload_length === undefined && upload_defer_length === undefined) {
            throw new Error(ERRORS.INVALID_LENGTH);
        }

        let file_id;

        try {
            file_id = this.generateFileName(req);
        }
        catch (err) {
            console.warn('[CloudinaryStore] create: check your `namingFunction`. Error', err);
            throw new Error(ERRORS.FILE_WRITE_ERROR);
        }

        const file = new File(file_id, upload_length, upload_defer_length, upload_metadata);

        return new Promise((resolve, reject) => {

            
        });
    }

    write(req, file_id, offset){


    }

    getOffset(file_id){


    }
}

module.exports = CloudinaryStore
const DataStore = require('tus-node-server/lib/stores/DataStore')

class CloudinaryStore extends DataStore {

    constructor(options){

        super(options)
    }
}

module.exports = CloudinaryStore
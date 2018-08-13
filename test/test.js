var assert = require('assert');
const Server = require('tus-node-server/lib/Server');
var expect = require('chai').expect

const STORE_PATH = '/files';

const CloudinaryStore = require('../lib/index')
const DataStore = require('tus-node-server/lib/stores/DataStore')


describe('Cloudinary DataStore', function () {

    let server;

    before(() => {
        server = new Server();
        server.datastore = new CloudinaryStore({
            path: STORE_PATH,
        });
    });

    describe('constructor', () => {

        it('should be an instance of DataStore', function () {
            //expect(new CloudinaryStore({ path: '/'})).to.be.an.instanceof(DataStore);
            assert.equal(server.datastore instanceof DataStore, true);
        });
    });
});
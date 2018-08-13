var assert = require('assert');
const sinon = require('sinon');
const Server = require('tus-node-server/lib/Server');
var expect = require('chai').expect
var should = require('chai').should()

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

    describe('constlkhkructor', () => {

        it('should be an instance of DataStore', function () {
            assert.equal(server.datastore instanceof DataStore, true);
        });

        it('must have a create method', () => {
            expect(server.datastore).to.have.own.property('create');
        });
    
        it('must have a write method', () => {
            expect(server.datastore).to.have.own.property('write');
        });
    
        it('must have a getOffset method', () => {
            server.datastore.should.have.own.property('getOffset');
        });
    });
});
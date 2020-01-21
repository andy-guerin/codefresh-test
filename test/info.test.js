const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('Unit testing the /info route', function() {

    it('should return OK status', function() {
        return request(app)
            .get('/info')
            .then(function(response){
                assert.equal(response.status, 200);
            });
    });

    it('should return service_name in response', function() {
        return request(app)
            .get('/info')
            .then(function(response){
                expect(response.text).to.contain('service_name');
            });
    });

});

const request = require('supertest')
const { describe, it } = require('mocha')
const app = require('../../app/app')

describe('GET /', () => {
    it('respond with 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })
})

describe('GET /somthing', () => {
    it('respond with 404', (done) => {
        request(app)
            .get('/somthing')
            .expect(404, done)
    })
})

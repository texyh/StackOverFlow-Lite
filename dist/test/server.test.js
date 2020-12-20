"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect = require("expect");
const request = require("supertest");
const app_1 = require("../app");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
describe('Server', () => {
    it('should go to return api details on the root route', (done) => {
        request(app_1.default)
            .get('/')
            .expect(200)
            .expect((res) => {
            expect(res.body.api).toBe('api version 1');
        })
            .end(done);
    });
});
//# sourceMappingURL=server.test.js.map
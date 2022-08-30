"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var posts_service_1 = require("./posts.service");
describe('PostsService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(posts_service_1.PostsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=posts.service.spec.js.map
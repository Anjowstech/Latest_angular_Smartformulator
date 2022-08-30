"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_share_service_service_1 = require("./data-share-service.service");
describe('DataShareServiceService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(data_share_service_service_1.DataShareServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-share-service.service.spec.js.map
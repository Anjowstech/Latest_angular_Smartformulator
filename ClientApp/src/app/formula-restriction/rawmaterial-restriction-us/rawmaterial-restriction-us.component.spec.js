"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rawmaterial_restriction_us_component_1 = require("./rawmaterial-restriction-us.component");
describe('RawmaterialRestrictionUsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rawmaterial_restriction_us_component_1.RawmaterialRestrictionUsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rawmaterial_restriction_us_component_1.RawmaterialRestrictionUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rawmaterial-restriction-us.component.spec.js.map
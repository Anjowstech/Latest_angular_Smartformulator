"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rawmaterial_restriction_prop65_component_1 = require("./rawmaterial-restriction-prop65.component");
describe('RawmaterialRestrictionProp65Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rawmaterial_restriction_prop65_component_1.RawmaterialRestrictionProp65Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rawmaterial_restriction_prop65_component_1.RawmaterialRestrictionProp65Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rawmaterial-restriction-prop65.component.spec.js.map
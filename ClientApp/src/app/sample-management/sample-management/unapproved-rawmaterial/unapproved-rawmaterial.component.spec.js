"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var unapproved_rawmaterial_component_1 = require("./unapproved-rawmaterial.component");
describe('UnapprovedRawmaterialComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [unapproved_rawmaterial_component_1.UnapprovedRawmaterialComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(unapproved_rawmaterial_component_1.UnapprovedRawmaterialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=unapproved-rawmaterial.component.spec.js.map
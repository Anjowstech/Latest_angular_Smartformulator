"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var propellantsvoc_calculation_component_1 = require("./propellantsvoc-calculation.component");
describe('PropellantsvocCalculationComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [propellantsvoc_calculation_component_1.PropellantsvocCalculationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(propellantsvoc_calculation_component_1.PropellantsvocCalculationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=propellantsvoc-calculation.component.spec.js.map
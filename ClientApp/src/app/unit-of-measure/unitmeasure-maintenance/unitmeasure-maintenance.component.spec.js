"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var unitmeasure_maintenance_component_1 = require("./unitmeasure-maintenance.component");
describe('UnitmeasureMaintenanceComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [unitmeasure_maintenance_component_1.UnitmeasureMaintenanceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(unitmeasure_maintenance_component_1.UnitmeasureMaintenanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=unitmeasure-maintenance.component.spec.js.map
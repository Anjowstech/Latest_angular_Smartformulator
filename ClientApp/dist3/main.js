(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"    background-color: #f6f5f1\">\n  <div class=\"col-sm-12\">\n    <div style=\"background-color: #f6f5f1\">\n      <form class=\"form-inline\" style=\"margin-left:300px;margin-bottom:5px;\" >\n        <h2 style=\"    margin-top: 5px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">Admin Work</h2>\n      </form>\n\n      <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n        <ng-container ngbNavItem style=\" background-color: #f6f5f1; margin-left: 20px;margin-top: 10px\">\n          <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Default Settings</a>\n          <ng-template ngbNavContent>\n\n\n\n            <!--<nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n    <ng-container ngbNavItem style=\"    margin-left: 20px;margin-top: 20px\">\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Company Info</a>\n      <ng-template  ngbNavContent>\n\n        </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem style=\"    margin-left: 20px;margin-top: 20px\">\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Formulation</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Marketing Footer</a>\n      <ng-template ngbNavContent>\n\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Stability</a>\n      <ng-template ngbNavContent>\n\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Raw Materials</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Suppliers</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Customer</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Project</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>SampleMgmt</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lab Batch Tkt</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Unit</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>21 CFR Approval</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Password Policy</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lab Inventory</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>System Maintenance</a>\n      <ng-template ngbNavContent>\n\n      </ng-template>\n    </ng-container>\n    <ng-container ngbNavItem>\n      <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>SF Modules</a>\n      <ng-template ngbNavContent>\n\n\n      </ng-template>\n    </ng-container>\n\n  </nav>\n\n  <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:800px;margin-bottom:40px;margin-top:30px; height:40px;width:80px;\">Save</button>-->\n\n\n\n\n\n\n            <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n              <!--<ng-container ngbNavItem style=\"margin-left:20px\">\n    <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lock Formulations</a>\n    <ng-template ngbNavContent>\n      <p>data4</p>\n    </ng-template>\n  </ng-container>-->\n              <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n              <ng-template #innerTabset class=\"nav-tabs\">\n                <ngb-tabset>\n                  <ngb-tab class=\"tabcolor tabbutto tabrowli \" title=\"Company Info\">\n                    <ng-template ngbTabContent >\n                      <div *ngFor=\"let itemdata of defaultdata\">\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\"  *ngFor=\"let itemdata of defaultdata\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Company Name</label>\n                        <input type=\"text\" style=\"margin-left: 20px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Enter Company Name\" id=\"companyname\" size=\"81\" value={{itemdata.CompanyName}}>\n\n                      </form>\n                      <form class=\"form-inline\">\n\n                        <label for=\"Address\" style=\"margin-left:75px;\">Address</label>\n                        <textarea value=\"{{itemdata.CompanyAddress}}\" id=\"Address\" style=\"    width: 700px;margin-left: 20px;margin-top: 10px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"3\" ></textarea>\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"ph.no\" style=\"margin-left: 25px;\">Phone Number</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Phone Number\" id=\"phoneno\" size=\"30\" value={{itemdata.CompanyNumber}}>\n                        <label for=\"fax\" style=\"margin-left:85px;\">Fax</label>\n\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" name=\"Fax\" placeholder=\"Enter Fax Number\" size=\"30\"value={{itemdata.Fax}} />\n                      </form>\n\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 90px;\">Email</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Email Id\" id=\"email\" size=\"30\" value={{itemdata.CompanyEmail}} >\n                        <label for=\"webaddress\" style=\"margin-left:20px;\">Web Address</label>\n\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Enter Web Address\" size=\"30\" value={{itemdata.CompanyWebAddress}}/>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;margin-bottom: 40px\">\n                        <label for=\"companylogo\" style=\"margin-left: 25px;\">Company Logo</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"companylogo\" size=\"81\" value={{itemdata.picturePath}}>\n\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Browse</button>\n\n                      </form>\n                        </div>\n                    </ng-template>\n                  </ngb-tab>\n\n\n\n                  <ngb-tab title=\"Formulation\" >\n                    <ng-template ngbTabContent  >\n                      <div *ngFor=\"let itemdata of defaultdata\">\n                        <h2 style=\" text-align:center;   margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:black\"> Prefix - Formulation Lookup </h2>\n                        <div class=\"row\" style=\"    background-color: #f6f5f1\">\n                          <div class=\"col-sm-9\">\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\"  size=\"20\"  #abbform  value=\"\"/>\n\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\" #abbdescriptionform value=\"\"/>\n\n                              <button type=\"button\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\"  name=\"button\" (click)=\"saveformformulationprefix(abbform.value,abbdescriptionform.value)\">Add Prefix</button>\n                              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\" (click)=\"deleteprefix();\">Delete Prefix</button>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\"value={{itemdata.SeperatorFormulationLookUp}}>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                              <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\"value={{itemdata.StartingNumberFormulationLookUp}}>\n                              <section class=\"example-section\">\n                                <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                                <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                              </section>\n                            </form>\n                            <mat-radio-group style=\"margin-left: 120px;\">\n                              <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                              <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                            </mat-radio-group>\n                          </div>\n                          <div class=\"col-sm-3\">\n                            <label for=\"listofallprefix\">List of All Prefix</label>\n                            <div style=\"width: 15rem; overflow-y: auto; height: 10rem; background-color: white\">\n                              <table class=\" table-hover table-bordered\" style=\"margin-left:10px;\">\n                               \n                                <tbody>\n                                  <tr  *ngFor=\"let itemdata of datasaveabb;let i=index;\"(click)=\"abbclickform(itemdata.abbreviation,itemdata.abbreviationdescription);ClickedRow(i)\" [class.active]=\"i == HighlightRow\">\n                                    <td style=\"width:15rem\">{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</td>\n                                  \n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <!--<div class=\"card\">\n    <div class=\"card-body\" style=\"width: 30rem;height:10rem;overflow-y:auto;\">\n      <ul *ngFor=\"let itemdata of datasaveabb;let i=index;\">\n        <li>{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</li>\n\n      </ul>\n    </div>\n  </div>-->\n\n                          </div>\n                        </div>\n                        </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Marketing Footer\">\n                    <ng-template ngbTabContent>\n                      <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                        Marketing Footer\n                      </h2>\n                      <form class=\"form-inline\" style=\"  margin-bottom: 30px;\"  *ngFor=\" let itemdata of defaultdata\">\n\n                        <label for=\"footer\" style=\"margin-left:75px;\">Footer</label>\n                        <textarea id=\"footer\" style=\"    width: 700px;margin-left: 20px;margin-top: 10px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"6\"value={{itemdata.Footer}}></textarea>\n\n                      </form>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Stability\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                      <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                        Prefix-Stability Test\n                      </h2>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\" value={{itemdata.StabPrefix}}>\n\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\" value={{itemdata.StabSeperator}}>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\" value={{itemdata.StabStartingNumber}}>\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"nextstab\" style=\"margin-left: 95px;\">Next STAB#</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"nextstab\" size=\"30\">\n                      </form>\n                        </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Raw Materials\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Raw Materials </h2>\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" #abbrawform size=\"20\"  value=\"\"/>\n\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" #abbdescriptionrawform  size=\"30\" value=\"\"/>\n\n                              <button type=\"button\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px; \" (click)=\"saverawprefix(abbrawform.value,abbdescriptionrawform.value)\">Add Prefix</button>\n                              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\" (click)=\" deleteprefix();\">Delete Prefix</button>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\"  value={{itemdata.SeperatorRawMaterials}}>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                              <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\" value={{itemdata.StartingNumberRawMaterials}}>\n                              <section class=\"example-section\">\n                                <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                                <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                              </section>\n                            </form>\n                            <mat-radio-group style=\"margin-left: 120px;\">\n                              <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                              <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                            </mat-radio-group>\n                          </div>\n                          <div class=\"col-sm-3\">\n                            <label for=\"listofallprefix\">List of All Prefix</label>\n                            <div style=\"width: 15rem; overflow-y: auto; height: 10rem; background-color: white\">\n                              <table class=\" table-hover table-bordered\" style=\"margin-left:10px;\">\n\n                                <tbody>\n                                  <tr  *ngFor=\"let itemdata of datasaveabbraw;let i=index;\" (click)=\"abbclickform(itemdata.abbreviation,itemdata.abbreviationdescription);\">\n                                    <td style=\"width:15rem\">{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</td>\n\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <!--<div class=\"card\">\n    <div class=\"card-body\" style=\"width: 40rem;\">\n      <ul *ngFor=\"let itemdata of datasaveabbraw\">\n        <li>{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</li>\n\n\n      </ul>\n    </div>\n  </div>-->\n                          </div>\n\n                        </div>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                          <label for=\"srmitem\" style=\"margin-left: 75px;color:firebrick\">RM item# Duplicate Check Validation </label>\n                          <mat-radio-group style=\"margin-left: 20px;\">\n                            <mat-radio-button value=\"1\">Yes</mat-radio-button>\n                            <mat-radio-button value=\"2\">No</mat-radio-button>\n                          </mat-radio-group>\n                          <label for=\"srmitem\" style=\"margin-left: 10px;color:red\">(Same item # cannot be used for another INCI) </label>\n                        </form>\n                        </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Suppliers\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Suppliers </h2>\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\" #abbsuppl value=\"\"/>\n\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\" #abbdescriptionsupp value=\"\"/>\n\n                              <button type=\"button\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\" (click) =\"savesuppliers(abbsuppl.value,abbdescriptionsupp.value)\">Add Prefix</button>\n                              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\"(click)=\" deleteprefix();\">Delete Prefix</button>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\" value={{itemdata.SeperatorSuppliers}}>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                              <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\"value={{itemdata.StartingNumberSuppliers}}>\n                              <section class=\"example-section\">\n                                <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                                <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                              </section>\n                            </form>\n\n                          </div>\n                          <div class=\"col-sm-3\">\n                            <label for=\"listofallprefix\">List of All Prefix</label>\n                            <div style=\"width: 15rem; overflow-y: auto; height: 10rem; background-color: white\">\n                              <table class=\" table-hover table-bordered\" style=\"margin-left:10px;\">\n\n                                <tbody>\n                                  <tr *ngFor=\"let itemdata of datasaveabbsup;let i=index;\" (click)=\"abbclickform(itemdata.abbreviation,itemdata.abbreviationdescription);\">\n                                    <td style=\"width:15rem\">{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</td>\n\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <!--<div class=\"card\">\n    <div class=\"card-body\" style=\"width: 40rem;\">\n      <ul *ngFor=\"let itemdata of datasaveabbsup;\">\n        <li>{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</li>\n\n\n      </ul>\n    </div>\n  </div>-->\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                  </ngb-tab>\n\n                  <ngb-tab title=\"customer\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Customer </h2>\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\" #abbcust value=\"\"/>\n\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\"#abbdescriptioncust value=\"\"/>\n\n                              <button type=\"button\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\" (click)=\"savecustomer(abbcust.value,abbdescriptioncust.value)\">Add Prefix</button>\n                              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\"(click)=\" deleteprefix();\">Delete Prefix</button>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\" value={{itemdata.SeperatorCustomer}}>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                              <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\"  value={{itemdata.StartingNumberCustomer}}>\n                              <section class=\"example-section\">\n                                <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                                <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                              </section>\n                            </form>\n                            <mat-radio-group style=\"margin-left: 120px;\">\n                              <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                              <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                            </mat-radio-group>\n                          </div>\n                          <div class=\"col-sm-3\">\n                            <label for=\"listofallprefix\">List of All Prefix</label>\n                            <div style=\"width: 15rem; overflow-y: auto; height: 10rem; background-color: white\">\n                              <table class=\" table-hover table-bordered\" style=\"margin-left:10px;\">\n\n                                <tbody>\n                                  <tr *ngFor=\"let itemdata of datasaveabbcust;let i=index;\" (click)=\"abbclickform(itemdata.abbreviation,itemdata.abbreviationdescription);\">\n                                    <td style=\"width:15rem\">{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</td>\n\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <!--<div class=\"card\">\n    <div class=\"card-body\" style=\"width: 40rem;\">\n      <ul *ngFor=\"let itemdata of datasaveabbcust\">\n        <li>{{itemdata.abbreviation}} - {{itemdata.abbreviationdescription}}</li>\n\n\n      </ul>\n    </div>\n  </div>-->\n                          </div>\n                        </div>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Project\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\"text-align:center;    margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:black\"> Prefix - Project </h2>\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"year\" style=\"margin-left: 155px;\">Year</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Year\" id=\"year\" size=\"20\" value={{currentYear}}>\n\n\n\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                              <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\" value={{itemdata.SampleSep}}>\n                            </form>\n                            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                              <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\" value={{itemdata.SampleSep}}>\n                              <section class=\"example-section\">\n                                <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                                <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                              </section>\n                            </form>\n                            <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;margin-left:500px;\">\n                            </form>\n                          </div>\n                        </div>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Sample Management\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\"    margin-top: 20px;text-align: center;font-family: Playfair Display;background-color: #f6f5f1; color: black\">Prefix-Sample Management </h2>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"year\" style=\"margin-left: 145px;\">Year</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"year\" size=\"20\"value={{itemdata.SampleYear}}>\n\n\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\"value={{itemdata.SampleSep}}>\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                          <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\" value={{itemdata.SampleNo}}>\n                          <section class=\"example-section\">\n                            <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                            <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                          </section>\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                          <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;color:firebrick\">Do you want all raw materialsin formula to be approved while sampling? </label>\n\n                          <section class=\"example-section\" style=\"color:firebrick\">\n                            <mat-checkbox class=\"example-margin\">Yes </mat-checkbox>\n                            <mat-checkbox class=\"example-margin\">No</mat-checkbox>\n                          </section>\n                        </form>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Lab Batch Ticket\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\"    margin-top: 20px;text-align: center;\n    font-family: Playfair Display;background-color: #f6f5f1;color: black\">\n                          Prefix-Lab Batch Ticket\n                        </h2>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"year\" size=\"20\"value={{itemdata.PrefixLabBatch}}>\n\n\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\" value={{itemdata.SeperatorLabBatch}}>\n                        </form>\n                        <section class=\"example-section\" style=\"margin-left:300px\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Unit\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                          Unit Of Maintenance Settings\n                        </h2>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;margin-left:60px\">\n                          <label for=\"Assigned_to\">Default Unit</label>\n                          <select id=\"Assigned_to\" class=\"form-control\" style=\"width:200px;margin-left:20px\"value={{itemdata.DefaultUnit}}>\n                            <option selected>{{itemdata.DefaultUnit}}</option>\n\n                          </select>\n                        </form>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"21 CFR Approval\">\n                    <ng-template ngbTabContent>\n                      <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                        21 CFR  part 11 Approval\n                      </h2>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 55px;\">Display re-verification w/password window </label>\n\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Yes </mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">No</mat-checkbox>\n                        </section>\n                      </form>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Password Policy\">\n                    <ng-template ngbTabContent>\n                      <h2 style=\" margin-left:200px;   margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:red\"> SYSTEM PASSWORD REQUIREMENTS </h2>\n                      <div class=\"col-sm-12\">\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;\">1. Minimum Password Length</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefix\" size=\"2\" value=\"8\">\n                          <label for=\"prefix\" style=\"margin-left: 10px;color: #bb2205\">\n                            Passwords shall have a minimum of 8 characters with a mix of alphanumeric and\n                            special characters.\n                          </label>\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;\">2. Password Expiry Period</label>\n                          <input type=\"text\" style=\"margin-left: 48px;\" class=\"form-control\" id=\"prefix\" size=\"2\" value=\"180\">\n                          <label for=\"prefix\" style=\"margin-left: 10px; color: #bb2205\">\n                            Days (Example: 90, 120, 180 days. Default set to 180 days.)\n                          </label>\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;margin-top: 30px\">3. Password Complexity </label>\n                          <div class=\"card\" style=\"margin-left: 62px;width: 40rem;\">\n                            <div class=\"card-body\">\n                              <p class=\"card-text\">\n                                Include one UPPERCASE and one special character (!, %, @, #, and so on)\n                              </p>\n                              <p class=\"card-text\">\n                                * UPPERCASE and lowercase letter (A, z)\n                              </p>\n                              <p class=\"card-text\">\n                                * Numeric character (0-9)\n                              </p>\n                              <p class=\"card-text\">\n                                * Special character (!, %, @, #, and so on)\n                              </p>\n                            </div>\n                          </div>\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;\">4. Password History</label>\n                          <div class=\"card\" style=\"margin-left: 88px;\">\n                            <div class=\"card-body\" style=\"width: 40rem;\">\n                              Users will be prohibited from re-using the last 5 previously used passwords.\n                            </div>\n                          </div>\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;\">5. Password Restriction </label>\n                          <div class=\"card\" style=\"margin-left: 65px;\">\n                            <div class=\"card-body\" style=\"width: 40rem;\">\n                              Password cannot be the same as username.\n                            </div>\n                          </div>\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"prefix\" style=\"margin-left: 5px;\">6. Account lockout threshold  </label>\n                          <div class=\"card\" style=\"margin-left: 30px;\">\n                            <div class=\"card-body\" style=\"width: 40rem;\">\n                              5 Strikes – 5 wrong failed logins & user account is locked. Admin has to reset.\n                            </div>\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:20px;height:50px;width:120px;\">Save Policy</button>\n                        </form>\n\n\n\n\n                      </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"Lab Inventory\">\n                    <ng-template ngbTabContent>\n                      <div *ngFor=\" let itemdata of defaultdata\">\n                        <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: red\">\n                          USER DEFINED FIELDS IN LAB INVENTORY\n                        </h2>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"field1\" style=\"margin-left: 115px;\">Field1</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field1\" size=\"30\" value={{itemdata.LabInvCustom1}}>\n                          <label for=\"field2\" style=\"margin-left: 100px;\">Field2</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field2\" size=\"30\"value={{itemdata.LabInvCustom2}}>\n\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"field3\" style=\"margin-left: 115px;\">Field3</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field3\" size=\"30\">\n                          <label for=\"field4\" style=\"margin-left: 100px;\">Field4</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field4\" size=\"30\">\n\n                        </form>\n                        <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                          <label for=\"field5\" style=\"margin-left: 115px;\">Field5</label>\n                          <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field5\" size=\"30\">\n\n\n                        </form>\n                        </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"System Maintenance\">\n                    <ng-template ngbTabContent>\n                      <h5 style=\" margin-left:250px;margin-top: 90px; font-family: Playfair Display;background-color: #f6f5f1;color:Highlight\"> Enter Password to access System Maintenance </h5>\n                      <div class=\"col-sm-12\">\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <input type=\"text\" style=\"margin-left: 290px;\" class=\"form-control\" id=\"prefix\" size=\"25\">\n                        </form>\n                        <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:310px;height:40px;width:100px;\">Login</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:100px;\">Cancel</button>\n                        </form>\n\n                      </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                  <ngb-tab title=\"SF Modules\">\n                    <ng-template ngbTabContent>\n                      <div class=\"card\" style=\"width:850px;height:250px;margin-left:90px;margin-top:40px;\">\n                        <div class=\"card-body\">\n                          <form>\n                            <div style=\"margin-left:80px; margin-top:20px;\">\n                              <mat-checkbox class=\"example-margin\">Cosmetics/Personal care</mat-checkbox><br />\n                              <mat-checkbox class=\"example-margin\">Nutrition/Supplements</mat-checkbox><br />\n                              <mat-checkbox class=\"example-margin\">Paints & Coatings</mat-checkbox><br />\n                              <mat-checkbox class=\"example-margin\" disabled>Food & Beverages</mat-checkbox>\n                              <span style=\"margin-left:10px;color:red;\">(This feature is not yet available)</span>\n                            </div>\n                          </form>\n                          <form>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:180px;height:40px;width:120px;margin-top:20px;\">Save</button>\n                          </form>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                  </ngb-tab>\n                </ngb-tabset>\n              </ng-template>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:600px;margin-bottom:40px;margin-top:10px; height:40px;width:80px;\">Save</button>\n            </nav>\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n            \n\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Regulatory</a>\n          <ng-template ngbNavContent>\n\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Formulations</a>\n          <ng-template ngbNavContent>\n            <!--<nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">-->\n              <!--<ng-container ngbNavItem style=\"margin-left:20px\">\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lock Formulations</a>\n                <ng-template ngbNavContent>\n                  <p>data4</p>\n                </ng-template>\n              </ng-container>-->\n              <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n              <ng-template #innerTabset class=\"nav-tabs\">\n                <ngb-tabset>\n                  <ngb-tab  title=\"Lock Formulations\">\n                    <ng-template ngbTabContent>\n                      <p style=\"margin-left:10px; margin-top:10px;\"><b> These are the Formula's you can lock as an Administrator </b></p>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"formulacode\" style=\"margin-left:25px;\">Formula Code</label>\n                        <input type=\"text\"  [(ngModel)]=\"selectedUserfalse.FormulaCode \"  style=\"margin-left: 37px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"formulacode\" size=\"65\" #formulacode name=\"formulacode\"value=\"\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"formulaname\" style=\"margin-left:25px;\">Formula Name</label>\n                        <input type=\"text\"  [(ngModel)]=\"selectedUserfalse.Description\"   style=\"margin-left: 30px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Name\" id=\"formulaname\" size=\"65\"  #formulaname name=\"filterName2\" value=\"\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"projectname\" style=\"margin-left:25px;\">Project Name</label>\n                        <input type=\"text\"  [(ngModel)]=\"selectedUserfalse.ProjectName\"  style=\"margin-left: 40px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Project Name\" id=\"projectname\" size=\"65\" #projectname name=\"filterName\" value=\"\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"username\" style=\"margin-left:25px;\">User Name</label>\n                        <input type=\"text\" [(ngModel)]=\"selectedUserfalse.UserName\" style=\"margin-left: 55px; margin-top: 10px;\" class=\"form-control\" placeholder=\"User Name\" id=\"username\" size=\"65\" #username name=\"username\"value=\"\">\n                        <button  class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\" (click)=\"formulacode.value = '';formulaname.value='';projectname.value='';username.value=''\">Clear</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\"(click)=\" Datalockclick(formulacode.value,formulaname.value,projectname.value,username.value)\">Lock</button>\n                      </form>\n                      <div>\n                        <p style=\"margin-left:10px; margin-top:10px;\"><b>Double Click and Select a Formula From the grid below to Lock a Formula</b></p>\n                      </div>\n                    \n                      <div style=\"   overflow-y: auto; height: 310px;\">\n                        <table class=\" table-hover table-bordered\" style=\"margin-left: 10px; background-color: white\"id=\"table\" width=\"90%\">\n                          <thead>\n                            <tr>\n\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name</th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">User Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let itemfalse of datafalse; let i=index;\" (click)=\"  RowSelectedfalse(itemfalse); \">\n                              <td>{{ itemfalse.FormulaCode }}</td>\n                              <td>{{ itemfalse.Description}}</td>\n                              <td>{{ itemfalse.ProjectName }}</td>\n                              <td>{{ itemfalse.UserName}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        \n                      </div>\n                        <div style=\"margin-left:520px;\">\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                        </div>\n                    </ng-template>\n                  </ngb-tab>\n\n\n\n                  <ngb-tab title=\"Unlock Formula(s)\">\n                    <ng-template ngbTabContent>\n                      <p style=\"margin-left:10px; margin-top:10px;\"><b> These are the Formula's you can Unlock as an Administrator </b></p>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Code</label>\n                        <input type=\"text\" [(ngModel)]=\"selectedUsertrue.FormulaCode\"   style=\"margin-left: 37px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"FormulaCode\" size=\"65\" #formulacodeun name=\"formulacodeun\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Name</label>\n                        <input type=\"text\" [(ngModel)]=\"selectedUsertrue.Description\"  style=\"margin-left: 30px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Name\" id=\"companyname\" size=\"65\"#formulanameun name=\"formulanameun\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Project Name</label>\n                        <input type=\"text\" [(ngModel)]=\"selectedUsertrue.ProjectName\"  style=\"margin-left: 40px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Project Name\" id=\"companyname\" size=\"65\"#projectnameun name=\"projectnameun\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">User Name</label>\n                        <input type=\"text\" [(ngModel)]=\"selectedUsertrue.UserName\"  style=\"margin-left: 55px; margin-top: 10px;\" class=\"form-control\" placeholder=\"User Name\" id=\"companyname\" size=\"65\"#usernameun name=\"username\">\n                        <button  class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\"(click)=\"formulacodeun.value='';formulanameun.value='';projectnameun .value='';selectedUsertrue.UserName=''\">Clear</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">UnLock</button>\n                      </form>\n                      <div>\n                        <p style=\"margin-left:10px; margin-top:10px;\"><b>Double Click and Select a Formula From the grid below to UnLock a Formula</b></p>\n                      </div>\n                      <div style=\"   overflow-y: auto; height: 310px;\">\n                        <table class=\" table-hover table-bordered\" style=\"    margin-left: 10px;    background-color: white\" width=\"90%\">\n                          <thead>\n                            <tr>\n\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name</th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">User Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let itemtrue of datatrue; let i=index;\" (click)=\"RowSelectedtrue(itemtrue); \">\n                              <td>{{ itemtrue.FormulaCode }}</td>\n                              <td>{{ itemtrue.Description}}</td>\n                              <td>{{ itemtrue.ProjectName }}</td>\n                              <td>{{ itemtrue.UserName}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n\n                      <div style=\"margin-left:520px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;margin-top:5px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                      \n                      </div>\n\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Unlock Record(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top:30px;\">\n                        <p><b>Select a Row and Click on the UnLock Record(These Formulas are being viewed bu another User</b></p>\n                      </div>\n                      <div  style=\"   overflow-y: auto; height: 310px;background-color:white\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:80px;\">\n                          <thead>\n                            <tr>\n                             \n                              <th scope=\"col\">UserName</th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">PDRNo</th>\n                              <th scope=\"col\">TaskID</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item1 of data1\">\n                             \n                              <td>{{item1.UserName}}</td>\n                              <td>{{item1.ProjectName}}</td>\n                              <td>{{item1.PDRNo}}</td>\n                              <td>{{item1.Taskid}}</td>\n                            </tr>\n                           \n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:700px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">UnLock All</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\">UnLock Record</button>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Delete product(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top: 30px;margin-left: 20px;\">\n                        <p><b>These are the products you can DELETE as an administrator</b></p>\n                      </div>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"ph.no\" style=\"margin-left: 25px;\">Product</label>\n                        <input type=\"text\" style=\"margin-left: 60px;\" class=\"form-control\" placeholder=\"Product\" id=\"phoneno\" size=\"30\" #productdel name=\"productde\">\n                        <label for=\"fax\" style=\"margin-left:85px;\">Product Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" placeholder=\"Product Name\" size=\"30\" #productnamedel name=\"productnamede\" />\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 24px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"phoneno\" size=\"30\" #formulacodedel name=\"formulacodede\">\n                        <label for=\"webaddress\" style=\"margin-left:82px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"webaddress\" name=\"formulanamedel\" placeholder=\"Formula Name\" size=\"30\" #formulanamedel  />\n                      </form>\n                      <div style=\"margin-left:300px;margin-top:30px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">Delete</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\"(click)=\"productdel.value='';productnamedel.value='';formulacodedel.value='';formulanamedel.value=''\">Clear</button>\n                      </div>\n                      <div style=\"margin-top:15px;margin-left:20px;\">\n                        <p><b>Double click and select a product from the grid below to DELETE a product</b></p>\n                      </div>\n                      <div class=\"center\" style=\"overflow-x:auto;\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:50px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Product #</th>\n                              <th scope=\"col\">Product Name</th>\n                              <th scope=\"col\">Product Date</th>\n                              <th scope=\"col\">Sample #</th>\n                              <th scope=\"col\">Formula # </th>\n                              <th scope=\"col\">Formuala Name</th>\n                              <th scope=\"col\">PDR #</th>\n                              <th scope=\"col\">Project Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>05115</td>\n                              <td>Charlie Brown</td>\n                              <td>05/16/13</td>\n                              <td>2013-2035</td>\n                              <td>CC-6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                              <td>6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n\n\n\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Delete Sample(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top: 30px;margin-left: 20px;\">\n                        <p><b>These are the samples you can DELETE as an administrator</b></p>\n                      </div>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"ph.no\" style=\"margin-left: 25px;\">Sample Submission #</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Sample Submission #\" id=\"phoneno\" size=\"30\" #samplesub>\n                        <label for=\"fax\" style=\"margin-left:75px;\">Customer Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" name=\"Fax\" placeholder=\"Customer Name\" size=\"30\" #customername />\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 24px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 75px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"phoneno\" size=\"30\" #formulaco>\n                        <label for=\"webaddress\" style=\"margin-left:77px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left:30px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Formula Name\" size=\"30\" #formulanam/>\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 130px;\">PDR #</label>\n                        <input type=\"text\" style=\"margin-left: 28px;\" class=\"form-control\" placeholder=\"PDR #\" id=\"phoneno\" size=\"30\" #pdr>\n                        <label for=\"webaddress\" style=\"margin-left:75px;\">Project Name</label>\n                        <input type=\"text\" style=\"margin-left:40px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Project Name\" size=\"30\" #projname/>\n                      </form>\n                      <div style=\"margin-left:300px;margin-top:30px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">Delete</button>\n                        <button  class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\"(click)=\"samplesub.value='';customername.value='';formulaco.value='';formulanam.value='';pdr.value='';projname.value=''\">Clear</button>\n                      </div>\n                      <div style=\"margin-top:15px;margin-left:20px;\">\n                        <p><b>Double click and select a product from the grid below to DELETE a product</b></p>\n                      </div>\n                      <div class=\"center\" style=\"overflow-x:auto;\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:60px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Sample #</th>\n                              <th scope=\"col\">Sample Date</th>\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name </th>\n                              <th scope=\"col\">PDR # </th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">Customer Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>05115</td>\n                              <td>Charlie Brown</td>\n                              <td>05/16/13</td>\n                              <td>2013-2035</td>\n                              <td>CC-6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                              <td>6034</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n              </ng-template>\n            <!--</nav>-->\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assign Users</a>\n          <ng-template ngbNavContent style=\"    background-color: #fffefc\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <label for=\"projectname\" style=\"margin-left: 15px;\">Project Name</label>\n                  <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 400px;margin-left: 20px;\">\n\n                    <option selected>Choose...</option>\n\n                    <option *ngFor=\"let itemtrue of datatrue\">{{itemtrue.ProjectName}}</option>\n                    <!--<option *ngFor=\"let itemfalse of datafalse\">{{itemfalse.ProjectName}}</option>-->\n\n                  </select>\n                </form>\n                <label style=\"margin-left:40px\" for=\"Username\">User Name</label>\n\n                <div class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 40rem;\">\n                    <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                    <label for=\"user1\">&nbsp; User1</label><br>\n                    <input type=\"checkbox\" id=\"user2\" name=\"user2\" value=\"User2\">\n                    <label for=\"user2\">&nbsp; User2</label><br>\n                    <input type=\"checkbox\" id=\"user3\" name=\"user3\" value=\"User3\">\n                    <label for=\"user3\">&nbsp; User3</label><br><br>\n\n                  </div>\n                </div>\n\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                </form>\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"workflow\" style=\"color:firebrick\">Workflow tasks for this project</label><br>\n                <div style=\"    overflow-x: auto;overflow-y: auto; height: 510px;\">\n                  <table class=\"table table-hover table-bordered\" style=\"margin-left:10px;\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\" style=\"width: 1%;\">Assign</th>\n                        <th scope=\"col\" style=\"width: 1%;\">no</th>\n                        <th scope=\"col\" style=\"width: 94%;\">Task</th>\n                        <th scope=\"col\" style=\"width: 4%;\">Email Alert</th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"> <input type=\"checkbox\" id=\"pdrcreation\" name=\"pdrcreation\" value=\"Pdrcreation\"></th>\n\n                        <td>1</td>\n                        <td>PDR Creation</td>\n                        <td><input type=\"checkbox\" id=\"pdr_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pdrapproval\" name=\"pdrapproval\" value=\"Pdrapproval\"></th>\n                        <td>2</td>\n                        <td>PDR Approval</td>\n                        <td><input type=\"checkbox\" id=\"pdr_approval\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formulacreation\" name=\"formulacreation\" value=\"Formulacreation\"></th>\n                        <td>3</td>\n                        <td>Formula Creation</td>\n                        <td><input type=\"checkbox\" id=\"Formula_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"qctestapprovals\" name=\"qctestapprovals\" value=\"Qctestapprovals\"></th>\n                        <td>4</td>\n                        <td>QC Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"producttestingapprovals\" name=\"producttestingapprovals\" value=\"Producttestingapprovals\"></th>\n                        <td>5</td>\n                        <td>Product Testing Approvals</td>\n                        <td><input type=\"checkbox\" id=\"product_testing_approvals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"stabilitytestapprovals\" name=\"stabilitytestapprovals\" value=\"Stabilitytestapprovals\"></th>\n                        <td>6</td>\n                        <td>Stability Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"stabilitytestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"coaapprovals\" name=\"coaapprovals\" value=\"Coaapprovals\"></th>\n                        <td>7</td>\n                        <td>COA Approvals</td>\n                        <td><input type=\"checkbox\" id=\"coaapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"regulatoryapprej\" name=\"regulatoryapprej\" value=\"Regulatoryapprej\"></th>\n                        <td>8</td>\n                        <td>Regulatory Approvals/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"regulatoryapprej\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"ilapproval\" name=\"ilapproval\" value=\"Ilapproval\"></th>\n                        <td>9</td>\n                        <td>IL (Label) Approval</td>\n                        <td><input type=\"checkbox\" id=\"ilapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formprocedapproval\" name=\"formprocedapproval\" value=\"Formprocedapproval\"></th>\n                        <td>10</td>\n                        <td>Formula Procedure Approval</td>\n                        <td><input type=\"checkbox\" id=\"formprocedapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formapprej\" name=\"formapprej\" value=\"Formapprej\"></th>\n                        <td>11</td>\n                        <td>Formula Arrpoval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"formapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"samplecreation\" name=\"samplecreation\" value=\"Samplecreation\"></th>\n                        <td>12</td>\n                        <td>Sample Creation</td>\n                        <td><input type=\"checkbox\" id=\"samplecreation\"></td>\n\n\n                      </tr>\n\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"sampapprej\" name=\"sampapprej\" value=\"sampapprej\"></th>\n                        <td>13</td>\n                        <td>Sample Approval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"sampapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productization\" name=\"productization\" value=\"Productization\"></th>\n                        <td>14</td>\n                        <td>Productization(to scale up & manufacture)</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pccapproval\" name=\"pccapproval\" value=\"Pccapproval\"></th>\n                        <td>15</td>\n                        <td>PCC Approval</td>\n                        <td><input type=\"checkbox\" id=\"pccapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pifapproval\" name=\"pifapproval\" value=\"Pifapproval\"></th>\n                        <td>16</td>\n                        <td>PIF Approval</td>\n                        <td><input type=\"checkbox\" id=\"pifapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productapproval\" name=\"productapproval\" value=\"Productapproval\"></th>\n                        <td>6</td>\n                        <td>Product Approval</td>\n                        <td><input type=\"checkbox\" id=\"product_approval\"></td>\n\n\n                      </tr>\n\n\n\n                    </tbody>\n                  </table>\n                </div>\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">Save </button>\n\n\n                </form>\n\n              </div>\n\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assign Projects</a>\n          <ng-template ngbNavContent>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <label for=\"username\" style=\"margin-left: 15px;\">User Name</label>\n                  <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 400px;margin-left: 20px;\">\n                    <option selected>Choose...</option>\n                    <option>user name1</option>\n                    <option>user name2</option>\n                    <option>user name3</option>\n                    <option>user name4</option>\n                    <option>user name5</option>\n                  </select>\n                </form>\n                <label style=\"margin-left:40px\" for=\"Projectname\">Project Name</label>\n\n                <div   class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 50rem;height:30rem;overflow-y:auto\">\n                   <div *ngFor=\"let item of data \">\n                    <input type=\"checkbox\" id=\"project1\" name=\"project1\" value=\"Project1\">\n                    <label for=\"project1\">&nbsp;{{item.ProjectName}}</label><br>\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                </form>\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"workflow\" style=\"color:firebrick\">Workflow tasks for this project</label><br>\n                <div style=\"    overflow-x: auto;overflow-y: auto; height: 510px;\">\n                  <table class=\"table table-hover table-bordered\" style=\"margin-left:10px;\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\" style=\"width: 1%;\">Assign</th>\n                        <th scope=\"col\" style=\"width: 1%;\">no</th>\n                        <th scope=\"col\" style=\"width: 94%;\">Task</th>\n                        <th scope=\"col\" style=\"width: 4%;\">Email Alert</th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"> <input type=\"checkbox\" id=\"pdrcreation\" name=\"pdrcreation\" value=\"Pdrcreation\"></th>\n\n                        <td>1</td>\n                        <td>PDR Creation</td>\n                        <td><input type=\"checkbox\" id=\"pdr_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pdrapproval\" name=\"pdrapproval\" value=\"Pdrapproval\"></th>\n                        <td>2</td>\n                        <td>PDR Approval</td>\n                        <td><input type=\"checkbox\" id=\"pdr_approval\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formulacreation\" name=\"formulacreation\" value=\"Formulacreation\"></th>\n                        <td>3</td>\n                        <td>Formula Creation</td>\n                        <td><input type=\"checkbox\" id=\"Formula_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"qctestapprovals\" name=\"qctestapprovals\" value=\"Qctestapprovals\"></th>\n                        <td>4</td>\n                        <td>QC Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"producttestingapprovals\" name=\"producttestingapprovals\" value=\"Producttestingapprovals\"></th>\n                        <td>5</td>\n                        <td>Product Testing Approvals</td>\n                        <td><input type=\"checkbox\" id=\"product_testing_approvals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"stabilitytestapprovals\" name=\"stabilitytestapprovals\" value=\"Stabilitytestapprovals\"></th>\n                        <td>6</td>\n                        <td>Stability Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"stabilitytestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"coaapprovals\" name=\"coaapprovals\" value=\"Coaapprovals\"></th>\n                        <td>7</td>\n                        <td>COA Approvals</td>\n                        <td><input type=\"checkbox\" id=\"coaapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"regulatoryapprej\" name=\"regulatoryapprej\" value=\"Regulatoryapprej\"></th>\n                        <td>8</td>\n                        <td>Regulatory Approvals/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"regulatoryapprej\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"ilapproval\" name=\"ilapproval\" value=\"Ilapproval\"></th>\n                        <td>9</td>\n                        <td>IL (Label) Approval</td>\n                        <td><input type=\"checkbox\" id=\"ilapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formprocedapproval\" name=\"formprocedapproval\" value=\"Formprocedapproval\"></th>\n                        <td>10</td>\n                        <td>Formula Procedure Approval</td>\n                        <td><input type=\"checkbox\" id=\"formprocedapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formapprej\" name=\"formapprej\" value=\"Formapprej\"></th>\n                        <td>11</td>\n                        <td>Formula Arrpoval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"formapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"samplecreation\" name=\"samplecreation\" value=\"Samplecreation\"></th>\n                        <td>12</td>\n                        <td>Sample Creation</td>\n                        <td><input type=\"checkbox\" id=\"samplecreation\"></td>\n\n\n                      </tr>\n\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"sampapprej\" name=\"sampapprej\" value=\"sampapprej\"></th>\n                        <td>13</td>\n                        <td>Sample Approval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"sampapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productization\" name=\"productization\" value=\"Productization\"></th>\n                        <td>14</td>\n                        <td>Productization(to scale up & manufacture)</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pccapproval\" name=\"pccapproval\" value=\"Pccapproval\"></th>\n                        <td>15</td>\n                        <td>PCC Approval</td>\n                        <td><input type=\"checkbox\" id=\"pccapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pifapproval\" name=\"pifapproval\" value=\"Pifapproval\"></th>\n                        <td>16</td>\n                        <td>PIF Approval</td>\n                        <td><input type=\"checkbox\" id=\"pifapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productapproval\" name=\"productapproval\" value=\"Productapproval\"></th>\n                        <td>6</td>\n                        <td>Product Approval</td>\n                        <td><input type=\"checkbox\" id=\"product_approval\"></td>\n\n\n                      </tr>\n\n\n\n                    </tbody>\n                  </table>\n                </div>\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">Save </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:130px;\">Print Preview </button>\n                </form>\n\n              </div>\n\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Sr.Mgmt Approvers</a>\n          <ng-template ngbNavContent>\n            <label for=\"manageapplist \" style=\"margin-left:20px\">Select those who are in the Senior Management Approver List</label><br>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 40rem;height:30rem;overflow-y:auto\">\n                    <div *ngFor=\"let item1 of globalapplistval \">\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <a for=\"user1\">&nbsp;{{item1.UserName}}</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\" style=\"position: absolute; left: 50%;bottom: 1%; \">\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Select All </button>\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:130px;\">Deselect All </button>\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">save</button>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Default Report</a>\n          <ng-template ngbNavContent>\n            <div style=\"height:300px\">\n              <h4 style=\"text-align:center;margin-top:40px;margin-left:30px;\"><b>Default Formula Format Settings</b></h4>\n              <form class=\"form-inline\" style=\" background-color: #f6f5f1;margin-top: 40px;\">\n                <label for=\"companylogo\" style=\"margin-left: 295px;\">Default Formula Print Preview Format (1-16)</label>\n                <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"10\" value=\"11\"><br />\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:30px;height:40px;width:80px;\">Save</button>\n              </form>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Mail Setup</a>\n          <ng-template ngbNavContent>\n            <label class=\"form-check-label\" for=\"invalidCheck\" style=\"margin-left:20px;margin-top:10px;\">\n              Configure SMTP Server Settings\n            </label>\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required style=\"    margin-left: 30px;margin-top: 16px;\">\n            <p style=\"color: red;margin-top: 10px;margin-left: 20px;\">(For Email notification upon approvals)</p>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Outgoing Mail Server</label>\n              <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>\n              <button  class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\"(click)=\"mailser.value=''\">Clear</button>\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Outgoing Email Address</label>\n              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Password</label>\n              <input type=\"text\" style=\"margin-left: 120px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">SMTP Server port</label>\n              <input type=\"text\" style=\"margin-left: 68px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:250px;height:40px;width:120px;\">Test Settings</button>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Save</button>\n            </form>\n            <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:990px;height:40px;width:80px;\">Back</button>\n            </form>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Active Users</a>\n          <ng-template ngbNavContent>\n            <div style=\"height:500px\">\n              <p><b>Select a Row to Force Log Out</b></p>\n              <table class=\"table table-hover table-bordered fixed\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Logout User</th>\n                    <th scope=\"col\">Username</th>\n                    <th scope=\"col\">First Name</th>\n                    <th scope=\"col\">User Group</th>\n                    <th scope=\"col\">System Name</th>\n                    <th scope=\"col\">MAC Address</th>\n                    <th scope=\"col\">IP</th>\n                    <th scope=\"col\">Logged In Time</th>\n                    <th scope=\"col\">SF Front End Version</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">\n                      <button type=\"button\" class=\"btn btn-primary\">Logout</button>\n                    </th>\n                    <td>Lalu</td>\n                    <td>Lalu</td>\n                    <td>Administrator</td>\n                    <td>SFUS1</td>\n                    <td>00-24-E8-57-2F-68</td>\n                    <td>24.187.220.62</td>\n                    <td>Jan 5 2021 4:22 PM</td>\n                    <td>SMARTFormulator Ver 8.0.12.05.20</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div>\n\n                <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                  <!--<label for=\"prefixdescription\" style=\"margin-left: 60px;\">Current Active User: 1</label>-->\n                  <h6><b>Current Active User: 1</b></h6>\n\n\n\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:680px;height:40px;width:120px;\">Refresh</button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Logout</button>\n                </form>\n\n\n\n\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n\n      </nav>\n\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n    </div>\n  </div>\n</div>\n<div class=\"card\" style=\"margin-top:25px;\">\n  <div class=\"card-body\" style=\"color:blue;text-align:center\">\n    SMARTFormulator LLC, Copyright &#169; 2009-2020. All Rights Reserved\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>-->\r\n<div>\r\n  <div class=\"basic-container\">\r\n    <div style=\" background-color: black;\" class=\"menu-bar mat-elevation-z1 \">\r\n      <mat-toolbar style=\"    background-color: #F7EFE5;\r\n    height: 70px;\r\n    color: white\">\r\n        <mat-toolbar-row style=\"margin-top:10px\">\r\n          <button mat-icon-button>\r\n            <mat-icon style=\"color: #214252\" (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n          </button>\r\n          <img src=\"../assets/SMARTFORMULATOR.jpg \" height=\"30\" width=\"30\" />\r\n          <h1 style=\"font-family: Playfair Display; font-size:21px;color:  #150485\">SMART </h1>\r\n          <h1 style=\"margin-right:30px;  font-family: Playfair Display;font-size:21px; color: firebrick\"> Formulator</h1>\r\n\r\n\r\n\r\n\r\n\r\n              <span *ngFor=\"let item of navItems\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n                  <button mat-button #menuTrigger=\"matMenuTrigger\"\r\n                          [matMenuTriggerFor]=\"menu.childMenu\"\r\n                          [disabled]=\"item.disabled\" style=\" color:black;overflow-wrap:break-word;font-size:.800em;\">\r\n                    {{item.displayName}}\r\n                  </button>\r\n                  <app-menu-item #menu [items]=\"item.children\"></app-menu-item>\r\n                </span>\r\n\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n\r\n                  <button mat-button [routerLink]=\"item.route\">\r\n                    {{item.displayName}}\r\n                  </button>\r\n\r\n                </span>\r\n\r\n              </span>\r\n            \r\n            \r\n              <span style=\"flex: 1 1 auto;\"></span>\r\n              <div class=\"icon\" style=\"float:right;margin-right:5px\">\r\n                <mat-icon [inline]=\"true\" mat-button [matMenuTriggerFor]=\"menu\" style=\" float: right; margin-right: 10px; color: #214252; height: 40px; width: 50px \">settings</mat-icon>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item [routerLink]=\"'/AdminWork'\">Admin Work</button>\r\n                  <button mat-menu-item [routerLink]=\"'/UserSecurity'\">User Security</button>\r\n                  <button mat-menu-item>Lab Inventory</button>\r\n                  <button mat-menu-item [routerLink]=\"'/RawMaterial'\">Raw Material</button>\r\n                </mat-menu>\r\n              </div>\r\n              <div class=\"icon\" style=\"float:right;margin-right:5px\">\r\n                <mat-icon [inline]=\"true\" mat-button [matMenuTriggerFor]=\"menu1\" style=\"color: #214252;\">account_circle</mat-icon>\r\n\r\n                <mat-menu #menu1=\"matMenu\">\r\n                  <button mat-menu-item>My Task List</button>\r\n                  <button mat-menu-item>Change Password</button>\r\n                  <button mat-menu-item>Logout</button>\r\n                </mat-menu>\r\n              \r\n            </div>\r\n</mat-toolbar-row>\r\n\r\n        <style>\r\n          .icon {\r\n            font-size: 27px;\r\n          }\r\n        </style>\r\n\r\n     \r\n\r\n      </mat-toolbar>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"background-color:#d5f4e6\">\r\n    <mat-sidenav-container >\r\n\r\n      <mat-sidenav #sidenav mode=\"side\" opened>\r\n        <mat-nav-list style=\"width:250px;\">\r\n          <mat-accordion>\r\n\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  <a style=\"margin-left:0px;font-size:larger\">Projects/PDR </a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n                <a mat-list-item [routerLink]=\"'/PDRManagement'\">General </a>\r\n                <a mat-list-item [routerLink]=\"'/PDRManagement'\"> Requirements </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Formulation</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Sample Management </a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Productization  </a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a  style=\"margin-left:0px;font-size:larger\" >Raw Materials</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Suppliers</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Customer</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Product Portfolio</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                  <a style=\"margin-left:0px;font-size:larger\">Miscellaneous</a>\r\n                </mat-panel-title>\r\n\r\n              </mat-expansion-panel-header>\r\n              <mat-list>\r\n\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Requirments </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Product Dev.Brief </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Assigning Users</a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> 21 CFR Part 11 Approvers List </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\">Stage Gate Settings </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Documents </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Assigned Formulas </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Products </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Change Request </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Customer Communications </a>\r\n\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Specifications </a>\r\n                <a mat-list-item [routerLink]=\"'/fetch-data'\"> Audit Tracking</a>\r\n\r\n              </mat-list>\r\n            </mat-expansion-panel>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          </mat-accordion>\r\n        </mat-nav-list>\r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content>\r\n        <div style=\"height:90vh;\">\r\n          <!--<img src=\"../assets/homepageimage.png\" width=\"100%\"/>-->\r\n\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </mat-sidenav-content>\r\n\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n<style>  .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n</style>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div style=\"    background-color: #bbe1fa;\">\n\n  <div style=\"    background-color: #bbe1fa\n\">\n\n    <h1 class=\"design \" style=\"    font-family: Playfair Display;\r\n    background-color: #bbe1fa;\r\n    color: #ffff;\r\n    text-align: center\" >\n      SmartFormulator-Formula Listing\n    </h1>\n\n\n\n\n    <div class=\" container\"style=\"   background-color: #bbe1fa;\" >\n\n    <div class=\"center\" style=\"   background-color: #bbe1fa;\">\n\n      <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n        <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n        <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n      </form>\n\n\n      <form class=\"form-inline\">\n\n\n        <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n\n        <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n          <option selected>Select Project Name</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n      </form>\n      <form class=\"form-inline\">\n\n\n\n        <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n          <option selected>Status</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n\n\n\n        <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n          <option selected>Created By</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n      </form>\n\n\n      <!--<div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n        <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  FormulaCode </th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.FormulaCode}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.Description}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> PDRNo</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.PDRNo}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> UserName</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.UserName}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef>ProjectName</th>\n            <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.ProjectName}​​​​​​​}​​​​​​​ </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>-->\n      <!--</div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>My Formula</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n            <form class=\"form-inline\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>-->\n      <!--</div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Products</a>\n        <ng-template ngbNavContent>\n\n\n\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Company Owned</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n\n\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <form class=\"form-inline\">\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n              <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n                <option selected>Created By</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n                  <th mat-header-cell *matHeaderCellDef> Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n            </div>\n          </div>\n        </ng-template>\n\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Customer Owned</a>\n        <ng-template ngbNavContent>\n          <p>data5</p>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Generic</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n            <form class=\"form-inline\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n              <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n                <option selected>Created By</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n                    <th mat-header-cell *matHeaderCellDef> Date</th>\n                    <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n                  </ng-container>\n\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" ng-click=\"\"> </tr>\n                </table>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>LabNotebook</a>\n          <ng-template ngbNavContent>\n            <form>\n            </form>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>Customer</a>\n          <ng-template ngbNavContent>\n            <p>data8</p>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>Stability</a>\n          <ng-template ngbNavContent>\n            <p>data2</p>\n          </ng-template>\n        </ng-container>\n\n\n      </nav>\n\n\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      <div class=\"form-row\" style=\"    background-color: #bbe1fa;\">\n        <div style=\"margin-left:20px;margin-top:20px\" class=\"form-group \">\n          <div class=\"form-inline\">\n\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">New</button>\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:130px;\">Create Report</button>\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Back</button>\n\n\n\n\n\n          </div>\n        </div>-->\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n  <thead>\r\n    <tr>\r\n      <th>FormulCode</th>\r\n      <th>Description</th>\r\n      <th>PDRNo </th>\r\n      <th>ProjectName</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of data\">\r\n      <td>{{ item.FormulaCode }}</td>\r\n      <td>{{ item.Description}}</td>\r\n      <td>{{ item.PDRNo }}</td>\r\n      <td>{{ item.ProjectName}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/homepageimage.png\" style=\"width:100%\"/>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n  <span *ngFor=\"let child of items\">\r\n    <!-- Handle branch node menu items -->\r\n    <span *ngIf=\"child.children && child.children.length > 0\">\r\n      <button mat-menu-item color=\"primary\"  [matMenuTriggerFor]=\"menu.childMenu\"style=\"height:40px;\" >\r\n       \r\n          <mat-icon>{{child.iconName}}</mat-icon>\r\n          <span>{{child.displayName}}</span>\r\n         \r\n      </button>\r\n      <app-menu-item #menu [items]=\"child.children\"></app-menu-item>\r\n    </span>\r\n    \r\n    <!-- Handle leaf node menu items -->\r\n    <span *ngIf=\"!child.children || child.children.length === 0\"  >\r\n      <button  mat-menu-item [routerLink]=\"child.route\" style= \"height:35px\">\r\n        <mat-icon>{{child.iconName}}</mat-icon>\r\n        <span style=\"margin-top:1px; \">{{child.displayName}}</span>\r\n      </button>\r\n    </span>\r\n  </span>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">redesign</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/add-customer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/add-customer.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; margin-left:300px\">Customer Details</h2>\n\n    <form style=\"    background-color: #f6f5f1\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <div class=\"form-inline\">\n            <label for=\"Customer Key\" style=\"margin-left: 10px;\">Customer Key</label>\n            <input type=\"text\" style=\"margin-left: 26px;width:80%\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"Customer Key\" size=\"40\">\n          </div>\n          <div class=\"form-inline\">\n            <label for=\"Customer Name\" style=\"margin-left: 10px;\">Customer Name</label>\n            <input type=\"text\" style=\"margin-left: 10px;width:80%\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"Customer Name\">\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:50px;width:90px;\"(click)=\"searchcustomer1()\">Search</button>\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n        </div>\n\n      </div>\n    </form>\n\n\n\n    <!-- new design -->\n\n    <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs scrolling-wrapper\">\n      <ng-container ngbNavItem style=\"margin-left:20px\">\n\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Details</a>\n        <ng-template ngbNavContent>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <div class=\"form-inline\">\n                  <label for=\"address\" style=\"margin-left:10px\">Address</label>\n\n                  <textarea style=\"width: 80%;margin-left:58px\" type=\"text\" class=\"form-control\" id=\"address\" rows=\"2\"></textarea>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Customer_type\">Customer Type</label>\n                  <select id=\"Customer_type\" class=\"form-control\" style=\"width:80%;margin-left:20px\">\n                    <option selected>Retail</option>\n                    <option>Distributor</option>\n                    <option>Sole Distributor</option>\n                    <option>Wholesale</option>\n                    <option>Tiered</option>\n\n                  </select>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Telephone\">Telephone</label>\n                  <input style=\"width:80%;margin-left:53px\" type=\"text\" class=\"form-control\" id=\"Telephone\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Fax\">Fax</label>\n                  <input style=\"width:80%;margin-left:102px\" type=\"text\" class=\"form-control\" id=\"Fax\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Contact Person 1\">Contact Person 1</label>\n                  <input style=\"width:80%\" type=\"text\" class=\"form-control\" id=\"Contact Person 1\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Contact Person 2\">Contact Person 2</label>\n                  <input style=\"width:80%\" type=\"text\" class=\"form-control\" id=\"Contact Person 2\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Contact Person 3\">Contact Person 3</label>\n                  <input style=\"width:80%\" type=\"text\" class=\"form-control\" id=\"Contact Person 3\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Terms\">Terms</label>\n                  <select id=\"Terms\" class=\"form-control\" style=\"width:60%;margin-left:82px\">\n                    <option selected>Consignment</option>\n                    <option>No Terms</option>\n                    <option>Due on Reciept</option>\n                    <option>Credit Card</option>\n                    <option>Pre-pay/Proforma Invoice</option>\n                    <option>1% 10 Net 30</option>\n                    <option>Net 15</option>\n                    <option>2% 10 Net 30</option>\n                    <option>2% 15 Net 30</option>\n                    <option>Net 30</option>\n                    <option>Net 45</option>\n                    <option>Net 60</option>\n\n                  </select>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\"(click)=\"termcustomer()\" >...</button>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"FOB\">FOB</label>\n                  <input style=\"width:80%;margin-left:96px\" type=\"text\" class=\"form-control\" id=\"FOB\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Credit Card Type\">Credit Card Type</label>\n                  <select id=\"Credit Card Type\" class=\"form-control\" style=\"width:60%;margin-left:5px\">\n                    <option selected>Choose...</option>\n                    <option>American Express</option>\n                    <option>Discover</option>\n                    <option>MasterCard</option>\n                    <option>Visa</option>\n                    <option>Debit Card</option>\n                    <option>Gift Card</option>\n                    <option>E-Check</option>\n                  </select>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Sales Rep Name\">Sales Rep Name</label>\n                  <select id=\"Sales Rep Name\" class=\"form-control\" style=\"width:60%;margin-left:5px\">\n                    <option selected>N/A</option>\n                    <option>John Polson</option>\n                    <option>Rachel Schneider</option>\n                    <option>Stephen Kinsley</option>\n\n                  </select>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\"(click)=\"salesperson()\">...</button>\n                </div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"City\">City</label>\n                  <input style=\"width:80%;margin-left:70px\" type=\"text\" class=\"form-control\" id=\"City\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"State\">State</label>\n                  <select id=\"State\" class=\"form-control\" style=\"width:80%;margin-left:60px\">\n                    <option selected>Choose...</option>\n                    <option>Admin</option>\n                    <option>Admin1</option>\n                    <option>Admin2</option>\n                    <option>Admin3</option>\n                    <option>Admin4</option>\n                  </select>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Zipcode\">Zip Code</label>\n                  <input style=\"width:80%;margin-left:33px\" type=\"text\" class=\"form-control\" id=\"Zipcode\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Country\">Country</label>\n                  <select id=\"Country\" class=\"form-control\" style=\"width:80%;margin-left:40px\">\n                    <option selected>Choose...</option>\n                    <option>Admin</option>\n                    <option>Admin1</option>\n                    <option>Admin2</option>\n                    <option>Admin3</option>\n                    <option>Admin4</option>\n                  </select>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Email\">Email</label>\n                  <input style=\"width:80%;margin-left:55px\" type=\"text\" class=\"form-control\" id=\"Email\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Email1\">Email 1</label>\n                  <input style=\"width:80%;margin-left:43px\" type=\"text\" class=\"form-control\" id=\"Email1\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Email2\">Email 2</label>\n                  <input style=\"width:80%;margin-left:43px\" type=\"text\" class=\"form-control\" id=\"Email2\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Email3\">Email 3</label>\n                  <input style=\"width:80%;margin-left:43px\" type=\"text\" class=\"form-control\" id=\"Email3\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Sales Region\">Sales Region</label>\n                  <input style=\"width:80%\" type=\"text\" class=\"form-control\" id=\"Sales Region\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Ship Via\">Ship Via</label>\n                  <select id=\"Ship Via\" class=\"form-control\" style=\"width:80%;margin-left:38px\">\n                    <option selected>Choose...</option>\n                    <option>Admin</option>\n                    <option>Admin1</option>\n                    <option>Admin2</option>\n                    <option>Admin3</option>\n                    <option>Admin4</option>\n                  </select>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Card No\">Card No</label>\n                  <input style=\"width:40%\" type=\"text\" class=\"form-control\" id=\"Card No\">\n\n                  <label style=\"margin-left:22px\" for=\"Expiry Date\">Expiry Date</label>\n                  <input style=\"width:30%\" type=\"date\" class=\"form-control\" id=\"Expiry Date\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:5px\">\n                  <label for=\"Sales Rep Initials\">Sales Rep Initials</label>\n                  <input style=\"width:20%\" type=\"text\" class=\"form-control\" id=\"Sales Rep Initials\">\n\n                  <label style=\"margin-left:10px\" for=\"Expiry Date\">Credit Limit</label>\n                  <input style=\"width:40%\" type=\"text\" class=\"form-control\" id=\"Credit Limit\">\n                </div>\n              </div>\n\n            </div>\n            <div class=\"form-inline\">\n              <label for=\"Notes\">Notes</label>\n              <textarea style=\"width: 90%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Notes\" rows=\"2\"></textarea>\n            </div>\n          </form>\n        </ng-template>\n      </ng-container>\n\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Customer Preferences</a>\n        <ng-template ngbNavContent>\n          <!--<nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">-->\n          <!--<ng-container ngbNavItem style=\"margin-left:20px\">\n            <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lock Formulations</a>\n            <ng-template ngbNavContent>\n              <p>data4</p>\n            </ng-template>\n          </ng-container>-->\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n          <ng-template #innerTabset class=\"nav-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Raw Materials\">\n                <ng-template ngbTabContent>\n                  <div class=\" form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Item #</th>\n                            <th scope=\"col\">INCI Name</th>\n                            <th scope=\"col\">Usage %</th>\n                            <th scope=\"col\">Field of Application</th>\n                            <th scope=\"col\">comments</th>\n                            <th scope=\"col\">Banned</th>\n\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n                    </div>\n\n                  </div>\n                </ng-template>\n              </ngb-tab>\n\n\n              <ngb-tab title=\"Filling/Packing Instructions\">\n                <ng-template ngbTabContent>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <label for=\"Filling/packing \" style=\"margin-left:10px;\">Filling/packing Instructions</label>\n\n                    <textarea style=\"width: 60%;margin-left:58px\" type=\"text\" class=\"form-control\" id=\"Filling/packing \" rows=\"10\"></textarea>\n                  </div>\n                  <div class=\"form-inline\">\n                    <label for=\"Browse1\" style=\"margin-left:10px\">Browse</label>\n\n                    <input style=\"width:60%;margin-left:200px\" type=\"text\" class=\"form-control\" id=\"Browse1\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:5px\">\n                    <label for=\"Browse2\" style=\"margin-left:10px\">Browse</label>\n\n                    <input style=\"width:60%;margin-left:200px\" type=\"text\" class=\"form-control\" id=\"Browse2\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Labeling Instructions\">\n                <ng-template ngbTabContent>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <label for=\"Labeling Instructions\" style=\"margin-left:10px;\">Labeling Instructions</label>\n\n                    <textarea style=\"width: 60%;margin-left:58px\" type=\"text\" class=\"form-control\" id=\"Labeling Instructions\" rows=\"10\"></textarea>\n                  </div>\n                  <div class=\"form-inline\">\n                    <label for=\"Browse1\" style=\"margin-left:10px\">Browse</label>\n\n                    <input style=\"width:60%;margin-left:153px\" type=\"text\" class=\"form-control\" id=\"Browse1\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Special Instructions\">\n                <ng-template ngbTabContent>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <label for=\"Special Instructions\" style=\"margin-left:10px;\">Special Instructions</label>\n\n                    <textarea style=\"width: 60%;margin-left:58px\" type=\"text\" class=\"form-control\" id=\"Special Instructions\" rows=\"10\"></textarea>\n                  </div>\n                  <div class=\"form-inline\">\n                    <label for=\"Browse1\" style=\"margin-left:10px\">Browse</label>\n\n                    <input style=\"width:60%;margin-left:145px\" type=\"text\" class=\"form-control\" id=\"Browse1\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Additional Documents\">\n                <ng-template ngbTabContent>\n                  <form>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col-md-12\">\n                        <fieldset class=\"border p-2\">\n                          <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:Black\">Browse Files</legend>\n                          <div class=\"form-inline\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data2\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data3\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data4\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data5\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data6\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data7\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data8\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:10px\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data9\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                          <div class=\"form-inline\" style=\"margin-top:.5em\">\n                            <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data10\">\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                          </div>\n                        </fieldset>\n                      </div>\n\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </ng-template>\n          <!--</nav>-->\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Shipping Location</a>\n        <ng-template ngbNavContent>\n          <div class=\" form-row\">\n            <div class=\"form-group col-md-12\">\n              <table class=\"table table-hover table-striped\" height=\"300px\" style=\"background-color: white\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Client/Location</th>\n                    <th scope=\"col\">Address</th>\n                    <th scope=\"col\">City</th>\n                    <th scope=\"col\">State</th>\n                    <th scope=\"col\">Country</th>\n                    <th scope=\"col\">Zipcode</th>\n                    <th scope=\"col\">Default</th>\n\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </div>\n          <div class=\" form-row\">\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Location\">Location</label>\n                <input style=\"width:80%;margin-left:4em\" type=\"text\" class=\"form-control\" id=\"Location\">\n              </div>\n              <div class=\"form-inline\">\n                <label for=\"address\" style=\"margin-left:10px\">Address</label>\n\n                <textarea style=\"width: 80%;margin-left:58px\" type=\"text\" class=\"form-control\" id=\"address\" rows=\"2\"></textarea>\n              </div>\n\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Telephone\">Telephone</label>\n                <input style=\"width:80%;margin-left:53px\" type=\"text\" class=\"form-control\" id=\"Telephone\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Fax\">Fax</label>\n                <input style=\"width:80%;margin-left:102px\" type=\"text\" class=\"form-control\" id=\"Fax\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Contact Person \">Contact Person </label>\n                <input style=\"width:80%\" type=\"text\" class=\"form-control\" id=\"Contact Person 1\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;margin-top:40px; height:50px;\">Delete Client Location</button>\n\n            </div>\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"City\">City</label>\n                <input style=\"width:80%;margin-left:70px\" type=\"text\" class=\"form-control\" id=\"City\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"State\">State</label>\n                <input style=\"width:80%;margin-left:70px\" type=\"text\" class=\"form-control\" id=\"state\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Zipcode\">Zip Code</label>\n                <input style=\"width:80%;margin-left:33px\" type=\"text\" class=\"form-control\" id=\"Zipcode\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Country\">Country</label>\n                <input style=\"width:80%;margin-left:33px\" type=\"text\" class=\"form-control\" id=\"Country\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Email\">Email</label>\n                <input style=\"width:80%;margin-left:55px\" type=\"text\" class=\"form-control\" id=\"Email\">\n              </div>\n              <div class=\"form-inline\" style=\"margin-top:5px\">\n                <label for=\"Email1\">Contact #</label>\n                <input style=\"width:80%;margin-left:43px\" type=\"text\" class=\"form-control\" id=\"Email1\">\n              </div>\n            \n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Add Client Location</button>\n\n            </div>\n          </div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>ERP Products/COA Expiry Dates</a>\n        <ng-template ngbNavContent>\n          <div class=\" form-row\">\n            <div class=\"form-group col-md-12\">\n              <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Product Code</th>\n                    <th scope=\"col\">Product Name</th>\n                    <th scope=\"col\">Formula Code</th>\n                    <th scope=\"col\">Formula Name</th>\n                    <th scope=\"col\">COA Expiry Date Format</th>\n                  \n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                </tbody>\n              </table>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n            </div>\n\n          </div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Pricing</a>\n        <ng-template ngbNavContent>\n          <!--<nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">-->\n          <!--<ng-container ngbNavItem style=\"margin-left:20px\">\n            <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lock Formulations</a>\n            <ng-template ngbNavContent>\n              <p>data4</p>\n            </ng-template>\n          </ng-container>-->\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n          <ng-template #innerTabset class=\"nav-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Retail/Wholesale\">\n                <ng-template ngbTabContent>\n                  <div class=\" form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Product #</th>\n                            <th scope=\"col\">Product Name</th>\n                            <th scope=\"col\">Unit Size</th>\n                            <th scope=\"col\">Unit</th>\n                            <th scope=\"col\">Retail $ Price/Unit</th>\n                            <th scope=\"col\">Distributor $ Price/Unit</th>\n                            <th scope=\"col\"> Sole Distributor $ Price/Unit</th>\n                            <th scope=\"col\"> Wholesale $ Price/Unit</th>\n\n\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n                    </div>\n\n                  </div>\n                </ng-template>\n              </ngb-tab>\n\n\n              <ngb-tab title=\"Tiered Volume Pricing Entry\">\n                <ng-template ngbTabContent>\n                  <div class=\" form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <div class=\"form-inline\" style=\"margin-top:5px\">\n                        <label for=\"Email3\">Enter No.of Units</label>\n                        <label for=\"Tier1\" style=\"margin-left:43px\">Tier 1</label>\n                        <input style=\"width:10%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Email3\">\n                        <label for=\"Tier1\" style=\"margin-left:43px\">Tier 2</label>\n                        <input style=\"width:10%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Email3\">\n                        <label for=\"Tier1\" style=\"margin-left: 43px\">Tier 3</label>\n                        <input style=\"width:10%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Email3\">\n                        <label for=\"Tier1\" style=\"margin-left:43px\">Tier 4</label>\n                        <input style=\"width:10%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Email3\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:30px;height:50px; width:70px\">Ok</button>\n                      </div>\n                      <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Tier 1</th>\n                            <th scope=\"col\">Tier 2</th>\n                            <th scope=\"col\">Tier 3</th>\n                            <th scope=\"col\">Tier 4</th>\n\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Tier Range</button>\n\n                      <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Product #</th>\n                            <th scope=\"col\">Product Name</th>\n                            <th scope=\"col\">Unit Size</th>\n                            <th scope=\"col\">Unit</th>\n                            <th scope=\"col\">Tier 1</th>\n                            <th scope=\"col\">Tier 2</th>\n                            <th scope=\"col\">Tier 3</th>\n                            <th scope=\"col\">Tier 4</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n                    </div>\n                    </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Tiered Volume Pricing Listing\">\n                <ng-template ngbTabContent>\n                  <div class=\" form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Tier 1</th>\n                            <th scope=\"col\">Tier 2</th>\n                            <th scope=\"col\">Tier 3</th>\n                            <th scope=\"col\">Tier 4</th>\n                           \n\n\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Expand All</button>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Collapse All</button>\n                    </div>\n\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </ng-template>\n          <!--</nav>-->\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Validated OTC Batch Sizes</a>\n        <ng-template ngbNavContent>\n          <div class=\" form-row\">\n            <div class=\"form-group col-md-12\">\n              <p style=\"color:maroon\">Validation Batches are commercial scale batches that are manufactured consecutively in order to validate a process according to a validation protocol that was developed and authorized </p>\n              <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Product #</th>\n                    <th scope=\"col\">Product Name</th>\n                    <th scope=\"col\">Validated Batch Size</th>\n                    <th scope=\"col\">Unit</th>\n\n\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                </tbody>\n              </table>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n            </div>\n\n          </div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Audit Trail</a>\n        <ng-template ngbNavContent>\n          <div class=\" form-row\">\n            <div class=\"form-group col-md-12\">\n             \n              <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Date</th>\n                    <th scope=\"col\">Task</th>\n                    <th scope=\"col\">Username</th>\n                   \n\n\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                  <tr>\n                  </tr>\n                </tbody>\n              </table>\n             \n            </div>\n\n          </div>\n        </ng-template>\n      </ng-container>\n\n    </nav>\n\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n    </div>\n    <div class=\"form-row\" style=\"background-color:white\">\n      <div style=\"margin-left:20px;margin-top:20px\" class=\"form-group \">\n        <div class=\"form-inline\">\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:50px;height:50px;\">Import customer Preferences</button>\n\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;\">Print Preview</button>\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;\">Delete</button>\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;\">New</button>\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;\">Save</button>\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;\" [routerLink]=\"'/PDRManagement'\">Back</button>\n\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align:center\">Sales Person</h2>\n    <fieldset class=\"border p-2\">\n\n      <div class=\"row\" style=\"margin-top:5px;\">\n        <div class=\"form-group col-md-6\">\n          <div class=\"form-inline\" style=\"margin-top:5px\">\n            <!--<label for=\"Location\">Location</label>-->\n            <input style=\"width:80%; margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"FirstName\" placeholder=\"FirstName\">\n          </div>\n          <div class=\"form-inline\">\n            <!--<label for=\"address\" style=\"margin-left:10px;\">Address</label>-->\n\n            <input style=\"margin-top: 5px;width:80%; margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"Contact #\" placeholder=\"Contact #\">\n          </div>\n\n          <div class=\"form-inline\" style=\"margin-top:5px\">\n            <!--<label for=\"Telephone\">Telephone</label>-->\n            <input style=\"width:80%; margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"Region\" placeholder=\"Region\">\n          </div>\n\n        </div>\n        <div class=\"form-group col-md-6\">\n          <div class=\"form-inline\" style=\"margin-top:5px\">\n            <!--<label for=\"City\">City</label>-->\n            <input style=\"width:80%;margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"LastName\" placeholder=\"LastName\">\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:5px\">\n            <!--<label for=\"State\">State</label>-->\n            <input style=\"width:80%;margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"E-Mail\" placeholder=\"E-Mail\">\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:5px\">\n            <!--<label for=\"Zipcode\">Zip Code</label>-->\n            <input style=\"width:80%;margin-left: 4em\" type=\"text\" class=\"form-control\" id=\"Sales Rep Initial\" placeholder=\"Sales Rep Initial\">\n          </div>\n\n\n\n        </div>\n      </div>\n    </fieldset>\n    <p style=\"color:maroon\">Click to Edit the value in Grid</p>\n    <div class=\" form-row\">\n      <div class=\"form-group col-md-12\">\n\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Sales Rep Initial</th>\n\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Contact #</th>\n              <th scope=\"col\">Contact Email</th>\n              <th scope=\"col\">Region</th>\n\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Back </button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Save </button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Delete</button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>New</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align:center\">Search Customer</h2>\n    <fieldset class=\"border p-2\">\n      <legend class=\"w-auto\" style=\"font-size:15px;color:dimgrey\">Search</legend>\n      <div class=\"row\" style=\"margin-top:5px;\">\n        <div class=\"row-col-sm-12 \" style=\"margin-left: 20px\">\n          <div class=\"form-inline\">\n            <label for=\"customer Key\" style=\"margin-left:10px\">Customer key</label>\n            <input style=\"width:500px;margin-left:30px\" type=\"text\" class=\"form-control\" id=\"PDR #\">\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Quick Save</button>\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:10px\">\n            <label for=\"Customer name\" style=\"margin-left:10px\">Customer Name</label>\n            <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <p style=\"color:maroon\">Make your selection by double clicking on your choice</p>\n    <div class=\" form-row\">\n      <div class=\"form-group col-md-12\">\n\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Customer Key</th>\n\n              <th scope=\"col\">Customer Name</th>\n\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-right:10px;height:50px;float:right;\" matDialogClose>Back </button>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align:center\">Term Master</h2>\n    <fieldset class=\"border p-2\">\n\n      <div class=\"row\" style=\"margin-top:5px;\">\n        <div class=\"row-col-sm-12 \" style=\"margin-left: 20px\">\n          <div class=\"form-inline\">\n            <label for=\"customer Key\" style=\"margin-left:10px\">Term Code</label>\n            <input style=\"width:31.25em;margin-left:1.875em\" type=\"text\" class=\"form-control\" id=\"PDR #\">\n\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:10px\">\n            <label for=\"Customer name\" style=\"margin-left:10px\">Terms</label>\n            <input style=\"width:31.25em;margin-left:3.75em\" type=\"text\" class=\"form-control\" id=\"Project Name\">\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <p style=\"color:maroon\">Click to Edit the value in Grid</p>\n    <div class=\" form-row\">\n      <div class=\"form-group col-md-12\">\n\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Term code</th>\n\n              <th scope=\"col\">Terms</th>\n\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Back </button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Save </button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>Delete</button>\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"height:50px;width:110px;float:right;margin-right:5px\" matDialogClose>New</button>\n\n\n\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/pdr-management.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/pdr-management.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top: 5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; margin-left:300px\">Project/PDR</h2>\n\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1\">\n      <label for=\"PRD\" style=\"margin-left: 80px;\">PDR</label>\n      <input type=\"text\" style=\"margin-left: 10px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"PDR\" size=\"40\">\n      <label for=\"PDR Date\" style=\"margin-left:10px;\">PDR Date</label>\n      <input type=\"date\" style=\"margin-left:10px\" class=\"form-control\" id=\"PDR Date\" name=\"PDR Date\">\n      <input type=\"date\" style=\"margin-left:10px\" class=\"form-control\" id=\"PDR Date\" name=\"PDR Date\" placeholder=\"Enter PDR date\" />\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:50px;width:90px;\" (click)=\"opensearchprojectpdr()\">Search</button>\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n    </form>\n    <form class=\"form-inline\">\n      <label for=\"project_name\" style=\"margin-left: 25px;margin-top: 10px;\">Project Name</label>\n      <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px\" class=\"form-control\" placeholder=\"Enter Project Name\" id=\"project_name\" size=\"96\">\n\n    </form>\n\n    new design\n\n    <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs scrolling-wrapper\">\n      <ng-container ngbNavItem style=\"margin-left:20px\">\n\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>General</a>\n        <ng-template ngbNavContent>\n          <form>\n\n            <div class=\"form-row\">\n              <div style=\"margin-left:100px\" class=\"form-group col-md-12\">\n                <label for=\"inputcust\" style=\"padding-top: 10px;\">Customer</label>\n                <div class=\"form-inline\">\n                  <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"inputcust\" placeholder=\"Customer Name\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\" (click)=\"opencustomersearchpdr()\">Search</button>\n\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:150px;\" [routerLink]=\"'/addcustomer'\">Add Customer</button>\n\n                </div>\n              </div>\n              <div style=\"margin-left:100px\" class=\"form-group col-md-6\">\n                <label for=\"inputclass\">Class</label>\n                <input style=\"width:600px;\" type=\"text\" class=\"form-control\" id=\"inputclass\" placeholder=\"Class\">\n              </div>\n            </div>\n            <div class=\"form-row\" style=\"  \">\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"Assigned_to\">Assigned to</label>\n                <select id=\"Assigned_to\" class=\"form-control\" style=\"width:600px;\">\n                  <option selected>Choose...</option>\n                  <option>Admin</option>\n                  <option>Admin1</option>\n                  <option>Admin2</option>\n                  <option>Admin3</option>\n                  <option>Admin4</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"inputStatus\">Status</label>\n                <select id=\"inputStatus\" class=\"form-control\" style=\"width:600px;\">\n                  <option selected>Choose...</option>\n                  <option>WIP-Initiated</option>\n                  <option>WIP-Under Development</option>\n                  <option>WIP-Primary Testing</option>\n                  <option>WIP-Secondary Testing</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"PDR startDate\">Start Date</label>\n                <input type=\"date\" style=\"width:600px;\" class=\"form-control\" id=\"PDR startDate\" name=\"PDR Date\">\n              </div>\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"PDR endDate\">End Date</label>\n                <input type=\"date\" class=\"form-control\" style=\"width:600px;\" id=\"PDR endDate\" name=\"PDR Date\">\n              </div>\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"details\">Details</label>\n                <textarea id=\"details\" style=\"width:600px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"3\"></textarea>\n              </div>\n              <div style=\"margin-left:100px\" class=\"form-group col-md-6\">\n                <label for=\"revenue_potential\">Revenue Potential Productized $</label>\n                <input style=\"width:600px;\" type=\"text\" class=\"form-control\" id=\"revenue_potential\" placeholder=\"Revenue Potential Productized\">\n              </div>\n              <div class=\"form-group col-md-6\" style=\"margin-left:100px\">\n                <label for=\"inputpriority\">Priority</label>\n                <select id=\"inputpriority\" class=\"form-control\" style=\"width:600px;\">\n                  <option selected>Choose...</option>\n                  <option>Low</option>\n                  <option>Medium</option>\n                  <option>High</option>\n                  <option>Very High</option>\n                </select>\n              </div>\n\n            </div>\n\n          </form>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Req's & Results</a>\n        <ng-template ngbNavContent>\n          <form>\n            <div class=\"form-row\" style=\" \">\n              <div class=\"form-group col-md-6\" style=\"    margin-left: 100px;\">\n                <label for=\"data_requirements\">Requirements</label>\n                <textarea id=\"data_requirements\" style=\"width:600px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\n              </div>\n              <div class=\"form-group col-md-6\" style=\"    margin-left: 100px;\">\n                <label for=\"data_results\">Results</label>\n                <textarea id=\"data_results\" style=\"width:600px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Product Dev Brief</a>\n        <ng-template ngbNavContent>\n\n\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n          <ng-template #innerTabset class=\"nav-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Background Information,Packaging & Specification\">\n                <ng-template ngbTabContent>\n                  <form>\n\n                    <fieldset class=\"border p-2\">\n                      <legend class=\"w-auto\" style=\"font-size:15px;color:maroon\">Background Information</legend>\n                      <div class=\"row\" style=\"margin-top:5px;\">\n                        <div class=\"row-col-sm-6 \" style=\"margin-left: 20px\">\n                          <label for=\"Current Product or new\" style=\"margin-left:10px\">Current Product or new</label>\n                          <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Product or new\">\n                        </div>\n\n                        <div class=\" row-col-sm-6 \">\n                          <label for=\"Intended End market\" style=\"margin-left:10px\">Intended End market</label>\n                          <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                        </div>\n                      </div>\n\n                      <label for=\"Estimated Annual \" style=\"margin-left: 10px\">Estimated Annual Volume?</label>\n                      <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n\n\n                      <div class=\"form-row\">\n                        <div class=\" form-group col-md-6 \" style=\"    margin-top: 10px;   \">\n                          <label for=\"Countries will\" style=\"margin-left: 10px\">Countries will product be distributed in?</label>\n                          <textarea id=\"data_resultsta\" style=\"width:80%;margin-left:10px\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\n                        </div>\n                        <div class=\"form-group col-md-6\" style=\"    margin-top: 10px\">\n                          <label for=\">Product Description\" style=\"margin-left: 10px\">Product Description</label>\n                          <textarea id=\">Product Descriptionta\" style=\"width:80%;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\n                        </div>\n                      </div>\n                    </fieldset>\n                    <div class=\"form-row\" style=\"margin-top:5px;\">\n                      <div class=\"form-group col-md-6\">\n                        <fieldset class=\"border p-2\">\n\n                          <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Packaging & Specifications</legend>\n                          <div class=\"form-row\" style=\"margin-top:5px;\">\n                            <div class=\"form-group col-md-6\">\n                              <fieldset class=\"border p-2\">\n\n                                <legend class=\"w-auto\" style=\"font-size:15px;color:black\">Sizes(s)</legend>\n                                <div class=\"form-inline\">\n                                  <input style=\"width:50px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  <label for=\"Countries will\" style=\"margin-left: 10px\">ounces</label>\n                                  <input style=\"width:50px;margin-left:20px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  <label for=\"Countries will\" style=\"margin-left: 10px\">Gallons</label>\n                                </div>\n                                <div class=\"form-inline\">\n                                  <input style=\"width:50px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  <label for=\"Countries will\" style=\"margin-left: 10px\">ounces</label>\n                                  <input style=\"width:50px;margin-left:20px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  <label for=\"Countries will\" style=\"margin-left: 10px\">Bulk Only </label>\n                                </div>\n                                <div class=\"form-inline\">\n                                  <input style=\"width:50px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  <label for=\"Countries will\" style=\"margin-left: 10px\">ounces</label>\n                                </div>\n                              </fieldset>\n                            </div>\n                            <div class=\" form-group col-md-6\">\n                              <fieldset class=\"border p-2\">\n\n                                <legend class=\"w-auto\" style=\"font-size:15px;color:black\">Type:</legend>\n                                <div class=\"form-inline form-row\">\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">Bottle</label>\n                                  </div>\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck2\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">Packet</label>\n                                  </div>\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck3\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">stick</label>\n                                  </div>\n                                </div>\n                                <div class=\"form-inline form-row\" style=\"margin-top:14px\">\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck4\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">Jar</label>\n                                  </div>\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck5\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">Wand</label>\n                                  </div>\n                                  <div class=\"form-group col-md-4\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck6\">\n                                    <label class=\"form-check-label\" for=\"defaultCheck1\">Tube</label>\n                                  </div>\n                                </div>\n\n                                <div class=\"form-inline form-row\" style=\"margin-top:20px\">\n                                  <div class=\"form-group col-md-12\">\n                                    <label for=\"Countries will\" style=\"margin-left: 10px\">Other</label>\n                                    <input style=\"width:auto;margin-left:10px;margin-bottom:5px\" type=\"text\" class=\"form-control\" id=\"Current Intended End market\">\n                                  </div>\n                                </div>\n                              </fieldset>\n                            </div>\n                          </div>\n\n                        </fieldset>\n                      </div>\n                      <div class=\" form-group col-md-6\">\n                        <fieldset class=\"border p-2\">\n\n                          <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Special Notes / Requirements</legend>\n                          <div class=\"form-inline form-row\">\n                            <div class=\"form-group col-md-12\">\n                              <textarea id=\">Product Descriptionta\" style=\"width:700px;margin-top:4px\" class=\"form-control md-textarea\" size=\"8\" rows=\"8\"></textarea>\n                            </div>\n                          </div>\n                        </fieldset>\n                      </div>\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n\n\n\n              <ngb-tab title=\"Formulation-Info\">\n                <ng-template ngbTabContent>\n                  <form>\n                    <div class=\"form-inline\">\n                      <label for=\"Product Concept\">Product Concept_Marketing Positioning</label>\n                      <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Product Concept\">\n                    </div>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Key Ingredients /Ingredient Requirements</legend>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"must_ingred\">Must Have Ingredients </label>\n                          <textarea id=\">must_ingred\" style=\"width:700px;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"ingred_Res\">Ingredient Restrictions/Banned List</label>\n                          <textarea id=\">ingred_Res\" style=\"width:700px;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-12\" style=\"margin-top:10px\">\n                          <label for=\"Desired Third\">Desired Third Party Cerification </label>\n                          <textarea id=\">Desired Third\" style=\"width:60%;margin-top:4px;margin-left:10px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                    </fieldset>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Desired Marketing Claims(Please List Everything you want to claim on packaging and in marketing materials)</legend>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-12\">\n\n                          <textarea id=\"must_ingred\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n\n                      </div>\n\n                    </fieldset>\n                    <fieldset class=\"border p-2\" style=\"margin-top:5px\">\n\n\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <div class=\"form-inline\">\n                            <label for=\"Scent\">Scent</label>\n                            <input style=\"width:500px;margin-left:85px\" type=\"text\" class=\"form-control\" id=\"Scent\">\n                          </div>\n                          <div class=\"form-inline\">\n                            <label for=\"Brand Supplied\">Brand Supplied?</label>\n                            <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Brand Supplied\">\n                          </div>\n                          <div class=\"form-inline\">\n                            <label for=\"Texture\">Texture</label>\n                            <input style=\"width:500px;margin-left:73px\" type=\"text\" class=\"form-control\" id=\"Texture\">\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                          <div class=\"form-inline\">\n                            <label for=\"Color\">Color</label>\n                            <input style=\"width:500px;margin-left:195px;\" type=\"text\" class=\"form-control\" id=\"Color\">\n                          </div>\n                          <div class=\"form-inline\">\n                            <label for=\"Color Ingr\">Any Color Ingredient Restriction</label>\n                            <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Color Ingr\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                    </fieldset>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Formulation Addl-Info\">\n                <ng-template ngbTabContent>\n                  <form>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Performance Requirements & Benchmarks</legend>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"Benchmarks\">Benchmarks</label>\n                          <textarea id=\"Benchmarks\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"Competitive Prod\">Competitive Products(if any)</label>\n                          <textarea id=\"Competitive Prod\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n\n                    </fieldset>\n                    <div class=\"form-inline form-row\">\n                      <div class=\"form-group col-md-6\">\n                        <fieldset class=\"border p-2\" style=\"width:100%\">\n\n                          <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Development Notes(Additional Information)</legend>\n                          <textarea id=\"Development Notes\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </fieldset>\n                      </div>\n                      <div class=\"form-group col-md-6\">\n                        <fieldset class=\"border p-2\" style=\"width:100%\">\n\n                          <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Sample Requirements</legend>\n\n                          <textarea id=\"Sample Req\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </fieldset>\n                      </div>\n                    </div>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Target Cost For Manufacturing and Filling(Does not include packaging)</legend>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-12\">\n\n                          <textarea id=\"Target Cost\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"3\"></textarea>\n                        </div>\n\n                      </div>\n\n                    </fieldset>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Product claims\">\n                <ng-template ngbTabContent>\n                  <form>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:maroon\">Product Claims</legend>\n                      <div class=\"form-inline form-row\">\n                        <div class=\"form-group col-md-12\">\n\n                          <textarea id=\"Product Claims\" style=\"width:100%;margin-top:4px\" class=\"form-control md-textarea\" size=\"6\" rows=\"10\"></textarea>\n                        </div>\n\n                      </div>\n\n                    </fieldset>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Safety Tests\">\n                <ng-template ngbTabContent>\n                  <form>\n                    <fieldset class=\"border p-2\">\n\n                      <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:Black\">Safety Tests</legend>\n                      <div class=\" form-row\">\n                        <div class=\"form-group col-md-12\">\n                          <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n                            <thead>\n                              <tr>\n                                <th scope=\"col\">Test Name</th>\n                                <th scope=\"col\">Description</th>\n                                <th scope=\"col\">Comments</th>\n\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                              </tr>\n                              <tr>\n                              </tr>\n                              <tr>\n                              </tr>\n                            </tbody>\n                          </table>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Insert Row</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Delete Row</button>\n                        </div>\n\n                      </div>\n\n                    </fieldset>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </ng-template>\n\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assigning Users</a>\n        <ng-template ngbNavContent>\n          <div class=\"row\" style=\"margin-bottom:10px\">\n            <div class=\"col-sm-6\">\n\n\n\n              <div class=\"card\" style=\"margin-left: 30px;\">\n                <div class=\"card-body\" style=\"width: 40rem;height:30rem;overflow-y:auto\">\n                  <div>\n                    <form>\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Admin\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        George\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Kathy\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Paul\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Lalu\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Hari\n                      </label><br />\n                      <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                      <label class=\"form-check-label\" for=\"flexCheckChecked\" style=\"margin-left:10px;\">\n                        Pinto\n                      </label><br />\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\" style=\"margin-left: 50%;bottom:1%;margin-top:20px; \">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Select All </button>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:130px;\">Deselect All </button>\n            </div>\n          </div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>21CFR Part-11 Approver List</a>\n        <ng-template ngbNavContent>\n          <p>data5</p>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Stage-Gate Settings</a>\n        <ng-template ngbNavContent>\n          <div style=\"margin-top:15px;\">\n            <p><b>Overall Project Timeline.Begin:4/9/2021 End:7/7/2021 Duration:90 days</b></p>\n          </div>\n          <div class=\"center\" style=\"overflow-x:auto;\">\n            <table class=\"table table-hover table-bordered\" style=\"margin-left:10px; background-color:white;\">\n              <thead>\n                <tr>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">#</th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Task </th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Tentative st.Date </th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Tentative End Date</th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Duration(Days)</th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Primary User </th>\n                  <th scope=\"col\" style=\"background-color:#cdd0d1\">Secondary User</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr style=\"\">\n                  <th scope=\"row\">1</th>\n                  <td style=\"background-color: #d8e7eb; color:black;\">PDR Creation</td>\n                  <td style=\"background-color: #d8e7eb;\">\n                    <input type=\"date\" style=\" height:0px;\n                  border: none;\n                  background-color: #d8e7eb;\n                  box-shadow: none;\n                 outline: none;\n                 \" id=\"PDR Date\" name=\"PDR Date\" placeholder=\"Enter PDR date\" />\n                  </td>\n                  <td style=\"background-color: #d8e7eb;\">\n                    <input type=\"date\" style=\" height:0px;   box-sizing: border-box;\n                 border: none;\n                 box-shadow: none;\n                 background-color: #d8e7eb;\n                 outline: none;\n                  \" id=\"PDR Date\" name=\"PDR Date\" placeholder=\"Enter PDR date\" />\n                  </td>\n                  <td style=\"background-color: #d8e7eb;\">7</td>\n                  <td style=\"background-color: #d8e7eb;\">\n                    <select id=\"Assigned_to\" style=\"\n                   border: none;\n                   background-color: #d8e7eb;\n                   box-shadow: none;\n                   outline: none;\n                   \">\n                      <option selected>Choose...</option>\n                      <option>Admin</option>\n                      <option>Admin1</option>\n                      <option>Admin2</option>\n                      <option>Admin3</option>\n                      <option>Admin4</option>\n                    </select>\n                  </td>\n                  <td style=\"background-color: #d8e7eb;\">\n                    <select id=\"Assigned_to\" style=\"\n                    background-color: #d8e7eb;\n                    border: none;\n                    box-shadow: none;\n                    outline: none;\n                    \">\n                      <option selected>Choose...</option>\n                      <option>Admin</option>\n                      <option>Admin1</option>\n                      <option>Admin2</option>\n                      <option>Admin3</option>\n                      <option>Admin4</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td style=\"color:red;\">PDR Approval</td>\n                  <td>Charlie Brown</td>\n                  <td>05/16/13</td>\n                  <td>2013-2035</td>\n                  <td>CC-6034</td>\n                  <td>CC Fall-Dirty Blue</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td style=\"color:black; background-color:#d8e7eb\">Formula Creation</td>\n                  <td style=\"background-color:#d8e7eb\">Celeste Gly-VAK</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">09/24/11</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">S2003</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak-1122</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">4</th>\n                  <td>QC Tests Approvals </td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">5</th>\n                  <td>Product Test Approvals</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">6</th>\n                  <td>Stability Test Approvals</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">7</th>\n                  <td>COA Test Approvals</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">8</th>\n                  <td style=\"color:red;\">Regulatory Approvals/Rejection</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n\n                </tr>\n                <tr>\n                  <th scope=\"row\">9</th>\n                  <td>IL(Label) Approval</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n\n                </tr>\n                <tr>\n                  <th scope=\"row\">10</th>\n                  <td>Formula Procedure Approval</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">11</th>\n                  <td style=\"color:red;\">Formula Approval/Rejection</td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">12</th>\n                  <td style=\"color:black;background-color:#d8e7eb\">Sample Creation</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Celeste Gly-VAK</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">09/24/11</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">S2003</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak-1122</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">13</th>\n                  <td style=\"color:red;\">Sample Approval/Rejection </td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">14</th>\n                  <td style=\"color:black;background-color:#d8e7eb\">Productization (to scale up&manufacture) </td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Celeste Gly-VAK</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">09/24/11</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">S2003</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak-1122</td>\n                  <td style=\"color:black; background-color:#d8e7eb\">Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">15</th>\n                  <td>PCC Approval </td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">16</th>\n                  <td>PIF Approval </td>\n                  <td>Celeste Gly-VAK</td>\n                  <td>09/24/11</td>\n                  <td>S2003</td>\n                  <td>Gly-Vak-1122</td>\n                  <td>Gly-Vak.Ver 02</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Documents</a>\n        <ng-template ngbNavContent>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n                <fieldset class=\"border p-2\">\n                  <legend class=\"w-auto\" style=\"font-size:15px;padding:10px;color:Black\">Browse Files</legend>\n                  <div class=\"form-inline\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data2\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data3\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data4\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data5\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data6\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data7\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data8\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data9\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                  <div class=\"form-inline\" style=\"margin-top:10px\">\n                    <input style=\"width: 600px;\" type=\"text\" class=\"form-control\" id=\"data10\">\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Browse</button>\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Open</button>\n                  </div>\n                </fieldset>\n              </div>\n\n            </div>\n          </form>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assigned Formulations</a>\n        <ng-template ngbNavContent>\n          <p style=\"font-weight:bold\">List of Formulations Assigned ( Double Click to Go for More Details</p>\n          <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Formula Code</th>\n                <th scope=\"col\">Formula Name</th>\n                <th scope=\"col\">Lab Notebook #</th>\n                <th scope=\"col\">Submission #</th>\n                <th scope=\"col\">PDR Status</th>\n                <th scope=\"col\">Lab Status</th>\n                <th scope=\"col\">User Name</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n            </tbody>\n          </table>\n          <p class=\"fw-bold\" style=\"font-weight:bold\">List of Lab Batch Tickets and COA Trials ( Double click to  view COA Information )</p>\n          <table class=\"table table-hover table-striped\" style=\"height:300px;background-color:white\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Lab Batch</th>\n                <th scope=\"col\">Batch Date</th>\n                <th scope=\"col\">Quantity</th>\n                <th scope=\"col\">Unit</th>\n                <th scope=\"col\">COA Trial #</th>\n                <th scope=\"col\">User Name</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>products</a>\n        <ng-template ngbNavContent>\n          <label class=\"fw-bold\" style=\"font-weight:bold\">List of Products ( Double Click to Go for More Details )</label>\n          <table class=\"table table-hover\" style=\"height:300px;background-color:white\">\n            <thead>\n              <tr>\n\n\n\n                <th scope=\"col\">Formula Code</th>\n                <th scope=\"col\">Formula Name</th>\n                <th scope=\"col\">Submission Status</th>\n                <th scope=\"col\">Product #</th>\n                <th scope=\"col\">Product Name</th>\n\n\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Change Request</a>\n        <ng-template ngbNavContent>\n          <label style=\"font-weight:bold\">List of Changed Request ( Double Click to Go for More Details )</label>\n          <table class=\"table table-hover\" style=\"height:300px;background-color:white\">\n            <thead>\n              <tr>\n\n\n\n                <th scope=\"col\">Formula Code</th>\n                <th scope=\"col\">Formula Name</th>\n                <th scope=\"col\">CR#</th>\n                <th scope=\"col\">CR Reason</th>\n                <th scope=\"col\">User Name</th>\n\n\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Customer Communications</a>\n        <ng-template ngbNavContent>\n\n\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n          <ng-template #innerTabset class=\"nav-tabs\">\n            <ngb-tabset>\n              <ngb-tab class=\"\" title=\"Follow up Notes \">\n                <ng-template ngbTabContent>\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\n                    <thead>\n                      <tr>\n\n\n\n                        <th scope=\"col\">Date Time </th>\n                        <th scope=\"col\">Subject</th>\n                        <th scope=\"col\">Follow Up Notes</th>\n                        <th scope=\"col\">User Name</th>\n\n\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                      </tr>\n                      <tr>\n                      </tr>\n                      <tr>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <form>\n                    <div class=\" form-row\">\n                      <div class=\"form-group col-md-8\">\n                        <div class=\"form-inline\">\n                          <label for=\"inputbrowsefiles\" style=\"padding-top: 10px;font-family: Playfair Display\">Subject</label>\n                          <input style=\"width: 92%\" type=\"text\" class=\"form-control\" id=\"data1\">\n                        </div>\n                        <div class=\"form-inline\" style=\"margin-top:10px\">\n                          <label for=\"inputbrowsefiles\" style=\"padding-top: 10px;font-family: Playfair Display\">Notes</label>\n                          <textarea style=\"width: 92%\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"form-inline\">\n\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Add Customer</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Clear</button>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-top:15px;  margin-left:10px;height:50px;\">Delete Note</button>\n                      </div>\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n\n              <ngb-tab title=\"Communication Notes\">\n                <ng-template ngbTabContent>\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\n                    <thead>\n                      <tr>\n\n\n\n                        <th scope=\"col\">Date Time </th>\n                        <th scope=\"col\">Subject</th>\n                        <th scope=\"col\">Follow Up Notes</th>\n                        <th scope=\"col\">User Name</th>\n\n\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                      </tr>\n                      <tr>\n                      </tr>\n                      <tr>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <form>\n                    <div class=\" form-row\">\n                      <div class=\"form-group col-md-8\">\n                        <div class=\"form-inline\">\n                          <label for=\"inputbrowsefiles\" style=\"padding-top: 10px;font-family: Playfair Display\">Subject</label>\n                          <input style=\"width: 92%\" type=\"text\" class=\"form-control\" id=\"data1\">\n                        </div>\n                        <div class=\"form-inline\" style=\"margin-top:10px\">\n                          <label for=\"inputbrowsefiles\" style=\"padding-top: 10px;font-family: Playfair Display\">Notes</label>\n                          <textarea style=\"width: 92%\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"form-inline\">\n\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Add Customer</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;\">Clear</button>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-top:15px;  margin-left:10px;height:50px;\">Delete Note</button>\n                      </div>\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </ng-template>\n\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Specifications</a>\n        <ng-template ngbNavContent>\n          <form>\n            <div class=\"form-row\">\n              <div style=\"margin-left:100px\" class=\"form-group col-md-12\">\n\n                <div class=\"form-inline\" style=\"margin-left:85px;\">\n                  <h5>  pH   </h5>\n                  <input style=\"    margin-left: 10px;  width:80px\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 10px;\"> - </h5>\n                  <input style=\"    margin-left: 10px;  width: 80px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"margin-left:45px;\">Viscocity</h5>\n                  <input style=\"    margin-left: 10px; width: 80px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 10px;\"> - </h5>\n                  <input style=\"    margin-left: 10px; width: 80px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <input style=\"    margin-left: 10px; width: 85px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\" margin-left: 20px;\">Specific Gravity </h5>\n                  <input style=\"    margin-left: 10px; width: 80px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 10px;\"> - </h5>\n                  <input style=\"    margin-left: 10px; width: 80px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                </div>\n\n\n\n                <div class=\"form-inline\" style=\"margin-top:10px; margin-left:70px;\">\n                  <h5>  Odor   </h5>\n                  <input style=\"    margin-left: 10px;  width:185px\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 30px;\"> Apperence </h5>\n                  <input style=\"    margin-left: 10px;  width: 282px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"margin-left:110px;\">Color</h5>\n                  <input style=\"    margin-left: 10px; width: 190px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n\n\n\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:10px\">\n                  <h5> Visc.Method  </h5>\n                  <input style=\"    margin-left: 10px;  width:185px\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 25px;\"> Visc.Factor </h5>\n                  <input style=\"    margin-left: 10px;  width: 120px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\" margin-left: 10px;\">Time</h5>\n                  <input style=\"    margin-left: 10px; width: 100px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"margin-left:90px;\">Helipath</h5>\n                  <input style=\"margin-left:10px;\" type=\"radio\" />\n                  <h5>Yes</h5>\n                  <input style=\"margin-left:10px;\" type=\"radio\" />\n                  <h5>No</h5>\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:10px;margin-left:47px;\">\n                  <h5> Spindle  </h5>\n                  <input style=\"    margin-left: 10px;  width:185px\" type=\"text\" class=\"form-control\" id=\"data1\">\n                  <h5 style=\"    margin-left: 70px;\"> Speed </h5>\n                  <input style=\"    margin-left: 10px;  width: 120px;\" type=\"text\" class=\"form-control\" id=\"data1\">\n                </div>\n                <div class=\"form-inline\" style=\"margin-top:10px;margin-left:47px;\">\n                  <h5> Texture </h5>\n                  <input style=\"    margin-left: 10px;  width:500px\" type=\"text\" class=\"form-control\" id=\"data1\">\n                </div>\n\n\n\n                <div class=\"form-inline\" style=\"margin-top:10px;margin-left:17px;\">\n                  <h5> Comments </h5>\n                  <textarea style=\"    margin-left: 10px; height:40px; width:930px\" type=\"text\" class=\"form-control\" id=\"data1\">\n\n \n\n              </textarea>\n                </div>\n\n\n\n\n              </div>\n\n\n            </div>\n            <table class=\"table table-hover table-bordered\" style=\"height:300px;background-color:white\">\n              <thead>\n                <tr>\n                  <th scope=\"col\"> #</th>\n                  <th scope=\"col\"> Specification Param</th>\n                  <th scope=\"col\"> Value</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                </tr>\n                <tr>\n                </tr>\n                <tr>\n                </tr>\n              </tbody>\n            </table>\n\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"float:right;margin-right:30px; height:40px;width:300px;\">\n              Load Specification Parameter\n            </button>\n          </form>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Audit Tracking</a>\n        <ng-template ngbNavContent>\n          <table class=\"table table-hover\" style=\"height:300px;background-color:white\">\n            <thead>\n              <tr>\n                <th scope=\"col\" style=\"width:auto\">Date</th>\n                <th scope=\"col\" style=\"width:auto\">Task</th>\n                <th scope=\"col\" style=\"width:auto\">User Name</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1/4/2021</td>\n                <td>Password has been changed for Wstech technologies</td>\n                <td>Wstech Technologies</td>\n              </tr>\n              <tr>\n              </tr>\n              <tr>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ng-container>\n    </nav>\n\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n  </div>\n  <div class=\"form-row\" style=\" margin-bottom:80%;position:fixed\">\n    <div style=\"margin-left:20px;margin-top:20px\" class=\"form-group \">\n      <div class=\"form-inline\">\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:50px;height:50px;width:120px;\">Print Preview</button>\n        <input class=\"form-check-input\" style=\"margin-left:40px\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\n        <label class=\"form-check-label\" for=\"defaultCheck1\">\n          Approve Project\n        </label>\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:120px;\">Delete PDR</button>\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">New</button>\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Update</button>\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Back</button>\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; margin-left:300px\">Search Customer</h2>\n    <fieldset class=\"border p-2\">\n      <legend class=\"w-auto\" style=\"font-size:15px;color:dimgrey\">Search</legend>\n      <div class=\"row\" style=\"margin-top:5px;\">\n        <div class=\"row-col-sm-12 \" style=\"margin-left: 20px\">\n          <div class=\"form-inline\">\n            <label for=\"customer Key\" style=\"margin-left:10px\">Customer key</label>\n            <input style=\"width:500px;margin-left:30px\" type=\"text\" class=\"form-control\" id=\"PDR #\">\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:10px\">\n            <label for=\"Customer name\" style=\"margin-left:10px\">Customer Name</label>\n            <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <p style=\"color:maroon\">Make your selection by double clicking on your choice</p>\n    <div class=\" form-row\">\n      <div class=\"form-group col-md-12\">\n\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Customer Key</th>\n\n              <th scope=\"col\">Customer Name</th>\n\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-right:10px;height:50px;float:right;\" matDialogClose>Back </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-project-pdr/search-project-pdr.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-project-pdr/search-project-pdr.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    background-color: #f6f5f1\">\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\n\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; margin-left:300px\">Search Project</h2>\n    <fieldset class=\"border p-2\">\n      <legend class=\"w-auto\" style=\"font-size:15px;color:dimgrey\">Search</legend>\n      <div class=\"row\" style=\"margin-top:5px;\">\n        <div class=\"row-col-sm-12 \" style=\"margin-left: 20px\">\n          <div class=\"form-inline\">\n            <label for=\"PDR #\" style=\"margin-left:10px\">PDR #</label>\n            <input style=\"width:500px;margin-left:63px\" type=\"text\" class=\"form-control\" id=\"PDR #\">\n          </div>\n          <div class=\"form-inline\" style=\"margin-top:10px\">\n            <label for=\"Project Name\" style=\"margin-left:10px\">Project Name</label>\n            <input style=\"width:500px;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <p style=\"color:maroon\">Make your selection by double clicking on your choice</p>\n    <div class=\" form-row\">\n      <div class=\"form-group col-md-12\">\n\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\n          <thead>\n            <tr>\n              <th scope=\"col\">PDR #</th>\n              <th scope=\"col\">Project Name</th>\n              <th scope=\"col\">Customer Name</th>\n\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-right:10px;height:50px;float:right;\" matDialogClose>Back </button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"text-center\" style=\"background-color: #f6f5f1\">\r\n        <form class=\"form-inline text-center\" style=\"margin-bottom:20px;\">\r\n          <h2 style=\"margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\" text-center>SMART</h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Default Settings</h2>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <form>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-7\">\r\n            <label for=\"inputCompany Name\">Company Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany Name\" placeholder=\"Company Name\">\r\n            <label for=\"validationTextarea\">Address</label>\r\n            <textarea class=\"form-control\" id=\"validationTextarea\" placeholder=\"Address\"></textarea>\r\n            <label for=\"Phone Number\">Phone Number</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputPhone Number\" placeholder=\"Phone Number\">\r\n            <label for=\"Phone Number\">Fax</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputFax\" placeholder=\"Fax\">\r\n            <label for=\"Email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n            <label for=\"WebAddress\">Web Address</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputWebAddress\" placeholder=\"WebAddress\">\r\n            <div class=\"custom-file\" style=\"margin-top:30px\">\r\n              <input type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\r\n              <label class=\"custom-file-label\" for=\"validatedCustomFile\">Choose file...</label>\r\n              <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group col-md-5\">\r\n            <div class=\"text-center\" style=\"margin-top:130px;\">\r\n              <img src=\"../../../../assets/confidential red round stamp.jpg\" class=\"rounded\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5>Prefix Raw-Materials</h5>\r\n        <form>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <label for=\"inputPrefix\">Prefix</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPrefix\" placeholder=\"Prefix\">\r\n              <label for=\"inputPrefix\">Prefix Description</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPrefix\" placeholder=\"Prefix\">\r\n              <label for=\"inputSeperator\">Seperator</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPrefix\" placeholder=\":\" >\r\n              <label for=\"inputPrefix\">Numbering Starts From</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPrefix\" placeholder=\"1234567\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <div style=\"margin-left: 10px;\">\r\n                <label for=\"data_requirements\">List of All Prefix</label>\r\n                <textarea id=\"data_requirements\" style=\"width:280px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      \r\n        <div class=\"form-row\">\r\n          <div class=\"col\">\r\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"State\">-->\r\n          </div>\r\n          <div class=\"col\">\r\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Zip\">-->\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <form class=\"form-inline\">\r\n              <mat-dialog-actions>\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:180px;height:50px;width:80px;\">Save</button>\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:80px;\" matDialogClose>Back</button>\r\n              </mat-dialog-actions>\r\n            </form>\r\n          </div>\r\n\r\n        </div>\r\n      \r\n    </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-supplier.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-supplier.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\r\n    <div class=\"col-sm-12\">\r\n      <div style=\"background-color: #f6f5f1\">\r\n        <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n          <h2 style=\"margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Add Supplier</h2>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <form class=\"form-inline\" style=\"background-color: #f6f5f1;\">\r\n        <label for=\"PRD\" style=\"margin-left:80px;\">Supplier Key</label>\r\n        <input type=\"text\" style=\"margin-left: 25px;\" class=\"form-control\" placeholder=\"Enter Supplier Key\" id=\"Supplier Key\" size=\"60\"><br />\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:50px;width:210px;\" (click)=\"Searchsupplierpopup()\">Search Supplier</button><br />\r\n      </form>\r\n      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\r\n        <label for=\"PRD\" style=\"margin-left:80px;\">Supplier Name</label>\r\n        <input type=\"text\" style=\"margin-left: 10px;\" class=\"form-control\" placeholder=\"Enter Supplier Name\" id=\"Supplier Key\" size=\"60\"><br />\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">Clear</button>\r\n      </form>\r\n    </div>\r\n    <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs scrolling-wrapper\">\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Contact Details</a>\r\n        <ng-template ngbNavContent>\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"Address\">Address</label>\r\n                <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\" size=\"40\" style=\"width:650px;\"></textarea>\r\n                <label for=\"inputPassword4\">Country</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\">Phone Number</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\">Fax</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\">Contact Person</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\">Web Address</label>\r\n                <div class=\"form-inline\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">Go</button>\r\n                </div>\r\n                <label for=\"inputPassword4\">FOB</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputState\">Ship Via</label>\r\n                <select id=\"inputState\" class=\"form-control\" style=\"width:650px;\">\r\n                  <option selected>Choose...</option>\r\n                  <option>DHL</option>\r\n                  <option>Federal Express</option>\r\n                </select>\r\n                <label for=\"inputState\">Status</label>\r\n                <select id=\"inputState\" class=\"form-control\" style=\"width:650px;\">\r\n                  <option selected>Choose...</option>\r\n                  <option>Activate</option>\r\n                  <option>Inactivate</option>\r\n                </select>\r\n                <label for=\"inputEmail4\">Ship To</label>\r\n                <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\" style=\"width:650px;\"></textarea>\r\n                <div class=\"form-inline\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\r\n                  <label class=\"form-check-label\" for=\"gridCheck1\">\r\n                    Approve Supplier\r\n                  </label>\r\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\" disabled style=\"margin-left:10px;\">\r\n                  <label class=\"form-check-label\" for=\"gridCheck1\">\r\n                    Preferred Supplier\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">City</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">State</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Zip Code</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Distributor</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Email</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Contact #</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Terms</label>\r\n                <div class=\"form-inline\">\r\n                  <select id=\"inputState\" class=\"form-control\" style=\"width:650px;\">\r\n                    <option selected>Choose...</option>\r\n                    <option>No Terms</option>\r\n                    <option>Credit Card</option>\r\n                  </select>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">...</button>\r\n                </div>\r\n                <label for=\"inputPassword4\" style=\"margin-top: 10px;\">Expanse Account</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"\" style=\"width:650px;\">\r\n                <label for=\"inputEmail4\" style=\"margin-top:10px;\">Notes</label>\r\n                <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\" size=\"\" style=\"width:650px;\"></textarea>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Raw Material(s)</a>\r\n        <ng-template ngbNavContent>\r\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\r\n          <ng-template #innerTabset class=\"nav-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab class=\"\" title=\"All Raw Material(s)\">\r\n                <ng-template ngbTabContent>\r\n                  <h4>Double Click to Select a Raw Material</h4>\r\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Item # </th>\r\n                        <th scope=\"col\">INCI Name</th>\r\n                        <th scope=\"col\">Trade Name</th>\r\n                        <th scope=\"col\">Manufacturer</th>\r\n                        <th scope=\"col\">Supplier RM #</th>\r\n                        <th scope=\"col\">Cost $</th>\r\n                        <th scope=\"col\">Unit</th>\r\n                        <th scope=\"col\">Approved</th>\r\n                        <th scope=\"col\">Approved Code</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 400px; height: 50px; width: 190px;margin-top:10px;\" disabled>Select All</button>\r\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 190px;margin-top:10px;\" disabled>Delect All</button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Approved Raw Material(s)\">\r\n                <ng-template ngbTabContent>\r\n                  <h4>Double Click to Select a Raw Material</h4>\r\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Item # </th>\r\n                        <th scope=\"col\">INCI Name</th>\r\n                        <th scope=\"col\">Trade Name</th>\r\n                        <th scope=\"col\">Manufacturer</th>\r\n                        <th scope=\"col\">Supplier RM #</th>\r\n                        <th scope=\"col\">Cost $</th>\r\n                        <th scope=\"col\">Unit</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\" Unapproved Raw Materials\">\r\n                <ng-template ngbTabContent>\r\n                  <h4>Double Click to Select a Raw Material</h4>\r\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Item # </th>\r\n                        <th scope=\"col\">INCI Name</th>\r\n                        <th scope=\"col\">Trade Name</th>\r\n                        <th scope=\"col\">Manufacturer</th>\r\n                        <th scope=\"col\">Supplier RM #</th>\r\n                        <th scope=\"col\">Cost $</th>\r\n                        <th scope=\"col\">Unit</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Formula Details\">\r\n                <ng-template ngbTabContent>\r\n                  <h4>Double Click to Select a Raw Material</h4>\r\n                  <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">PDR # </th>\r\n                        <th scope=\"col\">Project Name</th>\r\n                        <th scope=\"col\">Formula Code</th>\r\n                        <th scope=\"col\">Formula Name</th>\r\n                        <th scope=\"col\">Customer</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                      <tr>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </ng-template>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Component(s)</a>\r\n        <ng-template ngbNavContent>\r\n          <h4>Double Click to Select a Raw Material</h4>\r\n          <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Component Item # </th>\r\n                <th scope=\"col\">Component Name</th>\r\n                <th scope=\"col\">Cost $</th>\r\n                <th scope=\"col\">File Size</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Finished Product(s)</a>\r\n        <ng-template ngbNavContent>\r\n          <h4>Double Click to Select a Raw Material</h4>\r\n          <table class=\"table table-hover\" style=\"height:250px;background-color:white\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\"></th>\r\n                <th scope=\"col\"></th>\r\n                <th scope=\"col\">Finished Product</th>\r\n                <th scope=\"col\">Product Name</th>\r\n                <th scope=\"col\">Category</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>*</td>\r\n                <td><input type=\"checkbox\" /></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 190px;margin-top:10px;\">Delete Row</button>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 450px; height: 50px; width: 290px;margin-top:10px;\">Save Finished Products</button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Audit Trail</a>\r\n        <ng-template ngbNavContent>\r\n          <table class=\"table table-hover\"style=\"height:250px;\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Date</th>\r\n                <th scope=\"col\">Task</th>\r\n                <th scope=\"col\">UserName</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n              <tr>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n            \r\n        </ng-template>\r\n      </ng-container>\r\n\r\n    </nav>\r\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n    </div>\r\n  <div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-6 mb-3\">\r\n        <div class=\"form-inline\">\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 220px;margin-top:10px;\">Print Preview</button>\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 220px;margin-top:10px;\">Export to Excel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\">\r\n        <div class=\"form-inline\">\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 140px; height: 50px; width: 220px;margin-top:10px;\">Delete Supplier</button>\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">New</button>\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">Save</button>\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;margin-top:10px;\">Back</button>\r\n        </div>\r\n      </div>     \r\n    </div>\r\n  </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\r\n    <div class=\"col-sm-12\">\r\n      <div style=\"background-color: #f6f5f1\">\r\n        <form class=\"form-inline text-center\" style=\"margin-bottom:20px;\">\r\n          <h2 style=\"margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">ERP </h2>\r\n          <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Search Supplier</h2>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <fieldset class=\"border p-2\">\r\n        <legend class=\"w-auto\" style=\"font-size:15px;color:maroon\">Search</legend>\r\n        <form>\r\n          <div class=\"form-group row\">\r\n            <label for=\"Supplier Key\" class=\"col-sm-2 col-form-label\">Supplier Key</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" id=\"inputSupplier key\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputSupplier Name\" class=\"col-sm-2 col-form-label\">Supplier Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" id=\"Supplier Name\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </fieldset>\r\n    </div>\r\n    <div style=\"color: #bb2205\">\r\n      <p class=\"font-weight-bold\">Make your selection by double clicking on your choice</p>\r\n    </div>\r\n    <div>\r\n      <table class=\"table table-bordered\">\r\n        ,\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Supplier Key</th>\r\n            <th scope=\"col\">Supplier name</th>\r\n            <th scope=\"col\">\r\n              <select id=\"inputState\" class=\"form-control\" style=\"width:160px;\">\r\n                <option> Yes</option>\r\n                <option>No</option>\r\n              </select>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <form>\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-dialog-actions>\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:150px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n          </mat-dialog-actions>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/raw-material.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/raw-material.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div style=\"    background-color: #f6f5f1\">\r\n\r\n\r\n  <h2 style=\"    margin-bottom: 30px; margin-top: 20px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align:center\">Raw Materials Maintenance</h2>\r\n\r\n  <form class=\"form-inline\" style=\"    background-color: #f6f5f1\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"PRD\" style=\"margin-left: 7px;margin-right:10px\" size=\"20\">Ingredient Code</label>\r\n      <select id=\"PRD\" class=\"form-control\" style=\"width:45.11%;\">\r\n        <option selected>Choose...</option>\r\n        <option>Custom</option>\r\n        <option>RAWS-RAWS</option>\r\n        <option>RM-Raw Mat</option>\r\n      </select>\r\n      <input type=\"text\" style=\"margin-left:10px; width:20%\" class=\"form-control\" id=\"PDR Date\" name=\"PDR Date\" placeholder=\"\" />\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"height:57px;width:90px; margin-left:10px\">Search</button>\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 57px; width: 90px;\" (click)=\"AddPrefixPopUp()\">Add Prefix</button>\r\n  </form>\r\n  <form class=\"form-inline\">\r\n    <label for=\"INCI Name\" style=\"margin-left: 43px;margin-top: 10px;\">INCI Name</label>\r\n    <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px;width:42.5%\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"INCI Name\" size=\"96\">\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:14px;height:57px;width:10%;\">Search INCI Name</button>\r\n  </form>\r\n  <form class=\"form-inline\">\r\n    <label for=\"RM item\" style=\"margin-left: 57px;margin-top: 10px;\">RM item</label>\r\n    <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"project_name\" size=\"96\">\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:13px;height:57px;width:10%;\">New/ Clear</button>\r\n  </form>\r\n  <form class=\"form-inline\">\r\n    <label for=\"project_name\" style=\"margin-left: 25px;margin-top: 10px;\">Supplier Key</label>\r\n    <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"project_name\" size=\"96\">\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:15px;height:57px;width:113px;\" >Search Supplier</button>\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:113px;\" [routerLink]=\"'/AddSupplier'\">Add  Supplier</button>\r\n  </form>\r\n  <form class=\"form-inline\">\r\n    <label for=\"project_name\" style=\"margin-left: 10px;margin-top: 10px;\">Supplier Name</label>\r\n    <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px\" class=\"form-control\" placeholder=\"Enter Supplier Name\" id=\"project_name\" size=\"96\">\r\n\r\n  </form>\r\n new design \r\n<nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs scrolling-wrapper\">\r\n  <ng-container ngbNavItem style=\"margin-left:20px\">\r\n\r\n    <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>General</a>\r\n    <ng-template ngbNavContent>\r\n      <form>\r\n        <div class=\"form-row\" style=\" background-color: #eeeeee\">\r\n          <div style=\"margin-left:100px\" class=\"form-group col-md-12\">\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\" margin-left:-4%;\">Trade Name</label>\r\n              <input style=\"width: 25%;\" type=\"text\" class=\"form-control\">\r\n              <label>P#</label>\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:20%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n              <label>RM Source</label>\r\n              <input style=\"width: 5%;\" type=\"text\" class=\"form-control\">\r\n              <input class=\"form-check-input\" type=\"checkbox\">\r\n              <label style=\"\">Approve RM</label><br>\r\n            </div>\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\"margin-top:10px;margin-left: -3%;\">Drug Name</label>\r\n              <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Ph.Eur.Name</label>\r\n              <input style=\"width: 30%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Incidental Ingredient</label>\r\n              <input type=\"radio\" style=\"margin-left:3%\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n              <label for=\"male\">Yes</label><br>\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n              <label for=\"male\">No</label><br />\r\n\r\n            </div>\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: -4%;\">Manufacturer</label>\r\n              <input style=\"width: 30%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">EBS#</label>\r\n              <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Monograph</label>\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n              <label for=\"Yes\">Yes</label><br>\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n              <label for=\"No\">No</label><br>\r\n            </div>\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: -3%;\">Re Order Qty</label>\r\n\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Min Order Qty</label>\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Exempt or Not (voc)</label>\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"Yes\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"No\">No</label><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-inline col-md-6\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px; margin-left: -4%;\"> Category</label>\r\n\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:20%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">GMO</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"Yes\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"No\">No</label><br>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: -2%;\">Sub Category</label>\r\n\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:20%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Glutan</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"Yes\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"No\">No</label><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Status</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 30%;\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">*</label>\r\n\r\n\r\n\r\n\r\n              <input typeof=\"button\" style=\"width: 5%;\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">NPA Certified</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">No</label><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Default UOM</label>\r\n\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:20%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Kosher</label>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">No</label><br>\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Halal</label>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">Yes</label><br>\r\n\r\n\r\n\r\n\r\n              <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n\r\n\r\n\r\n              <label for=\"male\">No</label><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Last PO Price $</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Per</label>\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">as of</label>\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Std Price $</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Per</label>\r\n\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">as of</label>\r\n\r\n\r\n\r\n\r\n              <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                <option selected>Choose...</option>\r\n                <option>Custom</option>\r\n                <option>RAWS-RAWS</option>\r\n                <option>RM-Raw Mat</option>\r\n              </select>\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\" id=\"inputclass\" placeholder=\"vp\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Previous Price $</label>\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Orgin Source</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">SKU #</label>\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Chemist</label>\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\" id=\"inputclass\" placeholder=\"Admin\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Concentration %</label>\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-inline\">\r\n\r\n\r\n\r\n\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">Notes</label>\r\n\r\n\r\n\r\n\r\n\r\n              <input style=\"width: 50%;\" type=\"text\" class=\"form-control\">\r\n              <input style=\"width: 5%;\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;\">RM Assay Value</label>\r\n\r\n\r\n              <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </form>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Properties</a>\r\n    <ng-template ngbNavContent>\r\n\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Blend</a>\r\n    <ng-template ngbNavContent>\r\n\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>CAS</a>\r\n    <ng-template ngbNavContent>\r\n      <p>data4</p>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Regulatory</a>\r\n    <ng-template ngbNavContent>\r\n      <p>data5</p>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>EU Standards</a>\r\n    <ng-template ngbNavContent>\r\n\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Alert</a>\r\n    <ng-template ngbNavContent>\r\n\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Supplier</a>\r\n    <ng-template ngbNavContent>\r\n\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Functions</a>\r\n    <ng-template ngbNavContent>\r\n      <div class=\"form-group col-md-6\">\r\n        <form class=\"form-inline\" style=\"    background-color: #f6f5f1\">\r\n          <label for=\"Function Name\" style=\"margin-left: 43px;margin-top: 10px; \" size=\"20\">Function Name</label>\r\n          <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:20px;width:57%\" class=\"form-control\" placeholder=\"\" id=\"INCI Name\" size=\"96\">\r\n          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:14px;height:50px;width:17%;\">Function Search </button>\r\n\r\n        </form>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-right:50px;height:57px;width:113px;\">Function Clear</button>\r\n\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem>\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Web Page</a>\r\n    <ng-template ngbNavContent>\r\n      <p>data2</p>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-container ngbNavItem style=\"margin-bottom:50px;\">\r\n    <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Audit</a>\r\n    <ng-template ngbNavContent>\r\n<div class=\"col-1\">\r\n  <button type=\"button\" class=\"btn1 btn-primary\" id=\"button1\">Button</button>\r\n</div>\r\n<div class=\"center\" style=\"overflow-x:auto;\">\r\n\r\n          <table class=\"table table-hover table-bordered\" style=\"margin-left:10px; width:100%\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">Date</th>\r\n                <th scope=\"col\">Task</th>\r\n                <th scope=\"col\">User Name</th>\r\n\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n\r\n                <th scope=\"row\">1</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">2</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">3</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">4</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">5</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">6</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n              <tr>\r\n\r\n                <th scope=\"row\">7</th>\r\n\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Previous</button>\r\n          <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"float:right; height:50px;width:100px;\">Print preview</button>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </ng-container>\r\n\r\n  </nav>\r\n\r\n  <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n  <div class=\"form-row\" style=\"    background-color: #eeeeee;\">\r\n    <div style=\"margin-left:20px\" class=\"form-group \">\r\n      <div class=\"form-inline\">\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:50px;height:50px;width:120px;\">Save As</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:120px;\">RM Cost Import </button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Next</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Delete RM</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Next</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">NeW</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Save</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Back</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div style=\"    background-color: #f6f5f1\">\r\n\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\r\n    <h2 style=\"    margin-bottom: 30px; margin-top: 20px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align:center\">Raw Materials Maintenance</h2>\r\n\r\n    <form style=\"    background-color: #f6f5f1\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-7\">\r\n          <div class=\" form-inline\">\r\n            <label for=\"PRD\" style=\"margin-left: 7px;margin-right:10px\" size=\"20\">Ingredient Code</label>\r\n            <select id=\"PRD\" class=\"form-control\" style=\"width:50.11%;\">\r\n              <option selected>Choose...</option>\r\n              <option>Custom</option>\r\n              <option>RAWS-RAWS</option>\r\n              <option>RM-Raw Mat</option>\r\n            </select>\r\n            <input type=\"text\" style=\"margin-left:10px; width:20%\" class=\"form-control\" id=\"PDR Date\" name=\"PDR Date\" placeholder=\"\" />\r\n          </div>\r\n\r\n          <div class=\"form-inline\">\r\n            <label for=\"INCI Name\" style=\"margin-left: 43px;margin-top: 10px;\">INCI Name</label>\r\n            <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:10px;width:71%\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"INCI Name\">\r\n          </div>\r\n          <div class=\"form-inline\">\r\n            <label for=\"RM item\" style=\"margin-left: 57px;margin-top: 10px;\">RM item</label>\r\n            <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:10px;width:71%\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"project_name\">\r\n          </div>\r\n          <div class=\"form-inline\">\r\n            <label for=\"project_name\" style=\"margin-left: 25px;margin-top: 10px;\">Supplier Key</label>\r\n            <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:10px;width:71%\" class=\"form-control\" placeholder=\"Enter INCI Name\" id=\"project_name\">\r\n          </div>\r\n          <div class=\"form-inline\">\r\n            <label for=\"project_name\" style=\"margin-left: 10px;margin-top: 10px;\">Supplier Name</label>\r\n            <input type=\"text\" style=\"margin-top:10px;margin-left:10px;margin-bottom:10px;width:71%\" class=\"form-control\" placeholder=\"Enter Supplier Name\" id=\"project_name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-5\">\r\n\r\n          <diV class=\"form-inline\" style=\"margin-bottom:10px\">\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"height:57px;width:12%; margin-left:10px\">Search</button>\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 57px; width: 12%;\" (click)=\"AddPrefixPopUp()\">Add Prefix</button>\r\n          </diV>\r\n\r\n          <div class=\"form-inline\">\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:25%;margin-bottom:10px\" (click)=\"opensearchinciname()\">Search INCI Name</button>\r\n          </div>\r\n\r\n          <div class=\"form-inline\">\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:25%;margin-bottom:10px\">New/ Clear</button>\r\n          </div>\r\n          <div class=\"form-inline\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:12%;\" (click)=\"Searchsupplierpopup()\">Search Supplier</button>\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:12%;\" [routerLink]=\"'/AddSupplier'\">Add  Supplier</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs scrolling-wrapper\">\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>General</a>\r\n        <ng-template ngbNavContent>\r\n          <form>\r\n            <div class=\"form-row\" style=\" \">\r\n              <div class=\"form-group col-md-8\">\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"margin-left:10px\">Trade Name</label>\r\n                  <input style=\"width: 55%;\" type=\"text\" class=\"form-control\">\r\n                  <label style=\"margin-left:5px\">P#</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:25%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"margin-top:10px;margin-left: 10px;\">Drug Name</label>\r\n                  <input style=\"width: 35%;\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Ph.Eur.Name</label>\r\n                  <input style=\"width: 35%;\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: 10px;\">Manufacturer</label>\r\n                  <input style=\"width: 35%;\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">EBS#</label>\r\n                  <input style=\"width: 35%;\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: 10px;\">Re Order Qty</label>\r\n                  <input style=\"width: 25%;\" type=\"text\" class=\"form-control\">\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Min Order Qty</label>\r\n                  <input style=\"width: 30%;\" type=\"text\" class=\"form-control\">\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-inline\" style=\"margin-top:5px\">\r\n                  <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: 10px;\">Category</label>\r\n\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:50%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:50px\">GMO</label>\r\n                  <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n                  <label for=\"Yes\">Yes</label><br>\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n                  <label for=\"No\">No</label><br>\r\n\r\n                </div>\r\n                <div class=\"form-inline\" style=\"margin-top:10px\">\r\n                  <label for=\"inputcust\" style=\" padding-top: 10px;margin-left: 10px;\">Sub-Category</label>\r\n\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:50%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:50px\">Glutan</label>\r\n                  <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n                  <label for=\"Yes\">Yes</label><br>\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n                  <label for=\"No\">No</label><br>\r\n\r\n                </div>\r\n                <div class=\"form-inline\" style=\"margin-top:5px\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px;\">Status</label>\r\n                  <input style=\"width: 40%;margin-left:10px\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;\">*</label>\r\n                  <input typeof=\"button\" style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:40px\">NPA Certified</label>\r\n\r\n                  <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n                  <label for=\"male\">Yes</label><br>\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n                  <label for=\"male\">No</label><br>\r\n\r\n                </div>\r\n                <div class=\"form-inline\" style=\"margin-top:5px\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Default UOM</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:30%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:40px\">Kosher</label>\r\n                  <input style=\"margin-left:5px\" type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n                  <label for=\"male\">Yes</label><br>\r\n                  <input style=\"margin-left:5px\" type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n                  <label for=\"male\">No</label><br>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:40px\">Halal</label>\r\n                  <input style=\"margin-left:5px\" type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n                  <label for=\"male\">Yes</label><br>\r\n                  <input style=\"margin-left:5px\" type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n                  <label for=\"male\">No</label><br>\r\n                </div>\r\n\r\n                <div class=\"form-inline\" style=\"margin-top:5px\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Last PO Price $</label>\r\n                  <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">Per</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">as of</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Std Price $</label>\r\n                  <input style=\"width: 20%;\" type=\"text\" class=\"form-control\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">Per</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">as of</label>\r\n                  <select id=\"PRD\" class=\"form-control\" style=\"width:10%;margin-left:10px\">\r\n                    <option selected>Choose...</option>\r\n                    <option>Custom</option>\r\n                    <option>RAWS-RAWS</option>\r\n                    <option>RM-Raw Mat</option>\r\n                  </select>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 20px; \">vp</button>\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">Previous Price $</label>\r\n                  <input style=\"width: 10%;\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                <div class=\"form-inline\">\r\n                  <label>RM Source</label>\r\n                  <input style=\"width: 20%;margin-left:5px\" type=\"text\" class=\"form-control\">\r\n                  <input style=\"margin-left:30px\" class=\"form-check-input\" type=\"checkbox\">\r\n                  <label style=\"margin-left: 5px\">Approve RM</label><br>\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;\">Incidental Ingredient</label>\r\n\r\n                  <input type=\"radio\" style=\"margin-left:10%\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n                  <label for=\"male\">Yes</label><br>\r\n\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n                  <label for=\"male\">No</label><br>\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;\">Monograph</label>\r\n                  <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\" style=\"margin-left:10%\">\r\n\r\n                  <label for=\"Yes\">Yes</label><br>\r\n\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n                  <label for=\"No\">No</label><br>\r\n                </div>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"inputcust\" style=\"padding-top: 10px;\">Exempt or Not (voc)</label>\r\n\r\n                  <input type=\"radio\" id=\"Yes\" name=\"Yes\" value=\"Yes\">\r\n\r\n                  <label for=\"Yes\">Yes</label><br>\r\n\r\n                  <input type=\"radio\" id=\"No\" name=\"No\" value=\"No\">\r\n\r\n                  <label for=\"No\">No</label><br>\r\n                </div>\r\n                <fieldset class=\"border p-2\" style=\"margin-top:20px\">\r\n                  <legend class=\"w-auto\" style=\"font-size:15px;color:maroon\">RM Lead Time(Week(s))</legend>\r\n                  <div class=\"form-inline\">\r\n                    <label>Pre Processing</label>\r\n                    <input style=\"width: 50%;margin-left:15px\" type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"form-inline\">\r\n                    <label>Processing</label>\r\n                    <input style=\"width: 50%;margin-left:15px\" type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"form-inline\">\r\n                    <label>Post Processing</label>\r\n                    <input style=\"width: 50%;margin-left:15px\" type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"form-inline\">\r\n                    <label>CUM Lead Time</label>\r\n                    <input style=\"width: 50%;margin-left:15px\" type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </fieldset>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Orgin Source</label>\r\n              <input style=\"width: 30%;margin-left:10px\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">SKU #</label>\r\n              <input style=\"width: 10%;margin-left:10px\" type=\"text\" class=\"form-control\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">Chemist</label>\r\n              <input style=\"width: 10%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"inputclass\" placeholder=\"Admin\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:30px\">Concentration %</label>\r\n              <input style=\"width: 20%;margin-left:10px\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-inline\">\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:10px\">Notes</label>\r\n              <input style=\"width: 50%;\" type=\"text\" class=\"form-control\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 20px; \">...</button>\r\n              <label for=\"inputcust\" style=\"padding-top: 10px;margin-left:20px\">RM Assay Value</label>\r\n              <input style=\"width: 30%;margin-left:10px\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </form>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Properties</a>\r\n        <ng-template ngbNavContent>\r\n          <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Gravity</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" value=\"1.000\" required>\r\n              <label for=\"inputAddress2\">Lb/Gal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" value=\"8.345\" required>\r\n              <label for=\"inputAddress2\">Kg/m3</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" value=\"1000.000\" required>\r\n              <label for=\"inputAddress2\" style=\"margin-left:20px;\">VOC Contributor</label>\r\n              <div class=\"custom-control custom-radio custom-control-inline\" style=\"margin-left:30px;\">\r\n                <input type=\"radio\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"customRadioInline1\">Yes</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"customRadioInline2\">No</label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"card  w-95\">\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Property</th>\r\n                    <th scope=\"col\">Value</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                  </tr>\r\n                  <tr>\r\n                  </tr>\r\n                  <tr>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 offset-md-3\"></div>\r\n            <div class=\"col-md-3 offset-md-3\" style=\"margin-top:20px;\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:150px;height:50px;width:180px;\">Load Property</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-left:20px\">\r\n        <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Blend</a>\r\n        <ng-template ngbNavContent>\r\n          <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\r\n          <ng-template #innerTabset class=\"nav-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab class=\"\" title=\"Blend Composition\">\r\n                <ng-template ngbTabContent>\r\n                  <!--<form>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-12 form-inline\">\r\n        <div class=\"form-inline\">\r\n          <label for=\"inputcust\" style=\"margin-left:10px\">Trade Name</label>\r\n          <input style=\"width: 95%;\" type=\"text\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 form-inline\">\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:150px;height:50px;width:180px;\">Incredient Search</button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>-->\r\n                  <form>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col\">\r\n                        <label for=\"inputEmail4\">INCI Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputINCI Name\" placeholder=\"INCI Name\" style=\"width:110%\">\r\n                        <label for=\"inputPercentage\">Percentage</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"INCI Name\" style=\"width:70%\">\r\n\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:20%;height:50px;width:180px;margin-top:3%;\">Incredient Search</button>\r\n                      </div>\r\n                    </div> \r\n                      <div class=\"form-row\">\r\n                        <div class=\"col\">                         \r\n                        </div>\r\n                        <div class=\"col form-inline\">\r\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:30px;height:50px;width:90px;\">Save</button>\r\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Clear</button>\r\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\">Delete Incredient</button>\r\n                        </div>\r\n                      </div>                   \r\n                  </form>\r\n                  <table class=\"table table-bordered\" style=\"margin-top:20px;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">#</th>\r\n                        <th scope=\"col\">INCI Name</th>\r\n                        <th scope=\"col\">Percentage(%)</th>\r\n                        <th scope=\"col\">Incidental</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>                        \r\n                      </tr>\r\n                      <tr>                        \r\n                      </tr>\r\n                      <tr>                      \r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <form>\r\n                    <div class=\"row\">\r\n                      <div class=\"col form-inline\">\r\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:30px;height:50px;width:90px;\">Preview</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:150px;\">Print Preview</button>\r\n                      </div>\r\n                      <div class=\"col form-inline\">\r\n                        <label for=\"PRD\" style=\"margin-left:80px;\">Balance (%)</label>\r\n                        <input type=\"text\" style=\"margin-left: 10px;\" class=\"form-control\" placeholder=\"\" id=\"Supplier Key\" size=\"10\"><br />\r\n                        <label for=\"PRD\" style=\"margin-left:20px;\">Total (%)</label>\r\n                        <input type=\"text\" style=\"margin-left: 10px;\" class=\"form-control\" placeholder=\"\" id=\"Supplier Key\" size=\"10\"><br />\r\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:65px;\">Next</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Blend Mixing Procedure\">\r\n                <ng-template ngbTabContent>\r\n                  <form>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleFormControlTextarea1\" style=\"margin-top:10px;\">Blend Mixing Procedure:</label>\r\n                      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" style=\"width:900px;height:400px;margin-left:10%;\"></textarea>\r\n                    </div>\r\n                  </form>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:80px;\">Previous</button>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">                      \r\n                    </div>\r\n                    <div class=\"form-group col-md-2\">\r\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:65px;\">Next</button>\r\n                    </div>\r\n                  </div>                 \r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </ng-template>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>CAS</a>\r\n        <ng-template ngbNavContent>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlTextarea1\">Chem/IUPAC Name</label>\r\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlInput1\">Restriction</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\">\r\n            </div>\r\n          </form>\r\n          <div>\r\n            <h4>CAS Information</h4>\r\n            <div class=\"card\" style=\"width:1800px\">\r\n              <div class=\"card-body\">\r\n                <table class=\"table table-bordered\" style=\"margin-top:20px;\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">CAS No </th>\r\n                      <th scope=\"col\">Description</th>\r\n                      <th scope=\"col\">EINECES/ELINCS No</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                    </tr>\r\n                    <tr>\r\n                    </tr>\r\n                    <tr>\r\n                    </tr>\r\n                  </tbody>\r\n                </table> \r\n              </div>\r\n            </div>\r\n            <div>\r\n              <form>\r\n                <div class=\"form-row\" style=\"margin-top:10px;\">\r\n                  <div class=\"col form-inline\">\r\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:95px;\">Previous</button>\r\n                  </div>\r\n                  <div class=\"col form-inline\">\r\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:30%;height:50px;width:165px;\">Delete CAS Details</button>\r\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:165px;\">Add CAS Details</button>\r\n                    <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:65px;\">Next</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Regulatory</a>\r\n        <ng-template ngbNavContent>\r\n          <p>data5</p>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>EU Standards</a>\r\n        <ng-template ngbNavContent>\r\n          <form>\r\n            <label for=\"data_requirements\">Risk Phrases</label>\r\n            <div class=\"form-inline\">\r\n              <textarea id=\"data_requirements\" style=\"width:70%;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left: 3%;\">Select Risk Phrases</button>\r\n            </div>\r\n            <label for=\"data_results\" style=\"margin-top: 20px;\">Safety Phrases</label>\r\n            <div class=\"form-inline\">\r\n              <textarea id=\"data_results\" style=\"width:70%;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\" margin-left: 3%;\">Select Safety Phrases</button>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\" style=\"margin-top: 3%;\">\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\" margin-left: 10px\">Previous</button>\r\n              </div>\r\n              <div class=\"form-group col-md-6\" style=\"margin-top: 3%;\">\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"float:right;margin-right:30px\">Next</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Alert</a>\r\n        <ng-template ngbNavContent>\r\n          <div style=\"margin-left: 10px;\">\r\n            <label for=\"data_requirements\" style=\"margin-top: 3%;\">Remarks</label>\r\n            <textarea id=\"data_requirements\" style=\"width:70%;\" class=\"form-control md-textarea\" size=\"7\" rows=\"8\"></textarea>\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Supplier</a>\r\n        <ng-template ngbNavContent>\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-9\">\r\n                <label for=\"inputEmail4\">Address</label>\r\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"2\" style=\"width: 1050px; margin-left: 10px;\"></textarea>\r\n              </div>\r\n              <div class=\"form-group col-md-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:50px;width:150px;margin-top:40px;\" disabled>Approve Supplier</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress\">Phone Number</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"\" style=\"width: 1050px\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Fax</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width:1050px;\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 1050px;\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Distributor</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 1050px;\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12 form-inline\">\r\n                <label for=\"inputAddress2\">Contact Person</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 450px;\">\r\n\r\n                <label for=\"inputAddress2\">Contact #</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 410px;\">\r\n              </div>\r\n              <!--<div class=\"form-group col-md-4\">\r\n\r\n      </div>-->\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-9\">\r\n                <label for=\"inputCity\">Web Address</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputCity\" style=\"width: 1050px;\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-right:50px;height:57px;width:113px; margin-top:20px;\">Go Online</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Previous Supplier</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 1050px;\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"inputAddress2\">Supplier RM#</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\" style=\"width: 1050px;\">\r\n            </div>\r\n          </form>\r\n          <div>\r\n            <form>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-8\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:57px;width:113px;\">Previous</button>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:30px;height:57px;width:113px;\">Next</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Functions</a>\r\n        <ng-template ngbNavContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <form class=\"form-inline\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"inputPassword6\">Function Name</label>\r\n                  <input type=\"text\" id=\"inputPassword6\" class=\"form-control mx-sm-3\" aria-describedby=\"passwordHelpInline\" style=\"width:950px;\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:30px;height:57px;width:200px;\">Function Search</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:30px;height:57px;width:200px;margin-top:10px;\">Function Clear</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\" style=\"height:5%;width:90%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Function Name</th>\r\n                    <th scope=\"col\">Function Description</th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                  </tr>\r\n                  <tr>\r\n                  </tr>\r\n                  <tr>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n           \r\n            <form>\r\n              <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                  <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Previous</button>\r\n                </div>\r\n                <div class=\"col\">\r\n                 \r\n                </div>\r\n                <div class=\"col-7 form-inline\">\r\n                  <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:140px;height:50px;width:140px;\">Delete Function</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:10px;height:50px;width:140px;\">Add Function</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:10px;height:50px;width:90px;\">Next</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem>\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Web Page</a>\r\n        <ng-template ngbNavContent>\r\n          <p>data2</p>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-container ngbNavItem style=\"margin-bottom:50px;\">\r\n        <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Audit</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <div class=\"col-1\">\r\n            <button type=\"button\" class=\"btn1 btn-primary\" id=\"button1\">Button</button>\r\n          </div>\r\n          <div class=\"center\" style=\"overflow-x:auto;\">\r\n\r\n            <table class=\"table table-hover table-bordered\" style=\"margin-left:10px; width:100%\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">#</th>\r\n                  <th scope=\"col\">Date</th>\r\n                  <th scope=\"col\">Task</th>\r\n                  <th scope=\"col\">User Name</th>\r\n\r\n\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">1</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">2</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">3</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">4</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">5</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">6</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n                <tr>\r\n\r\n                  <th scope=\"row\">7</th>\r\n\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Previous</button>\r\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"float:right; height:50px;width:100px;\">Print preview</button>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </ng-container>\r\n\r\n    </nav>\r\n\r\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n  </div>\r\n  <div class=\"form-row\" style=\" margin-bottom:80%;position:fixed\">\r\n    <div style=\"margin-left:20px;margin-top:20px\" class=\"form-group \">\r\n      <div class=\"form-inline\">\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:50px;height:50px;width:120px;\">Save As</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:230px;height:50px;width:120px;\">RM Cost Import </button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Next</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Delete RM</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Next</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">New</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Save</button>\r\n        <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Back</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/search-inci-name/search-inci-name.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/search-inci-name/search-inci-name.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div style=\"background-color: #f6f5f1\">\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:80vh;width:100%\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 offset-md-3\">\r\n          <div style=\"background-color: #f6f5f1\">\r\n            <form class=\"form-inline text-center\" style=\"margin-bottom:20px;\">\r\n              <h2 style=\"margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485;margin-right:10px;\">SMART</h2>\r\n              <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n              <h2 style=\"margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Search Raw Materials</h2>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <fieldset class=\"border p-2\">\r\n        <legend class=\"w-auto\" style=\"font-size:15px;color:maroon\">Search</legend>\r\n        <form class=\"\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6 form-inline\">\r\n              <label for=\"validationCustom03\">City</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom03\" placeholder=\"City\" style=\"width:350px;margin-left:20px;\">\r\n            </div>\r\n            <div class=\"col-md-3 form-inline\">\r\n              <label for=\"validationCustom04\">State</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom04\" placeholder=\"State\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"validationCustom05\">Zip</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom05\" placeholder=\"Zip\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Please provide a valid zip.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </fieldset>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div style=\"    background-color: #f6f5f1\">\r\n  <div style=\"overflow-y:auto;overflow-x:hidden; height:75vh;\">\r\n\r\n    <h2 style=\"    margin-bottom: 5px; margin-top:5px;font-family: Playfair Display;    background-color: #f6f5f1; color: black; text-align: center;\">Search Raw Materials</h2>\r\n    <fieldset class=\"border p-2\">\r\n      <legend class=\"w-auto\" style=\"font-size:15px;color:maroon\">Search</legend>\r\n      <div class=\"form-row\" style=\"margin-top:5px;\">\r\n        <div class=\"form-group col-md-5\">\r\n\r\n          <label for=\"PDR #\" style=\"margin-left:10px\">Supplier Status</label>\r\n\r\n          <select id=\"PRD\" class=\"form-control\" style=\"width:100%;margin-left: 10px;\">\r\n            <option selected>Choose...</option>\r\n            <option>Custom</option>\r\n            <option>RAWS-RAWS</option>\r\n            <option>RM-Raw Mat</option>\r\n          </select>\r\n\r\n          <label for=\"PDR #\" style=\"margin-left:10px;margin-top:10px;\">Inci Name</label>\r\n          <input style=\"width:100%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\r\n          <label for=\"PDR #\" style=\"margin-left:10px;margin-top:10px;\">Function</label>\r\n          <select id=\"PRD\" class=\"form-control\" style=\"width:100%;margin-left: 10px;\">\r\n            <option selected>Choose...</option>\r\n            <option>Custom</option>\r\n            <option>RAWS-RAWS</option>\r\n            <option>RM-Raw Mat</option>\r\n          </select>\r\n          <label for=\"PDR #\" style=\"margin-left:10px;margin-top:10px;\">Item #</label>\r\n          <input style=\"width:100%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\r\n        </div>\r\n        <div class=\"form-group col-md-7\">\r\n\r\n\r\n          <label for=\"PDR #\" style=\"margin-left:10px\">Supplier</label>\r\n\r\n          <input style=\"width: 60%;margin-left:10px;\" type=\"text\" class=\"form-control\" id=\"PDR #\">\r\n\r\n          <label for=\"PDR #\" style=\"margin-left:10px;margin-top:10px;\">Trade Name</label>\r\n          <div class=\"form-inline\">\r\n            <input style=\"width:60%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10%;width: 120px;\">Quick Save </button>\r\n          </div>\r\n          <label for=\"PDR #\" style=\"margin-left:10px;margin-top:10px;\">CAS No</label>\r\n          <div class=\"form-inline\">\r\n            <input style=\"width:60%;margin-left:10px\" type=\"text\" class=\"form-control\" id=\"Project Name\">\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10%;width: 120px;\">Clear </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </fieldset>\r\n    <div class=\"form-inline\">\r\n      <p style=\"color:maroon;margin-top: 10px;\">Make your selection by double clicking on your choice</p>\r\n      <input type=\"radio\" id=\"approved\" name=\"No\" value=\"No\" style=\"margin-left:3%;\">\r\n      <label for=\"Yes\" style=\"color: maroon;margin-left: 2px;\">Approved</label>\r\n\r\n      <input type=\"radio\" id=\"Approved\" name=\"Approved\" value=\"No\" style=\"margin-left: 3%;\">\r\n      <label for=\"No\" style=\"color: maroon;margin-left: 2px;\">Unapproved</label>\r\n      <input type=\"radio\" id=\"All\" name=\"All\" value=\"Yes\" style=\"margin-left: 3%;\">\r\n      <label for=\"No\" style=\"color: maroon;margin-left: 2px;\">All</label>\r\n    </div>\r\n    <div class=\" form-row\">\r\n      <div class=\"form-group col-md-12\">\r\n\r\n        <table class=\"table table-hover table-striped\" style=\"height:400px;background-color:white\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">INCI Name</th>\r\n              <th scope=\"col\">Item #</th>\r\n              <th scope=\"col\">Trade Name</th>\r\n              <th scope=\"col\">CAS No</th>\r\n              <th scope=\"col\">Function</th>\r\n              <th scope=\"col\">Supplier Name</th>\r\n              <th scope=\"col\">P#</th>\r\n              <th scope=\"col\">$ Cost</th>\r\n              <th scope=\"col\">Unit</th>\r\n              <th scope=\"col\">Lead Team</th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n            </tr>\r\n            <tr>\r\n            </tr>\r\n            <tr>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-right:10px;height:50px;float:right;width: 120px;\" matDialogClose>Back </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/edit-user/edit-user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/edit-user/edit-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1;width:900px;\">\n\n\n\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\n\n\n\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\n\n\n\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\n\n\n\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-User Creation</h2>\n\n\n\n  </form>\n\n\n\n  <div>\n    <form class=\"form-inline\" style=\" background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left:60px;\">Name</label>\n      <input type=\"text\" style=\"margin-left: 65px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #kame name=\"Name1\" value=\"\" [(ngModel)]=\"Name\" disabled>\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Address</label>\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" style=\"margin-left:50px;width:405px;\" #address name=\"Address1\" [(ngModel)]=\"Address\"></textarea>\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Phone</label>\n      <input type=\"text\" style=\"margin-left: 62px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #phone name=\"Phone1\" [(ngModel)]=\"Phone\">\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">E-Mail</label>\n      <input type=\"text\" style=\"margin-left: 62px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #email1 name=\"Email1\" [(ngModel)]=\"Email\">\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Username</label>\n\n\n\n      <input type=\"text\" style=\"margin-left: 35px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #uame name=\"Name1\" value=\"\" [(ngModel)]=\"Name\" disabled>\n\n\n\n    </form>\n\n\n\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n\n\n\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Password</label>\n\n\n\n      <input type=\"text\" style=\"margin-left: 35px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Password value=\"\" placeholder=\"***********\" disabled>\n\n\n\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" style=\"margin-left:20px;\" (click)=\"ResetPasswordDialog()\">\n\n\n\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Reset Password</label>\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 58px;\">Department</label>\n      <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 410px;margin-left: 25px;\" #Dept value=\"\">\n        <!--<option selected>Choose...</option>-->\n        <option *ngFor=\"let itemtrue of DeptData\" [value]=\"Dep1\">{{itemtrue.Department}}</option>\n      </select>\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:25px;height:60px;width:140px;\" (click)=\"AddDepartmentDialog()\">Add Department </button>\n    </form>\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 58px;\">User Group</label>\n\n\n\n      <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 410px;margin-left: 28px;\">\n\n\n\n        <option selected disabled>{{UserGroupID}}</option>\n      </select>\n\n\n\n    </form>\n\n\n\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Notes</label>\n      <input type=\"text\" style=\"margin-left: 65px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Note1 name=\"Note0\" [(ngModel)]=\"Notes\">\n    </form>\n  </div>\n  <div>\n    <form class=\"form-inline\" style=\"margin-top:20px;margin-left:180px;\">\n      <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"Getuserlist();save(kame.value,address.value,phone.value,email1.value,Dept.value,Note1.value)\">Update</button>\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\n      </mat-dialog-actions>\n    </form>\n  </div>\n  <div class=\"card\" style=\"margin-top:25px;\">\n\n\n\n    <div class=\"card-body\" style=\"color:blue;text-align:center\">\n\n\n\n      SMARTFormulator LLC, Copyright &#169; 2009-2020. All Rights Reserved\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/add-group.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/add-group.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div style=\"background-color: #f6f5f1\">\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Add Group</h2>\r\n  </form>\r\n  <div>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Group Name</label>\r\n      <input type=\"text\" style=\"margin-left: 78px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Group Description</label>\r\n      <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>\r\n    </form>\r\n    <span style=\"margin-left:25px;\">Permission</span>\r\n    <div>\r\n      <div class=\"card\" style=\"margin-left:35px;\">\r\n        <div class=\"card-body\" style=\"margin-left:35px;\">\r\n          <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\r\n          <label for=\"user1\">&nbsp; PDR Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user2\" name=\"PDR Approval\"  (change)=\"toggleEditable($event)\">\r\n          <label for=\"user2\">&nbsp; PDR Approval</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; Formula Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; QC Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"QC Test Approvals\" name=\"QC Test Approvals\" value=\"QC Test Approvals\">\r\n          <label for=\"user3\">&nbsp; Product Testing Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Product Testing Approvals\" name=\"Product Testing Approvals\" value=\"Product Testing Approvals\">\r\n          <label for=\"user3\">&nbsp; Stability Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Stability Test Approvals\" name=\"Formula CreationStability Test Approvals\" value=\"Stability Test Approvals\">\r\n          <label for=\"user3\">&nbsp; COA Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"COA Approvals\" name=\"COA Approvals\" value=\"COA Approvals\">\r\n          <label for=\"user3\">&nbsp; Regulatory Approvals/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Regulatory Approvals/Rejection\" name=\"Regulatory Approvals/Rejection\" value=\"Regulatory Approvals/Rejection\">\r\n          <label for=\"user3\">&nbsp; IL (Label) Approval</label><br>\r\n          <input type=\"checkbox\" id=\"IL (Label) Approval\" name=\"IL (Label) Approval\" value=\"IL (Label) Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Procedure Approval</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Procedure Approval\" name=\"Formula Procedure Approval\" value=\"Formula Procedure Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Arrpoval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Arrpoval/Rejection\" name=\"Formula Arrpoval/Rejection\" value=\"Formula Arrpoval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Sample Creation</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Creation\" name=\"Sample Creation\" value=\"Sample Creation\">\r\n          <label for=\"user3\">&nbsp; Sample Approval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Approval/Rejection\" name=\"Sample Approval/Rejection\" value=\"Sample Approval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Productization(to scale up & manufacture)</label><br>\r\n          <input type=\"checkbox\" id=\"Productization\" name=\"Productization(to scale up & manufacture)\" value=\"Productization(to scale up & manufacture)\">\r\n          <label for=\"user3\">&nbsp; PCC Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PCC Approval\" name=\"PCC Approval\" value=\"PCC Approval\">\r\n          <label for=\"user3\">&nbsp; PIF Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PIF Approval\" name=\"PIF Approval\" value=\"PIF Approval\">\r\n          <label for=\"user3\">&nbsp; Product Approval</label><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n    <mat-dialog-actions>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:40px;height:50px;width:100px;\">Select All </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Save </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n    </mat-dialog-actions>\r\n\r\n\r\n  </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Are you sure you want to discard the changes?</h3>\r\n<div>\r\n  <button mat-raised-button type=\"button\" class=\"Delete-btn\" (click)=\"cancelN()\">Discard</button>\r\n  <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Cancel-btn\" (click)=\"cancel()\">Cancel</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/change-permission/change-permission.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/change-permission/change-permission.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Add Group</h2>\r\n  </form>\r\n  <div>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Group Name</label>\r\n      <input type=\"text\" style=\"margin-left: 78px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Group Description</label>\r\n      <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>\r\n    </form>\r\n    <span style=\"margin-left:25px;\">Permission</span>\r\n    <div>\r\n      <div class=\"card\" style=\"margin-left:35px;\">\r\n        <div class=\"card-body\" style=\"margin-left:35px;\">\r\n          <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\r\n          <label for=\"user1\">&nbsp; PDR Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user2\" name=\"PDR Approval\" value=\"User2\">\r\n          <label for=\"user2\">&nbsp; PDR Approval</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; Formula Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; QC Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"QC Test Approvals\" name=\"QC Test Approvals\" value=\"QC Test Approvals\">\r\n          <label for=\"user3\">&nbsp; Product Testing Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Product Testing Approvals\" name=\"Product Testing Approvals\" value=\"Product Testing Approvals\">\r\n          <label for=\"user3\">&nbsp; Stability Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Stability Test Approvals\" name=\"Formula CreationStability Test Approvals\" value=\"Stability Test Approvals\">\r\n          <label for=\"user3\">&nbsp; COA Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"COA Approvals\" name=\"COA Approvals\" value=\"COA Approvals\">\r\n          <label for=\"user3\">&nbsp; Regulatory Approvals/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Regulatory Approvals/Rejection\" name=\"Regulatory Approvals/Rejection\" value=\"Regulatory Approvals/Rejection\">\r\n          <label for=\"user3\">&nbsp; IL (Label) Approval</label><br>\r\n          <input type=\"checkbox\" id=\"IL (Label) Approval\" name=\"IL (Label) Approval\" value=\"IL (Label) Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Procedure Approval</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Procedure Approval\" name=\"Formula Procedure Approval\" value=\"Formula Procedure Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Arrpoval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Arrpoval/Rejection\" name=\"Formula Arrpoval/Rejection\" value=\"Formula Arrpoval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Sample Creation</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Creation\" name=\"Sample Creation\" value=\"Sample Creation\">\r\n          <label for=\"user3\">&nbsp; Sample Approval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Approval/Rejection\" name=\"Sample Approval/Rejection\" value=\"Sample Approval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Productization(to scale up & manufacture)</label><br>\r\n          <input type=\"checkbox\" id=\"Productization\" name=\"Productization(to scale up & manufacture)\" value=\"Productization(to scale up & manufacture)\">\r\n          <label for=\"user3\">&nbsp; PCC Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PCC Approval\" name=\"PCC Approval\" value=\"PCC Approval\">\r\n          <label for=\"user3\">&nbsp; PIF Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PIF Approval\" name=\"PIF Approval\" value=\"PIF Approval\">\r\n          <label for=\"user3\">&nbsp; Product Approval</label><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n    <mat-dialog-actions>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:40px;height:50px;width:100px;\">Select All </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Save </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n    </mat-dialog-actions>\r\n\r\n\r\n  </form>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/group-set-permission.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/group-set-permission.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Set Permission</h2>\r\n  </form>\r\n  <label style=\"margin-left:280px;text-align:center;font-size:20px;font-weight:bold\" for=\"PUsername;\">Permission of Administrator</label>\r\n  <div class=\"col-sm-6\" style=\"margin-bottom:20px;\">\r\n    <span>Menu Permission</span>\r\n  </div>\r\n  <div style=\"margin-left: 80px;\">\r\n    <div class=\"card\" style=\"margin-left: 20px;\">\r\n      <div class=\"card-body\">\r\n        <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\r\n        <label for=\"user1\">&nbsp; PDR Creation</label><br>\r\n        <input type=\"checkbox\" id=\"user2\" name=\"PDR Approval\" value=\"User2\">\r\n        <label for=\"user2\">&nbsp; PDR Approval</label><br>\r\n        <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n        <label for=\"user3\">&nbsp; Formula Creation</label><br>\r\n        <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n        <label for=\"user3\">&nbsp; QC Test Approvals</label><br>\r\n        <input type=\"checkbox\" id=\"QC Test Approvals\" name=\"QC Test Approvals\" value=\"QC Test Approvals\">\r\n        <label for=\"user3\">&nbsp; Product Testing Approvals</label><br>\r\n        <input type=\"checkbox\" id=\"Product Testing Approvals\" name=\"Product Testing Approvals\" value=\"Product Testing Approvals\">\r\n        <label for=\"user3\">&nbsp; Stability Test Approvals</label><br>\r\n        <input type=\"checkbox\" id=\"Stability Test Approvals\" name=\"Formula CreationStability Test Approvals\" value=\"Stability Test Approvals\">\r\n        <label for=\"user3\">&nbsp; COA Approvals</label><br>\r\n        <input type=\"checkbox\" id=\"COA Approvals\" name=\"COA Approvals\" value=\"COA Approvals\">\r\n        <label for=\"user3\">&nbsp; Regulatory Approvals/Rejection</label><br>\r\n        <input type=\"checkbox\" id=\"Regulatory Approvals/Rejection\" name=\"Regulatory Approvals/Rejection\" value=\"Regulatory Approvals/Rejection\">\r\n        <label for=\"user3\">&nbsp; IL (Label) Approval</label><br>\r\n        <input type=\"checkbox\" id=\"IL (Label) Approval\" name=\"IL (Label) Approval\" value=\"IL (Label) Approval\">\r\n        <label for=\"user3\">&nbsp; Formula Procedure Approval</label><br>\r\n        <input type=\"checkbox\" id=\"Formula Procedure Approval\" name=\"Formula Procedure Approval\" value=\"Formula Procedure Approval\">\r\n        <label for=\"user3\">&nbsp; Formula Arrpoval/Rejection</label><br>\r\n        <input type=\"checkbox\" id=\"Formula Arrpoval/Rejection\" name=\"Formula Arrpoval/Rejection\" value=\"Formula Arrpoval/Rejection\">\r\n        <label for=\"user3\">&nbsp; Sample Creation</label><br>\r\n        <input type=\"checkbox\" id=\"Sample Creation\" name=\"Sample Creation\" value=\"Sample Creation\">\r\n        <label for=\"user3\">&nbsp; Sample Approval/Rejection</label><br>\r\n        <input type=\"checkbox\" id=\"Sample Approval/Rejection\" name=\"Sample Approval/Rejection\" value=\"Sample Approval/Rejection\">\r\n        <label for=\"user3\">&nbsp; Productization(to scale up & manufacture)</label><br>\r\n        <input type=\"checkbox\" id=\"Productization(to scale up & manufacture)\" name=\"Productization(to scale up & manufacture)\" value=\"Productization(to scale up & manufacture)\">\r\n        <label for=\"user3\">&nbsp; PCC Approval</label><br>\r\n        <input type=\"checkbox\" id=\"PCC Approval\" name=\"PCC Approval\" value=\"PCC Approval\">\r\n        <label for=\"user3\">&nbsp; PIF Approval</label><br>\r\n        <input type=\"checkbox\" id=\"PIF Approval\" name=\"PIF Approval\" value=\"PIF Approval\">\r\n        <label for=\"user3\">&nbsp; Product Approval</label><br>\r\n\r\n      </div>\r\n    </div>\r\n    <form class=\"form-inline\" style=\"margin-top: 30px;margin-bottom:20px;margin-left:140px;\">\r\n      <mat-dialog-actions>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Save </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Back </button>\r\n      </mat-dialog-actions>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-changeusergroup/user-changeusergroup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-changeusergroup/user-changeusergroup.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"    background-color: #f6f5f1\">\r\n  <div class=\"col-sm-12\">\r\n    <div style=\"background-color: #f6f5f1\">\r\n      <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n        <h5 style=\"  margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h5>\r\n        <h5 style=\"   margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h5>\r\n        <h5 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Change User Group</h5>\r\n      </form>\r\n      <div>\r\n        <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n          <label for=\"projectname\" style=\"margin-left: 15px;\">Select a Group</label>\r\n          <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 400px;margin-left: 20px;\" (change)=\"selectChangeHandler($event)\">\r\n            <option selected>Choose...</option>\r\n            <option *ngFor=\"let itemtrue of dropdowndata1\">{{itemtrue.GroupName}}</option>\r\n          </select>\r\n\r\n        </form>\r\n      </div>\r\n      <div>\r\n        <form class=\"form-inline\" style=\"margin-top:20px;margin-left:30px;margin-bottom:40px;\">\r\n          <mat-dialog-actions>\r\n            <!--<button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"ClickedDropdownRowdata(itemtrue.GroupName);changedropdown()\">Change</button>-->\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"changedropdown();closemodel()\">Change</button>\r\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n          </mat-dialog-actions>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/add-department/add-department.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/add-department/add-department.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Add Department</h2>\r\n  </form>\r\n  <div>\r\n    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Department Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"selecteduserfalse.Department\" style=\"margin-left: 78px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #deptname name=\"departmentdata\" value=\"\">\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Remarks</label>\r\n      <!--<input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"50\" #mailser>-->\r\n      <textarea [(ngModel)]=\"selecteduserfalse.Remarks\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" style=\"margin-left:145px;width:450px;\" name=\"remarksdata\" #Remarks value=\"\"></textarea>\r\n      <!--<button class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\" (click)=\"mailser.value=''\">Clear</button>-->\r\n    </form>\r\n  </div>\r\n  <div>\r\n    <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n      <mat-dialog-actions>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:190px;height:50px;width:100px;\" (click)=\"deletedept()\"matDialogClose>Delete</button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\"(click)=\"deptname.value='';Remarks.value='';\">Clear </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" (click)=\"SaveDept(deptname.value,Remarks.value)\" matDialogClose>Save</button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" (click)=\"updatedept(deptname.value,Remarks.value)\"matDialogClose >Update </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n      </mat-dialog-actions>\r\n    </form>\r\n  </div>\r\n  <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\r\n    <table class=\"table table-hover table-bordered fixed\" style=\"background-color:white;\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"header\" scope=\"col\" style=\"width: 50px;visibility: hidden\">#</th>\r\n          <th class=\"header\" scope=\"col\" style=\"width:290px;\">Department Name</th>\r\n          <th class=\"header\" scope=\"col\" style=\"width:490px;\">Remarks</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      \r\n        <tr *ngFor=\"let deptloading of data1\" (click)=\"highlightRow(deptloading);selecteduserdet(deptloading);\"[ngClass] = \"{'highlight' : deptloading.DeptID == selectedName}\">\r\n          <td style=\"visibility: hidden\">{{deptloading.DeptID}}</td>\r\n          <td>{{deptloading.Department}}</td>\r\n          <td>{{deptloading.Remarks}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/reset-password/reset-password.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/reset-password/reset-password.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <div>\r\n    <h4 style=\"margin-left:30px;\">Reset Password for the User</h4>\r\n  </div>\r\n  <div>\r\n    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">New Password</label>\r\n      <input type=\"text\" style=\"margin-left: 100px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 35px;\">Confirm Password</label>\r\n      <input type=\"text\" style=\"margin-left: 78px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\r\n    </form>\r\n    <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n      <mat-dialog-actions>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:190px;height:50px;width:150px;\">Reset Password</button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n      </mat-dialog-actions>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/user-creation.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/user-creation.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1;width:900px;\">\r\n\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-User Creation</h2>\r\n\r\n  </form>\r\n\r\n  <div>\r\n    <form class=\"form-inline\" style=\" background-color: #f6f5f1;margin-top: 10px;\">\r\n     <label for=\"companylogo\" style=\"margin-left:60px;\">Name</label>\r\n     <input type=\"text\" style=\"margin-left: 65px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #name value=\"\">\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n     <label for=\"companylogo\" style=\"margin-left: 60px;\">Address</label>\r\n     <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" style=\"margin-left:50px;width:405px;\" #Address value=\"\" ></textarea>\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n     <label for=\"companylogo\" style=\"margin-left: 60px;\">Phone</label>\r\n     <input type=\"text\" style=\"margin-left: 62px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Phone value=\"\" >\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n     <label for=\"companylogo\" style=\"margin-left: 60px;\">E-Mail</label>\r\n     <input type=\"text\" style=\"margin-left: 62px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Email value=\"\" >\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n     <label for=\"companylogo\" style=\"margin-left: 60px;\">Username</label>\r\n\r\n      <input type=\"text\" style=\"margin-left: 35px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Username value=\"\" >\r\n\r\n    </form>\r\n\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n\r\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Password</label>\r\n\r\n      <input type=\"text\" style=\"margin-left: 35px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Password value=\"\" >\r\n\r\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" style=\"margin-left:20px;\" (click)=\"ResetPasswordDialog()\">\r\n\r\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Reset Password</label>\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 58px;\" >Department</label>\r\n      <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 410px;margin-left: 25px;\" #Dept value=\"\">\r\n        <option selected>Choose...</option>\r\n        <option *ngFor=\"let itemtrue of dropdowndept\">{{itemtrue.Department}}</option>\r\n      </select>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:25px;height:60px;width:140px;\" (click)=\"AddDepartmentDialog()\">Add Department </button>\r\n    </form>\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 58px;\">User Group</label>\r\n\r\n      <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 410px;margin-left: 28px;\" #usergroup value=\"\">\r\n        <option selected>Choose...</option>\r\n        <option *ngFor=\"let itemtrue1 of deptdroptdown\">{{itemtrue1.GroupName}}</option>   \r\n      </select>\r\n     \r\n    </form>\r\n\r\n    <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">Notes</label>\r\n     <input type=\"text\" style=\"margin-left: 65px;\" class=\"form-control\" id=\"PDR\" size=\"45\" #Notes value=\"\">\r\n    </form>\r\n\r\n    <!--<form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\r\n\r\n      <label for=\"companylogo\" style=\"margin-left: 60px;\">User Cues</label>\r\n\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\" style=\"margin-left:40px;\" [(ngModel)]=\"ucue\" required>\r\n\r\n      <label class=\"form-check-label\" for=\"gridRadios2\">\r\n\r\n        Yes\r\n\r\n      </label>\r\n\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\" style=\"margin-left:20px;\" [(ngModel)]=\"ucue1\" required>\r\n\r\n      <label class=\"form-check-label\" for=\"gridRadios2\">\r\n\r\n        No\r\n\r\n      </label>\r\n\r\n      <span style=\"margin-left:10px;\">(Yellow Blinking)</span>\r\n\r\n    </form>-->\r\n\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <form class=\"form-inline\" style=\"margin-top:20px;margin-left:180px;\">\r\n\r\n      <mat-dialog-actions>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"save(name.value, Address.value, Phone.value, Email.value, Username.value, Password.value, Dept.value, usergroup.value, Notes.value)\">Save</button>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" matDialogClose>Cancel</button>\r\n\r\n      </mat-dialog-actions>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"margin-top:25px;\">\r\n\r\n    <div class=\"card-body\" style=\"color:blue;text-align:center\">\r\n\r\n      SMARTFormulator LLC, Copyright &#169; 2009-2020. All Rights Reserved\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-security.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-security.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"row\" style=\"background-color: #f6f5f1\">\r\n    <div class=\"col-sm-12\">\r\n      <div style=\"background-color: #f6f5f1\">\r\n        <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n          <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n          <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n          <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-User Security</h2>\r\n        </form>\r\n        <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\r\n          <ng-container ngbNavItem>\r\n            <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Group</a>\r\n            <ng-template ngbNavContent>\r\n\r\n              <!--<label class=\"form-check-label\" for=\"invalidCheck\" style=\"margin-left:20px;margin-top:10px;\">\r\n                Select A Group and Click on Change Permission Button\r\n              </label>-->\r\n              <div>\r\n                <h4 style=\"margin-left:600px\">Select A Group and Click on Change Permission Button</h4>\r\n              </div>\r\n              <div class=\"table-wrapper-scroll-y my-custom-scrollbar\" style=\"height:500px\">\r\n                \r\n                <table class=\"table table-hover table-bordered fixed\" style=\"margin-left:190px;margin-top:20px;background-color:white\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"header\" scope=\"col\">Group Name</th>\r\n                      <th class=\"header\" scope=\"col\">Group Description</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let getgrouplist of data2\">\r\n                      <td mat-raised-button (click)=\"openGroupDialog()\">{{getgrouplist.GroupName}}</td>\r\n                      <td mat-raised-button (click)=\"openGroupDialog()\">{{getgrouplist.GroupDescription}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <div>\r\n                </div>\r\n                <!--<form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:950px;height:40px;width:120px;\">Add Group</button>\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:990px;height:40px;width:150px;\">Change Permission</button>\r\n    <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:990px;height:40px;width:80px;\">Back</button>\r\n\r\n  </form>-->\r\n              </div>\r\n                <form class=\"form-inline\" style=\"   margin-top: 40px;margin-bottom:40px;\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:1050px;height:50px;width:150px;\" (click)=\"openDialog()\">Add Group </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"openGroupChangePerDialog()\">Change Permission </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Back </button>\r\n\r\n                </form>\r\n\r\n</ng-template>\r\n          </ng-container>\r\n          <!--------------------------------------------------User Tab-------------------------------------------->\r\n          <ng-container ngbNavItem>\r\n            <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>User</a>\r\n            <ng-template ngbNavContent>\r\n\r\n              <!--<label class=\"form-check-label\" for=\"invalidCheck\" style=\"margin-left:20px;margin-top:10px;\">\r\n                Select A Group and Click on Change Permission Button\r\n              </label>-->\r\n\r\n              <div style=\"height:500px\">\r\n                <span style=\"    margin-left: 550px;font-size: 25px;font-weight: bold\">\r\n                  Select A Group and Click on Change Permission Button\r\n                </span>\r\n                <span style=\"font-weight:bold\">\r\n                  <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"selectedStatus\">\r\n                    <mat-radio-button value=\"true\" checked=\"checked\" (click)=\"setradio('active')\">Active</mat-radio-button>\r\n                    <mat-radio-button value=\"false\" style=\"margin-left:10px;\" (click)=\"setradio('InActive')\">InActive(De-Activated)</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </span>\r\n                <div *ngIf=\"isSelected('Active')\" style=\"visibility:hidden\">\r\n                  <input type=\"text\" />Active radio button selected\r\n                </div>\r\n\r\n                <div *ngIf=\"isSelected('InActive')\" style=\"visibility:hidden\">\r\n                  <input type=\"text\" /> InActive radio button selected\r\n                </div>\r\n                <!--<div>radio group ngModel: {{ selectedStatus }}</div>-->\r\n                <div class=\"table-wrapper-scroll-y my-custom-scrollbar\" style=\"height: 510px\">\r\n                  <table class=\"table table-hover table-bordered fixed \" style=\"margin-left:60px;margin-top:20px;overflow-y:scroll;background-color:white\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"header\" scope=\"col\">UserName</th>\r\n                        <th class=\"header\" scope=\"col\">Full Name</th>\r\n                        <th class=\"header\" scope=\"col\">Group Name</th>\r\n                        <th class=\"header\" scope=\"col\">Status</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let getuserlist of data3,let i=index\" (click)=\"ClickedRow(getuserlist.userName,getuserlist.GroupName,getuserlist.emailId,getuserlist.Password,getuserlist.Phone,getuserlist.Notes,getuserlist.Department,getuserlist.Address,getuserlist.UserGroupID);setClickedRow(i)\" [class.active]=\"i == HighlightRow\">\r\n\r\n                        <td>{{getuserlist.userName}}</td>\r\n                        <td>{{getuserlist.FirstName}}</td>\r\n                        <td>{{getuserlist.GroupName}}</td>\r\n                        <td>{{getuserlist.isEnable}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <h4 style=\"margin-left:60px;\">Count:{{getuserlist}}</h4>\r\n                <div>\r\n                </div>\r\n\r\n                <form class=\"form-inline\" style=\"   margin-top: 10px;margin-bottom:190px;\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 700px; height: 50px;width: 220px;\" [routerLink]=\"'/AddSupplier'\">Changing Licenced User </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:180px;\" (click)=\"openEditUserDialog()\">Edit User</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\" (click)=\"openAddUserDialog()\">Add User</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:150px;\" (click)=\"openUserChangeGroupDialog()\">Change Group</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Delete</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Back</button>\r\n                </form>\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n          <!------------------------------------------------------------------------userSettings------------------------------------------------------------------------------------>\r\n          <ng-container ngbNavItem>\r\n            <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>UserSettings</a>\r\n            <ng-template ngbNavContent>\r\n              <div style=\"margin-top: 30px;margin-left: 20px;\">\r\n                <h3 style=\"text-align:center;\">Edit your User Settings</h3>\r\n              </div>\r\n              <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\r\n                <label for=\"ph.no\" style=\"margin-left: 190px;\">Blinking Yellow User Cues</label>\r\n                <mat-radio-group aria-label=\"Select an option\" style=\"margin-left:30px;\">\r\n                  <mat-radio-button value=\"1\">Yes</mat-radio-button>\r\n                  <mat-radio-button value=\"2\" style=\"margin-left:10px;\">No</mat-radio-button>\r\n                </mat-radio-group>\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:40px;height:40px;width:100px;\">Update</button>\r\n              </form>\r\n              <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\r\n                <label for=\"ph.no\" style=\"margin-left: 190px;margin-top:20px;\">Maximize ERP Screen</label>\r\n                <mat-radio-group aria-label=\"Select an option\" style=\"    margin-top: 30px;margin-left: 60px;\">\r\n                  <mat-radio-button value=\"1\">Yes</mat-radio-button>\r\n                  <mat-radio-button value=\"2\" style=\"margin-left:10px;\">No</mat-radio-button>\r\n                </mat-radio-group>\r\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 40px;height: 40px;width: 100px; margin-top: 30px;\">Update</button>\r\n              </form>\r\n              <p style=\"font-weight: bold;color: red;margin-left: 40px; margin-top: 30px\">(This will EXPAND SMART-ERP screen to maximize mode depending on user screen resolutions)</p>\r\n              <div style=\"height:500px\">\r\n                <!--<form class=\"form-inline\" style=\"   margin-top: 220px;margin-bottom:220px;\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Back</button>\r\n                </form>-->\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n          <!-------------------------------------------------------------------------------Audit Tracking -------------------------------------------------------------------->\r\n          <ng-container ngbNavItem>\r\n            <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Audit Tracking</a>\r\n            <ng-template ngbNavContent>\r\n\r\n              <!--<label class=\"form-check-label\" for=\"invalidCheck\" style=\"margin-left:20px;margin-top:10px;\">\r\n                Select A Group and Click on Change Permission Button\r\n              </label>-->\r\n\r\n              <div class=\"table-wrapper-scroll-y my-custom-scrollbar\"style=\"height: 510px;margin-left:260px;\">\r\n                <table class=\"table table-hover table-bordered fixed center \" style=\"margin-left:60px;margin-top:20px;overflow-y:scroll;background-color:white\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"header\" scope=\"col\" style=\"column-width:40px;\">Date</th>\r\n                      <th class=\"header\" scope=\"col\" style=\"column-width:290px;\">Task</th>\r\n                      <th class=\"header\" scope=\"col\" style=\"column-width:180px;\">UserName</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let auditlist of data1\">\r\n                      <td>{{auditlist.date}}</td>\r\n                      <td>{{auditlist.task}}</td>\r\n                      <td>{{auditlist.username}}</td>\r\n\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n              <div>\r\n                <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\r\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 640px;height: 40px;width: 150px; margin-top: 30px;\">Print Preview</button>\r\n                </form>\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n        </nav>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-set-permission/user-set-permission.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-set-permission/user-set-permission.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #f6f5f1\">\r\n  <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:20px;\">\r\n    <h2 style=\"   margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\r\n    <h2 style=\"     margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: #bb2205\">Formulator </h2>\r\n    <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Set Permission</h2>\r\n  </form>\r\n  <h4 style=\"text-align:center\">Permission of Administrator</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <h4>Menu Permission</h4>\r\n      <div class=\"card\">\r\n        <div class=\"card-body col-sm-10\" style=\"width: 40rem;\">\r\n          <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\r\n          <label for=\"user1\">&nbsp; PDR Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user2\" name=\"PDR Approval\" value=\"User2\">\r\n          <label for=\"user2\">&nbsp; PDR Approval</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; Formula Creation</label><br>\r\n          <input type=\"checkbox\" id=\"user3\" name=\"Formula Creation\" value=\"User3\">\r\n          <label for=\"user3\">&nbsp; QC Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"QC Test Approvals\" name=\"QC Test Approvals\" value=\"QC Test Approvals\">\r\n          <label for=\"user3\">&nbsp; Product Testing Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Product Testing Approvals\" name=\"Product Testing Approvals\" value=\"Product Testing Approvals\">\r\n          <label for=\"user3\">&nbsp; Stability Test Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"Stability Test Approvals\" name=\"Formula CreationStability Test Approvals\" value=\"Stability Test Approvals\">\r\n          <label for=\"user3\">&nbsp; COA Approvals</label><br>\r\n          <input type=\"checkbox\" id=\"COA Approvals\" name=\"COA Approvals\" value=\"COA Approvals\">\r\n          <label for=\"user3\">&nbsp; Regulatory Approvals/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Regulatory Approvals/Rejection\" name=\"Regulatory Approvals/Rejection\" value=\"Regulatory Approvals/Rejection\">\r\n          <label for=\"user3\">&nbsp; IL (Label) Approval</label><br>\r\n          <input type=\"checkbox\" id=\"IL (Label) Approval\" name=\"IL (Label) Approval\" value=\"IL (Label) Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Procedure Approval</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Procedure Approval\" name=\"Formula Procedure Approval\" value=\"Formula Procedure Approval\">\r\n          <label for=\"user3\">&nbsp; Formula Approval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Formula Arrpoval/Rejection\" name=\"Formula Arrpoval/Rejection\" value=\"Formula Arrpoval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Sample Creation</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Creation\" name=\"Sample Creation\" value=\"Sample Creation\">\r\n          <label for=\"user3\">&nbsp; Sample Approval/Rejection</label><br>\r\n          <input type=\"checkbox\" id=\"Sample Approval/Rejection\" name=\"Sample Approval/Rejection\" value=\"Sample Approval/Rejection\">\r\n          <label for=\"user3\">&nbsp; Productization(to scale up & manufacture)</label><br>\r\n          <input type=\"checkbox\" id=\"Productization(to scale up & manufacture)\" name=\"Productization(to scale up & manufacture)\" value=\"Productization(to scale up & manufacture)\">\r\n          <label for=\"user3\">&nbsp; PCC Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PCC Approval\" name=\"PCC Approval\" value=\"PCC Approval\">\r\n          <label for=\"user3\">&nbsp; PIF Approval</label><br>\r\n          <input type=\"checkbox\" id=\"PIF Approval\" name=\"PIF Approval\" value=\"PIF Approval\">\r\n          <label for=\"user3\">&nbsp; Product Approval</label><br>\r\n        </div>\r\n        <!--<form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\r\n      <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\r\n    </form>-->\r\n      </div>\r\n      <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:40px;height:50px;width:100px;\">Select All </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <h4>Different SF Module</h4>\r\n      <div class=\"card\" style=\"min-height:590px;\">\r\n        <div class=\"card-body\">\r\n          <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\r\n          <label for=\"user1\">&nbsp; Cosmetics/Personal Care</label><br>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-inline\" style=\" margin-top: 30px;margin-bottom:20px\">\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:250px;height:50px;width:70px;\">Save </button>\r\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">Cancel </button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-work/admin-work.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-work/admin-work.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\n  padding: 20px;\n  text-align: left;\n  font-family: Haettenschweiler\n}\n\nh2.design {\n  text-align: center;\n  font: 20px;\n  font-family: 'Arial Rounded MT';\n  padding-top: 40px;\n  padding-bottom: 30px;\n}\n\nli:hover{\n    background-color:silver;\n}\n\n.textalign1 {\n}\n\n.table tr.active td {\n  background-color: #48da24 !important;\n  color: white;\n}\n\n.mat-tab-group {\n  margin-bottom: 48px;\n}\n\n.tabcolor {\n  color: #bb2205;\n}\n\n.tabbutto:hover {\n  background-color: whitesmoke;\n  color: dimgrey;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\nul, li {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.listWrapper {\n  max-height: 180px;\n  max-width: 250px;\n  overflow: auto;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.buttoncolor {\n  border-color: #214252;\n  background-color: #214252;\n}\n\n.tab-close {\n  color: lightseagreen;\n  text-align: right;\n  cursor: pointer;\n}\n\n.tabrowli {\n  text-align: center;\n  margin: 2px;\n  padding: 10px;\n  border: 1px solid #AAA;\n  background: #ECECEC;\n  display: inline-block;\n}\n\n.button {\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4td29yay9hZG1pbi13b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0E7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4td29yay9hZG1pbi13b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnRlc3Qge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogSGFldHRlbnNjaHdlaWxlclxufVxuXG5oMi5kZXNpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbmxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6c2lsdmVyO1xufVxuLnRleHRhbGlnbjEge1xufVxuLnRhYmxlIHRyLmFjdGl2ZSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGRhMjQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufSAgIFxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi50YWJjb2xvciB7XG4gIGNvbG9yOiAjYmIyMjA1O1xufVxuXG4udGFiYnV0dG86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogZGltZ3JleTtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG51bCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0V3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5idXR0b25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogIzIxNDI1MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1Mjtcbn1cblxuLnRhYi1jbG9zZSB7XG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicm93bGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/admin-work/admin-work.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-work/admin-work.component.ts ***!
  \****************************************************/
/*! exports provided: AdminWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWorkComponent", function() { return AdminWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _servicestack_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @servicestack/client */ "./node_modules/@servicestack/client/dist/index.js");
/* harmony import */ var _servicestack_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_servicestack_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var client = new _servicestack_client__WEBPACK_IMPORTED_MODULE_2__["JsonServiceClient"]("http://localhost/SmartFormulator_Webservice/");

let AdminWorkComponent = class AdminWorkComponent {
    constructor(postData, http) {
        this.postData = postData;
        this.http = http;
        this.selectedUserfalse = '';
        this.selectedUsertrue = '';
        this.clearLoc = '';
        this.formulacode = '';
        this.formulaname = '';
        this.projectname = '';
        this.username = '';
        this.companyname = '';
        this.abb = '';
        this.abbdescription = '';
        this.dataval = '';
        this.selectedabb = '';
        this.selectedadddescription = '';
        this.currentYear = new Date().getFullYear();
        this.ClickedRow = function (index) {
            this.HighlightRow = index;
        };
    }
    clearLock() {
        this.clearLoc = '';
    }
    abbclickform(itemdataabb, itemdatadesc) {
        this.selectedabb = itemdataabb;
        this.selectedadddescription = itemdatadesc;
    }
    RowSelectedfalse(itemfalse) {
        this.selectedUserfalse = itemfalse; // declare variable in component.
    }
    RowSelectedtrue(itemTrue) {
        this.selectedUsertrue = itemTrue; // declare variable in component.
    }
    getPostslocktrue() {
        let paramstrue = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('locked', "true");
        return this.http.get("http://localhost/SmartFormulator_Webservice/formula", { params: paramstrue });
    }
    getPostslockfalse() {
        let paramsfalse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('locked', "false");
        return this.http.get("http://localhost/SmartFormulator_Webservice/formula", { params: paramsfalse });
    }
    getwithparam() {
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('UserId', "admin").
            set('ProjectName', "Project WorkFlow Test");
        return this.http.get("http://localhost/SmartFormulator_Webservice/Task", { params: params1 });
    }
    Datalock(formulacode, formulaname, projectname, username) {
        var formulacodelock = formulacode;
        var formulanamelock = formulaname;
        var projectnamelock = projectname;
        var usernamelock = username;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('formulacode', formulacodelock).
            set('formulaname', formulanamelock).
            set('username', projectnamelock).
            set('ProjectName', usernamelock);
        this.http.post("http://localhost/SmartFormulator_Webservice/Locked", { params: params1 });
    }
    Datalockclick(formulacode, formulaname, projectname, username) {
        this.Datalock(formulacode, formulaname, projectname, username);
        this.getPostslockfalse().subscribe((result3) => {
            console.warn("resulttolock", result3);
            this.datafalse = result3;
        });
    }
    defaultsettingdata() {
        return this.http.get("http://localhost/SmartFormulator_Webservice/defaultsettingsdata");
    }
    saveprefix(abbform, abbdescriptionform) {
        this.abb = abbform;
        this.abbdescription = abbdescriptionform;
        //  this.saveabbformulation();
    }
    deleteprefix() {
        this.deleteprefixdata(this.selectedabb, this.selectedadddescription).subscribe((resultdeletepre) => {
            console.warn("resultdeletepre", resultdeletepre);
            this.deleteprefi = resultdeletepre;
            this.saveformformulationprefix(this.abb, this.abbdescription);
            this.saverawprefix(this.abb, this.abbdescription);
            this.savesuppliers(this.abb, this.abbdescription);
            this.savecustomer(this.abb, this.abbdescription);
        });
    }
    deleteprefixdata(delabbreviation, deladddescription) {
        var abbdelprefix = delabbreviation;
        var abbdeldescription = deladddescription;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('abbdel', abbdelprefix).
            set('formnamedel', abbdeldescription);
        return this.http.get("http://localhost/SmartFormulator_Webservice/deleteabbreviation", { params: params1 });
    }
    saveabbformulation(abbform1, abbdescriptionform1) {
        var abbfo = abbform1;
        var descfor = abbdescriptionform1;
        var formula = "Formulation LookUp";
        let paramsform = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("abb", abbfo).
            set("formname", formula).
            set("abbdescription", descfor);
        return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: paramsform });
    }
    saveformformulationprefix(abbform, abbdescriptionform) {
        return this.saveabbformulation(abbform, abbdescriptionform).subscribe((result5) => {
            console.warn("result5", result5);
            this.datasaveabb = result5;
        });
    }
    saveabbrawmaterials(abbrawmat, abbrawdescription) {
        var abbraw = abbrawmat;
        var descraw = abbrawdescription;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('abb', abbraw).
            set('formname', "Raw Materials").
            set('abbdescription', descraw);
        return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });
    }
    saverawprefix(abbrawform, abbdescriptionrawform) {
        return this.saveabbrawmaterials(abbrawform, abbdescriptionrawform).subscribe((result6) => {
            console.warn("resultsaveraw", result6);
            this.datasaveabbraw = result6;
        });
    }
    saveabbsuppliers(abbsuppliers, abbdescriptionsuppliers) {
        var abbsuppl = abbsuppliers;
        var descsuppl = abbdescriptionsuppliers;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('abb', abbsuppl).
            set('formname', "Suppliers").
            set('abbdescription', descsuppl);
        return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });
    }
    savesuppliers(abbsuppl, abbdescriptionsupp) {
        this.saveabbsuppliers(abbsuppl, abbdescriptionsupp).subscribe((result7) => {
            console.warn("resultsavesup", result7);
            this.datasaveabbsup = result7;
        });
    }
    saveabbcust(abbcustomer, abbdescriptioncusto) {
        var abbcust = abbcustomer;
        var abbdescriptioncus = abbdescriptioncusto;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('abb', abbcust).
            set('formname', "Customer").
            set('abbdescription', abbdescriptioncus);
        return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });
    }
    savecustomer(abbcust, abbdescriptioncust) {
        this.saveabbcust(abbcust, abbdescriptioncust).subscribe((result8) => {
            console.warn("resultsavecust", result8);
            this.datasaveabbcust = result8;
        });
    }
    globalapplist() {
        return this.http.get("http://localhost/SmartFormulator_Webservice/GlobalApproverList");
    }
    ngOnInit() {
        this.saveabbformulation(this.abb, this.abbdescription).subscribe((result5) => {
            console.warn("result5", result5);
            this.datasaveabb = result5;
        });
        this.deleteprefixdata(this.selectedabb, this.selectedadddescription).subscribe((resultdeletepre) => {
            console.warn("resultdeletepre", resultdeletepre);
            this.deleteprefi = resultdeletepre;
        });
        this.getwithparam().subscribe((result1) => {
            console.warn("result1", result1);
            this.data1 = result1;
        });
        this.saveabbrawmaterials(this.abb, this.abbdescription).subscribe((result6) => {
            console.warn("resultsaveraw", result6);
            this.datasaveabbraw = result6;
        });
        this.saveabbsuppliers(this.abb, this.abbdescription).subscribe((result7) => {
            console.warn("resultsavesup", result7);
            this.datasaveabbsup = result7;
        });
        this.saveabbcust(this.abb, this.abbdescription).subscribe((result8) => {
            console.warn("resultsavecust", result8);
            this.datasaveabbcust = result8;
        });
        this.getPostslocktrue().subscribe((result2) => {
            console.warn("resulttounlock", result2);
            this.datatrue = result2;
        });
        this.getPostslockfalse().subscribe((result3) => {
            console.warn("resulttolock", result3);
            this.datafalse = result3;
        });
        this.defaultsettingdata().subscribe((result4) => {
            console.warn("result", result4);
            this.defaultdata = result4;
        });
        this.globalapplist().subscribe((resultgblapplist) => {
            console.warn("resultgblapplist", resultgblapplist);
            this.globalapplistval = resultgblapplist;
        });
    }
};
AdminWorkComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AdminWorkComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-work',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-work.component.css */ "./src/app/admin-work/admin-work.component.css")).default]
    }),
    __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AdminWorkComponent);

//interface Formulamain1 {
//  FormulaCode: string;
//  Description: string;
//  PDRNo: string;
//  Status: string;
//  UserName: string;
//  ProjectName: string;
//}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AppComponent = class AppComponent {
    constructor(postData) {
        this.postData = postData;
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
        this.panelOpenState = false;
        this.navItems = [
            {
                displayName: 'Projects/PDR',
                iconName: 'close',
                children: [
                    {
                        displayName: 'General',
                        iconName: 'speaker_notes',
                        route: 'PDRManagement'
                    },
                    {
                        displayName: 'Requirements',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Product Dev.Brief',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Assigning Users',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: '21 CFR Part 11 Approvers List',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Stage Gate Settings',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Documents',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Assigned Formulas',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Products',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Change Requests',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Customer Communications',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Specifications',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Audit Tracking',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    }
                ]
            },
            {
                displayName: ' Formulation',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Formula Listing',
                        iconName: 'speaker_notes',
                        children: [
                            {
                                displayName: 'All Listing',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'My Formulas',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Products',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Company Owned',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Customer Owned',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Generic',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'LabNoteBook',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'By Customer',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Stability',
                                iconName: 'speaker_notes',
                                children: [
                                    {
                                        displayName: 'Stab Listing',
                                        iconName: 'speaker_notes',
                                    },
                                    {
                                        displayName: 'Daily Testing Schedule',
                                        iconName: 'speaker_notes',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        displayName: 'Formula Lookup',
                        iconName: 'speaker_notes',
                        children: [
                            {
                                displayName: 'General',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Scalability Factor',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'QC',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Phy.Stability',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Product Testing',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Regulatory',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'IL/QIL',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula Specs',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Marketing Artifects',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula Notes',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: ' /Lab Batches',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'COA',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Workflow',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Product(s)',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Audit Tracking',
                                iconName: 'speaker_notes',
                            },
                        ]
                    },
                ]
            },
            {
                displayName: 'Sample Management',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Sample Management',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Customer Details',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'PDR Listing',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'PDR Listing by Date',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Disclaimers',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Documents',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Document Audit Tracking',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Audit Tracking',
                        iconName: 'speaker_notes',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Productization',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Product',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Label',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Packaging',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'ArtWork',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Bulk/',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Prod.Regn Approvals',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Prod.Technical Data Specs',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Commerialization Checklist',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'PIF',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'CMO',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Audit',
                        iconName: 'speaker_notes',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Raw Materials',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Raw Materials',
                        iconName: 'speaker_notes',
                        route: 'RawMaterial'
                    }
                ]
            },
            {
                displayName: 'Suppliers',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Suppliers',
                        iconName: 'speaker_notes',
                    }
                ]
            },
            {
                displayName: 'Product Portfolio',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Product Portfolio',
                        iconName: 'speaker_notes',
                    }
                ]
            }, {
                displayName: 'Miscellaneous',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Miscellaneous',
                        iconName: 'speaker_notes',
                    }
                ]
            }
        ];
        this.isExpanded = false;
    }
    ngOnInit() {
        this.postData.getPosts().subscribe((result) => {
            console.warn("result", result);
            this.data = result;
        });
        this.recheckIfInMenu = false;
    }
    openResourceMenu() {
        this.trigger.openMenu();
    }
    closeResourceMenu() {
        setTimeout(() => {
            if (this.recheckIfInMenu === false) {
                this.trigger.closeMenu();
            }
        }, 175);
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
AppComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
], AppComponent.prototype, "trigger", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/menu-item/menu-item.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var src_app_pipefilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pipefilter */ "./src/app/pipefilter.ts");
/* harmony import */ var _user_security_user_security_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-security/user-security.component */ "./src/app/user-security/user-security.component.ts");
/* harmony import */ var _user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-security/group-set-permission/group-set-permission.component */ "./src/app/user-security/group-set-permission/group-set-permission.component.ts");
/* harmony import */ var _user_security_user_set_permission_user_set_permission_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-security/user-set-permission/user-set-permission.component */ "./src/app/user-security/user-set-permission/user-set-permission.component.ts");
/* harmony import */ var _user_security_group_set_permission_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-security/group-set-permission/add-group/add-group.component */ "./src/app/user-security/group-set-permission/add-group/add-group.component.ts");
/* harmony import */ var _user_security_group_set_permission_change_permission_change_permission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-security/group-set-permission/change-permission/change-permission.component */ "./src/app/user-security/group-set-permission/change-permission/change-permission.component.ts");
/* harmony import */ var _user_security_group_set_permission_add_group_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-security/group-set-permission/add-group/cancel/cancel.component */ "./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.ts");
/* harmony import */ var _user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-security/user-creation/user-creation.component */ "./src/app/user-security/user-creation/user-creation.component.ts");
/* harmony import */ var _user_security_user_changeusergroup_user_changeusergroup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-security/user-changeusergroup/user-changeusergroup.component */ "./src/app/user-security/user-changeusergroup/user-changeusergroup.component.ts");
/* harmony import */ var _user_security_user_creation_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-security/user-creation/add-department/add-department.component */ "./src/app/user-security/user-creation/add-department/add-department.component.ts");
/* harmony import */ var _user_security_user_creation_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-security/user-creation/reset-password/reset-password.component */ "./src/app/user-security/user-creation/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-work/admin-work.component */ "./src/app/admin-work/admin-work.component.ts");
/* harmony import */ var _pdr_management_pdr_management_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pdr-management/pdr-management.component */ "./src/app/pdr-management/pdr-management.component.ts");
/* harmony import */ var _pdr_management_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pdr-management/add-customer/add-customer.component */ "./src/app/pdr-management/add-customer/add-customer.component.ts");
/* harmony import */ var _pdr_management_search_project_pdr_search_project_pdr_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pdr-management/search-project-pdr/search-project-pdr.component */ "./src/app/pdr-management/search-project-pdr/search-project-pdr.component.ts");
/* harmony import */ var _pdr_management_search_customer_pdr_search_customer_pdr_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pdr-management/search-customer-pdr/search-customer-pdr.component */ "./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.ts");
/* harmony import */ var _pdr_management_add_customer_search_customer_cust_search_customer_cust_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pdr-management/add-customer/search-customer-cust/search-customer-cust.component */ "./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.ts");
/* harmony import */ var _pdr_management_add_customer_term_master_cust_term_master_cust_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pdr-management/add-customer/term-master-cust/term-master-cust.component */ "./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.ts");
/* harmony import */ var _pdr_management_add_customer_sales_person_cust_sales_person_cust_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pdr-management/add-customer/sales-person-cust/sales-person-cust.component */ "./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.ts");
/* harmony import */ var _user_security_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-security/edit-user/edit-user.component */ "./src/app/user-security/edit-user/edit-user.component.ts");
/* harmony import */ var _raw_material_raw_material_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./raw-material/raw-material.component */ "./src/app/raw-material/raw-material.component.ts");
/* harmony import */ var _raw_material_add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./raw-material/add-supplier/add-supplier.component */ "./src/app/raw-material/add-supplier/add-supplier.component.ts");
/* harmony import */ var _raw_material_add_supplier_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./raw-material/add-supplier/search-supplier/search-supplier.component */ "./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.ts");
/* harmony import */ var _raw_material_add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./raw-material/add-supplier/add-prefix/add-prefix.component */ "./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.ts");
/* harmony import */ var _raw_material_search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./raw-material/search-inci-name/search-inci-name.component */ "./src/app/raw-material/search-inci-name/search-inci-name.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            src_app_pipefilter__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
            _user_security_group_set_permission_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_18__["AddGroupComponent"],
            _user_security_user_creation_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__["ResetPasswordComponent"],
            _user_security_user_creation_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_23__["AddDepartmentComponent"],
            _user_security_user_changeusergroup_user_changeusergroup_component__WEBPACK_IMPORTED_MODULE_22__["UserChangeusergroupComponent"],
            _user_security_group_set_permission_change_permission_change_permission_component__WEBPACK_IMPORTED_MODULE_19__["ChangePermissionComponent"],
            _user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_16__["GroupSetPermissionComponent"],
            _user_security_user_security_component__WEBPACK_IMPORTED_MODULE_15__["UserSecurityComponent"],
            _user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_21__["UserCreationComponent"],
            _user_security_user_set_permission_user_set_permission_component__WEBPACK_IMPORTED_MODULE_17__["UserSetPermissionComponent"],
            _user_security_group_set_permission_add_group_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_20__["CancelComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_11__["MenuItemComponent"],
            _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_26__["AdminWorkComponent"],
            _pdr_management_pdr_management_component__WEBPACK_IMPORTED_MODULE_27__["PdrManagementComponent"],
            _pdr_management_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_28__["AddCustomerComponent"],
            _pdr_management_search_project_pdr_search_project_pdr_component__WEBPACK_IMPORTED_MODULE_29__["SearchProjectPdrComponent"],
            _pdr_management_search_customer_pdr_search_customer_pdr_component__WEBPACK_IMPORTED_MODULE_30__["SearchCustomerPdrComponent"],
            _pdr_management_add_customer_search_customer_cust_search_customer_cust_component__WEBPACK_IMPORTED_MODULE_31__["SearchCustomerCustComponent"],
            _pdr_management_add_customer_term_master_cust_term_master_cust_component__WEBPACK_IMPORTED_MODULE_32__["TermMasterCustComponent"],
            _pdr_management_add_customer_sales_person_cust_sales_person_cust_component__WEBPACK_IMPORTED_MODULE_33__["SalesPersonCustComponent"],
            _user_security_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"],
            _raw_material_raw_material_component__WEBPACK_IMPORTED_MODULE_35__["RawMaterialComponent"],
            _raw_material_add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_36__["AddSupplierComponent"],
            _raw_material_add_supplier_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_37__["SearchSupplierComponent"],
            _raw_material_add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_38__["AddPrefixComponent"],
            _raw_material_search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_39__["SearchINCINameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'AdminWork', component: _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_26__["AdminWorkComponent"] },
                { path: 'UserSecurity', component: _user_security_user_security_component__WEBPACK_IMPORTED_MODULE_15__["UserSecurityComponent"] },
                { path: 'GroupSetPermission', component: _user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_16__["GroupSetPermissionComponent"] },
                { path: 'UserSetPermission', component: _user_security_user_set_permission_user_set_permission_component__WEBPACK_IMPORTED_MODULE_17__["UserSetPermissionComponent"] },
                { path: 'AddGroup', component: _user_security_group_set_permission_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_18__["AddGroupComponent"] },
                { path: 'ChangePermission', component: _user_security_group_set_permission_change_permission_change_permission_component__WEBPACK_IMPORTED_MODULE_19__["ChangePermissionComponent"] },
                { path: 'UserCreation', component: _user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_21__["UserCreationComponent"] },
                { path: 'UserChangeusergroup', component: _user_security_user_changeusergroup_user_changeusergroup_component__WEBPACK_IMPORTED_MODULE_22__["UserChangeusergroupComponent"] },
                { path: 'AddDepartment', component: _user_security_user_creation_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_23__["AddDepartmentComponent"] },
                { path: 'ResetPassword', component: _user_security_user_creation_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__["ResetPasswordComponent"] },
                { path: 'PDRManagement', component: _pdr_management_pdr_management_component__WEBPACK_IMPORTED_MODULE_27__["PdrManagementComponent"] },
                { path: 'addcustomer', component: _pdr_management_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_28__["AddCustomerComponent"] },
                { path: 'RawMaterial', component: _raw_material_raw_material_component__WEBPACK_IMPORTED_MODULE_35__["RawMaterialComponent"] },
                { path: 'AddSupplier', component: _raw_material_add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_36__["AddSupplierComponent"] },
                { path: 'SearchSupplier', component: _raw_material_add_supplier_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_37__["SearchSupplierComponent"] },
                { path: 'AddPrefix', component: _raw_material_add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_38__["AddPrefixComponent"] },
                { path: 'SearchINCIName', component: _raw_material_search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_39__["SearchINCINameComponent"] }
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_21__["UserCreationComponent"], _pdr_management_search_project_pdr_search_project_pdr_component__WEBPACK_IMPORTED_MODULE_29__["SearchProjectPdrComponent"], _pdr_management_search_customer_pdr_search_customer_pdr_component__WEBPACK_IMPORTED_MODULE_30__["SearchCustomerPdrComponent"], _pdr_management_add_customer_search_customer_cust_search_customer_cust_component__WEBPACK_IMPORTED_MODULE_31__["SearchCustomerCustComponent"], _pdr_management_add_customer_term_master_cust_term_master_cust_component__WEBPACK_IMPORTED_MODULE_32__["TermMasterCustComponent"], _pdr_management_add_customer_sales_person_cust_sales_person_cust_component__WEBPACK_IMPORTED_MODULE_33__["SalesPersonCustComponent"], _user_security_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"], _raw_material_add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_36__["AddSupplierComponent"], _raw_material_add_supplier_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_37__["SearchSupplierComponent"], _raw_material_add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_38__["AddPrefixComponent"], _raw_material_search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_39__["SearchINCINameComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n\r\n\r\nh1.design {\r\n  text-align: center;\r\n  font-size: 25px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 3px;\r\n \r\n}\r\n\r\n\r\n\r\n.textalign1 {\r\n}\r\n\r\n\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n\r\n\r\n.tabcolor {\r\n  color: #fa7f72;\r\n}\r\n\r\n\r\n\r\n.tabbutto:hover {\r\n  background-color: #fa7f72;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.center {\r\n  width: 1000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0FBQ0Y7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGdCQUFnQjs7QUFFbEI7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7RUFDRSxtQkFBbUI7QUFDckI7Ozs7QUFJQTtFQUNFLGNBQWM7QUFDaEI7Ozs7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7Ozs7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7OztBQUlBO0VBQ0UsV0FBVztBQUNiOzs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOzs7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAudGVzdCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBIYWV0dGVuc2Nod2VpbGVyXHJcbn1cclxuXHJcblxyXG5cclxuaDEuZGVzaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuIFxyXG59XHJcblxyXG5cclxuXHJcbi50ZXh0YWxpZ24xIHtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuXHJcblxyXG4udGFiY29sb3Ige1xyXG4gIGNvbG9yOiAjZmE3ZjcyO1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJidXR0bzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhN2Y3MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbmNvbG9yIHtcclxuICBib3JkZXItY29sb3I6ICMyMTQyNTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1MjtcclxufVxyXG5cclxuXHJcblxyXG4udGFiLWNsb3NlIHtcclxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")).default]
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/data-share-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/data-share-service.service.ts ***!
  \***********************************************/
/*! exports provided: DataShareServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataShareServiceService", function() { return DataShareServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let DataShareServiceService = class DataShareServiceService {
    constructor(http) {
        this.http = http;
        // private _items: IItem[] = [1];
        this.itemvalue = '';
        this.itemvalue1 = '';
        this.itemvalue2 = '';
        this.itemvalue3 = '';
        this.itemvalue4 = '';
        this.itemvalue5 = '';
        this.itemvalue6 = '';
        this.itemvalue7 = '';
        this.itemvalue8 = '';
        this.Temppass = "";
        this.itemlist1 = "";
        this._listners = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.Url = 'http://localhost:52060';
    }
    addItem(item) {
        this.itemvalue = item;
    }
    addItem1(item, item1, item2, item3, item4, item5, item6, item7, item8) {
        this.itemvalue = item;
        this.itemvalue1 = item1;
        this.itemvalue2 = item2;
        this.itemvalue3 = item3;
        this.itemvalue4 = item4;
        this.itemvalue5 = item5;
        this.itemvalue6 = item6;
        this.itemvalue7 = item7;
        this.itemvalue8 = item8;
    }
    //DatashareTempPass(itempass: string) {
    //  this.Temppass = itempass
    //}
    DatashareTempPass() {
        var itemlist1 = [this.itemlist1];
        return itemlist1;
    }
    getItems() {
        return this.itemvalue;
    }
    getItems1() {
        var itemList = [this.itemvalue, this.itemvalue1, this.itemvalue2, this.itemvalue3, this.itemvalue4, this.itemvalue5, this.itemvalue6, this.itemvalue7, this.itemvalue8];
        return;
        itemList;
    }
    listen() {
        return this._listners.asObservable();
    }
    filter(filterBy) {
        this._listners.next(filterBy);
    }
    EditUserService() {
    }
};
DataShareServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
DataShareServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], DataShareServiceService);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(postData) {
        this.postData = postData;
    }
    ngOnInit() {
        this.postData.getPosts().subscribe((result) => {
            console.warn("result", result);
            this.data = result;
        });
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/menu */ "./src/app/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor() {
        this.modulesList = _app_menu__WEBPACK_IMPORTED_MODULE_1__["ModulesList"];
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/menu-item/menu-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.ts ***!
  \**************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MenuItemComponent = class MenuItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
MenuItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], MenuItemComponent.prototype, "items", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('childMenu', { static: true }),
    __metadata("design:type", Object)
], MenuItemComponent.prototype, "childMenu", void 0);
MenuItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-menu-item',
        template: __importDefault(__webpack_require__(/*! raw-loader!./menu-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./menu-item.component.css */ "./src/app/menu-item/menu-item.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MenuItemComponent);



/***/ }),

/***/ "./src/app/menu.ts":
/*!*************************!*\
  !*** ./src/app/menu.ts ***!
  \*************************/
/*! exports provided: ModulesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesList", function() { return ModulesList; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ModulesList = [{
        label: 'User',
        children: [{
                label: 'User 1',
                children: [{
                        label: 'User 5'
                    }, {
                        label: 'User 6'
                    }, {
                        label: 'User 7'
                    }]
            }, {
                label: 'User 2',
                children: [{
                        label: 'User 8'
                    }, {
                        label: 'User 9'
                    }, {
                        label: 'User 10'
                    }]
            }, {
                label: 'User 3'
            }, {
                label: 'User 4'
            }]
    }, {
        label: 'Management',
        children: [{
                label: 'Management 1',
                children: [{
                        label: 'Management 2'
                    }, {
                        label: 'Management 3'
                    }, {
                        label: 'Management 4'
                    }]
            }]
    }, {
        label: 'Admin',
        children: [{
                label: 'Admin 1'
            }, {
                label: 'Admin 2'
            }, {
                label: 'Admin 3'
            }, {
                label: 'Admin 4'
            }]
    }];


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/pdr-management/add-customer/add-customer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/add-customer.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRyLW1hbmFnZW1lbnQvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGRyLW1hbmFnZW1lbnQvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC50ZXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IEhhZXR0ZW5zY2h3ZWlsZXJcclxufVxyXG5cclxuLm1hcmdpbmRlc2lnbiB7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBtYXJvb247XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0RERCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaDIuZGVzaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogMjBweDtcclxuICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGV4dGFsaWduMSB7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4udGFiY29sb3Ige1xyXG4gIGNvbG9yOiAjYmIyMjA1O1xyXG59XHJcblxyXG4udGFiYnV0dG86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuXHJcbi50YWJyb3dsaSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5idXR0b25jb2xvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE0MjUyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQyNTI7XHJcbn1cclxuXHJcbi50YWItY2xvc2Uge1xyXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pdr-management/add-customer/add-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/add-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_pdr_management_add_customer_search_customer_cust_search_customer_cust_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component */ "./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.ts");
/* harmony import */ var src_app_pdr_management_add_customer_term_master_cust_term_master_cust_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component */ "./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.ts");
/* harmony import */ var src_app_pdr_management_add_customer_sales_person_cust_sales_person_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component */ "./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AddCustomerComponent = class AddCustomerComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    searchcustomer1() {
        const dialogRef = this.dialog.open(src_app_pdr_management_add_customer_search_customer_cust_search_customer_cust_component__WEBPACK_IMPORTED_MODULE_2__["SearchCustomerCustComponent"], {
            width: '900px', height: '840px', disableClose: true
        });
    }
    termcustomer() {
        const dialogRef = this.dialog.open(src_app_pdr_management_add_customer_term_master_cust_term_master_cust_component__WEBPACK_IMPORTED_MODULE_3__["TermMasterCustComponent"], {
            width: '900px', height: '840px', disableClose: true
        });
    }
    salesperson() {
        const dialogRef = this.dialog.open(src_app_pdr_management_add_customer_sales_person_cust_sales_person_cust_component__WEBPACK_IMPORTED_MODULE_4__["SalesPersonCustComponent"], {
            width: '900px', height: '840px', disableClose: true
        });
    }
};
AddCustomerComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
AddCustomerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-customer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/add-customer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-customer.component.css */ "./src/app/pdr-management/add-customer/add-customer.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
], AddCustomerComponent);



/***/ }),

/***/ "./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bkci1tYW5hZ2VtZW50L2FkZC1jdXN0b21lci9zYWxlcy1wZXJzb24tY3VzdC9zYWxlcy1wZXJzb24tY3VzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SalesPersonCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPersonCustComponent", function() { return SalesPersonCustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SalesPersonCustComponent = class SalesPersonCustComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalesPersonCustComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sales-person-cust',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sales-person-cust.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sales-person-cust.component.css */ "./src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SalesPersonCustComponent);



/***/ }),

/***/ "./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bkci1tYW5hZ2VtZW50L2FkZC1jdXN0b21lci9zZWFyY2gtY3VzdG9tZXItY3VzdC9zZWFyY2gtY3VzdG9tZXItY3VzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SearchCustomerCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustomerCustComponent", function() { return SearchCustomerCustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchCustomerCustComponent = class SearchCustomerCustComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchCustomerCustComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-customer-cust',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-customer-cust.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search-customer-cust.component.css */ "./src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchCustomerCustComponent);



/***/ }),

/***/ "./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bkci1tYW5hZ2VtZW50L2FkZC1jdXN0b21lci90ZXJtLW1hc3Rlci1jdXN0L3Rlcm0tbWFzdGVyLWN1c3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TermMasterCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermMasterCustComponent", function() { return TermMasterCustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TermMasterCustComponent = class TermMasterCustComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermMasterCustComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-term-master-cust',
        template: __importDefault(__webpack_require__(/*! raw-loader!./term-master-cust.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./term-master-cust.component.css */ "./src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], TermMasterCustComponent);



/***/ }),

/***/ "./src/app/pdr-management/pdr-management.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pdr-management/pdr-management.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n.margindesign {\r\n \r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  \r\n  padding-bottom:10px;\r\n  padding-top:10px;\r\n  margin: 20px;\r\n}\r\ninput {\r\n  margin: 5px;\r\n}\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n.textalign1 {\r\n}\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRyLW1hbmFnZW1lbnQvcGRyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBOztFQUVFLDBCQUEwQjtFQUMxQixhQUFhOztFQUViLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtBQUNBO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wZHItbWFuYWdlbWVudC9wZHItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC50ZXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IEhhZXR0ZW5zY2h3ZWlsZXJcclxufVxyXG4ubWFyZ2luZGVzaWduIHtcclxuIFxyXG4gIGJvcmRlcjogMC41cHggc29saWQgbWFyb29uO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgXHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNEREQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmgyLmRlc2lnbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCBSb3VuZGVkIE1UJztcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnRleHRhbGlnbjEge1xyXG59XHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLnRhYmNvbG9yIHtcclxuICBjb2xvcjogI2JiMjIwNTtcclxufVxyXG5cclxuLnRhYmJ1dHRvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBkaW1ncmV5O1xyXG59XHJcbi50YWJyb3dsaSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5idXR0b25jb2xvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE0MjUyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQyNTI7XHJcbn1cclxuXHJcbi50YWItY2xvc2Uge1xyXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pdr-management/pdr-management.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pdr-management/pdr-management.component.ts ***!
  \************************************************************/
/*! exports provided: PdrManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdrManagementComponent", function() { return PdrManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_pdr_management_search_project_pdr_search_project_pdr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pdr-management/search-project-pdr/search-project-pdr.component */ "./src/app/pdr-management/search-project-pdr/search-project-pdr.component.ts");
/* harmony import */ var src_app_pdr_management_search_customer_pdr_search_customer_pdr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pdr-management/search-customer-pdr/search-customer-pdr.component */ "./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let PdrManagementComponent = class PdrManagementComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    opensearchprojectpdr() {
        const dialogRef = this.dialog.open(src_app_pdr_management_search_project_pdr_search_project_pdr_component__WEBPACK_IMPORTED_MODULE_2__["SearchProjectPdrComponent"], {
            width: '900px', height: '840px', disableClose: true
        });
    }
    opencustomersearchpdr() {
        const dialogRef = this.dialog.open(src_app_pdr_management_search_customer_pdr_search_customer_pdr_component__WEBPACK_IMPORTED_MODULE_3__["SearchCustomerPdrComponent"], {
            width: '900px', height: '840px', disableClose: true
        });
    }
    //openDialogpdr() {
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = true;
    //  dialogConfig.width = '900%';
    //  const dialogRef = this.dialog.open(SearchProjectPdrComponent )
    //}
    //openDialogpdr() {
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = true;
    //  dialogConfig.autoFocus = true;
    //  this.dialog.open(SearchProjectPdrComponent, dialogConfig);
    //}
    ngOnInit() {
    }
};
PdrManagementComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
PdrManagementComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pdr-management',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pdr-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/pdr-management.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pdr-management.component.css */ "./src/app/pdr-management/pdr-management.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
], PdrManagementComponent);



/***/ }),

/***/ "./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bkci1tYW5hZ2VtZW50L3NlYXJjaC1jdXN0b21lci1wZHIvc2VhcmNoLWN1c3RvbWVyLXBkci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchCustomerPdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustomerPdrComponent", function() { return SearchCustomerPdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchCustomerPdrComponent = class SearchCustomerPdrComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchCustomerPdrComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-customer-pdr',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-customer-pdr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search-customer-pdr.component.css */ "./src/app/pdr-management/search-customer-pdr/search-customer-pdr.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchCustomerPdrComponent);



/***/ }),

/***/ "./src/app/pdr-management/search-project-pdr/search-project-pdr.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pdr-management/search-project-pdr/search-project-pdr.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bkci1tYW5hZ2VtZW50L3NlYXJjaC1wcm9qZWN0LXBkci9zZWFyY2gtcHJvamVjdC1wZHIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pdr-management/search-project-pdr/search-project-pdr.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pdr-management/search-project-pdr/search-project-pdr.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchProjectPdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProjectPdrComponent", function() { return SearchProjectPdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchProjectPdrComponent = class SearchProjectPdrComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchProjectPdrComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-project-pdr',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-project-pdr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pdr-management/search-project-pdr/search-project-pdr.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search-project-pdr.component.css */ "./src/app/pdr-management/search-project-pdr/search-project-pdr.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchProjectPdrComponent);



/***/ }),

/***/ "./src/app/pipefilter.ts":
/*!*******************************!*\
  !*** ./src/app/pipefilter.ts ***!
  \*******************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FilterPipe = class FilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        // To search values only of "name" variable of your object(item)
        //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        // To search in values of every variable of your object(item)
        return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
};
FilterPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/posts.service.ts":
/*!**********************************!*\
  !*** ./src/app/posts.service.ts ***!
  \**********************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let PostsService = class PostsService {
    // url = "http://localhost/SmartFormulator_Webservice/";
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http.get("http://localhost/SmartFormulator_Webservice/formula");
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PostsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PostsService);



/***/ }),

/***/ "./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF3LW1hdGVyaWFsL2FkZC1zdXBwbGllci9hZGQtcHJlZml4L2FkZC1wcmVmaXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jhdy1tYXRlcmlhbC9hZGQtc3VwcGxpZXIvYWRkLXByZWZpeC9hZGQtcHJlZml4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnRlc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSGFldHRlbnNjaHdlaWxlclxyXG59XHJcblxyXG4ubWFyZ2luZGVzaWduIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIG1hcm9vbjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjREREICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5oMi5kZXNpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50ZXh0YWxpZ24xIHtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi50YWJjb2xvciB7XHJcbiAgY29sb3I6ICNiYjIyMDU7XHJcbn1cclxuXHJcbi50YWJidXR0bzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuLnRhYnJvd2xpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbmNvbG9yIHtcclxuICBib3JkZXItY29sb3I6ICMyMTQyNTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1MjtcclxufVxyXG5cclxuLnRhYi1jbG9zZSB7XHJcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddPrefixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrefixComponent", function() { return AddPrefixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AddPrefixComponent = class AddPrefixComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddPrefixComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-prefix',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-prefix.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-prefix.component.css */ "./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AddPrefixComponent);



/***/ }),

/***/ "./src/app/raw-material/add-supplier/add-supplier.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/add-supplier.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF3LW1hdGVyaWFsL2FkZC1zdXBwbGllci9hZGQtc3VwcGxpZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jhdy1tYXRlcmlhbC9hZGQtc3VwcGxpZXIvYWRkLXN1cHBsaWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnRlc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSGFldHRlbnNjaHdlaWxlclxyXG59XHJcblxyXG4ubWFyZ2luZGVzaWduIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIG1hcm9vbjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjREREICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5oMi5kZXNpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50ZXh0YWxpZ24xIHtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi50YWJjb2xvciB7XHJcbiAgY29sb3I6ICNiYjIyMDU7XHJcbn1cclxuXHJcbi50YWJidXR0bzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuLnRhYnJvd2xpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbmNvbG9yIHtcclxuICBib3JkZXItY29sb3I6ICMyMTQyNTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1MjtcclxufVxyXG5cclxuLnRhYi1jbG9zZSB7XHJcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/raw-material/add-supplier/add-supplier.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/add-supplier.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierComponent", function() { return AddSupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-supplier/search-supplier.component */ "./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AddSupplierComponent = class AddSupplierComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    //Searchsupplierpopup() {
    //  //width: '940px', height: '850px', disableClose: true
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = true;
    //  dialogConfig.width = '1900%';
    //  const dialogRef = this.dialog.open(SearchSupplierComponent)
    //}
    Searchsupplierpopup() {
        const dialogRef = this.dialog.open(_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_2__["SearchSupplierComponent"], {
            width: '940px', height: '650px', disableClose: true,
        });
    }
    ngOnInit() {
    }
};
AddSupplierComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
AddSupplierComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-supplier',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-supplier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/add-supplier.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-supplier.component.css */ "./src/app/raw-material/add-supplier/add-supplier.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
], AddSupplierComponent);



/***/ }),

/***/ "./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\np.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF3LW1hdGVyaWFsL2FkZC1zdXBwbGllci9zZWFyY2gtc3VwcGxpZXIvc2VhcmNoLXN1cHBsaWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jhdy1tYXRlcmlhbC9hZGQtc3VwcGxpZXIvc2VhcmNoLXN1cHBsaWVyL3NlYXJjaC1zdXBwbGllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0RERCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5wLnRlc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSGFldHRlbnNjaHdlaWxlclxyXG59XHJcblxyXG4ubWFyZ2luZGVzaWduIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIG1hcm9vbjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjREREICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5oMi5kZXNpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50ZXh0YWxpZ24xIHtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi50YWJjb2xvciB7XHJcbiAgY29sb3I6ICNiYjIyMDU7XHJcbn1cclxuXHJcbi50YWJidXR0bzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuLnRhYnJvd2xpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbmNvbG9yIHtcclxuICBib3JkZXItY29sb3I6ICMyMTQyNTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1MjtcclxufVxyXG5cclxuLnRhYi1jbG9zZSB7XHJcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSupplierComponent", function() { return SearchSupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchSupplierComponent = class SearchSupplierComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchSupplierComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-supplier',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-supplier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search-supplier.component.css */ "./src/app/raw-material/add-supplier/search-supplier/search-supplier.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchSupplierComponent);



/***/ }),

/***/ "./src/app/raw-material/raw-material.component.css":
/*!*********************************************************!*\
  !*** ./src/app/raw-material/raw-material.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\np.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n.margindesign {\r\n  border: 0.5px solid maroon;\r\n  padding: 50px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin: 20px;\r\n}\r\n\r\ninput {\r\n  margin: 5px;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n  border-bottom: none;\r\n}\r\n\r\nlegend.scheduler-border {\r\n  width: auto !important;\r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n\r\nh2.design {\r\n  text-align: center;\r\n  font: 20px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.textalign1 {\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tabcolor {\r\n  color: #bb2205;\r\n}\r\n\r\n.tabbutto:hover {\r\n  background-color: whitesmoke;\r\n  color: dimgrey;\r\n}\r\n\r\n.tabrowli {\r\n  text-align: center;\r\n  margin: 2px;\r\n  padding: 10px;\r\n  border: 1px solid #AAA;\r\n  background: #ECECEC;\r\n  display: inline-block;\r\n}\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF3LW1hdGVyaWFsL3Jhdy1tYXRlcmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmF3LW1hdGVyaWFsL3Jhdy1tYXRlcmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC50ZXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IEhhZXR0ZW5zY2h3ZWlsZXJcclxufVxyXG5cclxuLm1hcmdpbmRlc2lnbiB7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBtYXJvb247XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0RERCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaDIuZGVzaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogMjBweDtcclxuICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGV4dGFsaWduMSB7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4udGFiY29sb3Ige1xyXG4gIGNvbG9yOiAjYmIyMjA1O1xyXG59XHJcblxyXG4udGFiYnV0dG86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuXHJcbi50YWJyb3dsaSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5idXR0b25jb2xvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE0MjUyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQyNTI7XHJcbn1cclxuXHJcbi50YWItY2xvc2Uge1xyXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxucC50ZXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IEhhZXR0ZW5zY2h3ZWlsZXJcclxufVxyXG5cclxuLm1hcmdpbmRlc2lnbiB7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBtYXJvb247XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0RERCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaDIuZGVzaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogMjBweDtcclxuICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGV4dGFsaWduMSB7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4udGFiY29sb3Ige1xyXG4gIGNvbG9yOiAjYmIyMjA1O1xyXG59XHJcblxyXG4udGFiYnV0dG86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuXHJcbi50YWJyb3dsaSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5idXR0b25jb2xvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE0MjUyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQyNTI7XHJcbn1cclxuXHJcbi50YWItY2xvc2Uge1xyXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/raw-material/raw-material.component.ts":
/*!********************************************************!*\
  !*** ./src/app/raw-material/raw-material.component.ts ***!
  \********************************************************/
/*! exports provided: RawMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialComponent", function() { return RawMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-supplier/add-prefix/add-prefix.component */ "./src/app/raw-material/add-supplier/add-prefix/add-prefix.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-inci-name/search-inci-name.component */ "./src/app/raw-material/search-inci-name/search-inci-name.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let RawMaterialComponent = class RawMaterialComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    AddPrefixPopUp() {
        const dialogRef = this.dialog.open(_add_supplier_add_prefix_add_prefix_component__WEBPACK_IMPORTED_MODULE_1__["AddPrefixComponent"], {
            width: '80%', height: '90%',
            disableClose: true,
        });
    }
    //Searchsupplierpopup(): void {
    //  const dialogRef = this.dialog.open(SearchSupplierComponent, {
    //    width: '940px', height: '650px', disableClose: true,
    //  });
    //}
    //SearchINCIpopup(): void {
    //  const dialogRef = this.dialog.open(SearchINCINameComponent, {
    //    /*width: '940px', height: '650px',*/ disableClose: true,
    //    width: '100%',
    //    minHeight: 'calc(100vh - 90px)',
    //    height: 'auto'
    //  });
    //}
    opensearchinciname() {
        const dialogRef = this.dialog.open(_search_inci_name_search_inci_name_component__WEBPACK_IMPORTED_MODULE_3__["SearchINCINameComponent"], {
            width: '80%', height: '90%', disableClose: true
        });
    }
    ngOnInit() {
    }
};
RawMaterialComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
RawMaterialComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-raw-material',
        template: __importDefault(__webpack_require__(/*! raw-loader!./raw-material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/raw-material.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./raw-material.component.css */ "./src/app/raw-material/raw-material.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], RawMaterialComponent);



/***/ }),

/***/ "./src/app/raw-material/search-inci-name/search-inci-name.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/raw-material/search-inci-name/search-inci-name.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jhdy1tYXRlcmlhbC9zZWFyY2gtaW5jaS1uYW1lL3NlYXJjaC1pbmNpLW5hbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/raw-material/search-inci-name/search-inci-name.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/raw-material/search-inci-name/search-inci-name.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchINCINameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchINCINameComponent", function() { return SearchINCINameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchINCINameComponent = class SearchINCINameComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchINCINameComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-inci-name',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-inci-name.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raw-material/search-inci-name/search-inci-name.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search-inci-name.component.css */ "./src/app/raw-material/search-inci-name/search-inci-name.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchINCINameComponent);



/***/ }),

/***/ "./src/app/user-security/edit-user/edit-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-security/edit-user/edit-user.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-security/edit-user/edit-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-security/edit-user/edit-user.component.ts ***!
  \****************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_share_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-share-service.service */ "./src/app/data-share-service.service.ts");
/* harmony import */ var _user_creation_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-creation/reset-password/reset-password.component */ "./src/app/user-security/user-creation/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let EditUserComponent = class EditUserComponent {
    constructor(http, Datashare, router, route, dialog) {
        this.http = http;
        this.Datashare = Datashare;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
    }
    Getuserlist() {
        var itemList;
        var dar = this.Datashare.getItems1();
        this.Name = dar[0];
        this.Email = dar[1];
        this.Password = dar[3];
        this.Username = dar[0];
        this.Phone = dar[4];
        this.Notes = dar[5];
        this.Department = dar[6];
        this.UserGroupID = dar[8];
        this.Address = dar[7];
        //this.gropname1 = this.selectedGroupName;
        //this.username2 = this.dataval;
        //let params1 = new HttpParams().set('ugid', this.gropname1).set('newname', this.username2);
        //return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/updateusergroup1", { params: params1 });
    }
    Deptloading() {
        return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/Loaddepartment");
    }
    UserUpdate(kane, address, phone, email1, Dept, Note1) {
        this.name1 = kane;
        var addresss1 = address;
        var phones1 = phone;
        var emails1 = email1;
        var Dep1 = Dept;
        var note1 = Note1;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Username1', this.name1).set('Address1', addresss1).set('phone1', phones1).set('emailid1', emails1).set('dept1', Dep1).set('notes1', note1);
        return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/EditUser", { params: params1 });
    }
    save(kanes1, address1, phone1, email11, dept1, notes11) {
        this.UserUpdate(kanes1, address1, phone1, email11, dept1, notes11).subscribe((result7) => {
            console.warn("resultsavesup", result7);
            this.acceptupdate = result7;
            this.router.navigateByUrl('UserSecurityComponent');
        });
        this.dialog.closeAll();
        this.Datashare.filter('Register click');
    }
    ResetPasswordDialog() {
        const dialogRef = this.dialog.open(_user_creation_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"], {
            width: '930px', height: '400px', disableClose: true
        });
    }
    ngOnInit() {
        this.Getuserlist();
        this.Deptloading().subscribe((result) => {
            console.warn("result1", result);
            this.DeptData = result;
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _data_share_service_service__WEBPACK_IMPORTED_MODULE_4__["DataShareServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
EditUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/edit-user/edit-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit-user.component.css */ "./src/app/user-security/edit-user/edit-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _data_share_service_service__WEBPACK_IMPORTED_MODULE_4__["DataShareServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], EditUserComponent);



/***/ }),

/***/ "./src/app/user-security/group-set-permission/add-group/add-group.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/add-group/add-group.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvZ3JvdXAtc2V0LXBlcm1pc3Npb24vYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-security/group-set-permission/add-group/add-group.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/add-group/add-group.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AddGroupComponent = class AddGroupComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddGroupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-group',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/add-group.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-group.component.css */ "./src/app/user-security/group-set-permission/add-group/add-group.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AddGroupComponent);



/***/ }),

/***/ "./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvZ3JvdXAtc2V0LXBlcm1pc3Npb24vYWRkLWdyb3VwL2NhbmNlbC9jYW5jZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelComponent", function() { return CancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CancelComponent = class CancelComponent {
    constructor(dialog, dialogRef) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
    }
    cancel() {
        this.dialogRef.close();
    }
    cancelN() {
        this.dialog.closeAll();
    }
    ngOnInit() {
    }
};
CancelComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
];
CancelComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cancel',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cancel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cancel.component.css */ "./src/app/user-security/group-set-permission/add-group/cancel/cancel.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
], CancelComponent);



/***/ }),

/***/ "./src/app/user-security/group-set-permission/change-permission/change-permission.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/change-permission/change-permission.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvZ3JvdXAtc2V0LXBlcm1pc3Npb24vY2hhbmdlLXBlcm1pc3Npb24vY2hhbmdlLXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-security/group-set-permission/change-permission/change-permission.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/change-permission/change-permission.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChangePermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePermissionComponent", function() { return ChangePermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ChangePermissionComponent = class ChangePermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChangePermissionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-change-permission',
        template: __importDefault(__webpack_require__(/*! raw-loader!./change-permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/change-permission/change-permission.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./change-permission.component.css */ "./src/app/user-security/group-set-permission/change-permission/change-permission.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ChangePermissionComponent);



/***/ }),

/***/ "./src/app/user-security/group-set-permission/group-set-permission.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/group-set-permission.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvZ3JvdXAtc2V0LXBlcm1pc3Npb24vZ3JvdXAtc2V0LXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-security/group-set-permission/group-set-permission.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user-security/group-set-permission/group-set-permission.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GroupSetPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSetPermissionComponent", function() { return GroupSetPermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let GroupSetPermissionComponent = class GroupSetPermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
GroupSetPermissionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-group-set-permission',
        template: __importDefault(__webpack_require__(/*! raw-loader!./group-set-permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/group-set-permission/group-set-permission.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./group-set-permission.component.css */ "./src/app/user-security/group-set-permission/group-set-permission.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], GroupSetPermissionComponent);



/***/ }),

/***/ "./src/app/user-security/user-changeusergroup/user-changeusergroup.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/user-security/user-changeusergroup/user-changeusergroup.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvdXNlci1jaGFuZ2V1c2VyZ3JvdXAvdXNlci1jaGFuZ2V1c2VyZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-security/user-changeusergroup/user-changeusergroup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user-security/user-changeusergroup/user-changeusergroup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserChangeusergroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangeusergroupComponent", function() { return UserChangeusergroupComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-share-service.service */ "./src/app/data-share-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let UserChangeusergroupComponent = class UserChangeusergroupComponent {
    constructor(http, Datashare, router, route, dialog, dialogRef) {
        this.http = http;
        this.Datashare = Datashare;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.selectedGroupName = '';
        this.username2 = '';
    }
    selectChangeHandler(event) {
        //update the ui
        this.selectedGroupName = event.target.value;
        var finalselectgroupname = this.selectedGroupName;
    }
    ClickedDropdownRowdat(groupname) {
        this.clickeddata = groupname;
        console.log(groupname);
    }
    ClickedDropdownRowdata() {
        var dropdata = this.clickeddata;
    }
    userdropdown() {
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/userchangegroupdropdown");
    }
    changedropdown1() {
        this.dataval = this.Datashare.getItems();
        this.gropname1 = this.selectedGroupName;
        this.username2 = this.dataval;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('ugid', this.gropname1).set('newname', this.username2);
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/updateusergroup1", { params: params1 });
    }
    //close(): void {
    //  const dialogRef = this.dialog.open(UserSecurityComponent, {
    //  });
    //}
    closeModal() {
        this.dialogRef.close();
    }
    changedropdown() {
        this.changedropdown1().subscribe((result1) => {
            console.warn("resultdrop", result1);
            this.dropdowndata12 = result1;
        });
        this.btnClick();
        this.dialog.closeAll();
        this.Datashare.filter('Register click');
        //this.router.navigate(['/UserSecurity']);
    }
    btnClick() {
        this.router.navigateByUrl('/UserSecurity', { relativeTo: this.route });
    }
    ;
    ngOnInit() {
        this.userdropdown().subscribe((result1) => {
            console.warn("result1", result1);
            this.dropdowndata1 = result1;
        });
        this.dataval = this.Datashare.getItems();
    }
};
UserChangeusergroupComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__["DataShareServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
UserChangeusergroupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-changeusergroup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-changeusergroup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-changeusergroup/user-changeusergroup.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-changeusergroup.component.css */ "./src/app/user-security/user-changeusergroup/user-changeusergroup.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__["DataShareServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
], UserChangeusergroupComponent);

//let result = objArray.map(({ foo }) => foo)


/***/ }),

/***/ "./src/app/user-security/user-creation/add-department/add-department.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-security/user-creation/add-department/add-department.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-scrollbar {\r\n  position: relative;\r\n  height: 200px;\r\n  overflow: auto;\r\n}\r\n\r\n.table-wrapper-scroll-y {\r\n  display: block;\r\n}\r\n\r\n.table tr.active td {\r\n  background-color: #150485 !important;\r\n  color: white;\r\n}\r\n\r\n.header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: white;\r\n}\r\n\r\ntable tr.highlight {\r\n  background-color: #150485 !important;\r\n  color: #ffffff;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zZWN1cml0eS91c2VyLWNyZWF0aW9uL2FkZC1kZXBhcnRtZW50L2FkZC1kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1zZWN1cml0eS91c2VyLWNyZWF0aW9uL2FkZC1kZXBhcnRtZW50L2FkZC1kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFibGUgdHIuYWN0aXZlIHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUwNDg1ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbnRhYmxlIHRyLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MDQ4NSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user-security/user-creation/add-department/add-department.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user-security/user-creation/add-department/add-department.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepartmentComponent", function() { return AddDepartmentComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_share_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-share-service.service */ "./src/app/data-share-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let AddDepartmentComponent = class AddDepartmentComponent {
    constructor(http, Datashare, dialog) {
        this.http = http;
        this.Datashare = Datashare;
        this.dialog = dialog;
        this.deptid = "";
        this.selecteduserfalse = "";
        //this.setClickedRow = function (index) {
        //  this.HighlightRow = index;
        //}
    }
    highlightRow(deptloading) {
        this.finalselected = this.selectedName = deptloading.DeptID;
    }
    selecteduserdet(deptloading) {
        this.selecteduserfalse = deptloading;
    }
    Deptloading() {
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/Loaddepartment");
    }
    DeptCreation(Deptname, Remarksval) {
        var op1 = "insertion";
        var dept1 = Deptname;
        var Remarks1 = Remarksval;
        var Olddept1 = Deptname;
        let parms = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('department', dept1).set('remarks', Remarks1).set('operation', op1).set('depid', this.deptid);
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: parms });
    }
    SaveDept(deptname, Remarks) {
        this.DeptCreation(deptname, Remarks).subscribe((result7) => {
            console.warn("resultsavesDept", result7);
            this.acceptdept = result7;
        });
    }
    DeptUpdate(Deptname1, Remarks1) {
        var op2 = "Update";
        var dept2 = Deptname1;
        var Remarks2 = Remarks1;
        var olddept2 = Deptname1;
        let parmsupdate = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('department', dept2).set('remarks', Remarks2).set('operation', op2).set('depid', this.finalselected);
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: parmsupdate });
    }
    updatedept(deptname, Remarks) {
        this.DeptUpdate(deptname, Remarks).subscribe((result8) => {
            console.warn("resultupdatedept", result8);
            this.acceptupdatedept1 = result8;
        });
    }
    DeptDelete() {
        var op3 = "delete";
        let paramsdelete = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('operation', op3).set('depid', this.finalselected);
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: paramsdelete });
    }
    deletedept() {
        this.DeptDelete().subscribe((result10) => {
            console.warn("resultdeletedept", result10);
            this.acceptdeletedept = result10;
        });
    }
    ngOnInit() {
        this.Deptloading().subscribe((result) => {
            console.warn("result1", result);
            this.data1 = result;
        });
    }
};
AddDepartmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _data_share_service_service__WEBPACK_IMPORTED_MODULE_2__["DataShareServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
AddDepartmentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-department',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/add-department/add-department.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-department.component.css */ "./src/app/user-security/user-creation/add-department/add-department.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _data_share_service_service__WEBPACK_IMPORTED_MODULE_2__["DataShareServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], AddDepartmentComponent);



/***/ }),

/***/ "./src/app/user-security/user-creation/reset-password/reset-password.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-security/user-creation/reset-password/reset-password.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvdXNlci1jcmVhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-security/user-creation/reset-password/reset-password.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user-security/user-creation/reset-password/reset-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResetPasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-reset-password',
        template: __importDefault(__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/reset-password/reset-password.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user-security/user-creation/reset-password/reset-password.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/user-security/user-creation/user-creation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/user-security/user-creation/user-creation.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvdXNlci1jcmVhdGlvbi91c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-security/user-creation/user-creation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-security/user-creation/user-creation.component.ts ***!
  \************************************************************************/
/*! exports provided: UserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationComponent", function() { return UserCreationComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-share-service.service */ "./src/app/data-share-service.service.ts");
/* harmony import */ var _add_department_add_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-department/add-department.component */ "./src/app/user-security/user-creation/add-department/add-department.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user-security/user-creation/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




//import { UserChangeusergroupComponent } from 'src/app/user-security/user-changeusergroup/user-changeusergroup.component'


let UserCreationComponent = class UserCreationComponent {
    constructor(dialog, http, Datashare) {
        this.dialog = dialog;
        this.http = http;
        this.Datashare = Datashare;
        this.data = [];
    }
    ngOnInit() {
        this.Departmentloading().subscribe((result) => {
            console.warn("result1", result);
            this.dropdowndept = result;
        });
        this.Departmentdropdown().subscribe((result) => {
            console.warn("result2", result);
            this.deptdroptdown = result;
        });
    }
    AddDepartmentDialog() {
        const dialogRef = this.dialog.open(_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_4__["AddDepartmentComponent"], {
            width: '930px', height: '550px', disableClose: true
        });
    }
    ResetPasswordDialog() {
        const dialogRef = this.dialog.open(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"], {
            width: '930px', height: '400px', disableClose: true
        });
    }
    save(name, Address, Phone, Email, Username, Password, Dept, usergroup, Notes) {
        this.usercreation(name, Address, Phone, Email, Username, Password, Dept, usergroup, Notes).subscribe((result7) => {
            console.warn("resultsavesup", result7);
            this.acceptcreation = result7;
        });
        this.dialog.closeAll();
        this.Datashare.filter('Register click');
    }
    usercreation(names, addresss, phones, emails, usernames, passwords, depts, usergroups, notess) {
        var name1 = names;
        var addresss1 = addresss;
        var phones1 = phones;
        var emails1 = emails;
        var usernames1 = usernames;
        var passwords1 = passwords;
        var depts1 = depts;
        var usergroups1 = usergroups;
        var notess1 = notess;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('names', name1).set('add', addresss1).set('mob', phones1).set('mail', emails1).set('first', usernames1).set('passwords', passwords1).set('dep', depts1).set('usergid', usergroups1).set('notes', notess1).set('userid', name1);
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/InsertUser", { params: params1 });
    }
    Departmentloading() {
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/Loaddepartment");
    }
    Departmentdropdown() {
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/userchangegroupdropdown");
    }
};
UserCreationComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__["DataShareServiceService"] }
];
UserCreationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-creation',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-creation/user-creation.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-creation.component.css */ "./src/app/user-security/user-creation/user-creation.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _data_share_service_service__WEBPACK_IMPORTED_MODULE_3__["DataShareServiceService"]])
], UserCreationComponent);



/***/ }),

/***/ "./src/app/user-security/user-security.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-security/user-security.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-scrollbar {\r\n  position: relative;\r\n  height: 200px;\r\n  overflow: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.table-wrapper-scroll-y {\r\n  display: block;\r\n}\r\n\r\n.header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color:white;\r\n}\r\n\r\n.table tr.active td {\r\n  background-color: #150485 !important;\r\n  color: white;\r\n}\r\n\r\nbody {\r\n  background-color: #DBF9FC;\r\n}\r\n\r\n.center {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zZWN1cml0eS91c2VyLXNlY3VyaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNlY3VyaXR5L3VzZXItc2VjdXJpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbi50YWJsZSB0ci5hY3RpdmUgdGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTA0ODUgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCRjlGQztcclxufVxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-security/user-security.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-security/user-security.component.ts ***!
  \**********************************************************/
/*! exports provided: UserSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSecurityComponent", function() { return UserSecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_user_security_group_set_permission_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user-security/group-set-permission/add-group/add-group.component */ "./src/app/user-security/group-set-permission/add-group/add-group.component.ts");
/* harmony import */ var src_app_user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user-security/group-set-permission/group-set-permission.component */ "./src/app/user-security/group-set-permission/group-set-permission.component.ts");
/* harmony import */ var src_app_user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-security/user-creation/user-creation.component */ "./src/app/user-security/user-creation/user-creation.component.ts");
/* harmony import */ var src_app_user_security_user_changeusergroup_user_changeusergroup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user-security/user-changeusergroup/user-changeusergroup.component */ "./src/app/user-security/user-changeusergroup/user-changeusergroup.component.ts");
/* harmony import */ var src_app_user_security_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-security/edit-user/edit-user.component */ "./src/app/user-security/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_data_share_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data-share-service.service */ "./src/app/data-share-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import { MatDialog } from '@angular/material';
//import { MatDialogModule, MatDialog } from '@angular/material/dialog';


//import { GroupSetPermissionComponent } from './user-security/group-set-permission/group-set-permission.component';






//import { PostsService } from 'src/app/posts.service';
let UserSecurityComponent = class UserSecurityComponent {
    //ClickedRow: any;  
    constructor(dialog, http, Datashare) {
        this.dialog = dialog;
        this.http = http;
        this.Datashare = Datashare;
        this._item = { Username1: '', GroupName1: '' };
        this.date = "";
        this.task = "";
        this.username = "";
        this.username1 = "";
        this.FullName = "";
        this.GroupName1 = "";
        this.Status = "";
        this.valuecheck = '';
        this.GroupName = "";
        this.GroupDescription = "";
        this.userselected = "";
        this.selectedStatus = "";
        this.selectedLink = "Active";
        this.Datashare.listen().subscribe((m) => {
            this.GetUserList(this.valuecheck).subscribe((result3) => {
                console.warn("result3", result3);
                this.data3 = result3;
            });
        });
        // this.dataservice.setOption(this.clickeddata);
        this.setClickedRow = function (index) {
            this.HighlightRow = index;
            //  console.log(index);
        };
    }
    addItem() {
        var Username1 = this.clickeddata;
        //    GroupName1: this.clickeddata1
        this.Datashare.addItem(Username1);
    }
    addItem1() {
        var Username1 = this.clickeddata;
        var GroupName1 = this.clickeddata1;
        var emailid1 = this.clickeddata2;
        var password1 = this.clickeddata3;
        var phone1 = this.clickeddata4;
        var notes1 = this.clickeddata5;
        var Department1 = this.clickeddata6;
        var Address1 = this.clickeddata7;
        //var UserGroupID: string = this.clickeddata8;
        this.Datashare.addItem1(Username1, emailid1, this.username1, password1, phone1, notes1, Department1, Address1, GroupName1);
    }
    ClickedRow(username, groupname, emailId, password, phone, notes, Department, Address, UserGroupID) {
        this.clickeddata = username;
        this.clickeddata1 = groupname;
        this.clickeddata2 = emailId;
        this.clickeddata3 = password;
        this.clickeddata4 = phone;
        this.clickeddata5 = notes;
        this.clickeddata6 = Department;
        this.clickeddata7 = Address;
        console.log(username, groupname);
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_user_security_group_set_permission_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_2__["AddGroupComponent"], {
            width: '940px', height: '850px', disableClose: true
        });
    }
    openGroupDialog() {
        const dialogRef = this.dialog.open(src_app_user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_3__["GroupSetPermissionComponent"], {
            width: '940px', height: '850px', disableClose: true
        });
    }
    openGroupChangePerDialog() {
        const dialogRef = this.dialog.open(src_app_user_security_group_set_permission_group_set_permission_component__WEBPACK_IMPORTED_MODULE_3__["GroupSetPermissionComponent"], {
            width: '940px', height: '850px', disableClose: true
        });
    }
    openAddUserDialog() {
        //width: '940px', height: '850px', disableClose: true
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.width = '900%';
        const dialogRef = this.dialog.open(src_app_user_security_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_4__["UserCreationComponent"]);
    }
    openEditUserDialog() {
        this.addItem1();
        const dialogRef = this.dialog.open(src_app_user_security_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], {
            width: '940px', height: '850px', disableClose: true
        });
    }
    openUserChangeGroupDialog() {
        this.addItem();
        const dialogRef = this.dialog.open(src_app_user_security_user_changeusergroup_user_changeusergroup_component__WEBPACK_IMPORTED_MODULE_5__["UserChangeusergroupComponent"], {
            width: '700px', height: '350px',
        });
    }
    //constructor(public dialog: MatDialog) { }
    //openDialog() {
    //  const dialogRef = this.dialog.open(AddGroupComponent);
    //  dialogRef.afterClosed().subscribe(result => {
    //    console.log(`Dialog result: ${result}`);
    //  });
    //}
    Audittracking() {
        return this.http.get("https://sfwebservices.azurewebsites.net/AuditTracking");
    }
    GetGroupNameDes() {
        return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/groupsettingsdata");
    }
    GetUserList(check) {
        var active = check;
        let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]().set('userdatacheck', active);
        return this.http.get("https://sfwebservices.azurewebsites.net/usersettingsdata", { params: params1 });
    }
    setradio(e) {
        this.GetUserList(e).subscribe((result3) => {
            console.warn("result3", result3);
            this.data3 = result3;
        });
    }
    test() {
        return this.http.get("https://sfwebservices.azurewebsites.net/hello/vibin");
    }
    isSelected(name) {
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;
        }
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }
    ngOnInit() {
        this.Audittracking().subscribe((result1) => {
            console.warn("result1", result1);
            this.data1 = result1;
        });
        this.test().subscribe((result1) => {
            console.warn("AzureAppTest", result1);
            this.data1 = result1;
        });
        this.GetGroupNameDes().subscribe((result2) => {
            console.warn("result2", result2);
            this.data2 = result2;
        });
        this.GetUserList(this.valuecheck).subscribe((result3) => {
            console.warn("result3", result3);
            this.data3 = result3;
        });
        this.isSelected(this.name);
    }
};
UserSecurityComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_data_share_service_service__WEBPACK_IMPORTED_MODULE_8__["DataShareServiceService"] }
];
UserSecurityComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-security',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-security.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-security.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-security.component.css */ "./src/app/user-security/user-security.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], src_app_data_share_service_service__WEBPACK_IMPORTED_MODULE_8__["DataShareServiceService"]])
], UserSecurityComponent);



/***/ }),

/***/ "./src/app/user-security/user-set-permission/user-set-permission.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/user-security/user-set-permission/user-set-permission.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VjdXJpdHkvdXNlci1zZXQtcGVybWlzc2lvbi91c2VyLXNldC1wZXJtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-security/user-set-permission/user-set-permission.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user-security/user-set-permission/user-set-permission.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserSetPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetPermissionComponent", function() { return UserSetPermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let UserSetPermissionComponent = class UserSetPermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserSetPermissionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-set-permission',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-set-permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-security/user-set-permission/user-set-permission.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-set-permission.component.css */ "./src/app/user-security/user-set-permission/user-set-permission.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UserSetPermissionComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SmartFormulator-backup\Work Assigned 4272021\redesign\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
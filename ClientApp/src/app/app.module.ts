import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterPipe } from 'src/app/pipefilter';
import { FilterPipe1 } from 'src/app/filter.pipe';
import { pipfilter1 } from 'src/app/pipfilter1';
import { pipefilter2 } from 'src/app/pipefilter2';
import { pipefilterformulaname } from 'src/app/pipefilterformulaname';
import { pipefiltersorting } from 'src/app/pipefiltersorting';
import { sortingfilter } from 'src/sortingfilter';

import { UserSecurityComponent } from './user-security/user-security.component';
import { GroupSetPermissionComponent } from './user-security/group-set-permission/group-set-permission.component';
import { UserSetPermissionComponent } from './user-security/user-set-permission/user-set-permission.component';
import { AddGroupComponent } from './user-security/group-set-permission/add-group/add-group.component';
import { ChangePermissionComponent } from './user-security/group-set-permission/change-permission/change-permission.component';
import { CancelComponent } from './user-security/group-set-permission/add-group/cancel/cancel.component';
import { UserCreationComponent } from './user-security/user-creation/user-creation.component';
import { UserChangeusergroupComponent } from './user-security/user-changeusergroup/user-changeusergroup.component';
import { AddDepartmentComponent } from './user-security/user-creation/add-department/add-department.component';
import { ResetPasswordComponent } from './user-security/user-creation/reset-password/reset-password.component';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatToolbarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDialogModule,


} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { PdrManagementComponent } from './pdr-management/pdr-management.component';
import { AddCustomerComponent } from './pdr-management/add-customer/add-customer.component';
import { SearchProjectPdrComponent } from './pdr-management/search-project-pdr/search-project-pdr.component';
import { SearchCustomerPdrComponent } from './pdr-management/search-customer-pdr/search-customer-pdr.component';
import { SearchCustomerCustComponent } from './pdr-management/add-customer/search-customer-cust/search-customer-cust.component';
import { TermMasterCustComponent } from './pdr-management/add-customer/term-master-cust/term-master-cust.component';
import { SalesPersonCustComponent } from './pdr-management/add-customer/sales-person-cust/sales-person-cust.component';
import { EditUserComponent } from './user-security/edit-user/edit-user.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { AddSupplierComponent } from './raw-material/add-supplier/add-supplier.component';
import { SearchSupplierComponent } from './raw-material/add-supplier/search-supplier/search-supplier.component';

import { AddPrefixComponent } from './raw-material/add-supplier/add-prefix/add-prefix.component';
import { SearchINCINameComponent } from './raw-material/search-inci-name/search-inci-name.component';
import { RawSearchSupplierComponent } from './raw-search-supplier/raw-search-supplier.component';

import { CategoryMaintenanceComponent } from './raw-material/category-maintenance/category-maintenance.component';
import { SubCategoryMaintenanceComponent } from './raw-material/sub-category-maintenance/sub-category-maintenance.component';
import { AddCategoryComponent } from './raw-material/sub-category-maintenance/add-category/add-category.component';
import { LoadPropertyComponent } from './raw-material/load-property/load-property.component';
import { NewPropertyComponent } from './raw-material/load-property/new-property/new-property.component';
import { IngredientSearchComponent } from './raw-material/ingredient-search/ingredient-search.component';
import { AddCASDetailsComponent } from './raw-material/add-cas-details/add-cas-details.component';
import { RiskPhrasesComponent } from './raw-material/risk-phrases/risk-phrases.component';
import { SaftyPhrasesComponent } from './raw-material/safty-phrases/safty-phrases.component';
import { RMVPComponent } from './raw-material/rm-vp/rm-vp.component';
import { FunctionSearchComponent } from './raw-material/function-search/function-search.component';
import { AddFunctionComponent } from './raw-material/add-function/add-function.component';
import { RawAddSupplierComponent } from './raw-material/raw-add-supplier/raw-add-supplier.component';
import { TermsMasterComponent } from './raw-material/add-supplier/terms-master/terms-master.component';
import { SearchCASComponent } from './raw-material/add-cas-details/search-cas/search-cas.component';
import { SerachCategoryComponent } from './raw-material/sub-category-maintenance/serach-category/serach-category.component';
import { UnitOfMeasureComponent } from './unit-of-measure/unit-of-measure.component';
import { UnitmeasureMaintenanceComponent } from './unit-of-measure/unitmeasure-maintenance/unitmeasure-maintenance.component';
import { FormulaLookupComponent } from './formula-lookup/formula-lookup.component';
import { FormulaListingComponent } from './formula-listing/formula-listing.component';
import { SearchFormulaComponent } from './formula-lookup/search-formula/search-formula.component';
import { SearchPdrComponent } from './formula-lookup/search-pdr/search-pdr.component';
import { AddQCComponent } from './formula-lookup/add-qc/add-qc.component';
import { FormulaPropertyComponent } from './formula-lookup/formula-property/formula-property.component';
import { SelectPropertyComponent } from './formula-lookup/formula-property/select-property/select-property.component';
import { FormulaInstructionComponent } from './formula-lookup/formula-instruction/formula-instruction.component';
import { NewInstructionComponent } from './formula-lookup/formula-instruction/new-instruction/new-instruction.component';
import { PdrTrackStatusComponent } from './formula-lookup/pdr-track-status/pdr-track-status.component';
import { MarketingCalloutsComponent } from './formula-lookup/marketing-callouts/marketing-callouts.component';
import { CreateLabTktsComponent } from './formula-lookup/create-lab-tkts/create-lab-tkts.component';
import { AddMarketingIndicatorComponent } from './formula-lookup/add-marketing-indicator/add-marketing-indicator.component';
import { CustomerDetailsComponent } from './formula-lookup/customer-details/customer-details.component';
import { AddphystabilityTestComponent } from './formula-lookup/addphystability-test/addphystability-test.component';
import { AddProducttestingComponent } from './formula-lookup/add-producttesting/add-producttesting.component';
import { MaxFormulaComponent } from './formula-lookup/max-formula/max-formula.component';
import { FormulaStatusComponent } from './formula-lookup/formula-status/formula-status.component';
import { HlbCalculationComponent } from './formula-lookup/hlb-calculation/hlb-calculation.component';
import { PricingComponent } from './formula-lookup/pricing/pricing.component';
import { ScalabilityFactorComponent } from './formula-lookup/scalability-factor/scalability-factor.component';
import { CoaCompareComponent } from './formula-lookup/coa-compare/coa-compare.component';
import { FormulaGraphComponent } from './formula-lookup/formula-graph/formula-graph.component';
import { PropellantsvocCalculationComponent } from './formula-lookup/propellantsvoc-calculation/propellantsvoc-calculation.component';
import { AddproductTestingComponent } from './formula-lookup/addproduct-testing/addproduct-testing.component';
import { FrmNewPropertyComponent } from './formula-lookup/formula-property/select-property/frm-new-property/frm-new-property.component';
import { FormulaRestrictionComponent } from './formula-restriction/formula-restriction.component';
import { CheckRestrictionComponent } from './formula-lookup/check-restriction/check-restriction.component';
import { RawmaterialRestrictionComponent } from './formula-restriction/rawmaterial-restriction/rawmaterial-restriction.component';
import { RawmaterialRestrictionUsComponent } from './formula-restriction/rawmaterial-restriction-us/rawmaterial-restriction-us.component';
import { RawmaterialRestrictionProp65Component } from './formula-restriction/rawmaterial-restriction-prop65/rawmaterial-restriction-prop65.component';

import { IncinameSelectComponent } from './formula-lookup/inciname-select/inciname-select.component';
import { SearchCustomerComponent } from './formula-lookup/customer-details/search-customer/search-customer.component';
import { AddClientLocationComponent } from './formula-lookup/customer-details/add-client-location/add-client-location.component';
import {
  DxDataGridModule,
  
  DxTemplateModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';
import { SamplemoduleComponent } from './samplemodule/samplemodule.component';
import { LoadspecificationParameterComponent } from './pdr-management/loadspecification-parameter/loadspecification-parameter.component';
import { AddnewParamComponent } from './pdr-management/loadspecification-parameter/addnew-param/addnew-param.component';
import { ProjectRequirementsComponent } from './pdr-management/project-requirements/project-requirements.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatagridcomponentComponent } from './formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { SalesRepNameComponent } from './formula-lookup/customer-details/sales-rep-name/sales-rep-name.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewChemistryParamsComponent } from './pdr-management/new-chemistry-params/new-chemistry-params.component';
import { AddChemistryComponent } from './pdr-management/new-chemistry-params/add-chemistry/add-chemistry.component';
import { NewMicrobiologyParamsComponent } from './pdr-management/new-microbiology-params/new-microbiology-params.component';
import { AddMicrobiologyComponent } from './pdr-management/new-microbiology-params/add-microbiology/add-microbiology.component';
import { SearchProductsComponent } from './formula-lookup/customer-details/search-products/search-products.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageBoxYesnoComponent } from './message-box-yesno/message-box-yesno.component';
import { AssignPdrComponent } from './formula-lookup/assign-pdr/assign-pdr.component';
import { TradenameSelectComponent } from './formula-lookup/tradename-select/tradename-select.component';
import { ItemnameSelectComponent } from './formula-lookup/itemname-select/itemname-select.component';
import { ViewLabStabilityCoaComponent } from './formula-lookup/view-lab-stability-coa/view-lab-stability-coa.component';
import { AddcomponentTestComponent } from './formula-lookup/addcomponent-test/addcomponent-test.component';
import { QualityControlComponent } from './quality-control/quality-control.component';
import { AddQctestComponent } from './quality-control/add-qctest/add-qctest.component';
import { AddQcunitComponent } from './quality-control/add-qcunit/add-qcunit.component';
import { UpdateQcComponent } from './formula-lookup/update-qc/update-qc.component';
import { ImportCustPreferenceComponent } from './formula-lookup/customer-details/import-cust-preference/import-cust-preference.component';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { SupplierListingComponent } from './supplier-listing/supplier-listing.component';
import { RmsaveasComponent } from './raw-material/rmsaveas/rmsaveas.component';
import { SampleManagementComponent } from './sample-management/sample-management.component';
import { PDRListSearchComponent } from './sample-management/pdrlist-search/pdrlist-search.component';
import { SearchSubmissionComponent } from './sample-management/search-submission/search-submission.component';
import { UnapprovedRawmaterialComponent } from './sample-management/unapproved-rawmaterial/unapproved-rawmaterial.component';
import { SearchFormulalistComponent } from './sample-management/search-formulalist/search-formulalist.component';
import { AddLabnameComponent } from './formula-lookup/addproduct-testing/add-labname/add-labname.component';
import { AddTestnameComponent } from './formula-lookup/addproduct-testing/add-testname/add-testname.component';
import { ProductizationComponent } from './productization/productization.component';
import { AddApplicationComponent } from './productization/add-application/add-application.component';
import { AddBrandComponent } from './productization/add-brand/add-brand.component';
import { AddClasscodeComponent } from './productization/add-classcode/add-classcode.component';
import { AddClassificationComponent } from './productization/add-classification/add-classification.component';
import { AddComponentComponent } from './productization/add-component/add-component.component';
import { AddOemComponent } from './productization/add-oem/add-oem.component';
import { AddProductcategoryComponent } from './productization/add-productcategory/add-productcategory.component';
import { AddProductlineComponent } from './productization/add-productline/add-productline.component';
import { CmoComponent } from './productization/cmo/cmo.component';
import { NewCheComponent } from './productization/new-che/new-che.component';
import { NewMicrobComponent } from './productization/new-microb/new-microb.component';
import { SearchProductComponent } from './productization/search-product/search-product.component';
import { AddComponentcategoryComponent } from './productization/add-component/add-componentcategory/add-componentcategory.component';
import { SearchComponentComponent } from './productization/add-component/search-component/search-component.component';
import { SearchCmoComponent } from './productization/cmo/search-cmo/search-cmo.component';
import { AddcheComponent } from './productization/new-che/addche/addche.component';
import { AddmicroComponent } from './productization/new-microb/addmicro/addmicro.component';
import { ComponentlistingComponent } from './productization/componentlisting/componentlisting.component';
import { AddshippingregulatoryComponent } from './formula-lookup/addshippingregulatory/addshippingregulatory.component';
import { ComponentimportComponent } from './productization/componentimport/componentimport.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { SearchCategoryComponent } from './global-search/search-category/search-category.component';
import { SearchInciComponent } from './global-search/search-inci/search-inci.component';
import { SearchLabnotebookComponent } from './global-search/search-labnotebook/search-labnotebook.component';
import { SearchSubCategoryComponent } from './global-search/search-sub-category/search-sub-category.component';
import { SearchTradenameComponent } from './global-search/search-tradename/search-tradename.component';
import { CasLookUpComponent } from './cas-look-up/cas-look-up.component';
import { Searchcas2Component } from './cas-look-up/searchcas2/searchcas2.component';
import { SdsComponent } from './sds/sds.component';

const appRoutes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' }, { path: 'login', component: LoginLayoutComponent, children: [{ path: '', component: LoginComponent }] },
  {
    path: 'Home', component: HomeComponent, children: [{ path: '', component: HomepageComponent, pathMatch: 'full' }, 
      
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'AdminWork', component: AdminWorkComponent },
      { path: 'UserSecurity', component: UserSecurityComponent },
      { path: 'GroupSetPermission', component: GroupSetPermissionComponent },
      { path: 'UserSetPermission', component: UserSetPermissionComponent },
      { path: 'AddGroup', component: AddGroupComponent },
      { path: 'ChangePermission', component: ChangePermissionComponent },
      { path: 'UserCreation', component: UserCreationComponent },
      { path: 'UserChangeusergroup', component: UserChangeusergroupComponent },
      { path: 'AddDepartment', component: AddDepartmentComponent },
      { path: 'ResetPassword', component: ResetPasswordComponent },
      { path: 'PDRManagement', component: PdrManagementComponent },
      { path: 'addcustomer', component: AddCustomerComponent },
      { path: 'RawMaterial', component: RawMaterialComponent },
      { path: 'AddSupplier', component: AddSupplierComponent },
      { path: 'SearchSupplier', component: SearchSupplierComponent },
      { path: 'AddPrefix', component: AddPrefixComponent },
      { path: 'SearchINCIName', component: SearchINCINameComponent },
      { path: 'RawSearchSupplier', component: RawSearchSupplierComponent },
      { path: 'CategoryMaintenance', component: CategoryMaintenanceComponent },
      { path: 'SubCategoryMaintenance', component: SubCategoryMaintenanceComponent },
      { path: 'AddCategory', component: AddCategoryComponent },
      { path: 'LoadProperty', component: LoadPropertyComponent },
      { path: 'NewProperty', component: NewPropertyComponent },
      { path: 'IngredientSearch', component: IngredientSearchComponent },
      { path: 'AddCASDetails', component: AddCASDetailsComponent },
      { path: 'RiskPhrases', component: RiskPhrasesComponent },
      { path: 'SaftyPhrases', component: SaftyPhrasesComponent },
      { path: 'RMVP', component: RMVPComponent },
      { path: 'FunctionSearch', component: FunctionSearchComponent },
      { path: 'AddFunction', component: AddFunctionComponent },
      { path: 'TermsMaster', component: TermsMasterComponent },
      { path: 'SearchCAS', component: SearchCASComponent },
      { path: 'Unitofmeasure', component: UnitOfMeasureComponent },
      { path: 'Formulalookup', component: FormulaLookupComponent },
      { path: 'Formulalisting', component: FormulaListingComponent },
      { path: 'search_formula', component: SearchFormulaComponent },
      { path: 'search_pdr', component: SearchPdrComponent },
      { path: 'add_QC', component: AddQCComponent },
      { path: 'formulaproperty', component: FormulaPropertyComponent },
      { path: 'selectproperty', component: SelectPropertyComponent },
      { path: 'formulainstruction', component: FormulaInstructionComponent },
      { path: 'newinstruction', component: NewInstructionComponent },
      { path: 'pdrtrackingstatus', component: PdrTrackStatusComponent },
      { path: 'marketingcallouts', component: MarketingCalloutsComponent },
      { path: 'createlabbatchtkt', component: CreateLabTktsComponent },
      { path: 'AddMarketingIndicator', component: AddMarketingIndicatorComponent },
      { path: 'CustomerDetails', component: CustomerDetailsComponent },
      { path: 'AddphystabilityTest', component: AddphystabilityTestComponent },
      { path: 'Addproducttesting', component: AddProducttestingComponent },
      { path: 'Maxformula', component: MaxFormulaComponent },
      { path: 'formulastatus', component: FormulaStatusComponent },
      { path: 'HlbCalculation', component: HlbCalculationComponent },
      { path: 'Pricing', component: PricingComponent },
      { path: 'ScalabilityFactor', component: ScalabilityFactorComponent },
      { path: 'CoaCompare', component: CoaCompareComponent },
      { path: 'FormulaGraph', component: FormulaGraphComponent },
      { path: 'PropellantsvocCalculation', component: PropellantsvocCalculationComponent },
      { path: 'AddproductTesting', component: AddproductTestingComponent },
      { path: 'fmnewproperty', component: FrmNewPropertyComponent },
      { path: 'formularestriction', component: FormulaRestrictionComponent },
      { path: 'Checkrestriction', component: CheckRestrictionComponent },
      { path: 'Rawmaterial_restriction', component: RawmaterialRestrictionComponent },
      { path: 'Rawmaterial_restrictionUS', component: RawmaterialRestrictionUsComponent },
      { path: 'Rawmaterial_restrictionProp65', component: RawmaterialRestrictionProp65Component },
      { path: 'incinameselect', component: IncinameSelectComponent },

      { path: 'SearchCustomer', component: SearchCustomerComponent },
      { path: 'SearchProducts', component: SearchProductsComponent } ,
      { path: 'Assignpdr', component: AssignPdrComponent },
      { path: 'ViewLabbatchStability', component: ViewLabStabilityCoaComponent },
      { path: 'componentcompatibility', component: AddcomponentTestComponent },
      { path: 'qualitycontrol', component: QualityControlComponent },
      { path: 'AddQctest', component: AddQctestComponent },
      { path: 'AddQcunit', component: AddQcunitComponent },
      { path: 'UpdateQc', component: UpdateQcComponent },
      { path: 'SupplierListing', component: SupplierListingComponent },
      { path: 'Rmsaveas', component: RmsaveasComponent },
      { path: 'SampleManagementComponent', component: SampleManagementComponent },
      { path: 'formulastatus', component: FormulaStatusComponent },
      { path: 'AddTestname', component: AddTestnameComponent },
      { path: 'AddLabname', component: AddLabnameComponent },
      { path: 'Productization', component: ProductizationComponent },
      { path: 'AddProductline', component: AddProductlineComponent },
      { path: 'AddClasscode', component: AddClasscodeComponent },

      { path: 'AddClassification', component: AddClassificationComponent },
      { path: 'AddApplication', component: AddApplicationComponent },
      { path: 'AddOem', component: AddOemComponent },
      { path: 'AddBrand', component: AddBrandComponent },
      { path: 'AddProductcategory', component: AddProductcategoryComponent },
      { path: 'AddComponent', component: AddComponentComponent },
      { path: 'SearchComponent', component: SearchComponentComponent },
      { path: 'AddComponentcategory', component: AddComponentcategoryComponent },
      { path: 'NewChe', component: NewCheComponent },
      { path: 'NewMicrob', component: NewMicrobComponent },
      { path: 'Addche', component: AddcheComponent },
      { path: 'Addmicro', component: AddmicroComponent },

      { path: 'Cmo', component: CmoComponent },
      { path: 'SearchCmo', component: SearchCmoComponent },
      { path: 'SearchProduct', component: SearchProductComponent },
      { path: 'Componentlisting', component: ComponentlistingComponent },
      { path: 'Addshippingregulatory', component: AddshippingregulatoryComponent },
      { path: 'Componentimport', component: ComponentimportComponent },

       { path: 'globalsearch', component: GlobalSearchComponent },
      { path: 'searchcate', component: SearchCategoryComponent },
      { path: 'searchinci', component: SearchInciComponent },
      { path: 'searchlabnote', component: SearchLabnotebookComponent },
      { path: 'searchsubcate', component: SearchSubCategoryComponent },
      { path: 'searchtrade', component: SearchTradenameComponent },
      { path: 'Caslookup', component: CasLookUpComponent },
      { path: 'searchcas2', component: Searchcas2Component },
      { path: 'sds', component: SdsComponent }



      
    

    ]
  }
];



@NgModule({
  declarations: [
    
    AppComponent,
    FilterPipe,
    pipfilter1,
    pipefilter2,
    sortingfilter,
    pipefiltersorting,
    pipefilterformulaname,
    AddGroupComponent,
    ResetPasswordComponent,
    AddDepartmentComponent ,
    UserChangeusergroupComponent ,
    ChangePermissionComponent,
    GroupSetPermissionComponent,
    UserSecurityComponent,
    UserCreationComponent,
    UserSetPermissionComponent,
    CancelComponent ,
    NavMenuComponent,
    HomeComponent,
    FilterPipe1,
    
    FetchDataComponent,
    MenuItemComponent,
    AdminWorkComponent,
    PdrManagementComponent,
    AddCustomerComponent,
    SearchProjectPdrComponent,
    SearchCustomerPdrComponent,
    SearchCustomerCustComponent,
    TermMasterCustComponent,
    SalesPersonCustComponent,
    EditUserComponent,
    RawMaterialComponent,
    AddSupplierComponent,
    SearchSupplierComponent,
    AddPrefixComponent,
    SearchINCINameComponent,
    RawSearchSupplierComponent,
    CategoryMaintenanceComponent,
    SubCategoryMaintenanceComponent,
    AddCategoryComponent,
    LoadPropertyComponent,
    NewPropertyComponent,
    IngredientSearchComponent,
    AddCASDetailsComponent,
    RiskPhrasesComponent,
    SaftyPhrasesComponent,
    RMVPComponent,
    FunctionSearchComponent,
    AddFunctionComponent,
    RawAddSupplierComponent,
    TermsMasterComponent,
    SearchCASComponent,
    SerachCategoryComponent,
    UnitOfMeasureComponent,
    UnitmeasureMaintenanceComponent,
    FormulaLookupComponent,
    FormulaListingComponent,
    SearchFormulaComponent,
    SearchPdrComponent,
    AddQCComponent,
    FormulaPropertyComponent,
    SelectPropertyComponent,
    FormulaInstructionComponent,
    NewInstructionComponent,
    PdrTrackStatusComponent,
    MarketingCalloutsComponent,
    CreateLabTktsComponent,
    AddMarketingIndicatorComponent,
    CustomerDetailsComponent,
    AddphystabilityTestComponent,
    AddProducttestingComponent,
    MaxFormulaComponent,
    FormulaStatusComponent,
    HlbCalculationComponent,
    PricingComponent,
    ScalabilityFactorComponent,
    CoaCompareComponent,
    FormulaGraphComponent,
    PropellantsvocCalculationComponent,
    AddproductTestingComponent,
    FrmNewPropertyComponent,
    FormulaRestrictionComponent,
    CheckRestrictionComponent,
    RawmaterialRestrictionComponent,
    RawmaterialRestrictionUsComponent,
    RawmaterialRestrictionProp65Component,
    IncinameSelectComponent,
    SearchCustomerComponent,
    AddClientLocationComponent,
    SamplemoduleComponent,
    LoadspecificationParameterComponent,
    AddnewParamComponent,
    ProjectRequirementsComponent,
    DatagridcomponentComponent,
    SalesRepNameComponent,
    LoginComponent,
    LoginLayoutComponent,
    ToolbarComponent,
    HomepageComponent,
    NewChemistryParamsComponent,
    AddChemistryComponent,
    NewMicrobiologyParamsComponent,
    AddMicrobiologyComponent,
    SearchProductsComponent,
    MessageBoxComponent,
    MessageBoxYesnoComponent,
    AssignPdrComponent,
    TradenameSelectComponent,
    ItemnameSelectComponent,
    ViewLabStabilityCoaComponent,
    AddcomponentTestComponent,
    QualityControlComponent,
    AddQctestComponent,
    AddQcunitComponent,
    UpdateQcComponent,
    ImportCustPreferenceComponent,
    CustomerListingComponent,
    SupplierListingComponent,
    RmsaveasComponent,
    SampleManagementComponent,
    PDRListSearchComponent,
    SearchSubmissionComponent,
    UnapprovedRawmaterialComponent,
    SearchFormulalistComponent,
    AddLabnameComponent,
    AddTestnameComponent,
    ProductizationComponent,
    AddApplicationComponent,
    AddBrandComponent,
    AddClasscodeComponent,
    AddClassificationComponent,
    AddComponentComponent,
    AddOemComponent,
    AddProductcategoryComponent,
    AddProductlineComponent,
    CmoComponent,
    NewCheComponent,
    NewMicrobComponent,
    SearchProductComponent,
    AddComponentcategoryComponent,
    SearchComponentComponent,
    SearchCmoComponent,
    AddcheComponent,
    AddmicroComponent,
    ComponentlistingComponent,
    AddshippingregulatoryComponent,
    ComponentimportComponent,
    GlobalSearchComponent,
    SearchCategoryComponent,
    SearchInciComponent,
    SearchLabnotebookComponent,
    SearchSubCategoryComponent,
    SearchTradenameComponent,
    CasLookUpComponent,
    Searchcas2Component,
    SdsComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AgGridModule.withComponents([]),
    DxDataGridModule,
 
    DxTemplateModule,
    DxSelectBoxModule,
    DxButtonModule,
    DragDropModule,
 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SalesRepNameComponent, NewMicrobiologyParamsComponent, AddshippingregulatoryComponent, ComponentimportComponent, QualityControlComponent, AddQctestComponent, ProductizationComponent, AddProductlineComponent, AddClasscodeComponent, AddClassificationComponent, AddApplicationComponent, AddOemComponent, AddBrandComponent, AddProductcategoryComponent, AddComponentComponent, SearchComponentComponent, AddComponentcategoryComponent, NewCheComponent, NewMicrobComponent, AddcheComponent, ComponentlistingComponent,AddmicroComponent,CmoComponent,SearchCmoComponent,SearchProductComponent, AddQcunitComponent, UpdateQcComponent,SearchProductsComponent, AssignPdrComponent,
    AddMicrobiologyComponent, NewChemistryParamsComponent, AddChemistryComponent, AddLabnameComponent,AddTestnameComponent,RawmaterialRestrictionComponent, ProjectRequirementsComponent, LoadspecificationParameterComponent, AddnewParamComponent, AddClientLocationComponent, RawmaterialRestrictionUsComponent, SearchCustomerComponent, IncinameSelectComponent, RawmaterialRestrictionProp65Component, CheckRestrictionComponent, FrmNewPropertyComponent, AddproductTestingComponent, PropellantsvocCalculationComponent, PricingComponent, HlbCalculationComponent, ScalabilityFactorComponent, CoaCompareComponent, FormulaGraphComponent, FormulaStatusComponent, MaxFormulaComponent, AddProducttestingComponent, AddphystabilityTestComponent, CustomerDetailsComponent, AddMarketingIndicatorComponent, CreateLabTktsComponent, MarketingCalloutsComponent, PdrTrackStatusComponent, NewInstructionComponent, FormulaInstructionComponent, SelectPropertyComponent, FormulaPropertyComponent, AddQCComponent, SearchPdrComponent, SearchFormulaComponent, UnitmeasureMaintenanceComponent, UnitOfMeasureComponent, UserCreationComponent, SerachCategoryComponent, SearchProjectPdrComponent, SearchCustomerPdrComponent, SearchCustomerCustComponent, TermMasterCustComponent, SalesPersonCustComponent, EditUserComponent, AddSupplierComponent, SearchSupplierComponent, AddPrefixComponent, SearchINCINameComponent, RawSearchSupplierComponent, CategoryMaintenanceComponent, SubCategoryMaintenanceComponent, AddCategoryComponent, LoadPropertyComponent, NewPropertyComponent, IngredientSearchComponent, AddCASDetailsComponent, RiskPhrasesComponent, SaftyPhrasesComponent, RMVPComponent, FunctionSearchComponent, AddFunctionComponent, AddSupplierComponent, TermsMasterComponent, SearchCASComponent, MessageBoxComponent,
    MessageBoxYesnoComponent, FormulaLookupComponent, TradenameSelectComponent, ItemnameSelectComponent, ViewLabStabilityCoaComponent, AddcomponentTestComponent, RmsaveasComponent, PDRListSearchComponent, SearchSubmissionComponent, UnapprovedRawmaterialComponent, SearchFormulalistComponent, SearchCategoryComponent, SearchInciComponent, SearchLabnotebookComponent, SearchSubCategoryComponent, SearchTradenameComponent, CasLookUpComponent, Searchcas2Component]
})
export class AppModule { }

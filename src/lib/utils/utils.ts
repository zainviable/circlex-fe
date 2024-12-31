// import { useBusinessStore } from "@/app/store/businessStore";
// import { useUserStore } from "@/app/store/userStore";
// import { IExchangeRate, ValidatorFieldType } from "@/app/types/common";
// import { IRouteType } from "@/app/types/routes";
// import Cookies from "js-cookie";
// import {
//   ECOSYS_ROLE_PERMISSIONS,
//   ECOSYS_ROUTES,
//   ECOSYS_USER,
// } from "../constant";
// import dayjs from "dayjs";

import { ValidatorFieldType } from "@/types/common";

// export const ROUTE_NAMES = {
//   login: "/login",
//   dashboard: "/",
//   userManagement: "/setups/user-management",
//   createUser: "/setups/user-management/create",
//   updateUser: "/setups/user-management/update/:id",
//   warehouseManagement: "/setups/warehouse",
//   createWarehouse: "/setups/warehouse/create",
//   updateWarehouse: "/setups/warehouse/update/:id",
//   stationManagement: "/setups/station",
//   createStation: "/setups/station/create",
//   updateStation: "/setups/station/update/:id",
//   productionUnit: "/setups/production-unit",
//   createProductionUnit: "/setups/production-unit/create",
//   updateProductionUnit: "/setups/production-unit/update/:id",
//   business: "/setups/business",
//   createBusiness: "/setups/business/create",
//   updateBusiness: "/setups/business/update/:id",
//   companyManagement: "/setups/company",
//   createCompany: "/setups/company/create",
//   updateCompany: "/setups/company/update/:id",

//   family: "/setups/family",
//   createFamily: "/setups/family/create",
//   updateFamily: "/setups/family/update/:id",

//   roles: "/setups/roles",
//   createRole: "/setups/roles/create",
//   updateRole: "/setups/roles/update/:id",

//   uomManagement: "/setups/uom-management",
//   createUom: "/setups/uom-management/create",
//   updateUom: "/setups/uom-management/update/:id",

//   systemMessage: "/setups/system-messages",

//   portManagement: "/setups/port-management",
//   createPort: "/setups/port-management/create",
//   updatePort: "/setups/port-management/update/:id",

//   sourceManagement: "/setups/source",
//   createSource: "/setups/source/create",
//   updateSource: "/setups/source/update/:id",

//   statusManagement: "/setups/status",
//   createStatus: "/setups/status/create",
//   updateStatus: "/setups/status/update/:id",

//   productManagement: "/product",
//   createProduct: "/product/create",
//   updateProduct: "/product/update/:id",

//   expenseManagement: "/setups/expenses",
//   createExpense: "/setups/expenses/create",
//   updateExpense: "/setups/expenses/update/:id",

//   purchaseOrderManagement: "/purchase/purchase-order",
//   createPurchaseOrder: "/purchase/purchase-order/create",
//   updatePurchaseOrder: "/purchase/purchase-order/update/:id",

//   rawMaterialManagement: "/purchase/raw-material",
//   rawMaterialOutManagement: "/purchase/raw-material-out",
//   workInProgress: "/purchase/work-in-progress",

//   documentManagement: "/setups/document-management",
//   createDocument: "/setups/document-management/create",
//   updateDocument: "/setups/document-management/update/:id",

//   shippingLineManagement: "/setups/shipping-line",
//   createShippingLine: "/setups/shipping-line/create",
//   updateShippingLine: "/setups/shipping-line/update/:id",

//   hsCodeManagement: "/setups/hs-code-management",
//   createHsCode: "/setups/hs-code-management/create",
//   updateHsCode: "/setups/hs-code-management/update/:id",

//   agentManagement: "/setups/agent-management",
//   createAgent: "/setups/agent-management/create",
//   updateAgent: "/setups/agent-management/update/:id",

//   additionalPoRateManagement: "/setups/additional-po-rate",
//   createAdditionalPoRate: "/setups/additional-po-rate/create",
//   updateAdditionalPoRate: "/setups/additional-po-rate/update/:id",

//   bufferDateManagement: "/setups/buffer-dates",
//   holidayManagement: "/setups/holiday",

//   customerManagement: "/setups/customer",
//   createCustomer: "/setups/customer/create",
//   updateCustomer: "/setups/customer/update/:id",

//   productCategoryManagement: "/setups/product-category",
//   createProductCategory: "/setups/product-category/create",
//   updateProductCategory: "/setups/product-category/update/:id",

//   productCategoryManagement: "/setups/product-category",
//   createProductCategory: "/setups/product-category/create",
//   updateProductCategory: "/setups/product-category/update/:id",

//   qualityTestingManagement: "/setups/quality-testing",
//   createQualityTesting: "/setups/quality-testing/create",
//   updateQualityTesting: "/setups/quality-testing/update/:id",
//   qualitativeQualityManagement: "/setups/qualitative-quality",
//   quantitativeQualityManagement: "/setups/quantitative-quality",

//   ratingManagement: "/setups/rating",
//   createRating: "/setups/rating/create",
//   updateRating: "/setups/rating/update/:id",

//   brandingManagement: "/setups/branding-management",
//   createBranding: "/setups/branding-management/create",
//   updateBranding: "/setups/branding-management/update/:id",

//   packingMarginManagement: "/setups/packing-margin-management",
//   createPackingMargin: "/setups/packing-margin-management/create",
//   updatePackingMargin: "/setups/packing-margin-management/update/:id",

//   packingTypeManagement: "/setups/packing-type-management",
//   createPackingType: "/setups/packing-type-management/create",
//   updatePackingType: "/setups/packing-type-management/update/:id",

//   departmentManagement: "/setups/department-management",
//   createDepartment: "/setups/department-management/create",
//   updateDepartment: "/setups/department-management/update/:id",

//   notAllowed: "/not-allowed",
// };

// export const ROUTES: IRouteType[] = [
//   // AUTH ROUTES
//   {
//     name: "Login",
//     label: "Login",
//     path: ROUTE_NAMES.login,
//     isAuth: false,
//   },
//   // PRIVATE ROUTES
//   {
//     name: "Dashboard",
//     label: "Dashboard",
//     path: ROUTE_NAMES.dashboard,
//     isAuth: true,
//   },

//   {
//     name: "UserManagement",
//     label: "UserManagement",
//     path: ROUTE_NAMES.userManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createUser",
//     label: "createUser",
//     path: ROUTE_NAMES.createUser,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateUser",
//     label: "updateUser",
//     path: ROUTE_NAMES.updateUser,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "warehouseManagement",
//     label: "warehouseManagement",
//     path: ROUTE_NAMES.warehouseManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createWarehouse",
//     label: "createWarehouse",
//     path: ROUTE_NAMES.createWarehouse,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateWarehouse",
//     label: "updateWarehouse",
//     path: ROUTE_NAMES.updateWarehouse,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "productionUnit",
//     label: "productionUnit",
//     path: ROUTE_NAMES.productionUnit,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createProductionUnit",
//     label: "createProductionUnit",
//     path: ROUTE_NAMES.createProductionUnit,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateProductionUnit",
//     label: "updateProductionUnit",
//     path: ROUTE_NAMES.updateProductionUnit,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "business",
//     label: "business",
//     path: ROUTE_NAMES.business,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createBusiness",
//     label: "createBusiness",
//     path: ROUTE_NAMES.createBusiness,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateBusiness",
//     label: "updateBusiness",
//     path: ROUTE_NAMES.updateBusiness,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "roles",
//     label: "roles",
//     path: ROUTE_NAMES.roles,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createRole",
//     label: "createRole",
//     path: ROUTE_NAMES.createRole,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateRole",
//     label: "updateRole",
//     path: ROUTE_NAMES.updateRole,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "stationManagement",
//     label: "stationManagement",
//     path: ROUTE_NAMES.stationManagement,
//     isAuth: true,
//   },

//   {
//     name: "createStation",
//     label: "createStation",
//     path: ROUTE_NAMES.createStation,
//     isAuth: true,
//   },

//   {
//     name: "updateStation",
//     label: "updateStation",
//     path: ROUTE_NAMES.updateStation,
//     isAuth: true,
//     basePath: ROUTE_NAMES.updateStation?.replace(":id", ""),
//   },

//   {
//     name: "companyManagement",
//     label: "companyManagement",
//     path: ROUTE_NAMES.companyManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "createCompany",
//     label: "createCompany",
//     path: ROUTE_NAMES.createCompany,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateCompany",
//     label: "updateCompany",
//     path: ROUTE_NAMES.updateCompany,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "familyManagement",
//     label: "familyManagement",
//     path: ROUTE_NAMES.family,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createFamily",
//     label: "createFamily",
//     path: ROUTE_NAMES.createFamily,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateFamily",
//     label: "updateFamily",
//     path: ROUTE_NAMES.updateFamily,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "RoleManagement",
//     label: "RoleManagement",
//     path: ROUTE_NAMES.roles,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createRole",
//     label: "createRole",
//     path: ROUTE_NAMES.createRole,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateRole",
//     label: "updateRole",
//     path: ROUTE_NAMES.updateRole,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "UomManagement",
//     label: "UomManagement",
//     path: ROUTE_NAMES.uomManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createUom",
//     label: "createUom",
//     path: ROUTE_NAMES.createUom,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateUom",
//     label: "updateUom",
//     path: ROUTE_NAMES.updateUom,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "systemMessage",
//     label: "systemMessage",
//     path: ROUTE_NAMES.systemMessage,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "PortManagement",
//     label: "PortManagement",
//     path: ROUTE_NAMES.portManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createPort",
//     label: "createPort",
//     path: ROUTE_NAMES.createPort,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updatePort",
//     label: "updatePort",
//     path: ROUTE_NAMES.updatePort,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "SourceManagement",
//     label: "SourceManagement",
//     path: ROUTE_NAMES.sourceManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createSource",
//     label: "createSource",
//     path: ROUTE_NAMES.createSource,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateSource",
//     label: "updateSource",
//     path: ROUTE_NAMES.updateSource,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "StatusManagement",
//     label: "StatusManagement",
//     path: ROUTE_NAMES.statusManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createStatus",
//     label: "createStatus",
//     path: ROUTE_NAMES.createStatus,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "updateStatus",
//     label: "updateStatus",
//     path: ROUTE_NAMES.updateStatus,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "ProductManagement",
//     label: "ProductManagement",
//     path: ROUTE_NAMES.productManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createProduct",
//     label: "createProduct",
//     path: ROUTE_NAMES.createProduct,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "updateProduct",
//     label: "updateProduct",
//     path: ROUTE_NAMES.updateProduct,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "Expense Management",
//     label: "Expense Management",
//     path: ROUTE_NAMES.expenseManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createExpense",
//     label: "createExpense",
//     path: ROUTE_NAMES.createExpense,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "updateExpense",
//     label: "updateExpense",
//     path: ROUTE_NAMES.updateExpense,
//     isAuth: true,
//     isAdmin: true,
//   },

//   // PURCHASE ORDER MANAGEMENT

//   // {
//   //   name: "PurchaseOrder Management",
//   //   label: "PurchaseOrder Management",
//   //   path: ROUTE_NAMES.purchaseOrderManagement,
//   //   isAuth: true,
//   //   isAdmin: true,
//   // },
//   // {
//   //   name: "createPurchaseOrder",
//   //   label: "createPurchaseOrder",
//   //   path: ROUTE_NAMES.createPurchaseOrder,
//   //   isAuth: true,
//   //   isAdmin: true,
//   // },
//   // {
//   //   name: "updatePurchaseOrder",
//   //   label: "updatePurchaseOrder",
//   //   path: ROUTE_NAMES.updatePurchaseOrder,
//   //   isAuth: true,
//   //   isAdmin: true,
//   // },

//   {
//     name: "Document Management",
//     label: "Document Management",
//     path: ROUTE_NAMES.documentManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "createDocument",
//     label: "createDocument",
//     path: ROUTE_NAMES.createDocument,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "updateDocument",
//     label: "updateDocument",
//     path: ROUTE_NAMES.updateDocument,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "notAllowed",
//     label: "notAllowed",
//     path: ROUTE_NAMES.notAllowed,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "Raw Material",
//     label: "Raw Material",
//     path: ROUTE_NAMES.rawMaterialManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "Raw Material Out",
//     label: "Raw Material Out",
//     path: ROUTE_NAMES?.rawMaterialOutManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "workInProgress",
//     label: "workInProgress",
//     path: ROUTE_NAMES.workInProgress,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "ShippingLineManagement",
//     label: "ShippingLineManagement",
//     path: ROUTE_NAMES.shippingLineManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "ShippingLineCreate",
//     label: "ShippingLineCreate",
//     path: ROUTE_NAMES.createShippingLine,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "ShippingLineUpdate",
//     label: "ShippingLineUpdate",
//     path: ROUTE_NAMES.updateShippingLine,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "HSCodeManagement",
//     label: "HSCodeManagement",
//     path: ROUTE_NAMES.hsCodeManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "HsCodeCreate",
//     label: "HsCodeCreate",
//     path: ROUTE_NAMES.createHsCode,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "HsCodeUpdate",
//     label: "HsCodeUpdate",
//     path: ROUTE_NAMES.updateHsCode,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AgentManagement",
//     label: "AgentManagement",
//     path: ROUTE_NAMES.agentManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AgentCreate",
//     label: "AgentCreate",
//     path: ROUTE_NAMES.createAgent,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AgentUpdate",
//     label: "AgentUpdate",
//     path: ROUTE_NAMES.updateAgent,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AdditionalPORateManagement",
//     label: "AdditionalPORateManagement",
//     path: ROUTE_NAMES.additionalPoRateManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AdditionalPORateCreate",
//     label: "AdditionalPORateCreate",
//     path: ROUTE_NAMES.createAdditionalPoRate,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "AdditionalPORateUpdate",
//     label: "AdditionalPORateUpdate",
//     path: ROUTE_NAMES.updateAdditionalPoRate,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "CustomerManagement",
//     label: "CustomerManagement",
//     path: ROUTE_NAMES.customerManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "CustomerCreate",
//     label: "CustomerCreate",
//     path: ROUTE_NAMES.createCustomer,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "CustomerUpdate",
//     label: "CustomerUpdate",
//     path: ROUTE_NAMES.updateCustomer,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "bufferDateManagement",
//     label: "bufferDateManagement",
//     path: ROUTE_NAMES.bufferDateManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "holidayManagement",
//     label: "holidayManagement",
//     path: ROUTE_NAMES.holidayManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "qualityTestingManagement",
//     label: "qualityTestingManagement",
//     path: ROUTE_NAMES.qualityTestingManagement,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "product category",
//     label: "product category",
//     path: ROUTE_NAMES.productCategoryManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "qualityTestingCreate",
//     label: "qualityTestingCreate",
//     path: ROUTE_NAMES.createQualityTesting,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "product create",
//     label: "product create",
//     path: ROUTE_NAMES.createProductCategory,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "qualityTestingUpdate",
//     label: "qualityTestingUpdate",
//     path: ROUTE_NAMES.updateQualityTesting,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "brandingManagement",
//     label: "brandingManagement",
//     path: ROUTE_NAMES.brandingManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "brandingCreate",
//     label: "brandingCreate",
//     path: ROUTE_NAMES.createBranding,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "brandingUpdate",
//     label: "brandingUpdate",
//     path: ROUTE_NAMES.updateBranding,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "ratingManagement",
//     label: "ratingManagement",
//     path: ROUTE_NAMES.ratingManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "ratingCreate",
//     label: "ratingCreate",
//     path: ROUTE_NAMES.createRating,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "ratingUpdate",
//     label: "ratingUpdate",
//     path: ROUTE_NAMES.updateRating,
//     isAuth: true,
//     isAdmin: true,
//   },

//   {
//     name: "departmentManagement",
//     label: "Department Management",
//     path: ROUTE_NAMES.departmentManagement,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "departmentCreate",
//     label: "Department Create",
//     path: ROUTE_NAMES.createDepartment,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "departmentUpdate",
//     label: "Department Update",
//     path: ROUTE_NAMES.updateDepartment,
//     isAuth: true,
//     isAdmin: true,
//   },
//   {
//     name: "product update",
//     label: "product update",
//     path: ROUTE_NAMES.updateProductCategory,
//     isAuth: true,
//     isAdmin: true,
//   },
// ];

export const validatorField: ValidatorFieldType = (
  _,
  value = "",
  min = 3,
  max = 80,
  onlyNumber,
  isRequired = true
) => {
  if (isRequired && (!value || value?.length < 1)) {
    return Promise.reject(new Error("Field is required."));
  } else if (value?.length > 0 && value?.trim() === "") {
    return Promise.reject(new Error("Cannot accept only white spaces."));
  } else if (value?.length < min && isRequired) {
    return Promise.reject(
      new Error(`Must be equal or greater than ${min} characters.`)
    );
  } else if (value?.length > max) {
    return Promise.reject(
      new Error(`Must be less than ${max + 1} characters.`)
    );
  } else if (Number(value) < min && isRequired && onlyNumber) {
    return Promise.reject(new Error(`Must be equal or greater than ${min}.`));
  } else if (isRequired && onlyNumber && !/^\d+(\.\d+)?$/.test(value)) {
    return Promise.reject(new Error("Field must be a valid number."));
  } else if (
    !isRequired &&
    value?.length > 0 &&
    onlyNumber &&
    !/^\d+(\.\d+)?$/.test(value)
  ) {
    return Promise.reject(new Error("Field must be a valid number."));
  } else if (
    isRequired &&
    onlyNumber &&
    !/^\d+(\.\d+)?$/.test(value) &&
    parseInt(value) <= 0
  ) {
    return Promise.reject(new Error("Value must be greater than zero."));
  } else if (
    !isRequired &&
    value?.length > 0 &&
    onlyNumber &&
    !/^\d+(\.\d+)?$/.test(value) &&
    parseInt(value) <= 0
  ) {
    return Promise.reject(new Error("Value must be greater than zero."));
  } else {
    return Promise.resolve();
  }
};

// Function to group by a specific key
export const groupByKey = (array: any[], key: string) => {
  return array.reduce((result, currentValue) => {
    // Extract the value of the key
    const groupKey = currentValue[key];

    // If an array for this key doesn't exist yet, create it
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Push the current object to the array for its key
    result[groupKey].push(currentValue?.id);

    return result;
  }, {});
};

// export const getDeviceFingerPrint = async () => {
//   const components = await window.Fingerprint2.getPromise();
//   var values = components.map(function (component: any) {
//     return component.value;
//   });
//   var fingerprint = window.Fingerprint2.x64hash128(values.join(""), 31);

//   return fingerprint;
// };

export const getParsedObject = (string: string): any | null => {
  try {
    return JSON.parse(string ?? "");
  } catch (error) {
    return null;
  }
};

// export const emptyGlobalStatesOnLogout = () => {
//   useUserStore.setState(() => ({
//     fingerPrintAddress: "",
//     rolePermissions: [],
//     userInfo: null,
//   }));

//   useBusinessStore.setState(() => ({
//     allBusiness: [],
//     selectedBusiness: null,
//   }));

//   Cookies.remove(ECOSYS_USER);
//   Cookies.remove(ECOSYS_ROLE_PERMISSIONS);
//   Cookies.remove(ECOSYS_ROUTES);
// };

// Helper function to prepare the file for upload

export const prepareFileForUpload = async (file: File, fileName: string) => {
  const oldFileName = file?.name?.split(".");
  const extension = oldFileName[oldFileName.length - 1];
  const newFileName = `${fileName}-${dayjs().format(
    "YYYY-MM-DD-HH:mm:ss"
  )}.${extension}`;
  return new File([file], newFileName, { type: file.type });
};

export const downloadFile = (fileName: string) => {
  const uri = `${process.env.NEXT_PUBLIC_FILE_BASE_URL}download/${fileName}`;
  let link = document.createElement("a");
  link.download = fileName;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const VIDEO_TYPES: string[] = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/x-msvideo", // AVI
  "video/mpeg",
  "video/quicktime", // MOV
  "video/x-ms-wmv", // WMV
  "video/x-flv", // FLV
  "video/3gpp", // 3GP
];

// export const convertCurrency = (
//   currentCurrencyId: string,
//   buisnessCurrencyId: string,
//   currentRate: number = 0,
//   allRates: IExchangeRate[]
// ): number => {
//   if (currentCurrencyId === buisnessCurrencyId) {
//     return currentRate;
//   } else {
//     const findMyRate = allRates?.find(
//       (item) =>
//         item?.currencyId === buisnessCurrencyId &&
//         item?.exChangeRateCurrencyId === currentCurrencyId
//     );
//     if (findMyRate) {
//       return currentRate * findMyRate?.changeValue;
//     } else {
//       return currentRate;
//     }
//   }
// };

// export const convertCurrency = async (
//   currentCurrencyId: string,
//   businessCurrencyId: string,
//   currentRate: number = 0,
//   allRates: IExchangeRate[]
// ): Promise<number> => {
//   try {
//     // Return current rate if the currencies are the same
//     if (currentCurrencyId === businessCurrencyId) return currentRate;

//     // Find the exchange rate for the currencies
//     const exchangeRate = allRates?.find(
//       (rate) => rate?.exChangeRateCurrencyId === currentCurrencyId
//     );

//     // Return the converted rate or the default current rate
//     return exchangeRate ? currentRate * exchangeRate.changeValue : currentRate;
//   } catch (error) {
//     console.error(`Error in convertCurrency: ${error}`);
//     return currentRate; // Fallback to the current rate in case of an error
//   }
// };

export const lightenHexColor = (hex: string) => `${hex}1a`;

export function generateUUIDv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

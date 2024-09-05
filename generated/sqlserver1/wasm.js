
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.0
 * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
 */
Prisma.prismaVersion = {
  client: "5.19.0",
  engine: "5fe21811a6ba0b952a3bc71400666511fe3b902f"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.ALERTMSGScalarFieldEnum = {
  Form_Name: 'Form_Name',
  Alert_ID: 'Alert_ID',
  Alert_Type: 'Alert_Type',
  Alert_Desc: 'Alert_Desc',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.ALLCODEScalarFieldEnum = {
  IDX: 'IDX',
  Code_Name: 'Code_Name',
  Type_Name: 'Type_Name',
  Dept_IDs: 'Dept_IDs',
  Code_Val: 'Code_Val',
  Contents: 'Contents',
  Modify: 'Modify',
  IsDefault: 'IsDefault',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.APPVARScalarFieldEnum = {
  Var_Name: 'Var_Name',
  Data_Type: 'Data_Type',
  Var_Value: 'Var_Value',
  Var_Desc: 'Var_Desc',
  InputMask: 'InputMask',
  Modify: 'Modify',
  SWA_Code: 'SWA_Code',
  SWM_Code: 'SWM_Code',
  Disabled: 'Disabled'
};

exports.Prisma.AuthorityScalarFieldEnum = {
  Authority_ID: 'Authority_ID',
  Authority_Code: 'Authority_Code',
  Authority_Desc: 'Authority_Desc',
  Disabled: 'Disabled'
};

exports.Prisma.BarcodeDefScalarFieldEnum = {
  Barcode_IDX: 'Barcode_IDX',
  Barcode_Symb: 'Barcode_Symb',
  Barcode_Desc: 'Barcode_Desc',
  Prefix: 'Prefix',
  Barcode_Length: 'Barcode_Length',
  Obj_ID: 'Obj_ID',
  Barcode_TblName: 'Barcode_TblName',
  Barcode_FName: 'Barcode_FName',
  Obj_IDFName: 'Obj_IDFName',
  Obj_CodeFName: 'Obj_CodeFName',
  Disabled: 'Disabled'
};

exports.Prisma.BrandScalarFieldEnum = {
  Brand_ID: 'Brand_ID',
  Brand_Code: 'Brand_Code',
  MFC_ID: 'MFC_ID',
  Brand_Name: 'Brand_Name',
  Brand_Img: 'Brand_Img',
  GS_Grp_ID: 'GS_Grp_ID',
  Status: 'Status'
};

exports.Prisma.CashBalanceScalarFieldEnum = {
  Cashier_ID: 'Cashier_ID',
  Period_Code: 'Period_Code',
  Pmt_ID: 'Pmt_ID',
  CYS: 'CYS',
  CYS_Beg_Amt: 'CYS_Beg_Amt',
  CYS_In_Amt: 'CYS_In_Amt',
  CYS_Out_Amt: 'CYS_Out_Amt',
  Beg_Amt: 'Beg_Amt',
  In_Amt: 'In_Amt',
  Out_Amt: 'Out_Amt',
  Disabled: 'Disabled'
};

exports.Prisma.CashierScalarFieldEnum = {
  Cashier_ID: 'Cashier_ID',
  Cashier_Code: 'Cashier_Code',
  Cashier_Name: 'Cashier_Name',
  SCC_ID: 'SCC_ID',
  StkClust_ID: 'StkClust_ID',
  isSalePmt: 'isSalePmt',
  isPOS: 'isPOS',
  WS_ID: 'WS_ID',
  Shift_Qty: 'Shift_Qty',
  isClosed: 'isClosed',
  CashUser_ID: 'CashUser_ID',
  Shift_No: 'Shift_No',
  Shift_Date: 'Shift_Date',
  Disabled: 'Disabled'
};

exports.Prisma.CashTr_DTLScalarFieldEnum = {
  CashTr_No: 'CashTr_No',
  CashTr_Date: 'CashTr_Date',
  CashEfTr_Date: 'CashEfTr_Date',
  CashUser_ID: 'CashUser_ID',
  Cashier_ID: 'Cashier_ID',
  CashTrOrd_No: 'CashTrOrd_No',
  CashTrOrd_Date: 'CashTrOrd_Date',
  Pmt_ID: 'Pmt_ID',
  CYS: 'CYS',
  CYS_Amt: 'CYS_Amt',
  CashTr_Amt: 'CashTr_Amt',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code',
  CYS_Face_Val: 'CYS_Face_Val',
  Pmt_IDX: 'Pmt_IDX'
};

exports.Prisma.CashTr_HDRScalarFieldEnum = {
  CashTr_No: 'CashTr_No',
  CashTr_Date: 'CashTr_Date',
  CashEfTr_Date: 'CashEfTr_Date',
  CashUser_ID: 'CashUser_ID',
  Cashier_ID: 'Cashier_ID',
  Shift_No: 'Shift_No',
  OrderRef_No: 'OrderRef_No',
  CashTrCls_ID: 'CashTrCls_ID',
  Staff_ID: 'Staff_ID',
  StkTrans_No: 'StkTrans_No',
  StkTrans_Date: 'StkTrans_Date',
  SCC_ID: 'SCC_ID',
  StkClust_ID: 'StkClust_ID',
  CashTrOrd_No: 'CashTrOrd_No',
  CashTrOrd_Date: 'CashTrOrd_Date',
  CashOrd_Amt: 'CashOrd_Amt',
  CashTr_Amt: 'CashTr_Amt',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code'
};

exports.Prisma.CashTransClsScalarFieldEnum = {
  CashTrCls_ID: 'CashTrCls_ID',
  CashTrCls_Code: 'CashTrCls_Code',
  CashTrCls_Name: 'CashTrCls_Name',
  isSalePmt: 'isSalePmt',
  isPOS: 'isPOS',
  isShift: 'isShift',
  isMovement: 'isMovement',
  isInternal: 'isInternal',
  isBalance: 'isBalance',
  isAuto: 'isAuto',
  isCredit: 'isCredit',
  isDebit: 'isDebit',
  Disabled: 'Disabled'
};

exports.Prisma.CashTrOrderScalarFieldEnum = {
  CashTrOrd_No: 'CashTrOrd_No',
  CashTrOrd_Date: 'CashTrOrd_Date',
  OrderRef_No: 'OrderRef_No',
  CashTrCls_ID: 'CashTrCls_ID',
  SCC_ID: 'SCC_ID',
  STK_ID: 'STK_ID',
  OrgUnit_ID: 'OrgUnit_ID',
  OrdUser_ID: 'OrdUser_ID',
  Cashier_ID: 'Cashier_ID',
  Staff_ID: 'Staff_ID',
  CashTr_No: 'CashTr_No',
  CashTr_Date: 'CashTr_Date',
  CashOrd_Amt: 'CashOrd_Amt',
  CashTr_Amt: 'CashTr_Amt',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.COUNTERScalarFieldEnum = {
  Obj_ID: 'Obj_ID',
  Prefix: 'Prefix',
  Length: 'Length',
  Curr_ID: 'Curr_ID',
  Period_ID: 'Period_ID',
  Subfix: 'Subfix'
};

exports.Prisma.CountriesScalarFieldEnum = {
  Country_ID: 'Country_ID',
  Country_Code: 'Country_Code',
  Country_Name: 'Country_Name',
  Ctry_Resource_ID: 'Ctry_Resource_ID',
  CYS: 'CYS',
  Name: 'Name',
  Decimal: 'Decimal',
  BuyEx_Rate: 'BuyEx_Rate',
  MarkUp: 'MarkUp',
  MarkDown: 'MarkDown',
  Disabled: 'Disabled'
};

exports.Prisma.CouponInfoScalarFieldEnum = {
  Coupon_No: 'Coupon_No',
  CouponPrg_ID: 'CouponPrg_ID',
  Iss_Date: 'Iss_Date',
  Iss_Type: 'Iss_Type',
  IssTr_Num: 'IssTr_Num',
  Effect_Time: 'Effect_Time',
  Due_Time: 'Due_Time',
  CollectTr_Date: 'CollectTr_Date',
  CollectTr_Num: 'CollectTr_Num',
  Disabled: 'Disabled'
};

exports.Prisma.CouponPrgScalarFieldEnum = {
  CouponPrg_ID: 'CouponPrg_ID',
  CouponPrg_Code: 'CouponPrg_Code',
  CouponPrg_Name: 'CouponPrg_Name',
  Owner_ID: 'Owner_ID',
  SCC_ID: 'SCC_ID',
  Prefix: 'Prefix',
  Serial_Length: 'Serial_Length',
  Fr_Serial: 'Fr_Serial',
  Issued_Qty: 'Issued_Qty',
  Max_Qty: 'Max_Qty',
  Promotion_Code: 'Promotion_Code',
  PProg_ID: 'PProg_ID',
  Effect_Date: 'Effect_Date',
  Due_Date: 'Due_Date',
  Life_Hour: 'Life_Hour',
  Disabled: 'Disabled',
  Process: 'Process'
};

exports.Prisma.CURRENCYScalarFieldEnum = {
  CYS_ID: 'CYS_ID',
  CYS: 'CYS',
  Name: 'Name',
  Decimal: 'Decimal',
  Ctry_ID: 'Ctry_ID',
  BuyEX_Rate: 'BuyEX_Rate',
  MarkUp: 'MarkUp',
  MarkDown: 'MarkDown',
  Status: 'Status'
};

exports.Prisma.DayTypeScalarFieldEnum = {
  DayType_ID: 'DayType_ID',
  DayType_Code: 'DayType_Code',
  DayType_Desc: 'DayType_Desc',
  DOW: 'DOW',
  DOY: 'DOY',
  DOM: 'DOM',
  DOLY: 'DOLY',
  DOLM: 'DOLM',
  Disabled: 'Disabled'
};

exports.Prisma.DEPARTSScalarFieldEnum = {
  Dept_ID: 'Dept_ID',
  Dept_Code: 'Dept_Code',
  Dept_Name: 'Dept_Name',
  IsBasic: 'IsBasic',
  SubSys_IDs: 'SubSys_IDs',
  PEC_Type: 'PEC_Type',
  PEC_WSID: 'PEC_WSID',
  Status: 'Status'
};

exports.Prisma.DEVICESScalarFieldEnum = {
  DEV_TYPE: 'DEV_TYPE',
  DEV_CODE: 'DEV_CODE',
  DEV_NAME: 'DEV_NAME',
  DEV_PORT: 'DEV_PORT',
  COM_SET: 'COM_SET',
  STATUS: 'STATUS'
};

exports.Prisma.DEVSTSScalarFieldEnum = {
  DEV_TYPE: 'DEV_TYPE',
  DEV_CODE: 'DEV_CODE',
  DEV_PORT: 'DEV_PORT',
  COM_SET: 'COM_SET',
  WIND_DEV: 'WIND_DEV',
  USB_DEV: 'USB_DEV',
  OPOS_DEV: 'OPOS_DEV',
  WS_ID: 'WS_ID'
};

exports.Prisma.EVENTLOGCLSScalarFieldEnum = {
  ECls_ID: 'ECls_ID',
  ECls_Type: 'ECls_Type',
  ECls_Desc: 'ECls_Desc',
  EEng_Type: 'EEng_Type',
  ESYS_Type: 'ESYS_Type',
  Important: 'Important',
  Warn_Time: 'Warn_Time',
  Detect_Desc: 'Detect_Desc',
  Status: 'Status'
};

exports.Prisma.EVENTLOGSScalarFieldEnum = {
  ELog_ID: 'ELog_ID',
  ECls_ID: 'ECls_ID',
  SUnit_ID: 'SUnit_ID',
  ELog_Time: 'ELog_Time',
  ESent_Time: 'ESent_Time',
  ESent_ID: 'ESent_ID'
};

exports.Prisma.ExternalObjClsScalarFieldEnum = {
  ExtObjCls_ID: 'ExtObjCls_ID',
  ExtObjCls_Code: 'ExtObjCls_Code',
  ExtObjCls_Desc: 'ExtObjCls_Desc',
  Invoice_Type: 'Invoice_Type',
  ItemCls_IDs: 'ItemCls_IDs',
  ItemObj_ID: 'ItemObj_ID',
  Tbl_ItemName: 'Tbl_ItemName',
  Fld_CodeName: 'Fld_CodeName',
  Fld_DescName: 'Fld_DescName',
  Fld_DisabledName: 'Fld_DisabledName',
  Disabled: 'Disabled'
};

exports.Prisma.FC_ContractScalarFieldEnum = {
  FCContract_ID: 'FCContract_ID',
  FCContract_No: 'FCContract_No',
  Franchisee_ID: 'Franchisee_ID',
  FCC_Desc: 'FCC_Desc',
  Place_ID: 'Place_ID',
  Sign_Date: 'Sign_Date',
  Effective_Date: 'Effective_Date',
  Due_Date: 'Due_Date',
  Ext_Last_Date: 'Ext_Last_Date',
  Ext_Due_Date: 'Ext_Due_Date',
  Ext_Ref_No: 'Ext_Ref_No',
  Ext_No: 'Ext_No',
  Disabled: 'Disabled'
};

exports.Prisma.FC_Contract_PlaceScalarFieldEnum = {
  Franchisee_ID: 'Franchisee_ID',
  FCContract_ID: 'FCContract_ID',
  Place_ID: 'Place_ID',
  MinCVS_Qty: 'MinCVS_Qty',
  MaxCVS_Qty: 'MaxCVS_Qty',
  Royalty_Fix_Amt: 'Royalty_Fix_Amt',
  isGPDiscDeduct: 'isGPDiscDeduct',
  Royalty_Profit_Rate: 'Royalty_Profit_Rate',
  Waste_Loss_Rate: 'Waste_Loss_Rate',
  Inventory_Lost_Rate: 'Inventory_Lost_Rate',
  Promo_Cost_Rate: 'Promo_Cost_Rate',
  Capital_Interest_Rate: 'Capital_Interest_Rate',
  isAccAllCVS: 'isAccAllCVS',
  Disabled: 'Disabled'
};

exports.Prisma.FC_GPMarginScalarFieldEnum = {
  GGrp_ID: 'GGrp_ID',
  Place_ID: 'Place_ID',
  GP_Margin: 'GP_Margin',
  Disabled: 'Disabled'
};

exports.Prisma.FC_PeriodScalarFieldEnum = {
  Period_Code: 'Period_Code',
  Fr_Date: 'Fr_Date',
  To_Date: 'To_Date',
  StkClust_ID: 'StkClust_ID',
  FCContract_ID: 'FCContract_ID',
  Franchisee_ID: 'Franchisee_ID',
  isGPDiscDeduct: 'isGPDiscDeduct',
  Royalty_Profit_Rate: 'Royalty_Profit_Rate',
  Waste_Loss_Rate: 'Waste_Loss_Rate',
  Inventory_Lost_Rate: 'Inventory_Lost_Rate',
  Promo_Cost_Rate: 'Promo_Cost_Rate',
  Capital_Interest_Rate: 'Capital_Interest_Rate',
  Sale_Revenue_Amt: 'Sale_Revenue_Amt',
  Direct_Disc_Amt: 'Direct_Disc_Amt',
  Sale_Cost_Amt: 'Sale_Cost_Amt',
  Waste_Lost_Amt: 'Waste_Lost_Amt',
  Inventory_Lost_Amt: 'Inventory_Lost_Amt',
  Aver_Capital_Amt: 'Aver_Capital_Amt',
  Royalty_Fix_Amt: 'Royalty_Fix_Amt',
  Royal_Profit_Amt: 'Royal_Profit_Amt',
  Update_Date: 'Update_Date'
};

exports.Prisma.FC_Period_GrpScalarFieldEnum = {
  Period_Code: 'Period_Code',
  StkClust_ID: 'StkClust_ID',
  GGrp_ID: 'GGrp_ID',
  GP_Margin: 'GP_Margin',
  Sale_Cost_Amt: 'Sale_Cost_Amt',
  Waste_Lost_Amt: 'Waste_Lost_Amt',
  Inventory_Lost_Amt: 'Inventory_Lost_Amt',
  Aver_Capital_Amt: 'Aver_Capital_Amt'
};

exports.Prisma.FC_Period_GsScalarFieldEnum = {
  Period_Code: 'Period_Code',
  StkClust_ID: 'StkClust_ID',
  GGrp_ID: 'GGrp_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  GP_Margin: 'GP_Margin',
  RT_Price: 'RT_Price',
  Sale_Cost_Amt: 'Sale_Cost_Amt',
  Waste_Lost_Amt: 'Waste_Lost_Amt',
  Inventory_Lost_Amt: 'Inventory_Lost_Amt',
  Aver_Capital_Amt: 'Aver_Capital_Amt'
};

exports.Prisma.FC_StoreScalarFieldEnum = {
  StkClust_ID: 'StkClust_ID',
  Place_ID: 'Place_ID',
  FCContract_ID: 'FCContract_ID',
  Franchisee_ID: 'Franchisee_ID',
  Fr_Period_Code: 'Fr_Period_Code',
  To_Period_Code: 'To_Period_Code',
  Invoice_Code: 'Invoice_Code',
  Invoice_Symb: 'Invoice_Symb',
  Royalty_Fix_Amt: 'Royalty_Fix_Amt',
  isGPDiscDeduct: 'isGPDiscDeduct',
  Royalty_Profit_Rate: 'Royalty_Profit_Rate',
  Waste_Loss_Rate: 'Waste_Loss_Rate',
  Inventory_Lost_Rate: 'Inventory_Lost_Rate',
  Promo_Cost_Rate: 'Promo_Cost_Rate',
  Capital_Interest_Rate: 'Capital_Interest_Rate',
  Disabled: 'Disabled'
};

exports.Prisma.FFCategoryScalarFieldEnum = {
  FFCat_ID: 'FFCat_ID',
  FFCat_Name: 'FFCat_Name',
  Market_Desc: 'Market_Desc',
  FFCat_IDX: 'FFCat_IDX',
  Colour: 'Colour',
  Item_Qty: 'Item_Qty',
  SCC_ID: 'SCC_ID',
  StkType_ID: 'StkType_ID',
  Market_IDs: 'Market_IDs',
  Stk_ID: 'Stk_ID',
  WS_ID: 'WS_ID',
  Fr_DayTime: 'Fr_DayTime',
  To_DayTime: 'To_DayTime',
  DoW: 'DoW',
  Disabled: 'Disabled'
};

exports.Prisma.FFCategoryItemScalarFieldEnum = {
  FFCatItem_ID: 'FFCatItem_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  FFCat_ID: 'FFCat_ID',
  FFCatItem_IDX: 'FFCatItem_IDX',
  Disabled: 'Disabled'
};

exports.Prisma.FOBJSScalarFieldEnum = {
  Form_Name: 'Form_Name',
  FObj_Name: 'FObj_Name',
  FObj_Type: 'FObj_Type',
  FObj_Desc: 'FObj_Desc',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.FORMSScalarFieldEnum = {
  Form_Name: 'Form_Name',
  Form_Desc: 'Form_Desc',
  Status: 'Status',
  Form_Type: 'Form_Type'
};

exports.Prisma.FranchiseeScalarFieldEnum = {
  Franchisee_ID: 'Franchisee_ID',
  CurrCVS_Qty: 'CurrCVS_Qty',
  First_Open: 'First_Open',
  Last_Open: 'Last_Open',
  Disabled: 'Disabled'
};

exports.Prisma.FUNCTIONSScalarFieldEnum = {
  FUNC_ID: 'FUNC_ID',
  FUNC_CODE: 'FUNC_CODE',
  FUNC_DESC: 'FUNC_DESC',
  COMMENT: 'COMMENT',
  COMMAND: 'COMMAND',
  DEPT_CODE: 'DEPT_CODE',
  STATUS: 'STATUS'
};

exports.Prisma.GEOPLACESScalarFieldEnum = {
  PLC_ID: 'PLC_ID',
  PLC_CODE: 'PLC_CODE',
  P_PLACE_ID: 'P_PLACE_ID',
  COUNTRY_ID: 'COUNTRY_ID',
  LAST_LEVEL: 'LAST_LEVEL',
  PLC_NAME: 'PLC_NAME',
  PLC_LVL: 'PLC_LVL',
  RESOURCE_ID: 'RESOURCE_ID',
  STATUS: 'STATUS'
};

exports.Prisma.GoodsScalarFieldEnum = {
  Goods_ID: 'Goods_ID',
  Goods_Code: 'Goods_Code',
  Short_Name: 'Short_Name',
  Full_Name: 'Full_Name',
  Goods_Div_ID: 'Goods_Div_ID',
  Goods_Class_ID: 'Goods_Class_ID',
  Goods_Grp_ID: 'Goods_Grp_ID',
  Goods_AccCls_ID: 'Goods_AccCls_ID',
  Family_ID: 'Family_ID',
  GType_ID: 'GType_ID',
  isSKUByQty: 'isSKUByQty',
  isSKUByAmt: 'isSKUByAmt',
  isPurcItem: 'isPurcItem',
  isSaleItem: 'isSaleItem',
  isPromotion: 'isPromotion',
  isExpiry: 'isExpiry',
  Is4SaleOrder: 'Is4SaleOrder',
  SOrder_Days: 'SOrder_Days',
  SOrder_MinQty: 'SOrder_MinQty',
  LifeTime_Code: 'LifeTime_Code',
  isWarranty: 'isWarranty',
  WarrTime_Code: 'WarrTime_Code',
  isLot: 'isLot',
  isAutoLot: 'isAutoLot',
  isSerial: 'isSerial',
  isAutoSerial: 'isAutoSerial',
  PLU_ID: 'PLU_ID',
  isPLUbyCost: 'isPLUbyCost',
  KIT_ID: 'KIT_ID',
  Matrix_ID: 'Matrix_ID',
  Season_ID: 'Season_ID',
  GsBOM_ID: 'GsBOM_ID',
  GAGrp_ID: 'GAGrp_ID',
  isOutOfList: 'isOutOfList',
  Tax_ID: 'Tax_ID',
  Image: 'Image',
  GrossMargin: 'GrossMargin',
  MinGrossMargin: 'MinGrossMargin',
  MaxGrossMargin: 'MaxGrossMargin',
  SKUBase_Unit: 'SKUBase_Unit',
  SKUSubs_ID: 'SKUSubs_ID',
  SubsUnit_ID: 'SubsUnit_ID',
  Cost_Type: 'Cost_Type',
  CostDueDay: 'CostDueDay',
  Disabled: 'Disabled',
  StartSaleDate: 'StartSaleDate',
  DueSaleDate: 'DueSaleDate'
};

exports.Prisma.GoodsGrpScalarFieldEnum = {
  GGrp_ID: 'GGrp_ID',
  GGrp_Code: 'GGrp_Code',
  GGrp_Name: 'GGrp_Name',
  ItemGrpSet_Code: 'ItemGrpSet_Code',
  GGrp_Level: 'GGrp_Level',
  ParentGrp_ID: 'ParentGrp_ID',
  Last_Level: 'Last_Level',
  GType_ID: 'GType_ID',
  Tax_ID: 'Tax_ID',
  Image: 'Image',
  GrossMargin: 'GrossMargin',
  MinGrossMargin: 'MinGrossMargin',
  MaxGrossMargin: 'MaxGrossMargin',
  Decimal: 'Decimal',
  Disabled: 'Disabled'
};

exports.Prisma.GoodsInfoScalarFieldEnum = {
  Goods_ID: 'Goods_ID',
  MFC_ID: 'MFC_ID',
  Brand_ID: 'Brand_ID',
  Draw_No: 'Draw_No',
  Product_Code: 'Product_Code',
  Model_No: 'Model_No',
  CO: 'CO',
  Assembled: 'Assembled',
  Importer: 'Importer',
  Weight_Unit: 'Weight_Unit',
  Weight_Qty: 'Weight_Qty',
  Dim_Unit: 'Dim_Unit',
  Length_Qty: 'Length_Qty',
  Breadth_Qty: 'Breadth_Qty',
  Height_Qty: 'Height_Qty',
  Volume_Unit: 'Volume_Unit',
  Volume_Qty: 'Volume_Qty',
  Price_Type: 'Price_Type',
  Sales_Block: 'Sales_Block',
  OPL_Limit: 'OPL_Limit',
  ORD_Right: 'ORD_Right',
  IsBulkItem: 'IsBulkItem',
  GS_Img_Icon: 'GS_Img_Icon',
  GS_Img_01: 'GS_Img_01',
  GS_Img_02: 'GS_Img_02',
  GS_Img_03: 'GS_Img_03',
  GS_Img_04: 'GS_Img_04',
  GS_Img_05: 'GS_Img_05',
  GS_Img_06: 'GS_Img_06',
  GS_Description: 'GS_Description',
  Userdef1: 'Userdef1',
  Userdef2: 'Userdef2'
};

exports.Prisma.GoodsNoticeScalarFieldEnum = {
  Good_ID: 'Good_ID',
  ObjEvent_Code: 'ObjEvent_Code',
  Notice_Contents: 'Notice_Contents',
  Disabled: 'Disabled'
};

exports.Prisma.GoodsSetScalarFieldEnum = {
  GSet_ID: 'GSet_ID',
  GSet_Code: 'GSet_Code',
  GSet_Desc: 'GSet_Desc',
  GSet_Type: 'GSet_Type',
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  IsRTPProg: 'IsRTPProg',
  IsWSPProg: 'IsWSPProg',
  IsSPPProg: 'IsSPPProg',
  Ref_No: 'Ref_No',
  Ref_Date: 'Ref_Date',
  User_ID: 'User_ID',
  Last_Date: 'Last_Date',
  Disabled: 'Disabled'
};

exports.Prisma.GoodsTypeScalarFieldEnum = {
  GType_ID: 'GType_ID',
  GType_Code: 'GType_Code',
  GType_Name: 'GType_Name',
  DefForm_Name: 'DefForm_Name',
  ExtraAttrTable: 'ExtraAttrTable',
  isSKUByQty: 'isSKUByQty',
  isSKUByAmt: 'isSKUByAmt',
  isPurcItem: 'isPurcItem',
  isSaleItem: 'isSaleItem',
  isExpiry: 'isExpiry',
  isWarranty: 'isWarranty',
  isLot: 'isLot',
  isAutoLot: 'isAutoLot',
  isSerial: 'isSerial',
  isAutoSerial: 'isAutoSerial',
  isPLU: 'isPLU',
  isKit: 'isKit',
  isMatrix: 'isMatrix',
  isSeason: 'isSeason',
  isGsBOM: 'isGsBOM',
  isMultiAttrs: 'isMultiAttrs',
  isPromotion: 'isPromotion',
  isOutOfList: 'isOutOfList',
  Disabled: 'Disabled'
};

exports.Prisma.GSetItemsScalarFieldEnum = {
  GSet_ID: 'GSet_ID',
  GSItem_IDX: 'GSItem_IDX',
  GSICls_ID: 'GSICls_ID',
  GSItem_ID: 'GSItem_ID',
  GSItem_Code: 'GSItem_Code',
  RT_Price: 'RT_Price',
  WS_Price: 'WS_Price',
  SP_Price: 'SP_Price',
  isVATInc: 'isVATInc',
  isIncExc: 'isIncExc',
  Disabled: 'Disabled'
};

exports.Prisma.HIS_ItemMasterScalarFieldEnum = {
  Event_IDX: 'Event_IDX',
  Event_Date: 'Event_Date',
  StkClust_ID: 'StkClust_ID',
  User_ID: 'User_ID'
};

exports.Prisma.HIS_RTPriceScalarFieldEnum = {
  Event_IDX: 'Event_IDX',
  Event_Date: 'Event_Date',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  MasterImpAct_Type: 'MasterImpAct_Type',
  RTPLevel_ID: 'RTPLevel_ID',
  Old_RT_Price: 'Old_RT_Price',
  RT_Price: 'RT_Price'
};

exports.Prisma.HRMCodeScalarFieldEnum = {
  HRMEvent_Code: 'HRMEvent_Code',
  HRM_Code: 'HRM_Code',
  Fr_Datetime: 'Fr_Datetime',
  To_Datetime: 'To_Datetime',
  SCC_ID: 'SCC_ID',
  StkType_ID: 'StkType_ID',
  StkClust_ID: 'StkClust_ID',
  Approved_Time: 'Approved_Time',
  AprovedUser_ID: 'AprovedUser_ID',
  Received_Time: 'Received_Time'
};

exports.Prisma.ItemGrpSetScalarFieldEnum = {
  ItemGrpSet_ID: 'ItemGrpSet_ID',
  ItemGrpSet_Code: 'ItemGrpSet_Code',
  ItemGrpSet_Label: 'ItemGrpSet_Label',
  ItemGrpSet_Name: 'ItemGrpSet_Name',
  Resource_ID: 'Resource_ID',
  GrpObj_ID: 'GrpObj_ID',
  Obj_ID: 'Obj_ID',
  GrpTbl_Name: 'GrpTbl_Name',
  ObjTbl_Name: 'ObjTbl_Name',
  Disabled: 'Disabled'
};

exports.Prisma.KitInfoScalarFieldEnum = {
  KIT_ID: 'KIT_ID',
  GOODS_ID: 'GOODS_ID',
  SKU_Code: 'SKU_Code',
  Qty: 'Qty',
  RT_Price: 'RT_Price',
  isVATInc: 'isVATInc',
  Disc_PC: 'Disc_PC',
  Disc_Amt: 'Disc_Amt',
  Status: 'Status'
};

exports.Prisma.KitsScalarFieldEnum = {
  KIT_ID: 'KIT_ID',
  KIT_Code: 'KIT_Code',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  KIT_TYPE: 'KIT_TYPE',
  IsSKUbyQty: 'IsSKUbyQty',
  Descript: 'Descript',
  SCC_ID: 'SCC_ID',
  RTPLevel_ID: 'RTPLevel_ID',
  RTPR_Fixed: 'RTPR_Fixed',
  RT_Price: 'RT_Price',
  isVATInc: 'isVATInc',
  Label_Type: 'Label_Type',
  RailCard_Type: 'RailCard_Type',
  RailCard_Qty: 'RailCard_Qty',
  Open_Date: 'Open_Date',
  Last_Date: 'Last_Date',
  Disabled: 'Disabled',
  Process: 'Process'
};

exports.Prisma.LeaveDaysScalarFieldEnum = {
  LeaveDate: 'LeaveDate',
  DayTime_ID: 'DayTime_ID',
  BUArea_ID: 'BUArea_ID',
  Store_ID: 'Store_ID',
  Leave_Desc: 'Leave_Desc',
  Disabled: 'Disabled'
};

exports.Prisma.LOGCLSScalarFieldEnum = {
  LogCls_Code: 'LogCls_Code',
  LogCls_Desc: 'LogCls_Desc',
  Status: 'Status'
};

exports.Prisma.LogistAreaScalarFieldEnum = {
  LogistArea_ID: 'LogistArea_ID',
  LogistArea_Code: 'LogistArea_Code',
  Description: 'Description',
  ShortName_Eng: 'ShortName_Eng',
  ShortName_VN: 'ShortName_VN',
  Disabled: 'Disabled'
};

exports.Prisma.LogistPackScalarFieldEnum = {
  LogistServ_ID: 'LogistServ_ID',
  LogistPack_Code: 'LogistPack_Code',
  Description: 'Description',
  ShortName_Eng: 'ShortName_Eng',
  ShortName_VN: 'ShortName_VN',
  Disabled: 'Disabled'
};

exports.Prisma.LogistServiceScalarFieldEnum = {
  LogistServ_ID: 'LogistServ_ID',
  LogistServ_Code: 'LogistServ_Code',
  Goods_ID: 'Goods_ID',
  ServPmtTMode: 'ServPmtTMode',
  LogistPack_ID: 'LogistPack_ID',
  Fr_LogistArea_ID: 'Fr_LogistArea_ID',
  To_LogistArea_ID: 'To_LogistArea_ID',
  RTPrice: 'RTPrice',
  Partner_ID: 'Partner_ID',
  Open_Date: 'Open_Date',
  Last_Date: 'Last_Date',
  Disabled: 'Disabled'
};

exports.Prisma.LOGSScalarFieldEnum = {
  Log_ID: 'Log_ID',
  LogCls_Code: 'LogCls_Code',
  Log_Date: 'Log_Date',
  Log_Time: 'Log_Time',
  User_ID: 'User_ID',
  WS_ID: 'WS_ID',
  OLD: 'OLD',
  NEW: 'NEW',
  Obj_ID: 'Obj_ID',
  ObjKey_Code: 'ObjKey_Code',
  Event_ID: 'Event_ID',
  Event_Code: 'Event_Code',
  Status: 'Status'
};

exports.Prisma.ManufacturerScalarFieldEnum = {
  MFC_ID: 'MFC_ID',
  MFC_Code: 'MFC_Code',
  MFC_Name: 'MFC_Name',
  Country_ID: 'Country_ID',
  Disabled: 'Disabled'
};

exports.Prisma.MENUSScalarFieldEnum = {
  Key_ID: 'Key_ID',
  IDX: 'IDX',
  Bar_ID: 'Bar_ID',
  Parent_ID: 'Parent_ID',
  Last_Level: 'Last_Level',
  Prompt: 'Prompt',
  Password: 'Password',
  HotKey: 'HotKey',
  BasicRight: 'BasicRight',
  Skip: 'Skip',
  ProcName: 'ProcName',
  Message: 'Message',
  Dept_IDs: 'Dept_IDs',
  Obj_IDs: 'Obj_IDs',
  IsAPSMenus: 'IsAPSMenus',
  IsBDSMenus: 'IsBDSMenus',
  IsPOSMenus: 'IsPOSMenus',
  IsRESMenus: 'IsRESMenus',
  Status: 'Status',
  Resource_ID: 'Resource_ID',
  Image: 'Image'
};

exports.Prisma.MessageClsScalarFieldEnum = {
  MsgCls_ID: 'MsgCls_ID',
  MsgCls_Code: 'MsgCls_Code',
  MsgCls_Desc: 'MsgCls_Desc',
  MsgCls_Img: 'MsgCls_Img',
  Obj_ID: 'Obj_ID',
  isSys: 'isSys',
  API_Create: 'API_Create',
  API_Disp: 'API_Disp',
  Status: 'Status'
};

exports.Prisma.MsgClsPartScalarFieldEnum = {
  MsgCls_ID: 'MsgCls_ID',
  Part_IDX: 'Part_IDX',
  Part_Desc: 'Part_Desc',
  Part_Caption: 'Part_Caption',
  MsgCls_Img: 'MsgCls_Img',
  Data_Type: 'Data_Type',
  Status: 'Status'
};

exports.Prisma.NODESScalarFieldEnum = {
  Node_ID: 'Node_ID',
  Node_Code: 'Node_Code',
  Node_Desc: 'Node_Desc',
  Node_Addr: 'Node_Addr',
  SUnit_ID: 'SUnit_ID',
  OSServ_Name: 'OSServ_Name',
  OSServ_IP: 'OSServ_IP',
  DBServ_Type: 'DBServ_Type',
  DBServ_Name: 'DBServ_Name',
  DBServ_Login: 'DBServ_Login',
  DBServ_PW: 'DBServ_PW',
  PRCls_ID: 'PRCls_ID',
  Status: 'Status',
  IsInventory: 'IsInventory'
};

exports.Prisma.OBJEVENTSScalarFieldEnum = {
  Obj_ID: 'Obj_ID',
  Obj_Code: 'Obj_Code',
  Event_Idx: 'Event_Idx',
  Event_Code: 'Event_Code',
  Event_Desc: 'Event_Desc',
  isOnline: 'isOnline',
  isReply: 'isReply',
  Priority: 'Priority',
  isLocal: 'isLocal',
  isPublic: 'isPublic',
  Create_Proc: 'Create_Proc',
  WS_Proc: 'WS_Proc',
  BDS_Proc: 'BDS_Proc',
  App_Proc: 'App_Proc',
  Para_XML: 'Para_XML',
  Status: 'Status',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.OBJGRPEVTScalarFieldEnum = {
  ObjGrp_Code: 'ObjGrp_Code',
  Event_Idx: 'Event_Idx',
  Event_Name: 'Event_Name',
  Event_Desc: 'Event_Desc',
  Status: 'Status',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.OBJGRPSScalarFieldEnum = {
  ObjGrp_Code: 'ObjGrp_Code',
  ObjGrp_Idx: 'ObjGrp_Idx',
  ObjGrp_Type: 'ObjGrp_Type',
  ObjGrp_Desc: 'ObjGrp_Desc',
  isUserRight: 'isUserRight',
  isEventLimit: 'isEventLimit',
  isDayLimit: 'isDayLimit',
  isPassDay: 'isPassDay',
  isMembRight: 'isMembRight',
  Status: 'Status',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.OBJSScalarFieldEnum = {
  Obj_ID: 'Obj_ID',
  Obj_Code: 'Obj_Code',
  Obj_Idx: 'Obj_Idx',
  ObjGrp_Code: 'ObjGrp_Code',
  ObjLimit_IDs: 'ObjLimit_IDs',
  Obj_Desc: 'Obj_Desc',
  Obj_TblName: 'Obj_TblName',
  Obj_KeyField: 'Obj_KeyField',
  Obj_DBType: 'Obj_DBType',
  Desc_Field: 'Desc_Field',
  Search_Field: 'Search_Field',
  Status: 'Status',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.Partner_BankScalarFieldEnum = {
  BankAcc_No: 'BankAcc_No',
  Bank_ID: 'Bank_ID',
  BankAcc_Cys: 'BankAcc_Cys',
  BankAcc_Name: 'BankAcc_Name',
  BkAcc_EName: 'BkAcc_EName',
  BkBranch_Addr: 'BkBranch_Addr',
  Partner_ID: 'Partner_ID',
  PLoca_ID: 'PLoca_ID',
  Status: 'Status'
};

exports.Prisma.Partner_LocScalarFieldEnum = {
  PLoca_ID: 'PLoca_ID',
  PLoca_Code: 'PLoca_Code',
  Partner_ID: 'Partner_ID',
  PLoca_Type: 'PLoca_Type',
  PLoca_Name: 'PLoca_Name',
  PLoca_Address: 'PLoca_Address',
  Place_ID: 'Place_ID',
  Longitude: 'Longitude',
  Latitude: 'Latitude',
  Status: 'Status'
};

exports.Prisma.Partner_PICScalarFieldEnum = {
  PPIC_ID: 'PPIC_ID',
  PPIC_Code: 'PPIC_Code',
  Partner_ID: 'Partner_ID',
  PLoca_ID: 'PLoca_ID',
  Position_Type: 'Position_Type',
  PIC_Name: 'PIC_Name',
  PIC_ID_No: 'PIC_ID_No',
  PIC_Sex: 'PIC_Sex',
  PIC_Birthday: 'PIC_Birthday',
  PIC_Tel: 'PIC_Tel',
  PIC_Fax: 'PIC_Fax',
  PIC_Email: 'PIC_Email',
  Nick_Chat: 'Nick_Chat',
  Status: 'Status'
};

exports.Prisma.Partner_TypeScalarFieldEnum = {
  PType_ID: 'PType_ID',
  PType_Symb: 'PType_Symb',
  Ptype_Desc: 'Ptype_Desc',
  Invoice_Type: 'Invoice_Type',
  ItemCls_IDs: 'ItemCls_IDs',
  Obj_ID: 'Obj_ID',
  Status: 'Status'
};

exports.Prisma.PartnersScalarFieldEnum = {
  Partner_ID: 'Partner_ID',
  Partner_Code: 'Partner_Code',
  PType_ID: 'PType_ID',
  PartCtg_ID: 'PartCtg_ID',
  Area_IDs: 'Area_IDs',
  GLDept_Code: 'GLDept_Code',
  ItemCls_IDs: 'ItemCls_IDs',
  ItemRef_Code: 'ItemRef_Code',
  Full_Name: 'Full_Name',
  Short_Name: 'Short_Name',
  Bill_Address: 'Bill_Address',
  Place_ID: 'Place_ID',
  Country_ID: 'Country_ID',
  Business_No: 'Business_No',
  Tax_No: 'Tax_No',
  ExtObjCls_IDs: 'ExtObjCls_IDs',
  Disabled: 'Disabled'
};

exports.Prisma.PARTTYPEScalarFieldEnum = {
  PType_ID: 'PType_ID',
  PType_Code: 'PType_Code',
  Subs_Code: 'Subs_Code',
  Descript: 'Descript',
  PatchUpd_Proc: 'PatchUpd_Proc',
  PatchUpd_DLL: 'PatchUpd_DLL',
  Dept_Code: 'Dept_Code',
  Status: 'Status'
};

exports.Prisma.PATCHTYPEScalarFieldEnum = {
  Patch_No: 'Patch_No',
  Part_ID: 'Part_ID',
  PType_ID: 'PType_ID',
  Part_Content: 'Part_Content',
  Product_Code: 'Product_Code',
  isImportant: 'isImportant',
  UpdTime: 'UpdTime',
  Node_ID: 'Node_ID',
  SysUnit_ID: 'SysUnit_ID',
  Received_time: 'Received_time',
  StartUpd_time: 'StartUpd_time',
  Status: 'Status'
};

exports.Prisma.PaymentModeScalarFieldEnum = {
  Pmt_ID: 'Pmt_ID',
  Pmt_Code: 'Pmt_Code',
  IDX: 'IDX',
  Descript: 'Descript',
  CYS: 'CYS',
  Forex_Rate: 'Forex_Rate',
  Value: 'Value',
  isCard: 'isCard',
  Disabled: 'Disabled',
  Fr_Date: 'Fr_Date',
  To_Date: 'To_Date',
  Merchant_Code: 'Merchant_Code',
  Merchant_Name: 'Merchant_Name',
  IsAutoCheckMode: 'IsAutoCheckMode',
  AutoFrSeconds: 'AutoFrSeconds',
  WaitSeconds: 'WaitSeconds',
  NumOfWait: 'NumOfWait'
};

exports.Prisma.PaymentServiceScalarFieldEnum = {
  PmtServ_ID: 'PmtServ_ID',
  PmtServ_Code: 'PmtServ_Code',
  Goods_ID: 'Goods_ID',
  PmtServ_Type: 'PmtServ_Type',
  SrvProvider_Code: 'SrvProvider_Code',
  Partner_ID: 'Partner_ID',
  Commision_Rate: 'Commision_Rate',
  Open_Date: 'Open_Date',
  Last_Date: 'Last_Date',
  Disabled: 'Disabled'
};

exports.Prisma.PItemClsScalarFieldEnum = {
  PICls_ID: 'PICls_ID',
  PICls_Code: 'PICls_Code',
  PICls_Desc: 'PICls_Desc',
  PICls_Tbl_Name: 'PICls_Tbl_Name',
  PICls_Fld_ID: 'PICls_Fld_ID',
  PICls_Fld_Code: 'PICls_Fld_Code',
  PICls_Fld_Name: 'PICls_Fld_Name',
  Filter_SQL: 'Filter_SQL',
  PI_Cost_Tbl: 'PI_Cost_Tbl',
  PI_Fld_ID: 'PI_Fld_ID',
  PI_Fld_Cost: 'PI_Fld_Cost',
  isRetail: 'isRetail',
  isWholesale: 'isWholesale',
  isPurchase: 'isPurchase',
  Disabled: 'Disabled'
};

exports.Prisma.PlayerScalarFieldEnum = {
  PLayer_ID: 'PLayer_ID',
  PLayer_Code: 'PLayer_Code',
  PLayer_Desc: 'PLayer_Desc',
  Owner_Type: 'Owner_Type',
  Owner_ID: 'Owner_ID',
  SCC_ID: 'SCC_ID',
  PProg_Type: 'PProg_Type',
  Prior_Type: 'Prior_Type',
  Inherit_Level: 'Inherit_Level',
  Disabled: 'Disabled'
};

exports.Prisma.PLUCodeScalarFieldEnum = {
  PLU_ID: 'PLU_ID',
  PLU_Code: 'PLU_Code',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  PLU_Type: 'PLU_Type',
  isInventory: 'isInventory',
  Disabled: 'Disabled'
};

exports.Prisma.PmtModeTerminalScalarFieldEnum = {
  Pmt_ID: 'Pmt_ID',
  StkClust_ID: 'StkClust_ID',
  Terminal_ID: 'Terminal_ID',
  Disabled: 'Disabled'
};

exports.Prisma.PromotionsScalarFieldEnum = {
  PType_ID: 'PType_ID',
  PType_Code: 'PType_Code',
  PType_Desc: 'PType_Desc',
  Obj_ID: 'Obj_ID',
  isSCCManaged: 'isSCCManaged',
  Prefix: 'Prefix',
  Last_Count: 'Last_Count',
  Disabled: 'Disabled',
  Priority: 'Priority',
  IsItemReturn: 'IsItemReturn'
};

exports.Prisma.PSItemClsScalarFieldEnum = {
  PSICls_ID: 'PSICls_ID',
  PSICls_Code: 'PSICls_Code',
  PSICls_Desc: 'PSICls_Desc',
  SICls_Tbl_Name: 'SICls_Tbl_Name',
  SICls_Fld_ID: 'SICls_Fld_ID',
  SICls_Fld_Code: 'SICls_Fld_Code',
  SICls_Fld_Name: 'SICls_Fld_Name',
  Filter_SQL: 'Filter_SQL',
  Rlt_Goods_Tbl: 'Rlt_Goods_Tbl',
  Goods_Fld_Name: 'Goods_Fld_Name',
  isRetail: 'isRetail',
  isWholesale: 'isWholesale',
  isPurchase: 'isPurchase',
  Disabled: 'Disabled'
};

exports.Prisma.QueueMsgScalarFieldEnum = {
  Msg_Code: 'Msg_Code',
  CrNode_ID: 'CrNode_ID',
  CrUser_ID: 'CrUser_ID',
  CrTime: 'CrTime',
  ToNode_ID: 'ToNode_ID',
  ToUser_ID: 'ToUser_ID',
  ToTime: 'ToTime',
  DispTime: 'DispTime',
  MsgCls_ID: 'MsgCls_ID',
  Msg_Content: 'Msg_Content',
  Status: 'Status'
};

exports.Prisma.RECVEVENTQUEUEScalarFieldEnum = {
  Event_ID: 'Event_ID',
  Event_Code: 'Event_Code',
  Obj_ID: 'Obj_ID',
  Event_IDX: 'Event_IDX',
  Cr_SUnit_ID: 'Cr_SUnit_ID',
  Cr_Time: 'Cr_Time',
  Fr_SUnit_ID: 'Fr_SUnit_ID',
  To_SUnit_ID: 'To_SUnit_ID',
  To_Time: 'To_Time',
  Proc_Time: 'Proc_Time',
  Process_Stat: 'Process_Stat',
  Repro_Time: 'Repro_Time',
  ReProd_Stat: 'ReProd_Stat',
  Event_XML: 'Event_XML',
  Event_Key: 'Event_Key',
  Priority: 'Priority',
  Status: 'Status'
};

exports.Prisma.REPORTSScalarFieldEnum = {
  IDX: 'IDX',
  Rpt_ID: 'Rpt_ID',
  Rpt_Name: 'Rpt_Name',
  Rpt_Descript: 'Rpt_Descript',
  Rpt_Fname: 'Rpt_Fname',
  Rpt_Form: 'Rpt_Form',
  Pitch: 'Pitch',
  Size: 'Size',
  Orient: 'Orient',
  Obj_IDs: 'Obj_IDs',
  Filter_Cnd: 'Filter_Cnd',
  Obj_ID: 'Obj_ID',
  Dept_IDs: 'Dept_IDs',
  Resource_ID: 'Resource_ID',
  Status: 'Status'
};

exports.Prisma.RESOURCE_DICScalarFieldEnum = {
  Resource_ID: 'Resource_ID',
  Lang_Type: 'Lang_Type',
  Lang_Resource: 'Lang_Resource'
};

exports.Prisma.RESOURCESScalarFieldEnum = {
  Resource_ID: 'Resource_ID',
  Reso_Type: 'Reso_Type',
  Max_Length: 'Max_Length',
  Resource_Desc: 'Resource_Desc'
};

exports.Prisma.RoleAuthorityScalarFieldEnum = {
  Role_ID: 'Role_ID',
  Authority_ID: 'Authority_ID'
};

exports.Prisma.RolesScalarFieldEnum = {
  Role_ID: 'Role_ID',
  Role_Code: 'Role_Code',
  Role_Desc: 'Role_Desc',
  Disabled: 'Disabled'
};

exports.Prisma.RT_LevelPriceScalarFieldEnum = {
  SCC_ID: 'SCC_ID',
  RTPLevel_ID: 'RTPLevel_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  RT_Price: 'RT_Price',
  RT_POrd_ID: 'RT_POrd_ID',
  RT_POrd_Time: 'RT_POrd_Time',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgCaseScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  Description: 'Description',
  Promotion_Type: 'Promotion_Type',
  MaxCasebyTrs: 'MaxCasebyTrs',
  isCasebyStore: 'isCasebyStore',
  MaxCasebyDay: 'MaxCasebyDay',
  MaxCasebyStore: 'MaxCasebyStore',
  MaxCase_Qty: 'MaxCase_Qty',
  TotalCase_Qty: 'TotalCase_Qty',
  TotalSold_Amt: 'TotalSold_Amt',
  TotalCost_Amt: 'TotalCost_Amt',
  Notes: 'Notes',
  PCase_Symb: 'PCase_Symb',
  isFortune: 'isFortune',
  isFortuneDif: 'isFortuneDif',
  Fortune_Rate: 'Fortune_Rate',
  Process: 'Process',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgOwnerScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  Owner_ID: 'Owner_ID',
  PCase_IDX: 'PCase_IDX',
  ExtObjCls_IDs: 'ExtObjCls_IDs',
  Owned_Rate: 'Owned_Rate',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgPhaseScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  Phase_IDX: 'Phase_IDX',
  Phase_Date: 'Phase_Date',
  Phase_Due: 'Phase_Due',
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  PCase_IDX: 'PCase_IDX',
  LineGrp_IDX: 'LineGrp_IDX',
  Fortune_Rate: 'Fortune_Rate',
  PICls_ID: 'PICls_ID',
  PItem_ID: 'PItem_ID',
  PItem_Code: 'PItem_Code',
  PItem_Qty: 'PItem_Qty',
  RestPItem_Qty: 'RestPItem_Qty',
  AddPItem_Qty: 'AddPItem_Qty',
  GivePItem_Qty: 'GivePItem_Qty',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgPIStoreScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  PICls_ID: 'PICls_ID',
  LineGrp_IDX: 'LineGrp_IDX',
  Fortune_Rate: 'Fortune_Rate',
  PItem_ID: 'PItem_ID',
  PItem_Code: 'PItem_Code',
  PItem_Qty: 'PItem_Qty',
  MaxPItem_TrQty: 'MaxPItem_TrQty',
  MaxPItem_Qty: 'MaxPItem_Qty',
  TotalPItem_Qty: 'TotalPItem_Qty',
  MaxTrans_Qty: 'MaxTrans_Qty',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgPOSScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  WS_ID: 'WS_ID',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgsScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PProg_Code: 'PProg_Code',
  PType_ID: 'PType_ID',
  Promotion_Code: 'Promotion_Code',
  Prom_Description: 'Prom_Description',
  Ref_No: 'Ref_No',
  Ref_Date: 'Ref_Date',
  Effect_Date: 'Effect_Date',
  Due_Date: 'Due_Date',
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  WS_ID: 'WS_ID',
  PLayer_ID: 'PLayer_ID',
  Owner_ID: 'Owner_ID',
  isWalkInCust: 'isWalkInCust',
  isLoyatyCust: 'isLoyatyCust',
  Loyalty_Rank: 'Loyalty_Rank',
  IsCouponPrg: 'IsCouponPrg',
  isMultiCase: 'isMultiCase',
  isMultiPSItem: 'isMultiPSItem',
  isStepCase: 'isStepCase',
  Last_Date: 'Last_Date',
  User_ID: 'User_ID',
  Process: 'Process',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PProgTimeScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  Time_IDX: 'Time_IDX',
  Fr_DoY: 'Fr_DoY',
  To_DoY: 'To_DoY',
  Fr_DoM: 'Fr_DoM',
  To_DoM: 'To_DoM',
  Fr_DayTime: 'Fr_DayTime',
  To_DayTime: 'To_DayTime',
  DoW: 'DoW',
  Fr_Date: 'Fr_Date',
  To_Date: 'To_Date',
  Bef_DoB: 'Bef_DoB',
  Aft_DoB: 'Aft_DoB',
  Bef_DoC: 'Bef_DoC',
  Aft_DoC: 'Aft_DoC',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PriceScalarFieldEnum = {
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SCC_ID: 'SCC_ID',
  RTPLevel_ID: 'RTPLevel_ID',
  RT_ListPrice: 'RT_ListPrice',
  RT_Price: 'RT_Price',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PriceLevelScalarFieldEnum = {
  RTPLevel_ID: 'RTPLevel_ID',
  RTPLevel_Code: 'RTPLevel_Code',
  Priority: 'Priority',
  RTPLevel_Name: 'RTPLevel_Name',
  SCC_ID: 'SCC_ID',
  StkType_ID: 'StkType_ID',
  Market_IDs: 'Market_IDs',
  Stk_ID: 'Stk_ID',
  WS_ID: 'WS_ID',
  Fr_DayTime: 'Fr_DayTime',
  To_DayTime: 'To_DayTime',
  DoW: 'DoW',
  isVATInc: 'isVATInc',
  CYS: 'CYS',
  Disabled: 'Disabled'
};

exports.Prisma.RT_PriceOrdScalarFieldEnum = {
  PriceOrd_ID: 'PriceOrd_ID',
  PriceOrd_Code: 'PriceOrd_Code',
  PriceOrd_Date: 'PriceOrd_Date',
  Ref_No: 'Ref_No',
  Ref_Date: 'Ref_Date',
  SCC_ID: 'SCC_ID',
  RTPLevel_ID: 'RTPLevel_ID'
};

exports.Prisma.RT_PriceOrdDtlScalarFieldEnum = {
  PriceOrd_ID: 'PriceOrd_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  RT_Price: 'RT_Price'
};

exports.Prisma.RT_ProgCPItemScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  LineGrp_IDX: 'LineGrp_IDX',
  Fortune_Rate: 'Fortune_Rate',
  Line_IDX: 'Line_IDX',
  PICls_ID: 'PICls_ID',
  PItem_ID: 'PItem_ID',
  PItem_Code: 'PItem_Code',
  PItem_Qty: 'PItem_Qty',
  PItem_Cost: 'PItem_Cost',
  MaxPItem_TrQty: 'MaxPItem_TrQty',
  MaxPItem_Qty: 'MaxPItem_Qty',
  TotalPItem_Qty: 'TotalPItem_Qty',
  TotalPItem_Cost: 'TotalPItem_Cost',
  Disabled: 'Disabled'
};

exports.Prisma.RT_ProgPSItemScalarFieldEnum = {
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  PSICls_ID: 'PSICls_ID',
  PSICls_IDX: 'PSICls_IDX',
  PSItem_ID: 'PSItem_ID',
  PSItem_Code: 'PSItem_Code',
  Is4Condition: 'Is4Condition',
  Is4PItem: 'Is4PItem',
  ExpTimeUnit: 'ExpTimeUnit',
  Fr_BefExpTime: 'Fr_BefExpTime',
  To_BefExpTime: 'To_BefExpTime',
  isVATInc: 'isVATInc',
  Sold_TrQty: 'Sold_TrQty',
  Sold_TrAmt: 'Sold_TrAmt',
  Sold_ItemBy: 'Sold_ItemBy',
  Disabled: 'Disabled'
};

exports.Prisma.SCC_CVSGsPolicyScalarFieldEnum = {
  SCC_ID: 'SCC_ID',
  SCClust_ID: 'SCClust_ID',
  StkClust_ID: 'StkClust_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  OPL_DoW: 'OPL_DoW',
  Delivery_DoW: 'Delivery_DoW',
  Supplier_ID: 'Supplier_ID',
  isCutItem: 'isCutItem',
  isStopSale: 'isStopSale',
  GGrp_ID: 'GGrp_ID',
  ABCZ_Rank: 'ABCZ_Rank',
  StoreGs_Rank: 'StoreGs_Rank',
  Start_Date: 'Start_Date',
  Last_Cleared: 'Last_Cleared',
  Last_TrsDate: 'Last_TrsDate',
  Cut_Date: 'Cut_Date',
  StopSale_Date: 'StopSale_Date',
  Disabled: 'Disabled'
};

exports.Prisma.SCC_SKUItemsScalarFieldEnum = {
  SCC_ID: 'SCC_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  Sales_Block: 'Sales_Block',
  OPL_Limit: 'OPL_Limit',
  ORD_Right: 'ORD_Right',
  GS_SCC_Method: 'GS_SCC_Method',
  Supplier_ID: 'Supplier_ID',
  InVAT_Rate: 'InVAT_Rate',
  Master_Price: 'Master_Price',
  Delivery_Time: 'Delivery_Time',
  Last_PODate: 'Last_PODate',
  DC_DMS_Qty: 'DC_DMS_Qty',
  DC_Reserv_Days: 'DC_Reserv_Days',
  PO_Period: 'PO_Period',
  CVS_OPL_DoW: 'CVS_OPL_DoW',
  Customer_ID: 'Customer_ID',
  Cr_Date: 'Cr_Date',
  Last_Cleared: 'Last_Cleared',
  Last_TrsDate: 'Last_TrsDate',
  Disabled: 'Disabled'
};

exports.Prisma.SCCenterScalarFieldEnum = {
  SCC_ID: 'SCC_ID',
  SCC_Code: 'SCC_Code',
  SCC_Name: 'SCC_Name',
  Node_ID: 'Node_ID',
  DummyStk_ID: 'DummyStk_ID',
  DummyPOS_ID: 'DummyPOS_ID',
  MovingStk_ID: 'MovingStk_ID',
  Creat_Date: 'Creat_Date',
  Disabled: 'Disabled'
};

exports.Prisma.SCClusterScalarFieldEnum = {
  SCClust_ID: 'SCClust_ID',
  SCClust_Code: 'SCClust_Code',
  SCClust_Name: 'SCClust_Name',
  SCC_ID: 'SCC_ID',
  Node_ID: 'Node_ID',
  MainStk_ID: 'MainStk_ID',
  SCArea_Map: 'SCArea_Map',
  SCArea_Width: 'SCArea_Width',
  SCArea_Height: 'SCArea_Height',
  Open_Date: 'Open_Date',
  Disabled_Date: 'Disabled_Date',
  Disabled: 'Disabled'
};

exports.Prisma.SEARCHScalarFieldEnum = {
  OBJ_CODE: 'OBJ_CODE',
  FORM_CAPT: 'FORM_CAPT',
  GRD_PARA: 'GRD_PARA',
  GRD_PARA_ML: 'GRD_PARA_ML',
  FLT_COND: 'FLT_COND',
  RESULT: 'RESULT',
  STATUS: 'STATUS',
  Resource_ID: 'Resource_ID'
};

exports.Prisma.SENDEVENTQUEUEScalarFieldEnum = {
  Event_ID: 'Event_ID',
  Event_Code: 'Event_Code',
  Obj_ID: 'Obj_ID',
  Event_IDX: 'Event_IDX',
  Cr_SUnit_ID: 'Cr_SUnit_ID',
  Cr_Time: 'Cr_Time',
  Fr_SUnit_ID: 'Fr_SUnit_ID',
  Fr_Time: 'Fr_Time',
  To_SUnit_ID: 'To_SUnit_ID',
  To_Time: 'To_Time',
  Send_Stat: 'Send_Stat',
  Event_XML: 'Event_XML',
  Event_Key: 'Event_Key',
  Priority: 'Priority',
  Status: 'Status'
};

exports.Prisma.SKUBarcodeScalarFieldEnum = {
  Barcode: 'Barcode',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  Unit_Idx: 'Unit_Idx',
  UnitConv: 'UnitConv',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemBINScalarFieldEnum = {
  STK_ID: 'STK_ID',
  BIN_ID: 'BIN_ID',
  BIN_Code: 'BIN_Code',
  StkZone_ID: 'StkZone_ID',
  StkLoca_ID: 'StkLoca_ID',
  Good_ID: 'Good_ID',
  SKUMin_Qty: 'SKUMin_Qty',
  SKUMax_Qty: 'SKUMax_Qty',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemLeastScalarFieldEnum = {
  STK_ID: 'STK_ID',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  Least_Qty: 'Least_Qty',
  Max_Qty: 'Max_Qty',
  Alert_Qty: 'Alert_Qty',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemLocaScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STKLoca_ID: 'STKLoca_ID',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  STKZone_ID: 'STKZone_ID',
  isReplenished: 'isReplenished',
  SKUMinQty: 'SKUMinQty',
  SKUMaxQty: 'SKUMaxQty',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemLotScalarFieldEnum = {
  SKU_Code: 'SKU_Code',
  Good_ID: 'Good_ID',
  Lot_ID: 'Lot_ID',
  Lot_No: 'Lot_No',
  LotReset_IDX: 'LotReset_IDX',
  SKUStat_ID: 'SKUStat_ID',
  Start_Date: 'Start_Date',
  Expiry_Date: 'Expiry_Date',
  ExtObjCls_ID: 'ExtObjCls_ID',
  ExtObj_ID: 'ExtObj_ID',
  StkTrans_No: 'StkTrans_No',
  StkTrans_Date: 'StkTrans_Date',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  UnitCost_Amt: 'UnitCost_Amt',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemsScalarFieldEnum = {
  SKU_Code: 'SKU_Code',
  Goods_ID: 'Goods_ID',
  Product_Code: 'Product_Code',
  Product_Name: 'Product_Name',
  Quality_Rank: 'Quality_Rank',
  Cr_Date: 'Cr_Date',
  Last_Cleared: 'Last_Cleared',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemSerialScalarFieldEnum = {
  SKU_Code: 'SKU_Code',
  Serial_No: 'Serial_No',
  Lot_ID: 'Lot_ID',
  Lot_No: 'Lot_No',
  SKUStat_ID: 'SKUStat_ID',
  Expiry_Date: 'Expiry_Date',
  StkTrans_No: 'StkTrans_No',
  StkTrans_Date: 'StkTrans_Date',
  STK_ID: 'STK_ID',
  STKLoca_ID: 'STKLoca_ID',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  Serial_Unit_ID: 'Serial_Unit_ID',
  Serial_SKUBase_Qty: 'Serial_SKUBase_Qty',
  Sold_SKUBase_Qty: 'Sold_SKUBase_Qty',
  UnitCost_Amt: 'UnitCost_Amt',
  UnitSale_Amt: 'UnitSale_Amt',
  ExtObjCls_ID: 'ExtObjCls_ID',
  ExtObj_ID: 'ExtObj_ID',
  StkClear_Date: 'StkClear_Date',
  Cust_ID: 'Cust_ID',
  SaleTrans_No: 'SaleTrans_No',
  SaleTrans_Date: 'SaleTrans_Date',
  Disabled: 'Disabled'
};

exports.Prisma.SKUItemZoneScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STKZone_ID: 'STKZone_ID',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  StkTake_Fr: 'StkTake_Fr',
  StkTake_To: 'StkTake_To',
  StkTake_St: 'StkTake_St',
  Disabled: 'Disabled'
};

exports.Prisma.SKUnitScalarFieldEnum = {
  Goods_ID: 'Goods_ID',
  Unit_Idx: 'Unit_Idx',
  Unit_ID: 'Unit_ID',
  Unit_Desc: 'Unit_Desc',
  isFixDesc: 'isFixDesc',
  isSerialized: 'isSerialized',
  Serial_FW: 'Serial_FW',
  isLot: 'isLot',
  isBase: 'isBase',
  isCost: 'isCost',
  UnitConv: 'UnitConv',
  IsBarcode: 'IsBarcode',
  isCoverWeight: 'isCoverWeight',
  CoverWQty: 'CoverWQty',
  Weight_Unit: 'Weight_Unit',
  Weight_Qty: 'Weight_Qty',
  Dim_Unit: 'Dim_Unit',
  Length_Qty: 'Length_Qty',
  Breadth_Qty: 'Breadth_Qty',
  Height_Qty: 'Height_Qty',
  Volume_Unit: 'Volume_Unit',
  Volume_Qty: 'Volume_Qty',
  ORD_Unit: 'ORD_Unit',
  TRF_Unit: 'TRF_Unit',
  WHS_Unit: 'WHS_Unit',
  RTS_Unit: 'RTS_Unit',
  RPT_Unit: 'RPT_Unit',
  Disabled: 'Disabled'
};

exports.Prisma.SKUStatusScalarFieldEnum = {
  SKUStat_ID: 'SKUStat_ID',
  SKUStat_Code: 'SKUStat_Code',
  SKUStat_Descr: 'SKUStat_Descr',
  TrCls_IDs: 'TrCls_IDs',
  Active_Date: 'Active_Date',
  Deactive_Date: 'Deactive_Date',
  User_ID: 'User_ID',
  Disabled: 'Disabled'
};

exports.Prisma.SocialEventScalarFieldEnum = {
  SocialEvt_ID: 'SocialEvt_ID',
  SocialEvt_Code: 'SocialEvt_Code',
  SocialEvt_Desc: 'SocialEvt_Desc',
  SocialEvt_Img: 'SocialEvt_Img',
  Disabled: 'Disabled'
};

exports.Prisma.SOrder_DtlScalarFieldEnum = {
  SOrder_Code: 'SOrder_Code',
  Item_IDX: 'Item_IDX',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUBase_Qty: 'SKUBase_Qty',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUStat_ID: 'SKUStat_ID',
  Sales_Amt: 'Sales_Amt',
  VAT_Amt: 'VAT_Amt',
  Direct_Disc_Amt: 'Direct_Disc_Amt',
  Indirect_Disc_Amt: 'Indirect_Disc_Amt',
  WS_ID: 'WS_ID',
  Disabled: 'Disabled'
};

exports.Prisma.SOrder_ExportScalarFieldEnum = {
  SOrder_Code: 'SOrder_Code',
  Disabled: 'Disabled',
  Event_Code: 'Event_Code'
};

exports.Prisma.SOrder_HdrScalarFieldEnum = {
  SOrder_Code: 'SOrder_Code',
  SOrder_Type: 'SOrder_Type',
  SODelivery_Type: 'SODelivery_Type',
  SCC_ID: 'SCC_ID',
  StkClust_ID: 'StkClust_ID',
  WS_ID: 'WS_ID',
  Customer_Info: 'Customer_Info',
  Member_No: 'Member_No',
  Receiver_Info: 'Receiver_Info',
  Receiver_Email: 'Receiver_Email',
  Receiver_Mobile: 'Receiver_Mobile',
  RecvPlace_ID: 'RecvPlace_ID',
  SOrder_Time: 'SOrder_Time',
  Delivery_Time: 'Delivery_Time',
  SOTrans_No: 'SOTrans_No',
  SOTran_Date: 'SOTran_Date',
  SOFnTrans_No: 'SOFnTrans_No',
  SOFnTran_Date: 'SOFnTran_Date',
  SODisTrans_No: 'SODisTrans_No',
  SODisTran_Date: 'SODisTran_Date',
  Disabled: 'Disabled',
  Remark: 'Remark'
};

exports.Prisma.STATIONSScalarFieldEnum = {
  WS_ID: 'WS_ID',
  SUnit_ID: 'SUnit_ID',
  WS_Alias: 'WS_Alias',
  WS_Name: 'WS_Name',
  WS_IP4: 'WS_IP4',
  SubNet_IP4: 'SubNet_IP4',
  WS_Desc: 'WS_Desc',
  WS_Type: 'WS_Type',
  IsOffline: 'IsOffline',
  RItem_ID: 'RItem_ID',
  FA_ID: 'FA_ID',
  Work_Date: 'Work_Date',
  Work_Shift: 'Work_Shift',
  Shift_Closed: 'Shift_Closed',
  TempDir: 'TempDir',
  Login: 'Login',
  User_ID: 'User_ID',
  MenusStat: 'MenusStat',
  Status: 'Status'
};

exports.Prisma.Stktake_AdjScalarFieldEnum = {
  StkT_ID: 'StkT_ID',
  STK_ID: 'STK_ID',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUPackUnit_ID: 'SKUPackUnit_ID',
  SKUPack_Qty: 'SKUPack_Qty',
  SKUBase_Qty: 'SKUBase_Qty',
  SWSKUBase_Qty: 'SWSKUBase_Qty',
  SWSKUBase_Amt: 'SWSKUBase_Amt',
  SKUBase_Amt: 'SKUBase_Amt',
  Trans_No: 'Trans_No',
  Tran_Date: 'Tran_Date'
};

exports.Prisma.Stktake_DtlScalarFieldEnum = {
  StkT_ID: 'StkT_ID',
  STK_ID: 'STK_ID',
  StkZone_ID: 'StkZone_ID',
  StkLoca_ID: 'StkLoca_ID',
  BIN_ID: 'BIN_ID',
  Good_ID: 'Good_ID',
  SKU_Code: 'SKU_Code',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUPackUnit_ID: 'SKUPackUnit_ID',
  SKUPack_Qty: 'SKUPack_Qty',
  SKUBase_Qty: 'SKUBase_Qty',
  SKUBase_Amt: 'SKUBase_Amt',
  SWSKUBase_Qty: 'SWSKUBase_Qty',
  SWSKUBase_Amt: 'SWSKUBase_Amt',
  Stktaker_ID: 'Stktaker_ID',
  Blocked_Fr: 'Blocked_Fr',
  Blocked_To: 'Blocked_To',
  isBlock: 'isBlock',
  User_ID: 'User_ID',
  Period_Code: 'Period_Code'
};

exports.Prisma.Stktake_HdrScalarFieldEnum = {
  StkT_ID: 'StkT_ID',
  StkT_Code: 'StkT_Code',
  Period_No: 'Period_No',
  StkT_Idx: 'StkT_Idx',
  Ref_No: 'Ref_No',
  Ref_Date: 'Ref_Date',
  STK_ID: 'STK_ID',
  StkZone_ID: 'StkZone_ID',
  Stocktake_Fr: 'Stocktake_Fr',
  Stocktake_To: 'Stocktake_To',
  Stktake_stat: 'Stktake_stat',
  Block_Type: 'Block_Type',
  Trans_No: 'Trans_No',
  Tran_Date: 'Tran_Date',
  Period_Code: 'Period_Code'
};

exports.Prisma.StkTranClsScalarFieldEnum = {
  StkTrCls_ID: 'StkTrCls_ID',
  StkTrCls_Code: 'StkTrCls_Code',
  StkTrCls_Name: 'StkTrCls_Name',
  Resource_ID: 'Resource_ID',
  SKUStat_IDs: 'SKUStat_IDs',
  GType_IDs: 'GType_IDs',
  isStockOut: 'isStockOut',
  FrStkType_IDs: 'FrStkType_IDs',
  isStockIn: 'isStockIn',
  ToStkType_IDs: 'ToStkType_IDs',
  ExObjCls_IDs: 'ExObjCls_IDs',
  isChg_Qty: 'isChg_Qty',
  isChg_Amt: 'isChg_Amt',
  isChg_Status: 'isChg_Status',
  isChg_Loca: 'isChg_Loca',
  isPayment: 'isPayment',
  isDebt: 'isDebt',
  isInvoice: 'isInvoice',
  Obj_ID: 'Obj_ID',
  Disabled: 'Disabled',
  StkTrCls_IDX: 'StkTrCls_IDX'
};

exports.Prisma.StockScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STK_Code: 'STK_Code',
  StkClust_ID: 'StkClust_ID',
  StkType_ID: 'StkType_ID',
  Node_ID: 'Node_ID',
  Owner_Type: 'Owner_Type',
  Owner_ID: 'Owner_ID',
  STK_SYMB: 'STK_SYMB',
  STK_CAP: 'STK_CAP',
  STK_Name: 'STK_Name',
  STK_Addr: 'STK_Addr',
  Place_ID: 'Place_ID',
  ACCOUNT_ID: 'ACCOUNT_ID',
  ACC_CYS: 'ACC_CYS',
  Phone: 'Phone',
  Fax: 'Fax',
  Email: 'Email',
  Con_Person: 'Con_Person',
  DIMENSION: 'DIMENSION',
  LOCATION: 'LOCATION',
  SCC_ID: 'SCC_ID',
  IsPhysical: 'IsPhysical',
  isInventory: 'isInventory',
  IsDummy: 'IsDummy',
  IsBase: 'IsBase',
  isPOS: 'isPOS',
  isPOD: 'isPOD',
  isProduction: 'isProduction',
  Remark: 'Remark',
  Open_Date: 'Open_Date',
  Modi_Date: 'Modi_Date',
  Layout_Img: 'Layout_Img',
  Layout_Width: 'Layout_Width',
  Layout_Height: 'Layout_Height',
  Ref_No: 'Ref_No',
  RefObj_ID: 'RefObj_ID',
  Active_Date: 'Active_Date',
  EstClose_Date: 'EstClose_Date',
  Closed_Date: 'Closed_Date',
  Disabled: 'Disabled'
};

exports.Prisma.StockClusterScalarFieldEnum = {
  StkClust_ID: 'StkClust_ID',
  StkClust_Code: 'StkClust_Code',
  StkClust_Name: 'StkClust_Name',
  StkClust_Addr: 'StkClust_Addr',
  Node_ID: 'Node_ID',
  SCC_ID: 'SCC_ID',
  StkType_IDs: 'StkType_IDs',
  Delivery_Period: 'Delivery_Period',
  Delivery_Count: 'Delivery_Count',
  Disabled: 'Disabled',
  Active_Date: 'Active_Date',
  LastClosed_Date: 'LastClosed_Date',
  Disabled_Date: 'Disabled_Date'
};

exports.Prisma.StockGateScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STKGate_ID: 'STKGate_ID',
  STKGate_Code: 'STKGate_Code',
  STKGate_Type: 'STKGate_Type',
  STKGate_Desc: 'STKGate_Desc',
  Disabled: 'Disabled'
};

exports.Prisma.StockGLInfoScalarFieldEnum = {
  STK_ID: 'STK_ID',
  Period_Code: 'Period_Code',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUStat_ID: 'SKUStat_ID',
  Beg_Qty: 'Beg_Qty',
  Exp_Qty: 'Exp_Qty',
  Imp_Qty: 'Imp_Qty',
  Beg_Amt: 'Beg_Amt',
  Exp_Amt: 'Exp_Amt',
  Imp_Amt: 'Imp_Amt',
  Adj_Qty: 'Adj_Qty',
  Adj_Amt: 'Adj_Amt',
  LastImpPr: 'LastImpPr',
  AverImpPr: 'AverImpPr',
  Open_Date: 'Open_Date',
  Last_Date: 'Last_Date',
  Minus_Date: 'Minus_Date',
  StkTake_Dt: 'StkTake_Dt',
  Block_Stat: 'Block_Stat',
  Status: 'Status'
};

exports.Prisma.StockInfoScalarFieldEnum = {
  STK_ID: 'STK_ID',
  Period_Code: 'Period_Code',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUStat_ID: 'SKUStat_ID',
  Beg_Qty: 'Beg_Qty',
  Exp_Qty: 'Exp_Qty',
  Imp_Qty: 'Imp_Qty',
  Adj_Qty: 'Adj_Qty',
  Open_Date: 'Open_Date',
  Last_Date: 'Last_Date',
  Minus_Date: 'Minus_Date',
  StkTake_Dt: 'StkTake_Dt',
  Block_Stat: 'Block_Stat',
  Status: 'Status'
};

exports.Prisma.StockLineScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STKLine_ID: 'STKLine_ID',
  STKLine_Code: 'STKLine_Code',
  STKLine_IDX: 'STKLine_IDX',
  GateIn_ID: 'GateIn_ID',
  GateOut_ID: 'GateOut_ID',
  STKLine_Desc: 'STKLine_Desc',
  Disabled: 'Disabled'
};

exports.Prisma.StockLocaScalarFieldEnum = {
  STK_ID: 'STK_ID',
  StkLoca_ID: 'StkLoca_ID',
  STKLoca_Code: 'STKLoca_Code',
  STKLoca_Type: 'STKLoca_Type',
  STKLoca_Desc: 'STKLoca_Desc',
  STKZone_ID: 'STKZone_ID',
  STKLine_ID: 'STKLine_ID',
  StkLoca_IDX: 'StkLoca_IDX',
  NoBin: 'NoBin',
  Bin_FrSeri: 'Bin_FrSeri',
  Bin_ToSeri: 'Bin_ToSeri',
  Stktake_Fr: 'Stktake_Fr',
  Stktake_To: 'Stktake_To',
  isStockTake: 'isStockTake',
  Disabled: 'Disabled'
};

exports.Prisma.StockTypeScalarFieldEnum = {
  StkType_ID: 'StkType_ID',
  StkType_Code: 'StkType_Code',
  StkType_Name: 'StkType_Name',
  IsPhysical: 'IsPhysical',
  isInventory: 'isInventory',
  IsDummy: 'IsDummy',
  IsBase: 'IsBase',
  isPOS: 'isPOS',
  isPOD: 'isPOD',
  isProduction: 'isProduction',
  isGoodOwned: 'isGoodOwned',
  isOwned: 'isOwned',
  Disabled: 'Disabled'
};

exports.Prisma.StockZoneScalarFieldEnum = {
  STK_ID: 'STK_ID',
  STKZone_ID: 'STKZone_ID',
  STKZone_Code: 'STKZone_Code',
  StkZone_Symb: 'StkZone_Symb',
  STKZone_Type: 'STKZone_Type',
  STKZone_Desc: 'STKZone_Desc',
  StkTake_Fr: 'StkTake_Fr',
  StkTake_To: 'StkTake_To',
  StkTake_St: 'StkTake_St',
  Disabled: 'Disabled'
};

exports.Prisma.STr_CollectPmtScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  SCC_ID: 'SCC_ID',
  Stk_ID: 'Stk_ID',
  RRequest_ID: 'RRequest_ID',
  ROrder_No: 'ROrder_No',
  RDevice_ID: 'RDevice_ID',
  RResponse_Code: 'RResponse_Code',
  RResponse_Data: 'RResponse_Data',
  RTrans_ID: 'RTrans_ID',
  RTrans_Type: 'RTrans_Type',
  RTrans_Amount: 'RTrans_Amount',
  RTrans_Date: 'RTrans_Date',
  RProduct_ID: 'RProduct_ID',
  RProduct_Qty: 'RProduct_Qty',
  RApprove_Code: 'RApprove_Code',
  RService_ID: 'RService_ID',
  RService_Code: 'RService_Code',
  RCard_Type: 'RCard_Type',
  RCard_Number: 'RCard_Number',
  RCard_Value: 'RCard_Value',
  RSystem_Trace: 'RSystem_Trace',
  RCustomer_Code: 'RCustomer_Code',
  RDisabled: 'RDisabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_GLAccScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StrTrCls_ID: 'StrTrCls_ID',
  CPany_ID: 'CPany_ID',
  JourEntry_Idx: 'JourEntry_Idx',
  GLAcc_ID: 'GLAcc_ID',
  Contra_GLAccID: 'Contra_GLAccID',
  ValObj_ID: 'ValObj_ID',
  Is_Credit: 'Is_Credit',
  GLAcc_Cys: 'GLAcc_Cys',
  GL_CysAmt: 'GL_CysAmt',
  GL_BaseAmt: 'GL_BaseAmt',
  BudgetLine_ID: 'BudgetLine_ID',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_HdrScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  EfTran_Date: 'EfTran_Date',
  Job_Code: 'Job_Code',
  Job_Date: 'Job_Date',
  Event_Item_Code: 'Event_Item_Code',
  StkTrCls_ID: 'StkTrCls_ID',
  TrRef_No: 'TrRef_No',
  TrRef_Date: 'TrRef_Date',
  TrRef_type: 'TrRef_type',
  Shift_No: 'Shift_No',
  WS_ID: 'WS_ID',
  Member_No: 'Member_No',
  ExtObjCls_ID: 'ExtObjCls_ID',
  ExtObj_ID: 'ExtObj_ID',
  ExpStkClust_ID: 'ExpStkClust_ID',
  ImpStkClust_ID: 'ImpStkClust_ID',
  Delivery_Term: 'Delivery_Term',
  Deliverer_ID: 'Deliverer_ID',
  Manifest_ID: 'Manifest_ID',
  DeliveryNote: 'DeliveryNote',
  Order_No: 'Order_No',
  OrdDelivery_IDX: 'OrdDelivery_IDX',
  Remark: 'Remark',
  IsAuto: 'IsAuto',
  User_ID: 'User_ID',
  Node_ID: 'Node_ID',
  SysUnit_ID: 'SysUnit_ID',
  BU_ID: 'BU_ID',
  Process_Stat: 'Process_Stat',
  isClosed: 'isClosed',
  QtyPost_IDX: 'QtyPost_IDX',
  GLPost_IDX: 'GLPost_IDX',
  Company_ID: 'Company_ID',
  DayType_IDs: 'DayType_IDs',
  Weather_ID: 'Weather_ID',
  Temp_ID: 'Temp_ID',
  SocialEvt_ID: 'SocialEvt_ID',
  Cust_Sex_Type: 'Cust_Sex_Type',
  Age_ID: 'Age_ID',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code',
  Random_Code: 'Random_Code',
  STr_Reason_Code: 'STr_Reason_Code',
  Copies: 'Copies'
};

exports.Prisma.STr_HRMScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StrTrCls_ID: 'StrTrCls_ID',
  Item_IDX: 'Item_IDX',
  Staff_ID: 'Staff_ID',
  OrgTitle_ID: 'OrgTitle_ID',
  OrgPos_ID: 'OrgPos_ID',
  LabContract_Type: 'LabContract_Type',
  Weight_Rate: 'Weight_Rate',
  Allowance_Point: 'Allowance_Point',
  Allowance_Amt: 'Allowance_Amt',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_InvoiceScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StkTrCls_ID: 'StkTrCls_ID',
  Invoice_IDX: 'Invoice_IDX',
  Invoice_No: 'Invoice_No',
  Invoice_Date: 'Invoice_Date',
  Tax_ID: 'Tax_ID',
  Pmt_Cys: 'Pmt_Cys',
  Pmt_ExcRate: 'Pmt_ExcRate',
  Amount: 'Amount',
  Tax_Amt: 'Tax_Amt',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_PaymentScalarFieldEnum = {
  Pmt_IDX: 'Pmt_IDX',
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StkTrCls_ID: 'StkTrCls_ID',
  Pmt_ID: 'Pmt_ID',
  PmtIssuer_ID: 'PmtIssuer_ID',
  Payment_Amt: 'Payment_Amt',
  Pmt_Cys: 'Pmt_Cys',
  Pmt_ExcRate: 'Pmt_ExcRate',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code',
  Request_Data: 'Request_Data',
  Response_Data: 'Response_Data',
  PayRef_No: 'PayRef_No'
};

exports.Prisma.STr_PromotionScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  SCC_ID: 'SCC_ID',
  Stk_ID: 'Stk_ID',
  Item_IDX: 'Item_IDX',
  Promotion_Code: 'Promotion_Code',
  PProg_ID: 'PProg_ID',
  PCard_No: 'PCard_No',
  Cust_ID: 'Cust_ID',
  PManager_ID: 'PManager_ID',
  PICls_ID: 'PICls_ID',
  PItem_ID: 'PItem_ID',
  PItem_Code: 'PItem_Code',
  PItem_Qty: 'PItem_Qty',
  PItem_Cost: 'PItem_Cost',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code'
};

exports.Prisma.STr_PromSetScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  SCC_ID: 'SCC_ID',
  StkClust_ID: 'StkClust_ID',
  Stk_ID: 'Stk_ID',
  SSet_IDX: 'SSet_IDX',
  SSet_Qty: 'SSet_Qty',
  SSet_QtyMax: 'SSet_QtyMax',
  Promotion_Code: 'Promotion_Code',
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  PCard_No: 'PCard_No',
  Cust_ID: 'Cust_ID',
  PManager_ID: 'PManager_ID',
  PSet_IDX: 'PSet_IDX',
  PICls_ID: 'PICls_ID',
  PItem_ID: 'PItem_ID',
  PItem_Code: 'PItem_Code',
  PItem_Qty: 'PItem_Qty',
  PItem_Cost: 'PItem_Cost',
  Partition_Code: 'Partition_Code',
  Disabled: 'Disabled'
};

exports.Prisma.STr_PurcDtlScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StkTrCls_ID: 'StkTrCls_ID',
  Supplier_ID: 'Supplier_ID',
  Invoice_No: 'Invoice_No',
  Invoice_Date: 'Invoice_Date',
  TotalCost_Amt: 'TotalCost_Amt',
  TotalVAT_Amt: 'TotalVAT_Amt',
  PurcOrd_No: 'PurcOrd_No',
  PurcOrd_Date: 'PurcOrd_Date',
  SP_ProPrg_ID: 'SP_ProPrg_ID',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_SaleActsScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  EfTran_Date: 'EfTran_Date',
  Stk_ID: 'Stk_ID',
  StkClust_ID: 'StkClust_ID',
  isSKUIn: 'isSKUIn',
  Item_IDX: 'Item_IDX',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  Goods_Qty: 'Goods_Qty',
  GsMaxReg_Qty: 'GsMaxReg_Qty',
  GoodsUnit_ID: 'GoodsUnit_ID',
  User_ID: 'User_ID',
  Partition_Code: 'Partition_Code',
  Disabled: 'Disabled'
};

exports.Prisma.STr_SaleDtlScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  EfTran_Date: 'EfTran_Date',
  Stk_ID: 'Stk_ID',
  isSKUIn: 'isSKUIn',
  Item_IDX: 'Item_IDX',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUBase_Qty: 'SKUBase_Qty',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUStat_ID: 'SKUStat_ID',
  Sales_Amt: 'Sales_Amt',
  VAT_Amt: 'VAT_Amt',
  Direct_Disc_Amt: 'Direct_Disc_Amt',
  Indirect_Disc_Amt: 'Indirect_Disc_Amt',
  Cost_Amt: 'Cost_Amt',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code',
  STr_Reason_Code: 'STr_Reason_Code',
  WS_ID: 'WS_ID',
  Tax_ID: 'Tax_ID',
  KIT_ID: 'KIT_ID',
  PProg_ID: 'PProg_ID'
};

exports.Prisma.STr_SaleSetScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  Stk_ID: 'Stk_ID',
  StkClust_ID: 'StkClust_ID',
  PLayer_ID: 'PLayer_ID',
  PProg_ID: 'PProg_ID',
  PCase_IDX: 'PCase_IDX',
  SSet_IDX: 'SSet_IDX',
  SSet_Qty: 'SSet_Qty',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  Goods_Qty: 'Goods_Qty',
  GoodsUnit_ID: 'GoodsUnit_ID',
  SKUStat_ID: 'SKUStat_ID',
  Payable_Amt: 'Payable_Amt',
  Tax_ID: 'Tax_ID',
  Partition_Code: 'Partition_Code',
  Disabled: 'Disabled'
};

exports.Prisma.STr_SaleSuspScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  Shift_No: 'Shift_No',
  StkTrCls_ID: 'StkTrCls_ID',
  Stk_ID: 'Stk_ID',
  isSKUIn: 'isSKUIn',
  Item_IDX: 'Item_IDX',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUBase_Qty: 'SKUBase_Qty',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUStat_ID: 'SKUStat_ID',
  Sales_Amt: 'Sales_Amt',
  VAT_Amt: 'VAT_Amt',
  Direct_Disc_Amt: 'Direct_Disc_Amt',
  Indirect_Disc_Amt: 'Indirect_Disc_Amt',
  Cost_Amt: 'Cost_Amt',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.STr_SKUDtlScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StkTrCls_ID: 'StkTrCls_ID',
  isSKUIn: 'isSKUIn',
  Stk_ID: 'Stk_ID',
  Item_IDX: 'Item_IDX',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  SKUBase_Qty: 'SKUBase_Qty',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  SKUPack_Qty: 'SKUPack_Qty',
  SKUPackUnit_ID: 'SKUPackUnit_ID',
  STKLoca_ID: 'STKLoca_ID',
  SKUStat_ID: 'SKUStat_ID',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Partition_Code: 'Partition_Code',
  STr_Reason_Code: 'STr_Reason_Code'
};

exports.Prisma.STr_SKUSerialScalarFieldEnum = {
  Trans_No: 'Trans_No',
  Trans_Date: 'Trans_Date',
  StrTrCls_ID: 'StrTrCls_ID',
  Item_IDX: 'Item_IDX',
  SKU_Code: 'SKU_Code',
  SKUSerial_No: 'SKUSerial_No',
  Serial_Unit_ID: 'Serial_Unit_ID',
  Serial_SKUBase_Qty: 'Serial_SKUBase_Qty',
  SKUBaseUnit_ID: 'SKUBaseUnit_ID',
  Lot_No: 'Lot_No',
  Expiry_Date: 'Expiry_Date',
  SKUStat_ID: 'SKUStat_ID',
  ExtObjCls_ID: 'ExtObjCls_ID',
  ExtObj_ID: 'ExtObj_ID',
  User_ID: 'User_ID',
  Disabled: 'Disabled',
  Period_Code: 'Period_Code'
};

exports.Prisma.SUBSYSCLSScalarFieldEnum = {
  SubS_Code: 'SubS_Code',
  SubS_Desc: 'SubS_Desc',
  Status: 'Status'
};

exports.Prisma.SUBSYSEVENTSScalarFieldEnum = {
  SubS_Code: 'SubS_Code',
  Obj_ID: 'Obj_ID',
  Event_IDX: 'Event_IDX',
  Event_Proc: 'Event_Proc',
  Event_DLL: 'Event_DLL',
  GenTbl_IDs: 'GenTbl_IDs',
  ProcTbl_IDs: 'ProcTbl_IDs',
  isConcentrate: 'isConcentrate',
  isDistributed: 'isDistributed',
  isTransit: 'isTransit'
};

exports.Prisma.SUBSYSRIGHTScalarFieldEnum = {
  SubS_Code: 'SubS_Code',
  Obj_ID: 'Obj_ID',
  ObjKey_IDs: 'ObjKey_IDs',
  GEvent_IDXs: 'GEvent_IDXs',
  PEvent_IDXs: 'PEvent_IDXs',
  nPassDay: 'nPassDay'
};

exports.Prisma.SysAlertClsScalarFieldEnum = {
  SysAlertCls_Code: 'SysAlertCls_Code',
  SysAlertCls_Desc: 'SysAlertCls_Desc',
  API_AlertClsChk: 'API_AlertClsChk',
  API_AlertClsProc: 'API_AlertClsProc',
  AlertCls_Syntax: 'AlertCls_Syntax',
  AlertCls_Methods: 'AlertCls_Methods',
  Role_ID: 'Role_ID',
  Org_ID: 'Org_ID',
  User_ID: 'User_ID',
  Disabled: 'Disabled'
};

exports.Prisma.SysAlertsScalarFieldEnum = {
  SysAlert_Code: 'SysAlert_Code',
  SysAlertCls_Code: 'SysAlertCls_Code',
  Alert_Method: 'Alert_Method',
  ToUser_ID: 'ToUser_ID',
  SysAlert_Content: 'SysAlert_Content',
  User_ID: 'User_ID',
  Cr_Alert_Date: 'Cr_Alert_Date',
  Disp_Alert_Date: 'Disp_Alert_Date',
  Recv_Alert_Date: 'Recv_Alert_Date',
  Disabled: 'Disabled'
};

exports.Prisma.SYSUNITScalarFieldEnum = {
  SUnit_ID: 'SUnit_ID',
  SUnit_Code: 'SUnit_Code',
  SUnit_Desc: 'SUnit_Desc',
  SubS_Code: 'SubS_Code',
  Node_ID: 'Node_ID',
  isNode: 'isNode',
  PUnit_ID: 'PUnit_ID',
  Event_No: 'Event_No',
  Status: 'Status'
};

exports.Prisma.SYSVARScalarFieldEnum = {
  Var_Name: 'Var_Name',
  Data_Type: 'Data_Type',
  Var_Value: 'Var_Value',
  Var_Desc: 'Var_Desc',
  InputMask: 'InputMask',
  Modify: 'Modify',
  Dept_IDs: 'Dept_IDs',
  Resource_ID: 'Resource_ID',
  Status: 'Status'
};

exports.Prisma.TABLEDICScalarFieldEnum = {
  Tbl_ID: 'Tbl_ID',
  Tbl_Name: 'Tbl_Name',
  DB_Name: 'DB_Name',
  Tbl_Idx: 'Tbl_Idx',
  Tbl_Desc: 'Tbl_Desc',
  isBackUp: 'isBackUp',
  Devided_by: 'Devided_by',
  Related_Tbl: 'Related_Tbl',
  Del_Filter: 'Del_Filter',
  Del_Period: 'Del_Period',
  Dept_IDs: 'Dept_IDs',
  Obj_ID: 'Obj_ID',
  Status: 'Status'
};

exports.Prisma.TaxationScalarFieldEnum = {
  Tax_ID: 'Tax_ID',
  Tax_Code: 'Tax_Code',
  Description: 'Description',
  Tax_Rate: 'Tax_Rate',
  Type: 'Type',
  Tax_AR_Code: 'Tax_AR_Code',
  Tax_AP_Code: 'Tax_AP_Code',
  Disabled: 'Disabled'
};

exports.Prisma.TemperatureScalarFieldEnum = {
  Temp_ID: 'Temp_ID',
  Temp_Code: 'Temp_Code',
  Temp_Desc: 'Temp_Desc',
  Temp_Img: 'Temp_Img',
  Fr_Degrees: 'Fr_Degrees',
  To_Degrees: 'To_Degrees',
  Disabled: 'Disabled'
};

exports.Prisma.TRCODEScalarFieldEnum = {
  Trans_ID: 'Trans_ID',
  Tran_Code: 'Tran_Code',
  Tran_Name: 'Tran_Name',
  RFTRS_Code: 'RFTRS_Code',
  Tran_Type: 'Tran_Type',
  Form_Name: 'Form_Name',
  SQL_Command: 'SQL_Command',
  FRCODE: 'FRCODE',
  TOCODE: 'TOCODE',
  Merc_Type: 'Merc_Type',
  Obj_ID: 'Obj_ID',
  Status: 'Status',
  Resource_ID: 'Resource_ID',
  DEP_CODE: 'DEP_CODE',
  IsPack: 'IsPack'
};

exports.Prisma.TRDocPRNScalarFieldEnum = {
  Tran_Code: 'Tran_Code',
  Docx_type: 'Docx_type',
  PRN_IDX: 'PRN_IDX',
  PRN_Type: 'PRN_Type',
  nCopies: 'nCopies',
  FVoucher: 'FVoucher',
  Doc_Name: 'Doc_Name',
  Status: 'Status'
};

exports.Prisma.UnitsScalarFieldEnum = {
  Unit_ID: 'Unit_ID',
  Unit_Code: 'Unit_Code',
  Unit_Name: 'Unit_Name',
  Unit_Type: 'Unit_Type',
  Disabled: 'Disabled'
};

exports.Prisma.UserAuthorityScalarFieldEnum = {
  User_ID: 'User_ID',
  Authority_ID: 'Authority_ID'
};

exports.Prisma.UserInfoScalarFieldEnum = {
  User_ID: 'User_ID',
  OrgUnit_ID: 'OrgUnit_ID',
  OrgPos_ID: 'OrgPos_ID',
  OrgPosition: 'OrgPosition',
  Disabled: 'Disabled'
};

exports.Prisma.USEROBJRIGHTScalarFieldEnum = {
  User_ID: 'User_ID',
  Obj_ID: 'Obj_ID',
  ObjKey_IDs: 'ObjKey_IDs',
  Event_IDXs: 'Event_IDXs',
  nPassDay: 'nPassDay'
};

exports.Prisma.UserRolesScalarFieldEnum = {
  Role_ID: 'Role_ID',
  User_ID: 'User_ID',
  SetupUser_ID: 'SetupUser_ID',
  Setup_Date: 'Setup_Date',
  DisabledUser_ID: 'DisabledUser_ID',
  Disabled_Date: 'Disabled_Date',
  Disabled: 'Disabled'
};

exports.Prisma.USERSScalarFieldEnum = {
  User_ID: 'User_ID',
  Node_ID: 'Node_ID',
  Type: 'Type',
  Login_Name: 'Login_Name',
  Password: 'Password',
  Full_Name: 'Full_Name',
  GoodGrp_IDs: 'GoodGrp_IDs',
  EqualUS_IDs: 'EqualUS_IDs',
  APSMenus_IDs: 'APSMenus_IDs',
  BDSMenus_IDs: 'BDSMenus_IDs',
  POSMenus_IDs: 'POSMenus_IDs',
  RESMenus_IDs: 'RESMenus_IDs',
  Confirm_IDs: 'Confirm_IDs',
  WS_IDs: 'WS_IDs',
  Tran_IDs: 'Tran_IDs',
  Reports_IDs: 'Reports_IDs',
  SMTPHost: 'SMTPHost',
  SMTPPort: 'SMTPPort',
  SMTPSSL: 'SMTPSSL',
  SMTPEmail: 'SMTPEmail',
  SMTPUser: 'SMTPUser',
  SMTPPW: 'SMTPPW',
  Login: 'Login',
  Status: 'Status',
  PW_Grace: 'PW_Grace',
  Image: 'Image'
};

exports.Prisma.UTILSScalarFieldEnum = {
  Util_ID: 'Util_ID',
  Util_Type: 'Util_Type',
  Util_Code: 'Util_Code',
  Caption_VN: 'Caption_VN',
  Caption_EN: 'Caption_EN',
  Util_Desc: 'Util_Desc',
  Comment: 'Comment',
  Frm_Name: 'Frm_Name',
  File_Path: 'File_Path',
  Dep_Code: 'Dep_Code',
  Paras: 'Paras',
  Obj_ID: 'Obj_ID',
  Resource_ID: 'Resource_ID',
  Chk: 'Chk',
  Status: 'Status'
};

exports.Prisma.VoucherInfoScalarFieldEnum = {
  Voucher_No: 'Voucher_No',
  Rand_Code: 'Rand_Code',
  VoucherPrg_ID: 'VoucherPrg_ID',
  SCC_ID: 'SCC_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  Value_Amt: 'Value_Amt',
  Paid_Amt: 'Paid_Amt',
  Effect_Date: 'Effect_Date',
  Due_Date: 'Due_Date',
  IssueTr_Date: 'IssueTr_Date',
  IssueTr_Num: 'IssueTr_Num',
  IssueTrCls_ID: 'IssueTrCls_ID',
  RevokeTr_Date: 'RevokeTr_Date',
  RevokeTr_Num: 'RevokeTr_Num',
  RevokeTrCls_ID: 'RevokeTrCls_ID',
  Disabled: 'Disabled'
};

exports.Prisma.VoucherPrgScalarFieldEnum = {
  VoucherPrg_ID: 'VoucherPrg_ID',
  VoucherPrg_Code: 'VoucherPrg_Code',
  VoucherPrg_Name: 'VoucherPrg_Name',
  SCC_ID: 'SCC_ID',
  GType_ID: 'GType_ID',
  Goods_ID: 'Goods_ID',
  SKU_Code: 'SKU_Code',
  isSaleItem: 'isSaleItem',
  isPromotion: 'isPromotion',
  isElectro: 'isElectro',
  Prefix: 'Prefix',
  Rand_Length: 'Rand_Length',
  Issued_Qty: 'Issued_Qty',
  Max_Qty: 'Max_Qty',
  Value_Amt: 'Value_Amt',
  isMultiPmt: 'isMultiPmt',
  Effect_Date: 'Effect_Date',
  Due_Date: 'Due_Date',
  Disabled: 'Disabled',
  Process: 'Process'
};

exports.Prisma.WeatherScalarFieldEnum = {
  Weather_ID: 'Weather_ID',
  Weather_Code: 'Weather_Code',
  Weather_Desc: 'Weather_Desc',
  Weather_Img: 'Weather_Img',
  Disabled: 'Disabled'
};

exports.Prisma.WSTermClsScalarFieldEnum = {
  WSTCls__ID: 'WSTCls__ID',
  WSTCls_Code: 'WSTCls_Code',
  WSTCls_Brand: 'WSTCls_Brand',
  WSTCls_Desc: 'WSTCls_Desc',
  API_Code: 'API_Code',
  DLL_Name: 'DLL_Name',
  Status: 'Status'
};

exports.Prisma.WSTerminalsScalarFieldEnum = {
  WST_ID: 'WST_ID',
  WST_Code: 'WST_Code',
  WSTCls_ID: 'WSTCls_ID',
  WST_Desc: 'WST_Desc',
  Node_ID: 'Node_ID',
  WS_ID: 'WS_ID',
  WST_Port: 'WST_Port',
  Addr_IP4: 'Addr_IP4',
  Width: 'Width',
  isTouch: 'isTouch',
  IsJournal: 'IsJournal',
  IsDocu: 'IsDocu',
  MSR_Track: 'MSR_Track',
  Status: 'Status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  ALERTMSG: 'ALERTMSG',
  ALLCODE: 'ALLCODE',
  APPVAR: 'APPVAR',
  Authority: 'Authority',
  BarcodeDef: 'BarcodeDef',
  Brand: 'Brand',
  CashBalance: 'CashBalance',
  Cashier: 'Cashier',
  CashTr_DTL: 'CashTr_DTL',
  CashTr_HDR: 'CashTr_HDR',
  CashTransCls: 'CashTransCls',
  CashTrOrder: 'CashTrOrder',
  COUNTER: 'COUNTER',
  Countries: 'Countries',
  CouponInfo: 'CouponInfo',
  CouponPrg: 'CouponPrg',
  CURRENCY: 'CURRENCY',
  DayType: 'DayType',
  DEPARTS: 'DEPARTS',
  DEVICES: 'DEVICES',
  DEVSTS: 'DEVSTS',
  EVENTLOGCLS: 'EVENTLOGCLS',
  EVENTLOGS: 'EVENTLOGS',
  ExternalObjCls: 'ExternalObjCls',
  FC_Contract: 'FC_Contract',
  FC_Contract_Place: 'FC_Contract_Place',
  FC_GPMargin: 'FC_GPMargin',
  FC_Period: 'FC_Period',
  FC_Period_Grp: 'FC_Period_Grp',
  FC_Period_Gs: 'FC_Period_Gs',
  FC_Store: 'FC_Store',
  FFCategory: 'FFCategory',
  FFCategoryItem: 'FFCategoryItem',
  FOBJS: 'FOBJS',
  FORMS: 'FORMS',
  Franchisee: 'Franchisee',
  FUNCTIONS: 'FUNCTIONS',
  GEOPLACES: 'GEOPLACES',
  Goods: 'Goods',
  GoodsGrp: 'GoodsGrp',
  GoodsInfo: 'GoodsInfo',
  GoodsNotice: 'GoodsNotice',
  GoodsSet: 'GoodsSet',
  GoodsType: 'GoodsType',
  GSetItems: 'GSetItems',
  HIS_ItemMaster: 'HIS_ItemMaster',
  HIS_RTPrice: 'HIS_RTPrice',
  HRMCode: 'HRMCode',
  ItemGrpSet: 'ItemGrpSet',
  KitInfo: 'KitInfo',
  Kits: 'Kits',
  LeaveDays: 'LeaveDays',
  LOGCLS: 'LOGCLS',
  LogistArea: 'LogistArea',
  LogistPack: 'LogistPack',
  LogistService: 'LogistService',
  LOGS: 'LOGS',
  Manufacturer: 'Manufacturer',
  MENUS: 'MENUS',
  MessageCls: 'MessageCls',
  MsgClsPart: 'MsgClsPart',
  NODES: 'NODES',
  OBJEVENTS: 'OBJEVENTS',
  OBJGRPEVT: 'OBJGRPEVT',
  OBJGRPS: 'OBJGRPS',
  OBJS: 'OBJS',
  Partner_Bank: 'Partner_Bank',
  Partner_Loc: 'Partner_Loc',
  Partner_PIC: 'Partner_PIC',
  Partner_Type: 'Partner_Type',
  Partners: 'Partners',
  PARTTYPE: 'PARTTYPE',
  PATCHTYPE: 'PATCHTYPE',
  PaymentMode: 'PaymentMode',
  PaymentService: 'PaymentService',
  PItemCls: 'PItemCls',
  Player: 'Player',
  PLUCode: 'PLUCode',
  PmtModeTerminal: 'PmtModeTerminal',
  Promotions: 'Promotions',
  PSItemCls: 'PSItemCls',
  QueueMsg: 'QueueMsg',
  RECVEVENTQUEUE: 'RECVEVENTQUEUE',
  REPORTS: 'REPORTS',
  RESOURCE_DIC: 'RESOURCE_DIC',
  RESOURCES: 'RESOURCES',
  RoleAuthority: 'RoleAuthority',
  Roles: 'Roles',
  RT_LevelPrice: 'RT_LevelPrice',
  RT_PProgCase: 'RT_PProgCase',
  RT_PProgOwner: 'RT_PProgOwner',
  RT_PProgPhase: 'RT_PProgPhase',
  RT_PProgPIStore: 'RT_PProgPIStore',
  RT_PProgPOS: 'RT_PProgPOS',
  RT_PProgs: 'RT_PProgs',
  RT_PProgTime: 'RT_PProgTime',
  RT_Price: 'RT_Price',
  RT_PriceLevel: 'RT_PriceLevel',
  RT_PriceOrd: 'RT_PriceOrd',
  RT_PriceOrdDtl: 'RT_PriceOrdDtl',
  RT_ProgCPItem: 'RT_ProgCPItem',
  RT_ProgPSItem: 'RT_ProgPSItem',
  SCC_CVSGsPolicy: 'SCC_CVSGsPolicy',
  SCC_SKUItems: 'SCC_SKUItems',
  SCCenter: 'SCCenter',
  SCCluster: 'SCCluster',
  SEARCH: 'SEARCH',
  SENDEVENTQUEUE: 'SENDEVENTQUEUE',
  SKUBarcode: 'SKUBarcode',
  SKUItemBIN: 'SKUItemBIN',
  SKUItemLeast: 'SKUItemLeast',
  SKUItemLoca: 'SKUItemLoca',
  SKUItemLot: 'SKUItemLot',
  SKUItems: 'SKUItems',
  SKUItemSerial: 'SKUItemSerial',
  SKUItemZone: 'SKUItemZone',
  SKUnit: 'SKUnit',
  SKUStatus: 'SKUStatus',
  SocialEvent: 'SocialEvent',
  SOrder_Dtl: 'SOrder_Dtl',
  SOrder_Export: 'SOrder_Export',
  SOrder_Hdr: 'SOrder_Hdr',
  STATIONS: 'STATIONS',
  Stktake_Adj: 'Stktake_Adj',
  Stktake_Dtl: 'Stktake_Dtl',
  Stktake_Hdr: 'Stktake_Hdr',
  StkTranCls: 'StkTranCls',
  Stock: 'Stock',
  StockCluster: 'StockCluster',
  StockGate: 'StockGate',
  StockGLInfo: 'StockGLInfo',
  StockInfo: 'StockInfo',
  StockLine: 'StockLine',
  StockLoca: 'StockLoca',
  StockType: 'StockType',
  StockZone: 'StockZone',
  STr_CollectPmt: 'STr_CollectPmt',
  STr_GLAcc: 'STr_GLAcc',
  STr_Hdr: 'STr_Hdr',
  STr_HRM: 'STr_HRM',
  STr_Invoice: 'STr_Invoice',
  STr_Payment: 'STr_Payment',
  STr_Promotion: 'STr_Promotion',
  STr_PromSet: 'STr_PromSet',
  STr_PurcDtl: 'STr_PurcDtl',
  STr_SaleActs: 'STr_SaleActs',
  STr_SaleDtl: 'STr_SaleDtl',
  STr_SaleSet: 'STr_SaleSet',
  STr_SaleSusp: 'STr_SaleSusp',
  STr_SKUDtl: 'STr_SKUDtl',
  STr_SKUSerial: 'STr_SKUSerial',
  SUBSYSCLS: 'SUBSYSCLS',
  SUBSYSEVENTS: 'SUBSYSEVENTS',
  SUBSYSRIGHT: 'SUBSYSRIGHT',
  SysAlertCls: 'SysAlertCls',
  SysAlerts: 'SysAlerts',
  SYSUNIT: 'SYSUNIT',
  SYSVAR: 'SYSVAR',
  TABLEDIC: 'TABLEDIC',
  Taxation: 'Taxation',
  Temperature: 'Temperature',
  TRCODE: 'TRCODE',
  TRDocPRN: 'TRDocPRN',
  Units: 'Units',
  UserAuthority: 'UserAuthority',
  UserInfo: 'UserInfo',
  USEROBJRIGHT: 'USEROBJRIGHT',
  UserRoles: 'UserRoles',
  USERS: 'USERS',
  UTILS: 'UTILS',
  VoucherInfo: 'VoucherInfo',
  VoucherPrg: 'VoucherPrg',
  Weather: 'Weather',
  WSTermCls: 'WSTermCls',
  WSTerminals: 'WSTerminals'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

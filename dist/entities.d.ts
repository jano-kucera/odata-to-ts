export interface Category {
    CategoryID: number;
    CategoryName: string;
    Description?: string;
    Picture?: Uint8Array;
}
export interface CustomerDemographic {
    CustomerTypeID: string;
    CustomerDesc?: string;
}
export interface Customer {
    CustomerID: string;
    CompanyName: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    Fax?: string;
}
export interface Employee {
    EmployeeID: number;
    LastName: string;
    FirstName: string;
    Title?: string;
    TitleOfCourtesy?: string;
    BirthDate?: Date;
    HireDate?: Date;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    HomePhone?: string;
    Extension?: string;
    Photo?: Uint8Array;
    Notes?: string;
    ReportsTo?: number;
    PhotoPath?: string;
}
export interface Order_Detail {
    OrderID: number;
    ProductID: number;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
}
export interface Order {
    OrderID: number;
    CustomerID?: string;
    EmployeeID?: number;
    OrderDate?: Date;
    RequiredDate?: Date;
    ShippedDate?: Date;
    ShipVia?: number;
    Freight?: number;
    ShipName?: string;
    ShipAddress?: string;
    ShipCity?: string;
    ShipRegion?: string;
    ShipPostalCode?: string;
    ShipCountry?: string;
}
export interface Product {
    ProductID: number;
    ProductName: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued: boolean;
}
export interface Region {
    RegionID: number;
    RegionDescription: string;
}
export interface Shipper {
    ShipperID: number;
    CompanyName: string;
    Phone?: string;
}
export interface Supplier {
    SupplierID: number;
    CompanyName: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    Fax?: string;
    HomePage?: string;
}
export interface Territory {
    TerritoryID: string;
    TerritoryDescription: string;
    RegionID: number;
}
export interface Alphabetical_list_of_product {
    ProductID: number;
    ProductName: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued: boolean;
    CategoryName: string;
}
export interface Category_Sales_for_1997 {
    CategoryName: string;
    CategorySales?: number;
}
export interface Current_Product_List {
    ProductID: number;
    ProductName: string;
}
export interface Customer_and_Suppliers_by_City {
    City?: string;
    CompanyName: string;
    ContactName?: string;
    Relationship: string;
}
export interface Invoice {
    ShipName?: string;
    ShipAddress?: string;
    ShipCity?: string;
    ShipRegion?: string;
    ShipPostalCode?: string;
    ShipCountry?: string;
    CustomerID?: string;
    CustomerName: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Salesperson: string;
    OrderID: number;
    OrderDate?: Date;
    RequiredDate?: Date;
    ShippedDate?: Date;
    ShipperName: string;
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
    ExtendedPrice?: number;
    Freight?: number;
}
export interface Order_Details_Extended {
    OrderID: number;
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
    ExtendedPrice?: number;
}
export interface Order_Subtotal {
    OrderID: number;
    Subtotal?: number;
}
export interface Orders_Qry {
    OrderID: number;
    CustomerID?: string;
    EmployeeID?: number;
    OrderDate?: Date;
    RequiredDate?: Date;
    ShippedDate?: Date;
    ShipVia?: number;
    Freight?: number;
    ShipName?: string;
    ShipAddress?: string;
    ShipCity?: string;
    ShipRegion?: string;
    ShipPostalCode?: string;
    ShipCountry?: string;
    CompanyName: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
}
export interface Product_Sales_for_1997 {
    CategoryName: string;
    ProductName: string;
    ProductSales?: number;
}
export interface Products_Above_Average_Price {
    ProductName: string;
    UnitPrice?: number;
}
export interface Products_by_Category {
    CategoryName: string;
    ProductName: string;
    QuantityPerUnit?: string;
    UnitsInStock?: number;
    Discontinued: boolean;
}
export interface Sales_by_Category {
    CategoryID: number;
    CategoryName: string;
    ProductName: string;
    ProductSales?: number;
}
export interface Sales_Totals_by_Amount {
    SaleAmount?: number;
    OrderID: number;
    CompanyName: string;
    ShippedDate?: Date;
}
export interface Summary_of_Sales_by_Quarter {
    ShippedDate?: Date;
    OrderID: number;
    Subtotal?: number;
}
export interface Summary_of_Sales_by_Year {
    ShippedDate?: Date;
    OrderID: number;
    Subtotal?: number;
}

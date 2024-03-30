export interface Category {
    CategoryID: number;
    CategoryName: string;
    Description?: string;
    Picture?: Uint8Array;
}
export interface CustomerDemographic {
    CustomerDesc?: string;
    CustomerTypeID: string;
}
export interface Customer {
    Address?: string;
    City?: string;
    CompanyName: string;
    ContactName?: string;
    ContactTitle?: string;
    Country?: string;
    CustomerID: string;
    Fax?: string;
    Phone?: string;
    PostalCode?: string;
    Region?: string;
}
export interface Employee {
    Address?: string;
    BirthDate?: Date;
    City?: string;
    Country?: string;
    EmployeeID: number;
    Extension?: string;
    FirstName: string;
    HireDate?: Date;
    HomePhone?: string;
    LastName: string;
    Notes?: string;
    Photo?: Uint8Array;
    PhotoPath?: string;
    PostalCode?: string;
    Region?: string;
    ReportsTo?: number;
    Title?: string;
    TitleOfCourtesy?: string;
}
export interface Order_Detail {
    Discount: number;
    OrderID: number;
    ProductID: number;
    Quantity: number;
    UnitPrice: number;
}
export interface Order {
    CustomerID?: string;
    EmployeeID?: number;
    Freight?: number;
    OrderDate?: Date;
    OrderID: number;
    RequiredDate?: Date;
    ShipAddress?: string;
    ShipCity?: string;
    ShipCountry?: string;
    ShipName?: string;
    ShippedDate?: Date;
    ShipPostalCode?: string;
    ShipRegion?: string;
    ShipVia?: number;
}
export interface Product {
    CategoryID?: number;
    Discontinued: boolean;
    ProductID: number;
    ProductName: string;
    QuantityPerUnit?: string;
    ReorderLevel?: number;
    SupplierID?: number;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
}
export interface Region {
    RegionDescription: string;
    RegionID: number;
}
export interface Shipper {
    CompanyName: string;
    Phone?: string;
    ShipperID: number;
}
export interface Supplier {
    Address?: string;
    City?: string;
    CompanyName: string;
    ContactName?: string;
    ContactTitle?: string;
    Country?: string;
    Fax?: string;
    HomePage?: string;
    Phone?: string;
    PostalCode?: string;
    Region?: string;
    SupplierID: number;
}
export interface Territory {
    RegionID: number;
    TerritoryDescription: string;
    TerritoryID: string;
}
export interface Alphabetical_list_of_product {
    CategoryID?: number;
    CategoryName: string;
    Discontinued: boolean;
    ProductID: number;
    ProductName: string;
    QuantityPerUnit?: string;
    ReorderLevel?: number;
    SupplierID?: number;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
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
    Address?: string;
    City?: string;
    Country?: string;
    CustomerID?: string;
    CustomerName: string;
    Discount: number;
    ExtendedPrice?: number;
    Freight?: number;
    OrderDate?: Date;
    OrderID: number;
    PostalCode?: string;
    ProductID: number;
    ProductName: string;
    Quantity: number;
    Region?: string;
    RequiredDate?: Date;
    Salesperson: string;
    ShipAddress?: string;
    ShipCity?: string;
    ShipCountry?: string;
    ShipName?: string;
    ShippedDate?: Date;
    ShipperName: string;
    ShipPostalCode?: string;
    ShipRegion?: string;
    UnitPrice: number;
}
export interface Order_Details_Extended {
    Discount: number;
    ExtendedPrice?: number;
    OrderID: number;
    ProductID: number;
    ProductName: string;
    Quantity: number;
    UnitPrice: number;
}
export interface Order_Subtotal {
    OrderID: number;
    Subtotal?: number;
}
export interface Orders_Qry {
    Address?: string;
    City?: string;
    CompanyName: string;
    Country?: string;
    CustomerID?: string;
    EmployeeID?: number;
    Freight?: number;
    OrderDate?: Date;
    OrderID: number;
    PostalCode?: string;
    Region?: string;
    RequiredDate?: Date;
    ShipAddress?: string;
    ShipCity?: string;
    ShipCountry?: string;
    ShipName?: string;
    ShippedDate?: Date;
    ShipPostalCode?: string;
    ShipRegion?: string;
    ShipVia?: number;
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
    Discontinued: boolean;
    ProductName: string;
    QuantityPerUnit?: string;
    UnitsInStock?: number;
}
export interface Sales_by_Category {
    CategoryID: number;
    CategoryName: string;
    ProductName: string;
    ProductSales?: number;
}
export interface Sales_Totals_by_Amount {
    CompanyName: string;
    OrderID: number;
    SaleAmount?: number;
    ShippedDate?: Date;
}
export interface Summary_of_Sales_by_Quarter {
    OrderID: number;
    ShippedDate?: Date;
    Subtotal?: number;
}
export interface Summary_of_Sales_by_Year {
    OrderID: number;
    ShippedDate?: Date;
    Subtotal?: number;
}

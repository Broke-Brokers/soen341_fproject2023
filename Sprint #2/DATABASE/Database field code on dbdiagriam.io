table UserType{
  UserType_ID INT PK
  Type VARCHAR
}

table Client_status{
  Client_status_ID INT PK
  status VARCHAR
}

table Admin{
UserType_ID INT PK
Admin_ID INT PK
Admin_First_name VARCHAR
Admin_Last_name VARCHAR
Admin_username VARCHAR
Admin_password VARCHAR
Admin_Email VARCHAR
Broker_ID INT
}

table Buyer_Renter{
UserType_ID INT PK
Buyer_Renter_ID INT PK
Client_status INT
Buyer_Renter_First_name VARCHAR
Buyer_Renter_Last_name VARCHAR
Buyer_Renter_username VARCHAR
Buyer_Renter_password VARCHAR
Buyer_Renter_Email VARCHAR
Buyer_Renter_Phone VARCHAR

}





table Broker{
UserType_ID INT PK
Broker_ID INT PK
Client_File_ID INT
Broker_First_Name VARCHAR
Broker_Last_name VARCHAR
Broker_username VARCHAR
Broker_password VARCHAR
Broker_Email VARCHAR
Broker_Phone VARCHAR
}


table Broker_Client_file{
  Client_File_ID INT PK
  Broker_ID INT
  Client_status INT
  UserType_ID INT
  User_ID INT
  Property_List_ID INT
  start_date VARCHAR

}

table PropertyList{
Property_List_ID INT PK
UserType_ID INT 
User_ID INT 
property_id INT
}

Table Property {
  property_id INT PK
  Price double
  Adress VARCHAR
  City VARCHAR
  Province VARCHAR
  Neghborhood VARCHAR
  No_bathrooms INT
  No_Bedrooms INT
  property_type_id INT
  listing_type_id INT
  Property_Status_id INT

}

Table Property_type {
  property_type_id INT PK
  Type_of_property VARCHAR
}

Table Listing_type{
  Listing_type_id INT
  Type_of_listing VARCHAR
  
}

Table Property_Status {
  Property_Status_id INT PK
  Status_of_property VARCHAR
}
Table Property_Amenity {
  property_id INT PK
  Amenity_id INT
}
Table Amenity {
  Amenity_id INT PK
  Amenity_name VARCHAR
}






Ref: "UserType"."UserType_ID" < "Buyer_Renter"."UserType_ID" 
Ref: "UserType"."UserType_ID" < "Broker"."UserType_ID"
Ref: "UserType"."UserType_ID" < "Admin"."UserType_ID"


Ref: "Client_status"."Client_status_ID" < "Buyer_Renter"."Client_status"


Ref: "Admin"."Broker_ID" < "Broker"."Broker_ID"





Ref: "PropertyList"."UserType_ID" < "Buyer_Renter"."UserType_ID"

Ref: "PropertyList"."User_ID" < "Buyer_Renter"."Buyer_Renter_ID"

Ref: "Property"."property_id" < "PropertyList"."property_id"






Ref: "Broker_Client_file"."Client_File_ID" < "Broker"."Client_File_ID"
Ref: "Broker_Client_file"."Broker_ID" < "Broker"."Broker_ID"


Ref: "Broker_Client_file"."UserType_ID" < "Buyer_Renter"."UserType_ID"

Ref: "Broker_Client_file"."User_ID" < "Buyer_Renter"."UserType_ID"

Ref: "Broker_Client_file"."Property_List_ID" < "PropertyList"."Property_List_ID"







Ref: "Property_type"."property_type_id" < "Property"."property_type_id"

Ref: "Listing_type"."Listing_type_id" < "Property"."listing_type_id"
Ref: "Property_Status"."Property_Status_id" < "Property"."Property_Status_id"

Ref: "Property"."property_id" < "Property_Amenity"."property_id"
Ref: "Amenity"."Amenity_id" < "Property_Amenity"."Amenity_id"

# React + Vite

car wash Schema

name: string,
phone : string,
email: string,
bodyType : string ( Select option)
car brand: string
car year : string
car model: string
servicePackage : string , ( Select option)
Your Address : string
message : string

car consultancy schema

name: string,
phone : string,
email: string,
bodyType : string ( Select option)
car brand: string
car year : string
car model: string
production year : number
message : string

post your ads / car schema

title : string
brand : string
edition: string
model: string
registration year : number
production year : number
condition : string ( select option new / used)
transmition : string ( select option ,, Automatic / Manual)
bodyType : string ( select option)
fuelType : array string select multiple, [ like , CNG, Octen, Dissel]
engine capacity: number
kilometer : number
details : string
gallery : array of string - multiple file upload
price : number
location -> Select District
Location -> select Upazila
userid -> userid will be passed with form but not in frontend view

signin schema

mobile - number
password : string

signup schema

name : string
mobile : number
email: number
password : string

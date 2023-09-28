create table Orders(
	OrderID serial primary key,
	CustomerID int not null,
	EmployeeID int not null,
	OrderDate date not null,
	ShipperID int not null
);
select * from Orders;

create table OrderDetails(
	OrderDetailID serial primary key,
	OrderID int not null,
	ProductID int not null,
	Quantity int not null
);
select * from OrderDetails;

create table Shippers(
	ShipperID serial primary key,
	ShipperName varchar(90) not null,
	Phone varchar(20) not null
);

insert into Shippers 
values
(1, 'Speedy Express', '(503) 555-9831'),
(2, 'United Package', '(503) 555-3199'),
(3, 'Federal Shipping', '(503) 555-9931');

--SQL SUM() Function
select sum(quantity)
from OrderDetails;

select sum(quantity) as "Total produto id 11"
from OrderDetails
where productid = 11;

select count(quantity)
from OrderDetails
where productid = 11;

select sum(quantity * 10)
from OrderDetails
where productid = 11;

select sum (price * quantity) as "Preco x Qtdd"
from OrderDetails
left join products on OrderDetails.productid = products.productid;

select avg(price)
from products
where categoryid = 1;

select avg(price) as "Media de preco"
from products;

select * from products
where price > (select avg(price) from products)
order by price;


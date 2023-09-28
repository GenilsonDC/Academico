create table Products(
	ProductID serial primary key,
	ProductName varchar(100) not null,
	SupplierID int not null,
	CategoryID int not null,
	Unit varchar(100) not null,
	Price numeric(10,2) not null
)

select * from products

--SQL MIN() and MAX() Functions
select min(price)
from products;

select max(price)
from products;

select min(price) as Menor
from products;

-- SQL COUNT() Function
select count(productid) as "Maior que R$20"
from products
where price > 20;

select count(productname) as "Total de Produtos"
from products;

Select count(distinct price) as "Contagem com valores unicos"
from products

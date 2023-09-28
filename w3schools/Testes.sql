--The SQL AND Operator
Select * from customers
where country = 'Spain' and CustomerName like 'G%';

SELECT * FROM Customers
WHERE Country = 'Germany'
AND City = 'Berlin'
AND PostalCode::integer > 12000;

--Combining AND and OR
SELECT * FROM CUSTOMERS
WHERE country = 'Brazil'
and (customerName like 'G%' or customername like'Q%');

select * from customers
where country = 'Brazil'
and customername like 'G%' or customername like 'Q%'; --Wrong : show me a Germany Customer

--SQL NOT Operator
select * from customers
where not country = 'Brazil'
order by country;

--NOT LIKE
select * from customers
where customername not like 'A%'
order by customername;

--NOT BETWEEN
select * from customers
where customerid not between 10 and 25;

select * from products
where price between 10 and 20
and categoryid not in (1,2,3,4);

select * from customers
where customername not between 'A' and 'F' -- Caution because this command is used for campar numbers n o strings
order by customername;

select * from products
where productname between 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
order by productname;

-- BETWEEN Dates Example
select * from orders
where orderdate between '1996-07-01' and '1996-07-31';

--NOT IN
Select * from customers 
where city not in('London','Paris')
order by city;

--NOT Greater Than
Select * from customers
where not customerid > 45;

--SQL NULL Values
select customername, contactname, address
from customers
where address is null;

select customername, contactname, address
from customers
where address is not null
order by customername;

--SQL UPDATE Statement
-- Note: Be careful when updating records in a table! 
-- Notice the WHERE clause in the UPDATE statement.
-- The WHERE clause specifies which record(s) that should be updated.
-- If you omit the WHERE clause, all records in the table will be updated!


--	UPDATE table_name
--	SET column1 = value1, column2 = value2, ...
--	WHERE condition;

update customers
set contactname = 'Eduarda Amorim', customername = 'Alfredo Sergio' -- Teste about the position, only curius.. ˆˆ
where customerid = 1;

update customers
 set customername = 'B.s Beverages'
 where customerid = 5;
 
 update customers
 set contactname = 'Vizinhos da frente'
 where customername = 'Genilson do Carmo';
 
update customers
set contactname = 'Tiro certo'
where country = 'Mexico';
-- Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

select * from customers
where country = 'Mexico';

-- SQL DELETE Statement
--select * from customers;
delete from customers
where customername = 'B`s Beverages';

--SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause
-- Note: Not all database systems support the SELECT TOP clause
-- MySQL supports the LIMIT clause to select a limited number of records,
-- while Oracle uses FETCH FIRST n ROWS ONLY and ROWNUM.
select * from customers
fetch first 5 rows only;

select * from customers
order by customername
fetch first 5 rows only;

select * from customers
order by customerid
limit(select ceil (count(*) * 0.5) from customers) --This CEIL round up

select customername
from customers
 where country ='Germany'
 order by customerid
 limit(select count(*) * 0.9 from customers);

-- SQL IN Operator
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

select * from customers
where country not in ('Germany', 'France', 'UK');

-- IN (SELECT)
Select * from customers
where customerid in (select customerid from orders);

select * from customers
where customerid not in(select customerid from orders);

-- Alias
Select customername as "Cliente", address || ', ' || postalcode || ' ' || city || ', ' || country as "Address"
from customers;

select orders.orderid, orders.orderdate, customers.customername
from customers, orders
where customers.customername = 'Around the Horn'
and customers.customerid = orders.customerid;

select o.orderid, o.orderdate, c.customername
from customers as c, orders as o
where c.customername =  'Around the Horn'
and c.customerid = o.customerid;

-- SQL JOIN
select o.orderid, c.customername as "Nome Cliente", o.orderdate
from orders o
inner join customers c on o.customerid = c.customerid;

select o.orderid, c.customername as "Cliente", s.shippername
from ((orders o
	  inner join customers c on o.customerid = c.customerid)
	 inner join shippers s on o.shipperid = s.shipperid);
	 
-- SQL LEFT JOIN Keyword
select c.customername, o.orderid
from customers c
left join orders o on c.customerid = o.customerid
order by c.customername;

-- SQL RIGHT JOIN Keyword
select c.customername, o.orderid
from customers c
right join orders o on c.customerid = o.customerid
order by c.customername;

select o.orderid, e.lastname, e.firstname
from orders o
right join Employees e on o.employeeid = e.employeeid
where o.orderid is null
order by o.orderid;

-- SQL Self Join Example
SELECT A.CustomerName AS "Client A", B.CustomerName AS "Client B", A.City
FROM Customers A, Customers B
WHERE A.CustomerID != B.CustomerID
AND A.City = B.City
ORDER BY A.City;

-- SQL UNION Operator
select city from customers
union
select city from suppliers
order by city;

select city from customers
union all
select city from suppliers
order by city;

--SQL UNION With WHERE
select city, country from customers
where country = 'Germany'
union
select city, country from suppliers
where country = 'Germany'
order by city;

--Another UNION Example
SELECT 'Customer' AS Type, ContactName, City, Country
FROM Customers
UNION
SELECT 'Supplier', ContactName, City, Country
FROM Suppliers;

-- SQL SELECT INTO | The SELECT INTO statement copies data from one table into a new table.
/*
SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;
*/

--Copy only some columns into a new table:

/*
SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;
*/
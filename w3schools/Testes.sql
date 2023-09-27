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

select * from customers
where customername not between 'A' and 'F' -- Caution because this command is used for campar numbers n o strings
order by customername;

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

--SQL MIN() and MAX() Functions


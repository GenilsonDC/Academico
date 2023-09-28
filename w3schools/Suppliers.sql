--drop table suppliers;

create table Suppliers(
	SupplierID serial primary key,
	SupplierName varchar(100) not null,
	ContactName varchar(100) not null,
	Address varchar(120) not null,
	City varchar(50) not null,
	PostalCode varchar(10) not null,
	Country varchar(50) not null,
	Phone varchar(20)not null
);
INSERT INTO Suppliers (SupplierName, ContactName, Address, City, PostalCode, Country, Phone)
VALUES
    ('Exotic Liquid', 'Charlotte Cooper', '49 Gilbert St.', 'Londona', 'EC1 4SD', 'UK', '(171) 555-2222'),
    ('New Orleans Cajun Delights', 'Shelley Burke', 'P.O. Box 78934', 'New Orleans', '70117', 'USA', '(100) 555-4822'),
    ('Grandma Kelly''s Homestead', 'Regina Murphy', '707 Oxford Rd.', 'Ann Arbor', '48104', 'USA', '(313) 555-5735');

select * from suppliers


-- Criar uma sequência para SupplierID (se ainda não existir)
CREATE SEQUENCE suppliers_supplierid_seq START 1;

-- Modificar a definição da coluna SupplierID para usar a sequência
ALTER TABLE Suppliers
ALTER COLUMN SupplierID SET DEFAULT nextval('suppliers_supplierid_seq');

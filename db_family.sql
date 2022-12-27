create table if not exists members(
	id serial primary key,
	name varchar(200) unique,
	gender int  
);

create table if not exists assets(
	id serial primary key,
	name varchar(200) unique,
	price int  
);

create table if not exists member_asset(
	member_id int not null,
	asset_id int not null, 
	CONSTRAINT fk_member_id foreign key(member_id) references members(id),
	CONSTRAINT fk_asset_id foreign key(asset_id) references assets(id)
);

insert into assets (name, price) 
values 
('Samsung Universe 9', 1000000),
('Samsung Galaxy Book', 2000000),
('iPhone 9', 3000000),
('iPhone X', 4000000),
('Huawei P30', 5000000);

insert into members (name, gender) 
values 
('Bani', 0),
('Budi', 0),
('Hari', 0),
('Siti', 1),
('Nida', 1),
('Bila', 1),
('Lesti', 1),
('Andi', 0),
('Diki', 0),
('Sigit', 0),
('Doni', 0),
('Toni', 0);

insert into member_asset (member_id, asset_id) 
values 
(2, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 5),
(7, 4),
(8, 1),
(9, 2),
(10, 5),
(11, 4);


select m.name, a.name 
from member_asset ma 
join members m on ma.member_id = m.id
join assets a on ma.asset_id = a.id;

select m.name, a.name, a.price 
from member_asset ma 
join members m on ma.member_id = m.id
join assets a on ma.asset_id = a.id
where m.id = 2;

select sum(a.price) as total_assets 
from member_asset ma 
join members m on ma.member_id = m.id
join assets a on ma.asset_id = a.id
where m.id = 2;
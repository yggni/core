create schema yggni;

set timezone to 'America/Sao_Paulo';

create table yggni.user (
    id serial primary key,
    name varchar(255) unique
);

insert into 
    yggni.user (
        name
    )
values 
    ('Sparrow'),
    ('Barbossa'),
    ('Black Beard'),
    ('Davy Jones');
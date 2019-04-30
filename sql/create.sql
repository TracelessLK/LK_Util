create table developer (
    id varchar(200),
    name varchar(200),
    extra TEXT,
    primary key(id)
)

create table progress (
    id varchar(200),
    title varchar(200),
    content TEXT,
    createrId varchar(200),
    createTime datetime,
    typeId varchar(200),
    priority integer,
    extra text,
    statusId varchar(200),
    finishedTime datetime,
    primary key(id)
)

create table progress_type (
    id varchar(200),
    title varchar(200),
    extra text,
    primary key(id)
)

create table assignment (
    progressId varchar(200),
    developerId varchar(200),
    inCharge boolean,
    extra text,
    primary key(progressId, developerId)
)

create table status (
    id varchar(200),
    title varchar(200),
    extra text,
    primary key(id)
)

create table project (
    id varchar(200),
    title varchar(200),
    extra text,
    primary key(id)
)

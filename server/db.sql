create type progressStatus as enum ('completed', 'inProgress', 'notStarted');

create table Users (
	id serial primary key not null,
	username varchar(50) not null,
	email varchar(100),
	company text,
	password text,
	refreshToken text
);

create table CourseCategories (
	id serial primary key not null,
	name varchar(255) not null
);

create table Courses (
	id serial primary key not null,
	name varchar(255) not null,
	categoryId integer references CourseCategories(id)
);

create table Administration (
	userId integer references Users(id),
	courseId integer references Courses(id)
);

create table Enrolment (
	userId integer references Users(id),
	courseId integer references Courses(id)
);

create table Tasks (
	id serial primary key not null,
	name varchar(255) not null,
	courseId integer references Courses(id),
	description text,
	resource text,
	deadline date
);


create table Events (
	id serial primary key not null,
	name varchar(255) not null,
	description text,
	date date
);


create table TaskParticipation (
	userId integer references Users(id) not null,
	taskId integer references Tasks(id) not null,
	status progressStatus not null,
	priority integer not null,
	score decimal
);

create table EventParticipation (
	userId integer references Users(id) not null,
	eventId integer references Events(id) not null,
	status progressStatus not null,
	priority integer not null
);


create table Announcements (
	name varchar(255) not null,
	description text,
	courseID integer not null references Courses(id),
	dateCreated date
);

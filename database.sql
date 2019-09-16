
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "users" (
"id" serial primary key,
"username" varchar(20) not null,
"email" varchar(30) not null,
"security level" int
"password" varchar(30) not null);

CREATE TABLE "restaurants" (
"id" serial primary key,
"name" varchar(30) not null,
"address" varchar(60) not null,
"phone" varchar(15) not null,
"description" varchar(500) not null,
"website" varchar(30) not null,
"keto" boolean,
"gluten_free" boolean,
"vegan" boolean,
"submitted" date,
"approved" boolean,
"lat" int,
"lng" int);

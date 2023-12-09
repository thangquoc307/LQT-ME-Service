create database `lqt_service`;
use `lqt_service`;

create table `account_roles`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `name` varchar(255)
);
create table `accounts`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `username` varchar(255),
    `password` varchar(255),
    `avataraccounts` longtext,
    `email` varchar(255),
    `account_role_id` int,
    foreign key (`account_role_id`) references `account_roles`(`id`)
);
create table `customers`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `account_id` int,
    `phone` varchar(20),
    `name` varchar(255),
    `birthday` date,
    `license_id_card` varchar(20),
    foreign key (`account_id`) references `accounts`(`id`)
);
create table `employees`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
	`account_id` int,
    `phone` varchar(20),
    `name` varchar(255),
    `birthday` date,
	`license_id_card` varchar(20),
    `desciption` longtext,
	foreign key (`account_id`) references `accounts`(`id`)
);
create table `rooms`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `customer_id` int,
    `level` int,
    `name` varchar(255),
    foreign key (`customer_id`) references `customers`(`id`)
);
create table `message_types`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `name` int
);
create table `messages`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `type_id` int,
    `content` longtext,
    `time` datetime,
    `customer_id` int,
    `customer_sender` bit(1),
	foreign key (`customer_id`) references `customers`(`id`),
	foreign key (`type_id`) references `message_types`(`id`)
);
create table `materials`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `name` varchar(255),
    `manufacturer` varchar(255),
    `quantity` int
);
create table `material_images`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `link` longtext,
	`material_id` int,
    foreign key (`material_id`) references `materials`(`id`)
);
create table `request_status`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `name` varchar(255)
);
create table `requests`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `time_request` datetime,
    `time_order` datetime,
    `request_status_id` int,
    `employee_id` int,
    `customer_id` int,
    `room_id` int,
    `mess` longtext,
	foreign key (`employee_id`) references `employees`(`id`),
	foreign key (`customer_id`) references `customers`(`id`),
	foreign key (`request_status_id`) references `request_status`(`id`),
	foreign key (`room_id`) references `rooms`(`id`)
);
create table `bills`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `request_id` int,
	foreign key (`request_id`) references `requests`(`id`)
);
create table `bill_details`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `material_id` int,
    `bill_id` int,
    `quantity` int,
    `price` int,
	foreign key (`material_id`) references `materials`(`id`),
	foreign key (`bill_id`) references `bills`(`id`)
);
create table `feedbacks`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `request_id` int,
    `comment` longtext,
    `star` int,
    foreign key (`request_id`) references `requests`(`id`)
);
create table `feedback_image`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `link` longtext,
    `feedback_id` int,
    foreign key (`feedback_id`) references `feedbacks`(`id`)
);
create table `wallet`(
	`id` int primary key auto_increment,
    `is_delete` bit(1) default 0,
    `money` bigint,
    `customer_id` int,
    foreign key (`customer_id`) references `customers`(`id`)
);
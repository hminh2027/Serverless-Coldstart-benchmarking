CREATE TABLE `tbl_user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `tbl_user_id` PRIMARY KEY(`id`)
);

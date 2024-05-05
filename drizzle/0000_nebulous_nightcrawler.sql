CREATE TABLE `color` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`colors` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `config` (
	`id` integer PRIMARY KEY DEFAULT 0 NOT NULL,
	`them_mode` text DEFAULT 'auto'
);

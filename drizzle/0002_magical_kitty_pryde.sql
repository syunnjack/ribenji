PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_reviews` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`product_id` text NOT NULL,
	`body` text NOT NULL,
	`rating` integer NOT NULL,
	`helpful_axis` text NOT NULL,
	`age_band` text DEFAULT '回答しない' NOT NULL,
	`best_for` text DEFAULT 'その他' NOT NULL,
	`contains_spoiler` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`report_count` integer DEFAULT 0 NOT NULL,
	`policy_version` text DEFAULT '2026-07-28' NOT NULL,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);--> statement-breakpoint
INSERT INTO `__new_reviews` (`id`, `product_id`, `body`, `rating`, `helpful_axis`, `age_band`, `best_for`, `contains_spoiler`, `status`, `report_count`, `policy_version`, `created_at`, `reviewed_at`)
SELECT `id`, `product_id`, `body`, `rating`, `helpful_axis`, '回答しない', 'その他', false, `status`, `report_count`, '2026-07-28', `created_at`, `reviewed_at` FROM `reviews`;--> statement-breakpoint
DROP TABLE `reviews`;--> statement-breakpoint
ALTER TABLE `__new_reviews` RENAME TO `reviews`;--> statement-breakpoint
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE `Approval` (
    `id` INTEGER NOT NULL,
    `nominee_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(60) NOT NULL DEFAULT '',
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Approval_nominee_id_idx`(`nominee_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Audit` (
    `id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `change_set` JSON NOT NULL,
    `record_id` VARCHAR(191) NOT NULL,
    `record_name` VARCHAR(255) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Audit_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BiweaklyMeeting` (
    `id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `BiweaklyMeeting_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `id` VARCHAR(255) NOT NULL,
    `user_review_id` VARCHAR(191) NOT NULL,
    `reviewed_by_id` INTEGER NOT NULL,
    `rating` FLOAT NOT NULL DEFAULT 0.0,
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Feedback_user_review_id_idx`(`user_review_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nominees` (
    `id` VARCHAR(255) NOT NULL,
    `user_review_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `quater_no` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `quater_year` INTEGER UNSIGNED NOT NULL DEFAULT 2022,
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Nominees_user_review_id_idx`(`user_review_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewTags` (
    `id` INTEGER NOT NULL,
    `tags_name` VARCHAR(35) NOT NULL DEFAULT '',
    `description` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewTemplates` (
    `id` INTEGER NOT NULL,
    `review_tags_id` INTEGER NOT NULL,
    `user_review_id` VARCHAR(191) NOT NULL,
    `weightage` FLOAT NOT NULL DEFAULT 0.0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ReviewTemplates_user_review_id_idx`(`user_review_id`),
    INDEX `ReviewTemplates_review_tags_id_idx`(`review_tags_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks` (
    `id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `user_review_id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `duration` DATE NOT NULL,
    `rating` FLOAT NOT NULL DEFAULT 0.0,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(255) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Tasks_user_review_id_idx`(`user_review_id`),
    INDEX `Tasks_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserReviews` (
    `id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `marks_received` JSON NOT NULL,
    `estimated_point` FLOAT NOT NULL DEFAULT 0.0,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `reviewed_by_id` INTEGER NOT NULL,
    `quater_no` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `on_leave` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `UserReviews_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(30) NOT NULL DEFAULT '',
    `last_name` VARCHAR(30) NOT NULL DEFAULT '',
    `joining_date` DATE NOT NULL,
    `department_id` INTEGER NOT NULL,
    `designation_id` INTEGER NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(200) NOT NULL DEFAULT '',
    `employee_id` INTEGER UNSIGNED NOT NULL,
    `lead_id` INTEGER UNSIGNED NOT NULL,
    `manager_id` INTEGER UNSIGNED NOT NULL,
    `on_leave` BOOLEAN NOT NULL DEFAULT false,
    `partial_joining_date` DATE NOT NULL,
    `review_date` DATE NOT NULL,
    `profile_pic` VARCHAR(1000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    INDEX `Users_department_id_idx`(`department_id`),
    INDEX `Users_designation_id_idx`(`designation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departments` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(30) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Designations` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(30) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_nominee_id_fkey` FOREIGN KEY (`nominee_id`) REFERENCES `Nominees`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Audit` ADD CONSTRAINT `Audit_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `BiweaklyMeeting` ADD CONSTRAINT `BiweaklyMeeting_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Nominees` ADD CONSTRAINT `Nominees_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_review_tags_id_fkey` FOREIGN KEY (`review_tags_id`) REFERENCES `ReviewTags`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserReviews` ADD CONSTRAINT `UserReviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `Designations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

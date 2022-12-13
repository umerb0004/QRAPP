-- CreateTable
CREATE TABLE `Approval` (
    `approval_id` INTEGER NOT NULL,
    `nominee_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(60) NOT NULL DEFAULT '',
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_Approval_Nominees1_idx`(`nominee_id`),
    PRIMARY KEY (`approval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Audit` (
    `audit_id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `change_set` JSON NOT NULL,
    `record_id` VARCHAR(191) NOT NULL,
    `record_name` VARCHAR(255) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `fk_Audit_Users1_idx`(`user_id`),
    PRIMARY KEY (`audit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biweakly Meeting` (
    `BiweaklyMeeting_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_Biweakly Meeting_Users1_idx`(`user_id`),
    PRIMARY KEY (`BiweaklyMeeting_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `feedback_id` INTEGER NOT NULL,
    `user_review_id` INTEGER NOT NULL,
    `reviewed_by_id` INTEGER NOT NULL,
    `rating` FLOAT NOT NULL DEFAULT 0.0,
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_Feedback_User Reviews1_idx`(`user_review_id`),
    PRIMARY KEY (`feedback_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nominees` (
    `nominee_id` VARCHAR(255) NOT NULL,
    `audit_id` INTEGER NOT NULL,
    `user_review_id` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `quater_no` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `quater_year` INTEGER UNSIGNED NOT NULL DEFAULT 2022,
    `reason` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Nominees_audit_id_key`(`audit_id`),
    INDEX `fk_Nominees_Audit1_idx`(`audit_id`),
    INDEX `fk_Nominees_User Reviews1_idx`(`user_review_id`),
    PRIMARY KEY (`nominee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reveiw Tags` (
    `review_tags_id` INTEGER NOT NULL,
    `audit_id` INTEGER NOT NULL,
    `tags_name` VARCHAR(35) NOT NULL DEFAULT '',
    `description` VARCHAR(2000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_Reveiw Tags_Audit1_idx`(`audit_id`),
    PRIMARY KEY (`review_tags_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review Templates` (
    `review_template_id` INTEGER NOT NULL,
    `review_tags_id` INTEGER NOT NULL,
    `user_review_id` INTEGER NOT NULL,
    `weightage` FLOAT NOT NULL DEFAULT 0.0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_ReviewTemplates_User Reviews1_idx`(`user_review_id`),
    INDEX `fk_Review Templates_Reveiw Tags1_idx`(`review_tags_id`),
    PRIMARY KEY (`review_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks` (
    `task_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `user_review_id` INTEGER NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `duration` DATE NOT NULL,
    `rating` FLOAT NOT NULL DEFAULT 0.0,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(255) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_Tasks_User Reviews1_idx`(`user_review_id`),
    INDEX `fk_Tasks_Users1_idx`(`user_id`),
    PRIMARY KEY (`task_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User Reviews` (
    `user_review_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `marks_received` JSON NOT NULL,
    `estimated_point` FLOAT NOT NULL DEFAULT 0.0,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `reviewed_by_id` INTEGER NOT NULL,
    `quater_no` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `on_leave` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `fk_User Reviews_Users_idx`(`user_id`),
    PRIMARY KEY (`user_review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `user_id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(30) NOT NULL DEFAULT '',
    `last_name` VARCHAR(30) NOT NULL DEFAULT '',
    `joining_date` DATE NOT NULL,
    `department_name` VARCHAR(50) NOT NULL DEFAULT '',
    `designation` VARCHAR(50) NOT NULL DEFAULT '',
    `email` VARCHAR(100) NOT NULL,
    `employee_id` INTEGER UNSIGNED NOT NULL,
    `lead_id` INTEGER UNSIGNED NOT NULL,
    `manager_id` INTEGER UNSIGNED NOT NULL,
    `on_leave` BOOLEAN NOT NULL DEFAULT false,
    `partial_joining_date` DATE NOT NULL,
    `profile_pic` VARCHAR(1000) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `fk_Approval_Nominees1` FOREIGN KEY (`nominee_id`) REFERENCES `Nominees`(`nominee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Audit` ADD CONSTRAINT `fk_Audit_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Biweakly Meeting` ADD CONSTRAINT `fk_Biweakly Meeting_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Feedback` ADD CONSTRAINT `fk_Feedback_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Nominees` ADD CONSTRAINT `Nominees_audit_id_fkey` FOREIGN KEY (`audit_id`) REFERENCES `Audit`(`audit_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nominees` ADD CONSTRAINT `fk_Nominees_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Reveiw Tags` ADD CONSTRAINT `fk_Reveiw Tags_Audit1` FOREIGN KEY (`audit_id`) REFERENCES `Audit`(`audit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Review Templates` ADD CONSTRAINT `fk_Review Templates_Reveiw Tags1` FOREIGN KEY (`review_tags_id`) REFERENCES `Reveiw Tags`(`review_tags_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Review Templates` ADD CONSTRAINT `fk_ReviewTemplates_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `User Reviews` ADD CONSTRAINT `fk_User Reviews_Users` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

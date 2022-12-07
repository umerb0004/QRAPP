-- CreateTable
CREATE TABLE `Approval` (
    `approval_id` INTEGER NOT NULL,
    `nominee_id` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `reason` VARCHAR(255) NULL,
    `status` TINYINT NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Approval_Nominees1_idx`(`nominee_id`),
    PRIMARY KEY (`approval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Audit` (
    `audit_id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NULL,
    `change_set` JSON NULL,
    `record_name` VARCHAR(255) NULL,
    `created_at` DATE NULL,

    INDEX `fk_Audit_Users1_idx`(`user_id`),
    PRIMARY KEY (`audit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biweakly Meeting` (
    `biweakly_meeting_id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Biweakly Meeting_Users1_idx`(`user_id`),
    PRIMARY KEY (`biweakly_meeting_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `feedback_id` INTEGER NOT NULL,
    `user_review_id` INTEGER NULL,
    `reviewed_by_id` INTEGER NULL,
    `rating` FLOAT NULL,
    `reason` VARCHAR(255) NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Feedback_User Reviews1_idx`(`user_review_id`),
    PRIMARY KEY (`feedback_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nominees` (
    `nominee_id` INTEGER NOT NULL,
    `audit_id` INTEGER NULL,
    `user_review_id` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `quater_no` INTEGER NULL,
    `quater_year` INTEGER NULL,
    `reason` VARCHAR(255) NULL,
    `created_at` DATE NULL,
    `deleted_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Nominees_Audit1_idx`(`audit_id`),
    INDEX `fk_Nominees_User Reviews1_idx`(`user_review_id`),
    PRIMARY KEY (`nominee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reveiw Tags` (
    `review_tags_id` INTEGER NOT NULL,
    `audit_id` INTEGER NULL,
    `tags_name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `is_deleted` TINYINT NULL,
    `created_at` DATE NULL,
    `deleted_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Reveiw Tags_Audit1_idx`(`audit_id`),
    PRIMARY KEY (`review_tags_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review Templates` (
    `review_template_id` INTEGER NOT NULL,
    `review_tags_id` INTEGER NULL,
    `description` VARCHAR(45) NULL,
    `weightage` FLOAT NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Review Templates_Reveiw Tags1_idx`(`review_tags_id`),
    PRIMARY KEY (`review_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks` (
    `task_id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NULL,
    `audit_id` INTEGER NULL,
    `user_review_id` INTEGER NULL,
    `description` VARCHAR(255) NULL,
    `duration` DATE NULL,
    `rating` FLOAT NULL,
    `status` TINYINT NULL,
    `type` VARCHAR(255) NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_Tasks_Audit1_idx`(`audit_id`),
    INDEX `fk_Tasks_User Reviews1_idx`(`user_review_id`),
    INDEX `fk_Tasks_Users1_idx`(`user_id`),
    PRIMARY KEY (`task_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User Reviews` (
    `user_review_id` INTEGER NOT NULL,
    `user_id` VARCHAR(255) NULL,
    `estimated_point` FLOAT NULL,
    `marks_recevied` FLOAT NULL,
    `is_approved` TINYINT NULL,
    `reviewed_by_id` INTEGER NULL,
    `quater_no` INTEGER NULL,
    `on_leave` TINYINT NULL,
    `created_at` DATE NULL,
    `updated_at` DATE NULL,

    INDEX `fk_User Reviews_Users_idx`(`user_id`),
    PRIMARY KEY (`user_review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `user_id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `joining_date` DATE NOT NULL,
    `department_name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    ` employee_id` INTEGER UNSIGNED NOT NULL,
    `lead_id` INTEGER UNSIGNED NOT NULL,
    `manager_id` INTEGER UNSIGNED NOT NULL,
    `on_leave` TINYINT UNSIGNED NOT NULL,
    `partial_joining_date` DATE NOT NULL,
    `profile_pic` DATE NOT NULL,
    `created_at` DATE NULL,
    `deleted_at` DATE NULL,
    `updated_at` DATE NULL,

    UNIQUE INDEX `user_id_UNIQUE`(`user_id`),
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
ALTER TABLE `Nominees` ADD CONSTRAINT `fk_Nominees_Audit1` FOREIGN KEY (`audit_id`) REFERENCES `Audit`(`audit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Nominees` ADD CONSTRAINT `fk_Nominees_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Reveiw Tags` ADD CONSTRAINT `fk_Reveiw Tags_Audit1` FOREIGN KEY (`audit_id`) REFERENCES `Audit`(`audit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Review Templates` ADD CONSTRAINT `fk_Review Templates_Reveiw Tags1` FOREIGN KEY (`review_tags_id`) REFERENCES `Reveiw Tags`(`review_tags_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_Audit1` FOREIGN KEY (`audit_id`) REFERENCES `Audit`(`audit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `User Reviews` ADD CONSTRAINT `fk_User Reviews_Users` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

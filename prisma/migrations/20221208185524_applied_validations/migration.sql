/*
  Warnings:

  - The primary key for the `Nominees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `is_deleted` on the `Reveiw Tags` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Review Templates` table. All the data in the column will be lost.
  - You are about to drop the column `audit_id` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column ` employee_id` on the `Users` table. All the data in the column will be lost.
  - You are about to alter the column `first_name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to alter the column `last_name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to alter the column `department_name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to alter the column `designation` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(20)`.
  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nominee_id` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reason` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Approval` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `record_id` to the `Audit` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `Audit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `change_set` on table `Audit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `record_name` on table `Audit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Audit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `Biweakly Meeting` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Biweakly Meeting` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Biweakly Meeting` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_review_id` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reviewed_by_id` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reason` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `audit_id` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_review_id` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quater_no` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quater_year` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reason` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Nominees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `audit_id` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tags_name` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Reveiw Tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `review_tags_id` on table `Review Templates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weightage` on table `Review Templates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Review Templates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Review Templates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_review_id` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `estimated_point` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marks_recevied` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_approved` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reviewed_by_id` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quater_no` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `on_leave` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `User Reviews` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `employee_id` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Approval` DROP FOREIGN KEY `fk_Approval_Nominees1`;

-- DropForeignKey
ALTER TABLE `Audit` DROP FOREIGN KEY `fk_Audit_Users1`;

-- DropForeignKey
ALTER TABLE `Biweakly Meeting` DROP FOREIGN KEY `fk_Biweakly Meeting_Users1`;

-- DropForeignKey
ALTER TABLE `Feedback` DROP FOREIGN KEY `fk_Feedback_User Reviews1`;

-- DropForeignKey
ALTER TABLE `Nominees` DROP FOREIGN KEY `fk_Nominees_Audit1`;

-- DropForeignKey
ALTER TABLE `Nominees` DROP FOREIGN KEY `fk_Nominees_User Reviews1`;

-- DropForeignKey
ALTER TABLE `Reveiw Tags` DROP FOREIGN KEY `fk_Reveiw Tags_Audit1`;

-- DropForeignKey
ALTER TABLE `Review Templates` DROP FOREIGN KEY `fk_Review Templates_Reveiw Tags1`;

-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `fk_Tasks_Audit1`;

-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `fk_Tasks_User Reviews1`;

-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `fk_Tasks_Users1`;

-- DropForeignKey
ALTER TABLE `User Reviews` DROP FOREIGN KEY `fk_User Reviews_Users`;

-- DropIndex
DROP INDEX `user_id_UNIQUE` ON `Users`;

-- AlterTable
ALTER TABLE `Approval` MODIFY `nominee_id` VARCHAR(255) NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `reason` VARCHAR(255) NOT NULL,
    MODIFY `status` TINYINT NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Audit` ADD COLUMN `record_id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(255) NOT NULL,
    MODIFY `change_set` JSON NOT NULL,
    MODIFY `record_name` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Biweakly Meeting` MODIFY `user_id` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Feedback` MODIFY `user_review_id` INTEGER NOT NULL,
    MODIFY `reviewed_by_id` INTEGER NOT NULL,
    MODIFY `rating` FLOAT NOT NULL,
    MODIFY `reason` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Nominees` DROP PRIMARY KEY,
    MODIFY `nominee_id` VARCHAR(255) NOT NULL,
    MODIFY `audit_id` INTEGER NOT NULL,
    MODIFY `user_review_id` INTEGER NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `quater_no` INTEGER NOT NULL,
    MODIFY `quater_year` INTEGER NOT NULL,
    MODIFY `reason` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`nominee_id`);

-- AlterTable
ALTER TABLE `Reveiw Tags` DROP COLUMN `is_deleted`,
    MODIFY `audit_id` INTEGER NOT NULL,
    MODIFY `tags_name` VARCHAR(255) NOT NULL,
    MODIFY `description` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Review Templates` DROP COLUMN `description`,
    MODIFY `review_tags_id` INTEGER NOT NULL,
    MODIFY `weightage` FLOAT NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Tasks` DROP COLUMN `audit_id`,
    MODIFY `user_id` VARCHAR(255) NOT NULL,
    MODIFY `user_review_id` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(255) NOT NULL,
    MODIFY `duration` DATE NOT NULL,
    MODIFY `rating` FLOAT NOT NULL,
    MODIFY `status` TINYINT NOT NULL,
    MODIFY `type` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User Reviews` MODIFY `user_id` VARCHAR(255) NOT NULL,
    MODIFY `estimated_point` FLOAT NOT NULL,
    MODIFY `marks_recevied` FLOAT NOT NULL,
    MODIFY `is_approved` TINYINT NOT NULL,
    MODIFY `reviewed_by_id` INTEGER NOT NULL,
    MODIFY `quater_no` INTEGER NOT NULL,
    MODIFY `on_leave` TINYINT NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN ` employee_id`,
    ADD COLUMN `employee_id` INTEGER UNSIGNED NOT NULL,
    MODIFY `first_name` VARCHAR(30) NOT NULL,
    MODIFY `last_name` VARCHAR(30) NOT NULL,
    MODIFY `department_name` VARCHAR(30) NOT NULL,
    MODIFY `designation` VARCHAR(20) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `profile_pic` VARCHAR(255) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);

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
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_User Reviews1` FOREIGN KEY (`user_review_id`) REFERENCES `User Reviews`(`user_review_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `fk_Tasks_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `User Reviews` ADD CONSTRAINT `fk_User Reviews_Users` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

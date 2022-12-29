/*
  Warnings:

  - You are about to drop the column `quater_no` on the `Nominees` table. All the data in the column will be lost.
  - You are about to drop the column `quater_year` on the `Nominees` table. All the data in the column will be lost.
  - You are about to drop the column `review_tags_id` on the `ReviewTemplates` table. All the data in the column will be lost.
  - You are about to drop the column `user_review_id` on the `ReviewTemplates` table. All the data in the column will be lost.
  - You are about to drop the column `weightage` on the `ReviewTemplates` table. All the data in the column will be lost.
  - You are about to drop the column `on_leave` on the `UserReviews` table. All the data in the column will be lost.
  - You are about to drop the column `quater_no` on the `UserReviews` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `ReviewTemplates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation_id` to the `ReviewTemplates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ReviewTemplates` DROP FOREIGN KEY `ReviewTemplates_review_tags_id_fkey`;

-- DropForeignKey
ALTER TABLE `ReviewTemplates` DROP FOREIGN KEY `ReviewTemplates_user_review_id_fkey`;

-- AlterTable
ALTER TABLE `Nominees` DROP COLUMN `quater_no`,
    DROP COLUMN `quater_year`,
    ADD COLUMN `quarter_no` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    ADD COLUMN `quarter_year` INTEGER UNSIGNED NOT NULL DEFAULT 2022;

-- AlterTable
ALTER TABLE `ReviewTemplates` DROP COLUMN `review_tags_id`,
    DROP COLUMN `user_review_id`,
    DROP COLUMN `weightage`,
    ADD COLUMN `department_id` INTEGER NOT NULL,
    ADD COLUMN `designation_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserReviews` DROP COLUMN `on_leave`,
    DROP COLUMN `quater_no`,
    ADD COLUMN `quarter_no` INTEGER UNSIGNED NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `TemplateOnTags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `review_temp_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,
    `weightage` FLOAT NOT NULL DEFAULT 0.0,
    `quarter_no` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `ReviewTemplates_designation_id_idx` ON `ReviewTemplates`(`designation_id`);

-- CreateIndex
CREATE INDEX `ReviewTemplates_department_id_idx` ON `ReviewTemplates`(`department_id`);

-- AddForeignKey
ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `Designations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TemplateOnTags` ADD CONSTRAINT `TemplateOnTags_review_temp_id_fkey` FOREIGN KEY (`review_temp_id`) REFERENCES `ReviewTemplates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TemplateOnTags` ADD CONSTRAINT `TemplateOnTags_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `ReviewTags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

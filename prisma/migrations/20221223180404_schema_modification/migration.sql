/*
  Warnings:

  - You are about to drop the column `tags_name` on the `ReviewTags` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `Designations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Designations` ADD COLUMN `department_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ReviewTags` DROP COLUMN `tags_name`,
    ADD COLUMN `name` VARCHAR(35) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Designations` ADD CONSTRAINT `Designations_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

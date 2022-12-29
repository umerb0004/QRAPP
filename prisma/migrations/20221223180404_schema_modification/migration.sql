
-- AlterTable
ALTER TABLE `Designations` ADD COLUMN `department_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ReviewTags` DROP COLUMN `tags_name`,
    ADD COLUMN `name` VARCHAR(35) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Designations` ADD CONSTRAINT `Designations_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

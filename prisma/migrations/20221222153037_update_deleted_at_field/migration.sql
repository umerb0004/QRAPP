-- AlterTable
ALTER TABLE `Departments` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Designations` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Nominees` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ReviewTags` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ReviewTemplates` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `deleted_at` DATETIME(3) NULL;

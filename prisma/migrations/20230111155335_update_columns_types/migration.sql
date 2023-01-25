/*
  Warnings:

  - Added the required column `year_no` to the `UserReviews` table without a value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BiweaklyMeeting` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Feedback` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Tasks` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Approval` DROP FOREIGN KEY `Approval_nominee_id_fkey`;
ALTER TABLE `Approval` MODIFY COLUMN nominee_id INT;
ALTER TABLE `Nominees` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_nominee_id_fkey` FOREIGN KEY (`nominee_id`) REFERENCES `Nominees`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;



ALTER TABLE `Feedback` DROP FOREIGN KEY `Feedback_user_review_id_fkey`;
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_user_review_id_fkey`;
ALTER TABLE `Nominees` DROP FOREIGN KEY `Nominees_user_review_id_fkey`;
ALTER TABLE `Feedback` MODIFY COLUMN user_review_id INT;
ALTER TABLE `Tasks` MODIFY COLUMN user_review_id INT;
ALTER TABLE `Nominees` MODIFY COLUMN user_review_id INT;

ALTER TABLE `UserReviews` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Nominees` ADD CONSTRAINT `Nominees_user_review_id_fkey` FOREIGN KEY (`user_review_id`) REFERENCES `UserReviews`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;



ALTER TABLE `Audit` DROP FOREIGN KEY `Audit_user_id_fkey`;
ALTER TABLE `Audit` MODIFY COLUMN user_id INT;
ALTER TABLE `BiweaklyMeeting` DROP FOREIGN KEY `BiweaklyMeeting_user_id_fkey`;
ALTER TABLE `BiweaklyMeeting` MODIFY COLUMN user_id INT;
ALTER TABLE `UserReviews` DROP FOREIGN KEY `UserReviews_user_id_fkey`;
ALTER TABLE `UserReviews` MODIFY COLUMN user_id INT;
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_user_id_fkey`;
ALTER TABLE `Tasks` MODIFY COLUMN user_id INT;

ALTER TABLE `Users` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Audit` ADD CONSTRAINT `Audit_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `BiweaklyMeeting` ADD CONSTRAINT `BiweaklyMeeting_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `UserReviews` ADD CONSTRAINT `UserReviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `Approval` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Audit` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;


ALTER TABLE `TemplateOnTags` DROP FOREIGN KEY `TemplateOnTags_tag_id_fkey`;
ALTER TABLE `ReviewTags` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `TemplateOnTags` ADD CONSTRAINT `TemplateOnTags_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `ReviewTags`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `TemplateOnTags` DROP FOREIGN KEY `TemplateOnTags_review_temp_id_fkey`;
ALTER TABLE `ReviewTemplates` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `TemplateOnTags` ADD CONSTRAINT `TemplateOnTags_review_temp_id_fkey` FOREIGN KEY (`review_temp_id`) REFERENCES `ReviewTemplates`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `Users` DROP FOREIGN KEY `Users_department_id_fkey`;
ALTER TABLE `Designations` DROP FOREIGN KEY `Designations_department_id_fkey`;
ALTER TABLE `ReviewTemplates` DROP FOREIGN KEY `ReviewTemplates_department_id_fkey`;

ALTER TABLE `Departments` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `Users` ADD CONSTRAINT `Users_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Designations` ADD CONSTRAINT `Designations_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `ReviewTemplates` DROP FOREIGN KEY `ReviewTemplates_designation_id_fkey`;
ALTER TABLE `Users` DROP FOREIGN KEY `Users_designation_id_fkey`;

ALTER TABLE `Designations` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `ReviewTemplates` ADD CONSTRAINT `ReviewTemplates_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `Designations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Users` ADD CONSTRAINT `Users_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `Designations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `UserPermissions` DROP FOREIGN KEY `UserPermissions_permission_id_fkey`;
ALTER TABLE `Permissions` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `UserPermissions` ADD CONSTRAINT `UserPermissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permissions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


ALTER TABLE `UserPermissions` MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `UserPermissions` ADD CONSTRAINT `UserPermissions_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `Designations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

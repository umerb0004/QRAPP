/*
  Warnings:

  - You are about to drop the column `user_review_id` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `record_id` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_user_review_id_fkey`;

-- AlterTable
ALTER TABLE `Tasks` RENAME COLUMN `user_review_id` TO `record_id`,
  MODIFY `type` ENUM('userReviews', 'BiweaklyMeetings');

ALTER TABLE `Tasks` ADD COLUMN `assigned_by` INT;

-- CreateIndex
CREATE INDEX `Tasks_record_id_idx` ON `Tasks`(`record_id`);

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_user_fkey` FOREIGN KEY (`assigned_by`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

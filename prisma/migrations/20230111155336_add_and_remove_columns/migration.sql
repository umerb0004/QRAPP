/*
  Warnings:

  - Added the required column `year_no` to the `UserReviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserReviews` ADD COLUMN `year_no` YEAR(4) NOT NULL DEFAULT (YEAR(CURDATE()));

-- AlterTable 
ALTER TABLE `UserReviews` ADD CONSTRAINT `UR_User_fk` FOREIGN KEY (`reviewed_by_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

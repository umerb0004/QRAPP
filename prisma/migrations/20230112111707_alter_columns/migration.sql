/*
  Warnings:

  - You are about to drop the column `reason` on the `Approval` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `reviewed_by_id` on the `Feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Approval` DROP COLUMN `reason`;

-- AlterTable
ALTER TABLE `Feedback` DROP COLUMN `rating`,
    DROP COLUMN `reviewed_by_id`;

-- AlterTable
ALTER TABLE `TemplateOnTags` DROP COLUMN `quarter_no`;

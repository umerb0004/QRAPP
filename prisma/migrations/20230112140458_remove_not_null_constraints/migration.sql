-- AlterTable
ALTER TABLE `UserReviews` MODIFY `estimated_point` FLOAT NULL DEFAULT 0.0,
    MODIFY `is_approved` BOOLEAN NULL DEFAULT false,
    MODIFY `reviewed_by_id` INTEGER NULL;

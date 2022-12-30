-- CreateTable
CREATE TABLE `Permissions` (
    `id` INTEGER NOT NULL,
    `key` VARCHAR(30) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPermissions` (
    `id` INTEGER NOT NULL,
    `designation_id` INTEGER NOT NULL,
    `permission_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserPermissions` ADD CONSTRAINT `UserPermissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permissions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

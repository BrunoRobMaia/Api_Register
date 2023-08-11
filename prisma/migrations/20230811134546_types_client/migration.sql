-- CreateTable

CREATE TABLE
    `clients_types` (
        `id` VARCHAR(191) NOT NULL,
        `id_client` VARCHAR(191) NOT NULL,
        `id_type` VARCHAR(191) NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey

ALTER TABLE `clients_types`
ADD
    CONSTRAINT `clients_types_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE `clients_types`
ADD
    CONSTRAINT `clients_types_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
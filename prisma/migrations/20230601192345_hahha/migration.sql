/*
  Warnings:

  - Added the required column `courseId` to the `Comentar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comentar` ADD COLUMN `courseId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Comentar` ADD CONSTRAINT `Comentar_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `thread` ADD COLUMN `threadId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Thread` ADD CONSTRAINT `Thread_threadId_fkey` FOREIGN KEY (`threadId`) REFERENCES `Thread`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

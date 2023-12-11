/*
  Warnings:

  - You are about to drop the column `demoUserId` on the `DemoUserPreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[demoUserPreferencesId]` on the table `DemoUser` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "DemoUserPreferences" DROP CONSTRAINT "DemoUserPreferences_demoUserId_fkey";

-- DropIndex
DROP INDEX "DemoUserPreferences_demoUserId_key";

-- AlterTable
ALTER TABLE "DemoUser" ADD COLUMN     "demoUserPreferencesId" TEXT;

-- AlterTable
ALTER TABLE "DemoUserPreferences" DROP COLUMN "demoUserId";

-- CreateIndex
CREATE UNIQUE INDEX "DemoUser_demoUserPreferencesId_key" ON "DemoUser"("demoUserPreferencesId");

-- AddForeignKey
ALTER TABLE "DemoUser" ADD CONSTRAINT "DemoUser_demoUserPreferencesId_fkey" FOREIGN KEY ("demoUserPreferencesId") REFERENCES "DemoUserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;

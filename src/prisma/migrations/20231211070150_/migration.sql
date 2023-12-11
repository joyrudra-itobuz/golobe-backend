/*
  Warnings:

  - You are about to drop the `DemoUserPrefrences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DemoUserPrefrences" DROP CONSTRAINT "DemoUserPrefrences_demoUserId_fkey";

-- DropTable
DROP TABLE "DemoUserPrefrences";

-- CreateTable
CREATE TABLE "DemoUserPreferences" (
    "id" TEXT NOT NULL,
    "emailUpdates" BOOLEAN NOT NULL,
    "demoUserId" TEXT NOT NULL,

    CONSTRAINT "DemoUserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DemoUserPreferences_demoUserId_key" ON "DemoUserPreferences"("demoUserId");

-- AddForeignKey
ALTER TABLE "DemoUserPreferences" ADD CONSTRAINT "DemoUserPreferences_demoUserId_fkey" FOREIGN KEY ("demoUserId") REFERENCES "DemoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `DemoUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `DemoUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,age]` on the table `DemoUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `DemoUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `DemoUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'EDITOR', 'ADMIN');

-- AlterTable
ALTER TABLE "DemoUser" DROP CONSTRAINT "DemoUser_pkey",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'BASIC',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DemoUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DemoUser_id_seq";

-- CreateTable
CREATE TABLE "DemoUserPrefrences" (
    "id" TEXT NOT NULL,
    "emailUpdates" BOOLEAN NOT NULL,
    "demoUserId" TEXT NOT NULL,

    CONSTRAINT "DemoUserPrefrences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemoPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    "favById" TEXT,

    CONSTRAINT "DemoPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemoCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DemoCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DemoCategoryToDemoPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DemoUserPrefrences_demoUserId_key" ON "DemoUserPrefrences"("demoUserId");

-- CreateIndex
CREATE UNIQUE INDEX "_DemoCategoryToDemoPost_AB_unique" ON "_DemoCategoryToDemoPost"("A", "B");

-- CreateIndex
CREATE INDEX "_DemoCategoryToDemoPost_B_index" ON "_DemoCategoryToDemoPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "DemoUser_email_key" ON "DemoUser"("email");

-- CreateIndex
CREATE INDEX "DemoUser_email_idx" ON "DemoUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DemoUser_name_age_key" ON "DemoUser"("name", "age");

-- AddForeignKey
ALTER TABLE "DemoUserPrefrences" ADD CONSTRAINT "DemoUserPrefrences_demoUserId_fkey" FOREIGN KEY ("demoUserId") REFERENCES "DemoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemoPost" ADD CONSTRAINT "DemoPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "DemoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemoPost" ADD CONSTRAINT "DemoPost_favById_fkey" FOREIGN KEY ("favById") REFERENCES "DemoUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemoCategoryToDemoPost" ADD CONSTRAINT "_DemoCategoryToDemoPost_A_fkey" FOREIGN KEY ("A") REFERENCES "DemoCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemoCategoryToDemoPost" ADD CONSTRAINT "_DemoCategoryToDemoPost_B_fkey" FOREIGN KEY ("B") REFERENCES "DemoPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

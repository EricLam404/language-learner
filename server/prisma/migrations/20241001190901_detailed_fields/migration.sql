/*
  Warnings:

  - Added the required column `description` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readCount` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "audioUrl" TEXT,
ADD COLUMN     "averageRating" DOUBLE PRECISION,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "difficulty" INTEGER NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isReviewed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "readCount" INTEGER NOT NULL,
ADD COLUMN     "startedAt" TIMESTAMPTZ(3),
ADD COLUMN     "tags" TEXT[];

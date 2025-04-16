/*
  Warnings:

  - Changed the type of `status` on the `serviceRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('IN_PROGRESS', 'PENDING', 'DONE');

-- AlterTable
ALTER TABLE "serviceRecord" DROP COLUMN "status",
ADD COLUMN     "status" "ServiceStatus" NOT NULL;

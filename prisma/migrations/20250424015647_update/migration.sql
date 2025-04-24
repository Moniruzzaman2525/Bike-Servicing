-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bike"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;

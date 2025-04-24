-- DropForeignKey
ALTER TABLE "bike" DROP CONSTRAINT "bike_customerId_fkey";

-- AddForeignKey
ALTER TABLE "bike" ADD CONSTRAINT "bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

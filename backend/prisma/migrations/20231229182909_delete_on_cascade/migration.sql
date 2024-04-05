-- DropForeignKey
ALTER TABLE "CategoryNote" DROP CONSTRAINT "CategoryNote_noteId_fkey";

-- AddForeignKey
ALTER TABLE "CategoryNote" ADD CONSTRAINT "CategoryNote_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

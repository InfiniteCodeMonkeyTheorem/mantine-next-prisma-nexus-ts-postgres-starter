-- CreateTable
CREATE TABLE "Thing" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "image" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thing_name_key" ON "Thing"("name");

-- AddForeignKey
ALTER TABLE "Thing" ADD CONSTRAINT "Thing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `description` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `director` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `movieId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.
  - Added the required column `ano` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diretor` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliacao` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFilme` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "genero" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("id") SELECT "id" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "idFilme" INTEGER NOT NULL,
    CONSTRAINT "Review_idFilme_fkey" FOREIGN KEY ("idFilme") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("id") SELECT "id" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }

// model Profile {
//   id           String     @id @default(uuid())
//   clerkId      String     @unique
//   firstName    String
//   lastName     String
//   username     String
//   email        String
//   profileImage String
//   createdAt    DateTime   @default(now())
//   updatedAt    DateTime   @updatedAt
//   properties Property[]
// }

// model Property {
//   id          String     @id @default(uuid())
//   name        String
//   tagline     String
//   category    String
//   image       String
//   country     String
//   description String
//   price       Int
//   guests      Int
//   bedrooms    Int
//   beds        Int
//   baths       Int
//   amenities   String
//   createdAt   DateTime   @default(now())
//   updatedAt   DateTime   @updatedAt
//   profile     Profile    @relation(fields: [profileId], references: [clerkId], onDelete: Cascade)
//   profileId   String
// }

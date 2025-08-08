-- CreateTable
CREATE TABLE "public"."Appointment" (
    "id" SERIAL NOT NULL,
    "clinic" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Clinic" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

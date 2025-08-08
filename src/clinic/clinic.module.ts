import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ClinicController],
  providers: [ClinicService, PrismaService],
})
export class ClinicModule {}

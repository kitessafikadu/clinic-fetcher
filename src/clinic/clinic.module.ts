import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [ClinicController],
  providers: [ClinicService, PrismaService],
})
export class ClinicModule {}

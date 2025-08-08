import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [HttpModule, ClinicModule],
})
export class AppModule {}

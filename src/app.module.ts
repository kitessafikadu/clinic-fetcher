import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FetchModule } from './fetch/fetch.module';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [FetchModule, ClinicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

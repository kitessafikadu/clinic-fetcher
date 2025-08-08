import { Controller, Get } from '@nestjs/common';
import { ClinicService } from './clinic.service';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get('fetch')
  fetchClinics() {
    return this.clinicService.fetchAndSaveClinics();
  }
}

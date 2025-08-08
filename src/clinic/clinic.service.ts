import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClinicService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async fetchAndSaveClinics() {
    const url = process.env.API_URL;
    if (!url) {
      throw new Error('API_URL environment variable is not defined');
    }
    const { data } = await firstValueFrom(this.httpService.get(url));
    console.log('Fetched data:', data);

    if (!Array.isArray(data)) {
      throw new Error('API did not return an array');
    }

    const saved = await Promise.all(
      data.map((clinic) =>
        this.prisma.clinic.upsert({
          where: { id: clinic.id },
          update: clinic,
          create: clinic,
        }),
      ),
    );
    return saved;
  }
}

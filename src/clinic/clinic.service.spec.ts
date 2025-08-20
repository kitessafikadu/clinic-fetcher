import { Test, TestingModule } from '@nestjs/testing';
import { ClinicService } from './clinic.service';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma.service';
import { of } from 'rxjs';

describe('ClinicService', () => {
  let service: ClinicService;
  let httpService: { get: jest.Mock };
  let prismaService: { clinic: { upsert: jest.Mock } };

  beforeEach(async () => {
    httpService = {
      get: jest
        .fn()
        .mockReturnValue(
          of({ data: [{ id: 1, name: 'Test Clinic', available: true }] }),
        ),
    };
    prismaService = {
      clinic: {
        upsert: jest
          .fn()
          .mockResolvedValue({ id: 1, name: 'Test Clinic', available: true }),
      },
    };

    process.env.API_URL = 'http://test-url.com';

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClinicService,
        { provide: HttpService, useValue: httpService },
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<ClinicService>(ClinicService);
  });

  it('should fetch and save clinics', async () => {
    const result = await service.fetchAndSaveClinics();
    expect(result).toEqual([{ id: 1, name: 'Test Clinic', available: true }]);
    expect(httpService.get).toHaveBeenCalled();
    expect(prismaService.clinic.upsert).toHaveBeenCalled();
  });
});

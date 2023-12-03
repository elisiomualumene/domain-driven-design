import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { CreateCompanyUseCase } from 'src/enterprise/domain/company/application/use-cases/createCompanyUseCase';

@Module({
  imports: [],
  exports: [],
  controllers: [BaseController],
  providers: [CreateCompanyUseCase],
})
export class RoutesModule {}

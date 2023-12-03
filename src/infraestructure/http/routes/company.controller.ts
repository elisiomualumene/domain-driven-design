import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  CreateCompanyUseCase,
  ICreateCompanyDTO,
} from 'src/enterprise/domain/company/application/use-cases/createCompanyUseCase';

@Controller()
export class CompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {}
  @Post()
  public createCompany(
    @Body() data: ICreateCompanyDTO,
    @Res() response: Response,
  ) {
    try {
      const company = this.createCompanyUseCase.execute(data);

      return response.status(200).json(company);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

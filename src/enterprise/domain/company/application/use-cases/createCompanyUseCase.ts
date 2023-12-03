import { Either, left, right } from "../../../../core/either";
import { CompanyNotFoundError } from "../../../../core/errors/use-cases-errors/companyNotFound";
import { Company } from "../../enterprise/entities/company.entity";
import { ICompanyRepository } from "../repositories/ICompanyRepository";

export type ICreateCompanyDTO = {
  location: string;
  name: string;
};

type CreateCompanyResponse = Either<CompanyNotFoundError, {}>;

export class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(data: ICreateCompanyDTO): Promise<CreateCompanyResponse> {
    const company = Company.create(data);
    const companyAlreadyExists = await this.companyRepository.findById(
      company.id.toValue()
    );

    if (companyAlreadyExists) {
      return left(new CompanyNotFoundError());
    }

    return right({});
  }
}

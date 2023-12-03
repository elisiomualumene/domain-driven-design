import { Company } from "../../enterprise/entities/company.entity";

export abstract class ICompanyRepository {
  abstract create(data: Company): Promise<void>;
  abstract findById(id: string): Promise<Company>;
}

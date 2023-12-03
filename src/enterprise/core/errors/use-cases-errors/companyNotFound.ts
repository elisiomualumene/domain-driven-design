import { UseCasesError } from "../default/error";

export class CompanyNotFoundError extends Error implements UseCasesError {
  constructor() {
    super("Company not found");
  }
}

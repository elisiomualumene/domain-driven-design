import { AggregateRoot } from "../../../../core/aggregate/aggregate.root";
import { UniqueEntityId } from "../../../../core/entity/UniqueEntityId";
import { Optional } from "../../../../core/types/Optional";

export interface ICompanyProps {
  name: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Company extends AggregateRoot<ICompanyProps> {
  get name(): string {
    return this.props.name;
  }

  get location(): string {
    return this.props.location;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set location(location: string) {
    this.props.location = location;
    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<ICompanyProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const company = new Company(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return company;
  }
}

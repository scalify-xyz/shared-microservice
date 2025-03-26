import { IRepository } from "@interfaces/infrastructure/repositories/repository.interface";

export abstract class AbstractUseCase<InputDto, OutputDto, TModel> {
    constructor(protected repository: IRepository<TModel>) { }
    abstract execute(input: InputDto): Promise<OutputDto>;
}
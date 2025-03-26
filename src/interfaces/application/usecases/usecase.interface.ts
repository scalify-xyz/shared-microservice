import { AbstractRepository } from "@interfaces/infrastructure/repositories/repository.interface";

export abstract class AbstractUseCase<InputDto, OutputDto, TModel, TEntity> {
    constructor(protected repository: AbstractRepository<TModel, TEntity>) { }
    abstract execute(input: InputDto): Promise<OutputDto>;
}
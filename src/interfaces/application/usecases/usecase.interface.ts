import { IRepository } from "@interfaces/infrastructure/repositories/repository.interface";

export abstract class UseCase<InputDto, OutputDto> {
    private constructor(protected repository: IRepository) { }
    abstract execute(input: InputDto): Promise<OutputDto>;
}
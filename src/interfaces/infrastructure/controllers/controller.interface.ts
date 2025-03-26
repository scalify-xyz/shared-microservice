import { AbstractUseCase } from "@interfaces/application";

export abstract class AbstractController<TReq, TRes, InputDto, OutputDto, TModel, TEntity> {
  constructor(protected useCase: AbstractUseCase<InputDto, OutputDto, TModel, TEntity>) {}
  abstract execute(req: TReq, res: TRes): void;
}
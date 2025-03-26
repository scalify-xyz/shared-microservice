import { AbstractUseCase } from "@interfaces/application";

export abstract class AbstractController<TReq, TRes, InputDto, OutputDto, TModel> {
  constructor(protected useCase: AbstractUseCase<InputDto, OutputDto, TModel>) {}
  abstract execute(req: TReq, res: TRes): void;
}
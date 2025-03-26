import { UseCase } from "@interfaces/application";

export abstract class AbstractController<TReq, TRes, InputDto, OutputDto> {
  constructor(protected useCase: UseCase<InputDto, OutputDto>) {}
  abstract execute(req: TReq, res: TRes): void;
}
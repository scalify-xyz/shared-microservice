export interface IController<TReq, TRes> {
  execute(req: TReq, res: TRes): void;
}
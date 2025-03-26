import { AbstractController } from "src/interfaces/infrastructure/controllers/controller.interface";

export interface IRequest {
    body: unknown;
    query: Record<string, unknown>;
    params: Record<string, unknown>;
}

export interface IResponse {
    send: (body: unknown) => void;
    status: (statusCode: number) => IResponse;
}

export interface Middleware {
    (req: IRequest, res: IResponse, next: Function): void;
}

export interface IRoutesAdapter<T> {
    execute(server: T): void;
}

export abstract class AbstractRoute<T, TReq, TRes> implements IRoutesAdapter<T> {
    constructor(
        protected controller: AbstractController<TReq, TRes, unknown, unknown>) {}
    abstract execute(server: T): void;
}

export interface IServerAdapter<T> {
    use(middleware: Middleware): void;
    start({ port }: { port: number }): void;
    add({ route }: { route: IRoutesAdapter<T> }): void;
    getServer(): T;
}

export abstract class AbstractRepository<TModel, TEntity> {
    constructor(protected model: TModel) { }
    abstract findById(id: string): Promise<TEntity | null>;
    abstract findAll(): Promise<TEntity[]>;
    abstract create(entity: TEntity): Promise<TEntity>;
    abstract update(id: string, entity: Partial<TEntity>): Promise<TEntity | null>;
    abstract delete(id: string): Promise<boolean>;
}

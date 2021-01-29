import knex from 'knex';

export const database = knex({
    client: 'sqlite3',
    connection: {
        filename: "./dev.sqlite3"
    },
    useNullAsDefault: true,
});

// In an ideal world we'd extend the Knex.QueryBuilder function to have a chained single function.
// allowing eg `select("*").where(condition).single()`... but the types are complex so this solution is
// easier (if not quite so elegant to use).
export function single<T>(items: T[]): T {
    if (items.length !== 1) {
        throw `expected to find 1 item, but found ${items.length}`;
    }
    return items[0];
}
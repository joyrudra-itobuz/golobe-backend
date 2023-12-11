
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DemoUser
 * 
 */
export type DemoUser = $Result.DefaultSelection<Prisma.$DemoUserPayload>
/**
 * Model DemoUserPreferences
 * 
 */
export type DemoUserPreferences = $Result.DefaultSelection<Prisma.$DemoUserPreferencesPayload>
/**
 * Model DemoPost
 * 
 */
export type DemoPost = $Result.DefaultSelection<Prisma.$DemoPostPayload>
/**
 * Model DemoCategory
 * 
 */
export type DemoCategory = $Result.DefaultSelection<Prisma.$DemoCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  BASIC: 'BASIC',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.demoUser`: Exposes CRUD operations for the **DemoUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoUsers
    * const demoUsers = await prisma.demoUser.findMany()
    * ```
    */
  get demoUser(): Prisma.DemoUserDelegate<ExtArgs>;

  /**
   * `prisma.demoUserPreferences`: Exposes CRUD operations for the **DemoUserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoUserPreferences
    * const demoUserPreferences = await prisma.demoUserPreferences.findMany()
    * ```
    */
  get demoUserPreferences(): Prisma.DemoUserPreferencesDelegate<ExtArgs>;

  /**
   * `prisma.demoPost`: Exposes CRUD operations for the **DemoPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoPosts
    * const demoPosts = await prisma.demoPost.findMany()
    * ```
    */
  get demoPost(): Prisma.DemoPostDelegate<ExtArgs>;

  /**
   * `prisma.demoCategory`: Exposes CRUD operations for the **DemoCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoCategories
    * const demoCategories = await prisma.demoCategory.findMany()
    * ```
    */
  get demoCategory(): Prisma.DemoCategoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DemoUser: 'DemoUser',
    DemoUserPreferences: 'DemoUserPreferences',
    DemoPost: 'DemoPost',
    DemoCategory: 'DemoCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'demoUser' | 'demoUserPreferences' | 'demoPost' | 'demoCategory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DemoUser: {
        payload: Prisma.$DemoUserPayload<ExtArgs>
        fields: Prisma.DemoUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          findFirst: {
            args: Prisma.DemoUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          findMany: {
            args: Prisma.DemoUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>[]
          }
          create: {
            args: Prisma.DemoUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          createMany: {
            args: Prisma.DemoUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DemoUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          update: {
            args: Prisma.DemoUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          deleteMany: {
            args: Prisma.DemoUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DemoUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DemoUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPayload>
          }
          aggregate: {
            args: Prisma.DemoUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDemoUser>
          }
          groupBy: {
            args: Prisma.DemoUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DemoUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoUserCountArgs<ExtArgs>,
            result: $Utils.Optional<DemoUserCountAggregateOutputType> | number
          }
        }
      }
      DemoUserPreferences: {
        payload: Prisma.$DemoUserPreferencesPayload<ExtArgs>
        fields: Prisma.DemoUserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoUserPreferencesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoUserPreferencesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.DemoUserPreferencesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoUserPreferencesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          findMany: {
            args: Prisma.DemoUserPreferencesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>[]
          }
          create: {
            args: Prisma.DemoUserPreferencesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          createMany: {
            args: Prisma.DemoUserPreferencesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DemoUserPreferencesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          update: {
            args: Prisma.DemoUserPreferencesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.DemoUserPreferencesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DemoUserPreferencesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DemoUserPreferencesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoUserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.DemoUserPreferencesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDemoUserPreferences>
          }
          groupBy: {
            args: Prisma.DemoUserPreferencesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DemoUserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoUserPreferencesCountArgs<ExtArgs>,
            result: $Utils.Optional<DemoUserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      DemoPost: {
        payload: Prisma.$DemoPostPayload<ExtArgs>
        fields: Prisma.DemoPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          findFirst: {
            args: Prisma.DemoPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          findMany: {
            args: Prisma.DemoPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>[]
          }
          create: {
            args: Prisma.DemoPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          createMany: {
            args: Prisma.DemoPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DemoPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          update: {
            args: Prisma.DemoPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          deleteMany: {
            args: Prisma.DemoPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DemoPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DemoPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoPostPayload>
          }
          aggregate: {
            args: Prisma.DemoPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDemoPost>
          }
          groupBy: {
            args: Prisma.DemoPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DemoPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoPostCountArgs<ExtArgs>,
            result: $Utils.Optional<DemoPostCountAggregateOutputType> | number
          }
        }
      }
      DemoCategory: {
        payload: Prisma.$DemoCategoryPayload<ExtArgs>
        fields: Prisma.DemoCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          findFirst: {
            args: Prisma.DemoCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          findMany: {
            args: Prisma.DemoCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>[]
          }
          create: {
            args: Prisma.DemoCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          createMany: {
            args: Prisma.DemoCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DemoCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          update: {
            args: Prisma.DemoCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DemoCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DemoCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DemoCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DemoCategoryPayload>
          }
          aggregate: {
            args: Prisma.DemoCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDemoCategory>
          }
          groupBy: {
            args: Prisma.DemoCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DemoCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<DemoCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DemoUserCountOutputType
   */

  export type DemoUserCountOutputType = {
    writtenPosts: number
    favPosts: number
  }

  export type DemoUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writtenPosts?: boolean | DemoUserCountOutputTypeCountWrittenPostsArgs
    favPosts?: boolean | DemoUserCountOutputTypeCountFavPostsArgs
  }

  // Custom InputTypes

  /**
   * DemoUserCountOutputType without action
   */
  export type DemoUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserCountOutputType
     */
    select?: DemoUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DemoUserCountOutputType without action
   */
  export type DemoUserCountOutputTypeCountWrittenPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoPostWhereInput
  }


  /**
   * DemoUserCountOutputType without action
   */
  export type DemoUserCountOutputTypeCountFavPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoPostWhereInput
  }



  /**
   * Count Type DemoPostCountOutputType
   */

  export type DemoPostCountOutputType = {
    categories: number
  }

  export type DemoPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DemoPostCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * DemoPostCountOutputType without action
   */
  export type DemoPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPostCountOutputType
     */
    select?: DemoPostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DemoPostCountOutputType without action
   */
  export type DemoPostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoCategoryWhereInput
  }



  /**
   * Count Type DemoCategoryCountOutputType
   */

  export type DemoCategoryCountOutputType = {
    posts: number
  }

  export type DemoCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | DemoCategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes

  /**
   * DemoCategoryCountOutputType without action
   */
  export type DemoCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategoryCountOutputType
     */
    select?: DemoCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DemoCategoryCountOutputType without action
   */
  export type DemoCategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoPostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model DemoUser
   */

  export type AggregateDemoUser = {
    _count: DemoUserCountAggregateOutputType | null
    _avg: DemoUserAvgAggregateOutputType | null
    _sum: DemoUserSumAggregateOutputType | null
    _min: DemoUserMinAggregateOutputType | null
    _max: DemoUserMaxAggregateOutputType | null
  }

  export type DemoUserAvgAggregateOutputType = {
    age: number | null
  }

  export type DemoUserSumAggregateOutputType = {
    age: number | null
  }

  export type DemoUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    age: number | null
    role: $Enums.Role | null
    demoUserPreferencesId: string | null
  }

  export type DemoUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    age: number | null
    role: $Enums.Role | null
    demoUserPreferencesId: string | null
  }

  export type DemoUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    age: number
    role: number
    demoUserPreferencesId: number
    _all: number
  }


  export type DemoUserAvgAggregateInputType = {
    age?: true
  }

  export type DemoUserSumAggregateInputType = {
    age?: true
  }

  export type DemoUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    age?: true
    role?: true
    demoUserPreferencesId?: true
  }

  export type DemoUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    age?: true
    role?: true
    demoUserPreferencesId?: true
  }

  export type DemoUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    age?: true
    role?: true
    demoUserPreferencesId?: true
    _all?: true
  }

  export type DemoUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoUser to aggregate.
     */
    where?: DemoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUsers to fetch.
     */
    orderBy?: DemoUserOrderByWithRelationInput | DemoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoUsers
    **/
    _count?: true | DemoUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemoUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemoUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoUserMaxAggregateInputType
  }

  export type GetDemoUserAggregateType<T extends DemoUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoUser[P]>
      : GetScalarType<T[P], AggregateDemoUser[P]>
  }




  export type DemoUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoUserWhereInput
    orderBy?: DemoUserOrderByWithAggregationInput | DemoUserOrderByWithAggregationInput[]
    by: DemoUserScalarFieldEnum[] | DemoUserScalarFieldEnum
    having?: DemoUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoUserCountAggregateInputType | true
    _avg?: DemoUserAvgAggregateInputType
    _sum?: DemoUserSumAggregateInputType
    _min?: DemoUserMinAggregateInputType
    _max?: DemoUserMaxAggregateInputType
  }

  export type DemoUserGroupByOutputType = {
    id: string
    name: string
    email: string
    age: number
    role: $Enums.Role
    demoUserPreferencesId: string | null
    _count: DemoUserCountAggregateOutputType | null
    _avg: DemoUserAvgAggregateOutputType | null
    _sum: DemoUserSumAggregateOutputType | null
    _min: DemoUserMinAggregateOutputType | null
    _max: DemoUserMaxAggregateOutputType | null
  }

  type GetDemoUserGroupByPayload<T extends DemoUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoUserGroupByOutputType[P]>
            : GetScalarType<T[P], DemoUserGroupByOutputType[P]>
        }
      >
    >


  export type DemoUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    age?: boolean
    role?: boolean
    demoUserPreferencesId?: boolean
    writtenPosts?: boolean | DemoUser$writtenPostsArgs<ExtArgs>
    favPosts?: boolean | DemoUser$favPostsArgs<ExtArgs>
    demoUserPreferences?: boolean | DemoUser$demoUserPreferencesArgs<ExtArgs>
    _count?: boolean | DemoUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoUser"]>

  export type DemoUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    age?: boolean
    role?: boolean
    demoUserPreferencesId?: boolean
  }

  export type DemoUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writtenPosts?: boolean | DemoUser$writtenPostsArgs<ExtArgs>
    favPosts?: boolean | DemoUser$favPostsArgs<ExtArgs>
    demoUserPreferences?: boolean | DemoUser$demoUserPreferencesArgs<ExtArgs>
    _count?: boolean | DemoUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DemoUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoUser"
    objects: {
      writtenPosts: Prisma.$DemoPostPayload<ExtArgs>[]
      favPosts: Prisma.$DemoPostPayload<ExtArgs>[]
      demoUserPreferences: Prisma.$DemoUserPreferencesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      age: number
      role: $Enums.Role
      demoUserPreferencesId: string | null
    }, ExtArgs["result"]["demoUser"]>
    composites: {}
  }


  type DemoUserGetPayload<S extends boolean | null | undefined | DemoUserDefaultArgs> = $Result.GetResult<Prisma.$DemoUserPayload, S>

  type DemoUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DemoUserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DemoUserCountAggregateInputType | true
    }

  export interface DemoUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoUser'], meta: { name: 'DemoUser' } }
    /**
     * Find zero or one DemoUser that matches the filter.
     * @param {DemoUserFindUniqueArgs} args - Arguments to find a DemoUser
     * @example
     * // Get one DemoUser
     * const demoUser = await prisma.demoUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DemoUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserFindUniqueArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DemoUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DemoUserFindUniqueOrThrowArgs} args - Arguments to find a DemoUser
     * @example
     * // Get one DemoUser
     * const demoUser = await prisma.demoUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DemoUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DemoUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserFindFirstArgs} args - Arguments to find a DemoUser
     * @example
     * // Get one DemoUser
     * const demoUser = await prisma.demoUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DemoUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserFindFirstArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DemoUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserFindFirstOrThrowArgs} args - Arguments to find a DemoUser
     * @example
     * // Get one DemoUser
     * const demoUser = await prisma.demoUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DemoUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DemoUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoUsers
     * const demoUsers = await prisma.demoUser.findMany()
     * 
     * // Get first 10 DemoUsers
     * const demoUsers = await prisma.demoUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoUserWithIdOnly = await prisma.demoUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DemoUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DemoUser.
     * @param {DemoUserCreateArgs} args - Arguments to create a DemoUser.
     * @example
     * // Create one DemoUser
     * const DemoUser = await prisma.demoUser.create({
     *   data: {
     *     // ... data to create a DemoUser
     *   }
     * })
     * 
    **/
    create<T extends DemoUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserCreateArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DemoUsers.
     *     @param {DemoUserCreateManyArgs} args - Arguments to create many DemoUsers.
     *     @example
     *     // Create many DemoUsers
     *     const demoUser = await prisma.demoUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DemoUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DemoUser.
     * @param {DemoUserDeleteArgs} args - Arguments to delete one DemoUser.
     * @example
     * // Delete one DemoUser
     * const DemoUser = await prisma.demoUser.delete({
     *   where: {
     *     // ... filter to delete one DemoUser
     *   }
     * })
     * 
    **/
    delete<T extends DemoUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserDeleteArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DemoUser.
     * @param {DemoUserUpdateArgs} args - Arguments to update one DemoUser.
     * @example
     * // Update one DemoUser
     * const demoUser = await prisma.demoUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DemoUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserUpdateArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DemoUsers.
     * @param {DemoUserDeleteManyArgs} args - Arguments to filter DemoUsers to delete.
     * @example
     * // Delete a few DemoUsers
     * const { count } = await prisma.demoUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DemoUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoUsers
     * const demoUser = await prisma.demoUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DemoUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DemoUser.
     * @param {DemoUserUpsertArgs} args - Arguments to update or create a DemoUser.
     * @example
     * // Update or create a DemoUser
     * const demoUser = await prisma.demoUser.upsert({
     *   create: {
     *     // ... data to create a DemoUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoUser we want to update
     *   }
     * })
    **/
    upsert<T extends DemoUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserUpsertArgs<ExtArgs>>
    ): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DemoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserCountArgs} args - Arguments to filter DemoUsers to count.
     * @example
     * // Count the number of DemoUsers
     * const count = await prisma.demoUser.count({
     *   where: {
     *     // ... the filter for the DemoUsers we want to count
     *   }
     * })
    **/
    count<T extends DemoUserCountArgs>(
      args?: Subset<T, DemoUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoUserAggregateArgs>(args: Subset<T, DemoUserAggregateArgs>): Prisma.PrismaPromise<GetDemoUserAggregateType<T>>

    /**
     * Group by DemoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoUserGroupByArgs['orderBy'] }
        : { orderBy?: DemoUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoUser model
   */
  readonly fields: DemoUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    writtenPosts<T extends DemoUser$writtenPostsArgs<ExtArgs> = {}>(args?: Subset<T, DemoUser$writtenPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    favPosts<T extends DemoUser$favPostsArgs<ExtArgs> = {}>(args?: Subset<T, DemoUser$favPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    demoUserPreferences<T extends DemoUser$demoUserPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, DemoUser$demoUserPreferencesArgs<ExtArgs>>): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DemoUser model
   */ 
  interface DemoUserFieldRefs {
    readonly id: FieldRef<"DemoUser", 'String'>
    readonly name: FieldRef<"DemoUser", 'String'>
    readonly email: FieldRef<"DemoUser", 'String'>
    readonly age: FieldRef<"DemoUser", 'Int'>
    readonly role: FieldRef<"DemoUser", 'Role'>
    readonly demoUserPreferencesId: FieldRef<"DemoUser", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DemoUser findUnique
   */
  export type DemoUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter, which DemoUser to fetch.
     */
    where: DemoUserWhereUniqueInput
  }


  /**
   * DemoUser findUniqueOrThrow
   */
  export type DemoUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter, which DemoUser to fetch.
     */
    where: DemoUserWhereUniqueInput
  }


  /**
   * DemoUser findFirst
   */
  export type DemoUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter, which DemoUser to fetch.
     */
    where?: DemoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUsers to fetch.
     */
    orderBy?: DemoUserOrderByWithRelationInput | DemoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoUsers.
     */
    cursor?: DemoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoUsers.
     */
    distinct?: DemoUserScalarFieldEnum | DemoUserScalarFieldEnum[]
  }


  /**
   * DemoUser findFirstOrThrow
   */
  export type DemoUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter, which DemoUser to fetch.
     */
    where?: DemoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUsers to fetch.
     */
    orderBy?: DemoUserOrderByWithRelationInput | DemoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoUsers.
     */
    cursor?: DemoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoUsers.
     */
    distinct?: DemoUserScalarFieldEnum | DemoUserScalarFieldEnum[]
  }


  /**
   * DemoUser findMany
   */
  export type DemoUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter, which DemoUsers to fetch.
     */
    where?: DemoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUsers to fetch.
     */
    orderBy?: DemoUserOrderByWithRelationInput | DemoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoUsers.
     */
    cursor?: DemoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUsers.
     */
    skip?: number
    distinct?: DemoUserScalarFieldEnum | DemoUserScalarFieldEnum[]
  }


  /**
   * DemoUser create
   */
  export type DemoUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * The data needed to create a DemoUser.
     */
    data: XOR<DemoUserCreateInput, DemoUserUncheckedCreateInput>
  }


  /**
   * DemoUser createMany
   */
  export type DemoUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoUsers.
     */
    data: DemoUserCreateManyInput | DemoUserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DemoUser update
   */
  export type DemoUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * The data needed to update a DemoUser.
     */
    data: XOR<DemoUserUpdateInput, DemoUserUncheckedUpdateInput>
    /**
     * Choose, which DemoUser to update.
     */
    where: DemoUserWhereUniqueInput
  }


  /**
   * DemoUser updateMany
   */
  export type DemoUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoUsers.
     */
    data: XOR<DemoUserUpdateManyMutationInput, DemoUserUncheckedUpdateManyInput>
    /**
     * Filter which DemoUsers to update
     */
    where?: DemoUserWhereInput
  }


  /**
   * DemoUser upsert
   */
  export type DemoUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * The filter to search for the DemoUser to update in case it exists.
     */
    where: DemoUserWhereUniqueInput
    /**
     * In case the DemoUser found by the `where` argument doesn't exist, create a new DemoUser with this data.
     */
    create: XOR<DemoUserCreateInput, DemoUserUncheckedCreateInput>
    /**
     * In case the DemoUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoUserUpdateInput, DemoUserUncheckedUpdateInput>
  }


  /**
   * DemoUser delete
   */
  export type DemoUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    /**
     * Filter which DemoUser to delete.
     */
    where: DemoUserWhereUniqueInput
  }


  /**
   * DemoUser deleteMany
   */
  export type DemoUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoUsers to delete
     */
    where?: DemoUserWhereInput
  }


  /**
   * DemoUser.writtenPosts
   */
  export type DemoUser$writtenPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    where?: DemoPostWhereInput
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    cursor?: DemoPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoUser.favPosts
   */
  export type DemoUser$favPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    where?: DemoPostWhereInput
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    cursor?: DemoPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoUser.demoUserPreferences
   */
  export type DemoUser$demoUserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    where?: DemoUserPreferencesWhereInput
  }


  /**
   * DemoUser without action
   */
  export type DemoUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
  }



  /**
   * Model DemoUserPreferences
   */

  export type AggregateDemoUserPreferences = {
    _count: DemoUserPreferencesCountAggregateOutputType | null
    _min: DemoUserPreferencesMinAggregateOutputType | null
    _max: DemoUserPreferencesMaxAggregateOutputType | null
  }

  export type DemoUserPreferencesMinAggregateOutputType = {
    id: string | null
    emailUpdates: boolean | null
  }

  export type DemoUserPreferencesMaxAggregateOutputType = {
    id: string | null
    emailUpdates: boolean | null
  }

  export type DemoUserPreferencesCountAggregateOutputType = {
    id: number
    emailUpdates: number
    _all: number
  }


  export type DemoUserPreferencesMinAggregateInputType = {
    id?: true
    emailUpdates?: true
  }

  export type DemoUserPreferencesMaxAggregateInputType = {
    id?: true
    emailUpdates?: true
  }

  export type DemoUserPreferencesCountAggregateInputType = {
    id?: true
    emailUpdates?: true
    _all?: true
  }

  export type DemoUserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoUserPreferences to aggregate.
     */
    where?: DemoUserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUserPreferences to fetch.
     */
    orderBy?: DemoUserPreferencesOrderByWithRelationInput | DemoUserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoUserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoUserPreferences
    **/
    _count?: true | DemoUserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoUserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoUserPreferencesMaxAggregateInputType
  }

  export type GetDemoUserPreferencesAggregateType<T extends DemoUserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoUserPreferences[P]>
      : GetScalarType<T[P], AggregateDemoUserPreferences[P]>
  }




  export type DemoUserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoUserPreferencesWhereInput
    orderBy?: DemoUserPreferencesOrderByWithAggregationInput | DemoUserPreferencesOrderByWithAggregationInput[]
    by: DemoUserPreferencesScalarFieldEnum[] | DemoUserPreferencesScalarFieldEnum
    having?: DemoUserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoUserPreferencesCountAggregateInputType | true
    _min?: DemoUserPreferencesMinAggregateInputType
    _max?: DemoUserPreferencesMaxAggregateInputType
  }

  export type DemoUserPreferencesGroupByOutputType = {
    id: string
    emailUpdates: boolean
    _count: DemoUserPreferencesCountAggregateOutputType | null
    _min: DemoUserPreferencesMinAggregateOutputType | null
    _max: DemoUserPreferencesMaxAggregateOutputType | null
  }

  type GetDemoUserPreferencesGroupByPayload<T extends DemoUserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoUserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoUserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoUserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], DemoUserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type DemoUserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailUpdates?: boolean
    demoUser?: boolean | DemoUserPreferences$demoUserArgs<ExtArgs>
  }, ExtArgs["result"]["demoUserPreferences"]>

  export type DemoUserPreferencesSelectScalar = {
    id?: boolean
    emailUpdates?: boolean
  }

  export type DemoUserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demoUser?: boolean | DemoUserPreferences$demoUserArgs<ExtArgs>
  }


  export type $DemoUserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoUserPreferences"
    objects: {
      demoUser: Prisma.$DemoUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailUpdates: boolean
    }, ExtArgs["result"]["demoUserPreferences"]>
    composites: {}
  }


  type DemoUserPreferencesGetPayload<S extends boolean | null | undefined | DemoUserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$DemoUserPreferencesPayload, S>

  type DemoUserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DemoUserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DemoUserPreferencesCountAggregateInputType | true
    }

  export interface DemoUserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoUserPreferences'], meta: { name: 'DemoUserPreferences' } }
    /**
     * Find zero or one DemoUserPreferences that matches the filter.
     * @param {DemoUserPreferencesFindUniqueArgs} args - Arguments to find a DemoUserPreferences
     * @example
     * // Get one DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DemoUserPreferencesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesFindUniqueArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DemoUserPreferences that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DemoUserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a DemoUserPreferences
     * @example
     * // Get one DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DemoUserPreferencesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DemoUserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesFindFirstArgs} args - Arguments to find a DemoUserPreferences
     * @example
     * // Get one DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DemoUserPreferencesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesFindFirstArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DemoUserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesFindFirstOrThrowArgs} args - Arguments to find a DemoUserPreferences
     * @example
     * // Get one DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DemoUserPreferencesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DemoUserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findMany()
     * 
     * // Get first 10 DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoUserPreferencesWithIdOnly = await prisma.demoUserPreferences.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DemoUserPreferencesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DemoUserPreferences.
     * @param {DemoUserPreferencesCreateArgs} args - Arguments to create a DemoUserPreferences.
     * @example
     * // Create one DemoUserPreferences
     * const DemoUserPreferences = await prisma.demoUserPreferences.create({
     *   data: {
     *     // ... data to create a DemoUserPreferences
     *   }
     * })
     * 
    **/
    create<T extends DemoUserPreferencesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesCreateArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DemoUserPreferences.
     *     @param {DemoUserPreferencesCreateManyArgs} args - Arguments to create many DemoUserPreferences.
     *     @example
     *     // Create many DemoUserPreferences
     *     const demoUserPreferences = await prisma.demoUserPreferences.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DemoUserPreferencesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DemoUserPreferences.
     * @param {DemoUserPreferencesDeleteArgs} args - Arguments to delete one DemoUserPreferences.
     * @example
     * // Delete one DemoUserPreferences
     * const DemoUserPreferences = await prisma.demoUserPreferences.delete({
     *   where: {
     *     // ... filter to delete one DemoUserPreferences
     *   }
     * })
     * 
    **/
    delete<T extends DemoUserPreferencesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesDeleteArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DemoUserPreferences.
     * @param {DemoUserPreferencesUpdateArgs} args - Arguments to update one DemoUserPreferences.
     * @example
     * // Update one DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DemoUserPreferencesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesUpdateArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DemoUserPreferences.
     * @param {DemoUserPreferencesDeleteManyArgs} args - Arguments to filter DemoUserPreferences to delete.
     * @example
     * // Delete a few DemoUserPreferences
     * const { count } = await prisma.demoUserPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DemoUserPreferencesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoUserPreferencesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoUserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DemoUserPreferencesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DemoUserPreferences.
     * @param {DemoUserPreferencesUpsertArgs} args - Arguments to update or create a DemoUserPreferences.
     * @example
     * // Update or create a DemoUserPreferences
     * const demoUserPreferences = await prisma.demoUserPreferences.upsert({
     *   create: {
     *     // ... data to create a DemoUserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoUserPreferences we want to update
     *   }
     * })
    **/
    upsert<T extends DemoUserPreferencesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DemoUserPreferencesUpsertArgs<ExtArgs>>
    ): Prisma__DemoUserPreferencesClient<$Result.GetResult<Prisma.$DemoUserPreferencesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DemoUserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesCountArgs} args - Arguments to filter DemoUserPreferences to count.
     * @example
     * // Count the number of DemoUserPreferences
     * const count = await prisma.demoUserPreferences.count({
     *   where: {
     *     // ... the filter for the DemoUserPreferences we want to count
     *   }
     * })
    **/
    count<T extends DemoUserPreferencesCountArgs>(
      args?: Subset<T, DemoUserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoUserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoUserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoUserPreferencesAggregateArgs>(args: Subset<T, DemoUserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetDemoUserPreferencesAggregateType<T>>

    /**
     * Group by DemoUserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoUserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoUserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: DemoUserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoUserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoUserPreferences model
   */
  readonly fields: DemoUserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoUserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoUserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    demoUser<T extends DemoUserPreferences$demoUserArgs<ExtArgs> = {}>(args?: Subset<T, DemoUserPreferences$demoUserArgs<ExtArgs>>): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DemoUserPreferences model
   */ 
  interface DemoUserPreferencesFieldRefs {
    readonly id: FieldRef<"DemoUserPreferences", 'String'>
    readonly emailUpdates: FieldRef<"DemoUserPreferences", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * DemoUserPreferences findUnique
   */
  export type DemoUserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which DemoUserPreferences to fetch.
     */
    where: DemoUserPreferencesWhereUniqueInput
  }


  /**
   * DemoUserPreferences findUniqueOrThrow
   */
  export type DemoUserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which DemoUserPreferences to fetch.
     */
    where: DemoUserPreferencesWhereUniqueInput
  }


  /**
   * DemoUserPreferences findFirst
   */
  export type DemoUserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which DemoUserPreferences to fetch.
     */
    where?: DemoUserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUserPreferences to fetch.
     */
    orderBy?: DemoUserPreferencesOrderByWithRelationInput | DemoUserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoUserPreferences.
     */
    cursor?: DemoUserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoUserPreferences.
     */
    distinct?: DemoUserPreferencesScalarFieldEnum | DemoUserPreferencesScalarFieldEnum[]
  }


  /**
   * DemoUserPreferences findFirstOrThrow
   */
  export type DemoUserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which DemoUserPreferences to fetch.
     */
    where?: DemoUserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUserPreferences to fetch.
     */
    orderBy?: DemoUserPreferencesOrderByWithRelationInput | DemoUserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoUserPreferences.
     */
    cursor?: DemoUserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoUserPreferences.
     */
    distinct?: DemoUserPreferencesScalarFieldEnum | DemoUserPreferencesScalarFieldEnum[]
  }


  /**
   * DemoUserPreferences findMany
   */
  export type DemoUserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which DemoUserPreferences to fetch.
     */
    where?: DemoUserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoUserPreferences to fetch.
     */
    orderBy?: DemoUserPreferencesOrderByWithRelationInput | DemoUserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoUserPreferences.
     */
    cursor?: DemoUserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoUserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoUserPreferences.
     */
    skip?: number
    distinct?: DemoUserPreferencesScalarFieldEnum | DemoUserPreferencesScalarFieldEnum[]
  }


  /**
   * DemoUserPreferences create
   */
  export type DemoUserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a DemoUserPreferences.
     */
    data: XOR<DemoUserPreferencesCreateInput, DemoUserPreferencesUncheckedCreateInput>
  }


  /**
   * DemoUserPreferences createMany
   */
  export type DemoUserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoUserPreferences.
     */
    data: DemoUserPreferencesCreateManyInput | DemoUserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DemoUserPreferences update
   */
  export type DemoUserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a DemoUserPreferences.
     */
    data: XOR<DemoUserPreferencesUpdateInput, DemoUserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which DemoUserPreferences to update.
     */
    where: DemoUserPreferencesWhereUniqueInput
  }


  /**
   * DemoUserPreferences updateMany
   */
  export type DemoUserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoUserPreferences.
     */
    data: XOR<DemoUserPreferencesUpdateManyMutationInput, DemoUserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which DemoUserPreferences to update
     */
    where?: DemoUserPreferencesWhereInput
  }


  /**
   * DemoUserPreferences upsert
   */
  export type DemoUserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the DemoUserPreferences to update in case it exists.
     */
    where: DemoUserPreferencesWhereUniqueInput
    /**
     * In case the DemoUserPreferences found by the `where` argument doesn't exist, create a new DemoUserPreferences with this data.
     */
    create: XOR<DemoUserPreferencesCreateInput, DemoUserPreferencesUncheckedCreateInput>
    /**
     * In case the DemoUserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoUserPreferencesUpdateInput, DemoUserPreferencesUncheckedUpdateInput>
  }


  /**
   * DemoUserPreferences delete
   */
  export type DemoUserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which DemoUserPreferences to delete.
     */
    where: DemoUserPreferencesWhereUniqueInput
  }


  /**
   * DemoUserPreferences deleteMany
   */
  export type DemoUserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoUserPreferences to delete
     */
    where?: DemoUserPreferencesWhereInput
  }


  /**
   * DemoUserPreferences.demoUser
   */
  export type DemoUserPreferences$demoUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    where?: DemoUserWhereInput
  }


  /**
   * DemoUserPreferences without action
   */
  export type DemoUserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUserPreferences
     */
    select?: DemoUserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserPreferencesInclude<ExtArgs> | null
  }



  /**
   * Model DemoPost
   */

  export type AggregateDemoPost = {
    _count: DemoPostCountAggregateOutputType | null
    _avg: DemoPostAvgAggregateOutputType | null
    _sum: DemoPostSumAggregateOutputType | null
    _min: DemoPostMinAggregateOutputType | null
    _max: DemoPostMaxAggregateOutputType | null
  }

  export type DemoPostAvgAggregateOutputType = {
    avgRating: number | null
  }

  export type DemoPostSumAggregateOutputType = {
    avgRating: number | null
  }

  export type DemoPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    avgRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    favById: string | null
  }

  export type DemoPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    avgRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    favById: string | null
  }

  export type DemoPostCountAggregateOutputType = {
    id: number
    title: number
    avgRating: number
    createdAt: number
    updatedAt: number
    authorId: number
    favById: number
    _all: number
  }


  export type DemoPostAvgAggregateInputType = {
    avgRating?: true
  }

  export type DemoPostSumAggregateInputType = {
    avgRating?: true
  }

  export type DemoPostMinAggregateInputType = {
    id?: true
    title?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    favById?: true
  }

  export type DemoPostMaxAggregateInputType = {
    id?: true
    title?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    favById?: true
  }

  export type DemoPostCountAggregateInputType = {
    id?: true
    title?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    favById?: true
    _all?: true
  }

  export type DemoPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoPost to aggregate.
     */
    where?: DemoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoPosts to fetch.
     */
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoPosts
    **/
    _count?: true | DemoPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemoPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemoPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoPostMaxAggregateInputType
  }

  export type GetDemoPostAggregateType<T extends DemoPostAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoPost[P]>
      : GetScalarType<T[P], AggregateDemoPost[P]>
  }




  export type DemoPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoPostWhereInput
    orderBy?: DemoPostOrderByWithAggregationInput | DemoPostOrderByWithAggregationInput[]
    by: DemoPostScalarFieldEnum[] | DemoPostScalarFieldEnum
    having?: DemoPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoPostCountAggregateInputType | true
    _avg?: DemoPostAvgAggregateInputType
    _sum?: DemoPostSumAggregateInputType
    _min?: DemoPostMinAggregateInputType
    _max?: DemoPostMaxAggregateInputType
  }

  export type DemoPostGroupByOutputType = {
    id: string
    title: string
    avgRating: number
    createdAt: Date
    updatedAt: Date
    authorId: string
    favById: string | null
    _count: DemoPostCountAggregateOutputType | null
    _avg: DemoPostAvgAggregateOutputType | null
    _sum: DemoPostSumAggregateOutputType | null
    _min: DemoPostMinAggregateOutputType | null
    _max: DemoPostMaxAggregateOutputType | null
  }

  type GetDemoPostGroupByPayload<T extends DemoPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoPostGroupByOutputType[P]>
            : GetScalarType<T[P], DemoPostGroupByOutputType[P]>
        }
      >
    >


  export type DemoPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    avgRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    favById?: boolean
    author?: boolean | DemoUserDefaultArgs<ExtArgs>
    favBy?: boolean | DemoPost$favByArgs<ExtArgs>
    categories?: boolean | DemoPost$categoriesArgs<ExtArgs>
    _count?: boolean | DemoPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoPost"]>

  export type DemoPostSelectScalar = {
    id?: boolean
    title?: boolean
    avgRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    favById?: boolean
  }

  export type DemoPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | DemoUserDefaultArgs<ExtArgs>
    favBy?: boolean | DemoPost$favByArgs<ExtArgs>
    categories?: boolean | DemoPost$categoriesArgs<ExtArgs>
    _count?: boolean | DemoPostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DemoPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoPost"
    objects: {
      author: Prisma.$DemoUserPayload<ExtArgs>
      favBy: Prisma.$DemoUserPayload<ExtArgs> | null
      categories: Prisma.$DemoCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      avgRating: number
      createdAt: Date
      updatedAt: Date
      authorId: string
      favById: string | null
    }, ExtArgs["result"]["demoPost"]>
    composites: {}
  }


  type DemoPostGetPayload<S extends boolean | null | undefined | DemoPostDefaultArgs> = $Result.GetResult<Prisma.$DemoPostPayload, S>

  type DemoPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DemoPostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DemoPostCountAggregateInputType | true
    }

  export interface DemoPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoPost'], meta: { name: 'DemoPost' } }
    /**
     * Find zero or one DemoPost that matches the filter.
     * @param {DemoPostFindUniqueArgs} args - Arguments to find a DemoPost
     * @example
     * // Get one DemoPost
     * const demoPost = await prisma.demoPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DemoPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostFindUniqueArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DemoPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DemoPostFindUniqueOrThrowArgs} args - Arguments to find a DemoPost
     * @example
     * // Get one DemoPost
     * const demoPost = await prisma.demoPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DemoPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DemoPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostFindFirstArgs} args - Arguments to find a DemoPost
     * @example
     * // Get one DemoPost
     * const demoPost = await prisma.demoPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DemoPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostFindFirstArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DemoPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostFindFirstOrThrowArgs} args - Arguments to find a DemoPost
     * @example
     * // Get one DemoPost
     * const demoPost = await prisma.demoPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DemoPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DemoPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoPosts
     * const demoPosts = await prisma.demoPost.findMany()
     * 
     * // Get first 10 DemoPosts
     * const demoPosts = await prisma.demoPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoPostWithIdOnly = await prisma.demoPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DemoPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DemoPost.
     * @param {DemoPostCreateArgs} args - Arguments to create a DemoPost.
     * @example
     * // Create one DemoPost
     * const DemoPost = await prisma.demoPost.create({
     *   data: {
     *     // ... data to create a DemoPost
     *   }
     * })
     * 
    **/
    create<T extends DemoPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostCreateArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DemoPosts.
     *     @param {DemoPostCreateManyArgs} args - Arguments to create many DemoPosts.
     *     @example
     *     // Create many DemoPosts
     *     const demoPost = await prisma.demoPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DemoPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DemoPost.
     * @param {DemoPostDeleteArgs} args - Arguments to delete one DemoPost.
     * @example
     * // Delete one DemoPost
     * const DemoPost = await prisma.demoPost.delete({
     *   where: {
     *     // ... filter to delete one DemoPost
     *   }
     * })
     * 
    **/
    delete<T extends DemoPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostDeleteArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DemoPost.
     * @param {DemoPostUpdateArgs} args - Arguments to update one DemoPost.
     * @example
     * // Update one DemoPost
     * const demoPost = await prisma.demoPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DemoPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostUpdateArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DemoPosts.
     * @param {DemoPostDeleteManyArgs} args - Arguments to filter DemoPosts to delete.
     * @example
     * // Delete a few DemoPosts
     * const { count } = await prisma.demoPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DemoPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoPosts
     * const demoPost = await prisma.demoPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DemoPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DemoPost.
     * @param {DemoPostUpsertArgs} args - Arguments to update or create a DemoPost.
     * @example
     * // Update or create a DemoPost
     * const demoPost = await prisma.demoPost.upsert({
     *   create: {
     *     // ... data to create a DemoPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoPost we want to update
     *   }
     * })
    **/
    upsert<T extends DemoPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DemoPostUpsertArgs<ExtArgs>>
    ): Prisma__DemoPostClient<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DemoPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostCountArgs} args - Arguments to filter DemoPosts to count.
     * @example
     * // Count the number of DemoPosts
     * const count = await prisma.demoPost.count({
     *   where: {
     *     // ... the filter for the DemoPosts we want to count
     *   }
     * })
    **/
    count<T extends DemoPostCountArgs>(
      args?: Subset<T, DemoPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoPostAggregateArgs>(args: Subset<T, DemoPostAggregateArgs>): Prisma.PrismaPromise<GetDemoPostAggregateType<T>>

    /**
     * Group by DemoPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoPostGroupByArgs['orderBy'] }
        : { orderBy?: DemoPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoPost model
   */
  readonly fields: DemoPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends DemoUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemoUserDefaultArgs<ExtArgs>>): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    favBy<T extends DemoPost$favByArgs<ExtArgs> = {}>(args?: Subset<T, DemoPost$favByArgs<ExtArgs>>): Prisma__DemoUserClient<$Result.GetResult<Prisma.$DemoUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    categories<T extends DemoPost$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, DemoPost$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DemoPost model
   */ 
  interface DemoPostFieldRefs {
    readonly id: FieldRef<"DemoPost", 'String'>
    readonly title: FieldRef<"DemoPost", 'String'>
    readonly avgRating: FieldRef<"DemoPost", 'Float'>
    readonly createdAt: FieldRef<"DemoPost", 'DateTime'>
    readonly updatedAt: FieldRef<"DemoPost", 'DateTime'>
    readonly authorId: FieldRef<"DemoPost", 'String'>
    readonly favById: FieldRef<"DemoPost", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DemoPost findUnique
   */
  export type DemoPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter, which DemoPost to fetch.
     */
    where: DemoPostWhereUniqueInput
  }


  /**
   * DemoPost findUniqueOrThrow
   */
  export type DemoPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter, which DemoPost to fetch.
     */
    where: DemoPostWhereUniqueInput
  }


  /**
   * DemoPost findFirst
   */
  export type DemoPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter, which DemoPost to fetch.
     */
    where?: DemoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoPosts to fetch.
     */
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoPosts.
     */
    cursor?: DemoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoPosts.
     */
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoPost findFirstOrThrow
   */
  export type DemoPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter, which DemoPost to fetch.
     */
    where?: DemoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoPosts to fetch.
     */
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoPosts.
     */
    cursor?: DemoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoPosts.
     */
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoPost findMany
   */
  export type DemoPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter, which DemoPosts to fetch.
     */
    where?: DemoPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoPosts to fetch.
     */
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoPosts.
     */
    cursor?: DemoPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoPosts.
     */
    skip?: number
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoPost create
   */
  export type DemoPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * The data needed to create a DemoPost.
     */
    data: XOR<DemoPostCreateInput, DemoPostUncheckedCreateInput>
  }


  /**
   * DemoPost createMany
   */
  export type DemoPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoPosts.
     */
    data: DemoPostCreateManyInput | DemoPostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DemoPost update
   */
  export type DemoPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * The data needed to update a DemoPost.
     */
    data: XOR<DemoPostUpdateInput, DemoPostUncheckedUpdateInput>
    /**
     * Choose, which DemoPost to update.
     */
    where: DemoPostWhereUniqueInput
  }


  /**
   * DemoPost updateMany
   */
  export type DemoPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoPosts.
     */
    data: XOR<DemoPostUpdateManyMutationInput, DemoPostUncheckedUpdateManyInput>
    /**
     * Filter which DemoPosts to update
     */
    where?: DemoPostWhereInput
  }


  /**
   * DemoPost upsert
   */
  export type DemoPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * The filter to search for the DemoPost to update in case it exists.
     */
    where: DemoPostWhereUniqueInput
    /**
     * In case the DemoPost found by the `where` argument doesn't exist, create a new DemoPost with this data.
     */
    create: XOR<DemoPostCreateInput, DemoPostUncheckedCreateInput>
    /**
     * In case the DemoPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoPostUpdateInput, DemoPostUncheckedUpdateInput>
  }


  /**
   * DemoPost delete
   */
  export type DemoPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    /**
     * Filter which DemoPost to delete.
     */
    where: DemoPostWhereUniqueInput
  }


  /**
   * DemoPost deleteMany
   */
  export type DemoPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoPosts to delete
     */
    where?: DemoPostWhereInput
  }


  /**
   * DemoPost.favBy
   */
  export type DemoPost$favByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoUser
     */
    select?: DemoUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoUserInclude<ExtArgs> | null
    where?: DemoUserWhereInput
  }


  /**
   * DemoPost.categories
   */
  export type DemoPost$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    where?: DemoCategoryWhereInput
    orderBy?: DemoCategoryOrderByWithRelationInput | DemoCategoryOrderByWithRelationInput[]
    cursor?: DemoCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemoCategoryScalarFieldEnum | DemoCategoryScalarFieldEnum[]
  }


  /**
   * DemoPost without action
   */
  export type DemoPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
  }



  /**
   * Model DemoCategory
   */

  export type AggregateDemoCategory = {
    _count: DemoCategoryCountAggregateOutputType | null
    _min: DemoCategoryMinAggregateOutputType | null
    _max: DemoCategoryMaxAggregateOutputType | null
  }

  export type DemoCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DemoCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DemoCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DemoCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DemoCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DemoCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DemoCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoCategory to aggregate.
     */
    where?: DemoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoCategories to fetch.
     */
    orderBy?: DemoCategoryOrderByWithRelationInput | DemoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoCategories
    **/
    _count?: true | DemoCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoCategoryMaxAggregateInputType
  }

  export type GetDemoCategoryAggregateType<T extends DemoCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoCategory[P]>
      : GetScalarType<T[P], AggregateDemoCategory[P]>
  }




  export type DemoCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoCategoryWhereInput
    orderBy?: DemoCategoryOrderByWithAggregationInput | DemoCategoryOrderByWithAggregationInput[]
    by: DemoCategoryScalarFieldEnum[] | DemoCategoryScalarFieldEnum
    having?: DemoCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoCategoryCountAggregateInputType | true
    _min?: DemoCategoryMinAggregateInputType
    _max?: DemoCategoryMaxAggregateInputType
  }

  export type DemoCategoryGroupByOutputType = {
    id: string
    name: string
    _count: DemoCategoryCountAggregateOutputType | null
    _min: DemoCategoryMinAggregateOutputType | null
    _max: DemoCategoryMaxAggregateOutputType | null
  }

  type GetDemoCategoryGroupByPayload<T extends DemoCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DemoCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DemoCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    posts?: boolean | DemoCategory$postsArgs<ExtArgs>
    _count?: boolean | DemoCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoCategory"]>

  export type DemoCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DemoCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | DemoCategory$postsArgs<ExtArgs>
    _count?: boolean | DemoCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DemoCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoCategory"
    objects: {
      posts: Prisma.$DemoPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["demoCategory"]>
    composites: {}
  }


  type DemoCategoryGetPayload<S extends boolean | null | undefined | DemoCategoryDefaultArgs> = $Result.GetResult<Prisma.$DemoCategoryPayload, S>

  type DemoCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DemoCategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DemoCategoryCountAggregateInputType | true
    }

  export interface DemoCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoCategory'], meta: { name: 'DemoCategory' } }
    /**
     * Find zero or one DemoCategory that matches the filter.
     * @param {DemoCategoryFindUniqueArgs} args - Arguments to find a DemoCategory
     * @example
     * // Get one DemoCategory
     * const demoCategory = await prisma.demoCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DemoCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DemoCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DemoCategoryFindUniqueOrThrowArgs} args - Arguments to find a DemoCategory
     * @example
     * // Get one DemoCategory
     * const demoCategory = await prisma.demoCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DemoCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DemoCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryFindFirstArgs} args - Arguments to find a DemoCategory
     * @example
     * // Get one DemoCategory
     * const demoCategory = await prisma.demoCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DemoCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DemoCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryFindFirstOrThrowArgs} args - Arguments to find a DemoCategory
     * @example
     * // Get one DemoCategory
     * const demoCategory = await prisma.demoCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DemoCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DemoCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoCategories
     * const demoCategories = await prisma.demoCategory.findMany()
     * 
     * // Get first 10 DemoCategories
     * const demoCategories = await prisma.demoCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoCategoryWithIdOnly = await prisma.demoCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DemoCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DemoCategory.
     * @param {DemoCategoryCreateArgs} args - Arguments to create a DemoCategory.
     * @example
     * // Create one DemoCategory
     * const DemoCategory = await prisma.demoCategory.create({
     *   data: {
     *     // ... data to create a DemoCategory
     *   }
     * })
     * 
    **/
    create<T extends DemoCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryCreateArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DemoCategories.
     *     @param {DemoCategoryCreateManyArgs} args - Arguments to create many DemoCategories.
     *     @example
     *     // Create many DemoCategories
     *     const demoCategory = await prisma.demoCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DemoCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DemoCategory.
     * @param {DemoCategoryDeleteArgs} args - Arguments to delete one DemoCategory.
     * @example
     * // Delete one DemoCategory
     * const DemoCategory = await prisma.demoCategory.delete({
     *   where: {
     *     // ... filter to delete one DemoCategory
     *   }
     * })
     * 
    **/
    delete<T extends DemoCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryDeleteArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DemoCategory.
     * @param {DemoCategoryUpdateArgs} args - Arguments to update one DemoCategory.
     * @example
     * // Update one DemoCategory
     * const demoCategory = await prisma.demoCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DemoCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryUpdateArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DemoCategories.
     * @param {DemoCategoryDeleteManyArgs} args - Arguments to filter DemoCategories to delete.
     * @example
     * // Delete a few DemoCategories
     * const { count } = await prisma.demoCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DemoCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DemoCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoCategories
     * const demoCategory = await prisma.demoCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DemoCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DemoCategory.
     * @param {DemoCategoryUpsertArgs} args - Arguments to update or create a DemoCategory.
     * @example
     * // Update or create a DemoCategory
     * const demoCategory = await prisma.demoCategory.upsert({
     *   create: {
     *     // ... data to create a DemoCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoCategory we want to update
     *   }
     * })
    **/
    upsert<T extends DemoCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DemoCategoryUpsertArgs<ExtArgs>>
    ): Prisma__DemoCategoryClient<$Result.GetResult<Prisma.$DemoCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DemoCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryCountArgs} args - Arguments to filter DemoCategories to count.
     * @example
     * // Count the number of DemoCategories
     * const count = await prisma.demoCategory.count({
     *   where: {
     *     // ... the filter for the DemoCategories we want to count
     *   }
     * })
    **/
    count<T extends DemoCategoryCountArgs>(
      args?: Subset<T, DemoCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoCategoryAggregateArgs>(args: Subset<T, DemoCategoryAggregateArgs>): Prisma.PrismaPromise<GetDemoCategoryAggregateType<T>>

    /**
     * Group by DemoCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DemoCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoCategory model
   */
  readonly fields: DemoCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends DemoCategory$postsArgs<ExtArgs> = {}>(args?: Subset<T, DemoCategory$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DemoCategory model
   */ 
  interface DemoCategoryFieldRefs {
    readonly id: FieldRef<"DemoCategory", 'String'>
    readonly name: FieldRef<"DemoCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DemoCategory findUnique
   */
  export type DemoCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DemoCategory to fetch.
     */
    where: DemoCategoryWhereUniqueInput
  }


  /**
   * DemoCategory findUniqueOrThrow
   */
  export type DemoCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DemoCategory to fetch.
     */
    where: DemoCategoryWhereUniqueInput
  }


  /**
   * DemoCategory findFirst
   */
  export type DemoCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DemoCategory to fetch.
     */
    where?: DemoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoCategories to fetch.
     */
    orderBy?: DemoCategoryOrderByWithRelationInput | DemoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoCategories.
     */
    cursor?: DemoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoCategories.
     */
    distinct?: DemoCategoryScalarFieldEnum | DemoCategoryScalarFieldEnum[]
  }


  /**
   * DemoCategory findFirstOrThrow
   */
  export type DemoCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DemoCategory to fetch.
     */
    where?: DemoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoCategories to fetch.
     */
    orderBy?: DemoCategoryOrderByWithRelationInput | DemoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoCategories.
     */
    cursor?: DemoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoCategories.
     */
    distinct?: DemoCategoryScalarFieldEnum | DemoCategoryScalarFieldEnum[]
  }


  /**
   * DemoCategory findMany
   */
  export type DemoCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DemoCategories to fetch.
     */
    where?: DemoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoCategories to fetch.
     */
    orderBy?: DemoCategoryOrderByWithRelationInput | DemoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoCategories.
     */
    cursor?: DemoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoCategories.
     */
    skip?: number
    distinct?: DemoCategoryScalarFieldEnum | DemoCategoryScalarFieldEnum[]
  }


  /**
   * DemoCategory create
   */
  export type DemoCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DemoCategory.
     */
    data: XOR<DemoCategoryCreateInput, DemoCategoryUncheckedCreateInput>
  }


  /**
   * DemoCategory createMany
   */
  export type DemoCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoCategories.
     */
    data: DemoCategoryCreateManyInput | DemoCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DemoCategory update
   */
  export type DemoCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DemoCategory.
     */
    data: XOR<DemoCategoryUpdateInput, DemoCategoryUncheckedUpdateInput>
    /**
     * Choose, which DemoCategory to update.
     */
    where: DemoCategoryWhereUniqueInput
  }


  /**
   * DemoCategory updateMany
   */
  export type DemoCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoCategories.
     */
    data: XOR<DemoCategoryUpdateManyMutationInput, DemoCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DemoCategories to update
     */
    where?: DemoCategoryWhereInput
  }


  /**
   * DemoCategory upsert
   */
  export type DemoCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DemoCategory to update in case it exists.
     */
    where: DemoCategoryWhereUniqueInput
    /**
     * In case the DemoCategory found by the `where` argument doesn't exist, create a new DemoCategory with this data.
     */
    create: XOR<DemoCategoryCreateInput, DemoCategoryUncheckedCreateInput>
    /**
     * In case the DemoCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoCategoryUpdateInput, DemoCategoryUncheckedUpdateInput>
  }


  /**
   * DemoCategory delete
   */
  export type DemoCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
    /**
     * Filter which DemoCategory to delete.
     */
    where: DemoCategoryWhereUniqueInput
  }


  /**
   * DemoCategory deleteMany
   */
  export type DemoCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoCategories to delete
     */
    where?: DemoCategoryWhereInput
  }


  /**
   * DemoCategory.posts
   */
  export type DemoCategory$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoPost
     */
    select?: DemoPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoPostInclude<ExtArgs> | null
    where?: DemoPostWhereInput
    orderBy?: DemoPostOrderByWithRelationInput | DemoPostOrderByWithRelationInput[]
    cursor?: DemoPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemoPostScalarFieldEnum | DemoPostScalarFieldEnum[]
  }


  /**
   * DemoCategory without action
   */
  export type DemoCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoCategory
     */
    select?: DemoCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DemoCategoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DemoUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    age: 'age',
    role: 'role',
    demoUserPreferencesId: 'demoUserPreferencesId'
  };

  export type DemoUserScalarFieldEnum = (typeof DemoUserScalarFieldEnum)[keyof typeof DemoUserScalarFieldEnum]


  export const DemoUserPreferencesScalarFieldEnum: {
    id: 'id',
    emailUpdates: 'emailUpdates'
  };

  export type DemoUserPreferencesScalarFieldEnum = (typeof DemoUserPreferencesScalarFieldEnum)[keyof typeof DemoUserPreferencesScalarFieldEnum]


  export const DemoPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    avgRating: 'avgRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    favById: 'favById'
  };

  export type DemoPostScalarFieldEnum = (typeof DemoPostScalarFieldEnum)[keyof typeof DemoPostScalarFieldEnum]


  export const DemoCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DemoCategoryScalarFieldEnum = (typeof DemoCategoryScalarFieldEnum)[keyof typeof DemoCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type DemoUserWhereInput = {
    AND?: DemoUserWhereInput | DemoUserWhereInput[]
    OR?: DemoUserWhereInput[]
    NOT?: DemoUserWhereInput | DemoUserWhereInput[]
    id?: StringFilter<"DemoUser"> | string
    name?: StringFilter<"DemoUser"> | string
    email?: StringFilter<"DemoUser"> | string
    age?: IntFilter<"DemoUser"> | number
    role?: EnumRoleFilter<"DemoUser"> | $Enums.Role
    demoUserPreferencesId?: StringNullableFilter<"DemoUser"> | string | null
    writtenPosts?: DemoPostListRelationFilter
    favPosts?: DemoPostListRelationFilter
    demoUserPreferences?: XOR<DemoUserPreferencesNullableRelationFilter, DemoUserPreferencesWhereInput> | null
  }

  export type DemoUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    role?: SortOrder
    demoUserPreferencesId?: SortOrderInput | SortOrder
    writtenPosts?: DemoPostOrderByRelationAggregateInput
    favPosts?: DemoPostOrderByRelationAggregateInput
    demoUserPreferences?: DemoUserPreferencesOrderByWithRelationInput
  }

  export type DemoUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    demoUserPreferencesId?: string
    name_age?: DemoUserNameAgeCompoundUniqueInput
    AND?: DemoUserWhereInput | DemoUserWhereInput[]
    OR?: DemoUserWhereInput[]
    NOT?: DemoUserWhereInput | DemoUserWhereInput[]
    name?: StringFilter<"DemoUser"> | string
    age?: IntFilter<"DemoUser"> | number
    role?: EnumRoleFilter<"DemoUser"> | $Enums.Role
    writtenPosts?: DemoPostListRelationFilter
    favPosts?: DemoPostListRelationFilter
    demoUserPreferences?: XOR<DemoUserPreferencesNullableRelationFilter, DemoUserPreferencesWhereInput> | null
  }, "id" | "email" | "demoUserPreferencesId" | "name_age">

  export type DemoUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    role?: SortOrder
    demoUserPreferencesId?: SortOrderInput | SortOrder
    _count?: DemoUserCountOrderByAggregateInput
    _avg?: DemoUserAvgOrderByAggregateInput
    _max?: DemoUserMaxOrderByAggregateInput
    _min?: DemoUserMinOrderByAggregateInput
    _sum?: DemoUserSumOrderByAggregateInput
  }

  export type DemoUserScalarWhereWithAggregatesInput = {
    AND?: DemoUserScalarWhereWithAggregatesInput | DemoUserScalarWhereWithAggregatesInput[]
    OR?: DemoUserScalarWhereWithAggregatesInput[]
    NOT?: DemoUserScalarWhereWithAggregatesInput | DemoUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemoUser"> | string
    name?: StringWithAggregatesFilter<"DemoUser"> | string
    email?: StringWithAggregatesFilter<"DemoUser"> | string
    age?: IntWithAggregatesFilter<"DemoUser"> | number
    role?: EnumRoleWithAggregatesFilter<"DemoUser"> | $Enums.Role
    demoUserPreferencesId?: StringNullableWithAggregatesFilter<"DemoUser"> | string | null
  }

  export type DemoUserPreferencesWhereInput = {
    AND?: DemoUserPreferencesWhereInput | DemoUserPreferencesWhereInput[]
    OR?: DemoUserPreferencesWhereInput[]
    NOT?: DemoUserPreferencesWhereInput | DemoUserPreferencesWhereInput[]
    id?: StringFilter<"DemoUserPreferences"> | string
    emailUpdates?: BoolFilter<"DemoUserPreferences"> | boolean
    demoUser?: XOR<DemoUserNullableRelationFilter, DemoUserWhereInput> | null
  }

  export type DemoUserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    demoUser?: DemoUserOrderByWithRelationInput
  }

  export type DemoUserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemoUserPreferencesWhereInput | DemoUserPreferencesWhereInput[]
    OR?: DemoUserPreferencesWhereInput[]
    NOT?: DemoUserPreferencesWhereInput | DemoUserPreferencesWhereInput[]
    emailUpdates?: BoolFilter<"DemoUserPreferences"> | boolean
    demoUser?: XOR<DemoUserNullableRelationFilter, DemoUserWhereInput> | null
  }, "id">

  export type DemoUserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    _count?: DemoUserPreferencesCountOrderByAggregateInput
    _max?: DemoUserPreferencesMaxOrderByAggregateInput
    _min?: DemoUserPreferencesMinOrderByAggregateInput
  }

  export type DemoUserPreferencesScalarWhereWithAggregatesInput = {
    AND?: DemoUserPreferencesScalarWhereWithAggregatesInput | DemoUserPreferencesScalarWhereWithAggregatesInput[]
    OR?: DemoUserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: DemoUserPreferencesScalarWhereWithAggregatesInput | DemoUserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemoUserPreferences"> | string
    emailUpdates?: BoolWithAggregatesFilter<"DemoUserPreferences"> | boolean
  }

  export type DemoPostWhereInput = {
    AND?: DemoPostWhereInput | DemoPostWhereInput[]
    OR?: DemoPostWhereInput[]
    NOT?: DemoPostWhereInput | DemoPostWhereInput[]
    id?: StringFilter<"DemoPost"> | string
    title?: StringFilter<"DemoPost"> | string
    avgRating?: FloatFilter<"DemoPost"> | number
    createdAt?: DateTimeFilter<"DemoPost"> | Date | string
    updatedAt?: DateTimeFilter<"DemoPost"> | Date | string
    authorId?: StringFilter<"DemoPost"> | string
    favById?: StringNullableFilter<"DemoPost"> | string | null
    author?: XOR<DemoUserRelationFilter, DemoUserWhereInput>
    favBy?: XOR<DemoUserNullableRelationFilter, DemoUserWhereInput> | null
    categories?: DemoCategoryListRelationFilter
  }

  export type DemoPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    favById?: SortOrderInput | SortOrder
    author?: DemoUserOrderByWithRelationInput
    favBy?: DemoUserOrderByWithRelationInput
    categories?: DemoCategoryOrderByRelationAggregateInput
  }

  export type DemoPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemoPostWhereInput | DemoPostWhereInput[]
    OR?: DemoPostWhereInput[]
    NOT?: DemoPostWhereInput | DemoPostWhereInput[]
    title?: StringFilter<"DemoPost"> | string
    avgRating?: FloatFilter<"DemoPost"> | number
    createdAt?: DateTimeFilter<"DemoPost"> | Date | string
    updatedAt?: DateTimeFilter<"DemoPost"> | Date | string
    authorId?: StringFilter<"DemoPost"> | string
    favById?: StringNullableFilter<"DemoPost"> | string | null
    author?: XOR<DemoUserRelationFilter, DemoUserWhereInput>
    favBy?: XOR<DemoUserNullableRelationFilter, DemoUserWhereInput> | null
    categories?: DemoCategoryListRelationFilter
  }, "id">

  export type DemoPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    favById?: SortOrderInput | SortOrder
    _count?: DemoPostCountOrderByAggregateInput
    _avg?: DemoPostAvgOrderByAggregateInput
    _max?: DemoPostMaxOrderByAggregateInput
    _min?: DemoPostMinOrderByAggregateInput
    _sum?: DemoPostSumOrderByAggregateInput
  }

  export type DemoPostScalarWhereWithAggregatesInput = {
    AND?: DemoPostScalarWhereWithAggregatesInput | DemoPostScalarWhereWithAggregatesInput[]
    OR?: DemoPostScalarWhereWithAggregatesInput[]
    NOT?: DemoPostScalarWhereWithAggregatesInput | DemoPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemoPost"> | string
    title?: StringWithAggregatesFilter<"DemoPost"> | string
    avgRating?: FloatWithAggregatesFilter<"DemoPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DemoPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DemoPost"> | Date | string
    authorId?: StringWithAggregatesFilter<"DemoPost"> | string
    favById?: StringNullableWithAggregatesFilter<"DemoPost"> | string | null
  }

  export type DemoCategoryWhereInput = {
    AND?: DemoCategoryWhereInput | DemoCategoryWhereInput[]
    OR?: DemoCategoryWhereInput[]
    NOT?: DemoCategoryWhereInput | DemoCategoryWhereInput[]
    id?: StringFilter<"DemoCategory"> | string
    name?: StringFilter<"DemoCategory"> | string
    posts?: DemoPostListRelationFilter
  }

  export type DemoCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    posts?: DemoPostOrderByRelationAggregateInput
  }

  export type DemoCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemoCategoryWhereInput | DemoCategoryWhereInput[]
    OR?: DemoCategoryWhereInput[]
    NOT?: DemoCategoryWhereInput | DemoCategoryWhereInput[]
    name?: StringFilter<"DemoCategory"> | string
    posts?: DemoPostListRelationFilter
  }, "id">

  export type DemoCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DemoCategoryCountOrderByAggregateInput
    _max?: DemoCategoryMaxOrderByAggregateInput
    _min?: DemoCategoryMinOrderByAggregateInput
  }

  export type DemoCategoryScalarWhereWithAggregatesInput = {
    AND?: DemoCategoryScalarWhereWithAggregatesInput | DemoCategoryScalarWhereWithAggregatesInput[]
    OR?: DemoCategoryScalarWhereWithAggregatesInput[]
    NOT?: DemoCategoryScalarWhereWithAggregatesInput | DemoCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemoCategory"> | string
    name?: StringWithAggregatesFilter<"DemoCategory"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DemoUserCreateInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    writtenPosts?: DemoPostCreateNestedManyWithoutAuthorInput
    favPosts?: DemoPostCreateNestedManyWithoutFavByInput
    demoUserPreferences?: DemoUserPreferencesCreateNestedOneWithoutDemoUserInput
  }

  export type DemoUserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    demoUserPreferencesId?: string | null
    writtenPosts?: DemoPostUncheckedCreateNestedManyWithoutAuthorInput
    favPosts?: DemoPostUncheckedCreateNestedManyWithoutFavByInput
  }

  export type DemoUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    writtenPosts?: DemoPostUpdateManyWithoutAuthorNestedInput
    favPosts?: DemoPostUpdateManyWithoutFavByNestedInput
    demoUserPreferences?: DemoUserPreferencesUpdateOneWithoutDemoUserNestedInput
  }

  export type DemoUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    demoUserPreferencesId?: NullableStringFieldUpdateOperationsInput | string | null
    writtenPosts?: DemoPostUncheckedUpdateManyWithoutAuthorNestedInput
    favPosts?: DemoPostUncheckedUpdateManyWithoutFavByNestedInput
  }

  export type DemoUserCreateManyInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    demoUserPreferencesId?: string | null
  }

  export type DemoUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DemoUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    demoUserPreferencesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemoUserPreferencesCreateInput = {
    id?: string
    emailUpdates: boolean
    demoUser?: DemoUserCreateNestedOneWithoutDemoUserPreferencesInput
  }

  export type DemoUserPreferencesUncheckedCreateInput = {
    id?: string
    emailUpdates: boolean
    demoUser?: DemoUserUncheckedCreateNestedOneWithoutDemoUserPreferencesInput
  }

  export type DemoUserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    demoUser?: DemoUserUpdateOneWithoutDemoUserPreferencesNestedInput
  }

  export type DemoUserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    demoUser?: DemoUserUncheckedUpdateOneWithoutDemoUserPreferencesNestedInput
  }

  export type DemoUserPreferencesCreateManyInput = {
    id?: string
    emailUpdates: boolean
  }

  export type DemoUserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemoUserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemoPostCreateInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: DemoUserCreateNestedOneWithoutWrittenPostsInput
    favBy?: DemoUserCreateNestedOneWithoutFavPostsInput
    categories?: DemoCategoryCreateNestedManyWithoutPostsInput
  }

  export type DemoPostUncheckedCreateInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    favById?: string | null
    categories?: DemoCategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type DemoPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: DemoUserUpdateOneRequiredWithoutWrittenPostsNestedInput
    favBy?: DemoUserUpdateOneWithoutFavPostsNestedInput
    categories?: DemoCategoryUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: DemoCategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostCreateManyInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    favById?: string | null
  }

  export type DemoPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemoCategoryCreateInput = {
    id?: string
    name: string
    posts?: DemoPostCreateNestedManyWithoutCategoriesInput
  }

  export type DemoCategoryUncheckedCreateInput = {
    id?: string
    name: string
    posts?: DemoPostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type DemoCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: DemoPostUpdateManyWithoutCategoriesNestedInput
  }

  export type DemoCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: DemoPostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type DemoCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type DemoCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DemoCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DemoPostListRelationFilter = {
    every?: DemoPostWhereInput
    some?: DemoPostWhereInput
    none?: DemoPostWhereInput
  }

  export type DemoUserPreferencesNullableRelationFilter = {
    is?: DemoUserPreferencesWhereInput | null
    isNot?: DemoUserPreferencesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemoPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemoUserNameAgeCompoundUniqueInput = {
    name: string
    age: number
  }

  export type DemoUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    role?: SortOrder
    demoUserPreferencesId?: SortOrder
  }

  export type DemoUserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type DemoUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    role?: SortOrder
    demoUserPreferencesId?: SortOrder
  }

  export type DemoUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    role?: SortOrder
    demoUserPreferencesId?: SortOrder
  }

  export type DemoUserSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DemoUserNullableRelationFilter = {
    is?: DemoUserWhereInput | null
    isNot?: DemoUserWhereInput | null
  }

  export type DemoUserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
  }

  export type DemoUserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
  }

  export type DemoUserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DemoUserRelationFilter = {
    is?: DemoUserWhereInput
    isNot?: DemoUserWhereInput
  }

  export type DemoCategoryListRelationFilter = {
    every?: DemoCategoryWhereInput
    some?: DemoCategoryWhereInput
    none?: DemoCategoryWhereInput
  }

  export type DemoCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemoPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    favById?: SortOrder
  }

  export type DemoPostAvgOrderByAggregateInput = {
    avgRating?: SortOrder
  }

  export type DemoPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    favById?: SortOrder
  }

  export type DemoPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    favById?: SortOrder
  }

  export type DemoPostSumOrderByAggregateInput = {
    avgRating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DemoCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DemoCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DemoCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DemoPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput> | DemoPostCreateWithoutAuthorInput[] | DemoPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutAuthorInput | DemoPostCreateOrConnectWithoutAuthorInput[]
    createMany?: DemoPostCreateManyAuthorInputEnvelope
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type DemoPostCreateNestedManyWithoutFavByInput = {
    create?: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput> | DemoPostCreateWithoutFavByInput[] | DemoPostUncheckedCreateWithoutFavByInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutFavByInput | DemoPostCreateOrConnectWithoutFavByInput[]
    createMany?: DemoPostCreateManyFavByInputEnvelope
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type DemoUserPreferencesCreateNestedOneWithoutDemoUserInput = {
    create?: XOR<DemoUserPreferencesCreateWithoutDemoUserInput, DemoUserPreferencesUncheckedCreateWithoutDemoUserInput>
    connectOrCreate?: DemoUserPreferencesCreateOrConnectWithoutDemoUserInput
    connect?: DemoUserPreferencesWhereUniqueInput
  }

  export type DemoPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput> | DemoPostCreateWithoutAuthorInput[] | DemoPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutAuthorInput | DemoPostCreateOrConnectWithoutAuthorInput[]
    createMany?: DemoPostCreateManyAuthorInputEnvelope
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type DemoPostUncheckedCreateNestedManyWithoutFavByInput = {
    create?: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput> | DemoPostCreateWithoutFavByInput[] | DemoPostUncheckedCreateWithoutFavByInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutFavByInput | DemoPostCreateOrConnectWithoutFavByInput[]
    createMany?: DemoPostCreateManyFavByInputEnvelope
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DemoPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput> | DemoPostCreateWithoutAuthorInput[] | DemoPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutAuthorInput | DemoPostCreateOrConnectWithoutAuthorInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutAuthorInput | DemoPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DemoPostCreateManyAuthorInputEnvelope
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutAuthorInput | DemoPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutAuthorInput | DemoPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type DemoPostUpdateManyWithoutFavByNestedInput = {
    create?: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput> | DemoPostCreateWithoutFavByInput[] | DemoPostUncheckedCreateWithoutFavByInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutFavByInput | DemoPostCreateOrConnectWithoutFavByInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutFavByInput | DemoPostUpsertWithWhereUniqueWithoutFavByInput[]
    createMany?: DemoPostCreateManyFavByInputEnvelope
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutFavByInput | DemoPostUpdateWithWhereUniqueWithoutFavByInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutFavByInput | DemoPostUpdateManyWithWhereWithoutFavByInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type DemoUserPreferencesUpdateOneWithoutDemoUserNestedInput = {
    create?: XOR<DemoUserPreferencesCreateWithoutDemoUserInput, DemoUserPreferencesUncheckedCreateWithoutDemoUserInput>
    connectOrCreate?: DemoUserPreferencesCreateOrConnectWithoutDemoUserInput
    upsert?: DemoUserPreferencesUpsertWithoutDemoUserInput
    disconnect?: DemoUserPreferencesWhereInput | boolean
    delete?: DemoUserPreferencesWhereInput | boolean
    connect?: DemoUserPreferencesWhereUniqueInput
    update?: XOR<XOR<DemoUserPreferencesUpdateToOneWithWhereWithoutDemoUserInput, DemoUserPreferencesUpdateWithoutDemoUserInput>, DemoUserPreferencesUncheckedUpdateWithoutDemoUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DemoPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput> | DemoPostCreateWithoutAuthorInput[] | DemoPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutAuthorInput | DemoPostCreateOrConnectWithoutAuthorInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutAuthorInput | DemoPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DemoPostCreateManyAuthorInputEnvelope
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutAuthorInput | DemoPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutAuthorInput | DemoPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type DemoPostUncheckedUpdateManyWithoutFavByNestedInput = {
    create?: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput> | DemoPostCreateWithoutFavByInput[] | DemoPostUncheckedCreateWithoutFavByInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutFavByInput | DemoPostCreateOrConnectWithoutFavByInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutFavByInput | DemoPostUpsertWithWhereUniqueWithoutFavByInput[]
    createMany?: DemoPostCreateManyFavByInputEnvelope
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutFavByInput | DemoPostUpdateWithWhereUniqueWithoutFavByInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutFavByInput | DemoPostUpdateManyWithWhereWithoutFavByInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type DemoUserCreateNestedOneWithoutDemoUserPreferencesInput = {
    create?: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutDemoUserPreferencesInput
    connect?: DemoUserWhereUniqueInput
  }

  export type DemoUserUncheckedCreateNestedOneWithoutDemoUserPreferencesInput = {
    create?: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutDemoUserPreferencesInput
    connect?: DemoUserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DemoUserUpdateOneWithoutDemoUserPreferencesNestedInput = {
    create?: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutDemoUserPreferencesInput
    upsert?: DemoUserUpsertWithoutDemoUserPreferencesInput
    disconnect?: DemoUserWhereInput | boolean
    delete?: DemoUserWhereInput | boolean
    connect?: DemoUserWhereUniqueInput
    update?: XOR<XOR<DemoUserUpdateToOneWithWhereWithoutDemoUserPreferencesInput, DemoUserUpdateWithoutDemoUserPreferencesInput>, DemoUserUncheckedUpdateWithoutDemoUserPreferencesInput>
  }

  export type DemoUserUncheckedUpdateOneWithoutDemoUserPreferencesNestedInput = {
    create?: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutDemoUserPreferencesInput
    upsert?: DemoUserUpsertWithoutDemoUserPreferencesInput
    disconnect?: DemoUserWhereInput | boolean
    delete?: DemoUserWhereInput | boolean
    connect?: DemoUserWhereUniqueInput
    update?: XOR<XOR<DemoUserUpdateToOneWithWhereWithoutDemoUserPreferencesInput, DemoUserUpdateWithoutDemoUserPreferencesInput>, DemoUserUncheckedUpdateWithoutDemoUserPreferencesInput>
  }

  export type DemoUserCreateNestedOneWithoutWrittenPostsInput = {
    create?: XOR<DemoUserCreateWithoutWrittenPostsInput, DemoUserUncheckedCreateWithoutWrittenPostsInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutWrittenPostsInput
    connect?: DemoUserWhereUniqueInput
  }

  export type DemoUserCreateNestedOneWithoutFavPostsInput = {
    create?: XOR<DemoUserCreateWithoutFavPostsInput, DemoUserUncheckedCreateWithoutFavPostsInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutFavPostsInput
    connect?: DemoUserWhereUniqueInput
  }

  export type DemoCategoryCreateNestedManyWithoutPostsInput = {
    create?: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput> | DemoCategoryCreateWithoutPostsInput[] | DemoCategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: DemoCategoryCreateOrConnectWithoutPostsInput | DemoCategoryCreateOrConnectWithoutPostsInput[]
    connect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
  }

  export type DemoCategoryUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput> | DemoCategoryCreateWithoutPostsInput[] | DemoCategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: DemoCategoryCreateOrConnectWithoutPostsInput | DemoCategoryCreateOrConnectWithoutPostsInput[]
    connect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DemoUserUpdateOneRequiredWithoutWrittenPostsNestedInput = {
    create?: XOR<DemoUserCreateWithoutWrittenPostsInput, DemoUserUncheckedCreateWithoutWrittenPostsInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutWrittenPostsInput
    upsert?: DemoUserUpsertWithoutWrittenPostsInput
    connect?: DemoUserWhereUniqueInput
    update?: XOR<XOR<DemoUserUpdateToOneWithWhereWithoutWrittenPostsInput, DemoUserUpdateWithoutWrittenPostsInput>, DemoUserUncheckedUpdateWithoutWrittenPostsInput>
  }

  export type DemoUserUpdateOneWithoutFavPostsNestedInput = {
    create?: XOR<DemoUserCreateWithoutFavPostsInput, DemoUserUncheckedCreateWithoutFavPostsInput>
    connectOrCreate?: DemoUserCreateOrConnectWithoutFavPostsInput
    upsert?: DemoUserUpsertWithoutFavPostsInput
    disconnect?: DemoUserWhereInput | boolean
    delete?: DemoUserWhereInput | boolean
    connect?: DemoUserWhereUniqueInput
    update?: XOR<XOR<DemoUserUpdateToOneWithWhereWithoutFavPostsInput, DemoUserUpdateWithoutFavPostsInput>, DemoUserUncheckedUpdateWithoutFavPostsInput>
  }

  export type DemoCategoryUpdateManyWithoutPostsNestedInput = {
    create?: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput> | DemoCategoryCreateWithoutPostsInput[] | DemoCategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: DemoCategoryCreateOrConnectWithoutPostsInput | DemoCategoryCreateOrConnectWithoutPostsInput[]
    upsert?: DemoCategoryUpsertWithWhereUniqueWithoutPostsInput | DemoCategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    disconnect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    delete?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    connect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    update?: DemoCategoryUpdateWithWhereUniqueWithoutPostsInput | DemoCategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: DemoCategoryUpdateManyWithWhereWithoutPostsInput | DemoCategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: DemoCategoryScalarWhereInput | DemoCategoryScalarWhereInput[]
  }

  export type DemoCategoryUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput> | DemoCategoryCreateWithoutPostsInput[] | DemoCategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: DemoCategoryCreateOrConnectWithoutPostsInput | DemoCategoryCreateOrConnectWithoutPostsInput[]
    upsert?: DemoCategoryUpsertWithWhereUniqueWithoutPostsInput | DemoCategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    disconnect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    delete?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    connect?: DemoCategoryWhereUniqueInput | DemoCategoryWhereUniqueInput[]
    update?: DemoCategoryUpdateWithWhereUniqueWithoutPostsInput | DemoCategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: DemoCategoryUpdateManyWithWhereWithoutPostsInput | DemoCategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: DemoCategoryScalarWhereInput | DemoCategoryScalarWhereInput[]
  }

  export type DemoPostCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput> | DemoPostCreateWithoutCategoriesInput[] | DemoPostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutCategoriesInput | DemoPostCreateOrConnectWithoutCategoriesInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type DemoPostUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput> | DemoPostCreateWithoutCategoriesInput[] | DemoPostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutCategoriesInput | DemoPostCreateOrConnectWithoutCategoriesInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
  }

  export type DemoPostUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput> | DemoPostCreateWithoutCategoriesInput[] | DemoPostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutCategoriesInput | DemoPostCreateOrConnectWithoutCategoriesInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutCategoriesInput | DemoPostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutCategoriesInput | DemoPostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutCategoriesInput | DemoPostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type DemoPostUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput> | DemoPostCreateWithoutCategoriesInput[] | DemoPostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: DemoPostCreateOrConnectWithoutCategoriesInput | DemoPostCreateOrConnectWithoutCategoriesInput[]
    upsert?: DemoPostUpsertWithWhereUniqueWithoutCategoriesInput | DemoPostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    disconnect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    delete?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    connect?: DemoPostWhereUniqueInput | DemoPostWhereUniqueInput[]
    update?: DemoPostUpdateWithWhereUniqueWithoutCategoriesInput | DemoPostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: DemoPostUpdateManyWithWhereWithoutCategoriesInput | DemoPostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DemoPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favBy?: DemoUserCreateNestedOneWithoutFavPostsInput
    categories?: DemoCategoryCreateNestedManyWithoutPostsInput
  }

  export type DemoPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favById?: string | null
    categories?: DemoCategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type DemoPostCreateOrConnectWithoutAuthorInput = {
    where: DemoPostWhereUniqueInput
    create: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput>
  }

  export type DemoPostCreateManyAuthorInputEnvelope = {
    data: DemoPostCreateManyAuthorInput | DemoPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type DemoPostCreateWithoutFavByInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: DemoUserCreateNestedOneWithoutWrittenPostsInput
    categories?: DemoCategoryCreateNestedManyWithoutPostsInput
  }

  export type DemoPostUncheckedCreateWithoutFavByInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    categories?: DemoCategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type DemoPostCreateOrConnectWithoutFavByInput = {
    where: DemoPostWhereUniqueInput
    create: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput>
  }

  export type DemoPostCreateManyFavByInputEnvelope = {
    data: DemoPostCreateManyFavByInput | DemoPostCreateManyFavByInput[]
    skipDuplicates?: boolean
  }

  export type DemoUserPreferencesCreateWithoutDemoUserInput = {
    id?: string
    emailUpdates: boolean
  }

  export type DemoUserPreferencesUncheckedCreateWithoutDemoUserInput = {
    id?: string
    emailUpdates: boolean
  }

  export type DemoUserPreferencesCreateOrConnectWithoutDemoUserInput = {
    where: DemoUserPreferencesWhereUniqueInput
    create: XOR<DemoUserPreferencesCreateWithoutDemoUserInput, DemoUserPreferencesUncheckedCreateWithoutDemoUserInput>
  }

  export type DemoPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DemoPostWhereUniqueInput
    update: XOR<DemoPostUpdateWithoutAuthorInput, DemoPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<DemoPostCreateWithoutAuthorInput, DemoPostUncheckedCreateWithoutAuthorInput>
  }

  export type DemoPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DemoPostWhereUniqueInput
    data: XOR<DemoPostUpdateWithoutAuthorInput, DemoPostUncheckedUpdateWithoutAuthorInput>
  }

  export type DemoPostUpdateManyWithWhereWithoutAuthorInput = {
    where: DemoPostScalarWhereInput
    data: XOR<DemoPostUpdateManyMutationInput, DemoPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DemoPostScalarWhereInput = {
    AND?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
    OR?: DemoPostScalarWhereInput[]
    NOT?: DemoPostScalarWhereInput | DemoPostScalarWhereInput[]
    id?: StringFilter<"DemoPost"> | string
    title?: StringFilter<"DemoPost"> | string
    avgRating?: FloatFilter<"DemoPost"> | number
    createdAt?: DateTimeFilter<"DemoPost"> | Date | string
    updatedAt?: DateTimeFilter<"DemoPost"> | Date | string
    authorId?: StringFilter<"DemoPost"> | string
    favById?: StringNullableFilter<"DemoPost"> | string | null
  }

  export type DemoPostUpsertWithWhereUniqueWithoutFavByInput = {
    where: DemoPostWhereUniqueInput
    update: XOR<DemoPostUpdateWithoutFavByInput, DemoPostUncheckedUpdateWithoutFavByInput>
    create: XOR<DemoPostCreateWithoutFavByInput, DemoPostUncheckedCreateWithoutFavByInput>
  }

  export type DemoPostUpdateWithWhereUniqueWithoutFavByInput = {
    where: DemoPostWhereUniqueInput
    data: XOR<DemoPostUpdateWithoutFavByInput, DemoPostUncheckedUpdateWithoutFavByInput>
  }

  export type DemoPostUpdateManyWithWhereWithoutFavByInput = {
    where: DemoPostScalarWhereInput
    data: XOR<DemoPostUpdateManyMutationInput, DemoPostUncheckedUpdateManyWithoutFavByInput>
  }

  export type DemoUserPreferencesUpsertWithoutDemoUserInput = {
    update: XOR<DemoUserPreferencesUpdateWithoutDemoUserInput, DemoUserPreferencesUncheckedUpdateWithoutDemoUserInput>
    create: XOR<DemoUserPreferencesCreateWithoutDemoUserInput, DemoUserPreferencesUncheckedCreateWithoutDemoUserInput>
    where?: DemoUserPreferencesWhereInput
  }

  export type DemoUserPreferencesUpdateToOneWithWhereWithoutDemoUserInput = {
    where?: DemoUserPreferencesWhereInput
    data: XOR<DemoUserPreferencesUpdateWithoutDemoUserInput, DemoUserPreferencesUncheckedUpdateWithoutDemoUserInput>
  }

  export type DemoUserPreferencesUpdateWithoutDemoUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemoUserPreferencesUncheckedUpdateWithoutDemoUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemoUserCreateWithoutDemoUserPreferencesInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    writtenPosts?: DemoPostCreateNestedManyWithoutAuthorInput
    favPosts?: DemoPostCreateNestedManyWithoutFavByInput
  }

  export type DemoUserUncheckedCreateWithoutDemoUserPreferencesInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    writtenPosts?: DemoPostUncheckedCreateNestedManyWithoutAuthorInput
    favPosts?: DemoPostUncheckedCreateNestedManyWithoutFavByInput
  }

  export type DemoUserCreateOrConnectWithoutDemoUserPreferencesInput = {
    where: DemoUserWhereUniqueInput
    create: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
  }

  export type DemoUserUpsertWithoutDemoUserPreferencesInput = {
    update: XOR<DemoUserUpdateWithoutDemoUserPreferencesInput, DemoUserUncheckedUpdateWithoutDemoUserPreferencesInput>
    create: XOR<DemoUserCreateWithoutDemoUserPreferencesInput, DemoUserUncheckedCreateWithoutDemoUserPreferencesInput>
    where?: DemoUserWhereInput
  }

  export type DemoUserUpdateToOneWithWhereWithoutDemoUserPreferencesInput = {
    where?: DemoUserWhereInput
    data: XOR<DemoUserUpdateWithoutDemoUserPreferencesInput, DemoUserUncheckedUpdateWithoutDemoUserPreferencesInput>
  }

  export type DemoUserUpdateWithoutDemoUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    writtenPosts?: DemoPostUpdateManyWithoutAuthorNestedInput
    favPosts?: DemoPostUpdateManyWithoutFavByNestedInput
  }

  export type DemoUserUncheckedUpdateWithoutDemoUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    writtenPosts?: DemoPostUncheckedUpdateManyWithoutAuthorNestedInput
    favPosts?: DemoPostUncheckedUpdateManyWithoutFavByNestedInput
  }

  export type DemoUserCreateWithoutWrittenPostsInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    favPosts?: DemoPostCreateNestedManyWithoutFavByInput
    demoUserPreferences?: DemoUserPreferencesCreateNestedOneWithoutDemoUserInput
  }

  export type DemoUserUncheckedCreateWithoutWrittenPostsInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    demoUserPreferencesId?: string | null
    favPosts?: DemoPostUncheckedCreateNestedManyWithoutFavByInput
  }

  export type DemoUserCreateOrConnectWithoutWrittenPostsInput = {
    where: DemoUserWhereUniqueInput
    create: XOR<DemoUserCreateWithoutWrittenPostsInput, DemoUserUncheckedCreateWithoutWrittenPostsInput>
  }

  export type DemoUserCreateWithoutFavPostsInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    writtenPosts?: DemoPostCreateNestedManyWithoutAuthorInput
    demoUserPreferences?: DemoUserPreferencesCreateNestedOneWithoutDemoUserInput
  }

  export type DemoUserUncheckedCreateWithoutFavPostsInput = {
    id?: string
    name: string
    email: string
    age: number
    role?: $Enums.Role
    demoUserPreferencesId?: string | null
    writtenPosts?: DemoPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type DemoUserCreateOrConnectWithoutFavPostsInput = {
    where: DemoUserWhereUniqueInput
    create: XOR<DemoUserCreateWithoutFavPostsInput, DemoUserUncheckedCreateWithoutFavPostsInput>
  }

  export type DemoCategoryCreateWithoutPostsInput = {
    id?: string
    name: string
  }

  export type DemoCategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
  }

  export type DemoCategoryCreateOrConnectWithoutPostsInput = {
    where: DemoCategoryWhereUniqueInput
    create: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput>
  }

  export type DemoUserUpsertWithoutWrittenPostsInput = {
    update: XOR<DemoUserUpdateWithoutWrittenPostsInput, DemoUserUncheckedUpdateWithoutWrittenPostsInput>
    create: XOR<DemoUserCreateWithoutWrittenPostsInput, DemoUserUncheckedCreateWithoutWrittenPostsInput>
    where?: DemoUserWhereInput
  }

  export type DemoUserUpdateToOneWithWhereWithoutWrittenPostsInput = {
    where?: DemoUserWhereInput
    data: XOR<DemoUserUpdateWithoutWrittenPostsInput, DemoUserUncheckedUpdateWithoutWrittenPostsInput>
  }

  export type DemoUserUpdateWithoutWrittenPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favPosts?: DemoPostUpdateManyWithoutFavByNestedInput
    demoUserPreferences?: DemoUserPreferencesUpdateOneWithoutDemoUserNestedInput
  }

  export type DemoUserUncheckedUpdateWithoutWrittenPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    demoUserPreferencesId?: NullableStringFieldUpdateOperationsInput | string | null
    favPosts?: DemoPostUncheckedUpdateManyWithoutFavByNestedInput
  }

  export type DemoUserUpsertWithoutFavPostsInput = {
    update: XOR<DemoUserUpdateWithoutFavPostsInput, DemoUserUncheckedUpdateWithoutFavPostsInput>
    create: XOR<DemoUserCreateWithoutFavPostsInput, DemoUserUncheckedCreateWithoutFavPostsInput>
    where?: DemoUserWhereInput
  }

  export type DemoUserUpdateToOneWithWhereWithoutFavPostsInput = {
    where?: DemoUserWhereInput
    data: XOR<DemoUserUpdateWithoutFavPostsInput, DemoUserUncheckedUpdateWithoutFavPostsInput>
  }

  export type DemoUserUpdateWithoutFavPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    writtenPosts?: DemoPostUpdateManyWithoutAuthorNestedInput
    demoUserPreferences?: DemoUserPreferencesUpdateOneWithoutDemoUserNestedInput
  }

  export type DemoUserUncheckedUpdateWithoutFavPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    demoUserPreferencesId?: NullableStringFieldUpdateOperationsInput | string | null
    writtenPosts?: DemoPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DemoCategoryUpsertWithWhereUniqueWithoutPostsInput = {
    where: DemoCategoryWhereUniqueInput
    update: XOR<DemoCategoryUpdateWithoutPostsInput, DemoCategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<DemoCategoryCreateWithoutPostsInput, DemoCategoryUncheckedCreateWithoutPostsInput>
  }

  export type DemoCategoryUpdateWithWhereUniqueWithoutPostsInput = {
    where: DemoCategoryWhereUniqueInput
    data: XOR<DemoCategoryUpdateWithoutPostsInput, DemoCategoryUncheckedUpdateWithoutPostsInput>
  }

  export type DemoCategoryUpdateManyWithWhereWithoutPostsInput = {
    where: DemoCategoryScalarWhereInput
    data: XOR<DemoCategoryUpdateManyMutationInput, DemoCategoryUncheckedUpdateManyWithoutPostsInput>
  }

  export type DemoCategoryScalarWhereInput = {
    AND?: DemoCategoryScalarWhereInput | DemoCategoryScalarWhereInput[]
    OR?: DemoCategoryScalarWhereInput[]
    NOT?: DemoCategoryScalarWhereInput | DemoCategoryScalarWhereInput[]
    id?: StringFilter<"DemoCategory"> | string
    name?: StringFilter<"DemoCategory"> | string
  }

  export type DemoPostCreateWithoutCategoriesInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: DemoUserCreateNestedOneWithoutWrittenPostsInput
    favBy?: DemoUserCreateNestedOneWithoutFavPostsInput
  }

  export type DemoPostUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    favById?: string | null
  }

  export type DemoPostCreateOrConnectWithoutCategoriesInput = {
    where: DemoPostWhereUniqueInput
    create: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput>
  }

  export type DemoPostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: DemoPostWhereUniqueInput
    update: XOR<DemoPostUpdateWithoutCategoriesInput, DemoPostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DemoPostCreateWithoutCategoriesInput, DemoPostUncheckedCreateWithoutCategoriesInput>
  }

  export type DemoPostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: DemoPostWhereUniqueInput
    data: XOR<DemoPostUpdateWithoutCategoriesInput, DemoPostUncheckedUpdateWithoutCategoriesInput>
  }

  export type DemoPostUpdateManyWithWhereWithoutCategoriesInput = {
    where: DemoPostScalarWhereInput
    data: XOR<DemoPostUpdateManyMutationInput, DemoPostUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type DemoPostCreateManyAuthorInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favById?: string | null
  }

  export type DemoPostCreateManyFavByInput = {
    id?: string
    title: string
    avgRating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type DemoPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favBy?: DemoUserUpdateOneWithoutFavPostsNestedInput
    categories?: DemoCategoryUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: DemoCategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemoPostUpdateWithoutFavByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: DemoUserUpdateOneRequiredWithoutWrittenPostsNestedInput
    categories?: DemoCategoryUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostUncheckedUpdateWithoutFavByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    categories?: DemoCategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type DemoPostUncheckedUpdateManyWithoutFavByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type DemoCategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DemoCategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DemoCategoryUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DemoPostUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: DemoUserUpdateOneRequiredWithoutWrittenPostsNestedInput
    favBy?: DemoUserUpdateOneWithoutFavPostsNestedInput
  }

  export type DemoPostUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemoPostUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    favById?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DemoUserCountOutputTypeDefaultArgs instead
     */
    export type DemoUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoPostCountOutputTypeDefaultArgs instead
     */
    export type DemoPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoCategoryCountOutputTypeDefaultArgs instead
     */
    export type DemoCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoUserDefaultArgs instead
     */
    export type DemoUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoUserPreferencesDefaultArgs instead
     */
    export type DemoUserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoUserPreferencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoPostDefaultArgs instead
     */
    export type DemoPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DemoCategoryDefaultArgs instead
     */
    export type DemoCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DemoCategoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
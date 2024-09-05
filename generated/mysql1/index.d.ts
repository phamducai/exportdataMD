
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UsersCourses
 * 
 */
export type UsersCourses = $Result.DefaultSelection<Prisma.$UsersCoursesPayload>
/**
 * Model Videos
 * 
 */
export type Videos = $Result.DefaultSelection<Prisma.$VideosPayload>
/**
 * Model usersVideo
 * 
 */
export type usersVideo = $Result.DefaultSelection<Prisma.$usersVideoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.courses.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Courses
   * const courses = await prisma.courses.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.usersCourses`: Exposes CRUD operations for the **UsersCourses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersCourses
    * const usersCourses = await prisma.usersCourses.findMany()
    * ```
    */
  get usersCourses(): Prisma.UsersCoursesDelegate<ExtArgs>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **Videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.VideosDelegate<ExtArgs>;

  /**
   * `prisma.usersVideo`: Exposes CRUD operations for the **usersVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersVideos
    * const usersVideos = await prisma.usersVideo.findMany()
    * ```
    */
  get usersVideo(): Prisma.usersVideoDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Courses: 'Courses',
    Users: 'Users',
    UsersCourses: 'UsersCourses',
    Videos: 'Videos',
    usersVideo: 'usersVideo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "courses" | "users" | "usersCourses" | "videos" | "usersVideo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UsersCourses: {
        payload: Prisma.$UsersCoursesPayload<ExtArgs>
        fields: Prisma.UsersCoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersCoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersCoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          findFirst: {
            args: Prisma.UsersCoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersCoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          findMany: {
            args: Prisma.UsersCoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>[]
          }
          create: {
            args: Prisma.UsersCoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          createMany: {
            args: Prisma.UsersCoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersCoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          update: {
            args: Prisma.UsersCoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          deleteMany: {
            args: Prisma.UsersCoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersCoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersCoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersCoursesPayload>
          }
          aggregate: {
            args: Prisma.UsersCoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersCourses>
          }
          groupBy: {
            args: Prisma.UsersCoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersCoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCoursesCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCoursesCountAggregateOutputType> | number
          }
        }
      }
      Videos: {
        payload: Prisma.$VideosPayload<ExtArgs>
        fields: Prisma.VideosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          findFirst: {
            args: Prisma.VideosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          findMany: {
            args: Prisma.VideosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>[]
          }
          create: {
            args: Prisma.VideosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          createMany: {
            args: Prisma.VideosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          update: {
            args: Prisma.VideosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          deleteMany: {
            args: Prisma.VideosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.VideosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
      usersVideo: {
        payload: Prisma.$usersVideoPayload<ExtArgs>
        fields: Prisma.usersVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          findFirst: {
            args: Prisma.usersVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          findMany: {
            args: Prisma.usersVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>[]
          }
          create: {
            args: Prisma.usersVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          createMany: {
            args: Prisma.usersVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          update: {
            args: Prisma.usersVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          deleteMany: {
            args: Prisma.usersVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersVideoPayload>
          }
          aggregate: {
            args: Prisma.UsersVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersVideo>
          }
          groupBy: {
            args: Prisma.usersVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersVideoCountArgs<ExtArgs>
            result: $Utils.Optional<UsersVideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    UsersCourses: number
    Videos: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsersCourses?: boolean | CoursesCountOutputTypeCountUsersCoursesArgs
    Videos?: boolean | CoursesCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountUsersCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersCoursesWhereInput
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideosWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    UsersCourses: number
    usersVideo: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsersCourses?: boolean | UsersCountOutputTypeCountUsersCoursesArgs
    usersVideo?: boolean | UsersCountOutputTypeCountUsersVideoArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsersCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersCoursesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsersVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersVideoWhereInput
  }


  /**
   * Count Type VideosCountOutputType
   */

  export type VideosCountOutputType = {
    usersVideo: number
  }

  export type VideosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersVideo?: boolean | VideosCountOutputTypeCountUsersVideoArgs
  }

  // Custom InputTypes
  /**
   * VideosCountOutputType without action
   */
  export type VideosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideosCountOutputType
     */
    select?: VideosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideosCountOutputType without action
   */
  export type VideosCountOutputTypeCountUsersVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersVideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    total_videos: number | null
    display_order: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    total_videos: number | null
    display_order: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imgSrc: string | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    total_videos: number | null
    display_order: number | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imgSrc: string | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    total_videos: number | null
    display_order: number | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imgSrc: number
    created_by: number
    created_at: number
    updated_at: number
    total_videos: number
    display_order: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
    created_by?: true
    total_videos?: true
    display_order?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
    created_by?: true
    total_videos?: true
    display_order?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgSrc?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    total_videos?: true
    display_order?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgSrc?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    total_videos?: true
    display_order?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgSrc?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    total_videos?: true
    display_order?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    title: string
    description: string | null
    imgSrc: string | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    total_videos: number | null
    display_order: number | null
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imgSrc?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    total_videos?: boolean
    display_order?: boolean
    UsersCourses?: boolean | Courses$UsersCoursesArgs<ExtArgs>
    Videos?: boolean | Courses$VideosArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>


  export type CoursesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imgSrc?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    total_videos?: boolean
    display_order?: boolean
  }

  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsersCourses?: boolean | Courses$UsersCoursesArgs<ExtArgs>
    Videos?: boolean | Courses$VideosArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      UsersCourses: Prisma.$UsersCoursesPayload<ExtArgs>[]
      Videos: Prisma.$VideosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      imgSrc: string | null
      created_by: number | null
      created_at: Date | null
      updated_at: Date | null
      total_videos: number | null
      display_order: number | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
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
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UsersCourses<T extends Courses$UsersCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Courses$UsersCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findMany"> | Null>
    Videos<T extends Courses$VideosArgs<ExtArgs> = {}>(args?: Subset<T, Courses$VideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courses model
   */ 
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'Int'>
    readonly title: FieldRef<"Courses", 'String'>
    readonly description: FieldRef<"Courses", 'String'>
    readonly imgSrc: FieldRef<"Courses", 'String'>
    readonly created_by: FieldRef<"Courses", 'Int'>
    readonly created_at: FieldRef<"Courses", 'DateTime'>
    readonly updated_at: FieldRef<"Courses", 'DateTime'>
    readonly total_videos: FieldRef<"Courses", 'Int'>
    readonly display_order: FieldRef<"Courses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
  }

  /**
   * Courses.UsersCourses
   */
  export type Courses$UsersCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    where?: UsersCoursesWhereInput
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    cursor?: UsersCoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersCoursesScalarFieldEnum | UsersCoursesScalarFieldEnum[]
  }

  /**
   * Courses.Videos
   */
  export type Courses$VideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    where?: VideosWhereInput
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    cursor?: VideosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    full_name: string | null
    day_off: Date | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    update_at: Date | null
    isPasswordChanged: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    full_name: string | null
    day_off: Date | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    update_at: Date | null
    isPasswordChanged: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    full_name: number
    day_off: number
    email: number
    password: number
    role: number
    created_at: number
    update_at: number
    isPasswordChanged: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    full_name?: true
    day_off?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    update_at?: true
    isPasswordChanged?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    full_name?: true
    day_off?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    update_at?: true
    isPasswordChanged?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    full_name?: true
    day_off?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    update_at?: true
    isPasswordChanged?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    user_id: string | null
    name: string
    full_name: string | null
    day_off: Date | null
    email: string
    password: string | null
    role: string | null
    created_at: Date | null
    update_at: Date | null
    isPasswordChanged: boolean | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    full_name?: boolean
    day_off?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    isPasswordChanged?: boolean
    UsersCourses?: boolean | Users$UsersCoursesArgs<ExtArgs>
    usersVideo?: boolean | Users$usersVideoArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type UsersSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    full_name?: boolean
    day_off?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    isPasswordChanged?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsersCourses?: boolean | Users$UsersCoursesArgs<ExtArgs>
    usersVideo?: boolean | Users$usersVideoArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      UsersCourses: Prisma.$UsersCoursesPayload<ExtArgs>[]
      usersVideo: Prisma.$usersVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      name: string
      full_name: string | null
      day_off: Date | null
      email: string
      password: string | null
      role: string | null
      created_at: Date | null
      update_at: Date | null
      isPasswordChanged: boolean | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UsersCourses<T extends Users$UsersCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Users$UsersCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findMany"> | Null>
    usersVideo<T extends Users$usersVideoArgs<ExtArgs> = {}>(args?: Subset<T, Users$usersVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly user_id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly day_off: FieldRef<"Users", 'DateTime'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly update_at: FieldRef<"Users", 'DateTime'>
    readonly isPasswordChanged: FieldRef<"Users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.UsersCourses
   */
  export type Users$UsersCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    where?: UsersCoursesWhereInput
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    cursor?: UsersCoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersCoursesScalarFieldEnum | UsersCoursesScalarFieldEnum[]
  }

  /**
   * Users.usersVideo
   */
  export type Users$usersVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    where?: usersVideoWhereInput
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    cursor?: usersVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersVideoScalarFieldEnum | UsersVideoScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model UsersCourses
   */

  export type AggregateUsersCourses = {
    _count: UsersCoursesCountAggregateOutputType | null
    _avg: UsersCoursesAvgAggregateOutputType | null
    _sum: UsersCoursesSumAggregateOutputType | null
    _min: UsersCoursesMinAggregateOutputType | null
    _max: UsersCoursesMaxAggregateOutputType | null
  }

  export type UsersCoursesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    watched: number | null
  }

  export type UsersCoursesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    watched: number | null
  }

  export type UsersCoursesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    watched: number | null
  }

  export type UsersCoursesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    watched: number | null
  }

  export type UsersCoursesCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    watched: number
    _all: number
  }


  export type UsersCoursesAvgAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    watched?: true
  }

  export type UsersCoursesSumAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    watched?: true
  }

  export type UsersCoursesMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    watched?: true
  }

  export type UsersCoursesMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    watched?: true
  }

  export type UsersCoursesCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    watched?: true
    _all?: true
  }

  export type UsersCoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersCourses to aggregate.
     */
    where?: UsersCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersCourses to fetch.
     */
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersCourses
    **/
    _count?: true | UsersCoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersCoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersCoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersCoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersCoursesMaxAggregateInputType
  }

  export type GetUsersCoursesAggregateType<T extends UsersCoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersCourses[P]>
      : GetScalarType<T[P], AggregateUsersCourses[P]>
  }




  export type UsersCoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersCoursesWhereInput
    orderBy?: UsersCoursesOrderByWithAggregationInput | UsersCoursesOrderByWithAggregationInput[]
    by: UsersCoursesScalarFieldEnum[] | UsersCoursesScalarFieldEnum
    having?: UsersCoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCoursesCountAggregateInputType | true
    _avg?: UsersCoursesAvgAggregateInputType
    _sum?: UsersCoursesSumAggregateInputType
    _min?: UsersCoursesMinAggregateInputType
    _max?: UsersCoursesMaxAggregateInputType
  }

  export type UsersCoursesGroupByOutputType = {
    id: number
    user_id: number
    course_id: number
    watched: number | null
    _count: UsersCoursesCountAggregateOutputType | null
    _avg: UsersCoursesAvgAggregateOutputType | null
    _sum: UsersCoursesSumAggregateOutputType | null
    _min: UsersCoursesMinAggregateOutputType | null
    _max: UsersCoursesMaxAggregateOutputType | null
  }

  type GetUsersCoursesGroupByPayload<T extends UsersCoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersCoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersCoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersCoursesGroupByOutputType[P]>
            : GetScalarType<T[P], UsersCoursesGroupByOutputType[P]>
        }
      >
    >


  export type UsersCoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    watched?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Courses?: boolean | CoursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersCourses"]>


  export type UsersCoursesSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    watched?: boolean
  }

  export type UsersCoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Courses?: boolean | CoursesDefaultArgs<ExtArgs>
  }

  export type $UsersCoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersCourses"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Courses: Prisma.$CoursesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      course_id: number
      watched: number | null
    }, ExtArgs["result"]["usersCourses"]>
    composites: {}
  }

  type UsersCoursesGetPayload<S extends boolean | null | undefined | UsersCoursesDefaultArgs> = $Result.GetResult<Prisma.$UsersCoursesPayload, S>

  type UsersCoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersCoursesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCoursesCountAggregateInputType | true
    }

  export interface UsersCoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersCourses'], meta: { name: 'UsersCourses' } }
    /**
     * Find zero or one UsersCourses that matches the filter.
     * @param {UsersCoursesFindUniqueArgs} args - Arguments to find a UsersCourses
     * @example
     * // Get one UsersCourses
     * const usersCourses = await prisma.usersCourses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersCoursesFindUniqueArgs>(args: SelectSubset<T, UsersCoursesFindUniqueArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsersCourses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersCoursesFindUniqueOrThrowArgs} args - Arguments to find a UsersCourses
     * @example
     * // Get one UsersCourses
     * const usersCourses = await prisma.usersCourses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersCoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersCoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsersCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesFindFirstArgs} args - Arguments to find a UsersCourses
     * @example
     * // Get one UsersCourses
     * const usersCourses = await prisma.usersCourses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersCoursesFindFirstArgs>(args?: SelectSubset<T, UsersCoursesFindFirstArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsersCourses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesFindFirstOrThrowArgs} args - Arguments to find a UsersCourses
     * @example
     * // Get one UsersCourses
     * const usersCourses = await prisma.usersCourses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersCoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersCoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsersCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersCourses
     * const usersCourses = await prisma.usersCourses.findMany()
     * 
     * // Get first 10 UsersCourses
     * const usersCourses = await prisma.usersCourses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersCoursesWithIdOnly = await prisma.usersCourses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersCoursesFindManyArgs>(args?: SelectSubset<T, UsersCoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsersCourses.
     * @param {UsersCoursesCreateArgs} args - Arguments to create a UsersCourses.
     * @example
     * // Create one UsersCourses
     * const UsersCourses = await prisma.usersCourses.create({
     *   data: {
     *     // ... data to create a UsersCourses
     *   }
     * })
     * 
     */
    create<T extends UsersCoursesCreateArgs>(args: SelectSubset<T, UsersCoursesCreateArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsersCourses.
     * @param {UsersCoursesCreateManyArgs} args - Arguments to create many UsersCourses.
     * @example
     * // Create many UsersCourses
     * const usersCourses = await prisma.usersCourses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCoursesCreateManyArgs>(args?: SelectSubset<T, UsersCoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersCourses.
     * @param {UsersCoursesDeleteArgs} args - Arguments to delete one UsersCourses.
     * @example
     * // Delete one UsersCourses
     * const UsersCourses = await prisma.usersCourses.delete({
     *   where: {
     *     // ... filter to delete one UsersCourses
     *   }
     * })
     * 
     */
    delete<T extends UsersCoursesDeleteArgs>(args: SelectSubset<T, UsersCoursesDeleteArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsersCourses.
     * @param {UsersCoursesUpdateArgs} args - Arguments to update one UsersCourses.
     * @example
     * // Update one UsersCourses
     * const usersCourses = await prisma.usersCourses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersCoursesUpdateArgs>(args: SelectSubset<T, UsersCoursesUpdateArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsersCourses.
     * @param {UsersCoursesDeleteManyArgs} args - Arguments to filter UsersCourses to delete.
     * @example
     * // Delete a few UsersCourses
     * const { count } = await prisma.usersCourses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersCoursesDeleteManyArgs>(args?: SelectSubset<T, UsersCoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersCourses
     * const usersCourses = await prisma.usersCourses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersCoursesUpdateManyArgs>(args: SelectSubset<T, UsersCoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersCourses.
     * @param {UsersCoursesUpsertArgs} args - Arguments to update or create a UsersCourses.
     * @example
     * // Update or create a UsersCourses
     * const usersCourses = await prisma.usersCourses.upsert({
     *   create: {
     *     // ... data to create a UsersCourses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersCourses we want to update
     *   }
     * })
     */
    upsert<T extends UsersCoursesUpsertArgs>(args: SelectSubset<T, UsersCoursesUpsertArgs<ExtArgs>>): Prisma__UsersCoursesClient<$Result.GetResult<Prisma.$UsersCoursesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsersCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesCountArgs} args - Arguments to filter UsersCourses to count.
     * @example
     * // Count the number of UsersCourses
     * const count = await prisma.usersCourses.count({
     *   where: {
     *     // ... the filter for the UsersCourses we want to count
     *   }
     * })
    **/
    count<T extends UsersCoursesCountArgs>(
      args?: Subset<T, UsersCoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersCoursesAggregateArgs>(args: Subset<T, UsersCoursesAggregateArgs>): Prisma.PrismaPromise<GetUsersCoursesAggregateType<T>>

    /**
     * Group by UsersCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCoursesGroupByArgs} args - Group by arguments.
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
      T extends UsersCoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersCoursesGroupByArgs['orderBy'] }
        : { orderBy?: UsersCoursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersCoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersCourses model
   */
  readonly fields: UsersCoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersCourses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersCoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Courses<T extends CoursesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursesDefaultArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsersCourses model
   */ 
  interface UsersCoursesFieldRefs {
    readonly id: FieldRef<"UsersCourses", 'Int'>
    readonly user_id: FieldRef<"UsersCourses", 'Int'>
    readonly course_id: FieldRef<"UsersCourses", 'Int'>
    readonly watched: FieldRef<"UsersCourses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersCourses findUnique
   */
  export type UsersCoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter, which UsersCourses to fetch.
     */
    where: UsersCoursesWhereUniqueInput
  }

  /**
   * UsersCourses findUniqueOrThrow
   */
  export type UsersCoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter, which UsersCourses to fetch.
     */
    where: UsersCoursesWhereUniqueInput
  }

  /**
   * UsersCourses findFirst
   */
  export type UsersCoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter, which UsersCourses to fetch.
     */
    where?: UsersCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersCourses to fetch.
     */
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersCourses.
     */
    cursor?: UsersCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersCourses.
     */
    distinct?: UsersCoursesScalarFieldEnum | UsersCoursesScalarFieldEnum[]
  }

  /**
   * UsersCourses findFirstOrThrow
   */
  export type UsersCoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter, which UsersCourses to fetch.
     */
    where?: UsersCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersCourses to fetch.
     */
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersCourses.
     */
    cursor?: UsersCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersCourses.
     */
    distinct?: UsersCoursesScalarFieldEnum | UsersCoursesScalarFieldEnum[]
  }

  /**
   * UsersCourses findMany
   */
  export type UsersCoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter, which UsersCourses to fetch.
     */
    where?: UsersCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersCourses to fetch.
     */
    orderBy?: UsersCoursesOrderByWithRelationInput | UsersCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersCourses.
     */
    cursor?: UsersCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersCourses.
     */
    skip?: number
    distinct?: UsersCoursesScalarFieldEnum | UsersCoursesScalarFieldEnum[]
  }

  /**
   * UsersCourses create
   */
  export type UsersCoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersCourses.
     */
    data: XOR<UsersCoursesCreateInput, UsersCoursesUncheckedCreateInput>
  }

  /**
   * UsersCourses createMany
   */
  export type UsersCoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersCourses.
     */
    data: UsersCoursesCreateManyInput | UsersCoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersCourses update
   */
  export type UsersCoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersCourses.
     */
    data: XOR<UsersCoursesUpdateInput, UsersCoursesUncheckedUpdateInput>
    /**
     * Choose, which UsersCourses to update.
     */
    where: UsersCoursesWhereUniqueInput
  }

  /**
   * UsersCourses updateMany
   */
  export type UsersCoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersCourses.
     */
    data: XOR<UsersCoursesUpdateManyMutationInput, UsersCoursesUncheckedUpdateManyInput>
    /**
     * Filter which UsersCourses to update
     */
    where?: UsersCoursesWhereInput
  }

  /**
   * UsersCourses upsert
   */
  export type UsersCoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersCourses to update in case it exists.
     */
    where: UsersCoursesWhereUniqueInput
    /**
     * In case the UsersCourses found by the `where` argument doesn't exist, create a new UsersCourses with this data.
     */
    create: XOR<UsersCoursesCreateInput, UsersCoursesUncheckedCreateInput>
    /**
     * In case the UsersCourses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersCoursesUpdateInput, UsersCoursesUncheckedUpdateInput>
  }

  /**
   * UsersCourses delete
   */
  export type UsersCoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
    /**
     * Filter which UsersCourses to delete.
     */
    where: UsersCoursesWhereUniqueInput
  }

  /**
   * UsersCourses deleteMany
   */
  export type UsersCoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersCourses to delete
     */
    where?: UsersCoursesWhereInput
  }

  /**
   * UsersCourses without action
   */
  export type UsersCoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCourses
     */
    select?: UsersCoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersCoursesInclude<ExtArgs> | null
  }


  /**
   * Model Videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    display_order: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: number | null
    course_id: number | null
    display_order: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    course_id: number | null
    created_at: Date | null
    display_order: number | null
    updated_at: Date | null
    description: string | null
  }

  export type VideosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    course_id: number | null
    created_at: Date | null
    display_order: number | null
    updated_at: Date | null
    description: string | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    title: number
    url: number
    course_id: number
    created_at: number
    display_order: number
    updated_at: number
    description: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
    course_id?: true
    display_order?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
    course_id?: true
    display_order?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    course_id?: true
    created_at?: true
    display_order?: true
    updated_at?: true
    description?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    course_id?: true
    created_at?: true
    display_order?: true
    updated_at?: true
    description?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    course_id?: true
    created_at?: true
    display_order?: true
    updated_at?: true
    description?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to aggregate.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type VideosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideosWhereInput
    orderBy?: VideosOrderByWithAggregationInput | VideosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: VideosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: number
    title: string
    url: string
    course_id: number | null
    created_at: Date | null
    display_order: number | null
    updated_at: Date | null
    description: string | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends VideosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type VideosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    course_id?: boolean
    created_at?: boolean
    display_order?: boolean
    updated_at?: boolean
    description?: boolean
    Courses?: boolean | Videos$CoursesArgs<ExtArgs>
    usersVideo?: boolean | Videos$usersVideoArgs<ExtArgs>
    _count?: boolean | VideosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>


  export type VideosSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    course_id?: boolean
    created_at?: boolean
    display_order?: boolean
    updated_at?: boolean
    description?: boolean
  }

  export type VideosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courses?: boolean | Videos$CoursesArgs<ExtArgs>
    usersVideo?: boolean | Videos$usersVideoArgs<ExtArgs>
    _count?: boolean | VideosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VideosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Videos"
    objects: {
      Courses: Prisma.$CoursesPayload<ExtArgs> | null
      usersVideo: Prisma.$usersVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      url: string
      course_id: number | null
      created_at: Date | null
      display_order: number | null
      updated_at: Date | null
      description: string | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type VideosGetPayload<S extends boolean | null | undefined | VideosDefaultArgs> = $Result.GetResult<Prisma.$VideosPayload, S>

  type VideosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface VideosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Videos'], meta: { name: 'Videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {VideosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideosFindUniqueArgs>(args: SelectSubset<T, VideosFindUniqueArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VideosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideosFindUniqueOrThrowArgs>(args: SelectSubset<T, VideosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideosFindFirstArgs>(args?: SelectSubset<T, VideosFindFirstArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideosFindFirstOrThrowArgs>(args?: SelectSubset<T, VideosFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideosFindManyArgs>(args?: SelectSubset<T, VideosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Videos.
     * @param {VideosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends VideosCreateArgs>(args: SelectSubset<T, VideosCreateArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Videos.
     * @param {VideosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideosCreateManyArgs>(args?: SelectSubset<T, VideosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Videos.
     * @param {VideosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends VideosDeleteArgs>(args: SelectSubset<T, VideosDeleteArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Videos.
     * @param {VideosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideosUpdateArgs>(args: SelectSubset<T, VideosUpdateArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {VideosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideosDeleteManyArgs>(args?: SelectSubset<T, VideosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideosUpdateManyArgs>(args: SelectSubset<T, VideosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Videos.
     * @param {VideosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends VideosUpsertArgs>(args: SelectSubset<T, VideosUpsertArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideosCountArgs>(
      args?: Subset<T, VideosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosGroupByArgs} args - Group by arguments.
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
      T extends VideosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideosGroupByArgs['orderBy'] }
        : { orderBy?: VideosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Videos model
   */
  readonly fields: VideosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Courses<T extends Videos$CoursesArgs<ExtArgs> = {}>(args?: Subset<T, Videos$CoursesArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    usersVideo<T extends Videos$usersVideoArgs<ExtArgs> = {}>(args?: Subset<T, Videos$usersVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Videos model
   */ 
  interface VideosFieldRefs {
    readonly id: FieldRef<"Videos", 'Int'>
    readonly title: FieldRef<"Videos", 'String'>
    readonly url: FieldRef<"Videos", 'String'>
    readonly course_id: FieldRef<"Videos", 'Int'>
    readonly created_at: FieldRef<"Videos", 'DateTime'>
    readonly display_order: FieldRef<"Videos", 'Int'>
    readonly updated_at: FieldRef<"Videos", 'DateTime'>
    readonly description: FieldRef<"Videos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Videos findUnique
   */
  export type VideosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos findUniqueOrThrow
   */
  export type VideosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos findFirst
   */
  export type VideosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos findFirstOrThrow
   */
  export type VideosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos findMany
   */
  export type VideosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos create
   */
  export type VideosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The data needed to create a Videos.
     */
    data: XOR<VideosCreateInput, VideosUncheckedCreateInput>
  }

  /**
   * Videos createMany
   */
  export type VideosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideosCreateManyInput | VideosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Videos update
   */
  export type VideosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The data needed to update a Videos.
     */
    data: XOR<VideosUpdateInput, VideosUncheckedUpdateInput>
    /**
     * Choose, which Videos to update.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos updateMany
   */
  export type VideosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideosUpdateManyMutationInput, VideosUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideosWhereInput
  }

  /**
   * Videos upsert
   */
  export type VideosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The filter to search for the Videos to update in case it exists.
     */
    where: VideosWhereUniqueInput
    /**
     * In case the Videos found by the `where` argument doesn't exist, create a new Videos with this data.
     */
    create: XOR<VideosCreateInput, VideosUncheckedCreateInput>
    /**
     * In case the Videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideosUpdateInput, VideosUncheckedUpdateInput>
  }

  /**
   * Videos delete
   */
  export type VideosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter which Videos to delete.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos deleteMany
   */
  export type VideosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideosWhereInput
  }

  /**
   * Videos.Courses
   */
  export type Videos$CoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
  }

  /**
   * Videos.usersVideo
   */
  export type Videos$usersVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    where?: usersVideoWhereInput
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    cursor?: usersVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersVideoScalarFieldEnum | UsersVideoScalarFieldEnum[]
  }

  /**
   * Videos without action
   */
  export type VideosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
  }


  /**
   * Model usersVideo
   */

  export type AggregateUsersVideo = {
    _count: UsersVideoCountAggregateOutputType | null
    _avg: UsersVideoAvgAggregateOutputType | null
    _sum: UsersVideoSumAggregateOutputType | null
    _min: UsersVideoMinAggregateOutputType | null
    _max: UsersVideoMaxAggregateOutputType | null
  }

  export type UsersVideoAvgAggregateOutputType = {
    id: number | null
    video_id: number | null
    course_id: number | null
  }

  export type UsersVideoSumAggregateOutputType = {
    id: number | null
    video_id: number | null
    course_id: number | null
  }

  export type UsersVideoMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    video_id: number | null
    is_watched: boolean | null
    course_id: number | null
    updated_at: Date | null
  }

  export type UsersVideoMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    video_id: number | null
    is_watched: boolean | null
    course_id: number | null
    updated_at: Date | null
  }

  export type UsersVideoCountAggregateOutputType = {
    id: number
    user_id: number
    video_id: number
    is_watched: number
    course_id: number
    updated_at: number
    _all: number
  }


  export type UsersVideoAvgAggregateInputType = {
    id?: true
    video_id?: true
    course_id?: true
  }

  export type UsersVideoSumAggregateInputType = {
    id?: true
    video_id?: true
    course_id?: true
  }

  export type UsersVideoMinAggregateInputType = {
    id?: true
    user_id?: true
    video_id?: true
    is_watched?: true
    course_id?: true
    updated_at?: true
  }

  export type UsersVideoMaxAggregateInputType = {
    id?: true
    user_id?: true
    video_id?: true
    is_watched?: true
    course_id?: true
    updated_at?: true
  }

  export type UsersVideoCountAggregateInputType = {
    id?: true
    user_id?: true
    video_id?: true
    is_watched?: true
    course_id?: true
    updated_at?: true
    _all?: true
  }

  export type UsersVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersVideo to aggregate.
     */
    where?: usersVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersVideos to fetch.
     */
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usersVideos
    **/
    _count?: true | UsersVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersVideoMaxAggregateInputType
  }

  export type GetUsersVideoAggregateType<T extends UsersVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersVideo[P]>
      : GetScalarType<T[P], AggregateUsersVideo[P]>
  }




  export type usersVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersVideoWhereInput
    orderBy?: usersVideoOrderByWithAggregationInput | usersVideoOrderByWithAggregationInput[]
    by: UsersVideoScalarFieldEnum[] | UsersVideoScalarFieldEnum
    having?: usersVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersVideoCountAggregateInputType | true
    _avg?: UsersVideoAvgAggregateInputType
    _sum?: UsersVideoSumAggregateInputType
    _min?: UsersVideoMinAggregateInputType
    _max?: UsersVideoMaxAggregateInputType
  }

  export type UsersVideoGroupByOutputType = {
    id: number
    user_id: string
    video_id: number
    is_watched: boolean
    course_id: number | null
    updated_at: Date
    _count: UsersVideoCountAggregateOutputType | null
    _avg: UsersVideoAvgAggregateOutputType | null
    _sum: UsersVideoSumAggregateOutputType | null
    _min: UsersVideoMinAggregateOutputType | null
    _max: UsersVideoMaxAggregateOutputType | null
  }

  type GetUsersVideoGroupByPayload<T extends usersVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersVideoGroupByOutputType[P]>
            : GetScalarType<T[P], UsersVideoGroupByOutputType[P]>
        }
      >
    >


  export type usersVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    video_id?: boolean
    is_watched?: boolean
    course_id?: boolean
    updated_at?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Videos?: boolean | VideosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersVideo"]>


  export type usersVideoSelectScalar = {
    id?: boolean
    user_id?: boolean
    video_id?: boolean
    is_watched?: boolean
    course_id?: boolean
    updated_at?: boolean
  }

  export type usersVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Videos?: boolean | VideosDefaultArgs<ExtArgs>
  }

  export type $usersVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usersVideo"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Videos: Prisma.$VideosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      video_id: number
      is_watched: boolean
      course_id: number | null
      updated_at: Date
    }, ExtArgs["result"]["usersVideo"]>
    composites: {}
  }

  type usersVideoGetPayload<S extends boolean | null | undefined | usersVideoDefaultArgs> = $Result.GetResult<Prisma.$usersVideoPayload, S>

  type usersVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersVideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersVideoCountAggregateInputType | true
    }

  export interface usersVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usersVideo'], meta: { name: 'usersVideo' } }
    /**
     * Find zero or one UsersVideo that matches the filter.
     * @param {usersVideoFindUniqueArgs} args - Arguments to find a UsersVideo
     * @example
     * // Get one UsersVideo
     * const usersVideo = await prisma.usersVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersVideoFindUniqueArgs>(args: SelectSubset<T, usersVideoFindUniqueArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsersVideo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersVideoFindUniqueOrThrowArgs} args - Arguments to find a UsersVideo
     * @example
     * // Get one UsersVideo
     * const usersVideo = await prisma.usersVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, usersVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsersVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoFindFirstArgs} args - Arguments to find a UsersVideo
     * @example
     * // Get one UsersVideo
     * const usersVideo = await prisma.usersVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersVideoFindFirstArgs>(args?: SelectSubset<T, usersVideoFindFirstArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsersVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoFindFirstOrThrowArgs} args - Arguments to find a UsersVideo
     * @example
     * // Get one UsersVideo
     * const usersVideo = await prisma.usersVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, usersVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsersVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersVideos
     * const usersVideos = await prisma.usersVideo.findMany()
     * 
     * // Get first 10 UsersVideos
     * const usersVideos = await prisma.usersVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersVideoWithIdOnly = await prisma.usersVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersVideoFindManyArgs>(args?: SelectSubset<T, usersVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsersVideo.
     * @param {usersVideoCreateArgs} args - Arguments to create a UsersVideo.
     * @example
     * // Create one UsersVideo
     * const UsersVideo = await prisma.usersVideo.create({
     *   data: {
     *     // ... data to create a UsersVideo
     *   }
     * })
     * 
     */
    create<T extends usersVideoCreateArgs>(args: SelectSubset<T, usersVideoCreateArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsersVideos.
     * @param {usersVideoCreateManyArgs} args - Arguments to create many UsersVideos.
     * @example
     * // Create many UsersVideos
     * const usersVideo = await prisma.usersVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersVideoCreateManyArgs>(args?: SelectSubset<T, usersVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersVideo.
     * @param {usersVideoDeleteArgs} args - Arguments to delete one UsersVideo.
     * @example
     * // Delete one UsersVideo
     * const UsersVideo = await prisma.usersVideo.delete({
     *   where: {
     *     // ... filter to delete one UsersVideo
     *   }
     * })
     * 
     */
    delete<T extends usersVideoDeleteArgs>(args: SelectSubset<T, usersVideoDeleteArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsersVideo.
     * @param {usersVideoUpdateArgs} args - Arguments to update one UsersVideo.
     * @example
     * // Update one UsersVideo
     * const usersVideo = await prisma.usersVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersVideoUpdateArgs>(args: SelectSubset<T, usersVideoUpdateArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsersVideos.
     * @param {usersVideoDeleteManyArgs} args - Arguments to filter UsersVideos to delete.
     * @example
     * // Delete a few UsersVideos
     * const { count } = await prisma.usersVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersVideoDeleteManyArgs>(args?: SelectSubset<T, usersVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersVideos
     * const usersVideo = await prisma.usersVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersVideoUpdateManyArgs>(args: SelectSubset<T, usersVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersVideo.
     * @param {usersVideoUpsertArgs} args - Arguments to update or create a UsersVideo.
     * @example
     * // Update or create a UsersVideo
     * const usersVideo = await prisma.usersVideo.upsert({
     *   create: {
     *     // ... data to create a UsersVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersVideo we want to update
     *   }
     * })
     */
    upsert<T extends usersVideoUpsertArgs>(args: SelectSubset<T, usersVideoUpsertArgs<ExtArgs>>): Prisma__usersVideoClient<$Result.GetResult<Prisma.$usersVideoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsersVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoCountArgs} args - Arguments to filter UsersVideos to count.
     * @example
     * // Count the number of UsersVideos
     * const count = await prisma.usersVideo.count({
     *   where: {
     *     // ... the filter for the UsersVideos we want to count
     *   }
     * })
    **/
    count<T extends usersVideoCountArgs>(
      args?: Subset<T, usersVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersVideoAggregateArgs>(args: Subset<T, UsersVideoAggregateArgs>): Prisma.PrismaPromise<GetUsersVideoAggregateType<T>>

    /**
     * Group by UsersVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersVideoGroupByArgs} args - Group by arguments.
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
      T extends usersVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersVideoGroupByArgs['orderBy'] }
        : { orderBy?: usersVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usersVideo model
   */
  readonly fields: usersVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usersVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Videos<T extends VideosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideosDefaultArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usersVideo model
   */ 
  interface usersVideoFieldRefs {
    readonly id: FieldRef<"usersVideo", 'Int'>
    readonly user_id: FieldRef<"usersVideo", 'String'>
    readonly video_id: FieldRef<"usersVideo", 'Int'>
    readonly is_watched: FieldRef<"usersVideo", 'Boolean'>
    readonly course_id: FieldRef<"usersVideo", 'Int'>
    readonly updated_at: FieldRef<"usersVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usersVideo findUnique
   */
  export type usersVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter, which usersVideo to fetch.
     */
    where: usersVideoWhereUniqueInput
  }

  /**
   * usersVideo findUniqueOrThrow
   */
  export type usersVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter, which usersVideo to fetch.
     */
    where: usersVideoWhereUniqueInput
  }

  /**
   * usersVideo findFirst
   */
  export type usersVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter, which usersVideo to fetch.
     */
    where?: usersVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersVideos to fetch.
     */
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersVideos.
     */
    cursor?: usersVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersVideos.
     */
    distinct?: UsersVideoScalarFieldEnum | UsersVideoScalarFieldEnum[]
  }

  /**
   * usersVideo findFirstOrThrow
   */
  export type usersVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter, which usersVideo to fetch.
     */
    where?: usersVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersVideos to fetch.
     */
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersVideos.
     */
    cursor?: usersVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersVideos.
     */
    distinct?: UsersVideoScalarFieldEnum | UsersVideoScalarFieldEnum[]
  }

  /**
   * usersVideo findMany
   */
  export type usersVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter, which usersVideos to fetch.
     */
    where?: usersVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersVideos to fetch.
     */
    orderBy?: usersVideoOrderByWithRelationInput | usersVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usersVideos.
     */
    cursor?: usersVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersVideos.
     */
    skip?: number
    distinct?: UsersVideoScalarFieldEnum | UsersVideoScalarFieldEnum[]
  }

  /**
   * usersVideo create
   */
  export type usersVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a usersVideo.
     */
    data: XOR<usersVideoCreateInput, usersVideoUncheckedCreateInput>
  }

  /**
   * usersVideo createMany
   */
  export type usersVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usersVideos.
     */
    data: usersVideoCreateManyInput | usersVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersVideo update
   */
  export type usersVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a usersVideo.
     */
    data: XOR<usersVideoUpdateInput, usersVideoUncheckedUpdateInput>
    /**
     * Choose, which usersVideo to update.
     */
    where: usersVideoWhereUniqueInput
  }

  /**
   * usersVideo updateMany
   */
  export type usersVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usersVideos.
     */
    data: XOR<usersVideoUpdateManyMutationInput, usersVideoUncheckedUpdateManyInput>
    /**
     * Filter which usersVideos to update
     */
    where?: usersVideoWhereInput
  }

  /**
   * usersVideo upsert
   */
  export type usersVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the usersVideo to update in case it exists.
     */
    where: usersVideoWhereUniqueInput
    /**
     * In case the usersVideo found by the `where` argument doesn't exist, create a new usersVideo with this data.
     */
    create: XOR<usersVideoCreateInput, usersVideoUncheckedCreateInput>
    /**
     * In case the usersVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersVideoUpdateInput, usersVideoUncheckedUpdateInput>
  }

  /**
   * usersVideo delete
   */
  export type usersVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
    /**
     * Filter which usersVideo to delete.
     */
    where: usersVideoWhereUniqueInput
  }

  /**
   * usersVideo deleteMany
   */
  export type usersVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersVideos to delete
     */
    where?: usersVideoWhereInput
  }

  /**
   * usersVideo without action
   */
  export type usersVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersVideo
     */
    select?: usersVideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersVideoInclude<ExtArgs> | null
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


  export const CoursesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imgSrc: 'imgSrc',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    total_videos: 'total_videos',
    display_order: 'display_order'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    full_name: 'full_name',
    day_off: 'day_off',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    update_at: 'update_at',
    isPasswordChanged: 'isPasswordChanged'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsersCoursesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    watched: 'watched'
  };

  export type UsersCoursesScalarFieldEnum = (typeof UsersCoursesScalarFieldEnum)[keyof typeof UsersCoursesScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    course_id: 'course_id',
    created_at: 'created_at',
    display_order: 'display_order',
    updated_at: 'updated_at',
    description: 'description'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const UsersVideoScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    video_id: 'video_id',
    is_watched: 'is_watched',
    course_id: 'course_id',
    updated_at: 'updated_at'
  };

  export type UsersVideoScalarFieldEnum = (typeof UsersVideoScalarFieldEnum)[keyof typeof UsersVideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: IntFilter<"Courses"> | number
    title?: StringFilter<"Courses"> | string
    description?: StringNullableFilter<"Courses"> | string | null
    imgSrc?: StringNullableFilter<"Courses"> | string | null
    created_by?: IntNullableFilter<"Courses"> | number | null
    created_at?: DateTimeNullableFilter<"Courses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Courses"> | Date | string | null
    total_videos?: IntNullableFilter<"Courses"> | number | null
    display_order?: IntNullableFilter<"Courses"> | number | null
    UsersCourses?: UsersCoursesListRelationFilter
    Videos?: VideosListRelationFilter
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imgSrc?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    total_videos?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    UsersCourses?: UsersCoursesOrderByRelationAggregateInput
    Videos?: VideosOrderByRelationAggregateInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    title?: StringFilter<"Courses"> | string
    description?: StringNullableFilter<"Courses"> | string | null
    imgSrc?: StringNullableFilter<"Courses"> | string | null
    created_by?: IntNullableFilter<"Courses"> | number | null
    created_at?: DateTimeNullableFilter<"Courses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Courses"> | Date | string | null
    total_videos?: IntNullableFilter<"Courses"> | number | null
    display_order?: IntNullableFilter<"Courses"> | number | null
    UsersCourses?: UsersCoursesListRelationFilter
    Videos?: VideosListRelationFilter
  }, "id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imgSrc?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    total_videos?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _avg?: CoursesAvgOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
    _sum?: CoursesSumOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Courses"> | number
    title?: StringWithAggregatesFilter<"Courses"> | string
    description?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    imgSrc?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"Courses"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Courses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Courses"> | Date | string | null
    total_videos?: IntNullableWithAggregatesFilter<"Courses"> | number | null
    display_order?: IntNullableWithAggregatesFilter<"Courses"> | number | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    user_id?: StringNullableFilter<"Users"> | string | null
    name?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    day_off?: DateTimeNullableFilter<"Users"> | Date | string | null
    email?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    isPasswordChanged?: BoolNullableFilter<"Users"> | boolean | null
    UsersCourses?: UsersCoursesListRelationFilter
    usersVideo?: UsersVideoListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    full_name?: SortOrderInput | SortOrder
    day_off?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    isPasswordChanged?: SortOrderInput | SortOrder
    UsersCourses?: UsersCoursesOrderByRelationAggregateInput
    usersVideo?: usersVideoOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    day_off?: DateTimeNullableFilter<"Users"> | Date | string | null
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    isPasswordChanged?: BoolNullableFilter<"Users"> | boolean | null
    UsersCourses?: UsersCoursesListRelationFilter
    usersVideo?: UsersVideoListRelationFilter
  }, "id" | "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    full_name?: SortOrderInput | SortOrder
    day_off?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    isPasswordChanged?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    user_id?: StringNullableWithAggregatesFilter<"Users"> | string | null
    name?: StringWithAggregatesFilter<"Users"> | string
    full_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    day_off?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    isPasswordChanged?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
  }

  export type UsersCoursesWhereInput = {
    AND?: UsersCoursesWhereInput | UsersCoursesWhereInput[]
    OR?: UsersCoursesWhereInput[]
    NOT?: UsersCoursesWhereInput | UsersCoursesWhereInput[]
    id?: IntFilter<"UsersCourses"> | number
    user_id?: IntFilter<"UsersCourses"> | number
    course_id?: IntFilter<"UsersCourses"> | number
    watched?: IntNullableFilter<"UsersCourses"> | number | null
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Courses?: XOR<CoursesRelationFilter, CoursesWhereInput>
  }

  export type UsersCoursesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Courses?: CoursesOrderByWithRelationInput
  }

  export type UsersCoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersCoursesWhereInput | UsersCoursesWhereInput[]
    OR?: UsersCoursesWhereInput[]
    NOT?: UsersCoursesWhereInput | UsersCoursesWhereInput[]
    user_id?: IntFilter<"UsersCourses"> | number
    course_id?: IntFilter<"UsersCourses"> | number
    watched?: IntNullableFilter<"UsersCourses"> | number | null
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Courses?: XOR<CoursesRelationFilter, CoursesWhereInput>
  }, "id">

  export type UsersCoursesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrderInput | SortOrder
    _count?: UsersCoursesCountOrderByAggregateInput
    _avg?: UsersCoursesAvgOrderByAggregateInput
    _max?: UsersCoursesMaxOrderByAggregateInput
    _min?: UsersCoursesMinOrderByAggregateInput
    _sum?: UsersCoursesSumOrderByAggregateInput
  }

  export type UsersCoursesScalarWhereWithAggregatesInput = {
    AND?: UsersCoursesScalarWhereWithAggregatesInput | UsersCoursesScalarWhereWithAggregatesInput[]
    OR?: UsersCoursesScalarWhereWithAggregatesInput[]
    NOT?: UsersCoursesScalarWhereWithAggregatesInput | UsersCoursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsersCourses"> | number
    user_id?: IntWithAggregatesFilter<"UsersCourses"> | number
    course_id?: IntWithAggregatesFilter<"UsersCourses"> | number
    watched?: IntNullableWithAggregatesFilter<"UsersCourses"> | number | null
  }

  export type VideosWhereInput = {
    AND?: VideosWhereInput | VideosWhereInput[]
    OR?: VideosWhereInput[]
    NOT?: VideosWhereInput | VideosWhereInput[]
    id?: IntFilter<"Videos"> | number
    title?: StringFilter<"Videos"> | string
    url?: StringFilter<"Videos"> | string
    course_id?: IntNullableFilter<"Videos"> | number | null
    created_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    display_order?: IntNullableFilter<"Videos"> | number | null
    updated_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    description?: StringNullableFilter<"Videos"> | string | null
    Courses?: XOR<CoursesNullableRelationFilter, CoursesWhereInput> | null
    usersVideo?: UsersVideoListRelationFilter
  }

  export type VideosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    course_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    Courses?: CoursesOrderByWithRelationInput
    usersVideo?: usersVideoOrderByRelationAggregateInput
  }

  export type VideosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideosWhereInput | VideosWhereInput[]
    OR?: VideosWhereInput[]
    NOT?: VideosWhereInput | VideosWhereInput[]
    title?: StringFilter<"Videos"> | string
    url?: StringFilter<"Videos"> | string
    course_id?: IntNullableFilter<"Videos"> | number | null
    created_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    display_order?: IntNullableFilter<"Videos"> | number | null
    updated_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    description?: StringNullableFilter<"Videos"> | string | null
    Courses?: XOR<CoursesNullableRelationFilter, CoursesWhereInput> | null
    usersVideo?: UsersVideoListRelationFilter
  }, "id">

  export type VideosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    course_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: VideosCountOrderByAggregateInput
    _avg?: VideosAvgOrderByAggregateInput
    _max?: VideosMaxOrderByAggregateInput
    _min?: VideosMinOrderByAggregateInput
    _sum?: VideosSumOrderByAggregateInput
  }

  export type VideosScalarWhereWithAggregatesInput = {
    AND?: VideosScalarWhereWithAggregatesInput | VideosScalarWhereWithAggregatesInput[]
    OR?: VideosScalarWhereWithAggregatesInput[]
    NOT?: VideosScalarWhereWithAggregatesInput | VideosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Videos"> | number
    title?: StringWithAggregatesFilter<"Videos"> | string
    url?: StringWithAggregatesFilter<"Videos"> | string
    course_id?: IntNullableWithAggregatesFilter<"Videos"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Videos"> | Date | string | null
    display_order?: IntNullableWithAggregatesFilter<"Videos"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Videos"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Videos"> | string | null
  }

  export type usersVideoWhereInput = {
    AND?: usersVideoWhereInput | usersVideoWhereInput[]
    OR?: usersVideoWhereInput[]
    NOT?: usersVideoWhereInput | usersVideoWhereInput[]
    id?: IntFilter<"usersVideo"> | number
    user_id?: StringFilter<"usersVideo"> | string
    video_id?: IntFilter<"usersVideo"> | number
    is_watched?: BoolFilter<"usersVideo"> | boolean
    course_id?: IntNullableFilter<"usersVideo"> | number | null
    updated_at?: DateTimeFilter<"usersVideo"> | Date | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Videos?: XOR<VideosRelationFilter, VideosWhereInput>
  }

  export type usersVideoOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    video_id?: SortOrder
    is_watched?: SortOrder
    course_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Videos?: VideosOrderByWithRelationInput
  }

  export type usersVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_video_id?: usersVideoUser_idVideo_idCompoundUniqueInput
    AND?: usersVideoWhereInput | usersVideoWhereInput[]
    OR?: usersVideoWhereInput[]
    NOT?: usersVideoWhereInput | usersVideoWhereInput[]
    user_id?: StringFilter<"usersVideo"> | string
    video_id?: IntFilter<"usersVideo"> | number
    is_watched?: BoolFilter<"usersVideo"> | boolean
    course_id?: IntNullableFilter<"usersVideo"> | number | null
    updated_at?: DateTimeFilter<"usersVideo"> | Date | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Videos?: XOR<VideosRelationFilter, VideosWhereInput>
  }, "id" | "user_id_video_id">

  export type usersVideoOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    video_id?: SortOrder
    is_watched?: SortOrder
    course_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: usersVideoCountOrderByAggregateInput
    _avg?: usersVideoAvgOrderByAggregateInput
    _max?: usersVideoMaxOrderByAggregateInput
    _min?: usersVideoMinOrderByAggregateInput
    _sum?: usersVideoSumOrderByAggregateInput
  }

  export type usersVideoScalarWhereWithAggregatesInput = {
    AND?: usersVideoScalarWhereWithAggregatesInput | usersVideoScalarWhereWithAggregatesInput[]
    OR?: usersVideoScalarWhereWithAggregatesInput[]
    NOT?: usersVideoScalarWhereWithAggregatesInput | usersVideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usersVideo"> | number
    user_id?: StringWithAggregatesFilter<"usersVideo"> | string
    video_id?: IntWithAggregatesFilter<"usersVideo"> | number
    is_watched?: BoolWithAggregatesFilter<"usersVideo"> | boolean
    course_id?: IntNullableWithAggregatesFilter<"usersVideo"> | number | null
    updated_at?: DateTimeWithAggregatesFilter<"usersVideo"> | Date | string
  }

  export type CoursesCreateInput = {
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    UsersCourses?: UsersCoursesCreateNestedManyWithoutCoursesInput
    Videos?: VideosCreateNestedManyWithoutCoursesInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    UsersCourses?: UsersCoursesUncheckedCreateNestedManyWithoutCoursesInput
    Videos?: VideosUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CoursesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    UsersCourses?: UsersCoursesUpdateManyWithoutCoursesNestedInput
    Videos?: VideosUpdateManyWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    UsersCourses?: UsersCoursesUncheckedUpdateManyWithoutCoursesNestedInput
    Videos?: VideosUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type CoursesCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
  }

  export type CoursesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCreateInput = {
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    UsersCourses?: UsersCoursesCreateNestedManyWithoutUsersInput
    usersVideo?: usersVideoCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    UsersCourses?: UsersCoursesUncheckedCreateNestedManyWithoutUsersInput
    usersVideo?: usersVideoUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UsersCourses?: UsersCoursesUpdateManyWithoutUsersNestedInput
    usersVideo?: usersVideoUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UsersCourses?: UsersCoursesUncheckedUpdateManyWithoutUsersNestedInput
    usersVideo?: usersVideoUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersCoursesCreateInput = {
    watched?: number | null
    Users: UsersCreateNestedOneWithoutUsersCoursesInput
    Courses: CoursesCreateNestedOneWithoutUsersCoursesInput
  }

  export type UsersCoursesUncheckedCreateInput = {
    id?: number
    user_id: number
    course_id: number
    watched?: number | null
  }

  export type UsersCoursesUpdateInput = {
    watched?: NullableIntFieldUpdateOperationsInput | number | null
    Users?: UsersUpdateOneRequiredWithoutUsersCoursesNestedInput
    Courses?: CoursesUpdateOneRequiredWithoutUsersCoursesNestedInput
  }

  export type UsersCoursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCoursesCreateManyInput = {
    id?: number
    user_id: number
    course_id: number
    watched?: number | null
  }

  export type UsersCoursesUpdateManyMutationInput = {
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCoursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VideosCreateInput = {
    title: string
    url: string
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
    Courses?: CoursesCreateNestedOneWithoutVideosInput
    usersVideo?: usersVideoCreateNestedManyWithoutVideosInput
  }

  export type VideosUncheckedCreateInput = {
    id?: number
    title: string
    url: string
    course_id?: number | null
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
    usersVideo?: usersVideoUncheckedCreateNestedManyWithoutVideosInput
  }

  export type VideosUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Courses?: CoursesUpdateOneWithoutVideosNestedInput
    usersVideo?: usersVideoUpdateManyWithoutVideosNestedInput
  }

  export type VideosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    usersVideo?: usersVideoUncheckedUpdateManyWithoutVideosNestedInput
  }

  export type VideosCreateManyInput = {
    id?: number
    title: string
    url: string
    course_id?: number | null
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
  }

  export type VideosUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersVideoCreateInput = {
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
    Users: UsersCreateNestedOneWithoutUsersVideoInput
    Videos: VideosCreateNestedOneWithoutUsersVideoInput
  }

  export type usersVideoUncheckedCreateInput = {
    id?: number
    user_id: string
    video_id: number
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type usersVideoUpdateInput = {
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutUsersVideoNestedInput
    Videos?: VideosUpdateOneRequiredWithoutUsersVideoNestedInput
  }

  export type usersVideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    video_id?: IntFieldUpdateOperationsInput | number
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersVideoCreateManyInput = {
    id?: number
    user_id: string
    video_id: number
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type usersVideoUpdateManyMutationInput = {
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersVideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    video_id?: IntFieldUpdateOperationsInput | number
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersCoursesListRelationFilter = {
    every?: UsersCoursesWhereInput
    some?: UsersCoursesWhereInput
    none?: UsersCoursesWhereInput
  }

  export type VideosListRelationFilter = {
    every?: VideosWhereInput
    some?: VideosWhereInput
    none?: VideosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCoursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgSrc?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    total_videos?: SortOrder
    display_order?: SortOrder
  }

  export type CoursesAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    total_videos?: SortOrder
    display_order?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgSrc?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    total_videos?: SortOrder
    display_order?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgSrc?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    total_videos?: SortOrder
    display_order?: SortOrder
  }

  export type CoursesSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    total_videos?: SortOrder
    display_order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersVideoListRelationFilter = {
    every?: usersVideoWhereInput
    some?: usersVideoWhereInput
    none?: usersVideoWhereInput
  }

  export type usersVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    day_off?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    isPasswordChanged?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    day_off?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    isPasswordChanged?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    day_off?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    isPasswordChanged?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CoursesRelationFilter = {
    is?: CoursesWhereInput
    isNot?: CoursesWhereInput
  }

  export type UsersCoursesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrder
  }

  export type UsersCoursesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrder
  }

  export type UsersCoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrder
  }

  export type UsersCoursesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrder
  }

  export type UsersCoursesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    watched?: SortOrder
  }

  export type CoursesNullableRelationFilter = {
    is?: CoursesWhereInput | null
    isNot?: CoursesWhereInput | null
  }

  export type VideosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    course_id?: SortOrder
    created_at?: SortOrder
    display_order?: SortOrder
    updated_at?: SortOrder
    description?: SortOrder
  }

  export type VideosAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    display_order?: SortOrder
  }

  export type VideosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    course_id?: SortOrder
    created_at?: SortOrder
    display_order?: SortOrder
    updated_at?: SortOrder
    description?: SortOrder
  }

  export type VideosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    course_id?: SortOrder
    created_at?: SortOrder
    display_order?: SortOrder
    updated_at?: SortOrder
    description?: SortOrder
  }

  export type VideosSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    display_order?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VideosRelationFilter = {
    is?: VideosWhereInput
    isNot?: VideosWhereInput
  }

  export type usersVideoUser_idVideo_idCompoundUniqueInput = {
    user_id: string
    video_id: number
  }

  export type usersVideoCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    video_id?: SortOrder
    is_watched?: SortOrder
    course_id?: SortOrder
    updated_at?: SortOrder
  }

  export type usersVideoAvgOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    course_id?: SortOrder
  }

  export type usersVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    video_id?: SortOrder
    is_watched?: SortOrder
    course_id?: SortOrder
    updated_at?: SortOrder
  }

  export type usersVideoMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    video_id?: SortOrder
    is_watched?: SortOrder
    course_id?: SortOrder
    updated_at?: SortOrder
  }

  export type usersVideoSumOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    course_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersCoursesCreateNestedManyWithoutCoursesInput = {
    create?: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput> | UsersCoursesCreateWithoutCoursesInput[] | UsersCoursesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutCoursesInput | UsersCoursesCreateOrConnectWithoutCoursesInput[]
    createMany?: UsersCoursesCreateManyCoursesInputEnvelope
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
  }

  export type VideosCreateNestedManyWithoutCoursesInput = {
    create?: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput> | VideosCreateWithoutCoursesInput[] | VideosUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCoursesInput | VideosCreateOrConnectWithoutCoursesInput[]
    createMany?: VideosCreateManyCoursesInputEnvelope
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
  }

  export type UsersCoursesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput> | UsersCoursesCreateWithoutCoursesInput[] | UsersCoursesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutCoursesInput | UsersCoursesCreateOrConnectWithoutCoursesInput[]
    createMany?: UsersCoursesCreateManyCoursesInputEnvelope
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
  }

  export type VideosUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput> | VideosCreateWithoutCoursesInput[] | VideosUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCoursesInput | VideosCreateOrConnectWithoutCoursesInput[]
    createMany?: VideosCreateManyCoursesInputEnvelope
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersCoursesUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput> | UsersCoursesCreateWithoutCoursesInput[] | UsersCoursesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutCoursesInput | UsersCoursesCreateOrConnectWithoutCoursesInput[]
    upsert?: UsersCoursesUpsertWithWhereUniqueWithoutCoursesInput | UsersCoursesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: UsersCoursesCreateManyCoursesInputEnvelope
    set?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    disconnect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    delete?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    update?: UsersCoursesUpdateWithWhereUniqueWithoutCoursesInput | UsersCoursesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: UsersCoursesUpdateManyWithWhereWithoutCoursesInput | UsersCoursesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
  }

  export type VideosUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput> | VideosCreateWithoutCoursesInput[] | VideosUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCoursesInput | VideosCreateOrConnectWithoutCoursesInput[]
    upsert?: VideosUpsertWithWhereUniqueWithoutCoursesInput | VideosUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: VideosCreateManyCoursesInputEnvelope
    set?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    disconnect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    delete?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    update?: VideosUpdateWithWhereUniqueWithoutCoursesInput | VideosUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: VideosUpdateManyWithWhereWithoutCoursesInput | VideosUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: VideosScalarWhereInput | VideosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCoursesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput> | UsersCoursesCreateWithoutCoursesInput[] | UsersCoursesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutCoursesInput | UsersCoursesCreateOrConnectWithoutCoursesInput[]
    upsert?: UsersCoursesUpsertWithWhereUniqueWithoutCoursesInput | UsersCoursesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: UsersCoursesCreateManyCoursesInputEnvelope
    set?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    disconnect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    delete?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    update?: UsersCoursesUpdateWithWhereUniqueWithoutCoursesInput | UsersCoursesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: UsersCoursesUpdateManyWithWhereWithoutCoursesInput | UsersCoursesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
  }

  export type VideosUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput> | VideosCreateWithoutCoursesInput[] | VideosUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCoursesInput | VideosCreateOrConnectWithoutCoursesInput[]
    upsert?: VideosUpsertWithWhereUniqueWithoutCoursesInput | VideosUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: VideosCreateManyCoursesInputEnvelope
    set?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    disconnect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    delete?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    update?: VideosUpdateWithWhereUniqueWithoutCoursesInput | VideosUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: VideosUpdateManyWithWhereWithoutCoursesInput | VideosUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: VideosScalarWhereInput | VideosScalarWhereInput[]
  }

  export type UsersCoursesCreateNestedManyWithoutUsersInput = {
    create?: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput> | UsersCoursesCreateWithoutUsersInput[] | UsersCoursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutUsersInput | UsersCoursesCreateOrConnectWithoutUsersInput[]
    createMany?: UsersCoursesCreateManyUsersInputEnvelope
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
  }

  export type usersVideoCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput> | usersVideoCreateWithoutUsersInput[] | usersVideoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutUsersInput | usersVideoCreateOrConnectWithoutUsersInput[]
    createMany?: usersVideoCreateManyUsersInputEnvelope
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
  }

  export type UsersCoursesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput> | UsersCoursesCreateWithoutUsersInput[] | UsersCoursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutUsersInput | UsersCoursesCreateOrConnectWithoutUsersInput[]
    createMany?: UsersCoursesCreateManyUsersInputEnvelope
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
  }

  export type usersVideoUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput> | usersVideoCreateWithoutUsersInput[] | usersVideoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutUsersInput | usersVideoCreateOrConnectWithoutUsersInput[]
    createMany?: usersVideoCreateManyUsersInputEnvelope
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersCoursesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput> | UsersCoursesCreateWithoutUsersInput[] | UsersCoursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutUsersInput | UsersCoursesCreateOrConnectWithoutUsersInput[]
    upsert?: UsersCoursesUpsertWithWhereUniqueWithoutUsersInput | UsersCoursesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UsersCoursesCreateManyUsersInputEnvelope
    set?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    disconnect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    delete?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    update?: UsersCoursesUpdateWithWhereUniqueWithoutUsersInput | UsersCoursesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UsersCoursesUpdateManyWithWhereWithoutUsersInput | UsersCoursesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
  }

  export type usersVideoUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput> | usersVideoCreateWithoutUsersInput[] | usersVideoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutUsersInput | usersVideoCreateOrConnectWithoutUsersInput[]
    upsert?: usersVideoUpsertWithWhereUniqueWithoutUsersInput | usersVideoUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersVideoCreateManyUsersInputEnvelope
    set?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    disconnect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    delete?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    update?: usersVideoUpdateWithWhereUniqueWithoutUsersInput | usersVideoUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersVideoUpdateManyWithWhereWithoutUsersInput | usersVideoUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
  }

  export type UsersCoursesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput> | UsersCoursesCreateWithoutUsersInput[] | UsersCoursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UsersCoursesCreateOrConnectWithoutUsersInput | UsersCoursesCreateOrConnectWithoutUsersInput[]
    upsert?: UsersCoursesUpsertWithWhereUniqueWithoutUsersInput | UsersCoursesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UsersCoursesCreateManyUsersInputEnvelope
    set?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    disconnect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    delete?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    connect?: UsersCoursesWhereUniqueInput | UsersCoursesWhereUniqueInput[]
    update?: UsersCoursesUpdateWithWhereUniqueWithoutUsersInput | UsersCoursesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UsersCoursesUpdateManyWithWhereWithoutUsersInput | UsersCoursesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
  }

  export type usersVideoUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput> | usersVideoCreateWithoutUsersInput[] | usersVideoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutUsersInput | usersVideoCreateOrConnectWithoutUsersInput[]
    upsert?: usersVideoUpsertWithWhereUniqueWithoutUsersInput | usersVideoUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersVideoCreateManyUsersInputEnvelope
    set?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    disconnect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    delete?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    update?: usersVideoUpdateWithWhereUniqueWithoutUsersInput | usersVideoUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersVideoUpdateManyWithWhereWithoutUsersInput | usersVideoUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUsersCoursesInput = {
    create?: XOR<UsersCreateWithoutUsersCoursesInput, UsersUncheckedCreateWithoutUsersCoursesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersCoursesInput
    connect?: UsersWhereUniqueInput
  }

  export type CoursesCreateNestedOneWithoutUsersCoursesInput = {
    create?: XOR<CoursesCreateWithoutUsersCoursesInput, CoursesUncheckedCreateWithoutUsersCoursesInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutUsersCoursesInput
    connect?: CoursesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUsersCoursesNestedInput = {
    create?: XOR<UsersCreateWithoutUsersCoursesInput, UsersUncheckedCreateWithoutUsersCoursesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersCoursesInput
    upsert?: UsersUpsertWithoutUsersCoursesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUsersCoursesInput, UsersUpdateWithoutUsersCoursesInput>, UsersUncheckedUpdateWithoutUsersCoursesInput>
  }

  export type CoursesUpdateOneRequiredWithoutUsersCoursesNestedInput = {
    create?: XOR<CoursesCreateWithoutUsersCoursesInput, CoursesUncheckedCreateWithoutUsersCoursesInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutUsersCoursesInput
    upsert?: CoursesUpsertWithoutUsersCoursesInput
    connect?: CoursesWhereUniqueInput
    update?: XOR<XOR<CoursesUpdateToOneWithWhereWithoutUsersCoursesInput, CoursesUpdateWithoutUsersCoursesInput>, CoursesUncheckedUpdateWithoutUsersCoursesInput>
  }

  export type CoursesCreateNestedOneWithoutVideosInput = {
    create?: XOR<CoursesCreateWithoutVideosInput, CoursesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutVideosInput
    connect?: CoursesWhereUniqueInput
  }

  export type usersVideoCreateNestedManyWithoutVideosInput = {
    create?: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput> | usersVideoCreateWithoutVideosInput[] | usersVideoUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutVideosInput | usersVideoCreateOrConnectWithoutVideosInput[]
    createMany?: usersVideoCreateManyVideosInputEnvelope
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
  }

  export type usersVideoUncheckedCreateNestedManyWithoutVideosInput = {
    create?: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput> | usersVideoCreateWithoutVideosInput[] | usersVideoUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutVideosInput | usersVideoCreateOrConnectWithoutVideosInput[]
    createMany?: usersVideoCreateManyVideosInputEnvelope
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
  }

  export type CoursesUpdateOneWithoutVideosNestedInput = {
    create?: XOR<CoursesCreateWithoutVideosInput, CoursesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutVideosInput
    upsert?: CoursesUpsertWithoutVideosInput
    disconnect?: CoursesWhereInput | boolean
    delete?: CoursesWhereInput | boolean
    connect?: CoursesWhereUniqueInput
    update?: XOR<XOR<CoursesUpdateToOneWithWhereWithoutVideosInput, CoursesUpdateWithoutVideosInput>, CoursesUncheckedUpdateWithoutVideosInput>
  }

  export type usersVideoUpdateManyWithoutVideosNestedInput = {
    create?: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput> | usersVideoCreateWithoutVideosInput[] | usersVideoUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutVideosInput | usersVideoCreateOrConnectWithoutVideosInput[]
    upsert?: usersVideoUpsertWithWhereUniqueWithoutVideosInput | usersVideoUpsertWithWhereUniqueWithoutVideosInput[]
    createMany?: usersVideoCreateManyVideosInputEnvelope
    set?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    disconnect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    delete?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    update?: usersVideoUpdateWithWhereUniqueWithoutVideosInput | usersVideoUpdateWithWhereUniqueWithoutVideosInput[]
    updateMany?: usersVideoUpdateManyWithWhereWithoutVideosInput | usersVideoUpdateManyWithWhereWithoutVideosInput[]
    deleteMany?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
  }

  export type usersVideoUncheckedUpdateManyWithoutVideosNestedInput = {
    create?: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput> | usersVideoCreateWithoutVideosInput[] | usersVideoUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: usersVideoCreateOrConnectWithoutVideosInput | usersVideoCreateOrConnectWithoutVideosInput[]
    upsert?: usersVideoUpsertWithWhereUniqueWithoutVideosInput | usersVideoUpsertWithWhereUniqueWithoutVideosInput[]
    createMany?: usersVideoCreateManyVideosInputEnvelope
    set?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    disconnect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    delete?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    connect?: usersVideoWhereUniqueInput | usersVideoWhereUniqueInput[]
    update?: usersVideoUpdateWithWhereUniqueWithoutVideosInput | usersVideoUpdateWithWhereUniqueWithoutVideosInput[]
    updateMany?: usersVideoUpdateManyWithWhereWithoutVideosInput | usersVideoUpdateManyWithWhereWithoutVideosInput[]
    deleteMany?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUsersVideoInput = {
    create?: XOR<UsersCreateWithoutUsersVideoInput, UsersUncheckedCreateWithoutUsersVideoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersVideoInput
    connect?: UsersWhereUniqueInput
  }

  export type VideosCreateNestedOneWithoutUsersVideoInput = {
    create?: XOR<VideosCreateWithoutUsersVideoInput, VideosUncheckedCreateWithoutUsersVideoInput>
    connectOrCreate?: VideosCreateOrConnectWithoutUsersVideoInput
    connect?: VideosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutUsersVideoNestedInput = {
    create?: XOR<UsersCreateWithoutUsersVideoInput, UsersUncheckedCreateWithoutUsersVideoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersVideoInput
    upsert?: UsersUpsertWithoutUsersVideoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUsersVideoInput, UsersUpdateWithoutUsersVideoInput>, UsersUncheckedUpdateWithoutUsersVideoInput>
  }

  export type VideosUpdateOneRequiredWithoutUsersVideoNestedInput = {
    create?: XOR<VideosCreateWithoutUsersVideoInput, VideosUncheckedCreateWithoutUsersVideoInput>
    connectOrCreate?: VideosCreateOrConnectWithoutUsersVideoInput
    upsert?: VideosUpsertWithoutUsersVideoInput
    connect?: VideosWhereUniqueInput
    update?: XOR<XOR<VideosUpdateToOneWithWhereWithoutUsersVideoInput, VideosUpdateWithoutUsersVideoInput>, VideosUncheckedUpdateWithoutUsersVideoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersCoursesCreateWithoutCoursesInput = {
    watched?: number | null
    Users: UsersCreateNestedOneWithoutUsersCoursesInput
  }

  export type UsersCoursesUncheckedCreateWithoutCoursesInput = {
    id?: number
    user_id: number
    watched?: number | null
  }

  export type UsersCoursesCreateOrConnectWithoutCoursesInput = {
    where: UsersCoursesWhereUniqueInput
    create: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput>
  }

  export type UsersCoursesCreateManyCoursesInputEnvelope = {
    data: UsersCoursesCreateManyCoursesInput | UsersCoursesCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type VideosCreateWithoutCoursesInput = {
    title: string
    url: string
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
    usersVideo?: usersVideoCreateNestedManyWithoutVideosInput
  }

  export type VideosUncheckedCreateWithoutCoursesInput = {
    id?: number
    title: string
    url: string
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
    usersVideo?: usersVideoUncheckedCreateNestedManyWithoutVideosInput
  }

  export type VideosCreateOrConnectWithoutCoursesInput = {
    where: VideosWhereUniqueInput
    create: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput>
  }

  export type VideosCreateManyCoursesInputEnvelope = {
    data: VideosCreateManyCoursesInput | VideosCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCoursesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: UsersCoursesWhereUniqueInput
    update: XOR<UsersCoursesUpdateWithoutCoursesInput, UsersCoursesUncheckedUpdateWithoutCoursesInput>
    create: XOR<UsersCoursesCreateWithoutCoursesInput, UsersCoursesUncheckedCreateWithoutCoursesInput>
  }

  export type UsersCoursesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: UsersCoursesWhereUniqueInput
    data: XOR<UsersCoursesUpdateWithoutCoursesInput, UsersCoursesUncheckedUpdateWithoutCoursesInput>
  }

  export type UsersCoursesUpdateManyWithWhereWithoutCoursesInput = {
    where: UsersCoursesScalarWhereInput
    data: XOR<UsersCoursesUpdateManyMutationInput, UsersCoursesUncheckedUpdateManyWithoutCoursesInput>
  }

  export type UsersCoursesScalarWhereInput = {
    AND?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
    OR?: UsersCoursesScalarWhereInput[]
    NOT?: UsersCoursesScalarWhereInput | UsersCoursesScalarWhereInput[]
    id?: IntFilter<"UsersCourses"> | number
    user_id?: IntFilter<"UsersCourses"> | number
    course_id?: IntFilter<"UsersCourses"> | number
    watched?: IntNullableFilter<"UsersCourses"> | number | null
  }

  export type VideosUpsertWithWhereUniqueWithoutCoursesInput = {
    where: VideosWhereUniqueInput
    update: XOR<VideosUpdateWithoutCoursesInput, VideosUncheckedUpdateWithoutCoursesInput>
    create: XOR<VideosCreateWithoutCoursesInput, VideosUncheckedCreateWithoutCoursesInput>
  }

  export type VideosUpdateWithWhereUniqueWithoutCoursesInput = {
    where: VideosWhereUniqueInput
    data: XOR<VideosUpdateWithoutCoursesInput, VideosUncheckedUpdateWithoutCoursesInput>
  }

  export type VideosUpdateManyWithWhereWithoutCoursesInput = {
    where: VideosScalarWhereInput
    data: XOR<VideosUpdateManyMutationInput, VideosUncheckedUpdateManyWithoutCoursesInput>
  }

  export type VideosScalarWhereInput = {
    AND?: VideosScalarWhereInput | VideosScalarWhereInput[]
    OR?: VideosScalarWhereInput[]
    NOT?: VideosScalarWhereInput | VideosScalarWhereInput[]
    id?: IntFilter<"Videos"> | number
    title?: StringFilter<"Videos"> | string
    url?: StringFilter<"Videos"> | string
    course_id?: IntNullableFilter<"Videos"> | number | null
    created_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    display_order?: IntNullableFilter<"Videos"> | number | null
    updated_at?: DateTimeNullableFilter<"Videos"> | Date | string | null
    description?: StringNullableFilter<"Videos"> | string | null
  }

  export type UsersCoursesCreateWithoutUsersInput = {
    watched?: number | null
    Courses: CoursesCreateNestedOneWithoutUsersCoursesInput
  }

  export type UsersCoursesUncheckedCreateWithoutUsersInput = {
    id?: number
    course_id: number
    watched?: number | null
  }

  export type UsersCoursesCreateOrConnectWithoutUsersInput = {
    where: UsersCoursesWhereUniqueInput
    create: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput>
  }

  export type UsersCoursesCreateManyUsersInputEnvelope = {
    data: UsersCoursesCreateManyUsersInput | UsersCoursesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type usersVideoCreateWithoutUsersInput = {
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
    Videos: VideosCreateNestedOneWithoutUsersVideoInput
  }

  export type usersVideoUncheckedCreateWithoutUsersInput = {
    id?: number
    video_id: number
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type usersVideoCreateOrConnectWithoutUsersInput = {
    where: usersVideoWhereUniqueInput
    create: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput>
  }

  export type usersVideoCreateManyUsersInputEnvelope = {
    data: usersVideoCreateManyUsersInput | usersVideoCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type UsersCoursesUpsertWithWhereUniqueWithoutUsersInput = {
    where: UsersCoursesWhereUniqueInput
    update: XOR<UsersCoursesUpdateWithoutUsersInput, UsersCoursesUncheckedUpdateWithoutUsersInput>
    create: XOR<UsersCoursesCreateWithoutUsersInput, UsersCoursesUncheckedCreateWithoutUsersInput>
  }

  export type UsersCoursesUpdateWithWhereUniqueWithoutUsersInput = {
    where: UsersCoursesWhereUniqueInput
    data: XOR<UsersCoursesUpdateWithoutUsersInput, UsersCoursesUncheckedUpdateWithoutUsersInput>
  }

  export type UsersCoursesUpdateManyWithWhereWithoutUsersInput = {
    where: UsersCoursesScalarWhereInput
    data: XOR<UsersCoursesUpdateManyMutationInput, UsersCoursesUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersVideoUpsertWithWhereUniqueWithoutUsersInput = {
    where: usersVideoWhereUniqueInput
    update: XOR<usersVideoUpdateWithoutUsersInput, usersVideoUncheckedUpdateWithoutUsersInput>
    create: XOR<usersVideoCreateWithoutUsersInput, usersVideoUncheckedCreateWithoutUsersInput>
  }

  export type usersVideoUpdateWithWhereUniqueWithoutUsersInput = {
    where: usersVideoWhereUniqueInput
    data: XOR<usersVideoUpdateWithoutUsersInput, usersVideoUncheckedUpdateWithoutUsersInput>
  }

  export type usersVideoUpdateManyWithWhereWithoutUsersInput = {
    where: usersVideoScalarWhereInput
    data: XOR<usersVideoUpdateManyMutationInput, usersVideoUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersVideoScalarWhereInput = {
    AND?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
    OR?: usersVideoScalarWhereInput[]
    NOT?: usersVideoScalarWhereInput | usersVideoScalarWhereInput[]
    id?: IntFilter<"usersVideo"> | number
    user_id?: StringFilter<"usersVideo"> | string
    video_id?: IntFilter<"usersVideo"> | number
    is_watched?: BoolFilter<"usersVideo"> | boolean
    course_id?: IntNullableFilter<"usersVideo"> | number | null
    updated_at?: DateTimeFilter<"usersVideo"> | Date | string
  }

  export type UsersCreateWithoutUsersCoursesInput = {
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    usersVideo?: usersVideoCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUsersCoursesInput = {
    id?: number
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    usersVideo?: usersVideoUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUsersCoursesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsersCoursesInput, UsersUncheckedCreateWithoutUsersCoursesInput>
  }

  export type CoursesCreateWithoutUsersCoursesInput = {
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    Videos?: VideosCreateNestedManyWithoutCoursesInput
  }

  export type CoursesUncheckedCreateWithoutUsersCoursesInput = {
    id?: number
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    Videos?: VideosUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CoursesCreateOrConnectWithoutUsersCoursesInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutUsersCoursesInput, CoursesUncheckedCreateWithoutUsersCoursesInput>
  }

  export type UsersUpsertWithoutUsersCoursesInput = {
    update: XOR<UsersUpdateWithoutUsersCoursesInput, UsersUncheckedUpdateWithoutUsersCoursesInput>
    create: XOR<UsersCreateWithoutUsersCoursesInput, UsersUncheckedCreateWithoutUsersCoursesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUsersCoursesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUsersCoursesInput, UsersUncheckedUpdateWithoutUsersCoursesInput>
  }

  export type UsersUpdateWithoutUsersCoursesInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usersVideo?: usersVideoUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUsersCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usersVideo?: usersVideoUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CoursesUpsertWithoutUsersCoursesInput = {
    update: XOR<CoursesUpdateWithoutUsersCoursesInput, CoursesUncheckedUpdateWithoutUsersCoursesInput>
    create: XOR<CoursesCreateWithoutUsersCoursesInput, CoursesUncheckedCreateWithoutUsersCoursesInput>
    where?: CoursesWhereInput
  }

  export type CoursesUpdateToOneWithWhereWithoutUsersCoursesInput = {
    where?: CoursesWhereInput
    data: XOR<CoursesUpdateWithoutUsersCoursesInput, CoursesUncheckedUpdateWithoutUsersCoursesInput>
  }

  export type CoursesUpdateWithoutUsersCoursesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    Videos?: VideosUpdateManyWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateWithoutUsersCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    Videos?: VideosUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type CoursesCreateWithoutVideosInput = {
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    UsersCourses?: UsersCoursesCreateNestedManyWithoutCoursesInput
  }

  export type CoursesUncheckedCreateWithoutVideosInput = {
    id?: number
    title: string
    description?: string | null
    imgSrc?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    total_videos?: number | null
    display_order?: number | null
    UsersCourses?: UsersCoursesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CoursesCreateOrConnectWithoutVideosInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutVideosInput, CoursesUncheckedCreateWithoutVideosInput>
  }

  export type usersVideoCreateWithoutVideosInput = {
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
    Users: UsersCreateNestedOneWithoutUsersVideoInput
  }

  export type usersVideoUncheckedCreateWithoutVideosInput = {
    id?: number
    user_id: string
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type usersVideoCreateOrConnectWithoutVideosInput = {
    where: usersVideoWhereUniqueInput
    create: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput>
  }

  export type usersVideoCreateManyVideosInputEnvelope = {
    data: usersVideoCreateManyVideosInput | usersVideoCreateManyVideosInput[]
    skipDuplicates?: boolean
  }

  export type CoursesUpsertWithoutVideosInput = {
    update: XOR<CoursesUpdateWithoutVideosInput, CoursesUncheckedUpdateWithoutVideosInput>
    create: XOR<CoursesCreateWithoutVideosInput, CoursesUncheckedCreateWithoutVideosInput>
    where?: CoursesWhereInput
  }

  export type CoursesUpdateToOneWithWhereWithoutVideosInput = {
    where?: CoursesWhereInput
    data: XOR<CoursesUpdateWithoutVideosInput, CoursesUncheckedUpdateWithoutVideosInput>
  }

  export type CoursesUpdateWithoutVideosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    UsersCourses?: UsersCoursesUpdateManyWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_videos?: NullableIntFieldUpdateOperationsInput | number | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    UsersCourses?: UsersCoursesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type usersVideoUpsertWithWhereUniqueWithoutVideosInput = {
    where: usersVideoWhereUniqueInput
    update: XOR<usersVideoUpdateWithoutVideosInput, usersVideoUncheckedUpdateWithoutVideosInput>
    create: XOR<usersVideoCreateWithoutVideosInput, usersVideoUncheckedCreateWithoutVideosInput>
  }

  export type usersVideoUpdateWithWhereUniqueWithoutVideosInput = {
    where: usersVideoWhereUniqueInput
    data: XOR<usersVideoUpdateWithoutVideosInput, usersVideoUncheckedUpdateWithoutVideosInput>
  }

  export type usersVideoUpdateManyWithWhereWithoutVideosInput = {
    where: usersVideoScalarWhereInput
    data: XOR<usersVideoUpdateManyMutationInput, usersVideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type UsersCreateWithoutUsersVideoInput = {
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    UsersCourses?: UsersCoursesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUsersVideoInput = {
    id?: number
    user_id?: string | null
    name: string
    full_name?: string | null
    day_off?: Date | string | null
    email: string
    password?: string | null
    role?: string | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    isPasswordChanged?: boolean | null
    UsersCourses?: UsersCoursesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUsersVideoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsersVideoInput, UsersUncheckedCreateWithoutUsersVideoInput>
  }

  export type VideosCreateWithoutUsersVideoInput = {
    title: string
    url: string
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
    Courses?: CoursesCreateNestedOneWithoutVideosInput
  }

  export type VideosUncheckedCreateWithoutUsersVideoInput = {
    id?: number
    title: string
    url: string
    course_id?: number | null
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
  }

  export type VideosCreateOrConnectWithoutUsersVideoInput = {
    where: VideosWhereUniqueInput
    create: XOR<VideosCreateWithoutUsersVideoInput, VideosUncheckedCreateWithoutUsersVideoInput>
  }

  export type UsersUpsertWithoutUsersVideoInput = {
    update: XOR<UsersUpdateWithoutUsersVideoInput, UsersUncheckedUpdateWithoutUsersVideoInput>
    create: XOR<UsersCreateWithoutUsersVideoInput, UsersUncheckedCreateWithoutUsersVideoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUsersVideoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUsersVideoInput, UsersUncheckedUpdateWithoutUsersVideoInput>
  }

  export type UsersUpdateWithoutUsersVideoInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UsersCourses?: UsersCoursesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUsersVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_off?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPasswordChanged?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UsersCourses?: UsersCoursesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type VideosUpsertWithoutUsersVideoInput = {
    update: XOR<VideosUpdateWithoutUsersVideoInput, VideosUncheckedUpdateWithoutUsersVideoInput>
    create: XOR<VideosCreateWithoutUsersVideoInput, VideosUncheckedCreateWithoutUsersVideoInput>
    where?: VideosWhereInput
  }

  export type VideosUpdateToOneWithWhereWithoutUsersVideoInput = {
    where?: VideosWhereInput
    data: XOR<VideosUpdateWithoutUsersVideoInput, VideosUncheckedUpdateWithoutUsersVideoInput>
  }

  export type VideosUpdateWithoutUsersVideoInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Courses?: CoursesUpdateOneWithoutVideosNestedInput
  }

  export type VideosUncheckedUpdateWithoutUsersVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCoursesCreateManyCoursesInput = {
    id?: number
    user_id: number
    watched?: number | null
  }

  export type VideosCreateManyCoursesInput = {
    id?: number
    title: string
    url: string
    created_at?: Date | string | null
    display_order?: number | null
    updated_at?: Date | string | null
    description?: string | null
  }

  export type UsersCoursesUpdateWithoutCoursesInput = {
    watched?: NullableIntFieldUpdateOperationsInput | number | null
    Users?: UsersUpdateOneRequiredWithoutUsersCoursesNestedInput
  }

  export type UsersCoursesUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCoursesUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VideosUpdateWithoutCoursesInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    usersVideo?: usersVideoUpdateManyWithoutVideosNestedInput
  }

  export type VideosUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    usersVideo?: usersVideoUncheckedUpdateManyWithoutVideosNestedInput
  }

  export type VideosUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCoursesCreateManyUsersInput = {
    id?: number
    course_id: number
    watched?: number | null
  }

  export type usersVideoCreateManyUsersInput = {
    id?: number
    video_id: number
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type UsersCoursesUpdateWithoutUsersInput = {
    watched?: NullableIntFieldUpdateOperationsInput | number | null
    Courses?: CoursesUpdateOneRequiredWithoutUsersCoursesNestedInput
  }

  export type UsersCoursesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCoursesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    watched?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersVideoUpdateWithoutUsersInput = {
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Videos?: VideosUpdateOneRequiredWithoutUsersVideoNestedInput
  }

  export type usersVideoUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersVideoUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersVideoCreateManyVideosInput = {
    id?: number
    user_id: string
    is_watched: boolean
    course_id?: number | null
    updated_at?: Date | string
  }

  export type usersVideoUpdateWithoutVideosInput = {
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutUsersVideoNestedInput
  }

  export type usersVideoUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersVideoUncheckedUpdateManyWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    is_watched?: BoolFieldUpdateOperationsInput | boolean
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CoursesCountOutputTypeDefaultArgs instead
     */
    export type CoursesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoursesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideosCountOutputTypeDefaultArgs instead
     */
    export type VideosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoursesDefaultArgs instead
     */
    export type CoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoursesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCoursesDefaultArgs instead
     */
    export type UsersCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCoursesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideosDefaultArgs instead
     */
    export type VideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersVideoDefaultArgs instead
     */
    export type usersVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersVideoDefaultArgs<ExtArgs>

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
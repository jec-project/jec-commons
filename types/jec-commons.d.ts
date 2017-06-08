// Type definitions for jec-commons
// Project: JEC Commons
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-commons" {

export class SingletonError extends Error {
  constructor(classRef:any);
  getClassRef():any;
}

export class BasicDecoratorProperties implements DecoratorProperties {
    constructor();
    name: string;
    classPath: string;
    value: string;
}

export class BasicFileProperties implements FileProperties {
    constructor();
    name: string;
    path: string;
    extension: string;
    stats: FileStats;
    content: string;
    decorators: DecoratorProperties[];
}

export class DecoratorParser {
    constructor();
    private static readonly JS_PATTERN;
    private static readonly TS_PATTERN;
    private static readonly REQUIRE_PATTERN;
    private static readonly EQUAL;
    private static readonly DBL_QUOTES;
    private static getImports(file);
    static findDecorators(file: string): DecoratorProperties[];
}

export class DecoratorPropertiesBuilder {
    constructor();
    private static readonly OPEN_PARENTHESIS;
    private static readonly NEW_LINE;
    build(decorator: string, file: string, imports: ImportRef[]): DecoratorProperties;
}

export class ImportRef {
    constructor();
    ref: string;
    classPath: string;
    content: string;
}

export class ImportRefParser {
    constructor();
    private static readonly REQUIRE_PATTERN;
    private static readonly EQUAL;
    private static readonly DBL_QUOTES;
    getImports(file: string): ImportRef[];
}

export class PathStats {
    constructor(path: string);
    private _path;
    private initObj(path);
    directoriesNum: number;
    filesNum: number;
    processedFilesNum: number;
    getPath(): string;
}

export interface DecoratorProperties {
    name: string;
    classPath: string;
    value: string;
}

export interface FilePreProcessor {
    processStart(watcher: any, sourcePath: string): any;
    process(file: FileProperties, watcher: any): void;
    processComplete(watcher: any, sourcePath: string): void;
}

export interface FileProperties {
    name: string;
    path: string;
    extension: string;
    stats: FileStats;
    content: string;
    decorators: DecoratorProperties[];
}

export interface SourceFileInspector {
    setWatcher(watcher: any): void;
    getWatcher(): any;
    addProcessor(processor: FilePreProcessor): void;
    addSourcePath(path: string): void;
    inspect(): void;
}

export interface FileStats {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}

export class JcadContextError extends Error {
    constructor(message: string);
}

export abstract class AbstractDecoratorConnector implements DecoratorConnector {
    constructor(jcadReference: string, decorator: Decorator);
    protected __jcadReference: string;
    protected __decorator: Decorator;
    private initObj(jcadReference, decorator);
    getJcadReference(): string;
    getDecorator(): Decorator;
}

export class DecoratorConnectorManager implements Singleton {
    constructor();
    private static _locked;
    static getInstance(): DecoratorConnectorManager;
    private static readonly PIPE;
    private _connectorMap;
    private _id;
    private initObj();
    private buildRef(jcadRef, contextId);
    addConnector(connector: DecoratorConnector, context: JcadContext): string;
    getConnector(jcadReference: string, context: JcadContext): DecoratorConnector;
    hasConnector(jcadReference: string, context: JcadContext): boolean;
    getDecorator(jcadReference: string, context: JcadContext): Decorator;
    removeConnector(jcadReference: string, context: JcadContext): boolean;
    getId(): string;
}

export class JcadContextFactory {
    constructor();
    create(): JcadContext;
}

export class JcadContextImpl implements JcadContext {
    constructor();
    private _id;
    private initObj();
    getId(): string;
}

export class JcadContextManager implements Singleton {
    constructor();
    private static _locked;
    static getInstance(): JcadContextManager;
    private _jcadContextMap;
    private _id;
    private initObj();
    getContext(jcadReference: string): JcadContext;
    addContext(jcadReference: string, context: JcadContext): void;
    hasContext(jcadReference: string): boolean;
    removeContext(jcadReference: string): JcadContext;
    getId(): string;
}

export interface Decorator {
    decorate(target: any, ...rest: any[]): any;
}

export interface DecoratorConnector {
    getJcadReference(): string;
    getDecorator(): Decorator;
}

export interface JcadContext {
    getId(): string;
}

export class ClassLoader {
    constructor();
    loadClass(path: string): any;
}

export class EncodingFormat {
    static readonly UTF8: any;
    static readonly ASCII: any;
    static readonly LATIN1: any;
    static readonly BASE64: any;
    static readonly HEX: any;
}

export class GuidGenerator {
    constructor();
    generate(): string;
}

export interface JecContainer {
}

export class JsonLoader {
    constructor();
    encodingFormat: string;
    loadSync(path: string): Object;
    load(path: string, success: (data: any) => void, error: (err: JsonLoaderError) => void): void;
}

export class JsonLoaderError extends Error {
    constructor(message: string);
}

export interface Singleton {
    getId(): string;
}

export interface LoggerProxy {
    setLogger(logger: Logger): void;
    log(message: string, logLevel?: number): void;
}

export class AbstractLoggerProxy implements LoggerProxy {
    constructor(logContext: string);
    protected __logger: Logger;
    protected throwSingletonError(type: string): void;
    private _logContext;
    setLogger(logger: Logger): void;
    log(message: string, logLevel?: number): void;
}

export class AbstractLogger implements Logger {
    constructor();
    protected __logLevel: number;
    protected __name: string;
    protected isValidLogLevel(logLevel: number): boolean;
    getLogLevel(): number;
    setLogLevel(logLevel: number): void;
    getName(): string;
    setName(name: string): void;
    debug(marker: any): void;
    error(marker: any): void;
    info(marker: any): void;
    trace(marker: any): void;
    warn(marker: any): void;
}

export class ConsoleLogger extends AbstractLogger implements Logger {
    constructor();
    private _formatter;
    private init();
    debug(marker: any, context?: string): void;
    error(marker: any, context?: string): void;
    info(marker: any, context?: string): void;
    trace(marker: any, context?: string): void;
    warn(marker: any, context?: string): void;
    toString(): string;
}

export class DefaultLogFormatter implements LogFormatter {
    constructor();
    appender: string;
    timeFormat: string;
    format(level: string, marker: any, useAppender?: boolean, context?: string): string;
}

export interface LogFormatter {
    format(level: string, marker: any, useAppender?: boolean, context?: string): string;
}

export interface Logger {
    getLogLevel(): number;
    setLogLevel(logLevel: number): void;
    getName(): string;
    setName(mane: string): void;
    debug(marker: any, context?: string): void;
    error(marker: any, context?: string): void;
    info(marker: any, context?: string): void;
    trace(marker: any, context?: string): void;
    warn(marker: any, context?: string): void;
}

export enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    OFF = 5,
}

export class LogLevelUtil {
    constructor();
    static readonly TRACE: string;
    static readonly DEBUG: string;
    static readonly INFO: string;
    static readonly WARN: string;
    static readonly ERROR: string;
    stringTogLevel(logLevel: string): number;
    logLevelToString(level: number): string;
}

export class HttpConnectionType {
    static readonly HTTP: string;
    static readonly HTTPS: string;
}

export class HttpHeader {
    static readonly ACCEPT: string;
    static readonly CONTENT_TYPE: string;
}

export class HttpMethod {
    static readonly GET: string;
    static readonly POST: string;
    static readonly PUT: string;
    static readonly DELETE: string;
    static readonly HEAD: string;
    static readonly OPTIONS: string;
    static readonly TRACE: string;
    static readonly CONNECT: string;
}

export enum HttpStatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    DESTINATION_LOCKED = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export interface UrlPattern {
    pattern: string;
    strict: boolean;
    baseUrl: string;
    baseUrlLength: number;
}

export interface BootstrapScript {
    run(container: JecContainer): void;
}

export class Properties {
    constructor(defaults?: Properties);
    private _properties;
    private initObj(defaults?);
    propertyNames(): string[];
    getProperty(key: string): string;
    setProperty(key: string, value: string): any;
}

export class UrlStringsEnum {
    static readonly PERM_MARK: string;
    static readonly ASTERISK: string;
    static readonly MARK: string;
    static readonly ANCHOR: string;
    static readonly SLASH: string;
    static readonly SCHEME_DELIMITER: string;
    static readonly COLON: string;
    static readonly DOT: string;
    static readonly EMPTY_STRING: string;
    static readonly RELATIVE_PATH: string;
}

export class JecStringsEnum {
  static readonly SRC:string;
  static readonly WEB_APP:string;
  static readonly TS_EXTENSION:string;
  static readonly JS_EXTENSION:string;
}

}
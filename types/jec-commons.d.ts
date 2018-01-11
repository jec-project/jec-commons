/*!
 * JEC Commons Node Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-commons" {

export function CacheControl(params?: CacheControlPolicy): Function;export function StaticResource(params?: CacheControlPolicy): Function;export interface ConfigContext extends ContainerContext {    addConfig(config: JecConfig): void;    getConfigList(): JecConfig[];}export class JecConfigError extends Error {    constructor(message: string);}export enum ConfigConnectorRefs {    CACHE_CONTROL_CONNECTOR_REF = "com.jec.commons.cfg.annotations.CacheControl",    STATIC_RESOURCE_CONNECTOR_REF = "com.jec.commons.cfg.annotations.StaticResource",}export interface JecConfig {    connectorRef: string;    config: any;}export interface ContainerContext {    getStatusInfo(): any;    getDirectoryPath(): string;    getSourcePath(): string;    getLogger(): Logger;}export class SingletonError extends Error {    constructor(classRef: any);    private _classRef;    private initObj(classRef);    getClassRef(): any;}export function ContainersConfig(params: Array<ContainersConfigParams>): Function;export interface DelegatedContainer {    setDomainContainer(container: JecContainer): void;    process(callback: (err: Error | any) => void): void;}export interface DelegatedContainerBuilder {    build(container: JecContainer): DelegatedContainer;}export class ContainerConfigMessageComposer {    constructor();    compose(err: Error | any, containerCfg: ContainersConfigParams): string;}export class ContainersConfigLauncher {    constructor();    private launchContainer(containerCfg, jecContainer);    initContainers(config: Array<ContainersConfigParams>, jecContainer: JecContainer): void;}export interface ContainersConfigParams {    builder: any;    error?: string;}export interface FileStats {    dev: number;    ino: number;    mode: number;    nlink: number;    uid: number;    gid: number;    rdev: number;    size: number;    blksize: number;    blocks: number;    atime: Date;    mtime: Date;    ctime: Date;    birthtime: Date;    isFile(): boolean;    isDirectory(): boolean;    isBlockDevice(): boolean;    isCharacterDevice(): boolean;    isSymbolicLink(): boolean;    isFIFO(): boolean;    isSocket(): boolean;}export interface DecoratorProperties {    name: string;    classPath: string;    value: string;}export interface FilePreProcessor {    processStart(watcher: any, sourcePath: string): void;    process(file: FileProperties, watcher: any): void;    processComplete(watcher: any, sourcePath: string): void;}export interface FileProperties {    name: string;    path: string;    extension: string;    stats: FileStats;    content: string;    decorators: DecoratorProperties[];}export class BasicDecoratorProperties implements DecoratorProperties {    constructor();    name: string;    classPath: string;    value: string;}export class BasicFileProperties implements FileProperties {    constructor();    name: string;    path: string;    extension: string;    stats: FileStats;    content: string;    decorators: DecoratorProperties[];}export interface SourceFileInspector {    setWatcher(watcher: any): void;    getWatcher(): any;    addProcessor(processor: FilePreProcessor): void;    removeProcessor(processor: FilePreProcessor): boolean;    addSourcePath(path: string): void;    inspect(inspectMode: number): void;    clearCache(): void;}export class DecoratorParser {    constructor();    private static readonly JS_PATTERN;    private static readonly TS_PATTERN;    private static readonly PARSER;    static findDecorators(file: string): DecoratorProperties[];}export class DecoratorPropertiesBuilder {    constructor();    private static readonly OPEN_PARENTHESIS;    private static readonly NEW_LINE;    build(decorator: string, file: string, refList: Array<ImportRef>): DecoratorProperties;}export class ImportRef {    constructor();    ref: string;    classPath: string;    content: string;}export class ImportRefParser {    constructor();    private static readonly REQUIRE_PATTERN;    private static readonly EQUAL;    private static readonly DBL_QUOTES;    getImports(file: string): ImportRef[];}export enum InspectMode {    NONE = 0,    FILL_CACHE = 1,    READ_CACHE = 2,}export class InspectModeUtil {    constructor();    static readonly NONE: string;    static readonly FILL_CACHE: string;    static readonly READ_CACHE: string;    stringToInspectMode(inspectMode: string): number;    inspectModeToString(mode: number): string;}export class PathStats {    constructor(path: string);    private _path;    private initObj(path);    directoriesNum: number;    filesNum: number;    processedFilesNum: number;    getPath(): string;}export interface Decorator {    decorate(target: any, ...rest: any[]): any;}export interface DecoratorConnector {    getJcadReference(): string;    getDecorator(): Decorator;}export class JcadContextError extends Error {    constructor(message: string);}export interface JcadContext {    getId(): string;}export abstract class AbstractDecoratorConnector implements DecoratorConnector {    constructor(jcadReference: string, decorator: Decorator);    protected __jcadReference: string;    protected __decorator: Decorator;    private initObj(jcadReference, decorator);    getJcadReference(): string;    getDecorator(): Decorator;}export class DecoratorConnectorManager implements Singleton {    constructor();    private static _locked;    private static readonly GLOBAL_REF;    static getInstance(): DecoratorConnectorManager;    private static readonly PIPE;    private _connectorMap;    private _id;    private _validator;    private initObj();    private buildRef(jcadRef, contextId);    private validate(context, contextType);    addConnector(connector: DecoratorConnector, context: JcadContext): string;    getConnector(jcadReference: string, context: JcadContext): DecoratorConnector;    hasConnector(jcadReference: string, context: JcadContext): boolean;    getDecorator(jcadReference: string, context: JcadContext): Decorator;    removeConnector(jcadReference: string, context: JcadContext): boolean;    getId(): string;}export class JcadContextFactory {    constructor();    create(): JcadContext;}export class JcadContextImpl implements JcadContext {    constructor();    private _id;    private initObj();    getId(): string;}export class JcadContextManager implements Singleton {    constructor();    private static _locked;    private static readonly GLOBAL_REF;    static getInstance(): JcadContextManager;    private _jcadContextMap;    private _id;    private initObj();    getContext(jcadReference: string): JcadContext;    addContext(jcadReference: string, context: JcadContext): void;    hasContext(jcadReference: string): boolean;    removeContext(jcadReference: string): JcadContext;    getId(): string;}export class JcadValidator {    constructor();    validateContext(context: any, contextType: string): void;}export interface ClassLoader {    loadClass(path: string): any;}export class JsonLoaderError extends Error {    constructor(message: string);}export interface GuidGenerator {    generate(): string;}export interface JecContainer {    getLogger(): Logger;    getLocale(): Locale;}export interface JsonLoader {    encodingFormat: string;    loadSync(path: string): any;    load(path: string, success: (data: any) => void, error: (err: JsonLoaderError) => void): void;}export class Locale {    constructor();    private _language;    private _script;    private _region;    getLanguage(): string;    setLanguage(language: string): void;    getScript(): string;    setScript(script: string): void;    getRegion(): string;    setRegion(region: string): void;    toString(): string;}export enum PrimitiveType {    UNDEFINED = "undefined",    NULL = "object",    BOOLEAN = "boolean",    NUMBER = "number",    STRING = "string",    SYMBOL = "symbol",    FUNCTION = "function",    OBJECT = "object",}export interface Singleton {    getId(): string;}export class DefaultClassLoader implements ClassLoader {    constructor();    loadClass(path: string): any;}export enum EncodingFormat {    UTF8 = "utf8",    ASCII = "ascii",    LATIN1 = "latin1",    BASE64 = "base64",    HEX = "hex",}export class GuidGeneratorBase implements GuidGenerator {    constructor();    generate(): string;}export class LocaleBuilder {    constructor();    private _language;    private _script;    private _region;    setLanguage(language: string): LocaleBuilder;    setScript(script: string): LocaleBuilder;    setRegion(region: string): LocaleBuilder;    clear(): void;    build(): Locale;}export abstract class AbstractLogger implements Logger {    constructor();    protected __logLevel: number;    protected __name: string;    protected isValidLogLevel(logLevel: number): boolean;    getLogLevel(): number;    setLogLevel(logLevel: number): void;    getName(): string;    setName(name: string): void;    debug(marker: any): void;    error(marker: any): void;    info(marker: any): void;    trace(marker: any): void;    warn(marker: any): void;}export class ConsoleLogger extends AbstractLogger implements Logger {    constructor();    private _formatter;    private init();    debug(marker: any, context?: string): void;    error(marker: any, context?: string): void;    info(marker: any, context?: string): void;    trace(marker: any, context?: string): void;    warn(marker: any, context?: string): void;    toString(): string;}export class DefaultLogFormatter implements LogFormatter {    constructor();    appender: string;    timeFormat: string;    format(level: string, marker: any, useAppender?: boolean, context?: string): string;}export interface LogFormatter {    format(level: string, marker: any, useAppender?: boolean, context?: string): string;}export interface Logger {    getLogLevel(): number;    setLogLevel(logLevel: number): void;    getName(): string;    setName(mane: string): void;    debug(marker: any, context?: string): void;    error(marker: any, context?: string): void;    info(marker: any, context?: string): void;    trace(marker: any, context?: string): void;    warn(marker: any, context?: string): void;}export enum LogLevel {    TRACE = 0,    DEBUG = 1,    INFO = 2,    WARN = 3,    ERROR = 4,    OFF = 5,}export class AbstractLoggerProxy implements LoggerProxy {    constructor(logContext: string);    protected __logger: Logger;    protected throwSingletonError(classRef: any): void;    private _logContext;    getLogger(): Logger;    setLogger(logger: Logger): void;    getLogContext(): string;    log(message: string, logLevel?: number): void;}export interface LoggerProxy {    setLogger(logger: Logger): void;    getLogger(): Logger;    getLogContext(): string;    log(message: string, logLevel?: number): void;}export enum LogLevelString {    TRACE = "TRACE",    DEBUG = "DEBUG",    INFO = "INFO",    WARN = "WARN",    ERROR = "ERROR",}export class LogLevelUtil {    constructor();    stringTogLevel(logLevel: string): number;    logLevelToString(level: number): string;}export interface CacheControlPolicy {    urlPattern: string;    mustRevalidate?: boolean;    noCache?: boolean;    noStore?: boolean;    noTransform?: boolean;    isPublic?: boolean;    isPrivate?: boolean;    proxyRevalidate?: boolean;    maxAge?: number;    sMaxage?: number;}export enum HttpConnectionType {    HTTP = "http",    HTTPS = "https",}export enum HttpHeader {    ACCEPT = "Accept",    ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin",    CACHE_CONTROL = "Cache-Control",    CONTENT_TYPE = "Content-Type",    X_POWERED_BY = "X-Powered-By",}export interface HttpHeaderParam {    header: string;    value: any;}export enum HttpMethod {    GET = "GET",    POST = "POST",    PUT = "PUT",    DELETE = "DELETE",    HEAD = "HEAD",    OPTIONS = "OPTIONS",    TRACE = "TRACE",    CONNECT = "CONNECT",}export enum HttpStatusCode {    CONTINUE = 100,    SWITCHING_PROTOCOLS = 101,    PROCESSING = 102,    OK = 200,    CREATED = 201,    ACCEPTED = 202,    NON_AUTHORITATIVE_INFORMATION = 203,    NO_CONTENT = 204,    RESET_CONTENT = 205,    PARTIAL_CONTENT = 206,    MULTI_STATUS = 207,    ALREADY_REPORTED = 208,    IM_USED = 226,    MULTIPLE_CHOICES = 300,    MOVED_PERMANENTLY = 301,    FOUND = 302,    SEE_OTHER = 303,    NOT_MODIFIED = 304,    USE_PROXY = 305,    TEMPORARY_REDIRECT = 307,    PERMANENT_REDIRECT = 308,    BAD_REQUEST = 400,    UNAUTHORIZED = 401,    PAYMENT_REQUIRED = 402,    FORBIDEN = 403,    NOT_FOUND = 404,    METHOD_NOT_ALLOWED = 405,    NOT_ACCEPTABLE = 406,    PROXY_AUTHENTICATION_REQUIRED = 407,    REQUEST_TIMEOUT = 408,    CONFLICT = 409,    GONE = 410,    LENGTH_REQUIRED = 411,    PRECONDITION_FAILED = 412,    PAYLOAD_TOO_LARGE = 413,    URI_TOO_LONG = 414,    UNSUPPORTED_MEDIA_TYPE = 415,    REQUESTED_RANGE_NOT_SATISFIABLE = 416,    EXPECTATION_FAILED = 417,    I_AM_A_TEAPOT = 418,    DESTINATION_LOCKED = 421,    UNPROCESSABLE_ENTITY = 422,    LOCKED = 423,    FAILED_DEPENDENCY = 424,    UPGRADE_REQUIRED = 426,    PRECONDITION_REQUIRED = 428,    TOO_MANY_REQUESTS = 429,    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,    UNAVAILABLE_FOR_LEGAL_REASONS = 451,    INTERNAL_SERVER_ERROR = 500,    NOT_IMPLEMENTED = 501,    BAD_GATEWAY = 502,    SERVICE_UNAVAILABLE = 503,    GATEWAY_TIMEOUT = 504,    HTTP_VERSION_NOT_SUPPORTED = 505,    VARIANT_ALSO_NEGOTIATES = 506,    INSUFFICIENT_STORAGE = 507,    LOOP_DETECTED = 508,    NOT_EXTENDED = 510,    NETWORK_AUTHENTICATION_REQUIRED = 511,}export interface UrlPattern {    pattern: string;    strict: boolean;    baseUrl: string;    baseUrlLength: number;}export interface ScheduledParams {    cron?: string;    fixedDelay?: number;    fixedRate?: number;    initialDelay?: number;}export function Scheduled(params?: ScheduledParams): Function;export class SchedulingError extends Error {    constructor(message: string);}export enum SchedulingConnectorRefs {    SCHEDULED_CONNECTOR_REF = "com.jec.commons.scheduling.annotations.Scheduled",}export class ScheduledParamsValidator {    static validate(params: ScheduledParams): void;}export abstract class AbstractBootstrapScript implements BootstrapScript {    constructor();    protected __priority: number;    run(container: JecContainer): void;    getPriority(): number;    setPriority(priority: number): void;}export function Bootstrap(params?: BootstrapParams): Function;export interface BootstrapParams {    priority: number;}export interface BootstrapScript {    run(container: JecContainer): void;    getPriority(): number;    setPriority(priority: number): void;}export interface BootstrapContext extends ContainerContext {    addScript(script: BootstrapScript): void;    getScriptList(): BootstrapScript[];}export class BootstrapError extends Error {    constructor(message: string);}export enum BootstrapConnectorRefs {    BOOTSTRAP_CONNECTOR_REF = "com.jec.commons.startup.annotations.Bootstrap",}export class JecStringsEnum {    static readonly SRC: string;    static readonly WEB_APP: string;    static readonly TS_EXTENSION: string;    static readonly JS_EXTENSION: string;}export class Properties {    constructor(defaults?: Properties);    private _properties;    private initObj(defaults?);    propertyNames(): string[];    getProperty(key: string): string;    setProperty(key: string, value: string): any;}export class UrlStringsEnum {    static readonly PERM_MARK: string;    static readonly ASTERISK: string;    static readonly MARK: string;    static readonly ANCHOR: string;    static readonly SLASH: string;    static readonly SCHEME_DELIMITER: string;    static readonly COLON: string;    static readonly DOT: string;    static readonly EMPTY_STRING: string;    static readonly RELATIVE_PATH: string;}}
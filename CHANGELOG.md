# JEC Commons Project: Update Release Notes

<a name="jec-commons-1.1.8"></a>
## **1.1.8** (2017-12-26)

### Bug Fixes

### Features

- Documentation improvements
- **@Scheduled**: adding annotations support for scheduling tasks
- Classes that define static constants have been replaced by string based Enums
- **`LogLevelUtil` refactoring**: string constants have been added to the new `LogLevelString` Enum and both classes have been moved into the `jec.commons.logging.utils` package
- Adding the new `facade` package to facilitate development of external frameworks
- **BeanManager**: adding the interface responsible for management of beans 
- **Locale**: adding the new locale API 
- **GuidGenerator**: the `GuidGenerator` class has been refactored into an interface
- **JsonLoader**: the `JsonLoader` class has been refactored into an interface
- **ClassLoader**: the `ClassLoader` class has been refactored into an interface

<a name="jec-commons-1.1.7"></a>
## **1.1.7** (2017-09-06)

### Bug Fixes

### Features

- **HttpHeader**: adding new constants to the `HttpHeader` class
- **HttpHeaderParam**: new interface for manipulating HTTP headers

<a name="jec-commons-1.1.6"></a>
## **1.1.6** (2017-08-20)

### Bug Fixes

- **postinstall**: removing the post install script

### Features

- **dist**: adding binaries to the `dist` folder

<a name="jec-commons-1.1.5"></a>
## **1.1.5** (2017-08-20)

### Bug Fixes

### Features

- Dependencies upgrade

<a name="jec-commons-1.1.4"></a>
## **1.1.4** (2017-08-20)

### Bug Fixes

- Fixing peer dependencies for GlassCat alpha releases integration

### Features

<a name="jec-commons-1.1.3"></a>
## **1.1.3** (2017-08-19)

### Bug Fixes

### Features

- **build**: adding build script to npm install process for GlassCat instal optimisation
- **index**: refactoring the module index
- **@Bootstrap**: adding the new `@Bootstrap` decorator as specified by JEC
- **InspectMode**: adding the `inspectMode` parameter to the `inspect()` method defined by the `SourceFileInspector` interface. Valid values are constants of the `InspectMode` enum.
- **SourceFileInspector.clearCache()**: adding the `clearCache()` method to the `SourceFileInspector` interface

<a name="jec-commons-1.1.2"></a>
## **1.1.2** (2017-07-14)

### Bug Fixes

### Features

- **Gruntfile**: adding support for types generation
- **JcadValidator**: the `JcadValidator` class provides additional validation features for the `DecoratorConnectorManager` singleton

<a name="jec-commons-1.1.1"></a>
## **1.1.1** (2017-06-05)

### Bug Fixes

### Features

- **JecContainer**: the `JecContainer` interface is the marker interface for all JEC containers
- **startup**: the `startup` package contains the API for bootstrapping JEC applications

This release provides many tests improvements.

<a name="jec-commons-1.1.0"></a>
## **1.1.0** (2017-06-03)

### Bug Fixes

### Features

This is an important release which definitely breaks dependency with the Node.js API.

- **FileStats**: the `fs.Stats` interface has been removed an replaced by the new `FileStats` interface
- **FilePropertiesBuilder**: the `com.jec.commons.files.reflec.utils.FilePropertiesBuilder` class has been removed and is now a part of the `jec-commons-node` module
- **WalkPathUtil**: the `com.jec.commons.files.reflec.utils.WalkPathUtil` class has been removed and is now a part of the `jec-commons-node` module

<a name="jec-commons-1.0.3"></a>
## **1.0.3** (2017-05-20)

### Bug Fixes

### Features

- **singleton**: singleton internal declarations improvement.

<a name="jec-commons-1.0.2"></a>
## **1.0.2** (2017-05-17)

### Bug Fixes

- **missing types**: adding missing types for the JcadContextManager and DecoratorConnectorManager classes.

### Features

<a name="jec-commons-1.0.1"></a>
## **1.0.1** (2017-05-17)

### Bug Fixes

### Features

- **GuidGenerator**: a helper class that provides a common API for generating Globally Unique Identifiers (GUID) in JEC modules.
- **Singleton**: a new interface that can be used for detecting singleton issues due to the [Node.js Module Caching Caveats](https://nodejs.org/api/modules.html#modules_module_caching_caveats)

<a name="jec-commons-1.0.0"></a>
## **1.0.0** (2017-05-16)

### Bug Fixes

- **Module Caching Caveats**: the JCAD registry API has been redesigned to prevent singleton issues due to the [Node.js Module Caching Caveats](https://nodejs.org/api/modules.html#modules_module_caching_caveats)

### Features

- First stable release

<a name="jec-commons-0.9.0"></a>
## **0.9.0** (2017-05-14)

### Bug Fixes

### Features

- Initial release of the JEC Commons module
- **exceptions**: contains JEC error classes
- **files**: contains the file preprocessing API
- **jcad**: contains the JavaScript Connector API for Descriptors *(JCAD)*
- **lang**: contains the JEC core classes
- **lang**: contains the JEC logging API
- **net**: contains the classes for implementing networking applications
- **util**: contains JEC utilities
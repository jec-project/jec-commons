# JEC Commons Project: Update Release Notes

<a name="jec-commons-1.1.3"></a>
## **1.1.3** (2017-08-19)

### Bug Fixes

### Features

- **build**: adding build script to npm install process for GlassCat instal optimisation
- **index**: refactoring the module index
- **@Bootstrap**: adding the new `@Bootstrap` decorator as specified by JEC
- **InspectMode**: adding the `inspectMode` parameter to the `inspect()` method defined by the `SourceFileInspector` interface. Valid values are constants of the `InspectMode` enum.

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
# JEC Commons Project: Update Release Notes

<a name="jec-commons-1.0.1"></a>
## **1.0.1** (2017-05-17)

### Bug Fixes

### Features

- **GuidGenerator:** a helper class that provides a common API for generating Globally Unique Identifiers (GUID) in JEC modules.
- **Singleton:** a new interface that can be used for detecting singleton issues due to the [Node.js Module Caching Caveats](https://nodejs.org/api/modules.html#modules_module_caching_caveats)

<a name="jec-commons-1.0.0"></a>
## **1.0.0** (2017-05-16)

### Bug Fixes

- **Module Caching Caveats:** the JCAD registry API has been redesigned to prevent singleton issues due to the [Node.js Module Caching Caveats](https://nodejs.org/api/modules.html#modules_module_caching_caveats)

### Features

- First stable release

<a name="jec-commons-0.9.0"></a>
## **0.9.0** (2017-05-14)

### Bug Fixes

### Features

- Initial release of the JEC Commons module
- **exceptions:** contains JEC error classes
- **files:** contains the file preprocessing API
- **jcad:** contains the JavaScript Connector API for Descriptors *(JCAD)*
- **lang:** contains the JEC core classes
- **lang:** contains the JEC logging API
- **net:** contains the classes for implementing networking applications
- **util:** contains JEC utilities
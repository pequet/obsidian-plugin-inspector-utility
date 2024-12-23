# Obsidian Plugin Inspector Utility

## Overview

This utility lets you inspect the exposed methods and API endpoints of other Obsidian plugins. It provides developers with a structured way to access and analyze these plugin APIs, aiding in plugin development and interoperability.

## Features

* **Plugin Inspection**: Retrieve and analyze details about installed Obsidian plugins.
* **Extensible**: Designed to be easily extended with more advanced inspection features.

## Installation

This is essentially a single-file utility designed to be integrated into Obsidian plugin development workflows. You can utilize it directly by exposing the main function as an API endpoint of your plugin. 

## Usage

For instance, from your browser console:

```javascript
const pluginName = 'plugin-name';
window.app.plugins.plugins['your-plugin-name'].api.v1.inspectPluginApi(pluginName); 
```

## License

This plugin is for educational purposes only, and there is no guarantee that it does what it is supposed to do.

## Support

If you found it useful, you can buy me a coffee: https://buymeacoffee.com/pequet


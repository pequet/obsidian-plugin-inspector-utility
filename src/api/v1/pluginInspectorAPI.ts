import { App } from 'obsidian';

declare const app: App;  

/**
 *  █  █  Plugin Inspector Utility
 *  ████  Version: 1.0.0
 *  █  █  Author:  Benjamin Pequet
 *        Github:  https://github.com/pequet
 *
 * @file pluginInspectorAPI.ts
 * @description A utility function to inspect the API of other Obsidian plugins. 
 *              This function aids in plugin development.
 *
 * @license
 * These files are provided for educational purposes only. Collaboration is welcome.
 *
 * @changelog
 * 1.0.0 
 * - Initial release
 *
 * **Usage:**
 * 
 * To inspect the "plugin-name" plugin (e.g., "dataview") from your 
 * Obsidian console (`Ctrl+Shift+I` or `Cmd+Option+I`), use this 
 * pattern, adjusting paths as necessary for your plugin's structure.
 * 
 * ```javascript
 * const pluginName = 'plugin-name';
 * window.app.plugins.plugins['your-plugin-name'].api.v1.inspectPluginApi(pluginName); 
 * // Example for Dataview plugin:
 * // window.app.plugins.plugins['your-plugin-name'].api.v1.inspectPluginApi('dataview'); 
 * ```
 *
 * This will print a detailed log to your console showing the available methods on the specified plugin's API.  The function handles both flat and nested API structures.
 */
export async function pluginInspectorFromAPI(pluginName: string) {
   console.log(`🕵️‍♀️ Inspecting API for plugin: ${pluginName}...`);

   // Check plugins object
   const plugins = (app as any).plugins;
   console.log('📦 plugins object:', plugins);

   // Check specified plugin
   const plugin = plugins.plugins[pluginName];
   console.log(`🔌 Plugin '${pluginName}':`, plugin);

   if (!plugin) {
       console.error(`🙅 Plugin '${pluginName}' not found.`);
       return;
   }

   // Check api property
   const pluginApi = plugin.api;
   console.log(`🛠️ Plugin '${pluginName}' API:`, pluginApi);

   if (!pluginApi) {
       console.error(`🙅 Plugin '${pluginName}' has no API exposed.`);
       return;
   }

   // List available methods
   const availableMethods = Object.getOwnPropertyNames(pluginApi);
   console.log(`⚙️ Available methods on '${pluginName}.api':`, availableMethods);

   //Further inspection if API is nested (e.g., dataview's api.v1)
   if(typeof pluginApi === 'object'){
       for(const key in pluginApi){
           if(typeof pluginApi[key] === 'object'){
               const nestedMethods = Object.getOwnPropertyNames(pluginApi[key]);
               console.log(`⚙️ Available methods on '${pluginName}.api.${key}':`, nestedMethods);
           }
       }
   }
}
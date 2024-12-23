export interface EnhancedSamplePluginAPI {
    v1: {
        pluginInspectorFromAPI: (pluginName: string) => Promise<void>;
    };
}

declare module "obsidian" {
    interface Plugin {
        api?: EnhancedSamplePluginAPI;
    }
}

# package manifests (umbraco-package.json)

[The Offical umbraco docs](https://docs.umbraco.com/umbraco-backoffice/tutorials/creating-a-custom-dashboard) Show you how you can define all your elements (dashboards, property edirors, sections, etc) in the umbraco-package.json file.

For the purpose of the package template we are only using the `umbraco-package.json` file to define an `entrypoint`

```json
{
    "$schema": "../umbraco-package-schema.json",
    "name": "mypackage",
    "id": "mypackage",
    "version": "0.1.0",
    "allowTelemetry": true,
    "extensions": [
        {
            "name": "mypackage.entrypoint",
            "alias": "mypackage.EntryPoint",
            "type": "entryPoint",
            "js": "/app_plugins/mypackage/assets.js"
        }
    ]
}
```
This file is in the `assets/public` folder so is copied to to the`wwwroot/app_plugins/packagename` folder when the assets are built.

by using an entry point we are defining all our other elements in typescript, this is slightly better long term because all our assets will be subject to the typescript compiler so we should catch errors as part of the build. 

## entry point. 
In Umbraco an entry point script is ran when the back office is initialized when the `onInit` method is called. 

```ts
export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    
    // register them here. 
    extensionRegistry.registerMany(manifests);
};
```

in the default example here we register any manifests we might have already defined, and if the base template we have defined a dashboard manifest. 

```ts
import { manifests as dashboardManifests } from './dashboards/manifest.ts';

const manifests: Array<ManifestTypes> = [
    ...dashboardManifests
];
```

but you might add others such as sections or trees.

```ts
/ dashboards..
import { manifests as dashboardManifests } from './dashboard/manifest.ts';
import { manifests as sectionManifests } from './section/section.ts';

const manifests: Array<ManifestTypes> = [
    ...dashboardManifests,
    ...sectionManifests
]
```

this makes your entry point file the main point where you add new things to your package. and you don't need to alter the umbraco-package.json file again. 


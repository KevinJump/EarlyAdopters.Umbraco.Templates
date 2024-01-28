# Dashboard 

[The offical docs have details on how to create a dashboard](https://docs.umbraco.com/umbraco-backoffice/tutorials/creating-a-custom-dashboard).

These docs talk about the diffrences when using entry points to define the manifests for your dashboard. 

## Manifest

When using the entry point you need to define your manifest within a typescript file. 

```ts
import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

import './dashboard.element.js';

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'mypackage',
        alias: 'mypackage.dashboard',
        elementName: 'mypackage-dashboard',
        weight: -10,
        meta: {
            label: 'MyPackage',
            pathname: 'mypackage'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: 'Umb.Section.Content'
            }
        ]
    }
]

export const manifests = [...dashboards];
```

our manifest.ts for the dashboards defines the dashobard entry (much like it would in a umbraco-package.json file).

We then export the manifests array, so it can be used in our entry point script.

## Dashboard Element

At this point our dashboard is very much like the default documentation dashboard - defining a box, and a title so we can show it in the back office. 

```ts
import { LitElement, html, css } from "lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { customElement, property } from "@umbraco-cms/backoffice/external/lit";

@customElement('mypackage-dashboard')
export class MyPackageDashboard extends UmbElementMixin(LitElement) {

    constructor() {
        super();
    }

    @property()
    title = 'MyPackage dashboard'

    render() {
        return html`
            <uui-box headline="${this.title}">
                dashboard content goes here
            </uui-box>
        `
    }

    static styles = css`
        :host {
            display: block;
            padding: 20px;
        }
    `
}

declare global {
    interface HtmlElementTagNameMap {
        'mypackage-dashboard': MyPackageDashboard
    }
}
```
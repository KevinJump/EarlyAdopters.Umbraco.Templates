# Sections

Sections in Umbraco define the top level areas for a site. (the top nav bar. )

Adding a section in the backoffice isn't to complex (adding all the stuff underneath might be!)

## Manifest

Here we have defined a section giving it a name and label.

> There is not element code for a dashboard. the config is enough for it to appear

```ts
import type { ManifestDashboard, ManifestSection } from '@umbraco-cms/backoffice/extension-registry';

const sectionAlias = 'mypackage.section';

const section: ManifestSection = {
    type: 'section',
    alias: sectionAlias,
    name: 'my package section',
    weight: 1000,
    meta: {
        label: 'mypackage',
        pathname: 'mypackage.section'
    },
};
```

we can also add a dashboard to our section by defining it here (the value in conditions makes it appear in the section.)

```ts
import './section.dashboard.ts';

const dashboard: ManifestDashboard = {
    type: 'dashboard',
    name: 'mypackagessectiondashboard',
    alias: 'mypackage.section.dashboard',
    elementName: 'mypackage-section-dashboard',
    weight: 10,
    meta: {
        label: 'mypackagesection',
        pathname: 'mypackage.section.dashboard'
    },
    conditions: [
        {
            alias: 'Umb.Condition.SectionAlias',
            match: sectionAlias
        }
    ]
}
```
We could re-use the other dashboard entry, and add multiple conditions, but for simplicity, we have seperated it out here.
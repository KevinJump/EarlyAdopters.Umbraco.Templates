import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'mypackage',
        alias: 'mypackage.dashboard',
        elementName: 'mypackage-dashboard',
        js: ()=> import('./dashboard.element.js'),
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
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


export default MyPackageDashboard;

declare global {
    interface HtmlElementTagNameMap {
        'mypackage-dashboard': MyPackageDashboard
    }
}
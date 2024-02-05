import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";

@customElement('mypackage__1-dashboard')
export class MyPackage__1Dashboard extends UmbElementMixin(LitElement) {

    constructor() {
        super();
    }

    @property()
    title = 'MyPackage.1 dashboard'

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


export default MyPackage__1Dashboard;

declare global {
    interface HtmlElementTagNameMap {
        'MyPackage.1-dashboard': MyPackage__1Dashboard
    }
}
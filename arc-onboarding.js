/**
@license
Copyright 2019 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-icon/iron-icon.js';
import '../../@advanced-rest-client/arc-icons/arc-icons.js';
import '../../@polymer/paper-button/paper-button.js';
import '../../@polymer/iron-image/iron-image.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
import './onboarding-tutorial.js';
import './onboarding-page.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
/**
`<arc-onboarding>` Onboarding tutorial for the ARC

### Example
```
<arc-onboarding></arc-onboarding>
```

### Styling
`<arc-onboarding>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--arc-onboarding` | Mixin applied to the element | `{}`

@group UI Elements
@element arc-onboarding
@demo demo/index.html
*/
class ArcOnboarding extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      @apply --arc-onboarding;
    }

    .welcome-message {
      @apply --layout-vertical;
      @apply --layout-center-center;
    }

    .c1 {
      @apply --tutorial-font;
      @apply --paper-font-headline;
    }

    .c2 {
      @apply --tutorial-font;
      @apply --paper-font-display3;
    }

    .c3 {
      @apply --tutorial-font;
      @apply --paper-font-headline;
    }

    .raml-icon {
      color: #66c4e8;
    }

    .legal-info {
      font-size: 14px;
      color: var(--arc-onboarding-legal-info-color, rgba(0, 0, 0, 0.57));
      margin-top: 40px;
    }

    a {
      @apply --arc-link;
    }
    </style>
    <onboarding-tutorial auto="" id="onboarding13" opened="{{opened}}" delay="[[delay]]" with-backdrop="">
      <div class="welcome-message">
        <p class="c1">Thank you for choosing</p>
        <p class="c2">Advanced REST Client</p>
        <p class="c3">Let's walk through some key features</p>
      </div>
      <onboarding-page with-image="">
        <h2 slot="title">Google Drive sharing</h2>
        <iron-icon slot="image" icon="arc:drive-color"></iron-icon>
        <div>
          <p>Save and share your data with Google Drive.</p>
          <p>You can export your data to file and share it with others.</p>
          <div class="info-button">
            <paper-button on-click="_followLink" data-href="http://restforchrome.blogspot.com/2016/04/data-sharing-options-in-new-advanced.html" raised="">Learn more</paper-button>
          </div>
          <p class="legal-info">
            Advanced REST Client accesses data stored in your Google Drive on your request only and limits the information to created by the application files and folders only.
            Authorization tokens are stored in memory and are cleared when you close the application.<br>
            ARC uses Google Drive to list created by the application files when using "Open from Drive" option. It uploads requests, projects, or backup data to Your Drive
            when you request it in application UI.<br>
            The application do not use Google Drive for anything else. The application do not store Google profile information.
          </p>
        </div>
      </onboarding-page>
      <onboarding-page with-image="">
        <h2 slot="title">APIs documentation with RAML and OAS</h2>
        <iron-icon slot="image" icon="arc:raml-r" class="raml-icon"></iron-icon>
        <div>
          <p>
            Use RAML or OAS to document your APIs and read the documentation in ARC with <a href="https://github.com/mulesoft/api-console" target="_blank">API Console</a>.
          </p>
          <p>
            Use API request editor with prefilled request data generated from API examples and try the API in seconds.
          </p>
          <p>
            RAML documentation viewer is a part of the Mulesoft's API Console open source project.
          </p>
          <p>
            Learn more about <a href="https://raml.org/" target="_blank">RAML</a> and <a href="https://github.com/OAI/OpenAPI-Specification" target="_blank">OAS</a>
          </p>
        </div>
      </onboarding-page>
      <onboarding-page with-image="">
        <h2 slot="title">Hosts rules</h2>
        <iron-icon slot="image" icon="arc:code"></iron-icon>
        <paper-button slot="image" on-click="_followLink" data-href="https://github.com/advanced-rest-client/arc-electron/wiki/Host-rules" raised="">Learn more</paper-button>
        <p>
          Create a host rules to redirect traffic from one host to another.
        </p>
        <p>
          No need for editing your "hosts" file anymore. You don't need administrator privileges to apply host rules.
        </p>
        <p>
          It is useful to debug virtual hosts configuration of your server, even when developping localy.
        </p>
      </onboarding-page>
      <onboarding-page with-image="">
        <h2 slot="title">Session management</h2>
        <iron-icon slot="image" icon="arc:account-circle"></iron-icon>
        <paper-button slot="image" on-click="_followLink" data-href="https://medium.com/@jarrodek/authenticating-to-a-web-service-cookies-session-in-advanced-rest-client-6293a869c9ac" raised="">Learn more</paper-button>
        <p>
          Log in to a web service using build in web browser based on Chrome.
        </p>
        <p>
          Cookies are automatically applied to the request as would browser do it.
        </p>
        <p>
          Manage session cookies in menu Request &gt; Web session
        </p>
      </onboarding-page>
      <onboarding-page with-image="">
        <h2 slot="title">Privacy</h2>
        <iron-icon slot="image" icon="arc:shield"></iron-icon>
        <paper-button slot="image" on-click="_followLink" data-href="https://docs.google.com/document/d/1BzrKQ0NxFXuDIe2zMA-0SZBNU0P46MHr4GftZmoLUQU/edit" raised="">Read full privacy policy</paper-button>
        <div>
          <p>Protecting your data and your trust is always our first priority. The application never shares <b>any</b> data until you request or allow it.</p>
          <p>
            To provide better quality the app is collecting anonymous usage statistics.
          </p>
          <p>Data the app is using and how:</p>
          <ul>
            <li>Any access tokens provided by you or generated by the app are stored in local history along with the request.</li>
            <li>Google Drive file ID of opened by the app file is stored in the local history.</li>
            <li>(Chrome app only) You settings are synced between your profiles, if you are signed in to Chrome, using Google Sync service for Chrome Apps.</li>
            <li>The app collects critical errors generated by the app and send them to Google Analytics. Data included in the report contains information about the exception itself (error message) and intentionally will not collect any user or user provided data.</li>
          </ul>
          <p>
            You can turn off Google Analytics and local history in application settings.
          </p>
        </div>
      </onboarding-page>
    </onboarding-tutorial>
`;
  }

  static get is() {
    return 'arc-onboarding';
  }
  static get properties() {
    return {
      // True if the tutorial is being rendered.
      opened: Boolean,
      /**
       * Number of miliseconds to upen the tutorial.
       */
      delay: Number
    };
  }

  _followLink(e) {
    if (e.target.dataset.href) {
      return window.open(e.target.dataset.href);
    }
  }
}
window.customElements.define(ArcOnboarding.is, ArcOnboarding);
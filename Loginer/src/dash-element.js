/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/app-layout/app-layout.js';
class DashElement extends PolymerElement {
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <style>
  
  app-drawer-layout{
    background:#fff;
  }
  app-drawer{
    background:rgb(255, 166, 0);
    color:#fff;
  }
  app-header{
    background: #010068;
    color:#fff;
  }
  .app-header-0 #contentContainer.app-header {

    position: relative;
    width: 100%;
    height: 100%;

}


  
</style>
  
 
<app-location style="position:absolute" route="{{route}}"></app-location>
<app-route style="position:absolute"
    route="{{route}}"
    pattern="/:view"
    data="{{routeData}}"
    tail="{{subroute}}"></app-route>


    <app-drawer-layout>
    <app-drawer slot="drawer"  >
      <app-toolbar style="background:rgb(255, 166, 0);">Getting Started</app-toolbar>
      
<paper-button on-click="Logout" style="color: #fff;background: red;" raised >Logout</paper-button>

    </app-drawer>
    <app-header-layout>
      <app-header slot="header" reveals effects="waterfall">
        <app-toolbar>
          <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
          <div main-title>OneTransit</div>
        </app-toolbar>
      </app-header>
       

<paper-card  >
<div class="card-content"> 
passNumber: {{}}<br>
username: {{}}<br>
holderName: {{}}} 
</div>
<div class="card-actions">
  <paper-button style="color: #fff;background: green;">Request Passes to your own account </paper-button>
</div>
</paper-card>
<paper-card >
<div class="card-content"> 
Passes For others <br>
passNumber: {{}}<br>
username: {{}}<br>
holderName: {{}}} 
</div>
<div class="card-actions">
<paper-button style="color: #fff;background: green;">Request Passes to others </paper-button>
</div>
</paper-card>
<paper-card >
<div class="card-content"> 
Passes For others 
</div>
<div class="card-actions">
<paper-button style="color: #fff;background: green;">Request Passes to others </paper-button>
</div>
</paper-card>
 
    </app-header-layout>
  </app-drawer-layout>


    `;
  }
  ready(){
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    //console.log(this.routeData);
    this.userLogin= localStorage.getItem("Userlogin");
  }
  constructor(){
    super();
     
    this.users = [
      {passNumber: '456789', username: 'Hamzasalem77',holderName:'Hamza'},
      {passNumber: '4536789', username: 'mohammed77',holderName:'moh'},
      {passNumber: '45673489', username: 'Taha77',holderName:'taha'},
      
  ];

  }
  get properties (){
    return{
      userLogin:{
        type:String
      }

    }

  }
  

  Logout(){
    localStorage.setItem("Userlogin", "");
    this.set('route.path', 'home');
  }

}

// Register the element with the browser.
customElements.define('dash-element', DashElement);
/* <table is="s-table-lite" fixed-column>
  <thead>
    <tr>
      <th>Pass Number</th>
      <th>Userrname</th>
      <th>Holder Name</th>
      
    </tr>
  </thead>
  <tbody is="s-tbody">
    <iron-list items="[[users]]" as="user">
    <template>
    <tr is="s-tr">
    <td>  [[user.passNumber]]</td>
    <td>  {{user.username}}</td>
    <td>  [[user.holderName]]</td>
    </tr>
    </template>
  </iron-list>
    </tr>
    </tbody>
    </table>  */
    // <vaadin-grid column-reordering-allowed multi-sort  items="[[users]]"   >
    // <vaadin-grid-column   header="Pass Number"> [[passNumber]]</vaadin-grid-column>
    // <vaadin-grid-column   header="User name"></vaadin-grid-column>
    // <vaadin-grid-column  header="Holder Name" ></vaadin-grid-column>
   
    //   </vaadin-grid>
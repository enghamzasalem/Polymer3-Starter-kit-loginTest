/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import {MyApp} from 'my-app.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class MyView3 extends PolymerElement {
    constructor(){
      super();
      this.allusers=[]
      
  }
   ready(){
    super.ready();
   console.log("View3");
   //alert(this.subrouteData.id);
   this.$.AjaxGet.params = { "passNumber": this.subrouteData.id};
   this.$.AjaxGet.generateRequest();
   
   }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
          td, th {
    padding: 8px;
    box-sizing: border-box;
    white-space: nowrap;
  }
  td:nth-of-type(1),
  th:nth-of-type(1) {
    background-color: rgba(255, 0, 255, 0.2);
  }
  tr.iron-selected td {
    background-color: rgba(0, 0, 0, 0.1);
  }
  tr:hover td {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr td.iron-selected:not(:nth-of-type(1)) {
    background-color: rgba(255, 255, 0, 0.2);
  }
      </style>
<my-app>
<center>
<app-location route="{{route}}"></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}"
          tail="{{subroute}}">
      </app-route>
      <app-route
          route="{{subroute}}"
          pattern="/:id"
          data="{{subrouteData}}">
      </app-route>
      <iron-ajax
  id="AjaxGet"
        url="http://localhost:4001/payment-methods"
        method="GET"
        content-type="application/json"
        handle-as="json"
        on-response="handleResponse"
        on-error="handleAjaxPostError">
      </iron-ajax>
      <div class="card" style="width:60%">
        <h1>Payment Method For Pass Number :{{subrouteData.id}}</h1>
        <div class="card" >
         <paper-dropdown-menu id="cardtype" label="Card Type">
        <paper-listbox slot="dropdown-content" selected="1">
          <paper-item label="bankCard">Bank Card  <iron-icon icon="account-balance-wallet"></iron-icon></paper-item>
          <paper-item label="creditCard">Credit Card <iron-icon icon="credit-card"></iron-icon></paper-item>
          
        </paper-listbox>
      </paper-dropdown-menu>
        
         <paper-input id="paymentMethodId" name="paymentMethodId"  float-label label="Card Number" ></paper-input>
         <paper-button raised on-click="addCard" class="indigo" style="background:green;color:#fff">add</paper-button>
          
      </div>
 <table is="s-table-lite" fixed-column>
  <thead>
    <tr>
      <th>Card Type</th>
      <th>Card Number</th>
      <th>Use As Transit Pass</th>
       <th>Manage</th>
    </tr>
  </thead>
  <tbody is="s-tbody">
  
    <tr is="s-tr" multi >
          <td>  {{PassPayment.cardType}} 
          </td>
          <td>  {{PassPayment.paymentMethodId}} 
          </td>
          <td>  {{PassPayment.useAsTransitPass}} 
          </td>
           
          <td>  
          <a  class="indigo"  style="background: red;color: #fff;text-decoration: none;padding: 6px;border-radius: 6px;">
          <iron-icon icon="delete"></iron-icon></a>
          </td>
              </tr> 
  </tbody>
</table>
        </div></center>
      </my-app>
    `;
  }
  addCard(){
       alert(this.$.cardtype.value);
       alert(this.$.paymentMethodId.value);
       alert(this.subrouteData.id);
       
       
  }
  static get properties () {
    return {
      PassPayment: {
        type: Object        
    }
  }
}
   handleResponse(data){
       console.log("sent");
       console.log(data.detail.__data.xhr.response);
       this.PassPayment=data.detail.__data.xhr.response;
  }
  handleResponsePost(data){
       console.log("sent");
      console.log(data.detail.__data.xhr.response);
     // this.Mypass=data.detail.__data.xhr.response;
  }
}

window.customElements.define('my-view3', MyView3);

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
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/iron-ajax/iron-ajax.js';


class MyView2 extends PolymerElement {
         constructor(){
      super();
      this.allusers=[]
      
  }
   ready(){
    super.ready();
    console.log("View2");
    this.$.AjaxGet.params = { "username": "enghamzasalem"};
    this.$.AjaxGet.generateRequest();
    this.username=localStorage.getItem("username");
      
  }
   static get properties () {
    return {
      username: {
        type: String 
    },allusers: {
        type: Array 
    },Mypass: {
        type: Object        
    }
  }
    }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
  <style include="shared-styles">
      .card{
          
           
      }
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
 
 <iron-ajax
  id="AjaxGet"
        url="http://localhost:4001/passess"
        method="GET"
        content-type="application/json"
        handle-as="json"
        on-response="handleResponse"
        on-error="handleAjaxPostError">
      </iron-ajax>
<div class="card" >
         
       <h2>All Requested Passes </h2>
 
 
   
       <table is="s-table-lite" fixed-column>
  <thead>
    <tr>
      <th>PassNumber</th>
      <th>Username</th>
      <th>HolderName</th>
       <th>Payment Method</th>
       
    </tr>
  </thead>
  <tbody is="s-tbody">
  
    <tr is="s-tr" multi >
          <td>  {{Mypass.passNumber}} 
          </td>
          <td>  {{Mypass.username}} 
          </td>
          <td>  {{Mypass.holderName}} 
          </td>
           
          <td> 
<paper-tooltip for="creditcard">Edit Payment method (Credit Card or Bank Card)</paper-tooltip>          
          <a  class="indigo" id="creditcard"  href="/view3/{{Mypass.passNumber}}" style="text-decoration: none;padding: 6px;border-radius: 6px;">
           
           <iron-icon icon="credit-card"></iron-icon></a>
            
          </td>
              </tr>
      <template is="dom-repeat" items="{{allusers}}">
      <tr is="s-tr" multi >
          <td>  {{item.passNumber}} 
          </td>
          <td>  {{item.username}} 
          </td>
          <td>  {{item.holderName}} 
          </td>
          <td>  
          <a  class="indigo" href="/view3/{{Mypass.passNumber}}" style="background:green;color:#fff">Edit</a>
          </td>
              </tr>
 </template> 
  </tbody>
</table>
    
      </div>
       
       
    `;
 
  }
   handleResponse(data){
       console.log("sent mypass");
       console.log(data.detail.__data.xhr.response);
       this.Mypass=data.detail.__data.xhr.response;
  }
  handleAjaxPostError(event, request){
     alert(request);
  }
}

window.customElements.define('my-view2', MyView2);

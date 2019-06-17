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
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './shared-styles.js';
import {MyApp} from 'my-app.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-tooltip/paper-tooltip.js';


class MyView1 extends PolymerElement {
     constructor(){
      super();
      this.allusers=[]
      
  }
   ready(){
    super.ready();
    console.log("View1");
      //this.$.AjaxPost.body = { "username": "enghamzasalem"}
      //this.$.AjaxPost.generateRequest();
      this.$.AjaxGet.params = { "username": "enghamzasalem"};
      this.$.AjaxGet.generateRequest();
      
      //this.passNumber=localStorage.getItem("passNumber");
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
<my-app>
 <iron-ajax
  id="AjaxGet"
        url="http://localhost:4001/passess"
        method="GET"
        content-type="application/json"
        handle-as="json"
        on-response="handleResponse"
        on-error="handleAjaxPostError">
      </iron-ajax>
       <iron-ajax
  id="AjaxPost"
        url="http://localhost:4001/passess"
        method="POST"
        content-type="application/json"
        handle-as="json"
        on-response="handleResponsePost"
        on-error="handleAjaxPostError2">
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
       
       
</my-app>
     
    `;
  }
  ckapi(){
      alert("yes it working ");
      this.$.AjaxGet.generateRequest();
  }
  handleResponse(data){
       console.log("sent mypass");
       console.log(data.detail.__data.xhr.response);
       this.Mypass=data.detail.__data.xhr.response;
  }
  handleResponsePost(data){
       console.log("sent");
      console.log(data.detail.__data.xhr.response);
     // this.Mypass=data.detail.__data.xhr.response;
  }
  
  
  
  handleAjaxPostError2(event, request){
alert(request);
  }
    handleAjaxPostError(event, request){
alert("error");
  }
}

window.customElements.define('my-view1', MyView1);
 // <div class="card" >
 
        // <div class="card" >
         // <div>
         // <h2>Request Passes </h2>
         // <paper-input id="OtherUser_name" name="usser"  float-label label="Other Username" ></paper-input>
         // <paper-button raised on-click="_request" class="indigo" style="background:green;color:#fff">Request</paper-button>
         // </div>
          
          // <div>
          // <paper-button raised on-click="_request" class="indigo" style="background:green;color:#fff">Request For {{username}} </paper-button>
             // </div>
      // </div>

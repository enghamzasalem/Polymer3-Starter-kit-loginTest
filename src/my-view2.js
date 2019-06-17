/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from 'lit-element';
import './shared-styles.js';
import {MyApp} from 'my-app.js'


class MyView2 extends LitElement {
     static get properties() {
  return { foo: String,
           message:String,
           loadStuff:Function,
           itemsarray:{type:Array
           },
           condition:String,boole:{ type: Boolean },input1:String};
}
    constructor() {
  super();
  this.message = 'Loading';
   this.foo="Helllo Lit Element ";
   this.input1="";
   this.itemsarray=["ahha","tefo","wqeqwe"];
   this.condition='truthy';
   this._loadStuff = this._loadStuff.bind(this);
   this.boole = false;
}

  render() {
      const items = this.itemsarray.map(item => html`<a target="blank" href="${item}">${item}</a><br>`);
      
      
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>condition
  <my-app>
  <span >Condition was ${this.condition ? 'truthy' : 'falsy'}</span>
      <div class="card">
       ${this.boole?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
        <div class="circle">2</div>
        <h1> ${items}</h1>        
        <h1>${this.foo}</h1>
         <h1>${this.message}</h1> 
         <input id="aj" type="text" .value="${this.input1}" @input=${(e) => this._onInput(e)}>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
<button @click=${(e) => this._loadStuff(e)}>  Sweet Alert </button>    
     </div>
     
      </my-app>
    `;
  }
  _loadStuff(){
      console.log("Hello");
      swal("Brrrooone");
      alert(this.input1);
  }
  _onInput(e) {
  this.message = e.currentTarget.value;
  this.itemsarray=["Hamza" ,"Salem" ,"PHD"];
 this.input1=this.message ;
}

}

window.customElements.define('my-view2', MyView2);

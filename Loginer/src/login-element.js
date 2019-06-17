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
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
class LoginElement extends PolymerElement {
  constructor(){
    super();
    //alert(localStorage.getItem("Userlogin"));
    
  }
  ready(){
    super.ready();
    
  }

  static get properties () {
    return {
      loginn: {
        type: Function 
      },user: {
        type:String
      },Userlogin: 
      { type: String 
      }
  }
}

  loginn(){
    alert(this.$.user_input.value);
    this.user=this.$.user_input.value;
    // this.$.AjaxPost.body = { "price": "11111","type":"0","year":"1999" };
    // this.$.AjaxPost.generateRequest();
    if (this.user=='admin'){
     // alert("Done");
      localStorage.setItem("Userlogin", "admin");
      this.set('route.path', 'dash');
     // window.location.replace("/lazy"); 
      //window.location.href = "/lazy";
      //page.redirect('/lazy')

    }

   
   // this.routeData.subpage = 'lazy';
    // fetch('https://damp-mesa-99429.herokuapp.com/predict', {
    //   method: 'post',
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //   },
    //   body: 'price=4567&type=1&year=1234'
    // })
    // .then(json)
    // .then(function (data) {
    //   console.log('Request succeeded with JSON response', data);
    // })
    // .catch(function (error) {
    //   console.log('Request failed', error);
    // });
  
  }
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <style>
    body {font-family: Arial, Helvetica, sans-serif;}

    /* Full-width input fields */
    input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    
    /* Set a style for all buttons */
    button {
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
    }
    
    button:hover {
      opacity: 0.8;
    }
    
    /* Extra styles for the cancel button */
    .cancelbtn {
      width: auto;
      padding: 10px 18px;
      background-color: #f44336;
    }
    
    /* Center the image and position the close button */
    .imgcontainer {
      text-align: center;
      margin: 24px 0 12px 0;
      position: relative;
    }
    
    img.avatar {
      width: 40%;
      border-radius: 50%;
    }
    
    .container {
      padding: 16px;
    }
    
    span.psw {
      float: right;
      padding-top: 16px;
    }
    
    #id01{
      width: 50%;
      position: absolute;
      left: 25%;
    }
    
    /* Modal Content/Box */
    .modal-content {
      background-color: #fefefe;
      margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }
    
    /* The Close Button (x) */
    .close {
      position: absolute;
      right: 25px;
      top: 0;
      color: #000;
      font-size: 35px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: red;
      cursor: pointer;
    }
    
     
    
    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
      span.psw {
         display: block;
         float: none;
      }
      .cancelbtn {
         width: 100%;
      }
    }
    </style>
    <div id="id01" class="modal">
      
    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>

    <div class="modal-content animate"   >
      <div class="imgcontainer">
        
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">
      </div>


      <iron-ajax
      id="AjaxPost"
      method="POST"
      url="http://localhost:3002/hi"
      content-type="application/json"
      handle-as="json"
      on-error="_handleAjaxPostError"
      on-response="_onImportantDataLoaded"></iron-ajax>

      <div class="container">    
        <paper-input type="text" id="user_input" placeholder="Enter Username" name="uname" required always-float-label label="Username"></paper-input>
     
        <paper-button  on-click="loginn" style="width:100%;color: #fff;background: #88bc4f;" raised class="custom green"> Login</paper-button>
      </div>
  
      <div class="output">{{message}}</div>
    </div>
 


  </div>
    `;
  }
  _onImportantDataLoaded(event, request) {
    const response = request.response;
    console.log(request.response);
    console.log(request);
    // Some actions with the response there
  }

  _handleAjaxPostError(event, request){
alert("error");
  }
  
}

// Register the element with the browser.
 //   <paper-input always-float-label label="Password"  type="password" placeholder="Enter Password" name="psw" required></paper-input>
      // <br>
customElements.define('login-element', LoginElement);

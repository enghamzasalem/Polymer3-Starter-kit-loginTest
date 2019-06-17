
// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import {LoginElement} from 'login-element.js'
import {LazyElement} from 'lazy-element.js'
import {DashElement} from 'dash-element.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      loadComplete: {
        type: Boolean,
        value: false
      },page:{
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    // Resolve warning about scroll performance 
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
   // setPassiveTouchGestures(true);
    //this.message = 'Hello World! I\'m a Polymer element :)';
  }
  _pageChanged(currentPage, oldPage){
	  console.log('CURRENT - ', currentPage);
	  console.log('OLD - ', oldPage);
	  switch(currentPage){
		  case 'home':
			import('./login-element.js').then()
			break;
		  case 'lazy':
			import('./lazy-element.js').then()
      break;
      case 'dash':
			import('./dash-element.js').then()
			break;
		  default:
		 	this.page = 'home';
	  }
  }

  ready(){
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    //console.log(this.routeData);
   // alert();
    if (localStorage.getItem("Userlogin")!='admin') {
      this.set('route.path', 'home');
    }else{
      this.set('route.path', window.location.pathname.replace(/^\/([^\/]*).*$/, '$1'));
      if (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')=='home'){
        this.set('route.path', 'dash');
      }
    }
  }
  static get observers(){
    console.log("test observer");
     
	return ['_routerChanged(routeData.page)'];
}
_routerChanged(page){

	console.log('CHANGED PAGE - ', page);
  this.page = page || 'home';
  


}
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
     <app-location route="{{route}}"></app-location>
     <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
     <iron-pages selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="404">
     <lazy-element  name="lazy" > </lazy-element>
     <login-element name="home" > </login-element>
     <dash-element name="dash" > </dash-element>
   </iron-pages>
    `;
  }
}

// Register the element with the browser.
 // <h1>Start Polymer 3.0</h1>
      // <p>[[message]]</p>
      // <paper-checkbox id="omgpie"
      //   toggles
      //   noink
      //   checked={{pie}}>I like pie.</paper-checkbox>
      // <template is="dom-if" if=[[pie]]>
      //   <lazy-element><p>lazy loading...</p></lazy-element>
      // </template>
      //  <ul>
    //      <li>
    //        <a href="/home">Home</a>
    //      </li>
    //      <li> 
    //          <a href="/lazy">lazy</a> 
    //      </li>   
    //  </ul>
customElements.define('start-polymer3', StartPolymer3);

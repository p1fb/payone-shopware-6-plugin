(window.webpackJsonp=window.webpackJsonp||[]).push([["payone-payment"],{"+Q0c":function(e,t,n){"use strict";n.r(t);var r=n("FGIj");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,s,y,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,u(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){var e=this;this.iframe=null,this.iframeFieldCheckerStarted=!1,this.orderFormDisabled=!0;var t=document.getElementById("payone-request"),n=t.getAttribute("data-payone-language"),r=JSON.parse(t.innerHTML);this._createScript((function(){var t=e.getClientConfig(n);e.iframe=new window.Payone.ClientApi.HostedIFrames(t,r);var o=document.getElementById("savedpseudocardpan"),i=document.getElementById("confirmOrderForm");o&&o.addEventListener("change",e._handleChangeSavedCard.bind(e)),i&&i.addEventListener("submit",e._handleOrderSubmit.bind(e))}))}},{key:"getSelectStyle",value:function(){return["width: 100%","padding: .5625rem","color: #8798a9","vertical-align: middle","line-height: 1.5","font-weight: 500","background-color: #fff","border: none","border-radius: 3px"]}},{key:"getFieldStyle",value:function(){return["width: 100%","height: 100%","padding: .5625rem","color: #8798a9","vertical-align: middle","line-height: 1.5","font-weight: 500","background-color: #fff","border: none","border-radius: .1875rem"]}},{key:"getClientConfig",value:function(e){return{fields:{cardpan:{selector:"cardpan",type:"text",style:this.getFieldStyle().join("; ")},cardcvc2:{selector:"cardcvc2",type:"password",size:"4",maxlength:"4",length:{V:3,M:3,A:4,D:3,J:0,O:3,P:3,U:3},style:this.getFieldStyle().join("; ")},cardexpiremonth:{selector:"cardexpiremonth",type:"select",size:"2",maxlength:"2",style:this.getSelectStyle().join("; ")},cardexpireyear:{selector:"cardexpireyear",type:"select",style:this.getSelectStyle().join("; ")}},language:window.Payone.ClientApi.Language[e],defaultStyle:{iframe:{height:"100%",width:"100%"}},autoCardtypeDetection:{supportedCardtypes:t.options.supportedCardtypes,callback:this._cardDetectionCallback}}}},{key:"_cardDetectionCallback",value:function(e){if("-"!==e&&"?"!==e){var t="https://cdn.pay1.de/cc/"+e.toLowerCase()+"/xl/default.png",n=document.getElementById("errorOutput"),r=document.getElementById("card-logo");r.setAttribute("src",t),n.style.display="none",r.style.display="block"}}},{key:"_createScript",value:function(e){var t=document.createElement("script");t.type="text/javascript",t.src="https://secure.pay1.de/client-api/js/v1/payone_hosted.js",t.addEventListener("load",e.bind(this),!1),document.head.appendChild(t)}},{key:"_handleOrderSubmit",value:function(e){var t=this;document.getElementById("errorOutput").style.display="none";var n=document.getElementById("savedpseudocardpan");if(n&&n.value.length>0)return!0;if(!this.iframe.isComplete()){var r=document.getElementById("iframeErrorOutput");return this.iframeFieldCheckerStarted||setInterval((function(){t.iframe.isComplete()?r.style.display="none":r.style.display="block"}),250),this.iframeFieldCheckerStarted=!0,e.preventDefault(),!1}return this.orderFormDisabled?(window.payoneCreditCardCheckCallback=this._payoneCheckCallback.bind(this),this.iframe.creditCardCheck("payoneCreditCardCheckCallback"),e.preventDefault(),!1):void 0}},{key:"_handleChangeSavedCard",value:function(){var e=document.getElementById("savedpseudocardpan");e.options[e.selectedIndex].value?i(document.getElementsByClassName("credit-card-input")).forEach((function(e){e.classList.add("hide")})):i(document.getElementsByClassName("credit-card-input")).forEach((function(e){e.classList.remove("hide")}))}},{key:"_payoneCheckCallback",value:function(e){if("VALID"===e.status)document.getElementById("pseudocardpan").value=e.pseudocardpan,document.getElementById("truncatedcardpan").value=e.truncatedcardpan,document.getElementById("cardexpiredate").value=e.cardexpiredate,this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit();else{var t=document.getElementById("confirmFormSubmit"),n=document.getElementById("errorOutput");t.removeAttribute("disabled"),n.innerHTML=e.errormessage,n.style.display="block"}}}])&&a(n.prototype,r),o&&a(n,o),t}(r.a);y={supportedCardtypes:["#","V","A","M","D","J","O","U","P"]},(s="options")in(d=m)?Object.defineProperty(d,s,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[s]=y;var f=n("p4AR"),p=n("2Jwc"),h=n("3xtq");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,_(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new f.a,document.getElementById("confirmOrderForm").addEventListener("submit",this._handleOrderSubmit.bind(this))}},{key:"_handleOrderSubmit",value:function(e){document.getElementById("errorOutput").style.display="none",this.orderFormDisabled&&(e.preventDefault(),this._getModal(e))}},{key:"_getModal",value:function(e){var t=this;e.preventDefault(),h.a.create();var n=this._getRequestData();this._client.abort(),this._client.post(this._getManageMandateUrl(),JSON.stringify(n),(function(e){return t._openModal(e)}))}},{key:"_submitForm",value:function(){this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit()}},{key:"_openModal",value:function(e){if((e=JSON.parse(e)).error){var t=document.getElementById("errorOutput");return t.innerHTML=e.error,t.style.display="block",void h.a.remove()}if("active"!==e.mandate.Status){var n=new p.a(e.modal_content);n.open(this._onOpen.bind(this,n))}else this._submitForm()}},{key:"_onOpen",value:function(e){e.getModal().classList.add("payone-debit-mandate-modal"),window.PluginManager.initializePlugins(),this._registerEvents(),h.a.remove()}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenDebitManageMandate"),t=document.getElementById("iban"),n=document.getElementById("bic");return{_csrf_token:e.value,iban:t.value,bic:n.value}}},{key:"_getManageMandateUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-manage-mandate-url")}},{key:"_registerEvents",value:function(){document.getElementById("mandateSubmit").addEventListener("click",this._onMandateSubmit.bind(this))}},{key:"_onMandateSubmit",value:function(){document.getElementById("accept-mandate").checked&&this._submitForm()}}])&&b(n.prototype,r),o&&b(n,o),t}(r.a);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(E,"options",{editorModalClass:"payone-debit-modal"});var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,B(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new f.a,this._registerEventListeners()}},{key:"_registerEventListeners",value:function(){var e=document.getElementById("confirmOrderForm");e&&e.addEventListener("submit",this._handleOrderSubmit.bind(this))}},{key:"_handleOrderSubmit",value:function(e){this._hideErrorBox(),this.orderFormDisabled&&(this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),e.defaultPrevented||(this._validatePaymentAcceptance(),e.preventDefault()))}},{key:"_validateField",value:function(e,t){var n=document.getElementById(t);n.checked?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_validateInput",value:function(e,t){var n=document.getElementById(t);n.value?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_validatePaymentAcceptance",value:function(){var e=this,t=JSON.stringify(this._getRequestData());h.a.create(),this._client.abort(),this._client.post(this._getValidateUrl(),t,(function(t){return e._handleValidateResponse(t)}))}},{key:"_handleValidateResponse",value:function(e){if(e=JSON.parse(e),h.a.remove(),"OK"!==e.status)this._showErrorBox();else{var t=document.getElementById("payoneWorkOrder");t&&(t.value=e.workorderid),this._submitForm()}}},{key:"_getValidateUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-validate-url")}},{key:"_showErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!1)}},{key:"_hideErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!0)}},{key:"_submitForm",value:function(){this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit()}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenPayolutionInvoiceValidation"),t=document.getElementById("payolutionBirthday");return{_csrf_token:e.value,payolutionBirthday:t.value}}}])&&O(n.prototype,r),o&&O(n,o),t}(r.a);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,D(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new f.a,this._disableSubmitButton(),this._registerEventListeners()}},{key:"_registerEventListeners",value:function(){var e=document.getElementById("confirmOrderForm"),t=document.getElementById("checkInstallmentButton");e&&e.addEventListener("submit",this._handleOrderSubmit.bind(this)),t&&t.addEventListener("click",this._handleCalculationButtonClick.bind(this))}},{key:"_handleCalculationButtonClick",value:function(e){var t=this;if(this._hideErrorBox(),this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),!e.defaultPrevented){h.a.create();var n=JSON.stringify(this._getRequestData());this._client.abort(),this._client.post(this._getCalculationUrl(),n,(function(e){return t._handleCalculationCallback(e)}))}}},{key:"_handleCalculationCallback",value:function(e){if(e=JSON.parse(e),h.a.remove(),"OK"===e.status){var t=document.getElementById("payoneWorkOrder"),n=document.getElementById("payoneCartHash");t.value=e.workorderid,n.value=e.carthash,this._displayInstallmentSelection(e),this._displayCalculationOverview(e),this._registerSelectionEventListeners(),this._enableSecondStep(),this._activateSubmitButton(),this._hideCheckInstallmentButton()}else this._showErrorBox()}},{key:"_hideCheckInstallmentButton",value:function(){var e=document.getElementById("checkInstallmentButton");e&&e.classList.add("hidden")}},{key:"_registerSelectionEventListeners",value:function(){document.getElementById("payolutionInstallmentDuration").addEventListener("change",(function(e){var t=e.target.value;document.querySelectorAll(".installmentDetail").forEach((function(e){e.dataset.duration===t?e.hidden=!1:e.hidden="hidden"}))}))}},{key:"_showErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!1)}},{key:"_hideErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!0)}},{key:"_enableSecondStep",value:function(){document.querySelectorAll(".payolution-installment .hidden").forEach((function(e){e.classList.remove("hidden")}))}},{key:"_displayInstallmentSelection",value:function(e){var t=document.getElementById("installmentSelection");t&&(t.innerHTML=e.installmentSelection)}},{key:"_displayCalculationOverview",value:function(e){var t=document.getElementById("calculationOverview");t&&(t.innerHTML=e.calculationOverview)}},{key:"_handleOrderSubmit",value:function(e){this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),this._validateInput(e,"payolutionAccountOwner"),this._validateInput(e,"payolutionIban"),this._validateInput(e,"payolutionBic"),this._validateInput(e,"payolutionInstallmentDuration")}},{key:"_disableSubmitButton",value:function(){this.orderFormDisabled=!0;var e=document.getElementById("confirmFormSubmit");e&&e.setAttribute("disabled","disabled")}},{key:"_activateSubmitButton",value:function(){this.orderFormDisabled=!1;var e=document.getElementById("confirmFormSubmit");e&&e.removeAttribute("disabled")}},{key:"_getCalculationUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-calculation-url")}},{key:"_validateField",value:function(e,t){var n=document.getElementById(t);n.checked?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_validateInput",value:function(e,t){var n=document.getElementById(t);n.value?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenPayolutionInstallmentCalculation"),t=document.getElementById("payolutionBirthday"),n=document.getElementById("payoneWorkOrder"),r=document.getElementById("payoneCartHash");return{_csrf_token:e.value,payolutionBirthday:t.value,workorder:n.value,carthash:r.value}}}])&&j(n.prototype,r),o&&j(n,o),t}(r.a),A=window.PluginManager;A.register("PayonePaymentCreditCard",m,"[data-is-payone-credit-card]"),A.register("PayonePaymentDebitCard",E,"[data-is-payone-debit-card]"),A.register("PayonePaymentPayolutionInvoicing",C,"[data-is-payone-payolution-invoicing]"),A.register("PayonePaymentPayolutionInstallment",x,"[data-is-payone-payolution-installment]")}},[["+Q0c","runtime","vendor-node","vendor-shared"]]]);
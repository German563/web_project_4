!function(){"use strict";const e=document.querySelector("#card-template").content.querySelector(".card__gallery"),t=(document.querySelector(".card__area"),document.querySelector(".gallery__pencil")),n=(document.querySelectorAll(".popup__close"),document.querySelector(".popup__button"),document.querySelector(".gallery__button")),r=document.getElementById("form__edit"),i=document.getElementById("form__place"),o=(document.querySelector(".popup__input_type_card-link"),document.querySelector(".button_active"),document.querySelector(".popup__title-foto"),document.querySelector(".card__image"),document.forms.profile.elements.name),s=(document.querySelector(".gallery__header"),document.forms.profile.elements.title),l=(document.querySelector(".gallery__subtext"),document.querySelector("#closeButtonFoto"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c{constructor(e){a(this,"_handleEscClose",(e=>{e.preventDefault(),"Escape"===e.key&&this.close()})),a(this,"_handlecloseOverlay",(()=>{this.close()})),this._popup=document.querySelector(e),this._closeOverlay=document.querySelector(".page__background"),this.close.bind(this),this._handlecloseOverlay}open(){document.addEventListener("keyup",this._handleEscClose),this._popup.classList.add("popup_opened"),this._closeOverlay.classList.add("page__background_opened")}close(){this._popup.classList.remove("popup_opened"),this._closeOverlay.classList.remove("page__background_opened"),document.removeEventListener("keyup",this._handleEscClose)}setEventListener(){this._closeOverlay.addEventListener("click",this._handlecloseOverlay.bind(this)),this._popup.addEventListener("mousedown",(e=>{(e.target.classList.contains(".popup")||e.target.classList.contains("popup__close"))&&this.close()}))}}class u extends c{constructor(e,t){super(e),this._submitCallback=t,this._form=this._popup.querySelector(".popup__form"),this._inputSelector=".popup__input"}getInputValues(){const e=Array.from(this._form.querySelectorAll(this._inputSelector)),t={};return e.forEach((e=>{e.name&&(t[e.name]=e.value)})),t}setEventListener(){this._form.addEventListener("submit",(e=>{e.preventDefault();const t=this.getInputValues();this._submitCallback(t),this.close()})),super.setEventListener()}close(){this._form.reset(),super.close()}}class _{constructor(e,t){this._config=e,this._formElement=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}_showInputError(e,t){const n=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_toggleButtonState(){this._inputList.every((e=>e.validity.valid))?(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._config.inactiveButtonClass)):(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass))}resetValidation(){this._toggleButtonState(),this._inputList.forEach((e=>{this._hideInputError(e)}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._toggleButtonState(),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}}class d{constructor(e){let{name:t,link:n,cardTemplate:r,handleCardClick:i}=e;this._name=t,this._link=n,this._cardTemplate=r,this._handleCardClick=i,this._element=this._getTemplate(),this._cardLinkTitle=this._element.querySelector(".card__ellipsis"),this._cardLinkInput=this._element.querySelector(".card__image"),this._cardLinkTitle.textContent=this._name,this._cardLinkInput.src=this._link,this._cardLinkInput.alt=`Photo of ${this._name}`,this._heartButton=this._element.querySelector("#heart"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._setEventListeners()}_setEventListeners(){this._heartButton.addEventListener("click",this._toggleLike.bind(this)),this._cardLinkInput.addEventListener("click",this._setBigImage.bind(this)),this._deleteButton.addEventListener("click",this._handleDeleteClick.bind(this))}_getTemplate(){return this._cardTemplate.cloneNode(!0)}_setBigImage(){this._handleCardClick({link:this._link,name:this._name})}_toggleLike(){this._heartButton.classList.toggle("card__background_active")}_handleDeleteClick(){this._element.remove()}getElement(){return this._element}}const p=new u(".popup_type_edit-profile",((e,t)=>{y.setUserInfo(e,t)})),m=new u(".popup_type_add-card",(t=>{!function(){const t=m.getInputValues(),n=g(t.nameNew,t.titleURL,e);v.addItem(n),m.close()}()})),h=new class extends c{constructor(e){var t,n,r;super(e),t=this,r=e=>{let{name:t,link:n}=e;super.open(),this._newCardLinkTitle=document.querySelector(".popup__title-foto"),this._popup.style="background-image: url("+n+" )",this._newCardLinkTitle.textContent=t},(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(n="open"))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}}(".popup_type_foto");n.addEventListener("click",(()=>{f.resetValidation(),m.open()})),t.addEventListener("click",(()=>{const e=y.getUserInfo();p.open(),o.value=e.name,s.value=e.job,b.resetValidation()}));const y=new class{constructor(e){let{nameSelector:t,jobSelector:n}=e;this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(n)}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e){let{name:t,title:n}=e;this._nameElement.textContent=t,this._jobElement.textContent=n}}({nameSelector:".gallery__header",jobSelector:".gallery__subtext"});function g(e,t,n){return new d({name:e,link:t,cardTemplate:n,handleCardClick:h.open}).getElement()}p.setEventListener(),h.setEventListener(),m.setEventListener();const v=new class{constructor(e,t){let{items:n,renderer:r}=e;this._items=n,this._renderer=r,this._containerWrapper=document.querySelector(t)}renderItems(){this._items.forEach((e=>{const t=this._renderer(e);this.addItem(t)}))}addItem(e){this._containerWrapper.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:t=>g(t.name,t.link,e)},".card__area");v.renderItems();const b=new _(l,r),f=new _(l,i);b.enableValidation(),f.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQU8sTUFBTUEsRUFBZUMsU0FDekJDLGNBQWMsa0JBQ2RDLFFBQVFELGNBQWMsa0JBR1pFLEdBRmFILFNBQVNDLGNBQWMsZUFFbkJELFNBQVNDLGNBQWMscUJBSXhDRyxHQUhlSixTQUFTSyxpQkFBaUIsaUJBQ3RCTCxTQUFTQyxjQUFjLGtCQUUxQkQsU0FBU0MsY0FBYyxxQkFFdkNLLEVBQVdOLFNBQVNPLGVBQWUsY0FDbkNDLEVBQVlSLFNBQVNPLGVBQWUsZUFVcENFLEdBUmNULFNBQVNDLGNBQ2xDLGdDQUUwQkQsU0FBU0MsY0FBYyxrQkFDbkJELFNBQVNDLGNBQWMsc0JBRTVCRCxTQUFTQyxjQUFjLGdCQUV6QkQsU0FBU1UsTUFBTUMsUUFBUUMsU0FBU0MsTUFFNUNDLEdBRGNkLFNBQVNDLGNBQWMsb0JBQ3hCRCxTQUFTVSxNQUFNQyxRQUFRQyxTQUFTRyxPQThCN0NDLEdBN0JlaEIsU0FBU0MsY0FBYyxxQkFDdkJELFNBQVNDLGNBQWMsb0JBNEJ2QixDQUMxQmdCLGFBQWMsZUFDZEMsY0FBZSxnQkFDZkMscUJBQXNCLGlCQUN0QkMsb0JBQXFCLHlCQUNyQkMsZ0JBQWlCLDBCQUNqQkMsV0FBWSx5QixzYUM1REMsTUFBTUMsRUFDbkJDLFlBQVlDLEdBQWVDLEVBQUEsd0JBMEJSQyxJQUNqQkEsRUFBTUMsaUJBRVksV0FBZEQsRUFBTUUsS0FDUkMsS0FBS0MsT0FDUCxJQUNETCxFQUFBLDRCQWtCcUIsS0FDcEJJLEtBQUtDLE9BQU8sSUFsRFpELEtBQUtFLE9BQVNoQyxTQUFTQyxjQUFjd0IsR0FFckNLLEtBQUtHLGNBQWdCakMsU0FBU0MsY0FBYyxxQkFFNUM2QixLQUFLQyxNQUFNRyxLQUFLSixNQUVoQkEsS0FBS0ssbUJBQ1AsQ0FFQUMsT0FDRXBDLFNBQVNxQyxpQkFBaUIsUUFBU1AsS0FBS1EsaUJBRXhDUixLQUFLRSxPQUFPTyxVQUFVQyxJQUFJLGdCQUUxQlYsS0FBS0csY0FBY00sVUFBVUMsSUFBSSwwQkFDbkMsQ0FFQVQsUUFDRUQsS0FBS0UsT0FBT08sVUFBVUUsT0FBTyxnQkFFN0JYLEtBQUtHLGNBQWNNLFVBQVVFLE9BQU8sMkJBRXBDekMsU0FBUzBDLG9CQUFvQixRQUFTWixLQUFLUSxnQkFDN0MsQ0FVQUssbUJBQ0ViLEtBQUtHLGNBQWNJLGlCQUNqQixRQUNBUCxLQUFLSyxvQkFBb0JELEtBQUtKLE9BR2hDQSxLQUFLRSxPQUFPSyxpQkFBaUIsYUFBY1YsS0FFdkNBLEVBQU1pQixPQUFPTCxVQUFVTSxTQUFTLFdBQ2hDbEIsRUFBTWlCLE9BQU9MLFVBQVVNLFNBQVMsa0JBRWhDZixLQUFLQyxPQUNQLEdBRUosRUMvQ2EsTUFBTWUsVUFBc0J2QixFQUN6Q0MsWUFBWUMsRUFBZXNCLEdBQ3pCQyxNQUFNdkIsR0FDTkssS0FBS21CLGdCQUFrQkYsRUFDdkJqQixLQUFLb0IsTUFBUXBCLEtBQUtFLE9BQU8vQixjQUFjLGdCQUN2QzZCLEtBQUtxQixlQUFpQixlQUN4QixDQUVBQyxpQkFDRSxNQUFNQyxFQUFTQyxNQUFNQyxLQUFLekIsS0FBS29CLE1BQU03QyxpQkFBaUJ5QixLQUFLcUIsaUJBQ3JESyxFQUFTLENBQUMsRUFNaEIsT0FMQUgsRUFBT0ksU0FBU0MsSUFDVkEsRUFBTTdDLE9BQ1IyQyxFQUFPRSxFQUFNN0MsTUFBUTZDLEVBQU1DLE1BQzdCLElBRUtILENBQ1QsQ0FFQWIsbUJBQ0ViLEtBQUtvQixNQUFNYixpQkFBaUIsVUFBV3VCLElBQ3JDQSxFQUFJaEMsaUJBQ0osTUFBTWlDLEVBQWEvQixLQUFLc0IsaUJBQ3hCdEIsS0FBS21CLGdCQUFnQlksR0FDckIvQixLQUFLQyxPQUFPLElBRWRpQixNQUFNTCxrQkFDUixDQUVBWixRQUNFRCxLQUFLb0IsTUFBTVksUUFDWGQsTUFBTWpCLE9BQ1IsRUNsQ0ssTUFBTWdDLEVBQ1h2QyxZQUFZd0MsRUFBUUMsR0FDbEJuQyxLQUFLb0MsUUFBVUYsRUFDZmxDLEtBQUtxQyxhQUFlRixFQUNwQm5DLEtBQUtzQyxXQUFhZCxNQUFNQyxLQUN0QnpCLEtBQUtxQyxhQUFhOUQsaUJBQWlCeUIsS0FBS29DLFFBQVFoRCxnQkFFbERZLEtBQUt1QyxlQUFpQnZDLEtBQUtxQyxhQUFhbEUsY0FDdEM2QixLQUFLb0MsUUFBUS9DLHFCQUVqQixDQUNBbUQsZ0JBQWdCQyxFQUFjQyxHQUM1QixNQUFNQyxFQUFlM0MsS0FBS3FDLGFBQWFsRSxjQUNwQyxJQUFHc0UsRUFBYUcsWUFFbkJILEVBQWFoQyxVQUFVQyxJQUFJVixLQUFLb0MsUUFBUTdDLGlCQUN4Q29ELEVBQWFFLFlBQWNILEVBQzNCQyxFQUFhbEMsVUFBVUMsSUFBSVYsS0FBS29DLFFBQVE1QyxXQUMxQyxDQUVBc0QsZ0JBQWdCTCxHQUNkLE1BQU1FLEVBQWUzQyxLQUFLcUMsYUFBYWxFLGNBQ3BDLElBQUdzRSxFQUFhRyxZQUVuQkgsRUFBYWhDLFVBQVVFLE9BQU9YLEtBQUtvQyxRQUFRN0MsaUJBQzNDb0QsRUFBYWxDLFVBQVVFLE9BQU9YLEtBQUtvQyxRQUFRNUMsWUFDM0NtRCxFQUFhRSxZQUFjLEVBQzdCLENBRUFFLG9CQUFvQk4sR0FDYkEsRUFBYU8sU0FBU0MsTUFHekJqRCxLQUFLOEMsZ0JBQWdCTCxHQUZyQnpDLEtBQUt3QyxnQkFBZ0JDLEVBQWNBLEVBQWFTLGtCQUlwRCxDQUVBQyxxQkFDa0JuRCxLQUFLc0MsV0FBV2MsT0FDN0JYLEdBQWlCQSxFQUFhTyxTQUFTQyxTQUd4Q2pELEtBQUt1QyxlQUFlYyxnQkFBZ0IsWUFDcENyRCxLQUFLdUMsZUFBZTlCLFVBQVVFLE9BQU9YLEtBQUtvQyxRQUFROUMsdUJBRWxEVSxLQUFLdUMsZUFBZWUsYUFBYSxZQUFZLEdBQzdDdEQsS0FBS3VDLGVBQWU5QixVQUFVQyxJQUFJVixLQUFLb0MsUUFBUTlDLHFCQUVuRCxDQUVBaUUsa0JBQ0V2RCxLQUFLbUQscUJBQ0xuRCxLQUFLc0MsV0FBV1gsU0FBU2MsSUFDdkJ6QyxLQUFLOEMsZ0JBQWdCTCxFQUFhLEdBRXRDLENBQ0FlLG1CQUNFeEQsS0FBS3FDLGFBQWE5QixpQkFBaUIsVUFBV3VCLElBQzVDQSxFQUFJaEMsZ0JBQWdCLElBRXRCRSxLQUFLbUQscUJBQ0xuRCxLQUFLc0MsV0FBV1gsU0FBU2MsSUFDdkJBLEVBQWFsQyxpQkFBaUIsU0FBUyxLQUNyQ1AsS0FBSytDLG9CQUFvQk4sR0FDekJ6QyxLQUFLbUQsb0JBQW9CLEdBQ3pCLEdBRU4sRUNuRWEsTUFBTU0sRUFDbkIvRCxZQUFXZ0UsR0FBZ0QsSUFBL0MsS0FBRTNFLEVBQUksS0FBRTRFLEVBQUksYUFBRTFGLEVBQVksZ0JBQUUyRixHQUFpQkYsRUFDdkQxRCxLQUFLNkQsTUFBUTlFLEVBQ2JpQixLQUFLOEQsTUFBUUgsRUFDYjNELEtBQUsrRCxjQUFnQjlGLEVBQ3JCK0IsS0FBS2dFLGlCQUFtQkosRUFFeEI1RCxLQUFLaUUsU0FBV2pFLEtBQUtrRSxlQUNyQmxFLEtBQUttRSxlQUFpQm5FLEtBQUtpRSxTQUFTOUYsY0FBYyxtQkFDbEQ2QixLQUFLb0UsZUFBaUJwRSxLQUFLaUUsU0FBUzlGLGNBQWMsZ0JBRWxENkIsS0FBS21FLGVBQWV0QixZQUFjN0MsS0FBSzZELE1BQ3ZDN0QsS0FBS29FLGVBQWVDLElBQU1yRSxLQUFLOEQsTUFDL0I5RCxLQUFLb0UsZUFBZUUsSUFBTyxZQUFXdEUsS0FBSzZELFFBRTNDN0QsS0FBS3VFLGFBQWV2RSxLQUFLaUUsU0FBUzlGLGNBQWMsVUFFaEQ2QixLQUFLd0UsY0FBZ0J4RSxLQUFLaUUsU0FBUzlGLGNBQWMsd0JBQ2pENkIsS0FBS3lFLG9CQUNQLENBQ0FBLHFCQUNFekUsS0FBS3VFLGFBQWFoRSxpQkFBaUIsUUFBU1AsS0FBSzBFLFlBQVl0RSxLQUFLSixPQUNsRUEsS0FBS29FLGVBQWU3RCxpQkFBaUIsUUFBU1AsS0FBSzJFLGFBQWF2RSxLQUFLSixPQUVyRUEsS0FBS3dFLGNBQWNqRSxpQkFDakIsUUFDQVAsS0FBSzRFLG1CQUFtQnhFLEtBQUtKLE1BRWpDLENBQ0FrRSxlQUNFLE9BQU9sRSxLQUFLK0QsY0FBY2MsV0FBVSxFQUN0QyxDQUNBRixlQUNFM0UsS0FBS2dFLGlCQUFpQixDQUFFTCxLQUFNM0QsS0FBSzhELE1BQU8vRSxLQUFNaUIsS0FBSzZELE9BQ3ZELENBQ0FhLGNBQ0UxRSxLQUFLdUUsYUFBYTlELFVBQVVxRSxPQUFPLDBCQUNyQyxDQUVBRixxQkFDRTVFLEtBQUtpRSxTQUFTdEQsUUFDaEIsQ0FFQW9FLGFBQ0UsT0FBTy9FLEtBQUtpRSxRQUNkLEVDbEJGLE1BQU1lLEVBQWUsSUFBSWhFLEVBQ3ZCLDRCQUNBLENBQUNqQyxFQUFNa0csS0FDTEMsRUFBU0MsWUFBWXBHLEVBQU1rRyxFQUFJLElBTTdCRyxFQUFlLElBQUlwRSxFQUFjLHdCQUF5QnFFLEtBa0RoRSxXQUNFLE1BQU10RCxFQUFhcUQsRUFBYTlELGlCQUMxQmdFLEVBQVVDLEVBQ2R4RCxFQUFvQixRQUNwQkEsRUFBcUIsU0FDckI5RCxHQUVGdUgsRUFBU0MsUUFBUUgsR0FDakJGLEVBQWFuRixPQUNmLENBMURFeUYsRUFBcUIsSUFFakJDLEVBQVMsSUN0Q0EsY0FBNkJsRyxFQUMxQ0MsWUFBWUMsRyxVQUNWdUIsTUFBTXZCLEcsRUFBYyxLLEVBRWhCK0QsSUFBa0IsSUFBakIsS0FBQzNFLEVBQUksS0FBRTRFLEdBQUtELEVBQ25CeEMsTUFBTVosT0FDTk4sS0FBSzRGLGtCQUFvQjFILFNBQVNDLGNBQWMsc0JBRWhENkIsS0FBS0UsT0FBTzJGLE1BQVEseUJBQTJCbEMsRUFBTyxLQUN0RDNELEtBQUs0RixrQkFBa0IvQyxZQUFjOUQsQ0FBSSxHLCtTQVBuQixXLHVGQUN0QixHRG1DZ0Msb0JBQ2xDVCxFQUFjaUMsaUJBQWlCLFNBQVMsS0FDdEN1RixFQUFzQnZDLGtCQUN0QjZCLEVBQWE5RSxNQUFNLElBRXJCakMsRUFBZWtDLGlCQUFpQixTQUFTLEtBQ3ZDLE1BQU04RSxFQUFPSCxFQUFTYSxjQUN0QmYsRUFBYTFFLE9BQ2IzQixFQUFVa0QsTUFBUXdELEVBQUt0RyxLQUN2QkMsRUFBVzZDLE1BQVF3RCxFQUFLSixJQUN4QmUsRUFBcUJ6QyxpQkFBaUIsSUFHeEMsTUFBTTJCLEVBQVcsSUVwREYsTUFDYnhGLFlBQVdnRSxHQUFnQyxJQUEvQixhQUFFdUMsRUFBWSxZQUFFQyxHQUFheEMsRUFDdkMxRCxLQUFLbUcsYUFBZWpJLFNBQVNDLGNBQWM4SCxHQUMzQ2pHLEtBQUtvRyxZQUFjbEksU0FBU0MsY0FBYytILEVBQzVDLENBRUFILGNBQ0UsTUFBTyxDQUNMaEgsS0FBTWlCLEtBQUttRyxhQUFhdEQsWUFDeEJvQyxJQUFLakYsS0FBS29HLFlBQVl2RCxZQUUxQixDQUVBc0MsWUFBV2tCLEdBQWtCLElBQWpCLEtBQUV0SCxFQUFJLE1BQUVFLEdBQU9vSCxFQUN6QnJHLEtBQUttRyxhQUFhdEQsWUFBYzlELEVBQ2hDaUIsS0FBS29HLFlBQVl2RCxZQUFjNUQsQ0FDakMsR0ZvQzRCLENBQzVCZ0gsYUFBYyxtQkFDZEMsWUFBYSxzQkFPZixTQUFTWCxFQUFXeEcsRUFBTTRFLEVBQU0xRixHQU85QixPQU5nQixJQUFJd0YsRUFBSyxDQUN2QjFFLEtBQU1BLEVBQ040RSxLQUFNQSxFQUNOMUYsYUFBY0EsRUFDZDJGLGdCQUFpQitCLEVBQU9yRixPQUVYeUUsWUFDakIsQ0FaQUMsRUFBYW5FLG1CQUNiOEUsRUFBTzlFLG1CQUNQdUUsRUFBYXZFLG1CQVliLE1BQU0yRSxFQUFXLElHdkVGLE1BQ2I5RixZQUFXZ0UsRUFBc0I0QyxHQUFrQixJQUF2QyxNQUFFQyxFQUFLLFNBQUVDLEdBQVU5QyxFQUM3QjFELEtBQUt5RyxPQUFTRixFQUNkdkcsS0FBSzBHLFVBQVlGLEVBQ2pCeEcsS0FBSzJHLGtCQUFvQnpJLFNBQVNDLGNBQWNtSSxFQUNsRCxDQUVBTSxjQUNFNUcsS0FBS3lHLE9BQU85RSxTQUFTa0YsSUFDbkIsTUFBTUMsRUFBVTlHLEtBQUswRyxVQUFVRyxHQUMvQjdHLEtBQUt5RixRQUFRcUIsRUFBUSxHQUV6QixDQUVBckIsUUFBUXNCLEdBQ04vRyxLQUFLMkcsa0JBQWtCSyxRQUFRRCxFQUNqQyxHSHdEQSxDQUNFUixNTDdDd0IsQ0FDMUIsQ0FDRXhILEtBQU0sa0JBQ040RSxLQUFNLG9EQUVSLENBQ0U1RSxLQUFNLGNBQ040RSxLQUFNLHVEQUVSLENBQ0U1RSxLQUFNLGlCQUNONEUsS0FBTSwwREFFUixDQUNFNUUsS0FBTSxVQUNONEUsS0FBTSxtREFFUixDQUNFNUUsS0FBTSx3QkFDTjRFLEtBQU0sbURBRVIsQ0FDRTVFLEtBQU0saUJBQ040RSxLQUFNLGlES3VCTjZDLFNBQVdTLEdBR08xQixFQUZLMEIsRUFBU2xJLEtBQ1ZrSSxFQUFTdEQsS0FDeUIxRixJQUsxRCxlQUVGdUgsRUFBU29CLGNBYVQsTUFBTVosRUFBdUIsSUFBSS9ELEVBQWMvQyxFQUFjVixHQUN2RHNILEVBQXdCLElBQUk3RCxFQUFjL0MsRUFBY1IsR0FFOURzSCxFQUFxQnhDLG1CQUNyQnNDLEVBQXNCdEMsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIilcclxuICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2dhbGxlcnlcIik7XHJcbmV4cG9ydCBjb25zdCBwbGFjZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19hcmVhXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5FZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19wZW5jaWxcIik7XHJcbmV4cG9ydCBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZVwiKTtcclxuZXhwb3J0IGNvbnN0IHNhdmVQcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FsbGVyeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9fYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtX19lZGl0XCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybVBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtX19wbGFjZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucG9wdXBfX2lucHV0X3R5cGVfY2FyZC1saW5rXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uX2FjdGl2ZVwiKTtcclxuZXhwb3J0IGNvbnN0IG5ld0NhcmRMaW5rVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190aXRsZS1mb3RvXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGltYWdlSW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5mb3Jtcy5wcm9maWxlLmVsZW1lbnRzLm5hbWU7XHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9faGVhZGVyXCIpO1xyXG5leHBvcnQgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmZvcm1zLnByb2ZpbGUuZWxlbWVudHMudGl0bGU7XHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX3N1YnRleHRcIik7XHJcbmV4cG9ydCBjb25zdCBkZWxldGVCaWdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnV0dG9uRm90b1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgcGFnZVNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIucG9wdXBfX2Zvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIixcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLl9jbG9zZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX2JhY2tncm91bmRcIik7XHJcblxyXG4gICAgdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZWNsb3NlT3ZlcmxheTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcblxyXG4gICAgdGhpcy5fY2xvc2VPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJwYWdlX19iYWNrZ3JvdW5kX29wZW5lZFwiKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcclxuXHJcbiAgICB0aGlzLl9jbG9zZU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2VfX2JhY2tncm91bmRfb3BlbmVkXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuX2Nsb3NlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIHRoaXMuX2hhbmRsZWNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLnBvcHVwXCIpIHx8XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZVwiKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZWNsb3NlT3ZlcmxheSA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRDYWxsYmFjaykge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9zdWJtaXRDYWxsYmFjayA9IHN1Ym1pdENhbGxiYWNrO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gXCIucG9wdXBfX2lucHV0XCI7XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlmIChpbnB1dC5uYW1lKSB7XHJcbiAgICAgICAgdmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHRoaXMuZ2V0SW5wdXRWYWx1ZXMoKTtcclxuICAgICAgdGhpcy5fc3VibWl0Q2FsbGJhY2soZm9ybVZhbHVlcyk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuICB9XHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuX2lucHV0TGlzdC5ldmVyeShcclxuICAgICAgKGlucHV0RWxlbWVudCkgPT4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZSwgbGluaywgY2FyZFRlbXBsYXRlLCBoYW5kbGVDYXJkQ2xpY2sgfSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGNhcmRUZW1wbGF0ZTtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIHRoaXMuX2NhcmRMaW5rVGl0bGUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZWxsaXBzaXNcIik7XHJcbiAgICB0aGlzLl9jYXJkTGlua0lucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRMaW5rVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fY2FyZExpbmtJbnB1dC5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgdGhpcy5fY2FyZExpbmtJbnB1dC5hbHQgPSBgUGhvdG8gb2YgJHt0aGlzLl9uYW1lfWA7XHJcblxyXG4gICAgdGhpcy5faGVhcnRCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhcnRcIik7XHJcblxyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9oZWFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fdG9nZ2xlTGlrZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX2NhcmRMaW5rSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3NldEJpZ0ltYWdlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrLmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfVxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYXJkVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIH1cclxuICBfc2V0QmlnSW1hZ2UoKSB7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soeyBsaW5rOiB0aGlzLl9saW5rLCBuYW1lOiB0aGlzLl9uYW1lIH0pO1xyXG4gIH1cclxuICBfdG9nZ2xlTGlrZSgpIHtcclxuICAgIHRoaXMuX2hlYXJ0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19iYWNrZ3JvdW5kX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVDbGljaygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY2FyZFRlbXBsYXRlLFxyXG4gIHBsYWNlc0xpc3QsXHJcbiAgb3BlbkVkaXRCdXR0b24sXHJcbiAgY2xvc2VCdXR0b25zLFxyXG4gIHNhdmVQcm9maWxlTW9kYWwsXHJcbiAgZ2FsbGVyeUJ1dHRvbixcclxuICBmb3JtRWRpdCxcclxuICBmb3JtUGxhY2UsXHJcbiAgZ2FsbGVyeUxpbmssXHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIG5ld0NhcmRMaW5rVGl0bGUsXHJcbiAgaW1hZ2VJbkNhcmQsXHJcbiAgbmFtZUlucHV0LFxyXG4gIGdhbGxlcnlOYW1lLFxyXG4gIHRpdGxlSW5wdXQsXHJcbiAgZ2FsbGVyeVRpdGxlLFxyXG4gIGRlbGV0ZUJpZ0ltZyxcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgcGFnZVNldHRpbmdzLFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmNvbnN0IHByb2ZpbGVNb2RhbCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIFwiLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlXCIsXHJcbiAgKG5hbWUsIGpvYikgPT4ge1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8obmFtZSwgam9iKTtcclxuICB9XHJcbik7XHJcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi92ZW5kb3IvZm9udHMuY3NzXCI7XHJcblxyXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF90eXBlX2FkZC1jYXJkXCIsIChkYXRhKSA9PiB7XHJcbiAgaGFuZGxlQWRkQ2FyZFN1Ym1pdCgpO1xyXG59KTtcclxuY29uc3QgYmlnSW1nID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX3R5cGVfZm90b1wiKTtcclxuZ2FsbGVyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG5ld1BsYWNlRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBwb3B1cEFkZENhcmQub3BlbigpO1xyXG59KTtcclxub3BlbkVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBwcm9maWxlTW9kYWwub3BlbigpO1xyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IGRhdGEubmFtZTtcclxuICB0aXRsZUlucHV0LnZhbHVlID0gZGF0YS5qb2I7XHJcbiAgcHJvZmlsZUZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVTZWxlY3RvcjogXCIuZ2FsbGVyeV9faGVhZGVyXCIsXHJcbiAgam9iU2VsZWN0b3I6IFwiLmdhbGxlcnlfX3N1YnRleHRcIixcclxufSk7XHJcblxyXG5wcm9maWxlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5iaWdJbWcuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5wb3B1cEFkZENhcmQuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChuYW1lLCBsaW5rLCBjYXJkVGVtcGxhdGUpIHtcclxuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoe1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGxpbms6IGxpbmssXHJcbiAgICBjYXJkVGVtcGxhdGU6IGNhcmRUZW1wbGF0ZSxcclxuICAgIGhhbmRsZUNhcmRDbGljazogYmlnSW1nLm9wZW4sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld0NhcmQuZ2V0RWxlbWVudCgpO1xyXG59XHJcblxyXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGNhcmREYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGVDYXJkTmFtZSA9IGNhcmREYXRhLm5hbWU7XHJcbiAgICAgIGNvbnN0IHR5cGVDYXJkVXJsID0gY2FyZERhdGEubGluaztcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQodHlwZUNhcmROYW1lLCB0eXBlQ2FyZFVybCwgY2FyZFRlbXBsYXRlKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdDYXJkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLmNhcmRfX2FyZWFcIlxyXG4pO1xyXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Ym1pdCgpIHtcclxuICBjb25zdCBmb3JtVmFsdWVzID0gcG9wdXBBZGRDYXJkLmdldElucHV0VmFsdWVzKCk7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoXHJcbiAgICBmb3JtVmFsdWVzW1wibmFtZU5ld1wiXSxcclxuICAgIGZvcm1WYWx1ZXNbXCJ0aXRsZVVSTFwiXSxcclxuICAgIGNhcmRUZW1wbGF0ZVxyXG4gICk7XHJcbiAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkKTtcclxuICBwb3B1cEFkZENhcmQuY2xvc2UoKTtcclxufVxyXG5cclxuY29uc3QgcHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihwYWdlU2V0dGluZ3MsIGZvcm1FZGl0KTtcclxuY29uc3QgbmV3UGxhY2VGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IocGFnZVNldHRpbmdzLCBmb3JtUGxhY2UpO1xyXG5cclxucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5uZXdQbGFjZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3RvcilcclxuICB9XHJcbiBvcGVuID0gKHtuYW1lLCBsaW5rfSkgPT4ge1xyXG4gIHN1cGVyLm9wZW4oKTtcclxuICB0aGlzLl9uZXdDYXJkTGlua1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGl0bGUtZm90b1wiKTtcclxuICBcclxuICB0aGlzLl9wb3B1cC5zdHlsZSA9IFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgbGluayArIFwiIClcIjtcclxuICB0aGlzLl9uZXdDYXJkTGlua1RpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGpvYlNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fam9iRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgdGl0bGUgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fam9iRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJXcmFwcGVyKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcldyYXBwZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKG5ld0l0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lcldyYXBwZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJvcGVuRWRpdEJ1dHRvbiIsImdhbGxlcnlCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUVkaXQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1QbGFjZSIsIm5hbWVJbnB1dCIsImZvcm1zIiwicHJvZmlsZSIsImVsZW1lbnRzIiwibmFtZSIsInRpdGxlSW5wdXQiLCJ0aXRsZSIsInBhZ2VTZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiUG9wdXAiLCJjb25zdHJ1Y3RvciIsInBvcHVwU2VsZWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwidGhpcyIsImNsb3NlIiwiX3BvcHVwIiwiX2Nsb3NlT3ZlcmxheSIsImJpbmQiLCJfaGFuZGxlY2xvc2VPdmVybGF5Iiwib3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRXNjQ2xvc2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdENhbGxiYWNrIiwic3VwZXIiLCJfc3VibWl0Q2FsbGJhY2siLCJfZm9ybSIsIl9pbnB1dFNlbGVjdG9yIiwiZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5wdXQiLCJ2YWx1ZSIsImV2dCIsImZvcm1WYWx1ZXMiLCJyZXNldCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiX2J1dHRvbkVsZW1lbnQiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsInRleHRDb250ZW50IiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImV2ZXJ5IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVzZXRWYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsIkNhcmQiLCJfcmVmIiwibGluayIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfY2FyZFRlbXBsYXRlIiwiX2hhbmRsZUNhcmRDbGljayIsIl9lbGVtZW50IiwiX2dldFRlbXBsYXRlIiwiX2NhcmRMaW5rVGl0bGUiLCJfY2FyZExpbmtJbnB1dCIsInNyYyIsImFsdCIsIl9oZWFydEJ1dHRvbiIsIl9kZWxldGVCdXR0b24iLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfdG9nZ2xlTGlrZSIsIl9zZXRCaWdJbWFnZSIsIl9oYW5kbGVEZWxldGVDbGljayIsImNsb25lTm9kZSIsInRvZ2dsZSIsImdldEVsZW1lbnQiLCJwcm9maWxlTW9kYWwiLCJqb2IiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwicG9wdXBBZGRDYXJkIiwiZGF0YSIsIm5ld0NhcmQiLCJjcmVhdGVDYXJkIiwiY2FyZExpc3QiLCJhZGRJdGVtIiwiaGFuZGxlQWRkQ2FyZFN1Ym1pdCIsImJpZ0ltZyIsIl9uZXdDYXJkTGlua1RpdGxlIiwic3R5bGUiLCJuZXdQbGFjZUZvcm1WYWxpZGF0b3IiLCJnZXRVc2VySW5mbyIsInByb2ZpbGVGb3JtVmFsaWRhdG9yIiwibmFtZVNlbGVjdG9yIiwiam9iU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfam9iRWxlbWVudCIsIl9yZWYyIiwiY29udGFpbmVyV3JhcHBlciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyV3JhcHBlciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsIm5ld0l0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImNhcmREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__gallery");
export const placesList = document.querySelector(".card__area");

export const openEditButton = document.querySelector(".gallery__pencil");
export const closeButtons = document.querySelectorAll(".popup__close");
export const saveProfileModal = document.querySelector(".popup__button");

export const galleryButton = document.querySelector(".gallery__button");

export const formEdit = document.getElementById("form__edit");
export const formPlace = document.getElementById("form__place");
export const formAvatar = document.getElementById("form__avatar");

export const galleryLink = document.querySelector(
  ".popup__input_type_card-link"
);
export const createButton = document.querySelector(".button_active");
export const newCardLinkTitle = document.querySelector(".popup__title-foto");

export const imageInCard = document.querySelector(".card__image");

export const galleryAvatar = document.querySelector(".gallery__image");
export const nameInput = document.forms.profile.elements.name;
export const avatarInput = document.forms.profile.elements.avatar;
export const galleryName = document.querySelector(".gallery__header");
export const titleInput = document.forms.profile.elements.title;
export const galleryTitle = document.querySelector(".gallery__subtext");
export const deleteBigImg = document.querySelector("#closeButtonFoto");

export const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

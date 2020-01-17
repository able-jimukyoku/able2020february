// ABLE WEBSITE UI SCRIPT
// LOADING ELEMENTS

// HEAER
const headerBrandLink = document.getElementById('headerBrandLink');

// NAVIGATOR OPEN BUTTON
const navigatorOpenButton = document.getElementById('navigatorOpenButton');

// SCREEN MASK
const screenMask = document.getElementById('screenMask');

// SITE NAVIGATOR
const siteNavigator = document.getElementById('siteNavigator');
const navigatorBrandLink = document.getElementById('navigatorBrandLink');

// NAVIGATE BUTTONS
const conceptNavigateButton = document.getElementById('conceptNavigateButton');
const speakersNavigateButton = document.getElementById('speakersNavigateButton');
const programNavigateButton = document.getElementById('programNavigateButton');
const organizerNavigateButton = document.getElementById('organizerNavigateButton');

// DIALOGS
const speaker01Dialog = document.getElementById('speaker01Dialog');
const speaker02Dialog = document.getElementById('speaker02Dialog');
const speaker03Dialog = document.getElementById('speaker03Dialog');
const speaker04Dialog = document.getElementById('speaker04Dialog');
const speaker05Dialog = document.getElementById('speaker05Dialog');


// DIALOG CLOSING BUTTONS
const closeDialog01Button = document.getElementById('closeDialog01Button');
const closeDialog02Button = document.getElementById('closeDialog02Button');
const closeDialog03Button = document.getElementById('closeDialog03Button');
const closeDialog04Button = document.getElementById('closeDialog04Button');
const closeDialog05Button = document.getElementById('closeDialog05Button');


// PAGES
const topPage = document.getElementById('topPage');
const conceptPage = document.getElementById('conceptPage');
const speakersPage = document.getElementById('speakersPage');
const programPage = document.getElementById('programPage');
const organizerPage = document.getElementById('organizerPage');

// SPEAKER BUTTONS
const speaker01Button = document.getElementById('speaker01Button');
const speaker02Button = document.getElementById('speaker02Button');
const speaker03Button = document.getElementById('speaker03Button');
const speaker04Button = document.getElementById('speaker04Button');
const speaker05Button = document.getElementById('speaker05Button');


// UI FUNCTION
// OPEN NAVIGATOR AND MASK
const openNavigatorAndMask = () => {
  screenMask.classList.add('mask-on');
  siteNavigator.classList.add('navigator-on');
}

// CLOSE NAVIGATOR AND MASK
const closeNavigatorAndMask = () => {
  screenMask.classList.remove('mask-on');
  siteNavigator.classList.remove('navigator-on');
}

// CLOSE NAVIGATOR, DIALOG AND MASK
const closeNavigatorDialogAndMask = () => {
  screenMask.classList.remove('mask-on');
  siteNavigator.classList.remove('navigator-on');
  speaker01Dialog.classList.add('dialog-hidden');
  speaker01Dialog.classList.remove('dialog-on');
  speaker02Dialog.classList.add('dialog-hidden');
  speaker02Dialog.classList.remove('dialog-on');
  speaker03Dialog.classList.add('dialog-hidden');
  speaker03Dialog.classList.remove('dialog-on');
  speaker04Dialog.classList.add('dialog-hidden');
  speaker04Dialog.classList.remove('dialog-on');
  speaker05Dialog.classList.add('dialog-hidden');
  speaker05Dialog.classList.remove('dialog-on');
}

// ADDING EVENTLISTENER
// OPEN NAVIGATOR
navigatorOpenButton.addEventListener('click',() => {
  openNavigatorAndMask();
});

// CLOSE NAVIGATOR
screenMask.addEventListener('click', () => {
  closeNavigatorDialogAndMask();
})


// NAVIGATE TO SCROLL FOR TARGET PAGE
headerBrandLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

navigatorBrandLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});


conceptNavigateButton.addEventListener('click', () => {
  window.scrollTo({
    top: conceptPage.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});

speakersNavigateButton.addEventListener('click', () => {
  window.scrollTo({
    top: speakersPage.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});

programNavigateButton.addEventListener('click', () => {
  window.scrollTo({
    top: programPage.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});

organizerNavigateButton.addEventListener('click', () => {
  window.scrollTo({
    top: organizerPage.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});

conceptNavigateButton.addEventListener('click', () => {
  window.scrollTo({
    top: conceptPage.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  closeNavigatorAndMask();
});

const openDialogAndMask = (openingDialog) => {
  screenMask.classList.add('mask-on');
  openingDialog.classList.remove('dialog-hidden');
  openingDialog.classList.add('dialog-on');
}

const closeDialogAndMask = (closingDialog) => {
  screenMask.classList.remove('mask-on');
  closingDialog.classList.add('dialog-hidden');
  closingDialog.classList.remove('dialog-on');
}

speaker01Button.addEventListener('click', () => {
  openDialogAndMask(speaker01Dialog);
});

speaker02Button.addEventListener('click', () => {
  openDialogAndMask(speaker02Dialog);
});

speaker03Button.addEventListener('click', () => {
  openDialogAndMask(speaker03Dialog);
});

speaker04Button.addEventListener('click', () => {
  openDialogAndMask(speaker04Dialog);
});

speaker05Button.addEventListener('click', () => {
  openDialogAndMask(speaker05Dialog);
});

closeDialog01Button.addEventListener('click', () => {
  closeDialogAndMask(speaker01Dialog);
});

closeDialog02Button.addEventListener('click', () => {
  closeDialogAndMask(speaker02Dialog);
});

closeDialog03Button.addEventListener('click', () => {
  closeDialogAndMask(speaker03Dialog);
});

closeDialog04Button.addEventListener('click', () => {
  closeDialogAndMask(speaker04Dialog);
});

closeDialog05Button.addEventListener('click', () => {
  closeDialogAndMask(speaker05Dialog);
});



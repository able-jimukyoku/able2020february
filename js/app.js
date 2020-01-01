// ABLE WEBSITE UI SCRIPT
// LOADING ELEMENTS

// NAVIGATOR OPEN BUTTON
const navigatorOpenButton = document.getElementById('navigatorOpenButton');

// SCREEN MASK
const screenMask = document.getElementById('screenMask');

// SITE NAVIGATOR
const siteNavigator = document.getElementById('siteNavigator');

// NAVIGATE BUTTONS
const conceptNavigateButton = document.getElementById('conceptNavigateButton');
const speakersNavigateButton = document.getElementById('speakersNavigateButton');
const programNavigateButton = document.getElementById('programNavigateButton');
const organizerNavigateButton = document.getElementById('organizerNavigateButton');

// PAGES
const conceptPage = document.getElementById('conceptPage');
const speakersPage = document.getElementById('speakersPage');
const programPage = document.getElementById('programPage');
const organizerPage = document.getElementById('organizerPage');

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

// ADDING EVENTLISTENER
// OPEN NAVIGATOR
navigatorOpenButton.addEventListener('click',() => {
  openNavigatorAndMask();
});

// CLOSE NAVIGATOR
screenMask.addEventListener('click', () => {
  closeNavigatorAndMask();
})


// NAVIGATE TO SCROLL FOR TARGET PAGE
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



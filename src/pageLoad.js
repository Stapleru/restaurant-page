import createHomePage from './homePage';
import createMenuPage from './menuPage';
import createContactPage from './contactPage';

function createTabs(){
    const content = document.querySelector('#content');

    //Create tabs div
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    content.appendChild(tabs);

    //Create all tab buttons
    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';
    homeTab.addEventListener('click', () =>{
        clearContent()
        createHomePage();
    });

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click', () =>{
        clearContent()
        createMenuPage();
    });

    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', () =>{
        clearContent()
        createContactPage();
    });

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
}

function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
    createTabs();
};

function loadPage(){
    createTabs();
    createHomePage();
};

export default loadPage;
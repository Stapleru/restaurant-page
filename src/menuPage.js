
function createMenuPage(){
    
    const content = document.querySelector('#content');
    
    //Create menu text
    const menuText = document.createElement('p')
    menuText.textContent = 'Some item - 10$ \nSome other item - 4$ \nFinal item - 18$'
    menuText.classList.add('menu');
    content.appendChild(menuText);

};

export default createMenuPage;
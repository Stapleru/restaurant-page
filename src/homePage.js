
function createHomePage(){

    const content = document.querySelector('#content');

    //Create headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    content.appendChild(headline);

    //Create image
    const image = document.createElement('img');
    image.src = './img/background.jpg';
    image.height = '400';
    content.appendChild(image);

    //Create copy
    const copy = document.createElement('p');
    copy.textContent = "Our restaurant is the perfect choice for anyone looking for a great dining experience. From the moment you step inside, you'll be greeted with a warm and inviting atmosphere. Our menu is filled with delicious options, from appetizers to desserts, and everything in between. The quality of our food is unmatched, using only the freshest ingredients and expertly crafted recipes. Our staff is friendly and attentive, ensuring that your dining experience is nothing short of exceptional. Whether you're looking for a romantic dinner for two or a lively evening with friends, our restaurant is the perfect choice. We look forward to serving you and exceeding your expectations."
    content.appendChild(copy);
};

export default createHomePage;
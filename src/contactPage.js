
function createContactPage(){
    
    const content = document.querySelector('#content');
    
    //Create contact text
    const contactText = document.createElement('p');
    contactText.textContent = 'Book a table at our restaurant'
    content.appendChild(contactText);

    //Create phone number
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: XXX-XXX-XXXX'
    content.appendChild(phoneNumber)

};

export default createContactPage;
const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent['images']['logo-img'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['images']['cta-img'];
const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent['images']['accent-img'];


const topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
const topPara = document.querySelectorAll('.top-content p')
topPara[0].textContent = siteContent['main-content']['features-content'];
topPara[1].textContent = siteContent['main-content']['about-content']



const h4s = document.querySelectorAll('.bottom-content div h4')
h4s[0].textContent = siteContent['main-content']['services-h4']
h4s[1].textContent = siteContent['main-content']['product-h4']
h4s[2].textContent = siteContent['main-content']['vision-h4']
const paras = document.querySelectorAll('.bottom-content div p')
paras[0].textContent = siteContent['main-content']['services-content']
paras[1].textContent = siteContent['main-content']['product-content']
paras[2].textContent = siteContent['main-content']['vision-content']

document.querySelector('.cta-text h1').textContent = siteContent.cta.h1
document.querySelector('.cta-text button').textContent = siteContent.cta.button


const contact = document.querySelector('.contact');
const contactTitle = document.createElement('h4');
contactTitle.textContent = siteContent.contact['contact-h4'];
contact.appendChild(contactTitle);
const contactAddress = document.createElement('p');
contactAddress.textContent = siteContent.contact['address'];
contact.appendChild(contactAddress);
const contactPhone = document.createElement('p');
contactPhone.textContent = siteContent.contact['phone'];
contact.appendChild(contactPhone);
const contactEmail = document.createElement('p');
contactEmail.textContent = siteContent.contact['email'];
contact.appendChild(contactEmail);
contact.classList.add('contact')

const footer = document.querySelector('footer a');
footer.classList.add('bold')
footer.textContent = siteContent.footer.copyright



const navLinks = document.querySelectorAll('header nav a')
const navLinkText = Object.values(siteContent.nav);
navLinks.forEach((item, index) => {
  item.textContent = navLinkText[index]
  item.classList.add('italic')
});
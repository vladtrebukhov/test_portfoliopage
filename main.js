const githubLogo = document.querySelector('.github')
const linkedinLogo = document.querySelector('.linkedin')
console.log(githubLogo);
console.log(linkedinLogo);


function main () {
  linkedinLogo.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/vlad-trebukhov-113a4998/'
  });

  githubLogo.addEventListener('click', () => {
    window.location.href = 'https://github.com/vladtrebukhov'
  });
}

window.onload = main;

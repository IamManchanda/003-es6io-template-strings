const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  SCSS: 'Syntactically Awesome Style Sheets for CSS',
  JS: 'JavaScript: EcmaScript 2018',
  TS: 'TypeScript: EcmaScript Next',
  JSX: 'JSX: XML-like syntax extension to ECMAScript',
};

function addAbbreviations(strings, ...values) {
  const abbreviated = values.map((value) => {
    if (dict[value])
      return `<abbr title="${dict[value]}">${value}</abbr>`
    return value;
  });
  return strings.reduce((sentence, string, index) => {
    return `${sentence}${string}${abbreviated[index] || ''}`;
  }, '');
}

const first = 'Harry';
const last = 'Manchanda';
const sentence = addAbbreviations`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'}, ${'SCSS'}, ${'JS'}, ${'TS'} & ${'JSX'}`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');
p.innerHTML = sentence;
bio.appendChild(p); 

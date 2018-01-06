/**
 * JavaScript
 */

function highlight(strings, ...values) {
  let str = ''
  strings.forEach((string, index) => {
    str += `${string}<span contenteditable class="highlight">${values[index] || ''}</span>`;
  });
  return str;
}

const name = 'Snickers';
const age = 2;
const gender = 'male';
const sentence = highlight`My dog ${name}(${gender}) is ${age * 7} years old.`;

document.body.innerHTML = sentence;
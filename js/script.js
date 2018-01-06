/**
 * JavaScript
 */

const person = {
  name: 'Harry Manchanda',
  job: 'Frontend Web Developer',
  aim: 'FullStack Web & Mobile Apps Developer',
  city: 'Delhi',
  bio: 'Harry is a really studious guy who want to learn the best of the web.',
};

const markup = `
  <div class="person">
    <h3>
      ${person.name}
      <span class="job">${person.job}</span>
    </h3>
    <p>Aim to be a <span class="aim">${person.aim}</span></p>
    <p class="location">He lives in ${person.city}</p>
    <p class="bio">${person.bio}</p>
  </div>
`;

document.body.innerHTML = markup;

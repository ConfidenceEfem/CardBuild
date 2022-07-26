const andelaDatas = [
  {
    id: 1,
    name: 'Fawaz Akinola',
    stack: 'Web Developer',
    yrs: '3years',
  },
  {
    id: 2,
    name: 'Rose Tilda',
    stack: 'Product Designer',
    yrs: '2years',
  },
  {
    id: 3,
    name: 'Emmanuel Obi',
    stack: 'Frontend Engineerer',
    yrs: '5years',
  },
  {
    id: 4,
    name: 'Charles Tilda',
    stack: 'Cyber Security',
    yrs: '3years',
  },
  {
    id: 5,
    name: 'David Edewor',
    stack: 'Web Designer',
    yrs: '8years',
  },
  {
    id: 6,
    name: 'Amaka Etiola',
    stack: 'Product Manager',
    yrs: '2years',
  },
  {
    id: 7,
    name: 'Chinwedu Akintola',
    stack: 'Data Analyst',
    yrs: '10years',
  },
];

let cardHolder = document.getElementById('wrapper');

window.addEventListener('DOMContentLoaded', () => {
  // console.log(andelaDatas);

  let displayData = andelaDatas.map((props) => {
    return `<div class="card">
    <div id="name">${props.name}</div>
    <div id="stack">${props.stack}</div>
    <div id="years">${props.yrs}</div>
</div>`;
  });
  displayData = displayData.join('');
  //   console.log(displayData);
  //   console.log(cardHolder);
  cardHolder.innerHTML = displayData;
});

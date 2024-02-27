const loadData = async (searchPhone) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
  const data = await res.json()
  const showData = data.data
  displayPhones(showData);
}

/* to show in display from js
1. to catch byId('') 
2.create & element;
3. set a html 
4. set append()
*/

const displayPhones = (displayData) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = ''

  // display show all button if there is more than 8
  const showallButton = document.getElementById('show-all-button')
  if (displayData.length > 8) {
    showallButton.classList.remove('hidden')
  }
  else {
    showallButton.classList.add('hidden')
  }

  displayData = displayData.slice(0, 8)

  displayData.forEach(phones => {
    // console.log(phones);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 shadow-xl`
    phoneCard.innerHTML = `
    <figure><img src="${phones.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phones.brand}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    `
    phoneContainer.appendChild(phoneCard);
    phoneContainer.classList.add('phoneParent')

  });
  // off spinner
  loadingSpinner(false)

}
// searchBar
const handleButton = () => {
  // loadingSpinner call
  loadingSpinner(true)

  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // searchText.value.innerText = ''
  // console.log(searchText);
  loadData(searchText)

}

// loading spinner

const loadingSpinner = (isLoading) => {
  const spinner = document.getElementById("loading-spinner")
  if (isLoading) {
    spinner.classList.remove('hidden')
  }
  else {
    spinner.classList.add('hidden')
  }
}
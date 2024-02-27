const loadData = async (searchPhone = 13, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
  const data = await res.json()
  const showData = data.data
  displayPhones(showData, isShowAll);
}

/* to show in display from js
1. to catch byId('') 
2.create & element;
3. set a html 
4. set append()
*/

const displayPhones = (displayData, isShowAll) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = ''

  // display show all button if there is more than 8
  const showallButton = document.getElementById('show-all-button')
  if (displayData.length > 8 && !isShowAll) {
    showallButton.classList.remove('hidden')
  }
  else {
    showallButton.classList.add('hidden')
  }
  // for is showall emplement method
  if (!isShowAll) {
    displayData = displayData.slice(0, 8)
  }



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
            <div class="card-actions justify-center">
              <button onclick='showDetailButton("${phones.slug}");buttonShowModal.showModal()' class="btn btn-primary">show detail</button>
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

// show detail button
const showDetailButton = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json()
  const phone = data.data
  showDisplayDetail(phone)
}

// show displaybutton
const showDisplayDetail = (phone) => {
  console.log(phone);
  const showName = document.getElementById('show-detail-phone-name')
  showName.innerText = phone.name
  const showDetailContainer = document.getElementById('show-detail-container')
  showDetailContainer.innerHTML = `
  <img src="${phone.image}" alt="">
  <p>brand:${phone.brand}</p>
  <p>brand:${phone.releaseDate}</p>
  <p>brand:${phone.slug}</p>
  `
  buttonShowModal.showModal()
}



// searchBar
const handleButton = (isShowAll) => {
  // loadingSpinner call
  loadingSpinner(true)

  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // searchText.value.innerText = ''
  // console.log(searchText);
  loadData(searchText, isShowAll)

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


const showAllButton = () => {
  handleButton(true)
}

loadData()
const loadData = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  const data = await res.json()
  const showData = data.data
  displayPhones(showData);
}

const displayPhones = (displayData) => {
  const phoneContainer = document.getElementById('phone-container');
  displayData.forEach(phones => {
    console.log(phones);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card w-96 bg-base-100 shadow-xl`
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

  })

}

loadData()
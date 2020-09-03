import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cardsDiv = document.querySelector('.cards') // selecting cards

axios.get('https://api.github.com/users/TJJanus')
.then(response => {
  let newCard = cardMaker(response.data)
  cardsDiv.appendChild(newCard)
  
followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(response =>{
    cardsDiv.appendChild(cardMaker(response.data))
  })
})

})
.catch(err => {
  // error message
  console.log('Error')
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['mattcanavan', 'kubes2020', 'dustinmyers','justsml', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single dataect as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/





function cardMaker(data){
  //Div Element card - selecting
  const card = document.createElement('div')
  // Image Tag - selecting
  const image = document.createElement('img')
  // Card - Info Class selection
  const cardInfo = document.createElement('div')
  // H3 Selection 
  const h3 = document.createElement('h3')
  // P - username selection
  const usernameP = document.createElement('p')
  // P - Location 
  const locationP = document.createElement('p')
  //P - Profile a - link
  const profileP = document.createElement('p')
  const address = document.createElement('a')
  // P - Followers 
  const followers = document.createElement('p')
  // P - Following
  const following = document.createElement('p')
  // P - Bio 
  const bio = document.createElement('p')

  // setting class names
  card.classList.add('card') // adding card class to main div
  cardInfo.classList.add('card-info') // adding card-info class to div
  h3.classList.add('name') // adding class name to h3
  usernameP.classList.add('username')

  // setting text-content
  image.src = data.avatar_url // avatar url? 
  h3.textContent = data.name// name
  usernameP.textContent = data.login // login
  locationP.textContent = `Location: ${data.location}`  // null
  
  address.href = data.html_url
  profileP.textContent = 'Profile: '
  address.textContent = `${data.html_url}`
  followers.textContent = `Followers: ${data.followers}` // followers url 
  following.textContent = `Followers: ${data.following}`// following url
  bio.textContent = `Bio ${data.bio}`

//hierachy
card.appendChild(image)
card.appendChild(cardInfo)

cardInfo.appendChild(h3)
cardInfo.appendChild(usernameP)
cardInfo.appendChild(locationP)
cardInfo.appendChild(profileP)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)
profileP.appendChild(address)

return card 
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

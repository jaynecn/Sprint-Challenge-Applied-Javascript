// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function getLambdaTimes() {

  axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
      const topicsList = response.data.topics;
      console.log(topicsList);
      topicsList.forEach((info) => {
        const newtab = Tab(info);
        console.log(newtab);
        const newtopics = document.querySelector('.topics');
        newtopics.appendChild(newtab);
      })
        // const newtab = Tab(response.data);
        // const newDiv = document.createElement('div');
        // newDiv.appendChild(newcard);
        // const cards = document.querySelector('.cards');
        // cards.appendChild(newDiv);
    })
    .catch(error => {
        console.log(error.message);
    });
}
getLambdaTimes();

function Tab(info) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = info;
  return tab;
};

const results = document.getElementById('results')
const issues = document.getElementById('issues')
const apiRoute = "https://api.github.com/"


function getIssues() {
  fetch(`${apiRoute}repos/KingHenryJr/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showIssues)
}

function showIssues(json) {
  let info = document.createElement('p')
  let infoLink = document.createElement('a')
  let container = issues

  infoLink.innerText = `${json.url}`
  infoLink.setAttribute('href', json.html_url)
  container.append(infoLink)
}

function createIssue() {
  const title = document.getElementById('title').value
  const bod = document.getElementById('body').value

  let data = {
    title: title,
    body: bod
  }
  fetch(`${apiRoute}repos/KingHenryJr/javascript-fetch-lab/issues`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showIssues)
}

function showResults(json) {
  let info = document.createElement('a')
  let container = results
  info.innerText = `${json.html_url}`
  info.setAttribute('href', json.html_url)
  container.append(info)
}


function forkRepo() {
  fetch(`${apiRoute}repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showResults)}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

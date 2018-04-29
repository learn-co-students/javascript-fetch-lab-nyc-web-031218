
const userName = 'jdbean'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`
const issuesApi = `${baseApi}repos/${fork}/issues`

function getIssues(data) {
  fetch(issuesApi).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          showIssues(`<li>Title: <a href="${data[i].html_url}">${data[i].title}</a><span>&nbsp;| Body: ${data[i].body}</span></li>`);
        }
      } )
    })
}

function showIssues(issues) {
  document.querySelector('#issues').innerHTML = issues
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(issuesApi, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showResults(json) {
  // const results
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp =>
    resp.json())
    .then(json => {
    let repo = `<h3>Forked Successfully!</h3><a href="${json.html_url}"> ${json.html_url}</a>`;
    showForkedRepo(repo);
  });
}

function showForkedRepo(repo) {
  document.querySelector('#results').innerHTML = repo
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

const token = ''
function getIssues() {
  const link = '/javascript-fetch-lab/issues'
  fetch('api.github.com/repos/' + link, {
    body: 'test body',
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  })
}


function showIssues(json) {
  document.getElemendById('issues').append(json)
}

function createIssue() {
  const link = '/javascript-fetch-lab/issues'
  fetch('api.github.com/repos/' + link, {
    body: 'test body',
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showIssues(res.json()))
}

function showResults(json) {
  document.getElemendById('results').append(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch( 'api.github.com/repos/' + repo, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res.json()))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

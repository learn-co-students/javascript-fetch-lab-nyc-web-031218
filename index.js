function getIssues() {
  const myRepo = 'victoria-huang/javascript-fetch-lab'
  
  fetch(`https://api.github.com/repos/${myRepo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues = document.getElementById('issues');

  json.forEach( (issue) => {
    const newIssue = document.createElement('p');
    const newIssueLink = document.createElement('a');
    const linkText = document.createTextNode(`Issue Title: ${issue.title}`)
    newIssueLink.append(linkText);
    newIssueLink.href = `${issue.url}`;
    newIssue.append(newIssueLink);
    newIssue.innerHTML += `<br>Content: ${issue.body}`
    issues.append(newIssue);
  })
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const postData = {
    title: title,
    body: body
  }

  const myRepo = 'victoria-huang/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${myRepo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => getIssues());
}

function showResults(json) {
  const results = document.getElementById('results');
  const link = document.createElement("a")
  const linkText = document.createTextNode(`${json.name}`)
  link.append(linkText);
  link.title = "forked repo"
  link.href = `${json.html_url}`;
  results.append(link);
  // console.log(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}


// function showForkedRepo(json) {
//   const results = document.getElementById('results');
//   const link = document.createElement("a")
//   const linkText = document.createTextNode("Link to Forked Repo")
//   link.append(linkText);
//   link.title = "forked repo"
//   link.href = `${json.html_url}`;
//   results.append(link);
// }

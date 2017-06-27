var githubApi = "https://api.github.com/users/chcindyh2"
var githubRepos = "https://api.github.com/users/chcindyh2/repos"
var userName 

fetch(githubApi)
.then(function(data) {
    return data.json()
})
.then(function(json) {
    console.log(json)
    userName = json.login
    var usernameElement = document.getElementById('username')
    usernameElement.setAttribute('value', userName)
})

fetch(githubRepos)
.then(function(data){
    return data.json()
})
.then(function(json){
    console.log('REPOS:', json)
})


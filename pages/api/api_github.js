async function fetchGitHub(url) {
    const githubResponse = await fetch(url);
    const githubJSON = await githubResponse.json();
    const divAvatarUrl = document.querySelector('#imggithub');
    divAvatarUrl.innerHTML = `<img src=${githubJSON.avatar_url} alt=${githubJSON.name}/>`;
    console.log(githubJSON);
}

//fetchGitHub('https://api.github.com/users/jonathanpd');

export default fetchGitHub;
 
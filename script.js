const API_KEY = "YOUR_API_KEY";

const matchesContainer = document.getElementById("matches");
const searchInput = document.getElementById("search");

let allMatches = [];

// Live ম্যাচ লোড
async function loadMatches() {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?live=all",
            {
                headers: {
                    "x-apisports-key": API_KEY
                }
            }
        );

        const data = await response.json();

        allMatches = data.response || [];

        showMatches(allMatches);

    } catch (error) {
        matchesContainer.innerHTML =
        "<h2>❌ Failed to load live matches.</h2>";
        console.error(error);
    }
}

// ম্যাচ দেখানো
function showMatches(matches){

    matchesContainer.innerHTML="";

    if(matches.length===0){
        matchesContainer.innerHTML="<h2>No Live Match</h2>";
        return;
    }

    matches.forEach(match=>{

        matchesContainer.innerHTML += `

<div class="match-card">

<div class="league">
🏆 ${match.league.name}
</div>

<div class="teams">

<div class="team">
<img src="${match.teams.home.logo}">
<h3>${match.teams.home.name}</h3>
</div>

<div class="score">
<h1>${match.goals.home} - ${match.goals.away}</h1>

<span class="live">
${match.fixture.status.elapsed}' ${match.fixture.status.short}
</span>

</div>

<div class="team">
<img src="${match.teams.away.logo}">
<h3>${match.teams.away.name}</h3>
</div>

</div>

</div>

`;

    });

}

// Team Search
searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

const filtered = allMatches.filter(match=>

match.teams.home.name.toLowerCase().includes(value) ||

match.teams.away.name.toLowerCase().includes(value)

);

showMatches(filtered);

});

// Auto Refresh
loadMatches();

setInterval(loadMatches,30000);
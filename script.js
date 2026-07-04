const matches = [

{
league:"FIFA Club World Cup",
home:"Real Madrid",
away:"Al Hilal",
homeScore:3,
awayScore:1,
status:"FT"
},

{
league:"Premier League",
home:"Manchester City",
away:"Liverpool",
homeScore:2,
awayScore:2,
status:"78' LIVE"
},

{
league:"La Liga",
home:"Barcelona",
away:"Real Madrid",
homeScore:1,
awayScore:0,
status:"55' LIVE"
},

{
league:"Serie A",
home:"Inter Milan",
away:"Juventus",
homeScore:0,
awayScore:0,
status:"33' LIVE"
},

{
league:"UEFA Champions League",
home:"PSG",
away:"Bayern Munich",
homeScore:1,
awayScore:2,
status:"FT"
}

];

const container = document.getElementById("matches");

function loadMatches(list){

container.innerHTML="";

list.forEach(match=>{

container.innerHTML+=`

<div class="match-card">

<div class="league">
🏆 ${match.league}
</div>

<div class="teams">

<div class="team">
<h3>${match.home}</h3>
</div>

<div class="score">

<h1>${match.homeScore} - ${match.awayScore}</h1>

<span class="live">
${match.status}
</span>

</div>

<div class="team">
<h3>${match.away}</h3>
</div>

</div>

</div>

`;

});

}

loadMatches(matches);

// Search
document.getElementById("search").addEventListener("keyup",e=>{

const value=e.target.value.toLowerCase();

const result=matches.filter(match=>

match.home.toLowerCase().includes(value) ||

match.away.toLowerCase().includes(value)

);

loadMatches(result);

});
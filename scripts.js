var totVotes=0;
var totalVotesSpan=document.getElementById('total-votes');	
var actionVotes=0;
var animationVotes=0;
var biographyVotes=0;
var comedyVotes=0;
var dramaVotes=0;
var familyVotes=0;
var horrorVotes=0;
var musicalVotes=0;
var mysteryVotes=0;
var romanceVotes=0;
var scifiVotes=0;
var sportsVotes=0;
			
			
var actionBar=document.getElementById('action-bar');
var animationBar=document.getElementById('animation-bar');
var biographyBar=document.getElementById('biography-bar');
var comedyBar=document.getElementById('comedy-bar');
var dramaBar=document.getElementById('drama-bar');
var familyBar=document.getElementById('family-bar');
var horrorBar=document.getElementById('horror-bar');
var musicalBar=document.getElementById('musical-bar');
var mysteryBar=document.getElementById('mystery-bar');
var romanceBar=document.getElementById('romance-bar');
var scifiBar=document.getElementById('scifi-bar');
var sportsBar=document.getElementById('sports-bar');
			
			
var actionOutput=document.getElementById('action-votes');
var animationOutput=document.getElementById('animation-votes');
var biographyOutput=document.getElementById('biography-votes');
var comedyOutput=document.getElementById('comedy-votes');
var dramaOutput=document.getElementById('drama-votes');
var familyOutput=document.getElementById('family-votes');
var horrorOutput=document.getElementById('horror-votes');
var musicalOutput=document.getElementById('musical-votes');
var mysteryOutput=document.getElementById('mystery-votes');
var romanceOutput=document.getElementById('romance-votes');
var scifiOutput=document.getElementById('scifi-votes');
var sportsOutput=document.getElementById('sports-votes');
			
			
function actionVote(){
	actionVotes++;
	
	actionBar.style.width=actionVotes*5+'px';
	updateAllPcts();
}
			
function animationVote(){
	animationVotes++;
	animationBar.style.width=animationVotes*5+'px';
	updateAllPcts();
}

function biographyVote(){
	biographyVotes++;
	biographyBar.style.width=biographyVotes*5+'px';
	updateAllPcts();
}
			
function comedyVote(){
	comedyVotes++;
	comedyBar.style.width=comedyVotes*5+'px';
	updateAllPcts();
}
			
function dramaVote(){
	dramaVotes++;
	
	dramaBar.style.width=dramaVotes*5+'px';
	updateAllPcts();
}
			
function familyVote(){
	familyVotes++;
	familyBar.style.width=familyVotes*5+'px';
	updateAllPcts();
}
			
function horrorVote(){
	horrorVotes++;
	horrorBar.style.width=horrorVotes*5+'px';
	updateAllPcts();
}
		
function musicalVote(){
	musicalVotes++;
	musicalBar.style.width=musicalVotes*5+'px';
	updateAllPcts();
}
			
function mysteryVote(){
	mysteryVotes++;
	mysteryBar.style.width=mysteryVotes*5+'px';
	updateAllPcts();
}
			
function romanceVote(){
	romanceVotes++;
	romanceBar.style.width=romanceVotes*5+'px';
	updateAllPcts();
}
			
function scifiVote(){
	scifiVotes++;
	
	scifiBar.style.width=scifiVotes*5+'px';
	updateAllPcts();
}
			
function sportsVote(){
	sportsVotes++;
	sportsBar.style.width=sportsVotes*5+'px';
	updateAllPcts();
}
			
function updateAllPcts(){
	totVotes++;
				
	totalVotesSpan.innerHTML=''+ totVotes;
	
	actionOutput.innerHTML=actionVotes+ ' &nbsp &nbsp;' + (actionVotes/totVotes*100).toFixed(2) +'%';
	animationOutput.innerHTML=animationVotes+ '&nbsp &nbsp;' + (animationVotes/totVotes*100).toFixed(2) +'%';
	biographyOutput.innerHTML=biographyVotes+ '&nbsp &nbsp;' + (biographyVotes/totVotes*100).toFixed(2) +'%';
				
	comedyOutput.innerHTML=comedyVotes+ ' &nbsp &nbsp;' + (comedyVotes/totVotes*100).toFixed(2) +'%';
				
	dramaOutput.innerHTML=dramaVotes+ ' &nbsp &nbsp;' + (dramaVotes/totVotes*100).toFixed(2) +'%';
				
	familyOutput.innerHTML=familyVotes+ ' &nbsp &nbsp;' + (familyVotes/totVotes*100).toFixed(2) +'%';
				
	horrorOutput.innerHTML=horrorVotes+ ' &nbsp &nbsp;' + (horrorVotes/totVotes*100).toFixed(2) +'%';
				
	musicalOutput.innerHTML=musicalVotes+ ' &nbsp &nbsp;' + (musicalVotes/totVotes*100).toFixed(2) +'%';
				
	mysteryOutput.innerHTML=mysteryVotes+ ' &nbsp &nbsp;' + (mysteryVotes/totVotes*100).toFixed(2) +'%';
				
	romanceOutput.innerHTML=romanceVotes+ ' &nbsp &nbsp;' + (romanceVotes/totVotes*100).toFixed(2) +'%';
				
	scifiOutput.innerHTML=scifivotes+ ' &nbsp &nbsp;' + (scifiVotes/totVotes*100).toFixed(2) +'%';
				
	sportsOutput.innerHTML=sportsVotes+ ' &nbsp &nbsp;' + (sportsVotes/totVotes*100).toFixed(2) +'%';
}
			
		
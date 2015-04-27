var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];﻿
var count;
var peopleArray= [];
var generatedTeam = 0;


$(document).ready(function(){
	$(".btn").click(function(){
		$(this).toggleClass('selected');
	});


});







function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
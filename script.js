/** 
	Created by Christopher Beeston - 2021
**/

var app = angular.module('final', []);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http, $filter){
	$scope.show_menu = true;
	$scope.show_game = false;
	$scope.points = 0;
	$scope.current = 0;
	$scope.showHint = false;

	$scope.helpbox = ""

	$scope.levels = [
	{
		num:0,
		nameP1:"which one is a ",
		topic:"lookalike",
		nameP2:" URL?",
		hint:"nothing",
		worddef:"images/img_domain.png",
		left:"google.com",
		right:"googIe.com",
		correct:1,
		titleLeft:"",
		titleRight:""
	},
	{
		num:1,
		nameP1:"which one is exploting ",
		topic:"subdomains",
		nameP2:"?",
		hint:"nothing",
		worddef:"images/img_subdomain.png",
		left:"google.payments.com",
		right:"payments.google.com",
		correct:0,
		titleLeft:"",
		titleRight:""
	},
	{
		num:2,
		nameP1:"which ",
		topic:"link",
		nameP2:" do you think is fake?",
		hint:"nothing",
		worddef:"images/img_clickhere.png",
		left:"Click Here!",
		right:"Click Here!",
		correct:1,
		titleLeft:"https://support.google.com/",
		titleRight:"http://support.goggle.com/"

	},
	{
		num:3,
		nameP1:"are email ",
		topic:"attachments",
		nameP2:" safe to click on?",
		hint:"nothing",
		worddef:"images/img_attach.png",
		left:"Yes",
		right:"No",
		correct:1,
		titleLeft:"",
		titleRight:""

	},
	{ 
		num:4,
		nameP1:"but it is unsafe to trust ",
		topic:"attachments",
		nameP2:" with the extensions .PDF or .DOC?",
		hint:"nothing",
		worddef:"images/img_attach.png",
		left:"Yes",
		right:"No",
		correct:0,
		titleLeft:"",
		titleRight:""
	},
	{
		num:5,
		nameP1:"is safe to always trust an email from the ",
		topic:"domain",
		nameP2:" info@stuff.co.nz?",
		hint:"nothing",
		worddef:"images/img_spoof.png",
		left:"Yes",
		right:"No",
		correct:1,
		titleLeft:"",
		titleRight:""
	}
	// IMG Sources: https://www.flaticon.com/free-icon/bat-file-format-symbol_29529
	// IMG Sources: https://cdn.windowsfileviewer.com/images/types/docx.png
	]

	$scope.playGame = function () {
		$scope.show_menu = false;
		$scope.show_game = true;
	}

	$scope.getResult = function (side, correctAns, num) {
		if (side == correctAns) {
			$scope.points+=1;
		}
		$scope.current+=1;

		if (num==5) {
			$scope.show_game = false;
			$scope.show_end = true;
			if ($scope.points > 3 && $scope.points != 6) {
				$scope.end_text = "Nice Work!";
				$scope.end_text2 = "Try again and see if you can get 6/6!";
			} else if ($scope.points <= 3) {
				$scope.end_text = "Nice Attempt!";
				$scope.end_text2 = "Try again and see if you can improve your score!";
			} else if ($scope.points == 6){
				$scope.end_text= "Excellent Work!";
				$scope.end_text2= "Remember to always watch out for phishing scams!";
			}

		}
	}

	$scope.toMenu = function () {
		$scope.points = 0;
		$scope.show_end = false;
		$scope.show_howtoplay = false;
		$scope.show_about = false;
		$scope.show_menu = true;

		$scope.current = 0;
	}


	$scope.displayHelp = function(){
		$scope.tint="tint";
		$scope.showHint = true;
	}

	$scope.closeHelp = function(){
		$scope.tint="";
		$scope.showHint = false;
	}

	$scope.showHow = function() {
		$scope.show_menu = false;
		$scope.show_howtoplay = true;

	}

	$scope.showAbout = function() {
		$scope.show_menu = false;
		$scope.show_about = true;

	}

}]);
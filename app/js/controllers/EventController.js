'use strict';

eventsApp.controller('EventController', 
	function($scope) {
		$scope.cv = {
			name: "Ivan",
			lastname: "Jimenez",
			title: "Senior Web Developer",
			employer: "Reserve Bank of Australia",
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				state: 'CA'
			},
			imgUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directive Masterclass',
					creatorName: 'Ivan Jimenez',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'We are going to blow your mind',
					upVoteCount: 0

				},
				{
					name: 'Scope for fun and profit',
					creatorName: 'Juliana Ardila',
					duration: '3 hrs',
					level: 'Beginner',
					abstract: 'Making money and keeping it',
					upVoteCount: 0

				},
				{
					name: 'The Power of controllers',
					creatorName: 'Ivan Jimenez',
					duration: '2 hrs',
					level: 'Intermediate',
					abstract: 'Cause I\'m your lady and you\'re my man...',
					upVoteCount: 0

				}
			]
		}


		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
});
(function() {
	"use strict";
	
	angular
		.module("resumay")
		.factory("dataService", dataService);
	
	function dataService() {
		var service = {
			getSkills: getSkills,
			getJobs: getJobs,
			getBiography: getBiography,
			getLanguages: getLanguages
		};
		
		return service;
		
		function getSkills() {
			return [ '.NET', 'C#', 'ASP.NET MVC', 'JavaScript', 'HTML5', 'CSS', 'LESS', 'Node.js', 'Gulp', 'AngularJS', 'lodash', 'Bower' ];
		}
		
		function getJobs() {
			return [{ 
				'company': 'Wolters Kluwer Belgium',
				'title': 'Senior Developer',
				'from': '2007/09/01',
				'to': '2015/04/30'
			},{ 
				'company': 'Continuum Consulting',
				'title': 'Software Engineer',
				'from': '2015/05/01'
			}];
		}
		
		function getBiography() {
			return {
				'firstName': 'Bart',
				'name': 'Wijnants',
				'birthDate': '1984/04/29',
				'location': 'Hasselt, Belgium'
			};
		}
		
		function getLanguages() {
			return [{
				'name': 'Dutch',
				'level': 'Mother tongue'
			}, {
				'name': 'English',
				'level': 'Very good'
			}, {
				'name': 'French',
				'level': 'Moderate'
			}];
		}
	}
})();
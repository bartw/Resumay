(function() {
	"use strict";
	
	angular
		.module("resumay")
		.controller("SkillsController", SkillsController);
	
	SkillsController.$inject = ["dataService"];
	
	function SkillsController(dataService) {
		var skillsVm = this;
		skillsVm.skills = [];
		skillsVm.getSkills = getSkills;
		
		function getSkills() {
			skillsVm.skills = dataService.getSkills();
		}
	}
})();
(function(angular) {
	function taskDetailsCtrl($scope) {
		var ctrl = this;
		ctrl.editorTitle = 'Task Editor';
		ctrl.show = false;


		ctrl.$onChanges = function() {
			ctrl.show = typeof(ctrl.selectedTask) === 'object';
		}
	}

	angular.module('lnAngularApp').component('taskDetails', {
		templateUrl: 'app/templates/task-details.html',
		controller: taskDetailsCtrl,
		bindings: {
			selectedTask: '<'
		}
	})
}(window.angular));
(function(angular) {
	function taskListController($scope) {
		var ctrl = this;

		ctrl.pageTitle = 'My Task List';

		ctrl.onSelectTask = function(task) {
			ctrl.selectedTask = task;
		}
	}

	angular.module('lnAngularApp').component('taskList', {
		templateUrl: 'app/templates/task-list.html',
		controller: taskListController,
		bindings: {
			tasks: '<', // one-way binding
			selectedTask: '&' // outputs
		}
	})

}(window.angular));
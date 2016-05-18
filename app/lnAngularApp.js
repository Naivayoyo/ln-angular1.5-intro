(function(angular) {
	
	angular.module('lnAngularApp', []).controller('lnAngularAppCtrl', function() {
		var ctrl = this;

		ctrl.pageTitle = "Task Info";
		ctrl.editorTitle = 'Task Editor';

		ctrl.task = {
			id: 1,
			title: 'My Task',
			description: 'Demo'
		}
	});
}(window.angular));
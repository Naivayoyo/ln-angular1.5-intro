(function(angular) {
	

	/*	the lnAngularApp Module	*/
	angular.module('lnAngularApp', []).controller('lnAngularAppCtrl', function() {
		var ctrl = this;

		ctrl.pageTitle = 'Task Info';

		ctrl.editorTitle = 'Task Editor';

		ctrl.task = {
			id: 1,
			title: 'Make a demo',
			description: 'Make a lunch and learn demo!'
		};
	});

}(window.angular));
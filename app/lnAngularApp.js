(function(angular) {
	/*	the lnAngularApp Module	*/
	angular.module('lnAngularApp', []).controller('lnAngularAppCtrl', function() {
		var ctrl = this;
		ctrl.selectedTask = null;

		ctrl.tasks = [
			{ id: 1, title: 'Make espresso', description: 'Quick!' },
			{ id: 2, title: 'Make breakfast', description: 'Bacon, Egg & cheese  sandwich!' },
			{ id: 3, title: 'Go for a run', description: 'Put one foot in front of the other' },
			{	id: 4, title: 'Go to the store', description: 'Buy more veggies' },
			{	id: 5, title: 'Water flowers', description: 'They are getting droopy!' },
			{	id: 6, title: 'Make lunch', description: 'Something light' },
			{	id: 7, title: 'Paint a masterpiece', description: '\'Cause that\'s just how I do...' },
			{	id: 8, title: 'Go to the mall', description: 'Buy present for nephews' },
			{	id: 9, title: 'Call parents', description: 'Give yourself at least 45min...' },
			{	id: 10, title: 'Make dinner', description: 'You have guests coming' },
			{	id: 11, title: 'Rent a movie', description: 'Time to relax' }
		];

	});

}(window.angular));
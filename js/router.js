Todos.Router.map(function() {
	this.resource('todos', {path: '/' })
});
// Tells Ember to detect when app URl matches '/'
Todo.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});
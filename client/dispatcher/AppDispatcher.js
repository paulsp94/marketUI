var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');




var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(username) {
        this.dispatch({
            actionType: "Tasks",
            username: username,

        });
    }

});
module.exports = AppDispatcher;
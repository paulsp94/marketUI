var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
    createComment: function (username) {
        var action = {
            actionType: "Tasks",
            username: username,
        };

        AppDispatcher.dispatch(action);
    }

};
module.exports = AppActions



var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
require('events').EventEmitter.prototype._maxListeners = 100;

    var comments =[];


    var AppStore = assign({}, EventEmitter.prototype, {

        emitChange(){
            this.emit(CHANGE_EVENT);
        },

        addChangeListener(callback){
            this.on(CHANGE_EVENT,callback);
        },

        removeChangeListener(callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        getAll(){
            return comments;
        },


    });

    AppDispatcher.register(function (action) {

        switch(action.actionType) {
            case "Tasks":
                comments.push(action.username);
                AppStore.emitChange();
                break;


        }

        return true;

    });

module.exports = AppStore;

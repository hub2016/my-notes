//The function and operation about Event 
var EventUtil = {

    //Add Event
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    //Get EventObject
    getEvent: function(event) {
        return event ? event : window.event;
    },

    //Get Target
    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    //Prevent DefaultEvent
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    //Remove Event
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //Stop spread
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    //Get RelatedTarget
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },

    //Get Button
    getButton: function(event) {
        if (document.implementation.hasFeture("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 0:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    //Get charcode
    getCharCode: function(event) {
        if (typeof event.charCode === "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
};

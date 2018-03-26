var CLICK_EVENT = 'click',
    RESIZE_EVENT = 'resize',
    KEYDOWN_EVENT = 'keydown',
    WHEEL_EVENT = 'wheel mousewheel DOMMouseScroll',
    TOUCH_START_EVENT = supportTouch() ? 'touchstart' : 'mousedown',
    TOUCH_MOVE_EVENT = supportTouch() ? 'touchmove' : 'mousemove',
    TOUCH_END_EVENT = supportTouch() ? 'touchend' : 'mouseup',
    EVENT_NS = '.magnify';


var $W = $(window),
    $D = $(document),
    defaults = {
        draggable: true,
        resizable: true,
        movable: true,
        keyboard: true,
        title: true,
        modalWidth: 320,
        modalHeight: 320,
        fixedContent: true,
        fixedModalSize: false,
        initMaximized: false,
        gapThreshold: 0.02,
        ratioThreshold: 0.1,
        minRatio: 0.1,
        maxRatio: 16,
        headToolbar: [
            'maximize',
            'close'
        ],
        icons: {
            minimize: 'fa fa-window-minimize',
            maximize: 'fa fa-window-maximize',
            close: 'fa fa-close',
            zoomIn: 'fa fa-search-plus',
            zoomOut: 'fa fa-search-minus',
            prev: 'fa fa-arrow-left',
            next: 'fa fa-arrow-right',
            fullscreen: 'fa fa-photo',
            actualSize: 'fa fa-arrows-alt',
            rotateLeft: 'fa fa-rotate-left',
            rotateRight: 'fa fa-rotate-right',
            loader: 'fa fa-spinner fa-pulse'
          },
          // lang: 'en',
          i18n: {
            minimize: 'minimize',
            maximize: 'maximize',
            close: 'close',
            zoomIn: 'zoom-in(+)',
            zoomOut: 'zoom-out(-)',
            prev: 'prev(←)',
            next: 'next(→)',
            fullscreen: 'fullscreen',
            actualSize: 'actual-size(Ctrl+Alt+0)',
            rotateLeft: 'rotate-left(Ctrl+,)',
            rotateRight: 'rotate-right(Ctrl+.)'
          },
          multiInstances: true,
          initEvent: 'click',
          initAnimation: true,
          fixedModalPos: false
          // beforeOpen:$.noop,
          // afterOpen:$.noop,
          // beforeClose:$.noop,
          // afterClose:$.noop
    }

    // jquery element of calling plugin
    jqE1 = null,
    isMoving = false,
    isResizing = false,
    isOpened = false,
    isMaximized = false,
    isRotated = false,
    rotateAngle = 0;

    /**
 * Magnify Class
 */
var Magnigy = function(el, options) {
    var self = this;
    this.options = $.extend(true, {}, defaults, options);
    

}




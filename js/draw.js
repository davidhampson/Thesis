(function() {
  
  var App;
  App = {};
  /*
  	Init 
  */
  App.init = function() {
    App.canvas = document.createElement('canvas');
    host = document.getElementById('drawHost');
    
    host.appendChild(App.canvas);
    App.canvas.width = host.clientWidth;
    App.canvas.height = host.clientHeight;
    
    App.ctx = App.canvas.getContext("2d");
    App.ctx.strokeStyle = "#880000";
    App.ctx.lineWidth = 2;
    App.ctx.lineCap = "round";
    App.draw = function(x, y, type) {
      if (type === "dragstart") {
        App.ctx.beginPath();
        return App.ctx.moveTo(x, y);
      } else if (type === "drag") {
        App.ctx.lineTo(x, y);
        return App.ctx.stroke();
      } else if (type === "clear") {
        App.ctx.clearRect(0, 0, App.canvas.width, App.canvas.height);
      } else {
        //return App.ctx.closePath();
      }
    };
    
    App.socket = new WebSocket('wss://' + window.location.hostname + ':' + WS_PORT);
    App.socket.onmessage = function (message) {
      var signal = JSON.parse(message.data);
      if (signal.draw) {
        return App.draw(signal.x, signal.y, signal.type)
      }
    }
  };
  /*
  	Draw Events
  */
  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('teacher')) {
    $('canvas').live('drag dragstart dragend', function(e) {
      var offset, type, x, y;
      type = e.handleObj.type;
      offset = $(this).offset();
      e.offsetX = e.layerX - offset.left;
      e.offsetY = e.layerY - offset.top;
      x = e.offsetX;
      y = e.offsetY;
      App.draw(x, y, type);
      App.socket.send(JSON.stringify({'draw': true, x: x, y: y, type: type}));
    });
  } else {
    
  }

  $(function() {
    if (!urlParams.get('teacher')) {
      document.getElementById("clear").style.display = 'none';
    } else {
      document.getElementById("clear").addEventListener("click", function () {
        App.socket.send(JSON.stringify({'draw': true, type: 'clear'}));
      });
    }
    return App.init();
  });
}).call(this);
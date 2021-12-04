$(function () {
  //make connection
  var socket = io.connect('http://localhost:9898')

  socket.emit('user_connect', ({_id: 'userId', salon_sub_domain: 'khanabc'}))

});

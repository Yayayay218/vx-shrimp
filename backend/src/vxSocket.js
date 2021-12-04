'use strict';

exports.listen = (io) => {
  io.on('request', function (request) {
    const connection = request.accept(null, request.origin);
    // let data = { mode: 2, power: false, temp: 18, ac_mode: 1, fan: 4 };
    // connection.sendUTF(JSON.stringify(data));

    connection.on('message', function (message) {
      console.log('Received Message:', message);
    });

    connection.on('close', function (reasonCode, description) {
      console.log('Client has disconnected.');
    });
  });
  // let onlineUsers = [];
  // io.on('connection', (socket) => {
  //   socket.on('user_connect', (user) => {
  //     console.log(user)
  //     socket.join(user)
  //   });
  //
  //   socket.on('list_waiting', async (data) => {
  //     console.log("Emit list waiting")
  //     let result = await customerCheckinController.waitingListStream(data)
  //
  //     let countInService = await customerCheckinService.handleCountTickets({
  //       salon_sub_domain: data.salon_sub_domain,
  //       status: 'in service'
  //     })
  //
  //     let countClosed= await customerCheckinService.handleCountTickets({
  //       salon_sub_domain: data.salon_sub_domain,
  //       status: ['closed', 'cancelled']
  //     })
  //     // let receiver = await findUsersBySubdomain(onlineUsers, data.salon_sub_domain)
  //
  //     io.in(data.salon_sub_domain).emit('list_waiting', result)
  //     io.in(data.salon_sub_domain).emit('count_tickets', {
  //       in_service: countInService,
  //       closed: countClosed
  //     })
  //
  //     // receiver.forEach(el => {
  //     //   io.to(el.socket_id).emit('list_waiting', result)
  //     // })
  //   })
  //
  //   socket.on('disconnect', () => {
  //   });
  //
  // });
};

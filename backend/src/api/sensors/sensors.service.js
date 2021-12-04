import { Service } from '../../helpers/common';
import Sensors from './sensors.model';
import nodemailer from 'nodemailer'
import { wsServer } from '../../server'

const conditions = {
  temp: {
    min: 21,
    max: 24
  },
  ph: {
    min: 6,
    max: 6.8
  },
  tds: {
    min: 90,
    max: 110
  }
}

class SensorsService extends Service {
  constructor() {
    super(Sensors);
  }

  postDaily = async (body) => {
    let status = 'fine'
    let warning = ''
    const {temp = 0, ph = 0, tds = 0} = body

    if (Number(temp) < conditions.temp.min || Number(temp) > conditions.temp.max) {
      warning += `Nhiệt độ sida rồi, bật máy lạnh cái!!!\n`
    }
    // if (Number(ph) < conditions.ph.min || Number(ph) > conditions.ph.max) {
    //   warning += `PH sida rồi, Hiếu ghẻ xử lý mau!!!\n`
    // }
    if (Number(tds) < conditions.tds.min || Number(tds) > conditions.tds.max) {
      warning += `TDS sida rồi, Hiếu ghẻ kiểm tra gấp!!!\n`
    }

    if (warning !== '') {
      status = 'warning'
      
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'tepcauca.vx@gmail.com',
            pass: 'ttljhxasdzgdtbrc'
          }
        });

        const mailOptions = {
          from: 'tepcauca.vx@gmail.com',
          to: 'nguyenthanhminhhieu@gmail.com',
          subject: 'VX shrimp warning !!!',
          text: warning
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      } catch (e) {
        
      }
    }

    await Sensors.create({
      ...body,
      warning,
      status
    })

    return 'OK'
  }

  testSocket = async () => {
    let data = { mode: 2, power: true, temp: 18, ac_mode: 1, fan: 4 };

    wsServer.broadcastUTF(JSON.stringify(data))

    return 'OK'
  }
}

export default new SensorsService();

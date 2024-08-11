
const { Ticket } = require("./schemas/tickets");
const QRCode = require('qrcode');
const fs = require('fs');
module.exports = class Mongoose {

  async checkTicket(data) {
    for (let i = 1; i <= 50; i++) {
      const ticket = new Ticket({
        name: "Ticket " + i,
        number: i,
        email: "ticket" + i + "@email.com",
        phone: "",
        event: "66b3c8c299922d82a62323e6",
        date: new Date(),
        location: "Cerveceria San Martin",
      });
      const result = await ticket.save();
      const id = result._id.toString();
      const dir = `./tickets/`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const qr = await QRCode.toFile(`./tickets/${id}.png`, id, {
        type: "png",
        margin: 1,
        width: 300,
        scale: 4,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
      console.log(qr);
    }
    return "check from product db";
  }

  async checkTicket(data) {
    try {
      const ticket = await Ticket.findById(data);
      return ticket;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

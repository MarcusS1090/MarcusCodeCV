//aqui vamos a crear nuestro servidor para los contactos
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//servidor usado para enviar emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
//usamos un listenen para que corra esto en el puerto 5000
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

//aqui indicamos a que correo va, en este caso usare mi correo laboral
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "carlosrodas1090@gmail.com",
        pass: "spkakjflwtlwkyxh"
    }
});

//verificaremos que el correo este bien o si hay algun error
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Listo para enviar");
    }
});

//esto es para el contacto,con esto estaremos haciendo un pull request para crear un url con el contacto
router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "carlosrodas1090@gmail.com",
        subject: "formulario de contacto para trabajar con nosotros",
        html: `<p>Nombre: ${name}</p>
               <p>Correo: ${email}</p>
               <p>Telefono: ${phone}</p>
               <p>Mensaje: ${message}</p>`
    };
    //vamos a enviar un Rest/FULL request para saber que hemos enviado bien el correo o ha habido algun error
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json ({code: 200, status: "Mensaje Enviado"})
        }
    });
});
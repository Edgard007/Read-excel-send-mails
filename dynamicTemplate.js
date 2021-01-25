// Imports
require('dotenv').config(); // For ENV
const dynamicTemplate = (nameUser, passUser) => (
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dinamic Template</title>
    
        <style type="text/css">
            @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap');
    
            .container {
                margin-top: 35px;
                margin-bottom: 35px;
            }
    
            .imgHeader {
                width: 60%;
            }
    
            .centerRow {
                margin-top: 35px;
                margin-left: 50px;
                margin-right: 50px;
            }
    
            .title {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }
    
            .titleText {
                font-family: 'Montserrat';
                font-weight: 500;
            }
    
            .bodyEmail {
                text-align: justify;
                font-family: 'Montserrat';
                font-weight: 300;
                font-style: normal;
            }
    
            .secondBody {
                margin-top: 30px;
            }
    
            .farewell {
                margin-top: 50px;
            }
    
            .footer {
                margin-top: 50px;
            }
    
            .footerText {
                display: flex;
                justify-content: center;
                flex-direction: row;
            }
    
            .imgFooterCopy {
                margin-top: 10px;
                width: 15%;
            }
        </style>
    </head>
    
    <body>
    
        <div class="container">
    
            <!-- Header -->
            <div class="row justify-content-center">
                <img src="https://www.varenga.es/wp-content/uploads/2019/10/Imagen-OYE-web.jpg"
                    alt="" class="img-fluid imgHeader">
            </div>
            <div class="row">
                <div class="title">
                    <span class="titleText">Portal Digital Edgard
                        Palacios</span>
                </div>
            </div>
    
            <!-- Body -->
            <div class="centerRow">
                <div class="bodyEmail">
                    <span>Estimado sr/a: <strong>${nameUser}</strong> ,</span>
                    <br>
                    <span>
                        Por medio de este correo confirmamos su acceso para ingresar a nuestro Portal Digital Edgard
                        Palacios El
                        Salvador. Puede acceder desde el siguiente link:
                        <a href="https://edgardo-palacios.web.app/" href="_blank"> https://edgardo-palacios.web.app/ </a>
                    </span>
                    <div class="secondBody">
                        <span>
                            Para activar sus credenciales le invitamos a iniciar sesión con su dirección de correo
                            electrónico y
                            el siguiente código de acceso: <strong>${passUser}</strong>
                        </span>
                    </div>
                    <div class="secondBody">
                        <span>
                            Para mayor información o si tienen alguna duda sobre cómo acceder, puede contactarnos
                            de las siguientes maneras: edgard07hp@gmail.com o llamando al +503 78082296.
                        </span>
                    </div>
                    <div class="farewell">
                        Atentamente: Francisco Edgardo Hernández Palacios.
                        <br>
                        ¡Bienvenido/a!
                    </div>
                </div>
            </div>
    
            <!-- Footer -->
            <div class="footer">
                <div>
                    <img src="${process.env.AUTHOR_SIGNATURE}"
                        alt="" class="img-fluid" />
                </div>
                <div class="footerText">
                    Dynamic Template provisto por: &nbsp;<a href="https://edgardo-palacios.web.app/" href="_blank"> Edgard
                    </a>
                </div>
                <div class="footerText">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/hacker-14-448404.png" alt=""
                        class="imgFooterCopy img-fluid">
                </div>
            </div>
    
        </div>
    
    </body>
    
    </html>`
);

module.exports = { dynamicTemplate };
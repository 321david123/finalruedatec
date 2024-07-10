import { sign } from 'crypto';
import Link from 'next/link'
import Script from 'next/script';
export default function Login() {
    return (
    <>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/bootstrap/css/bootstrap.min.css"/>

	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
 
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/fonts/iconic/css/material-design-iconic-font.min.css"/>

	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/animate/animate.css"/>
	
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/css-hamburgers/hamburgers.min.css"/>
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/animsition/css/animsition.min.css"/>
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/select2/select2.min.css"/>
	
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/vendor/daterangepicker/daterangepicker.css"/>
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/css/util.css"/>
	<link rel="stylesheet" type="text/css" href="https://321david123.github.io/images/css/main.css"/>
     
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26" >
						Bienvenido, para continuar con la compra inicia sesión
					</span>


					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email"/>
						<span className="focus-input100" data-placeholder="Correo"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" name="pass"/>
						<span className="focus-input100" data-placeholder="Contraseña"></span>
					</div>
 
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Inicia sesión 
							</button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							No tienes una cuenta?
						</span>
						<a className="txt2" href="#">
							 Registrate
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
	

	<Script src="https://321david123.github.io/images/vendor/jquery/jquery-3.2.1.min.js"></Script>

	<Script src="https://321david123.github.io/images/vendor/animsition/js/animsition.min.js"></Script>

	<Script src="https://321david123.github.io/images/vendor/bootstrap/js/popper.js"></Script>
	<Script src="https://321david123.github.io/images/vendor/bootstrap/js/bootstrap.min.js"></Script>

	<Script src="https://321david123.github.io/images/vendor/select2/select2.min.js"></Script>

	<Script src="https://321david123.github.io/images/vendor/daterangepicker/moment.min.js"></Script>
	<Script src="https://321david123.github.io/images/vendor/daterangepicker/daterangepicker.js"></Script>

	<Script src="https://321david123.github.io/images/vendor/countdowntime/countdowntime.js"></Script>

	<Script src="https://321david123.github.io/images/js/main.js"></Script>
    </>
    );
}
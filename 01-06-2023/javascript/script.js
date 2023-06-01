const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
const apellido_p = urlParams.get('apellido_p');
const apellido_m = urlParams.get('apellido_m');
const correo = urlParams.get('correo');
//DOM variables-etiquetas
document.getElementById('nombre_home').textContent=nombre;
document.getElementById('apellido_p_home').textContent=apellido_p+"   ";
document.getElementById('apellido_m_home').textContent=apellido_m;
document.getElementById('correo_home').textContent=correo;

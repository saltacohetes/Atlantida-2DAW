# Práctica 3: Configuración segura de servidores (Nginx - jfc.com)

## 1. ¿Qué es un certificado SSL?
Un certificado SSL (Secure Sockets Layer) es un archivo que autentica y verifica la identidad de una web y permite cifrar el tráfico.

## 2. Creación de un certificado SSL (Autofirmado con OpenSSL)
Comando ejecutado en terminal:
$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/jfc-selfsigned.key \
  -out /etc/ssl/certs/jfc-selfsigned.crt

## 3. Instalación del certificado SSL en el servidor Nginx
Archivo de configuración `/etc/nginx/sites-available/jfc.com`:

server {
    listen 443 ssl;
    server_name jfc.com www.jfc.com;

    root /var/www/jfc;
    index index.html index.htm;

    ssl_certificate /etc/ssl/certs/jfc-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/jfc-selfsigned.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        try_files $uri $uri/ =404;
    }
}

Comandos de activación:
$ sudo ln -s /etc/nginx/sites-available/jfc.com /etc/nginx/sites-enabled/
$ sudo nginx -t
$ sudo systemctl restart nginx

## 4. Concepto de Server Block (Virtual Block)
Un Server Block en Nginx permite alojar y administrar múltiples sitios web independientes en un mismo servidor físico o virtual.

Documentos a modificar:
- /etc/nginx/sites-available/jfc.com: Configuración del sitio web.
- /etc/nginx/sites-enabled/: Directorio de sitios activos.
- /etc/hosts: Mapeo local de IP a jfc.com.

## 5. Redirección de todo el tráfico HTTP a HTTPS
Bloque de redirección para puerto 80:

server {
    listen 80;
    server_name jfc.com www.jfc.com;

    return 301 https://$host$request_uri;
}

## 6. Verificación del acceso por HTTPS mediante el navegador
Al acceder a https://jfc.com el navegador muestra la alerta "La conexión no es privada" debido a que el certificado es autofirmado. Al hacer clic en "Configuración avanzada" -> "Continuar a jfc.com (de forma insegura)", el sitio se muestra correctamente por HTTPS.
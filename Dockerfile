FROM nginx:latest

COPY out/ /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/next.conf 
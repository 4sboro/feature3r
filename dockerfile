#Use official Nginx image
FROM nginx:alpine

# Copy your website files into the Nginx public folder
COPY . /usr/share/nginx/html


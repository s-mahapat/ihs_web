# apache config for angular html5 mode
<VirtualHost *:80>
    ServerName localhost
    DocumentRoot </path/>
    <Directory </path/>>
       Options FollowSymLinks Multiviews Indexes
       AllowOverride All
       # OSX 10.10 / Apache 2.4
       Require all granted
       DirectoryIndex index.html index.cgi index.pl index.php index.xhtml
       RewriteEngine On
       # If an existing asset or directory is requested go to it as it is
       RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
       RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
       RewriteRule ^ - [L]

      # If the requested resource doesn't exist, use index.html
      RewriteRule ^ /index.html
   </Directory>
</VirtualHost>

# jfournier

Code source pour juliefourniersexologue.com

## Explication

Je crois en la liberté d'échange des savoirs technologies et informatiques, alors c'est pourquoi, avec l'accord du client, je rends public le code source de ce site internet.

## Technologies utilisées

Le site internet tourne sur un serveur Fedora avec 1 vCore et 1 GB de RAM, avec Caddy comme serveur HTTP.

Le site est compilé avec ParcelJS depuis le markup en Pug/Jade et les feuilles de style en Sass (SCSS).
PostCSS avec AutoPrefixer est utilisé pour la compatibilité, ainsi que terser, cssnano et htmlnano pour compresser le code final lors de la distribution.

La compatiblité avec Internet Explorer n'est pas assurée. 

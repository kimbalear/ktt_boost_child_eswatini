# moodle-theme_ktt_boost_child

http://localhost:8080/

## Moodle docs

https://docs.moodle.org/dev/Creating_a_theme_based_on_boost


## Github theme boost
https://github.com/moodle/moodle/blob/master/theme/boost/scss/preset/default.scss

## Docker
### install

docker pull bitnami/moodle:4.1.1

curl -sSL https://raw.githubusercontent.com/bitnami/containers/main/bitnami/moodle/docker-compose.yml > docker-compose.yml

docker-compose up -d

* docker network create moodle-network

* docker network rm moodle-network

docker volume create --name mariadb_data

docker run -d --name mariadb \
  --env ALLOW_EMPTY_PASSWORD=yes \
  --env MARIADB_USER=bn_moodle \
  --env MARIADB_PASSWORD=bitnami \
  --env MARIADB_DATABASE=bitnami_moodle \
  --network moodle-network \
  --volume mariadb_data:/bitnami/mariadb \
  bitnami/mariadb:latest

docker volume create --name moodle_data

docker run -d --name moodle \
  -p 8080:8080 -p 8443:8443 \
  --env ALLOW_EMPTY_PASSWORD=yes \
  --env MOODLE_DATABASE_USER=bn_moodle \
  --env MOODLE_DATABASE_PASSWORD=bitnami \
  --env MOODLE_DATABASE_NAME=bitnami_moodle \
  --network moodle-network \
  --volume moodle_data:/bitnami/moodle \
  bitnami/moodle:4.1.1

### cmd

https://hub.docker.com/r/bitnami/moodle

docker ps
docker exec -it moodle_dev-moodle-1 bash
cd /bitnami/moodle
ls

docker ps
docker cp D:\a23\GitHubRepo\ktt_boost_child moodle_dev-moodle-1:/bitnami/moodle/theme/ktt_boost_child

docker exec -it moodle_dev-moodle-1 bash
ls -l /bitnami/moodle/theme/ktt_boost_child/

### del directory

docker exec moodle_dev-moodle-1 rm -r /bitnami/moodle/theme/ktt_boost_child

## Testing
http://localhost/theme/ktt_boost_child/test.php

# dependencias 
* static page


Exception - htmlspecialchars(): Argument #1 ($string) must be of type string, array given
Coding error detected, it must be fixed by a programmer: page layout file [dirroot]/theme/ktt_boost_child/layout/frontpage.php does not contain the main content placeholder, please include "<?php echo $OUTPUT->main_content() ?>" in theme layout file.

Excepción: htmlspecialchars(): el argumento n.º 1 ($cadena) debe ser de tipo cadena, se proporciona una matriz
Error de codificación detectado, debe ser solucionado por un programador: el archivo de diseño de página [dirroot]/theme/ktt_boost_child/layout/frontpage.php no contiene el marcador de posición del contenido principal, incluya "<?php echo $OUTPUT->main_content() ?>" en el archivo de diseño del tema.
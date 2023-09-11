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

TOKEN
786b2d70191e8e690e6c3b4ac7045a45

# Implementation
## Files involved
* config.php
  - $THEME->javascripts = array('custom');
  - creacion de directorio y file en el raiz del tema hijo: /javascripts/custom.js
* mymobileapp.css
* frontpage.mustache

## Web services
* Custom services
  - Name: course_carousel
  - Short name: c_carousel
    | Enabled
    | Authorised users only
    |--------------------------------------
    | Add function: core_course_get_courses
  - Select authorised users

* Create token
  - Username/ID: Admin User
  - Service: course_carousel

* Habilitar protocolos
* Crear un usuario especifico: Se precisa un usuario de servicios web para representar el sistema que controla moodle.
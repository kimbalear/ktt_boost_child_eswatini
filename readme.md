# moodle-theme_ktt_boost_child

## Moodle docs

https://docs.moodle.org/dev/Creating_a_theme_based_on_boost


## Github theme boost
https://github.com/moodle/moodle/blob/master/theme/boost/scss/preset/default.scss

## Docker

https://hub.docker.com/r/bitnami/moodle

docker ps
docker exec -it joaqu-moodle-1 bash
cd /bitnami/moodle
ls

docker ps
docker cp D:\01NSP\repositories\ddMood\ktt_boost_child joaqu-moodle-1:/bitnami/moodle/theme/ktt_boost_child

docker exec -it joaqu-moodle-1 bash
ls /bitnami/moodle/theme/ktt_boost_child/

### del directory

docker exec joaqu-moodle-1 rm -r /bitnami/moodle/theme/ktt_boost_child

## Testing
http://172.21.64.1/theme/ktt_boost_child/test.php
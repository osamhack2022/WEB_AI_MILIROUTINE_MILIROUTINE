FROM mysql:latest

COPY ./scripts/ /docker-entrypoint-initdb.d/

# 컨테이너 안에서 ./insert_dummy.sh를 통해 더미 데이터를 넣어볼 수 있습니다
COPY ./dummy/ /tmp/
RUN chmod u+x /tmp/insert_dummy.sh
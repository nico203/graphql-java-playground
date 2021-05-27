FROM gradle:7.0.2-jdk11

COPY . /app

WORKDIR /app

RUN gradle build

CMD ["gradle", "run"]


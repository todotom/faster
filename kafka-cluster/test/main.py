from kafka import KafkaConsumer

if __name__ == '__main__':
    consumer = KafkaConsumer("quickstart-events", bootstrap_servers=["ubuntu-kafka:9092"])

    for msg in consumer:
        print(msg.value.decode('utf-8'))

from kafka import KafkaConsumer


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


topic = "quickstart-events"

if __name__ == '__main__':
    consumer = KafkaConsumer(topic, bootstrap_servers=["ubuntu-kafka:9092"])

    for msg in consumer:
        print(f"\n{bcolors.OKGREEN}{topic}{bcolors.ENDC}\n"
              f"{bcolors.OKCYAN}{msg.value.decode('utf-8')}{bcolors.ENDC}")

import threading
import time

# Variável compartilhada
contador = 0

# Função que representa uma seção crítica sem controle
def secao_critica_sem_controle():
    global contador
    temp = contador
    time.sleep(1)  # Simula uma operação demorada
    contador = temp + 1

# Função que representa uma seção crítica com controle usando semáforo
def secao_critica_com_controle(sem):
    global contador
    sem.acquire()
    temp = contador
    time.sleep(1)  # Simula uma operação demorada
    contador = temp + 1
    sem.release()

# Função para execução da versão sem controle
def sem_controle():
    for _ in range(5):
        secao_critica_sem_controle()
        print("Sem controle - Contador:", contador)

# Função para execução da versão com controle usando semáforo
def com_controle(sem):
    for _ in range(5):
        secao_critica_com_controle(sem)
        print("Com controle - Contador:", contador)

# Criação de um semáforo com um contador inicial de 1
sem = threading.Semaphore(1)

# Criação de threads para ambas as versões
t1 = threading.Thread(target=sem_controle)
t2 = threading.Thread(target=com_controle, args=(sem,))

# Inicia as threads
t1.start()
t2.start()

# Aguarda até que ambas as threads terminem
t1.join()
t2.join()

print("Final do programa")

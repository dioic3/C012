import threading

# Variável compartilhada para representar o número de clientes na fila
numero_clientes_na_fila = 0

# Função que representa uma seção crítica SEM controle
def cliente_chega_sem_controle():
    global numero_clientes_na_fila
    numero_clientes_na_fila += 1
    print(f"Cliente chegou na fila (SEM controle). Número de clientes na fila: {numero_clientes_na_fila}")

# Função que representa uma seção crítica COM controle
def cliente_chega_com_controle():
    global numero_clientes_na_fila
    with controle_acesso:
        numero_clientes_na_fila += 1
        print(f"Cliente chegou na fila (COM controle). Número de clientes na fila: {numero_clientes_na_fila}")

# Criação de um Lock para controlar o acesso à seção crítica
controle_acesso = threading.Lock()

# Criação de threads para clientes chegando SEM controle
threads_sem_controle = []
for _ in range(5):
    t = threading.Thread(target=cliente_chega_sem_controle)
    threads_sem_controle.append(t)

# Criação de threads para clientes chegando COM controle
threads_com_controle = []
for _ in range(5):
    t = threading.Thread(target=cliente_chega_com_controle)
    threads_com_controle.append(t)

# Inicia as threads para clientes chegando SEM controle
for t in threads_sem_controle:
    t.start()

# Inicia as threads para clientes chegando COM controle
for t in threads_com_controle:
    t.start()

# Aguarda até que todas as threads terminem
for t in threads_sem_controle:
    t.join()

for t in threads_com_controle:
    t.join()

print("Fim do programa")
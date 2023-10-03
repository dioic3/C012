class Process { // classe process
    constructor(id, arrivalTime, burstTime) { // 3 atributos
      this.id = id;
      this.arrivalTime = arrivalTime; // tempo de chegada do processo na ready queue
      this.burstTime = burstTime; // tempo de execução estimado do processo
    }
  }
  
  class Scheduler { // escalanador de processos
    constructor() {
      this.queue = []; // array queue onde os processos são armazenados
      this.currentTime = 0; // rastreia o tempo atual durante a execução do escalanador
    }
  
    addProcess(process) { // método que adiciona um processo a fila de processos do escalanador 
      this.queue.push(process);
    }
  
    runFCFS() {
      this.queue.sort((a, b) => a.arrivalTime - b.arrivalTime); // ordena os processos por ordem de chegada -> são processados na hora que chegaram
  
      for (const process of this.queue) { // itera pela fila de processos ordenada
        if (this.currentTime < process.arrivalTime) { // verifica se o tempo atual (currentTime) é menor que o tempo de chegada do processo atual
          this.currentTime = process.arrivalTime; // se for menor, atualiza o tempo atual para o tempo de chegada do processo atual
        }
  
        console.log(`Running process ${process.id} at time ${this.currentTime}`);   // registra a execução do processo atual no console o ID do processo e o tempo atual
        this.currentTime += process.burstTime; // atualiza o tempo atual adicionando o tempo de execução
      }
    }
  }

  // main.js

  // 3 objetos da classe process
  const process1 = new Process(1, 10, 5);
  const process2 = new Process(2, 2, 3);
  const process3 = new Process(3, 4, 2);

  // objeto da class scheduler
  const scheduler = new Scheduler();
  
  // adicionando cada processo a fila do escalanador com o metodo addProcess
  scheduler.addProcess(process1);
  scheduler.addProcess(process2);
  scheduler.addProcess(process3);
  
  // executa o código FCFS
  scheduler.runFCFS();
class Process {
    constructor(id, arrivalTime, burstTime) {
      this.id = id;
      this.arrivalTime = arrivalTime;
      this.burstTime = burstTime;
    }
  }
  
  class Scheduler {
    constructor() {
      this.queue = [];
      this.currentTime = 0;
    }
  
    addProcess(process) {
      this.queue.push(process);
    }
  
    runFCFS() {
      this.queue.sort((a, b) => a.arrivalTime - b.arrivalTime);
  
      for (const process of this.queue) {
        if (this.currentTime < process.arrivalTime) {
          this.currentTime = process.arrivalTime;
        }
  
        console.log(`Running process ${process.id} at time ${this.currentTime}`);
        this.currentTime += process.burstTime;
      }
    }
  }
  // main.js
  const process1 = new Process(1, 10, 5);
  const process2 = new Process(2, 2, 3);
  const process3 = new Process(3, 4, 2);
  
  const scheduler = new Scheduler();
  
  scheduler.addProcess(process1);
  scheduler.addProcess(process2);
  scheduler.addProcess(process3);
  
  scheduler.runFCFS();
  
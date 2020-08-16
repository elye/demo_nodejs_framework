const cluster = require('cluster');
const os = require('os');
const server = require('./server');

const numCPUs = os.cpus().length;

function createWorker() {
    const worker = cluster.fork();
    const { pid } = worker.process;
    console.info(`server-cluster:worker with PID ${pid} is created`);
}

function createWorkers() {
    Array(numCPUs).fill().forEach(() => {
        createWorker();
    });
}

function setRecreateWorkerOnExit() {
    cluster.on('exit', (deadWorker, code, signal) => {
        const oldWorkerPID = deadWorker.process.pid;
        console.warn(`server-cluster:worker with PID ${oldWorkerPID} exits with code: ${code}, signal: ${signal}`);
        createWorker();
    });
}

if (cluster.isMaster) {
    console.info(`server-cluster:Master with PID ${process.pid} is starting. Number of CPU is ${numCPUs}`);
    createWorkers();
    setRecreateWorkerOnExit();
} else {
    server.startService();
}

export default class Logger {
    static moduleName = "Infinity & Beyond | ";
    static logLevel = 0;

    static error(msg) {
        if(Logger.logLevel >= 0)
            console.log(Logger.moduleName + "[ERROR] " + msg);
    }

    static warning(msg) {
        if(Logger.logLevel >= 1)
            console.log(Logger.moduleName + "[WARNING] " + msg);
    }

    static info(msg) {
        if(Logger.logLevel >= 2)
            console.log(Logger.moduleName + "[INFO] " + msg);
    }

    static debug(msg) {
        if(Logger.logLevel >= 3)
            console.log(Logger.moduleName + "[DEBUG] " + msg);
    }
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const etatPiscicole_1 = __importDefault(require("./commands/etatPiscicole"));
const indicateursServices_1 = __importDefault(require("./commands/indicateursServices"));
class HubeauApi {
    constructor() {
        this.etatPiscicole = (0, etatPiscicole_1.default)();
        this.indicateursServices = (0, indicateursServices_1.default)();
    }
}
module.exports = HubeauApi;

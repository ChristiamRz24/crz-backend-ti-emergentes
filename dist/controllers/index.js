"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.Habitacion = exports.Estudiante = exports.Contratista = exports.Alquiler = void 0;
// Importar todos los controladores
const Alquiler = __importStar(require("./alquiler"));
exports.Alquiler = Alquiler;
const Contratista = __importStar(require("./contratista"));
exports.Contratista = Contratista;
const Estudiante = __importStar(require("./estudiante"));
exports.Estudiante = Estudiante;
const Habitacion = __importStar(require("./habitacion"));
exports.Habitacion = Habitacion;
const Usuario = __importStar(require("./usuario"));
exports.Usuario = Usuario;
//# sourceMappingURL=index.js.map
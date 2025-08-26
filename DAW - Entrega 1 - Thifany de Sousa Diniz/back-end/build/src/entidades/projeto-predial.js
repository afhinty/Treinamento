"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resultado = exports.Categoria = void 0;
var typeorm_1 = require("typeorm");
var arquiteto_1 = __importDefault(require("./arquiteto"));
var contrato_1 = __importDefault(require("./contrato"));
var Categoria;
(function (Categoria) {
    Categoria["EXTENS\u00C3O"] = "Extens\u00E3o";
    Categoria["IC"] = "Inicia\u00E7\u00E3o Cient\u00EDfica";
    Categoria["TCC"] = "TCC";
})(Categoria || (exports.Categoria = Categoria = {}));
;
var Resultado;
(function (Resultado) {
    Resultado["ARTIGO"] = "artigo";
    Resultado["DESENVOLVIMENTO"] = "desenvolvimento";
    Resultado["MONOGRAFIA"] = "monografia";
})(Resultado || (exports.Resultado = Resultado = {}));
;
var ProjetoPredial = /** @class */ (function (_super) {
    __extends(ProjetoPredial, _super);
    function ProjetoPredial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], ProjetoPredial.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProjetoPredial.prototype, "t\u00EDtulo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Categoria }),
        __metadata("design:type", String)
    ], ProjetoPredial.prototype, "categoria", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProjetoPredial.prototype, "\u00E1rea_atua\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", Date)
    ], ProjetoPredial.prototype, "data_in\u00EDcio", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProjetoPredial.prototype, "descri\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], ProjetoPredial.prototype, "concorrendo_bolsa", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Resultado }),
        __metadata("design:type", String)
    ], ProjetoPredial.prototype, "resultado", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return arquiteto_1.default; }, function (arquiteto) { return arquiteto.projeto-predials; }, { onDelete: "CASCADE" }),
        __metadata("design:type", arquiteto_1.default)
    ], ProjetoPredial.prototype, "arquiteto", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return contrato_1.default; }, function (contrato) { return contrato.projeto-predial; }),
        __metadata("design:type", Array)
    ], ProjetoPredial.prototype, "contratos", void 0);
    ProjetoPredial = __decorate([
        (0, typeorm_1.Entity)()
    ], ProjetoPredial);
    return ProjetoPredial;
}(typeorm_1.BaseEntity));
exports.default = ProjetoPredial;
//# sourceMappingURL=projeto-predial.js.map
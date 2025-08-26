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
var typeorm_1 = require("typeorm");
var construtor_1 = __importDefault(require("./construtor"));
var projeto-predial_1 = __importDefault(require("./projeto-predial"));
var Contrato = /** @class */ (function (_super) {
    __extends(Contrato, _super);
    function Contrato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Contrato.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Contrato.prototype, "necessidade_bolsa", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Contrato.prototype, "justificativa", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Contrato.prototype, "data_manifesta\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return projeto-predial_1.default; }, function (projeto-predial) { return projeto-predial.contratos; }, { onDelete: "CASCADE" }),
        __metadata("design:type", typeof (_a = typeof projeto-predial_1.default !== "undefined" && projeto-predial_1.default) === "function" ? _a : Object)
    ], Contrato.prototype, "projeto-predial", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return construtor_1.default; }, function (construtor) { return construtor.contratos; }, { onDelete: "CASCADE" }),
        __metadata("design:type", construtor_1.default)
    ], Contrato.prototype, "construtor", void 0);
    Contrato = __decorate([
        (0, typeorm_1.Entity)()
    ], Contrato);
    return Contrato;
}(typeorm_1.BaseEntity));
exports.default = Contrato;
//# sourceMappingURL=contrato.js.map
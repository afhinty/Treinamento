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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resultado = exports.Categoria = void 0;
var typeorm_1 = require("typeorm");
var arquiteto_1 = require("./arquiteto");
var contrato_1 = require("./contrato");
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
var ProjetoPredial = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.BaseEntity;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _título_decorators;
    var _título_initializers = [];
    var _título_extraInitializers = [];
    var _categoria_decorators;
    var _categoria_initializers = [];
    var _categoria_extraInitializers = [];
    var _área_atuação_decorators;
    var _área_atuação_initializers = [];
    var _área_atuação_extraInitializers = [];
    var _data_início_decorators;
    var _data_início_initializers = [];
    var _data_início_extraInitializers = [];
    var _descrição_decorators;
    var _descrição_initializers = [];
    var _descrição_extraInitializers = [];
    var _concorrendo_bolsa_decorators;
    var _concorrendo_bolsa_initializers = [];
    var _concorrendo_bolsa_extraInitializers = [];
    var _resultado_decorators;
    var _resultado_initializers = [];
    var _resultado_extraInitializers = [];
    var _arquiteto_decorators;
    var _arquiteto_initializers = [];
    var _arquiteto_extraInitializers = [];
    var _contratos_decorators;
    var _contratos_initializers = [];
    var _contratos_extraInitializers = [];
    var ProjetoPredial = _classThis = /** @class */ (function (_super) {
        __extends(ProjetoPredial_1, _super);
        function ProjetoPredial_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.título = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _título_initializers, void 0));
            _this.categoria = (__runInitializers(_this, _título_extraInitializers), __runInitializers(_this, _categoria_initializers, void 0));
            _this.área_atuação = (__runInitializers(_this, _categoria_extraInitializers), __runInitializers(_this, _área_atuação_initializers, void 0));
            _this.data_início = (__runInitializers(_this, _área_atuação_extraInitializers), __runInitializers(_this, _data_início_initializers, void 0));
            _this.descrição = (__runInitializers(_this, _data_início_extraInitializers), __runInitializers(_this, _descrição_initializers, void 0));
            _this.concorrendo_bolsa = (__runInitializers(_this, _descrição_extraInitializers), __runInitializers(_this, _concorrendo_bolsa_initializers, void 0));
            _this.resultado = (__runInitializers(_this, _concorrendo_bolsa_extraInitializers), __runInitializers(_this, _resultado_initializers, void 0));
            _this.arquiteto = (__runInitializers(_this, _resultado_extraInitializers), __runInitializers(_this, _arquiteto_initializers, void 0));
            _this.contratos = (__runInitializers(_this, _arquiteto_extraInitializers), __runInitializers(_this, _contratos_initializers, void 0));
            __runInitializers(_this, _contratos_extraInitializers);
            return _this;
        }
        return ProjetoPredial_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ProjetoPredial");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _título_decorators = [(0, typeorm_1.Column)()];
        _categoria_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Categoria })];
        _área_atuação_decorators = [(0, typeorm_1.Column)()];
        _data_início_decorators = [(0, typeorm_1.Column)({ type: "date" })];
        _descrição_decorators = [(0, typeorm_1.Column)()];
        _concorrendo_bolsa_decorators = [(0, typeorm_1.Column)()];
        _resultado_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Resultado })];
        _arquiteto_decorators = [(0, typeorm_1.ManyToOne)(function () { return arquiteto_1.default; }, function (arquiteto) { return arquiteto.projeto-predials; }, { onDelete: "CASCADE" })];
        _contratos_decorators = [(0, typeorm_1.OneToMany)(function () { return contrato_1.default; }, function (contrato) { return contrato.projeto-predial; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _título_decorators, { kind: "field", name: "t\u00EDtulo", static: false, private: false, access: { has: function (obj) { return "t\u00EDtulo" in obj; }, get: function (obj) { return obj.título; }, set: function (obj, value) { obj.título = value; } }, metadata: _metadata }, _título_initializers, _título_extraInitializers);
        __esDecorate(null, null, _categoria_decorators, { kind: "field", name: "categoria", static: false, private: false, access: { has: function (obj) { return "categoria" in obj; }, get: function (obj) { return obj.categoria; }, set: function (obj, value) { obj.categoria = value; } }, metadata: _metadata }, _categoria_initializers, _categoria_extraInitializers);
        __esDecorate(null, null, _área_atuação_decorators, { kind: "field", name: "\u00E1rea_atua\u00E7\u00E3o", static: false, private: false, access: { has: function (obj) { return "\u00E1rea_atua\u00E7\u00E3o" in obj; }, get: function (obj) { return obj.área_atuação; }, set: function (obj, value) { obj.área_atuação = value; } }, metadata: _metadata }, _área_atuação_initializers, _área_atuação_extraInitializers);
        __esDecorate(null, null, _data_início_decorators, { kind: "field", name: "data_in\u00EDcio", static: false, private: false, access: { has: function (obj) { return "data_in\u00EDcio" in obj; }, get: function (obj) { return obj.data_início; }, set: function (obj, value) { obj.data_início = value; } }, metadata: _metadata }, _data_início_initializers, _data_início_extraInitializers);
        __esDecorate(null, null, _descrição_decorators, { kind: "field", name: "descri\u00E7\u00E3o", static: false, private: false, access: { has: function (obj) { return "descri\u00E7\u00E3o" in obj; }, get: function (obj) { return obj.descrição; }, set: function (obj, value) { obj.descrição = value; } }, metadata: _metadata }, _descrição_initializers, _descrição_extraInitializers);
        __esDecorate(null, null, _concorrendo_bolsa_decorators, { kind: "field", name: "concorrendo_bolsa", static: false, private: false, access: { has: function (obj) { return "concorrendo_bolsa" in obj; }, get: function (obj) { return obj.concorrendo_bolsa; }, set: function (obj, value) { obj.concorrendo_bolsa = value; } }, metadata: _metadata }, _concorrendo_bolsa_initializers, _concorrendo_bolsa_extraInitializers);
        __esDecorate(null, null, _resultado_decorators, { kind: "field", name: "resultado", static: false, private: false, access: { has: function (obj) { return "resultado" in obj; }, get: function (obj) { return obj.resultado; }, set: function (obj, value) { obj.resultado = value; } }, metadata: _metadata }, _resultado_initializers, _resultado_extraInitializers);
        __esDecorate(null, null, _arquiteto_decorators, { kind: "field", name: "arquiteto", static: false, private: false, access: { has: function (obj) { return "arquiteto" in obj; }, get: function (obj) { return obj.arquiteto; }, set: function (obj, value) { obj.arquiteto = value; } }, metadata: _metadata }, _arquiteto_initializers, _arquiteto_extraInitializers);
        __esDecorate(null, null, _contratos_decorators, { kind: "field", name: "contratos", static: false, private: false, access: { has: function (obj) { return "contratos" in obj; }, get: function (obj) { return obj.contratos; }, set: function (obj, value) { obj.contratos = value; } }, metadata: _metadata }, _contratos_initializers, _contratos_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProjetoPredial = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProjetoPredial = _classThis;
}();
exports.default = ProjetoPredial;

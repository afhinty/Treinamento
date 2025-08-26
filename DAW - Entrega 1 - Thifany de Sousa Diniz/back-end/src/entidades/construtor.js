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
exports.Curso = void 0;
var typeorm_1 = require("typeorm");
var usu_rio_1 = require("./usu\u00E1rio");
var contrato_1 = require("./contrato");
var Curso;
(function (Curso) {
    Curso["EC"] = "Engenharia de Computa\u00E7\u00E3o";
    Curso["SI"] = "Sistemas de Informa\u00E7\u00E3o";
})(Curso || (exports.Curso = Curso = {}));
;
var Construtor = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.BaseEntity;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _curso_decorators;
    var _curso_initializers = [];
    var _curso_extraInitializers = [];
    var _ano_ingresso_decorators;
    var _ano_ingresso_initializers = [];
    var _ano_ingresso_extraInitializers = [];
    var _data_nascimento_decorators;
    var _data_nascimento_initializers = [];
    var _data_nascimento_extraInitializers = [];
    var _telefone_decorators;
    var _telefone_initializers = [];
    var _telefone_extraInitializers = [];
    var _contratos_decorators;
    var _contratos_initializers = [];
    var _contratos_extraInitializers = [];
    var _usuário_decorators;
    var _usuário_initializers = [];
    var _usuário_extraInitializers = [];
    var Construtor = _classThis = /** @class */ (function (_super) {
        __extends(Construtor_1, _super);
        function Construtor_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.curso = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _curso_initializers, void 0));
            _this.ano_ingresso = (__runInitializers(_this, _curso_extraInitializers), __runInitializers(_this, _ano_ingresso_initializers, void 0));
            _this.data_nascimento = (__runInitializers(_this, _ano_ingresso_extraInitializers), __runInitializers(_this, _data_nascimento_initializers, void 0));
            _this.telefone = (__runInitializers(_this, _data_nascimento_extraInitializers), __runInitializers(_this, _telefone_initializers, void 0));
            _this.contratos = (__runInitializers(_this, _telefone_extraInitializers), __runInitializers(_this, _contratos_initializers, void 0));
            _this.usuário = (__runInitializers(_this, _contratos_extraInitializers), __runInitializers(_this, _usuário_initializers, void 0));
            __runInitializers(_this, _usuário_extraInitializers);
            return _this;
        }
        return Construtor_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Construtor");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _curso_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Curso })];
        _ano_ingresso_decorators = [(0, typeorm_1.Column)()];
        _data_nascimento_decorators = [(0, typeorm_1.Column)({ type: "date" })];
        _telefone_decorators = [(0, typeorm_1.Column)()];
        _contratos_decorators = [(0, typeorm_1.OneToMany)(function () { return contrato_1.default; }, function (contrato) { return contrato.construtor; })];
        _usuário_decorators = [(0, typeorm_1.OneToOne)(function () { return usu_rio_1.default; }, function (usuário) { return usuário.construtor; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _curso_decorators, { kind: "field", name: "curso", static: false, private: false, access: { has: function (obj) { return "curso" in obj; }, get: function (obj) { return obj.curso; }, set: function (obj, value) { obj.curso = value; } }, metadata: _metadata }, _curso_initializers, _curso_extraInitializers);
        __esDecorate(null, null, _ano_ingresso_decorators, { kind: "field", name: "ano_ingresso", static: false, private: false, access: { has: function (obj) { return "ano_ingresso" in obj; }, get: function (obj) { return obj.ano_ingresso; }, set: function (obj, value) { obj.ano_ingresso = value; } }, metadata: _metadata }, _ano_ingresso_initializers, _ano_ingresso_extraInitializers);
        __esDecorate(null, null, _data_nascimento_decorators, { kind: "field", name: "data_nascimento", static: false, private: false, access: { has: function (obj) { return "data_nascimento" in obj; }, get: function (obj) { return obj.data_nascimento; }, set: function (obj, value) { obj.data_nascimento = value; } }, metadata: _metadata }, _data_nascimento_initializers, _data_nascimento_extraInitializers);
        __esDecorate(null, null, _telefone_decorators, { kind: "field", name: "telefone", static: false, private: false, access: { has: function (obj) { return "telefone" in obj; }, get: function (obj) { return obj.telefone; }, set: function (obj, value) { obj.telefone = value; } }, metadata: _metadata }, _telefone_initializers, _telefone_extraInitializers);
        __esDecorate(null, null, _contratos_decorators, { kind: "field", name: "contratos", static: false, private: false, access: { has: function (obj) { return "contratos" in obj; }, get: function (obj) { return obj.contratos; }, set: function (obj, value) { obj.contratos = value; } }, metadata: _metadata }, _contratos_initializers, _contratos_extraInitializers);
        __esDecorate(null, null, _usuário_decorators, { kind: "field", name: "usu\u00E1rio", static: false, private: false, access: { has: function (obj) { return "usu\u00E1rio" in obj; }, get: function (obj) { return obj.usuário; }, set: function (obj, value) { obj.usuário = value; } }, metadata: _metadata }, _usuário_initializers, _usuário_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Construtor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Construtor = _classThis;
}();
exports.default = Construtor;

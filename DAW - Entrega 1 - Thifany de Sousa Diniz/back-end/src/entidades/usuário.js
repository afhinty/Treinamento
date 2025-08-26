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
exports.Cores = exports.Status = exports.Perfil = void 0;
var typeorm_1 = require("typeorm");
var arquiteto_1 = require("./arquiteto");
var construtor_1 = require("./construtor");
var Perfil;
(function (Perfil) {
    Perfil["ALUNO"] = "construtor";
    Perfil["PROFESSOR"] = "arquiteto";
})(Perfil || (exports.Perfil = Perfil = {}));
var Status;
(function (Status) {
    Status["PENDENTE"] = "pendente";
    Status["ATIVO"] = "ativo";
})(Status || (exports.Status = Status = {}));
var Cores;
(function (Cores) {
    Cores["AMARELO"] = "yellow";
    Cores["ANIL"] = "indigo";
    Cores["AZUL"] = "blue";
    Cores["AZUL_PISCINA"] = "cyan";
    Cores["CINZA_ESCURO"] = "bluegray";
    Cores["LARANJA"] = "orange";
    Cores["ROSA"] = "pink";
    Cores["ROXO"] = "purple";
    Cores["VERDE"] = "green";
    Cores["VERDE_AZULADO"] = "teal";
})(Cores || (exports.Cores = Cores = {}));
var Usuário = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.BaseEntity;
    var _cpf_decorators;
    var _cpf_initializers = [];
    var _cpf_extraInitializers = [];
    var _perfil_decorators;
    var _perfil_initializers = [];
    var _perfil_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _senha_decorators;
    var _senha_initializers = [];
    var _senha_extraInitializers = [];
    var _questão_decorators;
    var _questão_initializers = [];
    var _questão_extraInitializers = [];
    var _resposta_decorators;
    var _resposta_initializers = [];
    var _resposta_extraInitializers = [];
    var _cor_tema_decorators;
    var _cor_tema_initializers = [];
    var _cor_tema_extraInitializers = [];
    var _arquiteto_decorators;
    var _arquiteto_initializers = [];
    var _arquiteto_extraInitializers = [];
    var _construtor_decorators;
    var _construtor_initializers = [];
    var _construtor_extraInitializers = [];
    var _data_criação_decorators;
    var _data_criação_initializers = [];
    var _data_criação_extraInitializers = [];
    var Usuário = _classThis = /** @class */ (function (_super) {
        __extends(Usuário_1, _super);
        function Usuário_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cpf = __runInitializers(_this, _cpf_initializers, void 0);
            _this.perfil = (__runInitializers(_this, _cpf_extraInitializers), __runInitializers(_this, _perfil_initializers, void 0));
            _this.status = (__runInitializers(_this, _perfil_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.nome = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _nome_initializers, void 0));
            _this.email = (__runInitializers(_this, _nome_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.senha = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _senha_initializers, void 0));
            _this.questão = (__runInitializers(_this, _senha_extraInitializers), __runInitializers(_this, _questão_initializers, void 0));
            _this.resposta = (__runInitializers(_this, _questão_extraInitializers), __runInitializers(_this, _resposta_initializers, void 0));
            _this.cor_tema = (__runInitializers(_this, _resposta_extraInitializers), __runInitializers(_this, _cor_tema_initializers, void 0));
            _this.arquiteto = (__runInitializers(_this, _cor_tema_extraInitializers), __runInitializers(_this, _arquiteto_initializers, void 0));
            _this.construtor = (__runInitializers(_this, _arquiteto_extraInitializers), __runInitializers(_this, _construtor_initializers, void 0));
            _this.data_criação = (__runInitializers(_this, _construtor_extraInitializers), __runInitializers(_this, _data_criação_initializers, void 0));
            __runInitializers(_this, _data_criação_extraInitializers);
            return _this;
        }
        return Usuário_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Usu\u00E1rio");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _cpf_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _perfil_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Perfil })];
        _status_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Status, default: Status.PENDENTE })];
        _nome_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _senha_decorators = [(0, typeorm_1.Column)()];
        _questão_decorators = [(0, typeorm_1.Column)()];
        _resposta_decorators = [(0, typeorm_1.Column)()];
        _cor_tema_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Cores })];
        _arquiteto_decorators = [(0, typeorm_1.OneToOne)(function () { return arquiteto_1.default; }, function (arquiteto) { return arquiteto.usuário; })];
        _construtor_decorators = [(0, typeorm_1.OneToOne)(function () { return construtor_1.default; }, function (construtor) { return construtor.usuário; })];
        _data_criação_decorators = [(0, typeorm_1.CreateDateColumn)()];
        __esDecorate(null, null, _cpf_decorators, { kind: "field", name: "cpf", static: false, private: false, access: { has: function (obj) { return "cpf" in obj; }, get: function (obj) { return obj.cpf; }, set: function (obj, value) { obj.cpf = value; } }, metadata: _metadata }, _cpf_initializers, _cpf_extraInitializers);
        __esDecorate(null, null, _perfil_decorators, { kind: "field", name: "perfil", static: false, private: false, access: { has: function (obj) { return "perfil" in obj; }, get: function (obj) { return obj.perfil; }, set: function (obj, value) { obj.perfil = value; } }, metadata: _metadata }, _perfil_initializers, _perfil_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: function (obj) { return "senha" in obj; }, get: function (obj) { return obj.senha; }, set: function (obj, value) { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, null, _questão_decorators, { kind: "field", name: "quest\u00E3o", static: false, private: false, access: { has: function (obj) { return "quest\u00E3o" in obj; }, get: function (obj) { return obj.questão; }, set: function (obj, value) { obj.questão = value; } }, metadata: _metadata }, _questão_initializers, _questão_extraInitializers);
        __esDecorate(null, null, _resposta_decorators, { kind: "field", name: "resposta", static: false, private: false, access: { has: function (obj) { return "resposta" in obj; }, get: function (obj) { return obj.resposta; }, set: function (obj, value) { obj.resposta = value; } }, metadata: _metadata }, _resposta_initializers, _resposta_extraInitializers);
        __esDecorate(null, null, _cor_tema_decorators, { kind: "field", name: "cor_tema", static: false, private: false, access: { has: function (obj) { return "cor_tema" in obj; }, get: function (obj) { return obj.cor_tema; }, set: function (obj, value) { obj.cor_tema = value; } }, metadata: _metadata }, _cor_tema_initializers, _cor_tema_extraInitializers);
        __esDecorate(null, null, _arquiteto_decorators, { kind: "field", name: "arquiteto", static: false, private: false, access: { has: function (obj) { return "arquiteto" in obj; }, get: function (obj) { return obj.arquiteto; }, set: function (obj, value) { obj.arquiteto = value; } }, metadata: _metadata }, _arquiteto_initializers, _arquiteto_extraInitializers);
        __esDecorate(null, null, _construtor_decorators, { kind: "field", name: "construtor", static: false, private: false, access: { has: function (obj) { return "construtor" in obj; }, get: function (obj) { return obj.construtor; }, set: function (obj, value) { obj.construtor = value; } }, metadata: _metadata }, _construtor_initializers, _construtor_extraInitializers);
        __esDecorate(null, null, _data_criação_decorators, { kind: "field", name: "data_cria\u00E7\u00E3o", static: false, private: false, access: { has: function (obj) { return "data_cria\u00E7\u00E3o" in obj; }, get: function (obj) { return obj.data_criação; }, set: function (obj, value) { obj.data_criação = value; } }, metadata: _metadata }, _data_criação_initializers, _data_criação_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Usuário = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Usuário = _classThis;
}();
exports.default = Usuário;

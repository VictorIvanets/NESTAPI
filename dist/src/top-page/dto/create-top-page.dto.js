"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopPage = exports.TopPageAdvantageDto = exports.HhDataDto = void 0;
const class_validator_1 = require("class-validator");
const top_page_model_1 = require("../top-page.model/top-page.model");
const class_transformer_1 = require("class-transformer");
class HhDataDto {
}
exports.HhDataDto = HhDataDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "juniorSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "middleSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "seniorSalary", void 0);
class TopPageAdvantageDto {
}
exports.TopPageAdvantageDto = TopPageAdvantageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdvantageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdvantageDto.prototype, "description", void 0);
class CreateTopPage {
}
exports.CreateTopPage = CreateTopPage;
__decorate([
    (0, class_validator_1.IsEnum)(top_page_model_1.TopLevelCategiry),
    __metadata("design:type", Number)
], CreateTopPage.prototype, "firstLevelCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "secondCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "alias", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HhDataDto),
    __metadata("design:type", HhDataDto)
], CreateTopPage.prototype, "hh", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TopPageAdvantageDto),
    __metadata("design:type", Array)
], CreateTopPage.prototype, "advantages", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "seoText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPage.prototype, "tagsTitle", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTopPage.prototype, "tags", void 0);
//# sourceMappingURL=create-top-page.dto.js.map
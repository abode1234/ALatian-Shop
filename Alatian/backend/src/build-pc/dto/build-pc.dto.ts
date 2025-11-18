import { IsString, IsOptional, IsBoolean, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { Category } from '../../../generated/prisma/client';

export class BuildPCComponentDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  category: Category;
}

export class CreateBuildPCDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isTemplate?: boolean;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BuildPCComponentDto)
  components: BuildPCComponentDto[];
}

export class UpdateBuildPCDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BuildPCComponentDto)
  components?: BuildPCComponentDto[];
}

export class UpdateBuildComponentDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  category: Category;
}


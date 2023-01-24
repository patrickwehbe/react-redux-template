import { IsString, IsNumber, IsBoolean, IsOptional } from "class-validator";

/**
 * Base Model
 */
export abstract class Model {
  /**
   * Arango Id of object
   */
  @IsOptional()
  @IsString()
  _id?: string;
  /**
   * Arango key
   */
  @IsOptional()
  @IsString()
  _key?: string;
  /**
   * Created date
   */
  @IsOptional()
  @IsNumber()
  createdAt?: number;
  /**
   * Key of user who created the object
   */
  @IsOptional()
  @IsString()
  createdBy?: string;
  /**
   * Modified date
   */
  @IsOptional()
  @IsNumber()
  modifiedAt?: number;
  /**
   * Key of user who modified the object
   */
  @IsOptional()
  @IsString()
  modifiedBy?: string;
  /**
   * Deleted date
   */
  @IsOptional()
  @IsNumber()
  deletedAt?: number;
  /**
   * Key of user who deleted the object
   */
  @IsOptional()
  @IsString()
  deletedBy?: string;
  /**
   * Soft delete flag
   */
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Assets are files stored in S3
 */
export class Asset {
  /**
   * File name
   */
  @IsString()
  name: string;
  /**
   * File Url (S3)
   */
  @IsString()
  url: string;
}

export type Sort = "ASC" | "DESC";

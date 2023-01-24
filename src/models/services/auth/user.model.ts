import { IsEmail, IsString } from "class-validator";
import { Model } from "../../shared";

export class User extends Model {
	@IsString()
	id: string;

	@IsString()
	firstname: string;

    @IsString()
	lastname: string;

	@IsEmail()
	email: string;
}

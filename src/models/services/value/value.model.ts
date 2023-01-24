import { FileInfo } from "../../shared/file.model";

export interface IValue {

    id:string
	
	/**
	 * Name of Value
	 */
	name: string;

	/**
	 * Description of value
	 */
	description: string;

	/**
	 * Url of the file (stored in S3)
	 */
	fileInfo?: FileInfo;

	/**
	 * If of the organization that owns the value
	 */
	organizationId?: string;

}

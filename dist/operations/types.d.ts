import { MigrationOptions } from '../types';
import { CreateType, DropType, RenameType, AddTypeAttribute, DropTypeAttribute, SetTypeAttribute, AddTypeValue, RenameTypeAttribute, RenameTypeValue } from './typesTypes';
export { CreateType, DropType, RenameType, AddTypeAttribute, DropTypeAttribute, SetTypeAttribute, AddTypeValue, RenameTypeAttribute, RenameTypeValue, };
export declare function dropType(mOptions: MigrationOptions): DropType;
export declare function createType(mOptions: MigrationOptions): CreateType;
export declare function dropTypeAttribute(mOptions: MigrationOptions): DropTypeAttribute;
export declare function addTypeAttribute(mOptions: MigrationOptions): AddTypeAttribute;
export declare function setTypeAttribute(mOptions: MigrationOptions): SetTypeAttribute;
export declare function addTypeValue(mOptions: MigrationOptions): AddTypeValue;
export declare function renameType(mOptions: MigrationOptions): RenameType;
export declare function renameTypeAttribute(mOptions: MigrationOptions): RenameTypeAttribute;
export declare function renameTypeValue(mOptions: MigrationOptions): RenameTypeValue;

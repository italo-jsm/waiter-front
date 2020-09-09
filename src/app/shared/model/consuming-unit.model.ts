import { CommandItem } from "./command-item.model";
import { SystemUser } from "./system-user.model";

export class ConsumingUnit{
    number: number;
    people: number;
    updatedBy: SystemUser;
    updatedAt: Date;
    commandItens: CommandItem[]
}
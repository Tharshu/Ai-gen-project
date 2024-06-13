import { Privileges as TPrivileges } from "../api/privileges/Privileges";

export const PRIVILEGES_TITLE_FIELD = "name";

export const PrivilegesTitle = (record: TPrivileges): string => {
  return record.name?.toString() || String(record.id);
};

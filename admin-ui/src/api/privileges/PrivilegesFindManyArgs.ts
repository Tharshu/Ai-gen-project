import { PrivilegesWhereInput } from "./PrivilegesWhereInput";
import { PrivilegesOrderByInput } from "./PrivilegesOrderByInput";

export type PrivilegesFindManyArgs = {
  where?: PrivilegesWhereInput;
  orderBy?: Array<PrivilegesOrderByInput>;
  skip?: number;
  take?: number;
};

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrivilegesService } from "./privileges.service";
import { PrivilegesControllerBase } from "./base/privileges.controller.base";

@swagger.ApiTags("privileges")
@common.Controller("privileges")
export class PrivilegesController extends PrivilegesControllerBase {
  constructor(
    protected readonly service: PrivilegesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrivilegesResolverBase } from "./base/privileges.resolver.base";
import { Privileges } from "./base/Privileges";
import { PrivilegesService } from "./privileges.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Privileges)
export class PrivilegesResolver extends PrivilegesResolverBase {
  constructor(
    protected readonly service: PrivilegesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Privileges } from "./Privileges";
import { PrivilegesCountArgs } from "./PrivilegesCountArgs";
import { PrivilegesFindManyArgs } from "./PrivilegesFindManyArgs";
import { PrivilegesFindUniqueArgs } from "./PrivilegesFindUniqueArgs";
import { CreatePrivilegesArgs } from "./CreatePrivilegesArgs";
import { UpdatePrivilegesArgs } from "./UpdatePrivilegesArgs";
import { DeletePrivilegesArgs } from "./DeletePrivilegesArgs";
import { PrivilegesService } from "../privileges.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Privileges)
export class PrivilegesResolverBase {
  constructor(
    protected readonly service: PrivilegesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "read",
    possession: "any",
  })
  async _privilegesItemsMeta(
    @graphql.Args() args: PrivilegesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Privileges])
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "read",
    possession: "any",
  })
  async privilegesItems(
    @graphql.Args() args: PrivilegesFindManyArgs
  ): Promise<Privileges[]> {
    return this.service.privilegesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Privileges, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "read",
    possession: "own",
  })
  async privileges(
    @graphql.Args() args: PrivilegesFindUniqueArgs
  ): Promise<Privileges | null> {
    const result = await this.service.privileges(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Privileges)
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "create",
    possession: "any",
  })
  async createPrivileges(
    @graphql.Args() args: CreatePrivilegesArgs
  ): Promise<Privileges> {
    return await this.service.createPrivileges({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Privileges)
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "update",
    possession: "any",
  })
  async updatePrivileges(
    @graphql.Args() args: UpdatePrivilegesArgs
  ): Promise<Privileges | null> {
    try {
      return await this.service.updatePrivileges({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Privileges)
  @nestAccessControl.UseRoles({
    resource: "Privileges",
    action: "delete",
    possession: "any",
  })
  async deletePrivileges(
    @graphql.Args() args: DeletePrivilegesArgs
  ): Promise<Privileges | null> {
    try {
      return await this.service.deletePrivileges(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

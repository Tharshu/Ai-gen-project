import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrivilegesModuleBase } from "./base/privileges.module.base";
import { PrivilegesService } from "./privileges.service";
import { PrivilegesController } from "./privileges.controller";
import { PrivilegesResolver } from "./privileges.resolver";

@Module({
  imports: [PrivilegesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrivilegesController],
  providers: [PrivilegesService, PrivilegesResolver],
  exports: [PrivilegesService],
})
export class PrivilegesModule {}

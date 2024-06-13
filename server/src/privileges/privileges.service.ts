import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrivilegesServiceBase } from "./base/privileges.service.base";

@Injectable()
export class PrivilegesService extends PrivilegesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

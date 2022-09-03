import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThingsInput } from "../inputs/UserCreateOrConnectWithoutThingsInput";
import { UserCreateWithoutThingsInput } from "../inputs/UserCreateWithoutThingsInput";
import { UserUpdateWithoutThingsInput } from "../inputs/UserUpdateWithoutThingsInput";
import { UserUpsertWithoutThingsInput } from "../inputs/UserUpsertWithoutThingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutThingsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutThingsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutThingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutThingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutThingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutThingsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutThingsInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThingsInput } from "../inputs/UserCreateOrConnectWithoutThingsInput";
import { UserCreateWithoutThingsInput } from "../inputs/UserCreateWithoutThingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutThingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutThingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutThingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

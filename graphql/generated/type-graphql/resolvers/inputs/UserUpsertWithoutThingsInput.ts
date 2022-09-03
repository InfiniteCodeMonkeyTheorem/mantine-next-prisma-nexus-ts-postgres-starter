import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutThingsInput } from "../inputs/UserCreateWithoutThingsInput";
import { UserUpdateWithoutThingsInput } from "../inputs/UserUpdateWithoutThingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutThingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutThingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutThingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutThingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutThingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutThingsInput;
}

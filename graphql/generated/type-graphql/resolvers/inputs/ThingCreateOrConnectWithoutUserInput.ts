import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingCreateWithoutUserInput } from "../inputs/ThingCreateWithoutUserInput";
import { ThingWhereUniqueInput } from "../inputs/ThingWhereUniqueInput";

@TypeGraphQL.InputType("ThingCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ThingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThingCreateWithoutUserInput, {
    nullable: false
  })
  create!: ThingCreateWithoutUserInput;
}

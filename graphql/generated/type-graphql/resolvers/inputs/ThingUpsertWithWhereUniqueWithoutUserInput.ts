import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingCreateWithoutUserInput } from "../inputs/ThingCreateWithoutUserInput";
import { ThingUpdateWithoutUserInput } from "../inputs/ThingUpdateWithoutUserInput";
import { ThingWhereUniqueInput } from "../inputs/ThingWhereUniqueInput";

@TypeGraphQL.InputType("ThingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ThingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ThingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ThingCreateWithoutUserInput, {
    nullable: false
  })
  create!: ThingCreateWithoutUserInput;
}

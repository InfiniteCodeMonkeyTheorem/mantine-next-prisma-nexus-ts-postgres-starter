import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingUpdateWithoutUserInput } from "../inputs/ThingUpdateWithoutUserInput";
import { ThingWhereUniqueInput } from "../inputs/ThingWhereUniqueInput";

@TypeGraphQL.InputType("ThingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ThingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ThingUpdateWithoutUserInput;
}

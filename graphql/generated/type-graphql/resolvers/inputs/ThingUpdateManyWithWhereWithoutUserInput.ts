import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingScalarWhereInput } from "../inputs/ThingScalarWhereInput";
import { ThingUpdateManyMutationInput } from "../inputs/ThingUpdateManyMutationInput";

@TypeGraphQL.InputType("ThingUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ThingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ThingScalarWhereInput, {
    nullable: false
  })
  where!: ThingScalarWhereInput;

  @TypeGraphQL.Field(_type => ThingUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThingUpdateManyMutationInput;
}

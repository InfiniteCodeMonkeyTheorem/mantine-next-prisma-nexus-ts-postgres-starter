import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingCreateManyUserInput } from "../inputs/ThingCreateManyUserInput";

@TypeGraphQL.InputType("ThingCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ThingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ThingCreateManyUserInput], {
    nullable: false
  })
  data!: ThingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

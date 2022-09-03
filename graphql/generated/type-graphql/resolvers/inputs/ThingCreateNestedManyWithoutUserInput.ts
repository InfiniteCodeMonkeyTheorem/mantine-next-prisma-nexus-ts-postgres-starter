import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingCreateManyUserInputEnvelope } from "../inputs/ThingCreateManyUserInputEnvelope";
import { ThingCreateOrConnectWithoutUserInput } from "../inputs/ThingCreateOrConnectWithoutUserInput";
import { ThingCreateWithoutUserInput } from "../inputs/ThingCreateWithoutUserInput";
import { ThingWhereUniqueInput } from "../inputs/ThingWhereUniqueInput";

@TypeGraphQL.InputType("ThingCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ThingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ThingCreateWithoutUserInput], {
    nullable: true
  })
  create?: ThingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ThingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ThingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ThingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThingWhereUniqueInput], {
    nullable: true
  })
  connect?: ThingWhereUniqueInput[] | undefined;
}

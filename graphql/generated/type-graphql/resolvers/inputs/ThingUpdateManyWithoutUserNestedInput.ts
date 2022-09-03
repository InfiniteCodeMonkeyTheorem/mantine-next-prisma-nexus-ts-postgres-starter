import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingCreateManyUserInputEnvelope } from "../inputs/ThingCreateManyUserInputEnvelope";
import { ThingCreateOrConnectWithoutUserInput } from "../inputs/ThingCreateOrConnectWithoutUserInput";
import { ThingCreateWithoutUserInput } from "../inputs/ThingCreateWithoutUserInput";
import { ThingScalarWhereInput } from "../inputs/ThingScalarWhereInput";
import { ThingUpdateManyWithWhereWithoutUserInput } from "../inputs/ThingUpdateManyWithWhereWithoutUserInput";
import { ThingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ThingUpdateWithWhereUniqueWithoutUserInput";
import { ThingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ThingUpsertWithWhereUniqueWithoutUserInput";
import { ThingWhereUniqueInput } from "../inputs/ThingWhereUniqueInput";

@TypeGraphQL.InputType("ThingUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ThingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ThingCreateWithoutUserInput], {
    nullable: true
  })
  create?: ThingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ThingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ThingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ThingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ThingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThingWhereUniqueInput], {
    nullable: true
  })
  set?: ThingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingWhereUniqueInput], {
    nullable: true
  })
  delete?: ThingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingWhereUniqueInput], {
    nullable: true
  })
  connect?: ThingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ThingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ThingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThingScalarWhereInput[] | undefined;
}

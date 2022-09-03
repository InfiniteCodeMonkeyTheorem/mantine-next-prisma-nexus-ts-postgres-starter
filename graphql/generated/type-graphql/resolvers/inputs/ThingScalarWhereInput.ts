import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ThingScalarWhereInput", {
  isAbstract: true
})
export class ThingScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThingScalarWhereInput], {
    nullable: true
  })
  AND?: ThingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarWhereInput], {
    nullable: true
  })
  OR?: ThingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarWhereInput], {
    nullable: true
  })
  NOT?: ThingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}

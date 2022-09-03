import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingAvgOrderByAggregateInput } from "../inputs/ThingAvgOrderByAggregateInput";
import { ThingCountOrderByAggregateInput } from "../inputs/ThingCountOrderByAggregateInput";
import { ThingMaxOrderByAggregateInput } from "../inputs/ThingMaxOrderByAggregateInput";
import { ThingMinOrderByAggregateInput } from "../inputs/ThingMinOrderByAggregateInput";
import { ThingSumOrderByAggregateInput } from "../inputs/ThingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThingOrderByWithAggregationInput", {
  isAbstract: true
})
export class ThingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ThingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ThingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ThingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ThingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ThingSumOrderByAggregateInput | undefined;
}

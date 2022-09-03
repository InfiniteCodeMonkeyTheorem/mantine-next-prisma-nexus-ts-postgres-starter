import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingOrderByWithAggregationInput } from "../../../inputs/ThingOrderByWithAggregationInput";
import { ThingScalarWhereWithAggregatesInput } from "../../../inputs/ThingScalarWhereWithAggregatesInput";
import { ThingWhereInput } from "../../../inputs/ThingWhereInput";
import { ThingScalarFieldEnum } from "../../../../enums/ThingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThingArgs {
  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  where?: ThingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "quantity" | "image" | "userId">;

  @TypeGraphQL.Field(_type => ThingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

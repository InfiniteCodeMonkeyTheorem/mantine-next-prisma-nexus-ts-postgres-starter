import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingAvgAggregate } from "../outputs/ThingAvgAggregate";
import { ThingCountAggregate } from "../outputs/ThingCountAggregate";
import { ThingMaxAggregate } from "../outputs/ThingMaxAggregate";
import { ThingMinAggregate } from "../outputs/ThingMinAggregate";
import { ThingSumAggregate } from "../outputs/ThingSumAggregate";

@TypeGraphQL.ObjectType("ThingGroupBy", {
  isAbstract: true
})
export class ThingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => ThingCountAggregate, {
    nullable: true
  })
  _count!: ThingCountAggregate | null;

  @TypeGraphQL.Field(_type => ThingAvgAggregate, {
    nullable: true
  })
  _avg!: ThingAvgAggregate | null;

  @TypeGraphQL.Field(_type => ThingSumAggregate, {
    nullable: true
  })
  _sum!: ThingSumAggregate | null;

  @TypeGraphQL.Field(_type => ThingMinAggregate, {
    nullable: true
  })
  _min!: ThingMinAggregate | null;

  @TypeGraphQL.Field(_type => ThingMaxAggregate, {
    nullable: true
  })
  _max!: ThingMaxAggregate | null;
}

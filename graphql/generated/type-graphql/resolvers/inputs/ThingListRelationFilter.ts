import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThingWhereInput } from "../inputs/ThingWhereInput";

@TypeGraphQL.InputType("ThingListRelationFilter", {
  isAbstract: true
})
export class ThingListRelationFilter {
  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  every?: ThingWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  some?: ThingWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  none?: ThingWhereInput | undefined;
}

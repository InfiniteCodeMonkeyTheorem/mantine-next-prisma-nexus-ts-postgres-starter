import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingOrderByWithRelationInput } from "../../../inputs/ThingOrderByWithRelationInput";
import { ThingWhereInput } from "../../../inputs/ThingWhereInput";
import { ThingWhereUniqueInput } from "../../../inputs/ThingWhereUniqueInput";
import { ThingScalarFieldEnum } from "../../../../enums/ThingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyThingArgs {
  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  where?: ThingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "quantity" | "image" | "userId"> | undefined;
}

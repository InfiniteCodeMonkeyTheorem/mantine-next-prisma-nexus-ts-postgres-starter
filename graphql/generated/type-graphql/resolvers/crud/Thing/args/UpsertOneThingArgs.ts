import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingCreateInput } from "../../../inputs/ThingCreateInput";
import { ThingUpdateInput } from "../../../inputs/ThingUpdateInput";
import { ThingWhereUniqueInput } from "../../../inputs/ThingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneThingArgs {
  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThingCreateInput, {
    nullable: false
  })
  create!: ThingCreateInput;

  @TypeGraphQL.Field(_type => ThingUpdateInput, {
    nullable: false
  })
  update!: ThingUpdateInput;
}

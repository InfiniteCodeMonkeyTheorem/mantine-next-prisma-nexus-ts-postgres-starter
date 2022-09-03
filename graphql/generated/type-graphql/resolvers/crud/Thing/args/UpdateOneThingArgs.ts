import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingUpdateInput } from "../../../inputs/ThingUpdateInput";
import { ThingWhereUniqueInput } from "../../../inputs/ThingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneThingArgs {
  @TypeGraphQL.Field(_type => ThingUpdateInput, {
    nullable: false
  })
  data!: ThingUpdateInput;

  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;
}

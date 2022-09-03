import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingWhereInput } from "../../../inputs/ThingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThingArgs {
  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  where?: ThingWhereInput | undefined;
}

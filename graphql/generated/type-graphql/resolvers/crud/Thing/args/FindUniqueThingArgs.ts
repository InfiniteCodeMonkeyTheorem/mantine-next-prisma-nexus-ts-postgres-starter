import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingWhereUniqueInput } from "../../../inputs/ThingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueThingArgs {
  @TypeGraphQL.Field(_type => ThingWhereUniqueInput, {
    nullable: false
  })
  where!: ThingWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingCreateInput } from "../../../inputs/ThingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneThingArgs {
  @TypeGraphQL.Field(_type => ThingCreateInput, {
    nullable: false
  })
  data!: ThingCreateInput;
}

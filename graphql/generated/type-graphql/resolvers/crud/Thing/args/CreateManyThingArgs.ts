import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingCreateManyInput } from "../../../inputs/ThingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThingArgs {
  @TypeGraphQL.Field(_type => [ThingCreateManyInput], {
    nullable: false
  })
  data!: ThingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

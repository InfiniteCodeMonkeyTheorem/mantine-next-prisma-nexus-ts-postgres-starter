import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThingUpdateManyMutationInput } from "../../../inputs/ThingUpdateManyMutationInput";
import { ThingWhereInput } from "../../../inputs/ThingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThingArgs {
  @TypeGraphQL.Field(_type => ThingUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThingWhereInput, {
    nullable: true
  })
  where?: ThingWhereInput | undefined;
}

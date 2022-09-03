import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThingArgs } from "./args/AggregateThingArgs";
import { Thing } from "../../../models/Thing";
import { AggregateThing } from "../../outputs/AggregateThing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Thing)
export class AggregateThingResolver {
  @TypeGraphQL.Query(_returns => AggregateThing, {
    nullable: false
  })
  async aggregateThing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThingArgs): Promise<AggregateThing> {
    return getPrismaFromContext(ctx).thing.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

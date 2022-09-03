import * as TypeGraphQL from "type-graphql";
import { Thing } from "../../../models/Thing";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Thing)
export class ThingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() thing: Thing, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).thing.findUnique({
      where: {
        id: thing.id,
      },
    }).user({});
  }
}

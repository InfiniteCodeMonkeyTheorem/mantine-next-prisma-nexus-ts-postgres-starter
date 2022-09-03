import * as TypeGraphQL from "type-graphql";

export enum ThingScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  quantity = "quantity",
  image = "image",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ThingScalarFieldEnum, {
  name: "ThingScalarFieldEnum",
  description: undefined,
});

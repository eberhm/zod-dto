[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> [!IMPORTANT]
The following package was originally ported from https://github.com/kbkk/abitia/tree/master/packages/zod-dto due to lack of activity.


# zod-dto

Use [zod v3](https://github.com/colinhacks/zod/tree/v3) schemas to validate requests in Nest.js.
Supports generating OpenApi too!

## Getting Started

`yarn add zod-dto`

### Setup a validation pipe (ZodValidationPipe)

In order to validate incoming requests, the ZodValidationPipe needs to be registered.

```ts
import { ZodValidationPipe } from "zod-dto";

@Controller()
@UsePipes(ZodValidationPipe)
export class TestController {
  // ... your methods here
}
```

### Create a DTO

```ts
const createAuctionDtoSchema = z.object({
  item: z.string(),
  price: z.number(),
  type: z.enum(["buy-it-now", "auction"]).default("buy-it-now"),
});

export class CreateAuctionDto extends createZodDto(createAuctionDtoSchema) {}
```

### Use the DTO

```ts
@Controller()
@UsePipes(ZodValidationPipe)
export class TestController {
  @Post("/auctions")
  public createAuction(@Body() dto: CreateAuctionDto) {
    // dto is of type { item: string, price: number, type: 'buy-it-now' | 'auction' }
  }
}
```

### Setup OpenAPI (Swagger) support

Add the following snippet to your application's bootstrap function:

```ts
import { patchNestjsSwagger } from "@eberhm/zod-dto";

patchNestjsSwagger();
```

Then follow the [Nest.js' Swagger Module Guide](https://docs.nestjs.com/openapi/introduction).

## Local Development

Please add **tests** for every new feature.

- `yarn build` - build the package
- `yarn lint` - run linter
- `yarn test` - run tests

## Contributing

Please read [CONTRIBUTING.md](https://github.com/eberhm/master/packages/zod-dto) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- **Jakub Kisielewski** - _Initial work_ - [kbkk](https://github.com/kbkk)
- **Eber Herrera** - _Fork_ - [eberhm](https://github.com/eberhm)

See also the list of [contributors](https://github.com/kbkk/abitia/contributors) who participated in this project.

## License

This project is licensed under the MIT License.

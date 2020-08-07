import "reflect-metadata";
import {
  Controller,
  Get,
  QueryParam,
  createExpressServer,
} from "routing-controllers";

@Controller()
class TestController {
  @Get("/test")
  public test(
    @QueryParam("param", { required: false }) param: string[] | string
  ) {
    console.log(param);

    return { foo: "bar" };
  }
}

const app = createExpressServer({
  controllers: [TestController],
});

app.listen(3000, () => {
  console.log("server listening");
});

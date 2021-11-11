import { CustomeServer } from "./Core/CustomeServer";
import { BodyParserMiddleware } from "./Middlewares/BodyParser.Middleware";
import { LoginRoute } from "./Routes/Login.Route";
import { RegisterRoute } from "./Routes/Register.Route";

const customeServer = new CustomeServer();

customeServer.Middleware(new BodyParserMiddleware());

customeServer.Route(new RegisterRoute());
customeServer.Route(new LoginRoute());

customeServer.Listen(3000);

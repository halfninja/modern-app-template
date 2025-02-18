package controllers

import javax.inject._
import java.time.*
import play.api._
import play.api.mvc._
import play.api.libs.json._

case class HomeResult(
  ok: Boolean,
  message: String,
  now: Instant
)
object HomeResult {
  implicit val writes: OWrites[HomeResult] = Json.writes[HomeResult]
}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController:

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(Json.toJson(HomeResult(
      ok = true,
      message = "Hello 🌍!",
      now = Instant.now()
    )))
  }

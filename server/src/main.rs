// Import Libraries
mod lib;
use lib::database::Database;
use lib::endpoints::users::endp_users;
use lib::endpoints::classes::endp_classes;
use lib::endpoints::classes::endp_units;
use actix_web::{App, HttpServer};

// Main Actix-Web function
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Establish a new database
    let db: Database = Database::init().await;
    // Insert a test user for debugging purposes
    let _ = db.insert_test_user().await;

    // Establish a connection to http://127.0.0.1:8080/
    HttpServer::new(move || {
        App::new()
            .app_data(db.clone())
            
            // User data
            .service(endp_users::get_user_data)
            .service(endp_users::update_user_data)
            .service(endp_users::insert_user_data)

            // Class data
            .service(endp_classes::update_class_data)
            .service(endp_classes::get_class_data)
            .service(endp_classes::insert_class_data)

            // Class Units
            .service(endp_units::add_class_unit)
            .service(endp_units::delete_class_unit)
            .service(endp_units::update_class_unit)

    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}

export const swaggerJson = {
  "openapi": "3.0.0",
  "info": {
    "title": "STOCK QUOTE API SPECIFICATION",
    "description": "This microservice aims to facilitate the acquisition of stock quotes from various companies. Please follow the documentation to get a complete understanding of how the service works.",
    "version": "1.0"
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "description": "Returns a list of all users in the system",
        "responses": {
          "200": {
            "description": "List of users",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "example": "1"
                      },
                      "name": {
                        "type": "string",
                        "example": "John Doe"
                      },
                      "email": {
                        "type": "string",
                        "example": "johndoe@example.com"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}



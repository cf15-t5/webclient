import React from 'react'

export default function EventDataDum() {
  const data = [
    {
      "address": "Gasibu, Kecamatan,Bandung,Jawa Barat",
      "category": {
        "category_id": 1,
        "name": "Musik"
      },
      "category_id": 1,
      "date_of_event": "Thu, 31 Aug 2023 19:00:00 GMT",
      "description": "event nya bagus",
      "event_id": 2,
      "number_of_ticket": 0,
      "poster_path": '/dummy/exposter.png',
      "price": 1000,
      "status": "APPROVED",
      "title": "DEWA 19",
      "user": {
          "balance": 0.0,
          "email": "admin@app.test.com",
          "name": "admin",
          "password": "$2b$12$A/cR4c/KO9/8uA2O8TCaTe2cTNJ3yIrn9XSdslpz7kl/3IpeI2ke.",
          "role": "ADMIN",
          "status": "ACTIVE",
          "user_id": 1
      },
      "user_id": 1
    },
  ]
  return data
}

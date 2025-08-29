# BFHL API

A REST API for the BFHL challenge built with Express.js.
Link--[[ https://bajaj-finser-sigma.vercel.app/](https://bajaj-finserv-rouge-chi.vercel.app/bfhl)](https://bajaj-finserv-rouge-chi.vercel.app/bfhl)
## Features

- POST /bfhl: Process an array of mixed data and return categorized results.
- GET /bfhl: Health check endpoint.
- GET /health: API status and timestamp.

## Getting Started

### Prerequisites

- Node.js >= 14

### Installation

sh
npm install


### Running the Server

sh
npm start


test


## API Endpoints

### POST `/bfhl`

**Request Body:**
{
"data": ["A","ABcD","DOE"]
}


**Response:**
json
{
    "is_success": true,
    "user_id": "ashutosh_patro_01112004",
    "email": "ashutos1201@gmail.com",
    "roll_number": "22BCE10085",
    "odd_numbers": [],
    "even_numbers": [],
    "alphabets": [
        "A",
        "ABCD",
        "DOE"
    ],
    "special_characters": [],
    "sum": "0",
    "concat_string": "EoDdCbAa"
```

### GET /bfhl

Returns operation code.

### GET /health

Returns API status and

# memo API

It is written in node, using [nest.js][https://nestjs.com/].

## Configuration

1. Create `.env` file in root folder

2. Copy and Paste following configuration

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_NAME=memo
   DB_PORT=3306
   SECRET_KEY=coffee

   ```

3. Add password or port if needed (default port :3000 )

   ```
   DB_USER_PASSWORD=
   PORT=
   ```

---

## Installation

Clone the repository, then install the requirements and start the web server.

    $ npm install
    $ npm run start
     * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)

## API

#### Authentication

**Signin**

- **URL**

  `/signin`

* **Method:**

  `POST`

* **Body**

  `email=[email]`

  `password=[string]`

  `username=[string]`

- **Success Response:**

  - **Code:** 201 Created

- **Error Response:**

  - **Code:** 406 NOT ACCEPTABLE <br />
    **Content:**

    ```
    {
      "statusCode": 406,
      "message": "oowgnoj1@gmail.com은 이미 사용중입니다",
      "error": "Not Acceptable"
    }
    ```

**login**

- **URL**

  `/login`

* **Method:**

  `POST`

* **Body**

  `email=[email]`

  `password=[string]`

- **Success Response:**

  - **Code:** 201 Created
    **Content:**

    ```
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoib293Z25vajFAZ21haWwuY29tIiwiaWF0IjoxNjA4OTUxNTk1fQ.1uz6-7aq3hvvMJdHdCFcrwE1iYuHO_taPr_NBtnNJRs"
    }
    ```

- **Error Response:**

  - **Code:** 401 Unauthorized <br />
    **Content:**

    ```
    {
      "response": {
        "statusCode": 401,
        "message": "로그인 정보를 확인해 주세요",
        "error": "Unauthorized"
      },
      "status": 401,
      "message": "로그인 정보를 확인해 주세요"
    }
    ```

### Memo

**Add Memo**

- **URL**

  `/memo`

* **Method:**

  `POST`

* **Header**
  `x-access-token=[token]`

* **Body**

  `title=[string]`

  `contents=[string]`

  `secret?=[boolean]`

- **Success Response:**

  - **Code:** 201 Created
    **Content:**

    ```
    {
      "id": 6,
      "title": "비밀메모",
      "contents": "나만 볼거야",
      "secret": true,
      "userId": 2,
      "updatedAt": "2020-12-26T03:21:36.530Z",
      "createdAt": "2020-12-26T03:21:36.530Z"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**

    ```
    {
      "statusCode": 400,
      "message": [
    	  "title must be a string",
        "contents must be a string"
      ],
      "error": "Bad Request"
    }
    ```

**Read Memo**

- **URL**
  `/memos`

* **Method:**
  `GET`

* **Header**
  `x-access-token=[token]`

- **Success Response:**

  - **Code:** 200 OK
    **Content:**

    ```
    [
      {
        "id": 2,
        "title": "오늘도",
        "contents": "좋은하루 보내세요~",
        "secret": false,
        "createdAt": "2020-12-26T03:00:08.000Z",
        "updatedAt": "2020-12-26T03:00:08.000Z",
        "userId": 1
      },
      {
        "id": 3,
        "title": "비밀메모",
        "contents": "나만 보기",
        "secret": true,
        "createdAt": "2020-12-26T03:00:22.000Z",
        "updatedAt": "2020-12-26T03:00:22.000Z",
        "userId": 2
      }
    ]
    ```

- **Error Response:**

  - **Code:** 401 Unauthorized <br />
    **Content:**

    ```
    {
      "statusCode": 401,
      "message": "Unauthorized"
    }
    ```

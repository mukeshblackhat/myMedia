# My-Media

An application for different Feeds and UserProfile, with the feature of infinite scroll, used custom hooks, loader, and error handling as well.

## Technologies Used

- Next.js
- CSS Modules
- Redux (with asyncThunk)
- Unsplash API

## Setup and Installation

To run the project in the local environment, follow the steps below:

```
-npm i 
-npm run dev
```

## API Usage

Read-only Unsplash API is used for getting the data.

## State Management

1. Used Redux to manage the state on the profile page. For calling the API, used asyncThunk for API call management.
2. In the feed page (Home Page), used simple useState and useEffect for managing the state and API calls.

## Responsiveness

My-Media is completely phone responsive and fully functional.

### Web View:
![Screenshot from 2023-07-31 23-47-37](https://github.com/mukeshblackhat/myMedia/assets/59144700/4ae9e58f-53cb-4389-a938-b04d6b4dc5dd.jpg)

### Tab View:
![Screenshot from 2023-07-31 23-47-55](https://github.com/mukeshblackhat/myMedia/assets/59144700/4ef5ca0b-e96d-4a9b-953d-46abb8c9d7db.jpg)

### Mobile View:
![Screenshot from 2023-07-31 23-48-16](https://github.com/mukeshblackhat/myMedia/assets/59144700/7454b0ac-df96-4bfa-ad9e-134330f6c3e4.jpg)

## Unsplash Search UI

#### Initial Setup
- Clone this repository
- Run `yarn install`

#### Running in dev mode 
- Run `yarn start`

#### Running in production mode
I've created a simple dockerfile to build and run a production environment. 

- Run `docker build -t devan-frontend .`
- Run `docker run -p 3000:80 devan-frontend`



#### Notable Things and Things I would have done given more time 
- I added the .env files to git for brevity and ease, usually these are left out of git repositories
- I had a lot of fun using typescript enums to enforce things like my MapToLabel objects, if an enum entry is added or removed it'll cause an error unless its updated
- Testing! I ran out of time for any testing
    - Generally, my rule of thumb when writing tests is to write a test when conditional logic exists or an effect is triggered
    - In this case I would have written
        - Empty results text shows when no photos are available
        - Loading shows when loading
        - Sorting and filtering changes reset page number
        - Debounce and requery effectiveness
- Maybe use some kind of masonry component to make the grid look really nice
- Clean up build warnings 

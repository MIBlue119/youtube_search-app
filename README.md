# My First Deploy

$ npm install
$ npm run start

---
## How could we deploy our React App


![](./note/2021-06-06-17-57-37.png)

![](./note/2021-06-06-17-57-54.png)

If we just want to deploy static file to serve

VM cost much money to wrong.
static files cost free.

## Example 
### Deploy the app to Vercel
link:https://vercel.com/
![](./note/2021-06-06-17-59-37.png)

Vercel Deployment
- Sign up at vercel.com
- Install the Vercel CLI
```
$npm install -g vercel
```    
- Run 'vercel' in our project directory
    - Sign in 
    ```
    $vercel login
    ```    
    - Choose the email related to the account to login
- Build the vercel
    ```
    $vercel
    ```
![](./note/2021-06-06-18-22-43.png)
![](./note/2021-06-06-18-23-14.png)

- How could we solve the error?
    Because we met the problem by treat the warning as error by the CI setting. We need to reset the setting at .

    https://github.com/vercel/vercel/discussions/5566



![](./note/2021-06-06-18-28-25.png)

After set the CI to close.
Run the command $vercel again


- How could we redploy our Application???
If we update our code, we could usethis command
```
vercel --prod
```
The deployed result:https://videos-sand-nu.vercel.app/


### Deploy to Netlify

https://www.netlify.com/



![](./note/2021-06-06-18-51-23.png)

![](./note/2021-06-06-18-53-23.png)

![](./note/2021-06-06-18-53-48.png)

![](./note/2021-06-06-18-56-34.png)

Netlify would detect the push to the github and rebuild again.

Example:
https://pensive-johnson-29ac7b.netlify.app
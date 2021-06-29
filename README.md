# Vozzi-Stripe Integration

  ## Table of Contents

  * [Description](#description)  
  * [Installation](#installation)  
  * [Questions](#questions)  
  * [Badges](#badges)  
  * [License](#license)  


  ## Description

  This project consists of a donation page connected to the Stripe API and allows for clients to accept donations through Vozzi.
  
  ![License Badge](https://img.shields.io/badge/license-Unlicense-brightgreen)
  

  
  ## Installation
    
  ### Follow these instructions to install the project
  - To get the project up and running, start by cloning the repository to your own machine and then inside the project directory run the command "npm i" in terminal to install the dependencies required for this project.

  ### API Key file requirements
  - The Stripe Public Key needs to be replaced inside the 'public/script.js' file on line 4
  - The Stripe Secret Key needs to be replaced inside the .env file in the root directory on line 2. 
        **In production, the .env file will not be available so the API key will need to be attached in a location that is hidden from malicious users. Such locations exist in Heroku in the Config Vars. 
   - The Stripe Secret Key also needs to be replaced inside of 'routes/donation.js' file on line 6.

   ### Checkout page customization
   - To send a clients logo and name to the Stripe checkout page, the name needs to be changed in 'routes/donation.js' on line 65. The logo image can be changed directly below on line 68.
   - To change the background image on the donation page itself the image file needs to be replaced in 'public/index.html' on line 20. **note not all images will work well with the dimensions of a mobile phone screen. Make sure to double check how the image looks before sending to clients **
   
   ### Client Donation Differentiation
   - The client account needs to be specified in 'routes/donation.js' on line 79. A clients account number can be found on https://dashboard.stripe.com/test/connect/accounts/overview.

   ### Getting Client Setup Links
   - Client setup links can be created at https://dashboard.stripe.com/test/connect/accounts/overview. On the right side of the page, next to the Connected Accounts header there are three buttons; Filter, Create, and Export. Clicking on Create will open a pop-up window where you must select the 'Standard' Account type and proper country and press 'Continue'.
   - The link should be automatically generated and will appear on the same pop-up window. Copy and send to the client and it should create a connected account. 
  

  ## Questions
    
  ### Contact me
  #### GitHub:
  - zackaryanderson
  #### Email:
  - _zanderson1998@yahoo.com_
  ### Instructions:
  -Please contact me by email if you have any questions.

  
  ## Badges

  ![GitHub last commit](https://img.shields.io/github/last-commit/zackaryanderson/vozzi-stripe)
  ![GitHub repo size](https://img.shields.io/github/repo-size/zackaryanderson/vozzi-stripe)
  ![GitHub issues](https://img.shields.io/github/issues/zackaryanderson/vozzi-stripe)
  ![GitHub top language](https://img.shields.io/github/languages/top/zackaryanderson/vozzi-stripe) ![GitHub language count](https://img.shields.io/github/languages/count/zackaryanderson/vozzi-stripe)
  

  
  ## License
  This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <https://unlicense.org>
    

  

  ### _MADE WITH README GENERATOR_
  ![Developer Tag](https://img.shields.io/badge/Developed%20By%3A-Zack%20Anderson-orange)
  ![GitHub followers](https://img.shields.io/github/followers/zackaryanderson?style=social)
        

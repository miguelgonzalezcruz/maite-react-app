## Project: Web application for a craftsman to sell her pieces of furniture.

### `Project Stages`

1. Front and back code + Registration + Login + CRM API implementation
2. Admin to be able to upload furniture with pricing (+ delete it) + User be able to book furniture
3. Responsive Design
4. Upload to a live server + domain

### `Backend Code`

You can find the backend code here:
https://github.com/miguelgonzalezcruz/maite-express-back

### `Description`

The web app will have two pages:

1. A public page that includes basic information about the craftsman, her work, and examples of her sold furniture placed in their final destinations (kitchen, dining room, and other places) in a card format.
2. A private page, accessible through a free login, will display furniture for sale in card format. Each product card will feature one picture, title, price, and a "Book" button.

### `Interactivity on the private page`

- Logged users can book pieces of furniture via de web app.

- Clicking on the card image will open a pop-up with a picture of the furniture and product description.

- The "Book" button will open a pop-up with a contact form prefilled with the user's contact information, furniture ID, price, and a not-mandatory comments field.

- Once the user clicks "Send", the app will send the information via email and the "Book" button will be deactivated and display a "Booked" message.

- ** The app will have three user levels: **

1. Visitors will only have access to public information and cards of products sold.
2. Logged clients can view products for sale, and book products.
3. Superuser Admin can upload, modify, delete, and reactivate products for sale. This user can also modify and delete publicly sold products.

### `API integration`

The app will be integrated with Hupspot's free CRM API (https://developers.hubspot.com/docs/api/crm/contacts), allowing for easy tracking of leads. When a user sign-up, the app will push the contact information to Hubspot CRM

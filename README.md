# saas-vendor-management-portal

A landing page for a SaaS business - use chakra ui  and icons make best design A landing page for a SaaS business - vendor management -add button , tables  action - view ,edit ,delete --  Input Fields for Vendor Management Form
Field Name	Input Type	Description	Validation Rules
Vendor Number	Text	Unique identifier for the vendor	Required, Unique, Max length: 20
Vendor Name	Text	Name of the vendor	Required, Max length: 255
Address	Text	Address of the vendor	Required, Max length: 255
City	Text	City where the vendor is located	Required, Max length: 50
State	Text	State where the vendor is located	Required, Max length: 50
Country	Text	Country where the vendor is located	Required, Max length: 50
Postal Code	Text	Postal code of the vendor's address	Required, Max length: 10
Contact Name	Text	Name of the vendor's contact person	Required, Max length: 100
Contact Email	Email	Email of the vendor's contact person	Required, Max length: 100, Valid Email Format
Contact Phone	Text	Phone number of the vendor's contact person	Required, Max length: 20
Payment Terms	Text	Payment terms agreed with the vendor	Required, Max length: 50
Currency	Text	Currency used for transactions with the vendor	Required, Max length: 10
Tax Number	Text	Tax number of the vendor	Required, Max length: 50
Bank Country	Text	Country where the vendor's bank is located	Required, Max length: 50   

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/saas-vendor-management-portal.git
cd saas-vendor-management-portal
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

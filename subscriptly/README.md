# GROUP TWO

# **SubScriptly - Your Ultimate Subscription Manager**

---

# Deployed Links
1. [Frontend](https://subscriptly4u.netlify.app)

2. [Backend](https://subscriptly-server.onrender.com/users)

## **Introduction**

SubScriptly is a React-based subscription management application that allows users to keep track of their various digital subscriptions. With features like adding and canceling subscriptions, notifications for upcoming payments, and organizing subscriptions into categories, SubScriptly provides a streamlined way to manage your subscriptions efficiently. The app interacts with a local `db.json` file to simulate API calls and data persistence.

---

## **Table of Contents**

1. [Features](#features)
2. [Installation](#installation)
3. [Dependencies](#dependencies)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Features**

- **Signup/Sign In:** Secure authentication for managing subscriptions.
- **Add Subscription:** Add new subscriptions with details like name, category, and payment date.
- **Cancel Subscription:** Cancel and remove subscriptions easily.
- **Edit Subscription:** Double click a cell to edit a subscription.
- **Notification System:** Get alerts before subscription payments are due.
- **Subscription Categories:** Organize subscriptions into different categories (e.g., movie apps, music apps).
- **Search/Filter Functionality:** Quickly find subscriptions using search and filter options.

---

## **Installation**

To run SubScriptly locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/SubScriptly.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd SubScriptly
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the JSON server:**

    ```bash
    npx json-server --watch db.json --port 3001
    ```

5. **Start the React development server:**

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to use the app.

---

## **Dependencies**

SubScriptly relies on the following dependencies:

- **React:** JavaScript library for building user interfaces.
- **json-server:** A full fake REST API to simulate data persistence using a local JSON file.
- **date-fns:** A lightweight library for handling date-related functionality, such as calculating days until a payment is due.
- **axios:** Used for making HTTP requests to interact with the local JSON server.

To install these dependencies, run the following command:

```bash
npm install react json-server date-fns axios
```

---

## **Usage**

### **Adding a Subscription:**

- Users can add a subscription by filling out a form with the subscription name, category, payment date, and cost.
- The app will store this data in the local `db.json` file, simulating an API request.

### **Canceling a Subscription:**

- Users can cancel a subscription by selecting it from the list and clicking the 'Cancel' button.
- This will remove the subscription from the list and update the local data.

### **Notifications:**

- The app will notify users when a subscription payment date is approaching, helping them avoid missed payments.
- Notifications are generated based on the subscription data stored in `db.json`.

### **Categories & Search:**

- Users can organize their subscriptions into categories like movie apps and music apps.
- The search and filter functionalities allow users to quickly find specific subscriptions based on name, category, or payment date.

---

## **Folder Structure**

Here's a brief overview of the folder structure of the project:

```
SubScriptly/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddSubscription.js
│   │   ├── CancelSubscription.js
│   │   ├── Notification.js
│   │   ├── CategoryFilter.js
│   │   └── SearchBar.js
│   ├── hooks/
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── db.json
├── .gitignore
├── package.json
└── README.md
```

- **`public/`:** Contains the static HTML file.
- **`src/components/`:** Contains the React components used in the app.
- **`src/hooks/`:** Contains custom hooks used for managing state and effects.
- **`src/services/`:** Contains the `api.js` file that handles interaction with the JSON server.
- **`src/db.json`:** Contains the subscription data and simulates a backend database.

---

## **Contributing**

Contributions are welcome! If you'd like to contribute to SubScriptly, please fork the repository and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for more details.

---

**SubScriptly** - Take control of your digital subscriptions today!
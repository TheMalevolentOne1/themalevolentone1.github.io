---
title: "How do I get started?"
source: "https://support.developer.betfair.com/hc/en-us/articles/115003864651-How-do-I-get-started"
author:
  - "[[Betfair Developer Program]]"
published: 2024-09-12
created: 2025-02-20
description: "To get started with the API you require a Betfair account, an Application Key (App Key) and a valid session token. You can open a Betfair..."
tags:
  - "clippings"
---
To get started with the API you require a **Betfair account**, an **Application Key** (App Key) and a valid **session token.**

You can open a Betfair account via **[Betfair registration](https://register.betfair.com/account/registration)** 

### **What is an Application Key?**

An Application Key is required to make requests to the Exchange API and must be included in a **'X-Application'** HTTP header for all API requests.

Betfair use the Application Key to identify all requests that are made to the Exchange API. 

In order to use the Betting & Accounts API, you need to have an Application Key. The Application Key identifies your API client. 

Two App Keys are assigned to a single Betfair account, one **Delayed** App Key (for dev & testing) and one **Live** App Key.

You must pass the Application Key with every HTTP request. You do this by setting the HTTP header with the value of the key assigned by Betfair.

```
X-Application: APP_KEY_ASSIGNED
```

### **How do I create an Application Key?**

You can create an Application Key by using the createDeveloperAppKeys service via the **[Accounts API Demo Tool](https://apps.betfair.com/visualisers/api-ng-account-operations/).** 

Please follow the instructions below:

1. Click on the **[Accounts API Demo Tool](https://apps.betfair.com/visualisers/api-ng-account-operations/)** link.
2. Select the **createDeveloperAppKeys** operation from the list of Operations on the top left hand side of the visualiser.
3. Login to **[www.betfair.com](http://www.betfair.com/)** via a separate browser tab and refresh the page to automatically input the Session Token field into the Session Token(ssoid) field.
4. Enter your **Application Name** (this must be unique) in the 'Request' column.  The **Application Name** can be any name of your choice, but like your Betfair username, must be unique.
5. Press **Execute** at the bottom of the 'Request' column.

Two Application Keys will then be created and displayed in the **Developer Apps** column of the demo tool, a Delayed App Key (Active) and a Live App Key (Inactive)

**Please note:**

- The X-Application header is not required when using the **createDeveloperAppKeys** or the **getDeveloperAppKeys** service.
- The **Application Name** must be unique.

Please see our **[Getting Started](https://betfair-developer-docs.atlassian.net/wiki/spaces/1smk3cen4v3lu3yomq5qye0ni/pages/2687786/Getting+Started)** guide for further information of how to start making requests to the API

### **How do I apply for a Live Application key?**

To apply for a **Live Application key** please take note of the below and provide answers to the following information:

**Before applying, please:**

- Complete any testing using your Delayed Application key.
- Ensure that your account has been fully verified in line with our [KYC policy.](https://support.betfair.com/app/answers/detail/a_id/71/)  **Please note:**  **We do not accept license applications from Bangledesh, Sri Lanka or the UAE.**
- Check that your account is funded to cover the £299 activation fee.

**Please note:** A one-off activation fee of **£299** applies; this is debited directly from your Betfair account once access is approved.  

To apply for a **Live Application key** for personal betting use please click **[here](https://developer.betfair.com/get-started/)** and select **Exchange API > For My Personal Betting** and complete the application form at the bottom of the page.
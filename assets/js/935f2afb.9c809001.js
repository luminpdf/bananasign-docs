"use strict";(self.webpackChunkbananasign=self.webpackChunkbananasign||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/bananasign-docs/docs/intro","docId":"intro"},{"type":"category","label":"Tutorial","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/bananasign-docs/docs/tutorial/overview","docId":"tutorial/overview"},{"type":"link","label":"Starting the Signing Flow","href":"/bananasign-docs/docs/tutorial/startpage","docId":"tutorial/startpage"},{"type":"link","label":"Create a new Document","href":"/bananasign-docs/docs/tutorial/create-a-new-contract","docId":"tutorial/create-a-new-contract"},{"type":"link","label":"Launch Signing Flow","href":"/bananasign-docs/docs/tutorial/signing-flow","docId":"tutorial/signing-flow"},{"type":"link","label":"Send and Sign Branding Guidelines","href":"/bananasign-docs/docs/tutorial/sendAndSign","docId":"tutorial/sendAndSign"}],"href":"/bananasign-docs/docs/category/tutorial"},{"type":"category","label":"OAuth 2.0","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/bananasign-docs/docs/authorization/overview","docId":"authorization/overview"},{"type":"link","label":"Creating an Application","href":"/bananasign-docs/docs/authorization/create-app","docId":"authorization/create-app"},{"type":"link","label":"OAuth2 client libraries","href":"/bananasign-docs/docs/authorization/client-libraries","docId":"authorization/client-libraries"},{"type":"category","label":"Getting a Bearer Token","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Authorization Code Flow","href":"/bananasign-docs/docs/authorization/get-token/authorization-code","docId":"authorization/get-token/authorization-code"},{"type":"link","label":"Implicit Flow","href":"/bananasign-docs/docs/authorization/get-token/implicit","docId":"authorization/get-token/implicit"}],"href":"/bananasign-docs/docs/category/getting-a-bearer-token"}],"href":"/bananasign-docs/docs/category/oauth-20"},{"type":"category","label":"API Reference","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Upload","href":"/bananasign-docs/docs/api/upload","docId":"api/upload"},{"type":"link","label":"Contract Temporary","href":"/bananasign-docs/docs/api/contract-temporary","docId":"api/contract-temporary"},{"type":"category","label":"Webhooks","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Listen to events","href":"/bananasign-docs/docs/api/Webhooks/listen-for-events","docId":"api/Webhooks/listen-for-events"},{"type":"link","label":"Document events","href":"/bananasign-docs/docs/api/Webhooks/document-events","docId":"api/Webhooks/document-events"}],"href":"/bananasign-docs/docs/category/webhooks"}],"href":"/bananasign-docs/docs/category/api-reference"},{"type":"category","label":"Lumin JavaScript API Client","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Load the client library","href":"/bananasign-docs/docs/client/installation","docId":"client/installation"},{"type":"link","label":"Authorization API","href":"/bananasign-docs/docs/client/authorization","docId":"client/authorization"},{"type":"link","label":"Send And Sign API","href":"/bananasign-docs/docs/client/sendAndSign","docId":"client/sendAndSign"}],"href":"/bananasign-docs/docs/category/lumin-javascript-api-client"}]},"docs":{"api/contract-temporary":{"id":"api/contract-temporary","title":"Contract Temporary","description":"This API allows customers to create a Contract with 2 steps.","sidebar":"tutorialSidebar"},"api/upload":{"id":"api/upload","title":"Upload","description":"How do API users to upload their PDF to Lumin Sign?","sidebar":"tutorialSidebar"},"api/Webhooks/document-events":{"id":"api/Webhooks/document-events","title":"Document events","description":"Events which describe changes happened with a document.","sidebar":"tutorialSidebar"},"api/Webhooks/listen-for-events":{"id":"api/Webhooks/listen-for-events","title":"Listen to events","description":"You can use webhooks to get real-time updates from Lumin Sign via a callback url.","sidebar":"tutorialSidebar"},"authorization/client-libraries":{"id":"authorization/client-libraries","title":"OAuth2 client libraries","description":"Lumin Sign provides a OAuth2 library that can be used to interact with OAuth 2.0.","sidebar":"tutorialSidebar"},"authorization/create-app":{"id":"authorization/create-app","title":"Creating an Application","description":"Before we begin, we need to create an application on Lumin Sign in order to get a client ID and client secret.","sidebar":"tutorialSidebar"},"authorization/get-token/authorization-code":{"id":"authorization/get-token/authorization-code","title":"Authorization Code Flow","description":"Authorization code flow securely obtains bearer access token and refresh token for your client apps. Your app must be server-side because you must also pass along your application\'s Client Secret, which must always be kept secure on your server.","sidebar":"tutorialSidebar"},"authorization/get-token/implicit":{"id":"authorization/get-token/implicit","title":"Implicit Flow","description":"Implicit grant as the way JavaScript code can obtain bearer token and call APIs directly from a browser.","sidebar":"tutorialSidebar"},"authorization/overview":{"id":"authorization/overview","title":"Overview","description":"Lumin Sign APIs use the OAuth 2.0 protocol for authentication and authorization.","sidebar":"tutorialSidebar"},"client/authorization":{"id":"client/authorization","title":"Authorization API","description":"This reference describes the Lumin 3P Authorization JavaScript Library API, which you can use to load authorization codes or access tokens from Lumin.","sidebar":"tutorialSidebar"},"client/installation":{"id":"client/installation","title":"Load the client library","description":"Install client library on any page that a user might sign in on. Use the following code snippet:","sidebar":"tutorialSidebar"},"client/sendAndSign":{"id":"client/sendAndSign","title":"Send And Sign API","description":"This reference describes the Send and Sign API, which you can integrate with Lumin Sign send and sign flow.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Lumin Sign provides a fully compliant digital signature flow, that can be integrated with your Web or mobile application in minutes. Let\'s discover Lumin Sign in less than 5 minutes. Lumin Sign provides functionality for:","sidebar":"tutorialSidebar"},"tutorial/create-a-new-contract":{"id":"tutorial/create-a-new-contract","title":"Create a new Document","description":"In Lumin Sign, each signing flow is related to a document. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Lumin Sign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.","sidebar":"tutorialSidebar"},"tutorial/overview":{"id":"tutorial/overview","title":"Overview","description":"The Lumin Sign integration allows you to launch a fully-compliant digital signing flow from your web or mobile application in a few easy steps. At a high-level you will:","sidebar":"tutorialSidebar"},"tutorial/sendAndSign":{"id":"tutorial/sendAndSign","title":"Send and Sign Branding Guidelines","description":"Use Send And Sign button with the basic `bananasign","sidebar":"tutorialSidebar"},"tutorial/signing-flow":{"id":"tutorial/signing-flow","title":"Launch Signing Flow","description":"There are a few more steps for the customer to prepare there document for signing. Luckily, Lumin Sign handles everything from this point onwards. Just load the Lumin Sign iframe using the unique document identifier:","sidebar":"tutorialSidebar"},"tutorial/startpage":{"id":"tutorial/startpage","title":"Starting the Signing Flow","description":"The Lumin Sign signing workflow is normally started when a customer in your application clicks an action button. On Lumin PDF, the signing flow can be launched by clicking our Sign and Send button.","sidebar":"tutorialSidebar"}}}')}}]);
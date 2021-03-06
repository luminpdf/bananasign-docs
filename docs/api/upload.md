---
title: Upload
sidebar_position: 1
---

*How do API users to get their PDF to Bananasign?*

We will provide full documentation and working code examples for this upload flow. At a high-level, the current process is:

* Once the 3rd party initializes the signing flow, Lumin generates a S3 presigned url to the temporary bucket with an expiration time of 15/30 mins
* The 3rd party, then, uploads the file to our temporary bucket
* The 3rd party calls our API to add signers & viewers
* Bananasign backend gets the file from s3 along with payload from the request to finish the signing flow

Bananasign has a bucket life cycle set to clean up the bucket every day for expired files
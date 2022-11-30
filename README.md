# CrackStation as a Service

## Architecture

[![Blank-diagram.png](https://i.postimg.cc/qvntByXw/Blank-diagram.png)](https://postimg.cc/TKd2Cys5)

### Current stable version: `1.0.0`

## Overview

This is a Swift project for decrypting/cracking any single, double or three character password which matches the regex **[A-Za-z0-9?!]{1,3}**. This will only crack unsalted hashes.

for eg: Provide a Hash for `aa`, `Ka`, `!!!`, `A5?`, `b` and it will decrypt the hash and provide you the correct encypted output.

## Mission Statement

This is a public library and can be used by anyone to test if the password used by them or user of their product is using a very easy password and have them change it if their password is decrypted by this implementation.
    
## Usage

### API

This is a GET API and you will need to pass the hash as parameter.
```
https://5xduexoja5.execute-api.us-east-1.amazonaws.com/password/{hash}
```

Example:

```
https://5xduexoja5.execute-api.us-east-1.amazonaws.com/password/2d86c2a659e364e9abba49ea6ffcd53dd5559f05
```

The response will look like this, given the hash is decrypted:

```
{
    "2d86c2a659e364e9abba49ea6ffcd53dd5559f05": "???"
}
```

## Swagger Integration

We want to make everything easy for you. So the swagger doc for this API is already provided.

## Author 

Upanshu Chaudhary

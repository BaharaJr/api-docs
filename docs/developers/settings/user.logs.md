---
id: logs
title: User Logs
sidebar_label: User Logs
---

## Introduction
- System users' logs and all interactions

### Get System logs for all users

<br />

`Request Endpoint`
```JS
/api/userLogs
```
<br />

`Sample Payload`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 100,
    "total": 342,
    "nextPage": "/api/userLogs?page=2"
  },
  "userLogs": [
    {
      "id": "Tdm8VRABBmT5Y",
      "time": "2021-03-03T11:12:53.387Z",
      "resource": "/api/users/logs",
      "method": "GET",
      "statuscode": "200",
      "statusname": "OK",
      "referer": {
        "host": "loadbalance",
        "accept": "*/*",
        "cookie": "sess=s%3AFRrjApjeZ3qLWmlFbqmbHfBYgab-Tlln",
        "connection": "close",
        "user-agent": "insomnia/2020.5.2"
      }
    }
  ]
}
```
<br />

### Get current user logs

```JS
/api/users/me/logs
```

`Sample Payload`

```JSON
```
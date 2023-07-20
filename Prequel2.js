var obj = JSON.parse($response.body);

obj={
  "data": {
      "results": {
          "id": "3a524896-f2b6-482c-ad00-8e105d8e187f",
          "user_id": "KCH-1BA4E07A-3B72-4D62-9BA8-991470431CBE",
          "locale": "ru_RU",
          "created_at": "2021-12-02T13:21:58.486Z",
          "currency": {
              "id": "1d794627-3e14-4f7d-91aa-2fbe2a4a6271",
              "code": "RUB",
              "country_code": "RU"
          },
          "subscriptions": [{
              "id": "b08c7383-227d-47a6-9f56-0297ab59c36f",
              "autorenew_enabled": true,
              "in_retry_billing": false,
              "expires_at": "2030-07-23T16:58:15.000Z",
              "cancelled_at": null,
              "retries_count": 0,
              "started_at": "2023-07-20T16:58:16.000Z",
              "unit": "day",
              "units_count": 7,
              "next_check_at": "2023-07-23T17:05:15.000Z",
              "product_id": "com.aiarlabs.prequel.subscription.weekly",
              "introductory_activated": true,
              "kind": "autorenewable",
              "platform": "ios",
              "environment": "production",
              "local": false,
              "status": "trial",
              "group_id": "e9359adb"
          }],
          "devices": [],
          "paywalls": [{
              "id": "b5639f76",
              "json": null,
              "name": "test",
              "identifier": "testsss",
              "default": false,
              "experiment_id": null,
              "experiment_name": null,
              "from_paywall": null,
              "variation_identifier": null,
              "variation_name": null,
              "items": [{
                  "id": "3d966428",
                  "name": "Product 6",
                  "product_id": "com.aiarlabs.prequel.subscription.all_year_29.99_notrial_test06202",
                  "store": "app_store"
              }]
          }, {
              "id": "48a82fed",
              "json": null,
              "name": "ewrty",
              "identifier": "23456u7i",
              "default": true,
              "experiment_id": null,
              "experiment_name": null,
              "from_paywall": null,
              "variation_identifier": null,
              "variation_name": null,
              "items": []
          }]
      },
      "meta": null
  },
  "errors": null
}
$done({body: JSON.stringify(obj)});

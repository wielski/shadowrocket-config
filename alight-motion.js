var obj = JSON.parse($response.body);

obj= {
  "result" : {
    "result" : "success",
    "msTime" : 1670593113048,
    "accountCreatedMillis" : null,
    "licenses" : [
      {
        "productId" : "alightcreative.motion.1y_1y_t10",
        "label" : null,
        "benefits" : [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing",
          "CameraObjects",
          "LayerParenting"
        ],
        "period" : "1y",
        "valid" : true,
        "expires" : 1699389411000,
        "details" : null,
        "type" : "subscription",
        "autoRenewing" : true,
        "orderNumber" : "320001035735292",
        "linkStatus" : "linked-nologin",
        "store" : "apple_app_store"
      }
    ],
    "warnings" : [

    ]
  }
}



$done({body: JSON.stringify(obj)});
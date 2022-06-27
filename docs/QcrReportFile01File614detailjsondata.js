console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java 47 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.ApiVersionsResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.ApiVersionsResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "ApiVersionsResponse(ApiVersionsResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersion"
 , "c2" : "apiVersion(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldClientThrottle(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "defaultApiVersionsResponse(ApiMessageType.ListenerType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "defaultApiVersionsResponse(int;ApiMessageType.ListenerType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "createApiVersionsResponse(int;ApiVersionCollection)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "createApiVersionsResponse(int;RecordVersion;Features<SupportedVersionRange>;Map<String,Short>;long;NodeApiVersions;ListenerType)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "createApiVersionsResponse(int;ApiVersionCollection;Features<SupportedVersionRange>;Map<String,Short>;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionCollection"
 , "c2" : "filterApis(RecordVersion;ApiMessageType.ListenerType)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionCollection"
 , "c2" : "collectApis(Set<ApiKeys>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionCollection"
 , "c2" : "intersectForwardableApis(ApiMessageType.ListenerType;RecordVersion;Map<ApiKeys,ApiVersion>)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponseData"
 , "c2" : "createApiVersionsResponseData(int;Errors;ApiVersionCollection;Features<SupportedVersionRange>;Map<String,Short>;long)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "SupportedFeatureKeyCollection"
 , "c2" : "createSupportedFeatureKeys(Features<SupportedVersionRange>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "FinalizedFeatureKeyCollection"
 , "c2" : "createFinalizedFeatureKeys(Map<String,Short>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Optional<ApiVersion>"
 , "c2" : "intersect(ApiVersion;ApiVersion)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersion"
 , "c2" : "toApiVersion(ApiKeys)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method apiVersion arguments short  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.requests.ApiVersionsResponse.shouldClientThrottle@POLYN196774 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.ApiVersionsResponse.parse@POLYN196911 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.requests.ApiVersionsResponse.parse@POLYN196911 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method defaultApiVersionsResponse arguments ApiMessageType.ListenerType  listenerType"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.requests.ApiVersionsResponse.defaultApiVersionsResponse@POLYN197681 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method defaultApiVersionsResponse arguments int  throttleTimeMs|ApiMessageType.ListenerType  listenerType"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method createApiVersionsResponse arguments int  throttleTimeMs|ApiVersionCollection  apiVersions"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method createApiVersionsResponse arguments int  throttleTimeMs|RecordVersion  minRecordVersion|Features&lt;SupportedVersionRange &gt;  latestSupportedFeatures|Map&lt;String ,Short &gt;  finalizedFeatures|long  finalizedFeaturesEpoch|NodeApiVersions  controllerApiVersions|ListenerType  listenerType"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00106] For method createApiVersionsResponse list of called methods Object monObjet|ApiVersionCollection intersectForwardableApisN198832|ApiVersionCollection filterApisN199000"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.requests.ApiVersionsResponse.createApiVersionsResponse@POLYN198426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method createApiVersionsResponse arguments int  throttleTimeMs|ApiVersionCollection  apiVersions|Features&lt;SupportedVersionRange &gt;  latestSupportedFeatures|Map&lt;String ,Short &gt;  finalizedFeatures|long  finalizedFeaturesEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method filterApis arguments RecordVersion  minRecordVersion|ApiMessageType.ListenerType  listenerType"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument minRecordVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method collectApis arguments Set&lt;ApiKeys &gt;  apiKeys"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method intersectForwardableApis arguments ApiMessageType.ListenerType  listenerType|RecordVersion  minRecordVersion|Map&lt;ApiKeys ,ApiVersion &gt;  activeControllerApiVersions"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00173] For method intersectForwardableApis list of called methods Object monObjet|ApiVersion toApiVersionN201316|java.util.Optional&lt;ApiVersion&gt; intersectN201596"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument minRecordVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument activeControllerApiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00183] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.requests.ApiVersionsResponse.intersectForwardableApis@POLYN200841 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method createApiVersionsResponseData arguments int  throttleTimeMs|Errors  error|ApiVersionCollection  apiKeys|Features&lt;SupportedVersionRange &gt;  latestSupportedFeatures|Map&lt;String ,Short &gt;  finalizedFeatures|long  finalizedFeaturesEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#205"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00205] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00222] For method createSupportedFeatureKeys arguments Features&lt;SupportedVersionRange &gt;  latestSupportedFeatures"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00223] The argument latestSupportedFeatures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00226] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00227] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method createFinalizedFeatureKeys arguments Map&lt;String ,Short &gt;  finalizedFeatures"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#238"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00238] The argument finalizedFeatures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method intersect arguments ApiVersion  thisVersion|ApiVersion  other"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.common.requests.ApiVersionsResponse.intersect@POLYN204686 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.common.requests.ApiVersionsResponse.intersect@POLYN204686 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.requests.ApiVersionsResponse.intersect@POLYN204686 the MagicNumber/String  'thisVersion.apiKey: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.common.requests.ApiVersionsResponse.intersect@POLYN204686 the MagicNumber/String  ' must be equal to other.apiKey: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method toApiVersion arguments ApiKeys  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#268"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00268] The argument apiKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ApiVersionsResponse.apiVersion@POLYN196226"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ApiVersionsResponse.createFinalizedFeatureKeys@POLYN203836"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ApiVersionsResponse.createSupportedFeatureKeys@POLYN202963"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ApiVersionsResponse.errorCounts@POLYN196444"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ApiVersionsResponse.throttleTimeMs@POLYN196644"
}} 
]
};
console.log('leListeStr 99 main end');

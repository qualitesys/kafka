console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.AlterConfigsResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterConfigsResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#34"
 , "c1" : "AlterConfigsResponse"
 , "c2" : "AlterConfigsResponse(AlterConfigsResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#39"
 , "c1" : "Map&lt;ConfigResource,ApiError&gt;"
 , "c2" : "errors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#49"
 , "c1" : "Map&lt;Errors,Integer&gt;"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#54"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#59"
 , "c1" : "AlterConfigsResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#63"
 , "c1" : "AlterConfigsResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#68"
 , "c1" : "boolean"
 , "c2" : "shouldClientThrottle(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.requests.AlterConfigsResponse.shouldClientThrottle@POLYN158619 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AlterConfigsResponse.throttleTimeMs@POLYN158125"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterConfigsResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

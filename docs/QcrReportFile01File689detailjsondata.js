console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java 14 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.LeaderAndIsrResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.LeaderAndIsrResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#44"
 , "c1" : "LeaderAndIsrResponse"
 , "c2" : "LeaderAndIsrResponse(LeaderAndIsrResponseData;short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#50"
 , "c1" : "LeaderAndIsrTopicErrorCollection"
 , "c2" : "topics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#54"
 , "c1" : "Errors"
 , "c2" : "error()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#59"
 , "c1" : "Map&lt;Errors,Integer&gt;"
 , "c2" : "errorCounts()"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#78"
 , "c1" : "Map&lt;TopicPartition,Errors&gt;"
 , "c2" : "partitionErrors(Map&lt;Uuid,String&gt;)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#98"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#102"
 , "c1" : "LeaderAndIsrResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#107"
 , "c1" : "LeaderAndIsrResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#112"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00059] For method errorCounts list of called methods Object monObjet|java.util.Map errorCountsN168228|java.util.Map errorCountsN168478"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.errorCounts@POLYN167378 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.errorCounts@POLYN167378 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.errorCounts@POLYN167378 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.errorCounts@POLYN167378 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method partitionErrors arguments Map&lt;Uuid ,String &gt;  topicNames"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00078] For method partitionErrors list of called methods Object monObjet|V topicNames_getN169756"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument topicNames is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.partitionErrors@POLYN168974 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.requests.LeaderAndIsrResponse.partitionErrors@POLYN168974 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.LeaderAndIsrResponse.toString@POLYN170790"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.LeaderAndIsrResponse.topics@POLYN167066"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaderAndIsrResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

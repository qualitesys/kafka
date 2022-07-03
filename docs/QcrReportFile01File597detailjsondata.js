console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "AddPartitionsToTxnResponse(AddPartitionsToTxnResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "AddPartitionsToTxnResponse(int;Map<TopicPartition,Errors>)"
 , "c3" : "3"
 , "c4" : "11"
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
   "c1" : "Map<TopicPartition,Errors>"
 , "c2" : "errors()"
 , "c3" : "4"
 , "c4" : "4"
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
   "c1" : "AddPartitionsToTxnResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00036] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00039] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.requests.AddPartitionsToTxnResponse.errors@POLYN181710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.requests.AddPartitionsToTxnResponse.shouldClientThrottle@POLYN183152 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.errorCounts@POLYN182495"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.throttleTimeMs@POLYN181567"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.toString@POLYN183032"
}} 
]
};
console.log('leListeStr 99 main end');

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
{ "ligne" : { "" : ""
 , "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#53"
 , "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "AddPartitionsToTxnResponse(AddPartitionsToTxnResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#58"
 , "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "AddPartitionsToTxnResponse(int;Map&lt;TopicPartition,Errors&gt;)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#93"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#97"
 , "c1" : "Map&lt;TopicPartition,Errors&gt;"
 , "c2" : "errors()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#115"
 , "c1" : "Map&lt;Errors,Integer&gt;"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#120"
 , "c1" : "AddPartitionsToTxnResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00124"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#124"
 , "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00129"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#129"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#134"
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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
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
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00072] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.requests.AddPartitionsToTxnResponse.errors@POLYN162070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.requests.AddPartitionsToTxnResponse.shouldClientThrottle@POLYN163512 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.errorCounts@POLYN162855"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.throttleTimeMs@POLYN161927"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnResponse.toString@POLYN163392"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

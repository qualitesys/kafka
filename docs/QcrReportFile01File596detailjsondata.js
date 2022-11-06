console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.AddPartitionsToTxnRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AddPartitionsToTxnRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#86"
 , "c1" : "AddPartitionsToTxnRequest"
 , "c2" : "AddPartitionsToTxnRequest(AddPartitionsToTxnRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#91"
 , "c1" : "List<TopicPartition>"
 , "c2" : "partitions()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#100"
 , "c1" : "AddPartitionsToTxnRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#105"
 , "c1" : "AddPartitionsToTxnResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#113"
 , "c1" : "AddPartitionsToTxnRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00040] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.requests.AddPartitionsToTxnRequest.Builder.Builder@POLYN157262 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method getPartitions arguments AddPartitionsToTxnRequestData  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.requests.AddPartitionsToTxnRequest.partitions@POLYN160045 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AddPartitionsToTxnRequest.getErrorResponse@POLYN160447"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AddPartitionsToTxnRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

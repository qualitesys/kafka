console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.HeartbeatRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.HeartbeatRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "HeartbeatRequest"
 , "c2" : "HeartbeatRequest(HeartbeatRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "HeartbeatRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "HeartbeatRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.requests.HeartbeatRequest.Builder.build@POLYN164679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.requests.HeartbeatRequest.Builder.build@POLYN164679 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.common.requests.HeartbeatRequest.Builder.build@POLYN164679 the MagicNumber/String  'The broker heartbeat protocol version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.requests.HeartbeatRequest.Builder.build@POLYN164679 the MagicNumber/String  ' does not support usage of config group.instance.id.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.requests.HeartbeatRequest.getErrorResponse@POLYN165530 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/HeartbeatRequest.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
};
console.log('leListeStr 99 main end');

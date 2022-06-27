console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.SyncGroupRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.SyncGroupRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SyncGroupRequest"
 , "c2" : "SyncGroupRequest(SyncGroupRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ByteBuffer>"
 , "c2" : "groupAssignments()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "areMandatoryProtocolTypeAndNamePresent()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "SyncGroupRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SyncGroupRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.svg" }

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
 , "c4" : "9"
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
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.requests.SyncGroupRequest.Builder.build@POLYN168325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.requests.SyncGroupRequest.Builder.build@POLYN168325 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.requests.SyncGroupRequest.Builder.build@POLYN168325 the MagicNumber/String  'The broker sync group protocol version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.requests.SyncGroupRequest.Builder.build@POLYN168325 the MagicNumber/String  ' does not support usage of config group.instance.id.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.requests.SyncGroupRequest.getErrorResponse@POLYN169176 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.SyncGroupRequest.areMandatoryProtocolTypeAndNamePresent@POLYN170214 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.SyncGroupRequest.areMandatoryProtocolTypeAndNamePresent@POLYN170214 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.SyncGroupRequest.areMandatoryProtocolTypeAndNamePresent@POLYN170214 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.requests.SyncGroupRequest.areMandatoryProtocolTypeAndNamePresent@POLYN170214 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SyncGroupRequest.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
};
console.log('leListeStr 99 main end');

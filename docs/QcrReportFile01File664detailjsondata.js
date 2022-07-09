console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.EndQuorumEpochRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.EndQuorumEpochRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "EndQuorumEpochRequest"
 , "c2" : "EndQuorumEpochRequest(EndQuorumEpochRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "EndQuorumEpochRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EndQuorumEpochResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EndQuorumEpochRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EndQuorumEpochRequestData"
 , "c2" : "singletonRequest(TopicPartition;int;int;List<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EndQuorumEpochRequestData"
 , "c2" : "singletonRequest(TopicPartition;String;int;int;List<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method singletonRequest arguments TopicPartition  topicPartition|int  leaderEpoch|int  leaderId|List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.requests.EndQuorumEpochRequest.singletonRequest@POLYN152404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method singletonRequest arguments TopicPartition  topicPartition|String  clusterId|int  leaderEpoch|int  leaderId|List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/EndQuorumEpochRequest.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');

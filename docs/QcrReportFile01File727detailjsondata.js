console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java 26 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument groupInstanceId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.Builder@POLYN184570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN185448 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN185448 the MagicNumber/String  'Broker doesn't support group metadata commit API on version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN185448 the MagicNumber/String  ', minimum supported request version is 3 which requires brokers to be on version 2.5 or above.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.groupMetadataSet@POLYN185845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method getTopics arguments Map&lt;TopicPartition ,CommittedOffset &gt;  pendingTxnOffsetCommits"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument pendingTxnOffsetCommits is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method getErrorResponseTopics arguments List&lt;TxnOffsetCommitRequestTopic &gt;  requestTopics|Errors  e"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00172] The class CommittedOffset contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN191274 the MagicNumber/String  'CommittedOffset(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN191274 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN191274 the MagicNumber/String  ', leaderEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN191274 the MagicNumber/String  ', metadata='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN191274 the MagicNumber/String  '')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.equals@POLYN191538 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java 27 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.TxnOffsetCommitRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.TxnOffsetCommitRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#106"
 , "c1" : "TxnOffsetCommitRequest"
 , "c2" : "TxnOffsetCommitRequest(TxnOffsetCommitRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#111"
 , "c1" : "Map<TopicPartition,CommittedOffset>"
 , "c2" : "offsets()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#126"
 , "c1" : "List<TxnOffsetCommitRequestTopic>"
 , "c2" : "getTopics(Map<TopicPartition,CommittedOffset>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#150"
 , "c1" : "TxnOffsetCommitRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#154"
 , "c1" : "List<TxnOffsetCommitResponseTopic>"
 , "c2" : "getErrorResponseTopics(List<TxnOffsetCommitRequestTopic>;Errors)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#173"
 , "c1" : "TxnOffsetCommitResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00182"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#182"
 , "c1" : "TxnOffsetCommitRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument groupInstanceId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.Builder@POLYN172452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN173330 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN173330 the MagicNumber/String  'Broker doesn't support group metadata commit API on version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.build@POLYN173330 the MagicNumber/String  ', minimum supported request version is 3 which requires brokers to be on version 2.5 or above.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.groupMetadataSet@POLYN173727 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method getTopics arguments Map&lt;TopicPartition ,CommittedOffset &gt;  pendingTxnOffsetCommits"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument pendingTxnOffsetCommits is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method getErrorResponseTopics arguments List&lt;TxnOffsetCommitRequestTopic &gt;  requestTopics|Errors  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00173] For method getErrorResponse list of called methods Object monObjet|java.util.List getErrorResponseTopicsN178027"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN179166 the MagicNumber/String  'CommittedOffset(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN179166 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN179166 the MagicNumber/String  ', leaderEpoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN179166 the MagicNumber/String  ', metadata='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.toString@POLYN179166 the MagicNumber/String  '')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#207"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00207] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.common.requests.TxnOffsetCommitRequest.CommittedOffset.equals@POLYN179430 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.TxnOffsetCommitRequest.Builder.toString@POLYN174041"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/TxnOffsetCommitRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java 32 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.ListOffsetsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.ListOffsetsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#98"
 , "c1" : "ListOffsetsRequest"
 , "c2" : "ListOffsetsRequest(ListOffsetsRequestData;short)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#114"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#144"
 , "c1" : "ListOffsetsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00148"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#148"
 , "c1" : "int"
 , "c2" : "replicaId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00152"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#152"
 , "c1" : "IsolationLevel"
 , "c2" : "isolationLevel()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#156"
 , "c1" : "List<ListOffsetsTopic>"
 , "c2" : "topics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#160"
 , "c1" : "Set<TopicPartition>"
 , "c2" : "duplicatePartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00164"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#164"
 , "c1" : "ListOffsetsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#168"
 , "c1" : "List<ListOffsetsTopic>"
 , "c2" : "toListOffsetsTopics(Map<TopicPartition,ListOffsetsPartition>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#178"
 , "c1" : "ListOffsetsTopic"
 , "c2" : "singletonRequestData(String;int;long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
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
 , "c4" : "8"
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
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method forReplica arguments short  allowedVersion|int  replicaId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.requests.ListOffsetsRequest.Builder.forReplica@POLYN169387 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method forConsumer arguments boolean  requireTimestamp|IsolationLevel  isolationLevel|boolean  requireMaxTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.requests.ListOffsetsRequest.Builder.forConsumer@POLYN169658 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.requests.ListOffsetsRequest.Builder.forConsumer@POLYN169658 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.requests.ListOffsetsRequest.Builder.forConsumer@POLYN169658 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.requests.ListOffsetsRequest.Builder.forConsumer@POLYN169658 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument isolationLevel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method setTargetTimes arguments List&lt;ListOffsetsTopic &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.requests.ListOffsetsRequest.getErrorResponse@POLYN172224 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method toListOffsetsTopics arguments Map&lt;TopicPartition ,ListOffsetsPartition &gt;  timestampsToSearch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00168] For method toListOffsetsTopics list of called methods Object monObjet|V topics_computeIfAbsentN175338"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#168"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00168] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00171] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method singletonRequestData arguments String  topic|int  partitionIndex|long  timestamp|int  maxNumOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ListOffsetsRequest.Builder.Builder@POLYN170288"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ListOffsetsRequest.Builder.toString@POLYN171112"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ListOffsetsRequest.replicaId@POLYN174062"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.ListOffsetsRequest.topics@POLYN174334"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ListOffsetsRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

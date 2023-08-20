console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractResponse"
 , "c2" : ""
 , "c2" : "org.apache.kafka.common.requests.DescribeQuorumResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeQuorumResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#46"
 , "c1" : "DescribeQuorumResponse"
 , "c2" : "DescribeQuorumResponse(DescribeQuorumResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#52"
 , "c1" : "Map&lt;Errors,Integer&gt;"
 , "c2" : "errorCounts()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#66"
 , "c1" : "DescribeQuorumResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#71"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#75"
 , "c1" : "DescribeQuorumResponseData"
 , "c2" : "singletonResponse(TopicPartition;int;int;long;List&lt;ReplicaState&gt;;List&lt;ReplicaState&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#93"
 , "c1" : "DescribeQuorumResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.requests.DescribeQuorumResponse.errorCounts@POLYN162132 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method singletonResponse arguments TopicPartition  topicPartition|int  leaderId|int  leaderEpoch|long  highWatermark|List&lt;ReplicaState&gt;  voterStates|List&lt;ReplicaState&gt;  observerStates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeQuorumResponse.errorCounts@POLYN162132"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.requests.DescribeQuorumResponse.errorCounts@POLYN162132 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeQuorumResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

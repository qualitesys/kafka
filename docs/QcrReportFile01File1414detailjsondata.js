console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/RaftUtil.java 112 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.RaftUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.RaftUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ApiMessage"
 , "c2" : "errorResponse(ApiKeys;Errors)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "FetchRequestData"
 , "c2" : "singletonFetchRequest(TopicPartition;Uuid;Consumer<FetchRequestData.FetchPartition>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "FetchResponseData"
 , "c2" : "singletonFetchResponse(TopicPartition;Uuid;Errors;Consumer<FetchResponseData.PartitionData>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(FetchRequestData;TopicPartition;Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(FetchResponseData;TopicPartition;Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(VoteResponseData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(VoteRequestData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(BeginQuorumEpochRequestData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(BeginQuorumEpochResponseData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(EndQuorumEpochRequestData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(EndQuorumEpochResponseData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidTopicPartition(DescribeQuorumRequestData;TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.svg" }

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
 , "c4" : "24"
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
 , "c4" : "55"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class RaftUtil contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method errorResponse arguments ApiKeys  apiKey|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.raft.RaftUtil.errorResponse@POLYN175359 the MagicNumber/String  'Received response for unexpected request type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method singletonFetchRequest arguments TopicPartition  topicPartition|Uuid  topicId|Consumer&lt;FetchRequestData.FetchPartition &gt;  partitionConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument partitionConsumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method singletonFetchResponse arguments TopicPartition  topicPartition|Uuid  topicId|Errors  topLevelError|Consumer&lt;FetchResponseData.PartitionData &gt;  partitionConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument topLevelError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument partitionConsumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method hasValidTopicPartition arguments FetchRequestData  data|TopicPartition  topicPartition|Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00086] The same method call data.topics()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00087] The same method call data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00088] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN177848 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method hasValidTopicPartition arguments FetchResponseData  data|TopicPartition  topicPartition|Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00093] The same method call data.responses()data.responses()data.responses()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00094] The same method call data.responses()data.responses()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00095] The same method call data.responses()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN178565 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method hasValidTopicPartition arguments VoteResponseData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00100] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00102] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179282 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method hasValidTopicPartition arguments VoteRequestData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00107] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00109] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN179994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method hasValidTopicPartition arguments BeginQuorumEpochRequestData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#113"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00113] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#113"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00113] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00114] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00116] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN180706 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method hasValidTopicPartition arguments BeginQuorumEpochResponseData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00121] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00123] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN181418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method hasValidTopicPartition arguments EndQuorumEpochRequestData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00128] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00130] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182130 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method hasValidTopicPartition arguments EndQuorumEpochResponseData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00135] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00137] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN182842 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method hasValidTopicPartition arguments DescribeQuorumRequestData  data|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00142] The same method call data.topics()topicPartition.topic()data.topics()data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00144] The same method call data.topics()topicPartition.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftUtil.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.raft.RaftUtil.hasValidTopicPartition@POLYN183554 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

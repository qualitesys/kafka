console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java 58 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiLookupStrategy<TopicPartition>"
 , "c2" : "org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#46"
 , "c1" : "PartitionLeaderStrategy"
 , "c2" : "PartitionLeaderStrategy(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#51"
 , "c1" : "ApiRequestScope"
 , "c2" : "lookupScope(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#58"
 , "c1" : "MetadataRequest.Builder"
 , "c2" : "buildRequest(Set&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#67"
 , "c1" : "void"
 , "c2" : "handleTopicError(String;Errors;Set&lt;TopicPartition&gt;;Map&lt;TopicPartition,Throwable&gt;)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#105"
 , "c1" : "void"
 , "c2" : "failAllPartitionsForTopic(String;Set&lt;TopicPartition&gt;;Map&lt;TopicPartition,Throwable&gt;;Function&lt;TopicPartition,Throwable&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#116"
 , "c1" : "void"
 , "c2" : "handlePartitionError(TopicPartition;Errors;Map&lt;TopicPartition,Throwable&gt;)"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#140"
 , "c1" : "LookupResult&lt;TopicPartition&gt;"
 , "c2" : "handleResponse(Set&lt;TopicPartition&gt;;AbstractResponse)"
 , "c3" : "8"
 , "c4" : "16"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.svg" }

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
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method lookupScope arguments TopicPartition  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method buildRequest arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.buildRequest@POLYN165924 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method handleTopicError arguments String  topic|Errors  topicError|Set&lt;TopicPartition &gt;  requestPartitions|Map&lt;TopicPartition ,Throwable &gt;  failed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument topicError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00097] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Metadata request for topic {} returned topic-level error {}. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Received authorization failure for topic {} in  Metadata  response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  ' due to topic authorization failure' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Received invalid topic error for topic {} in  Metadata  response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  ' due to invalid topic  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Received unexpected error for topic {} in  Metadata  response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  ' due to unexpected error for topic  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method failAllPartitionsForTopic arguments String  topic|Set&lt;TopicPartition &gt;  partitions|Map&lt;TopicPartition ,Throwable &gt;  failed|Function&lt;TopicPartition ,Throwable &gt;  exceptionGenerator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument exceptionGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method handlePartitionError arguments TopicPartition  topicPartition|Errors  partitionError|Map&lt;TopicPartition ,Throwable &gt;  failed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument partitionError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00131] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN169087 the MagicNumber/String  'Metadata request for partition {} returned partition-level error {}. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN169087 the MagicNumber/String  'Received unexpected error for partition {} in  Metadata  response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN169087 the MagicNumber/String  'Unexpected error during metadata lookup for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method handleResponse arguments Set&lt;TopicPartition &gt;  requestPartitions|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument requestPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00156] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN169939 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN169939 the MagicNumber/String  'Metadata request for {} returned no error, but the leader is unknown. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN169939"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN169939 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN169939 the MagicNumber/String 'Metadata request for {} returned no error, but the leader is unknown. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Metadata request for topic {} returned topic-level error {}. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Received authorization failure for topic {} in  Metadata  response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String ' due to topic authorization failure' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Received invalid topic error for topic {} in  Metadata  response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String ' ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String ' due to invalid topic  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Received unexpected error for topic {} in  Metadata  response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String ' ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String ' due to unexpected error for topic  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN166551 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

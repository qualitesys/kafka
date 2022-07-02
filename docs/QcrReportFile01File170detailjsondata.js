console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java 61 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiLookupStrategy<TopicPartition>"
 , "c2" : "org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "PartitionLeaderStrategy"
 , "c2" : "PartitionLeaderStrategy(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiRequestScope"
 , "c2" : "lookupScope(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MetadataRequest.Builder"
 , "c2" : "buildRequest(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleTopicError(String;Errors;Set<TopicPartition>;Map<TopicPartition,Throwable>)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "failAllPartitionsForTopic(String;Set<TopicPartition>;Map<TopicPartition,Throwable>;Function<TopicPartition,Throwable>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handlePartitionError(TopicPartition;Errors;Map<TopicPartition,Throwable>)"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "LookupResult<TopicPartition>"
 , "c2" : "handleResponse(Set<TopicPartition>;AbstractResponse)"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
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
 , "c4" : "18"
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
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class PartitionLeaderStrategy contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method lookupScope arguments TopicPartition  key"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method buildRequest arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.buildRequest@POLYN184046 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method handleTopicError arguments String  topic|Errors  topicError|Set&lt;TopicPartition &gt;  requestPartitions|Map&lt;TopicPartition ,Throwable &gt;  failed"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument topicError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00080] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Metadata request for topic {} returned topic-level error {}. Will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Received authorization failure for topic {} in `Metadata` response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  ' due to topic authorization failure' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Received invalid topic error for topic {} in `Metadata` response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  ' due to invalid topic `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Received unexpected error for topic {} in `Metadata` response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  ' due to unexpected error for topic `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method failAllPartitionsForTopic arguments String  topic|Set&lt;TopicPartition &gt;  partitions|Map&lt;TopicPartition ,Throwable &gt;  failed|Function&lt;TopicPartition ,Throwable &gt;  exceptionGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument exceptionGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method handlePartitionError arguments TopicPartition  topicPartition|Errors  partitionError|Map&lt;TopicPartition ,Throwable &gt;  failed"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument partitionError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00114] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN187209 the MagicNumber/String  'Metadata request for partition {} returned partition-level error {}. Will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN187209 the MagicNumber/String  'Received unexpected error for partition {} in `Metadata` response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handlePartitionError@POLYN187209 the MagicNumber/String  'Unexpected error during metadata lookup for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method handleResponse arguments Set&lt;TopicPartition &gt;  requestPartitions|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument requestPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN188061 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN188061 the MagicNumber/String  'Metadata request for {} returned no error, but the leader is unknown. Will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN188061"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.buildRequest@POLYN184046"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN188061 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleResponse@POLYN188061 the MagicNumber/String 'Metadata request for {} returned no error, but the leader is unknown. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Metadata request for topic {} returned topic-level error {}. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Received authorization failure for topic {} in `Metadata` response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String ' due to topic authorization failure' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Received invalid topic error for topic {} in `Metadata` response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String ' due to invalid topic `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String '`' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Received unexpected error for topic {} in `Metadata` response' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String ' due to unexpected error for topic `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.handleTopicError@POLYN184673 the MagicNumber/String '`' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/PartitionLeaderStrategy.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.clients.admin.internals.PartitionLeaderStrategy.buildRequest@POLYN184046 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');

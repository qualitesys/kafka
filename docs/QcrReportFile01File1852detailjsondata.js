console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java 120 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.RepartitionTopics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.RepartitionTopics" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RepartitionTopics"
 , "c2" : "RepartitionTopics(TopologyMetadata;InternalTopicManager;CopartitionedTopicsEnforcer;Cluster;String)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "topologiesWithMissingInputTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Queue<StreamsException>"
 , "c2" : "missingSourceTopicExceptions()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,PartitionInfo>"
 , "c2" : "topicPartitionsInfo()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,InternalTopicConfig>"
 , "c2" : "computeRepartitionTopicConfig(Cluster)"
 , "c3" : "6"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureCopartitioning(Collection<Set<String>>;Map<String,InternalTopicConfig>;Cluster)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "computeMissingExternalSourceTopics(TopicsInfo;Cluster)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setRepartitionSourceTopicPartitionCount(Map<String,InternalTopicConfig>;Collection<TopicsInfo>;Cluster)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "computePartitionCount(Map<String,InternalTopicConfig>;Collection<TopicsInfo>;Cluster;String)"
 , "c3" : "10"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "27"
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
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class RepartitionTopics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  'Skipping the repartition topic validation since there are no repartition topics.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  'Skipping the repartition topic validation since all topologies containing repartition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  'topics are missing external user source topics and cannot be processed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00098] For method missingSourceTopicExceptions list of called methods Object monObjet|java.util.Set&lt;String&gt; entry_getKeyN203432"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.missingSourceTopicExceptions@POLYN203039 the MagicNumber/String  'Missing source topics %s for subtopology %d of topology %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.missingSourceTopicExceptions@POLYN203039 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method computeRepartitionTopicConfig arguments Cluster  clusterMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00117] For method computeRepartitionTopicConfig list of called methods Object monObjet|boolean topologyMetadata_hasNamedTopologiesN204714|java.util.Map&lt;String,org.apache.kafka.streams.processor.internals.InternalTopicConfig&gt; computeMissingExternalSourceTopicsN205797"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'Subtopology {} was missing source topics {} and will be excluded from the current assignment, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'this can be due to the consumer client's metadata being stale or because they have ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'not been created yet. Please verify that you have created all input topics; if they ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'do exist, you just need to wait for the metadata to be updated, at which time a new ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'rebalance will be kicked off automatically and the topology will be retried at that time.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String  'Skipping repartition topic validation for entire topology {} due to missing source topics {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method ensureCopartitioning arguments Collection&lt;Set&lt;String &gt; &gt;  copartitionGroups|Map&lt;String ,InternalTopicConfig &gt;  repartitionTopicMetadata|Cluster  clusterMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method computeMissingExternalSourceTopics arguments TopicsInfo  topicsInfo|Cluster  clusterMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument topicsInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00173] The argument clusterMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method setRepartitionSourceTopicPartitionCount arguments Map&lt;String ,InternalTopicConfig &gt;  repartitionTopicMetadata|Collection&lt;TopicsInfo &gt;  topicGroups|Cluster  clusterMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00181] The argument repartitionTopicMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00183] The argument clusterMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00190] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00190] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'Unable to determine number of partitions for {}, another iteration is needed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'Determined number of partitions for {} to be {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'Unable to determine the number of partitions of all repartition topics, most likely a source topic is missing or pattern doesn't match any topics\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'topic groups: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'cluster topics: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'Failed to compute number of partitions for all repartition topics, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String  'make sure all user input topics are created and all Pattern subscriptions match at least one topic in the cluster' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method computePartitionCount arguments Map&lt;String ,InternalTopicConfig &gt;  repartitionTopicMetadata|Collection&lt;TopicsInfo &gt;  topicGroups|Cluster  clusterMetadata|String  repartitionSourceTopic"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00224] For method computePartitionCount list of called methods Object monObjet|Integer clusterMetadata_partitionCountForTopicN210802"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#224"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00224] The argument repartitionTopicMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument clusterMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00246] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00246] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  'No partition count found for source topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  ', but it should have been.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00091] Public method topologiesWithMissingInputTopics is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00098] Public method missingSourceTopicExceptions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00112] Public method topicPartitionsInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RepartitionTopics.RepartitionTopics@POLYN200448"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'Subtopology {} was missing source topics {} and will be excluded from the current assignment, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'this can be due to the consumer client's metadata being stale or because they have ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00144] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'not been created yet. Please verify that you have created all input topics; if they ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'do exist, you just need to wait for the metadata to be updated, at which time a new ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'rebalance will be kicked off automatically and the topology will be retried at that time.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computeRepartitionTopicConfig@POLYN204174 the MagicNumber/String 'Skipping repartition topic validation for entire topology {} due to missing source topics {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00204] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'Unable to determine number of partitions for {}, another iteration is needed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00207] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'Determined number of partitions for {} to be {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00209] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'Unable to determine the number of partitions of all repartition topics, most likely a source topic is missing or pattern doesn't match any topics\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'topic groups: {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'cluster topics: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00218] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'Failed to compute number of partitions for all repartition topics, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00219] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setRepartitionSourceTopicPartitionCount@POLYN207883 the MagicNumber/String 'make sure all user input topics are created and all Pattern subscriptions match at least one topic in the cluster' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00228] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00247] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String 'No partition count found for source topic ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String ', but it should have been.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.computePartitionCount@POLYN209731 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 'Skipping the repartition topic validation since there are no repartition topics.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 'Skipping the repartition topic validation since all topologies containing repartition' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 'topics are missing external user source topics and cannot be processed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopics.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.streams.processor.internals.RepartitionTopics.setup@POLYN201085 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java 85 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SourceTask"
 , "c2" : "org.apache.kafka.connect.mirror.MirrorSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.MirrorSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "MirrorSourceTask"
 , "c2" : "MirrorSourceTask()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "MirrorSourceTask"
 , "c2" : "MirrorSourceTask(KafkaConsumer<byte[],byte[]>;MirrorMetrics;String;ReplicationPolicy;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<SourceRecord>"
 , "c2" : "poll()"
 , "c3" : "6"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "commitRecord(SourceRecord;RecordMetadata)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeSyncOffsets(TopicPartition;long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "sendOffsetSync(TopicPartition;long;long)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "loadOffsets(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Long"
 , "c2" : "loadOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SourceRecord"
 , "c2" : "convertRecord(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Headers"
 , "c2" : "convertHeaders(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "formatRemoteTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "byteSize(byte[])"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "25"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.mirror.MirrorSourceTask.MirrorSourceTask@POLYN188170 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method start list of called methods Object monObjet|String config_sourceClusterAliasN189218|org.apache.kafka.connect.mirror.MirrorMetrics config_metricsN189292|java.time.Duration config_consumerPollTimeoutN189366|long config_maxOffsetLagN189440|org.apache.kafka.connect.mirror.ReplicationPolicy config_replicationPolicyN189514|String config_offsetSyncsTopicN189671|KafkaConsumer&lt;byte[],byte[]&gt; MirrorUtils_newConsumerN189745|KafkaProducer&lt;byte[],byte[]&gt; MirrorUtils_newProducerN189858|java.util.Map&lt;org.apache.kafka.common.TopicPartition,Long&gt; loadOffsetsN190105"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String  'Starting with {} previously uncommitted partitions.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String  'Seeking offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String  '{} replicating {} topic-partitions {}-&amp;gt;{}: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  'Interrupted waiting for access to consumer. Will try closing anyway.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  'source consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  'offset producer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  'metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String  'Stopping {} took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  'Polled {} records from {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  'Failure during poll.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String  'Failure during poll.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method commitRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN194223 the MagicNumber/String  'RecordMetadata has no offset -- can't sync offsets for {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN194223 the MagicNumber/String  'Failure committing record.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method maybeSyncOffsets arguments TopicPartition  topicPartition|long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method sendOffsetSync arguments TopicPartition  topicPartition|long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String  'Failure sending offset sync.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String  'Sync'd offsets for {}: {}=={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method loadOffsets arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#210"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00210] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00214] For method loadOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00214] For method loadOffset list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; MirrorUtils_wrapPartitionN197683|org.apache.kafka.connect.storage.OffsetStorageReader context_offsetStorageReaderN197836"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.connect.mirror.MirrorSourceTask.loadOffset@POLYN197549 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method convertRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00221] For method convertRecord list of called methods Object monObjet|String formatRemoteTopicN198165|org.apache.kafka.connect.header.Headers convertHeadersN198271"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#221"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00221] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method convertHeaders arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#233"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00233] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method formatRemoteTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#245"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00245] For method byteSize arguments byte[]  bytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.connect.mirror.MirrorSourceTask.byteSize@POLYN199555 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.connect.mirror.MirrorSourceTask.byteSize@POLYN199555 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00253] The class PartitionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method update arguments long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN200276 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN200276 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN200276 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN200276 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN194223"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00200] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String 'Failure sending offset sync.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN196109 the MagicNumber/String 'Sync'd offsets for {}: {}=={}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN194223 the MagicNumber/String 'RecordMetadata has no offset -- can't sync offsets for {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN194223 the MagicNumber/String 'Failure committing record.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String 'Polled {} records from {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String 'Failure during poll.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN192109 the MagicNumber/String 'Failure during poll.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String 'Starting with {} previously uncommitted partitions.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String 'Seeking offsets: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN188810 the MagicNumber/String '{} replicating {} topic-partitions {}-&amp;gt;{}: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String 'Interrupted waiting for access to consumer. Will try closing anyway.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String 'source consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String 'offset producer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String 'metrics' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN191026 the MagicNumber/String 'Stopping {} took {} ms.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');

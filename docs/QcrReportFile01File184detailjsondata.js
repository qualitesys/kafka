console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java 203 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Consumer<K,V>"
 , "c2" : "org.apache.kafka.clients.consumer.KafkaConsumer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.KafkaConsumer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(Properties;Deserializer<K>;Deserializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(Map<String,Object>;Deserializer<K>;Deserializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(ConsumerConfig;Deserializer<K>;Deserializer<V>)"
 , "c3" : "11"
 , "c4" : "53"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer"
 , "c2" : "KafkaConsumer(LogContext;String;ConsumerCoordinator;Deserializer<K>;Deserializer<V>;Fetcher<K,V>;ConsumerInterceptors<K,V>;Time;ConsumerNetworkClient;Metrics;SubscriptionState;ConsumerMetadata;long;long;int;List<ConsumerPartitionAssignor>;String)"
 , "c3" : "1"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "Metrics"
 , "c2" : "buildMetrics(ConsumerConfig;Time;String)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "assignment()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "subscription()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "subscribe(Collection<String>;ConsumerRebalanceListener)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "subscribe(Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "subscribe(Pattern;ConsumerRebalanceListener)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "subscribe(Pattern)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "unsubscribe()"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "assign(Collection<TopicPartition>)"
 , "c3" : "9"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecords<K,V>"
 , "c2" : "poll(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecords<K,V>"
 , "c2" : "poll(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecords<K,V>"
 , "c2" : "poll(Timer;boolean)"
 , "c3" : "10"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "updateAssignmentMetadataIfNeeded(Timer;boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Fetch<K,V>"
 , "c2" : "pollForFetches(Timer)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSync()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSync(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSync(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSync(Map<TopicPartition,OffsetAndMetadata>;Duration)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitAsync()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitAsync(OffsetCommitCallback)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitAsync(Map<TopicPartition,OffsetAndMetadata>;OffsetCommitCallback)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seek(TopicPartition;long)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seek(TopicPartition;OffsetAndMetadata)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seekToBeginning(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seekToEnd(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "position(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "position(TopicPartition;Duration)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "OffsetAndMetadata"
 , "c2" : "committed(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetAndMetadata"
 , "c2" : "committed(TopicPartition;Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "committed(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "committed(Set<TopicPartition>;Duration)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,?extendsMetric>"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<PartitionInfo>"
 , "c2" : "partitionsFor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<PartitionInfo>"
 , "c2" : "partitionsFor(String;Duration)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "listTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "listTopics(Duration)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pause(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resume(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "paused()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndTimestamp>"
 , "c2" : "offsetsForTimes(Map<TopicPartition,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndTimestamp>"
 , "c2" : "offsetsForTimes(Map<TopicPartition,Long>;Duration)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOffsets(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOffsets(Collection<TopicPartition>;Duration)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "endOffsets(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "endOffsets(Collection<TopicPartition>;Duration)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "currentLag(TopicPartition)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerGroupMetadata"
 , "c2" : "groupMetadata()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enforceRebalance(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enforceRebalance()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Duration)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ClusterResourceListeners"
 , "c2" : "configureClusterResourceListeners(Deserializer<K>;Deserializer<V>;List<?>...)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(long;boolean)"
 , "c3" : "4"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "updateFetchPositions(Timer)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "acquireAndEnsureOpen()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "acquire()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "release()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfNoAssignorsConfigured()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeThrowInvalidGroupIdException()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateLastSeenEpochIfNewer(TopicPartition;OffsetAndMetadata)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getClientId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "updateAssignmentMetadataIfNeeded(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.svg" }

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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "141"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "45"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00071] The class KafkaConsumer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN845970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN845970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN846441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN846441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  '[Consumer instanceId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  ', clientId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  ', groupId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  '] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  '[Consumer clientId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  ', groupId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  '] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'Support for using the empty group id by consumers is deprecated and will be removed in the next major release.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'Initializing the Kafka consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'Kafka consumer initialized' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN848418 the MagicNumber/String  'Failed to construct kafka consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#302"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00302] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN858273 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method buildMetrics arguments ConsumerConfig  config|Time  time|String  clientId"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#340"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00340] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#378"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00378] For method subscribe arguments Collection&lt;String &gt;  topics|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN864488 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN864488 the MagicNumber/String  'Topic collection to subscribe to cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN864488 the MagicNumber/String  'Topic collection to subscribe to cannot contain null or empty topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN864488 the MagicNumber/String  'Subscribed to topic(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN864488 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00406] For method subscribe arguments Collection&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#412"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00412] For method subscribe arguments Pattern  pattern|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  'Topic pattern to subscribe to cannot be ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  'empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN867626 the MagicNumber/String  'Subscribed to pattern: '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#432"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00432] For method subscribe arguments Pattern  pattern"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN869768 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN869768 the MagicNumber/String  'the consumer unsubscribed from all topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN869768 the MagicNumber/String  'Unsubscribed all topics or patterns and assigned partitions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#454"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00454] For method assign arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00463] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  'Topic partition collection to assign to cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  'Topic partitions to assign to cannot have null or empty topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  'Assigned to partition(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.consumer.KafkaConsumer.assign@POLYN871183 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#486"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00486] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN874277 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00492] For method poll arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876464 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#497"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00497] For method poll arguments Timer  timer|boolean  includeMetadataInTimeout"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#497"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00497] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00518] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  'Consumer is not subscribed to any topics or assigned any partitions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  'Still waiting for metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  'Returning empty records from `poll()` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN876753 the MagicNumber/String  'since the consumer's position has advanced for at least one topic partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#546"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00546] For method updateAssignmentMetadataIfNeeded arguments Timer  timer|boolean  waitForJoinGroup"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN878650 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN878650 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#555"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00555] For method pollForFetches arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#555"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00555] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN879107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN879107 the MagicNumber/String  'Polling for fetches with timeout {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#598"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00598] For method commitSync arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00604] For method commitSync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#610"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00610] For method commitSync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#610"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00610] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#610"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00610] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00617] In method org.apache.kafka.clients.consumer.KafkaConsumer.commitSync@POLYN889628 the MagicNumber/String  'Timeout of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00617] In method org.apache.kafka.clients.consumer.KafkaConsumer.commitSync@POLYN889628 the MagicNumber/String  'ms expired before successfully ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.clients.consumer.KafkaConsumer.commitSync@POLYN889628 the MagicNumber/String  'committing offsets ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.clients.consumer.KafkaConsumer.commitAsync@POLYN890814 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00634"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#634"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00634] For method commitAsync arguments OffsetCommitCallback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#640"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00640] For method commitAsync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|OffsetCommitCallback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#640"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00640] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.clients.consumer.KafkaConsumer.commitAsync@POLYN892797 the MagicNumber/String  'Committing offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#654"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00654] For method seek arguments TopicPartition  partition|long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN893760 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN893760 the MagicNumber/String  'seek offset must not be a negative number' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN893760 the MagicNumber/String  'Seeking to offset {} for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#673"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00673] For method seek arguments TopicPartition  partition|OffsetAndMetadata  offsetAndMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#673"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00673] The argument offsetAndMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN894945 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00676"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#676"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00676] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN894945 the MagicNumber/String  'seek offset must not be a negative number' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN894945 the MagicNumber/String  'Seeking to offset {} for partition {} with epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00685] In method org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN894945 the MagicNumber/String  'Seeking to offset {} for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00701"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#701"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00701] For method seekToBeginning arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToBeginning@POLYN896642 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToBeginning@POLYN896642 the MagicNumber/String  'Partitions collection cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00707] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToBeginning@POLYN896642 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00716"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#716"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00716] For method seekToEnd arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00717] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToEnd@POLYN897769 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToEnd@POLYN897769 the MagicNumber/String  'Partitions collection cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00722"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00722] In method org.apache.kafka.clients.consumer.KafkaConsumer.seekToEnd@POLYN897769 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#731"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00731] For method position arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#737"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00737] For method position arguments TopicPartition  partition|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#737"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00737] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00745] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  'You can only check the position for partitions assigned to this consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00746] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00753] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  'Timeout of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00753] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  'ms expired before the position ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  'for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.consumer.KafkaConsumer.position@POLYN901049 the MagicNumber/String  ' could be determined' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#763"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00763] For method committed arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#770"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00770] For method committed arguments TopicPartition  partition|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#776"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00776] For method committed arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#782"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00782] For method committed arguments Set&lt;TopicPartition &gt;  partitions|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#782"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00782] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00789] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  'Timeout of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  'ms expired before the last ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  'committed offset for partitions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  ' could be determined. Try tuning default.api.timeout.ms ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.clients.consumer.KafkaConsumer.committed@POLYN907425 the MagicNumber/String  'larger to relax the threshold.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#811"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00811] For method partitionsFor arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#817"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00817] For method partitionsFor arguments String  topic|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#842"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00842] For method listTopics arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#853"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00853] For method pause arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00856"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#856"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00856] In method org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN913727 the MagicNumber/String  'Pausing partitions {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00867"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#867"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00867] For method resume arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN914485 the MagicNumber/String  'Resuming partitions {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#892"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00892] For method offsetsForTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#898"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00898] For method offsetsForTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#898"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00898] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.clients.consumer.KafkaConsumer.offsetsForTimes@POLYN917588 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.consumer.KafkaConsumer.offsetsForTimes@POLYN917588 the MagicNumber/String  'The target time for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.consumer.KafkaConsumer.offsetsForTimes@POLYN917588 the MagicNumber/String  ' is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00906] In method org.apache.kafka.clients.consumer.KafkaConsumer.offsetsForTimes@POLYN917588 the MagicNumber/String  '. The target time cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#916"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00916] For method beginningOffsets arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#922"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00922] For method beginningOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00933"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#933"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00933] For method endOffsets arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00939"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#939"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00939] For method endOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#950"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00950] For method currentLag arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#960"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00960] In method org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN922884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00961"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00961] In method org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN922884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#963"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00963] In method org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN922884 the MagicNumber/String  'Requesting the log end offset for {} in order to compute lag' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00965] In method org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN922884 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#991"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00991] For method enforceRebalance arguments String  reason"
}} 
,
{ "ligne" : {
   "c1" : "00994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#994"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00994] In method org.apache.kafka.clients.consumer.KafkaConsumer.enforceRebalance@POLYN925422 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00995"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#995"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00995] In method org.apache.kafka.clients.consumer.KafkaConsumer.enforceRebalance@POLYN925422 the MagicNumber/String  'Tried to force a rebalance but consumer does not have a group.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.clients.consumer.KafkaConsumer.enforceRebalance@POLYN925422 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1006"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01006] In method org.apache.kafka.clients.consumer.KafkaConsumer.enforceRebalance@POLYN925994 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1017"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01017] For method close arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "01017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1017"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01017] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1018"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01018] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN927280 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN927280 the MagicNumber/String  'The timeout cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1025"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01025] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN927280 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN927280 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1039"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01039] For method configureClusterResourceListeners arguments Deserializer&lt;K &gt;  keyDeserializer|Deserializer&lt;V &gt;  valueDeserializer|List&lt;? &gt;  ...candidateLists"
}} 
,
{ "ligne" : {
   "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1049"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01049] For method close arguments long  timeoutMs|boolean  swallowException"
}} 
,
{ "ligne" : {
   "c1" : "01050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'Closing the Kafka consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1057"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01057] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'Failed to close coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01059] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'fetcher' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1060"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01060] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'consumer interceptors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01061] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'kafka consumer metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01062] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'consumer metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'consumer network client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01064] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'consumer key deserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'consumer value deserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01067] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'Kafka consumer has been closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1069"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01069] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01073] In method org.apache.kafka.clients.consumer.KafkaConsumer.close@POLYN928828 the MagicNumber/String  'Failed to close kafka consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1078"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01078] For method updateFetchPositions arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "01083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1083"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01083] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN931286 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN931286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN931286 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01101] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN931286 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN931948 the MagicNumber/String  'This consumer has already been closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01117] In method org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN932403 the MagicNumber/String  'KafkaConsumer is not safe for multi-threaded access' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01123] In method org.apache.kafka.clients.consumer.KafkaConsumer.release@POLYN932891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01129] In method org.apache.kafka.clients.consumer.KafkaConsumer.throwIfNoAssignorsConfigured@POLYN933081 the MagicNumber/String  'Must configure at least one partition assigner class name to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.clients.consumer.KafkaConsumer.throwIfNoAssignorsConfigured@POLYN933081 the MagicNumber/String  ' configuration property' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01135] In method org.apache.kafka.clients.consumer.KafkaConsumer.maybeThrowInvalidGroupIdException@POLYN933303 the MagicNumber/String  'To use the group management or offset commit APIs, you must ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.clients.consumer.KafkaConsumer.maybeThrowInvalidGroupIdException@POLYN933303 the MagicNumber/String  'provide a valid ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.clients.consumer.KafkaConsumer.maybeThrowInvalidGroupIdException@POLYN933303 the MagicNumber/String  ' in the consumer configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01139] For method updateLastSeenEpochIfNewer arguments TopicPartition  topicPartition|OffsetAndMetadata  offsetAndMetadata"
}} 
,
{ "ligne" : {
   "c1" : "01140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01140] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateLastSeenEpochIfNewer@POLYN933558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01149] For method updateAssignmentMetadataIfNeeded arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "01150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java.html#1150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01150] In method org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN933966 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

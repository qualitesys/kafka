console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java 185 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Producer<K,V>"
 , "c2" : "org.apache.kafka.clients.producer.KafkaProducer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.KafkaProducer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(Map<String,Object>;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(Properties;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "warnIfPartitionerDeprecated()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(ProducerConfig;Serializer<K>;Serializer<V>;ProducerMetadata;KafkaClient;ProducerInterceptors<K,V>;Time)"
 , "c3" : "11"
 , "c4" : "58"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer"
 , "c2" : "KafkaProducer(ProducerConfig;LogContext;Metrics;Serializer<K>;Serializer<V>;ProducerMetadata;RecordAccumulator;TransactionManager;Sender;ProducerInterceptors<K,V>;Partitioner;Time;KafkaThread)"
 , "c3" : "1"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "Sender"
 , "c2" : "newSender(LogContext;KafkaClient;ProducerMetadata)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "lingerMs(ProducerConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "configureDeliveryTimeout(ProducerConfig;Logger)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "TransactionManager"
 , "c2" : "configureTransactionState(ProducerConfig;LogContext)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initTransactions()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginTransaction()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendOffsetsToTransaction(Map<TopicPartition,OffsetAndMetadata>;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendOffsetsToTransaction(Map<TopicPartition,OffsetAndMetadata>;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitTransaction()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abortTransaction()"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Future<RecordMetadata>"
 , "c2" : "send(ProducerRecord<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Future<RecordMetadata>"
 , "c2" : "send(ProducerRecord<K,V>;Callback)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfProducerClosed()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onNewBatch(String;Cluster;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Future<RecordMetadata>"
 , "c2" : "doSend(ProducerRecord<K,V>;Callback)"
 , "c3" : "8"
 , "c4" : "50"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setReadOnly(Headers)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ClusterAndWaitTime"
 , "c2" : "waitOnMetadata(String;Integer;long;long)"
 , "c3" : "8"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureValidRecordSize(int)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "List<PartitionInfo>"
 , "c2" : "partitionsFor(String)"
 , "c3" : "1"
 , "c4" : "3"
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
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Duration;boolean)"
 , "c3" : "11"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "ClusterResourceListeners"
 , "c2" : "configureClusterResourceListeners(Serializer<K>;Serializer<V>;List<?>...)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partition(ProducerRecord<K,V>;byte[];byte[];Cluster)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfInvalidGroupMetadata(ConsumerGroupMetadata)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfNoTransactionManager()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.svg" }

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
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "143"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "23"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00077] The class KafkaProducer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN524537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN524537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN525356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN525356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN525356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN526117 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN526117 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.producer.KafkaProducer.warnIfPartitionerDeprecated@POLYN527196 the MagicNumber/String  'DefaultPartitioner is deprecated.  Please clear ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.producer.KafkaProducer.warnIfPartitionerDeprecated@POLYN527196 the MagicNumber/String  ' configuration setting to get the default partitioning behavior' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.producer.KafkaProducer.warnIfPartitionerDeprecated@POLYN527196 the MagicNumber/String  'UniformStickyPartitioner is deprecated.  Please clear ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.producer.KafkaProducer.warnIfPartitionerDeprecated@POLYN527196 the MagicNumber/String  ' configuration setting and set ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.producer.KafkaProducer.warnIfPartitionerDeprecated@POLYN527196 the MagicNumber/String  ' to 'true' to get the uniform sticky partitioning behavior' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  '[Producer clientId=%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  '[Producer clientId=%s, transactionalId=%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  'Starting the Kafka producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  'client-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  'errors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  ' | ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  'Kafka producer started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN527806 the MagicNumber/String  'Failed to construct kafka producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#280"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00280] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN536697 the MagicNumber/String  'errors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#316"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00316] For method newSender arguments LogContext  logContext|KafkaClient  kafkaClient|ProducerMetadata  metadata"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.clients.producer.KafkaProducer.newSender@POLYN539028 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.producer.KafkaProducer.newSender@POLYN539028 the MagicNumber/String  'producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.clients.producer.KafkaProducer.newSender@POLYN539028 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.clients.producer.KafkaProducer.newSender@POLYN539028 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method lingerMs arguments ProducerConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#358"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00358] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#362"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00362] For method configureDeliveryTimeout arguments ProducerConfig  config|Logger  log"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#362"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00362] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#362"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00362] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.clients.producer.KafkaProducer.configureDeliveryTimeout@POLYN541626 the MagicNumber/String  ' should be equal to or larger than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.producer.KafkaProducer.configureDeliveryTimeout@POLYN541626 the MagicNumber/String  ' + ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.producer.KafkaProducer.configureDeliveryTimeout@POLYN541626 the MagicNumber/String  '{} should be equal to or larger than {} + {}. Setting it to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method configureTransactionState arguments ProducerConfig  config|LogContext  logContext"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#385"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00385] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.clients.producer.KafkaProducer.configureTransactionState@POLYN542871 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.clients.producer.KafkaProducer.configureTransactionState@POLYN542871 the MagicNumber/String  'Instantiated a transactional producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.clients.producer.KafkaProducer.configureTransactionState@POLYN542871 the MagicNumber/String  'Instantiated an idempotent producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00434] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|String  consumerGroupId"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#440"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00440] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.clients.producer.KafkaProducer.abortTransaction@POLYN554329 the MagicNumber/String  'Aborting incomplete transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00480] For method send arguments ProducerRecord&lt;K ,V &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.clients.producer.KafkaProducer.send@POLYN555142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#486"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00486] For method send arguments ProducerRecord&lt;K ,V &gt;  record|Callback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfProducerClosed@POLYN560526 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfProducerClosed@POLYN560526 the MagicNumber/String  'Cannot perform operation after producer has been closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#501"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00501] For method onNewBatch arguments String  topic|Cluster  cluster|int  prevPartition"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.clients.producer.KafkaProducer.onNewBatch@POLYN560838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#507"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00507] For method doSend arguments ProducerRecord&lt;K ,V &gt;  record|Callback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#507"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00507] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Producer closed while send in progress' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Can't convert key of class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  ' to class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  ' specified in key.serializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Can't convert value of class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  ' to class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  ' specified in value.serializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Retrying append due to new batch creation for topic {} partition {}. The old partition was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00583] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Waking up the sender since topic {} partition {} is either full or getting a new batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  'Exception occurred during message send:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN561202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00623] For method setReadOnly arguments Headers  headers"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#630"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00630] For method waitOnMetadata arguments String  topic|Integer  partition|long  nowMs|long  maxWaitMs"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00662] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00642] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00642] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00643"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#643"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00643] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  'Requesting metadata update for partition {} of topic {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  'Requesting metadata update for topic {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  'Topic %s not present in metadata after %d ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  'Topic %s not present in metadata after %d ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  'Partition %d of topic %s with partition count %d is not present in metadata after %d ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN568943 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#688"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00688] For method ensureValidRecordSize arguments int  size"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  'The message is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  ' bytes when serialized which is larger than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  ', which is the value of the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#692"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00692] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  ' configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00694] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  'The message is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  ' bytes when serialized which is larger than the total memory buffer you have configured with the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.clients.producer.KafkaProducer.ensureValidRecordSize@POLYN572144 the MagicNumber/String  ' configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.clients.producer.KafkaProducer.flush@POLYN574176 the MagicNumber/String  'Flushing accumulated records in producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00711] In method org.apache.kafka.clients.producer.KafkaProducer.flush@POLYN574176 the MagicNumber/String  'Flush interrupted.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#719"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00719] For method partitionsFor arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.clients.producer.KafkaProducer.partitionsFor@POLYN575224 the MagicNumber/String  'topic cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00722"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00722] In method org.apache.kafka.clients.producer.KafkaProducer.partitionsFor@POLYN575224 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#742"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00742] For method close arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00743"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#743"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00743] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577472 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00746] For method close arguments Duration  timeout|boolean  swallowException"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#746"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00746] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00749"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#749"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00749] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'The timeout cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00750] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Closing the Kafka producer with timeoutMillis = {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00757"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#757"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00757] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Overriding close timeout {} ms to 0 ms in order to prevent useless blocking due to self-join. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00758"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#758"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00758] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'This means you have incorrectly invoked close with a non-zero timeout from the producer call-back.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00764"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00764] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00768] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00769"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00769] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Interrupted while joining ioThread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00775] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00775] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#776"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00776] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Proceeding to force close the producer since pending requests could not be completed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'within timeout {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#784"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00784] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00789] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer interceptors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer metrics wrapper' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer keySerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer valueSerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'producer partitioner' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#797"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00797] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00801] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Failed to close kafka producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00803"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#803"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00803] In method org.apache.kafka.clients.producer.KafkaProducer.close@POLYN577622 the MagicNumber/String  'Kafka producer has been closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00806"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#806"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00806] For method configureClusterResourceListeners arguments Serializer&lt;K &gt;  keySerializer|Serializer&lt;V &gt;  valueSerializer|List&lt;? &gt;  ...candidateLists"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#817"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00817] For method partition arguments ProducerRecord&lt;K ,V &gt;  record|byte[]  serializedKey|byte[]  serializedValue|Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#817"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00817] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#817"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00817] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.clients.producer.KafkaProducer.partition@POLYN581927 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#821"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00821] In method org.apache.kafka.clients.producer.KafkaProducer.partition@POLYN581927 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00824] In method org.apache.kafka.clients.producer.KafkaProducer.partition@POLYN581927 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00826] In method org.apache.kafka.clients.producer.KafkaProducer.partition@POLYN581927 the MagicNumber/String  'The partitioner generated an invalid partition number: %d. Partition number should always be non-negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00831] In method org.apache.kafka.clients.producer.KafkaProducer.partition@POLYN581927 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#839"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00839] For method throwIfInvalidGroupMetadata arguments ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00840"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#840"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00840] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfInvalidGroupMetadata@POLYN583211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00841"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00841] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfInvalidGroupMetadata@POLYN583211 the MagicNumber/String  'Consumer group metadata could not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfInvalidGroupMetadata@POLYN583211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00844] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfInvalidGroupMetadata@POLYN583211 the MagicNumber/String  'Passed in group metadata ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00844] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfInvalidGroupMetadata@POLYN583211 the MagicNumber/String  ' has generationId &amp;gt; 0 but member.id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00849] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfNoTransactionManager@POLYN583724 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfNoTransactionManager@POLYN583724 the MagicNumber/String  'Cannot use transactional methods without enabling transactions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#851"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00851] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfNoTransactionManager@POLYN583724 the MagicNumber/String  'by setting the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#851"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00851] In method org.apache.kafka.clients.producer.KafkaProducer.throwIfNoTransactionManager@POLYN583724 the MagicNumber/String  ' configuration property' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#859"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00859] The class ClusterAndWaitTime contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00868] The class FutureFailure contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#877"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00877] For method cancel arguments boolean  interrupt"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00878] In method org.apache.kafka.clients.producer.KafkaProducer.FutureFailure.cancel@POLYN584684 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#887"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00887] For method get arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.clients.producer.KafkaProducer.FutureFailure.isCancelled@POLYN585099 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#898"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00898] In method org.apache.kafka.clients.producer.KafkaProducer.FutureFailure.isDone@POLYN585201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00904] The class AppendCallbacks contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#917"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00917] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.onCompletion@POLYN586131 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00927] For method setPartition arguments int  partition"
}} 
,
{ "ligne" : {
   "c1" : "00933"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00933] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.setPartition@POLYN586849 the MagicNumber/String  'Attempting to append record {} with callback {} to topic {} partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#942"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00942] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.topicPartition@POLYN587386 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java.html#943"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00943] In method org.apache.kafka.clients.producer.KafkaProducer.AppendCallbacks.topicPartition@POLYN587386 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

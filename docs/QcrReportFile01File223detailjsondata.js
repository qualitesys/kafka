console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java 114 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Producer<K,V>"
 , "c2" : "org.apache.kafka.clients.producer.MockProducer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.MockProducer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MockProducer"
 , "c2" : "MockProducer(Cluster;boolean;Partitioner;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "MockProducer"
 , "c2" : "MockProducer(boolean;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MockProducer"
 , "c2" : "MockProducer(Cluster;boolean;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MockProducer"
 , "c2" : "MockProducer(boolean;Partitioner;Serializer<K>;Serializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MockProducer"
 , "c2" : "MockProducer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initTransactions()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginTransaction()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendOffsetsToTransaction(Map<TopicPartition,OffsetAndMetadata>;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendOffsetsToTransaction(Map<TopicPartition,OffsetAndMetadata>;ConsumerGroupMetadata)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitTransaction()"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abortTransaction()"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyProducerState()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyTransactionsInitialized()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyTransactionInFlight()"
 , "c3" : "2"
 , "c4" : "1"
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
 , "c3" : "10"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "nextOffset(TopicPartition)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<PartitionInfo>"
 , "c2" : "partitionsFor(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,Metric>"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setMockMetrics(MetricName;Metric)"
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
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "closed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "fenceProducer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "transactionInitialized()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "transactionInFlight()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "transactionCommitted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "transactionAborted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "flushed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "sentOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "commitCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<ProducerRecord<K,V>>"
 , "c2" : "history()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<ProducerRecord<K,V>>"
 , "c2" : "uncommittedRecords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,Map<TopicPartition,OffsetAndMetadata>>>"
 , "c2" : "consumerGroupOffsetsHistory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "uncommittedOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "completeNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "errorNext(RuntimeException)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partition(ProducerRecord<K,V>;Cluster)"
 , "c3" : "3"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "75"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class MockProducer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00053] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00054] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00055] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00056] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00057] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00058] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00059] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00060] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00061] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.MockProducer.MockProducer@POLYN229106 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.MockProducer.MockProducer@POLYN229106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.MockProducer.MockProducer@POLYN229106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.MockProducer.MockProducer@POLYN229106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  'MockProducer has already been initialized for transactions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.producer.MockProducer.initTransactions@POLYN229334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  'Transaction already started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.producer.MockProducer.beginTransaction@POLYN230027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|String  consumerGroupId"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#158"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00158] The argument groupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.clients.producer.MockProducer.sendOffsetsToTransaction@POLYN231059 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.producer.MockProducer.sendOffsetsToTransaction@POLYN231059 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.clients.producer.MockProducer.sendOffsetsToTransaction@POLYN231059 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.producer.MockProducer.commitTransaction@POLYN232027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.clients.producer.MockProducer.commitTransaction@POLYN232027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.producer.MockProducer.commitTransaction@POLYN232027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.producer.MockProducer.commitTransaction@POLYN232027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.producer.MockProducer.abortTransaction@POLYN233058 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.clients.producer.MockProducer.abortTransaction@POLYN233058 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.clients.producer.MockProducer.abortTransaction@POLYN233058 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.clients.producer.MockProducer.abortTransaction@POLYN233058 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#220"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00220] Lock statement on synchronized method verifyProducerState"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.clients.producer.MockProducer.verifyProducerState@POLYN233743 the MagicNumber/String  'MockProducer is already closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.clients.producer.MockProducer.verifyProducerState@POLYN233743 the MagicNumber/String  'MockProducer is fenced.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.clients.producer.MockProducer.verifyTransactionsInitialized@POLYN234054 the MagicNumber/String  'MockProducer hasn't been initialized for transactions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.clients.producer.MockProducer.verifyTransactionInFlight@POLYN234239 the MagicNumber/String  'There is no open transaction.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#243"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00243] Lock statement on synchronized method send"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#243"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00243] For method send arguments ProducerRecord&lt;K ,V &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#249"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00249] Lock statement on synchronized method send"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method send arguments ProducerRecord&lt;K ,V &gt;  record|Callback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  'MockProducer is already closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  'MockProducer is fenced.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  'Fenced' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.clients.producer.MockProducer.send@POLYN234902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00294] For method nextOffset arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.clients.producer.MockProducer.nextOffset@POLYN237747 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.clients.producer.MockProducer.nextOffset@POLYN237747 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.clients.producer.MockProducer.nextOffset@POLYN237747 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.clients.producer.MockProducer.nextOffset@POLYN237747 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#306"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00306] Lock statement on synchronized method flush"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.clients.producer.MockProducer.flush@POLYN238373 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#317"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00317] For method partitionsFor arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.clients.producer.MockProducer.partitionsFor@POLYN238733 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#330"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00330] For method setMockMetrics arguments MetricName  name|Metric  metric"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.clients.producer.MockProducer.close@POLYN239370 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method close arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.clients.producer.MockProducer.close@POLYN239529 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.clients.producer.MockProducer.close@POLYN239529 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#352"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00352] Lock statement on synchronized method fenceProducer"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.clients.producer.MockProducer.fenceProducer@POLYN239888 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#387"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00387] Lock statement on synchronized method history"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#391"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00391] Lock statement on synchronized method uncommittedRecords"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#396"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00396] Lock statement on synchronized method consumerGroupOffsetsHistory"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#400"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00400] Lock statement on synchronized method uncommittedOffsets"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#405"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00405] Lock statement on synchronized method clear"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.clients.producer.MockProducer.clear@POLYN241826 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#415"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00415] Lock statement on synchronized method completeNext"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.producer.MockProducer.completeNext@POLYN242342 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#420"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00420] Lock statement on synchronized method errorNext"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00420] For method errorNext arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.clients.producer.MockProducer.errorNext@POLYN242561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.clients.producer.MockProducer.errorNext@POLYN242561 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.clients.producer.MockProducer.errorNext@POLYN242561 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00431] For method partition arguments ProducerRecord&lt;K ,V &gt;  record|Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00431] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00431] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.clients.producer.MockProducer.partition@POLYN242995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.clients.producer.MockProducer.partition@POLYN242995 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.producer.MockProducer.partition@POLYN242995 the MagicNumber/String  'Invalid partition given with record: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.clients.producer.MockProducer.partition@POLYN242995 the MagicNumber/String  ' is not in the range [0...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.producer.MockProducer.partition@POLYN242995 the MagicNumber/String  '].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00450] The class Completion contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00469] For method complete arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/MockProducer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.clients.producer.MockProducer.Completion.complete@POLYN245182 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

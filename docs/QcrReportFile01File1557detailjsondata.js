console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java 20 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Closeable"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#54"
 , "c1" : "ConsumerManager"
 , "c2" : "ConsumerManager(TopicBasedRemoteLogMetadataManagerConfig;RemotePartitionMetadataEventHandler;RemoteLogMetadataTopicPartitioner;Time)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#68"
 , "c1" : "void"
 , "c2" : "startConsumerThread()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#85"
 , "c1" : "void"
 , "c2" : "waitTillConsumptionCatchesUp(RecordMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#96"
 , "c1" : "void"
 , "c2" : "waitTillConsumptionCatchesUp(RecordMetadata;long)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#128"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#140"
 , "c1" : "void"
 , "c2" : "addAssignmentsForPartitions(Set&lt;TopicIdPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#144"
 , "c1" : "void"
 , "c2" : "removeAssignmentsForPartitions(Set&lt;TopicIdPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00148"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#148"
 , "c1" : "Optional&lt;Long&gt;"
 , "c2" : "receivedOffsetForPartition(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument rlmmConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.ConsumerManager@POLYN163648 the MagicNumber/String  60_000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.ConsumerManager@POLYN163648 the MagicNumber/String  'RLMMConsumerTask' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.startConsumerThread@POLYN164562 the MagicNumber/String  'RLMM Consumer task thread is started' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.startConsumerThread@POLYN164562 the MagicNumber/String  'Error encountered while initializing and scheduling ConsumerTask thread' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method waitTillConsumptionCatchesUp arguments RecordMetadata  recordMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method waitTillConsumptionCatchesUp arguments RecordMetadata  recordMetadata|long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument recordMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  'This consumer is not subscribed to the target partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  ' on which message is produced.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  'Committed offset [{}] for partition [{}], but the target offset: [{}],  Sleeping for [{}] to retry again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  'Committed offset for partition:[{}] is : [{}], but the target offset: [{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN165498 the MagicNumber/String  'Timed out in catching up with the expected offset by consumer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.close@POLYN167033 the MagicNumber/String  'ConsumerTask' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.close@POLYN167033 the MagicNumber/String  'Encountered error while waiting for consumerTaskThread to finish.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method addAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method removeAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method receivedOffsetForPartition arguments int  metadataPartition"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java 21 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class ConsumerManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument rlmmConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.ConsumerManager@POLYN174390 the MagicNumber/String  60_000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.ConsumerManager@POLYN174390 the MagicNumber/String  'RLMMConsumerTask' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.startConsumerThread@POLYN175304 the MagicNumber/String  'RLMM Consumer task thread is started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.startConsumerThread@POLYN175304 the MagicNumber/String  'Error encountered while initializing and scheduling ConsumerTask thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method waitTillConsumptionCatchesUp arguments RecordMetadata  recordMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method waitTillConsumptionCatchesUp arguments RecordMetadata  recordMetadata|long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument recordMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  'This consumer is not subscribed to the target partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  ' on which message is produced.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  'Committed offset [{}] for partition [{}], but the target offset: [{}],  Sleeping for [{}] to retry again' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  'Committed offset for partition:[{}] is : [{}], but the target offset: [{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.waitTillConsumptionCatchesUp@POLYN176240 the MagicNumber/String  'Timed out in catching up with the expected offset by consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.close@POLYN177775 the MagicNumber/String  'ConsumerTask' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerManager.close@POLYN177775 the MagicNumber/String  'Encountered error while waiting for consumerTaskThread to finish.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method addAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method removeAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerManager.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method receivedOffsetForPartition arguments int  metadataPartition"
}} 
]
};
console.log('leListeStr 99 main end');

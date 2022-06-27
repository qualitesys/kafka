console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html" 
 , "texte" : "File core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java 28 rule violations " 
 , "fic2"  : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "kafka.server.builders.ReplicaManagerBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.server.builders.ReplicaManagerBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setConfig(KafkaConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setMetrics(Metrics)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setTime(Time)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setScheduler(Scheduler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setLogManager(LogManager)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setQuotaManagers(QuotaManagers)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setMetadataCache(MetadataCache)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setLogDirFailureChannel(LogDirFailureChannel)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setAlterPartitionManager(AlterPartitionManager)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setBrokerTopicStats(BrokerTopicStats)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setIsShuttingDown(AtomicBoolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setZkClient(KafkaZkClient)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setDelayedProducePurgatory(DelayedOperationPurgatory<DelayedProduce>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setDelayedFetchPurgatory(DelayedOperationPurgatory<DelayedFetch>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setDelayedDeleteRecordsPurgatory(DelayedOperationPurgatory<DelayedDeleteRecords>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setDelayedElectLeaderPurgatoryParam(DelayedOperationPurgatory<DelayedElectLeader>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManagerBuilder"
 , "c2" : "setThreadNamePrefix(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicaManager"
 , "c2" : "build()"
 , "c3" : "7"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.png" 

 , "ligneplantuml" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "17"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00029] The class ReplicaManagerBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method setConfig arguments KafkaConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method setMetrics arguments Metrics  metrics"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method setTime arguments Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method setScheduler arguments Scheduler  scheduler"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method setLogManager arguments LogManager  logManager"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method setQuotaManagers arguments QuotaManagers  quotaManagers"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method setMetadataCache arguments MetadataCache  metadataCache"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method setLogDirFailureChannel arguments LogDirFailureChannel  logDirFailureChannel"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method setAlterPartitionManager arguments AlterPartitionManager  alterPartitionManager"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method setBrokerTopicStats arguments BrokerTopicStats  brokerTopicStats"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method setIsShuttingDown arguments AtomicBoolean  isShuttingDown"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method setZkClient arguments KafkaZkClient  zkClient"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method setDelayedProducePurgatory arguments DelayedOperationPurgatory&lt;DelayedProduce &gt;  delayedProducePurgatory"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method setDelayedFetchPurgatory arguments DelayedOperationPurgatory&lt;DelayedFetch &gt;  delayedFetchPurgatory"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method setDelayedDeleteRecordsPurgatory arguments DelayedOperationPurgatory&lt;DelayedDeleteRecords &gt;  delayedDeleteRecordsPurgatory"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method setDelayedElectLeaderPurgatoryParam arguments DelayedOperationPurgatory&lt;DelayedElectLeader &gt;  delayedElectLeaderPurgatory"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method setThreadNamePrefix arguments String  threadNamePrefix"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  'You must set logManager' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  'You must set metadataCache' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  'You must set logDirFailureChannel' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/ReplicaManagerBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.server.builders.ReplicaManagerBuilder.build@POLYN184094 the MagicNumber/String  'You must set alterIsrManager' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

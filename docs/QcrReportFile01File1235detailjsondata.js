console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html" 
 , "texte" : "File core/src/main/java/kafka/server/builders/LogManagerBuilder.java 33 rule violations " 
 , "fic2"  : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "kafka.server.builders.LogManagerBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.server.builders.LogManagerBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setLogDirs(List<File>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setInitialOfflineDirs(List<File>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setConfigRepository(ConfigRepository)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setInitialDefaultConfig(LogConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setCleanerConfig(CleanerConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setRecoveryThreadsPerDataDir(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setFlushCheckMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setFlushRecoveryOffsetCheckpointMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setFlushStartOffsetCheckpointMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setRetentionCheckMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setMaxTransactionTimeoutMs(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setMaxPidExpirationMs(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setInterBrokerProtocolVersion(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setScheduler(Scheduler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setBrokerTopicStats(BrokerTopicStats)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setLogDirFailureChannel(LogDirFailureChannel)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setTime(Time)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManagerBuilder"
 , "c2" : "setKeepPartitionMetadataFile(boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LogManager"
 , "c2" : "build()"
 , "c3" : "8"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.png" 

 , "ligneplantuml" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.svg" }

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
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "18"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class LogManagerBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method setLogDirs arguments List&lt;File &gt;  logDirs"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method setInitialOfflineDirs arguments List&lt;File &gt;  initialOfflineDirs"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method setConfigRepository arguments ConfigRepository  configRepository"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method setInitialDefaultConfig arguments LogConfig  initialDefaultConfig"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method setCleanerConfig arguments CleanerConfig  cleanerConfig"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method setRecoveryThreadsPerDataDir arguments int  recoveryThreadsPerDataDir"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method setFlushCheckMs arguments long  flushCheckMs"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method setFlushRecoveryOffsetCheckpointMs arguments long  flushRecoveryOffsetCheckpointMs"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method setFlushStartOffsetCheckpointMs arguments long  flushStartOffsetCheckpointMs"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method setRetentionCheckMs arguments long  retentionCheckMs"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method setMaxTransactionTimeoutMs arguments int  maxTransactionTimeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method setMaxPidExpirationMs arguments int  maxPidExpirationMs"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method setInterBrokerProtocolVersion arguments MetadataVersion  interBrokerProtocolVersion"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method setScheduler arguments Scheduler  scheduler"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method setBrokerTopicStats arguments BrokerTopicStats  brokerTopicStats"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method setLogDirFailureChannel arguments LogDirFailureChannel  logDirFailureChannel"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method setTime arguments Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method setKeepPartitionMetadataFile arguments boolean  keepPartitionMetadataFile"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set logDirs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set configRepository' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set initialDefaultConfig' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set cleanerConfig' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set scheduler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set brokerTopicStats' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/core/src/main/java/kafka/server/builders/LogManagerBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.server.builders.LogManagerBuilder.build@POLYN162947 the MagicNumber/String  'you must set logDirFailureChannel' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

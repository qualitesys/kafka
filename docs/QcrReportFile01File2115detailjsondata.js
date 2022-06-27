console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java 135 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Closeable"
 , "c2" : "org.apache.kafka.tools.VerifiableConsumer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.VerifiableConsumer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "VerifiableConsumer"
 , "c2" : "VerifiableConsumer(KafkaConsumer<String,String>;PrintStream;String;int;boolean;boolean;boolean)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addKafkaSerializerModule()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasMessageLimit()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFinished()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "onRecordsReceived(ConsumerRecords<String,String>)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onComplete(Map<TopicPartition,OffsetAndMetadata>;Exception)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printJson(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSync(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ArgumentParser"
 , "c2" : "argParser()"
 , "c3" : "1"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "VerifiableConsumer"
 , "c2" : "createFromArgs(ArgumentParser;String[])"
 , "c3" : "7"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "2"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "113"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00052] The class VerifiableConsumer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.tools.VerifiableConsumer.addKafkaSerializerModule@POLYN253433 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.tools.VerifiableConsumer.addKafkaSerializerModule@POLYN253433 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.tools.VerifiableConsumer.hasMessageLimit@POLYN254251 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method onRecordsReceived arguments ConsumerRecords&lt;String ,String &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.tools.VerifiableConsumer.onRecordsReceived@POLYN254540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.tools.VerifiableConsumer.onRecordsReceived@POLYN254540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.tools.VerifiableConsumer.onRecordsReceived@POLYN254540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.tools.VerifiableConsumer.onRecordsReceived@POLYN254540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method onComplete arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.tools.VerifiableConsumer.onComplete@POLYN256735 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.tools.VerifiableConsumer.onComplete@POLYN256735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.tools.VerifiableConsumer.onComplete@POLYN256735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.tools.VerifiableConsumer.onComplete@POLYN256735 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method printJson arguments Object  data"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.tools.VerifiableConsumer.printJson@POLYN258278 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method commitSync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.tools.VerifiableConsumer.commitSync@POLYN258634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00199] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.tools.VerifiableConsumer.run@POLYN259260 the MagicNumber/String  'Caught WakeupException because consumer is shutdown, ignore and terminate.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.tools.VerifiableConsumer.run@POLYN259260 the MagicNumber/String  'Error during processing, terminating consumer process: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00229] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.tools.VerifiableConsumer.close@POLYN260637 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.tools.VerifiableConsumer.close@POLYN260637 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.tools.VerifiableConsumer.close@POLYN260637 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00240] The class ConsumerEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.tools.VerifiableConsumer.StartupComplete.name@POLYN261628 the MagicNumber/String  'startup_complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.tools.VerifiableConsumer.ShutdownComplete.name@POLYN261782 the MagicNumber/String  'shutdown_complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.tools.VerifiableConsumer.PartitionsRevoked.name@POLYN262268 the MagicNumber/String  'partitions_revoked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.tools.VerifiableConsumer.PartitionsAssigned.name@POLYN262754 the MagicNumber/String  'partitions_assigned' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.tools.VerifiableConsumer.RecordsConsumed.name@POLYN263253 the MagicNumber/String  'records_consumed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.tools.VerifiableConsumer.RecordData.name@POLYN264096 the MagicNumber/String  'record_data' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00370] The class PartitionData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.tools.VerifiableConsumer.OffsetsCommitted.name@POLYN265872 the MagicNumber/String  'offsets_committed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'verifiable-consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'This tool consumes messages from a specific topic and emits consumer events (e.g. group rebalances, received messages, and offsets committed) as JSON objects to STDOUT.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Connection Group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Group of arguments for connection to brokers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--bootstrap-server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'HOST1:PORT1[,HOST2:PORT2[...]]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'REQUIRED unless --broker-list(deprecated) is specified. The server(s) to connect to. Comma-separated list of Kafka brokers in the form HOST1:PORT1,HOST2:PORT2,...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--broker-list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'HOST1:PORT1[,HOST2:PORT2[...]]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'DEPRECATED, use --bootstrap-server instead; ignored if --bootstrap-server is specified.  Comma-separated list of Kafka brokers in the form HOST1:PORT1,HOST2:PORT2,...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'TOPIC' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Consumes messages from this topic.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--group-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'GROUP_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'groupId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'The groupId shared among members of the consumer group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--group-instance-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'GROUP_INSTANCE_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'groupInstanceId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'A unique identifier of the consumer instance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--max-messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'MAX-MESSAGES' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Consume this many messages. If -1 (the default), the consumer will consume until the process is killed externally' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00523"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--session-timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  30000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'TIMEOUT_MS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'sessionTimeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Set the consumer's session timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--verbose' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'VERBOSE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Enable to log individual consumed records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--enable-autocommit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'ENABLE-AUTOCOMMIT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'useAutoCommit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Enable offset auto-commit on consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--reset-policy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00550] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'resetPolicy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00551] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Set reset policy (must be either 'earliest', 'latest', or 'none'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--assignment-strategy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00555] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'assignmentStrategy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Set assignment strategy (e.g. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  '--consumer.config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'CONFIG_FILE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.tools.VerifiableConsumer.argParser@POLYN267724 the MagicNumber/String  'Consumer config properties file (config options shared with command line parameters will be overridden).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#571"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00571] For method createFromArgs arguments ArgumentParser  parser|String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#571"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00571] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'useAutoCommit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'consumer.config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00587"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'groupId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00589] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'groupInstanceId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00590"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00590] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00602"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#602"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00602] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'resetPolicy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00608] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'sessionTimeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00609"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00609] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'assignmentStrategy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00616"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#616"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00616] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  'verbose' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00624] In method org.apache.kafka.tools.VerifiableConsumer.createFromArgs@POLYN272205 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00628] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#628"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00628] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00640] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.tools.VerifiableConsumer.main@POLYN275510 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.tools.VerifiableConsumer.main@POLYN275510 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.tools.VerifiableConsumer.main@POLYN275510 the MagicNumber/String  'verifiable-consumer-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableConsumer.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.tools.VerifiableConsumer.main@POLYN275510 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

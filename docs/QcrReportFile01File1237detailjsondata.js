console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html" 
 , "texte" : "File core/src/main/scala/kafka/tools/StreamsResetter.java 187 rule violations " 
 , "fic2"  : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "kafka.tools.StreamsResetter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.tools.StreamsResetter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "int"
 , "c2" : "run(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "run(String[];Properties)"
 , "c3" : "4"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeDeleteActiveConsumers(String;Admin)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "parseArguments(String[])"
 , "c3" : "3"
 , "c4" : "37"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maybeResetInputAndSeekToEndIntermediateTopicOffsets(Map<Object,Object>;boolean)"
 , "c3" : "22"
 , "c4" : "42"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeSeekToEnd(String;Consumer<byte[],byte[]>;Set<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeReset(String;Consumer<byte[],byte[]>;Set<TopicPartition>)"
 , "c3" : "17"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetOffsetsFromResetPlan(Consumer<byte[],byte[]>;Set<TopicPartition>;Map<TopicPartition,Long>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "getTopicPartitionOffsetFromResetPlan(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetByDuration(Consumer<byte[],byte[]>;Set<TopicPartition>;Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetToDatetime(Consumer<byte[],byte[]>;Set<TopicPartition>;Long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "shiftOffsetsBy(Consumer<byte[],byte[]>;Set<TopicPartition>;long)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetOffsetsTo(Consumer<byte[],byte[]>;Set<TopicPartition>;Long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "parseResetPlan(String)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "checkOffsetRange(Map<TopicPartition,Long>;Map<TopicPartition,Long>;Map<TopicPartition,Long>)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isInputTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isIntermediateTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maybeDeleteInternalTopics(Admin;boolean)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "doDelete(List<String>;Admin)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isInferredInternalTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "matchesInternalTopicFormat(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.png" 

 , "ligneplantuml" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "19"
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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "130"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "22"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00050] The class StreamsResetter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method run arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method run arguments String[]  args|Properties  config"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  '----Dry run displays the actions which will be performed when running Streams Reset Tool----' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  'ERROR: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method kafka.tools.StreamsResetter.run@POLYN281829 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method maybeDeleteActiveConsumers arguments String  groupId|Admin  adminClient"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#148"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00148] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  'Force deleting all active members in the group: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  'Consumer group '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  '' is still active ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  'and has following members: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  '. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  'Make sure to stop all running application instances before running the reset tool.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method kafka.tools.StreamsResetter.maybeDeleteActiveConsumers@POLYN284255 the MagicNumber/String  ' You can use option '--force' to remove active members from the group.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method parseArguments arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'application-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'The Kafka Streams application ID (application.id).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'bootstrap-servers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Comma-separated list of broker urls with format: HOST1:PORT1,HOST2:PORT2' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'localhost:9092' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'urls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'input-topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Comma-separated list of user input topics. For these topics, the tool by default will reset the offset to the earliest available offset. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset to other offset position by appending other reset offset option, ex: --input-topics foo --shift-by 5' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'intermediate-topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Comma-separated list of intermediate user topics (topics that are input and output topics, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'e.g., used in the deprecated through() method). For these topics, the tool will skip to the end.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'internal-topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Comma-separated list of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'internal topics to delete. Must be a subset of the internal topics marked for deletion by the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'default behaviour (do a dry-run without this option to view these topics).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'to-offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to a specific offset.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'to-datetime' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to offset from datetime. Format: 'YYYY-MM-DDTHH:mm:SS.sss'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'by-duration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to offset by duration from current timestamp. Format: 'PnDTnHnMnS'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'to-earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to earliest offset.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'to-latest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to latest offset.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'from-file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets to values defined in CSV file.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'shift-by' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Reset offsets shifting current offset by 'n', where 'n' can be positive or negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'number-of-offsets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'config-file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Property file containing configs to be passed to admin clients and embedded consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'file name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'force' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Force the removal of members of the consumer group (intended to remove stopped members if a long session timeout was used). ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Make sure to shut down all stream applications when this option is specified to avoid unexpected rebalances.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'dry-run' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Display the actions that would be performed without executing the reset commands.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'help' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Print usage information.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  'Print version information and exit.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method kafka.tools.StreamsResetter.parseArguments@POLYN285526 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#272"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00272] For method maybeResetInputAndSeekToEndIntermediateTopicOffsets arguments Map&lt;Object ,Object &gt;  consumerConfig|boolean  dryRun"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00354] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'No input or intermediate topics specified. Skipping seek.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Reset-offsets for input topics ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Seek-to-end for intermediate topics ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Following input topics are not found, skipping them' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Following intermediate topics are not found, skipping them' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Topic:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Skipping invalid partition: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'ERROR: Resetting offsets failed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method kafka.tools.StreamsResetter.maybeResetInputAndSeekToEndIntermediateTopicOffsets@POLYN291941 the MagicNumber/String  'Done.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#383"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00383] For method maybeSeekToEnd arguments String  groupId|Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  intermediateTopicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#384"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#385"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00385] The argument intermediateTopicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method kafka.tools.StreamsResetter.maybeSeekToEnd@POLYN297850 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method kafka.tools.StreamsResetter.maybeSeekToEnd@POLYN297850 the MagicNumber/String  'Following intermediate topics offsets will be reset to end (for consumer group ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method kafka.tools.StreamsResetter.maybeSeekToEnd@POLYN297850 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method kafka.tools.StreamsResetter.maybeSeekToEnd@POLYN297850 the MagicNumber/String  'Topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method maybeReset arguments String  groupId|Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#398"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00398] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#399"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00399] The argument inputTopicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  'Following input topics offsets will be reset to (for consumer group ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  'Topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  ' Partition: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method kafka.tools.StreamsResetter.maybeReset@POLYN298650 the MagicNumber/String  ' Offset: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00435] For method resetOffsetsFromResetPlan arguments Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions|Map&lt;TopicPartition ,Long &gt;  topicPartitionsAndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#435"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00435] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00449] For method getTopicPartitionOffsetFromResetPlan arguments String  resetPlanPath"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method resetByDuration arguments Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions|Duration  duration"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#463"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00463] For method resetToDatetime arguments Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions|Long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#463"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00463] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#464"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00464] The argument inputTopicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00474] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method kafka.tools.StreamsResetter.resetToDatetime@POLYN303031 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method kafka.tools.StreamsResetter.resetToDatetime@POLYN303031 the MagicNumber/String  ' from topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method kafka.tools.StreamsResetter.resetToDatetime@POLYN303031 the MagicNumber/String  ' is empty, without a committed record. Falling back to latest known offset.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#488"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00488] For method shiftOffsetsBy arguments Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions|long  shiftBy"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#488"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00488] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#489"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00489] The argument inputTopicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#510"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00510] For method resetOffsetsTo arguments Consumer&lt;byte[] ,byte[] &gt;  client|Set&lt;TopicPartition &gt;  inputTopicPartitions|Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#510"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00510] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#511"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00511] The argument inputTopicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#530"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00530] For method parseResetPlan arguments String  resetPlanCsv"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00539] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00543] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00546] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  'Error parsing reset plan CSV file. It is empty,' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  'Reset plan CSV file is not following the format `TOPIC,PARTITION,OFFSET`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method kafka.tools.StreamsResetter.parseResetPlan@POLYN307207 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#553"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00553] For method checkOffsetRange arguments Map&lt;TopicPartition ,Long &gt;  inputTopicPartitionsAndOffset|Map&lt;TopicPartition ,Long &gt;  beginningOffsets|Map&lt;TopicPartition ,Long &gt;  endOffsets"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#553"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00553] The argument inputTopicPartitionsAndOffset is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#554"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00554] The argument beginningOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#555"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00555] The argument endOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method kafka.tools.StreamsResetter.checkOffsetRange@POLYN308747 the MagicNumber/String  'New offset (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method kafka.tools.StreamsResetter.checkOffsetRange@POLYN308747 the MagicNumber/String  ') is lower than earliest offset. Value will be set to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method kafka.tools.StreamsResetter.checkOffsetRange@POLYN308747 the MagicNumber/String  'New offset (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method kafka.tools.StreamsResetter.checkOffsetRange@POLYN308747 the MagicNumber/String  ') is higher than latest offset. Value will be set to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#576"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00576] For method isInputTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#580"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00580] For method isIntermediateTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#584"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00584] For method maybeDeleteInternalTopics arguments Admin  adminClient|boolean  dryRun"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#593"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00593] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Invalid topic specified in the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#594"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00594] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  '--internal-topics option. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Ensure that the topics specified are all internal topics. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Do a dry run without the --internal-topics option to see the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'list of all internal topics that can be deleted.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Deleting specified internal topics ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Deleting inferred internal topics ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00611"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00611] In method kafka.tools.StreamsResetter.maybeDeleteInternalTopics@POLYN310815 the MagicNumber/String  'Done.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00616"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#616"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00616] For method doDelete arguments List&lt;String &gt;  topicsToDelete|Admin  adminClient"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#617"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00617] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00625] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method kafka.tools.StreamsResetter.doDelete@POLYN312238 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00624] In method kafka.tools.StreamsResetter.doDelete@POLYN312238 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00626] In method kafka.tools.StreamsResetter.doDelete@POLYN312238 the MagicNumber/String  'ERROR: deleting topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method kafka.tools.StreamsResetter.doDelete@POLYN312238 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00632] In method kafka.tools.StreamsResetter.doDelete@POLYN312238 the MagicNumber/String  'Encountered an error deleting one or more topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00636] For method isInferredInternalTopic arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#636"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00636] The argument topicName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method kafka.tools.StreamsResetter.isInferredInternalTopic@POLYN313398 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method matchesInternalTopicFormat arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#646"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00646] The argument topicName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '-changelog' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '-repartition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '-subscription-registration-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00649"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#649"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00649] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '-subscription-response-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '.+-KTABLE-FK-JOIN-SUBSCRIPTION-REGISTRATION-\\d+-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method kafka.tools.StreamsResetter.matchesInternalTopicFormat@POLYN313793 the MagicNumber/String  '.+-KTABLE-FK-JOIN-SUBSCRIPTION-RESPONSE-\\d+-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#654"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00654] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00099] Public method run is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#646"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00646] Public method matchesInternalTopicFormat is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00383] Public method maybeSeekToEnd is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00435] Public method resetOffsetsFromResetPlan is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#463"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00463] Public method resetToDatetime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00488] Public method shiftOffsetsBy is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#510"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00510] Public method resetOffsetsTo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00616"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00616] Public method doDelete is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/core/src/main/scala/kafka/tools/StreamsResetter.java.html#654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00654] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

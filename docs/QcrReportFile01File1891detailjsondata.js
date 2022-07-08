console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java 124 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AssignmentInfo"
 , "c2" : "AssignmentInfo(int;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AssignmentInfo"
 , "c2" : "AssignmentInfo(int;List<TaskId>;Map<TaskId,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AssignmentInfo"
 , "c2" : "AssignmentInfo(int;int;List<TaskId>;Map<TaskId,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>;int)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNextRebalanceTime(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "errCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "commonlySupportedVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TaskId>"
 , "c2" : "activeTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Set<TopicPartition>>"
 , "c2" : "standbyTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<HostInfo,Set<TopicPartition>>"
 , "c2" : "partitionsByHost()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<HostInfo,Set<TopicPartition>>"
 , "c2" : "standbyPartitionByHost()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "nextRebalanceMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "encode()"
 , "c3" : "12"
 , "c4" : "43"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "encodeActiveAndStandbyTaskAssignment(DataOutputStream)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "encodePartitionsByHost(DataOutputStream)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "encodeHostPartitionMapUsingDictionary(DataOutputStream;Map<String,Integer>;Map<HostInfo,Set<TopicPartition>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Integer>"
 , "c2" : "encodeTopicDictionaryAndGet(DataOutputStream;Set<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "encodePartitionsByHostAsDictionary(DataOutputStream)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "encodeActiveAndStandbyHostPartitions(DataOutputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeHostInfo(DataOutputStream;HostInfo)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeTopicPartitions(DataOutputStream;Set<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "AssignmentInfo"
 , "c2" : "decode(ByteBuffer)"
 , "c3" : "12"
 , "c4" : "54"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decodeActiveTasks(AssignmentInfo;DataInputStream)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decodeStandbyTasks(AssignmentInfo;DataInputStream)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decodePartitionsByHost(AssignmentInfo;DataInputStream)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "readTopicPartitions(DataInputStream)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,String>"
 , "c2" : "decodeTopicIndexAndGet(DataInputStream)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<HostInfo,Set<TopicPartition>>"
 , "c2" : "decodeHostPartitionMapUsingDictionary(DataInputStream;Map<Integer,String>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decodePartitionsByHostUsingDictionary(AssignmentInfo;DataInputStream)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decodeActiveAndStandbyHostPartitions(AssignmentInfo;DataInputStream)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "readTopicPartitions(DataInputStream;Map<Integer,String>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "24"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
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
 , "c4" : "49"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class AssignmentInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.AssignmentInfo@POLYN220159 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.AssignmentInfo@POLYN221108 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.AssignmentInfo@POLYN221108 the MagicNumber/String  'version must be between 1 and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.AssignmentInfo@POLYN221108 the MagicNumber/String  '; was: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method setNextRebalanceTime arguments long  nextRebalanceTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  11 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  'Unknown metadata version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  '; latest commonly supported version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN223365 the MagicNumber/String  'Failed to encode AssignmentInfo' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method encodeActiveAndStandbyTaskAssignment arguments DataOutputStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#192"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00192] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00202] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method encodePartitionsByHost arguments DataOutputStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#210"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00210] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method encodeHostPartitionMapUsingDictionary arguments DataOutputStream  out|Map&lt;String ,Integer &gt;  topicNameDict|Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  hostPartitionMap"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#220"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00220] The argument topicNameDict is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#221"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00221] The argument hostPartitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00229] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method encodeTopicDictionaryAndGet arguments DataOutputStream  out|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00236] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encodeTopicDictionaryAndGet@POLYN229281 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00257] For method encodePartitionsByHostAsDictionary arguments DataOutputStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00257] For method encodePartitionsByHostAsDictionary list of called methods Object monObjet|java.util.Map&lt;String,?&gt; partitionsByHost_valuesN230498|java.util.Map&lt;String,Integer&gt; encodeTopicDictionaryAndGetN230745"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#264"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00264] For method encodeActiveAndStandbyHostPartitions arguments DataOutputStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#264"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00264] For method encodeActiveAndStandbyHostPartitions list of called methods Object monObjet|java.util.Map&lt;String,Integer&gt; encodeTopicDictionaryAndGetN231412"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#273"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00273] For method writeHostInfo arguments DataOutputStream  out|HostInfo  hostInfo"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#273"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00273] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#273"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00273] The argument hostInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method writeTopicPartitions arguments DataOutputStream  out|Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00288] For method decode arguments ByteBuffer  data"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#288"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00288] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  11 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  'Unable to decode assignment data: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  'used version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  '; latest supported version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String  'Failed to decode AssignmentInfo' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#367"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00367] For method decodeActiveTasks arguments AssignmentInfo  assignmentInfo|DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#367"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00367] The argument assignmentInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#368"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00368] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decodeActiveTasks@POLYN237439 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#376"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00376] For method decodeStandbyTasks arguments AssignmentInfo  assignmentInfo|DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#376"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00376] The argument assignmentInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decodeStandbyTasks@POLYN238044 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method decodePartitionsByHost arguments AssignmentInfo  assignmentInfo|DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#386"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00386] The argument assignmentInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#387"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00387] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00391] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decodePartitionsByHost@POLYN238762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#396"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00396] For method readTopicPartitions arguments DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#396"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00396] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.readTopicPartitions@POLYN239529 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#405"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00405] For method decodeTopicIndexAndGet arguments DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#405"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00405] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decodeTopicIndexAndGet@POLYN240238 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#414"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00414] For method decodeHostPartitionMapUsingDictionary arguments DataInputStream  in|Map&lt;Integer ,String &gt;  topicIndexDict"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#414"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00414] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00419] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decodeHostPartitionMapUsingDictionary@POLYN240946 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00425] For method decodePartitionsByHostUsingDictionary arguments AssignmentInfo  assignmentInfo|DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00425] For method decodePartitionsByHostUsingDictionary list of called methods Object monObjet|java.util.Map&lt;Integer,String&gt; decodeTopicIndexAndGetN242006|java.util.Map&lt;org.apache.kafka.streams.state.HostInfo,Set&lt;TopicPartition&gt;&gt; decodeHostPartitionMapUsingDictionaryN242099"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#425"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00425] The argument assignmentInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00431] For method decodeActiveAndStandbyHostPartitions arguments AssignmentInfo  assignmentInfo|DataInputStream  in"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00431] For method decodeActiveAndStandbyHostPartitions list of called methods Object monObjet|java.util.Map&lt;Integer,String&gt; decodeTopicIndexAndGetN242360|java.util.Map&lt;org.apache.kafka.streams.state.HostInfo,Set&lt;TopicPartition&gt;&gt; decodeHostPartitionMapUsingDictionaryN242453|java.util.Map&lt;org.apache.kafka.streams.state.HostInfo,Set&lt;TopicPartition&gt;&gt; decodeHostPartitionMapUsingDictionaryN242568"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00431] The argument assignmentInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method readTopicPartitions arguments DataInputStream  in|Map&lt;Integer ,String &gt;  topicIndexDict"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#438"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00438] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#439"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00439] The argument topicIndexDict is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.readTopicPartitions@POLYN242680 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00449] For method hashCode list of called methods Object monObjet|int partitionsByHost_hashCodeN243545"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.equals@POLYN243837 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  '[version=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ', supported version=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ', active tasks=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ', standby tasks=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ', partitions by host=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ', standbyPartitions by host=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.toString@POLYN244573 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00120] Public method nextRebalanceMs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method setNextRebalanceTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.hashCode@POLYN243465"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00310] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00317] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 4 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#325"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00325] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 5 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 6 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00341] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 7 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#342"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00342] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 8 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00343] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 9 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00345] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 11 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00355] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 'Unable to decode assignment data: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#356"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00356] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String '; latest supported version: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#356"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00356] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 'used version: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignmentInfo.java.html#363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00363] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.decode@POLYN232556 the MagicNumber/String 'Failed to decode AssignmentInfo' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');

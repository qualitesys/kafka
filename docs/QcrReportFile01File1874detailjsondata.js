console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java 23 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.ChangelogTopics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.ChangelogTopics" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#48"
 , "c1" : "ChangelogTopics"
 , "c2" : "ChangelogTopics(InternalTopicManager;Map&lt;Subtopology,TopicsInfo&gt;;Map&lt;Subtopology,Set&lt;TaskId&gt;&gt;;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#59"
 , "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#116"
 , "c1" : "Set&lt;TopicPartition&gt;"
 , "c2" : "preExistingNonSourceTopicBasedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#120"
 , "c1" : "Set&lt;TopicPartition&gt;"
 , "c2" : "preExistingPartitionsFor(TaskId)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#127"
 , "c1" : "Set&lt;TopicPartition&gt;"
 , "c2" : "preExistingSourceTopicBasedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#131"
 , "c1" : "Set&lt;TaskId&gt;"
 , "c2" : "statefulTaskIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.svg" }

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
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00059] For method setup list of called methods Object monObjet|V tasksForTopicGroup_getN170156|java.util.Set topicsInfo_stateChangelogTopics_keySetN170629|java.util.Set task_partitionN171375"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00074] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.ChangelogTopics.setup@POLYN169631 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.processor.internals.ChangelogTopics.setup@POLYN169631 the MagicNumber/String  'No tasks found for subtopology {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.ChangelogTopics.setup@POLYN169631 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.processor.internals.ChangelogTopics.setup@POLYN169631 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.processor.internals.ChangelogTopics.setup@POLYN169631 the MagicNumber/String  'Created state changelog topics {} from the parsed topology.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method preExistingPartitionsFor arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00116] Public method preExistingNonSourceTopicBasedPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00120] Public method preExistingPartitionsFor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00127] Public method preExistingSourceTopicBasedPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00131] Public method statefulTaskIds is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ChangelogTopics.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html" 
 , "texte" : "File examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java 47 rule violations " 
 , "fic2"  : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "kafka.examples.KafkaExactlyOnceDemo"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.examples.KafkaExactlyOnceDemo" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#78"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "6"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#128"
 , "c1" : "void"
 , "c2" : "recreateTopics(int)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00183"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#183"
 , "c1" : "void"
 , "c2" : "deleteTopic(Admin;List&lt;String&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.png" 

 , "ligneplantuml" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "36"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'Should accept 3 parameters: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  '[number of partitions], [number of instances], [number of records]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'Timeout after 5 minutes waiting for data pre-population' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'Timeout after 5 minutes waiting for transactionally message copy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'Verify-consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'Timeout after 5 minutes waiting for output data consumption' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN174931 the MagicNumber/String  'All finished!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method recreateTopics arguments int  numPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00163] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00171] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  'Making sure the topics are deleted successfully: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  'Current list of topics: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  'Created new topics: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  'Metadata of the old topics are not cleared yet...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN177625 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method deleteTopic arguments Admin  adminClient|List&lt;String &gt;  topicsToDelete"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00183] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN180219 the MagicNumber/String  'Encountered exception during topic deletion: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN180219 the MagicNumber/String  'Deleted old topics: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

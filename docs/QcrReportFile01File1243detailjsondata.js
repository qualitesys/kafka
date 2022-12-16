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
 , "c5" : "00084"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#84"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "6"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#134"
 , "c1" : "void"
 , "c2" : "recreateTopics(int)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00189"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#189"
 , "c1" : "void"
 , "c2" : "deleteTopic(Admin;List<String>)"
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
 , "c1" : "00084"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'Should accept 3 parameters: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  '[number of partitions], [number of instances], [number of records]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'Timeout after 5 minutes waiting for data pre-population' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'Timeout after 5 minutes waiting for transactionally message copy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'Verify-consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'Timeout after 5 minutes waiting for output data consumption' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN173849 the MagicNumber/String  'All finished!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method recreateTopics arguments int  numPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00169] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  'Making sure the topics are deleted successfully: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  'Current list of topics: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  'Created new topics: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  'Metadata of the old topics are not cleared yet...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN176543 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method deleteTopic arguments Admin  adminClient|List&lt;String &gt;  topicsToDelete"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#189"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00189] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN179137 the MagicNumber/String  'Encountered exception during topic deletion: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN179137 the MagicNumber/String  'Deleted old topics: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

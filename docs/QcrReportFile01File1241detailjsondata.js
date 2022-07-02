console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html" 
 , "texte" : "File examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java 48 rule violations " 
 , "fic2"  : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "kafka.examples.KafkaExactlyOnceDemo"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.examples.KafkaExactlyOnceDemo" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "6"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recreateTopics(int)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "void"
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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class KafkaExactlyOnceDemo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'Should accept 3 parameters: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  '[number of partitions], [number of instances], [number of records]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'Timeout after 5 minutes waiting for data pre-population' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'Timeout after 5 minutes waiting for transactionally message copy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'Verify-consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'Timeout after 5 minutes waiting for output data consumption' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method kafka.examples.KafkaExactlyOnceDemo.main@POLYN193005 the MagicNumber/String  'All finished!' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method recreateTopics arguments int  numPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  'Making sure the topics are deleted successfully: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  'Current list of topics: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  'Created new topics: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  'Metadata of the old topics are not cleared yet...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method kafka.examples.KafkaExactlyOnceDemo.recreateTopics@POLYN195699 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method deleteTopic arguments Admin  adminClient|List&lt;String &gt;  topicsToDelete"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00131] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN198293 the MagicNumber/String  'Encountered exception during topic deletion: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/KafkaExactlyOnceDemo.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method kafka.examples.KafkaExactlyOnceDemo.deleteTopic@POLYN198293 the MagicNumber/String  'Deleted old topics: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

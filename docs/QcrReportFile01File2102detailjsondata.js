console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html" 
 , "texte" : "File streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java 21 rule violations " 
 , "fic2"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.TestOutputTopic"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TestOutputTopic" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TestOutputTopic"
 , "c2" : "TestOutputTopic(TopologyTestDriver;String;Deserializer<K>;Deserializer<V>)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "readValue()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "readKeyValue()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "TestRecord<K,V>"
 , "c2" : "readRecord()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TestRecord<K,V>>"
 , "c2" : "readRecordsToList()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<K,V>"
 , "c2" : "readKeyValuesToMap()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "List<KeyValue<K,V>>"
 , "c2" : "readKeyValuesToList()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "List<V>"
 , "c2" : "readValuesToList()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getQueueSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
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
   {"ligne" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.png" 

 , "ligneplantuml" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.svg" }

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
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class TestOutputTopic contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN191207 the MagicNumber/String  'TopologyTestDriver cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN191207 the MagicNumber/String  'topicName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN191207 the MagicNumber/String  'keyDeserializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN191207 the MagicNumber/String  'valueDeserializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.TestOutputTopic.readKeyValuesToMap@POLYN194272 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.TestOutputTopic.readKeyValuesToMap@POLYN194272 the MagicNumber/String  'Null keys not allowed with readKeyValuesToMap method' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  'topic='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  'keyDeserializer=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  'valueDeserializer=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN196629 the MagicNumber/String  'size=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00036] Public method readValue is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00042] Public method readKeyValue is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method readRecordsToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00063] Public method readKeyValuesToMap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00077] Public method readKeyValuesToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method readValuesToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

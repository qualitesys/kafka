console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html" 
 , "texte" : "File streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java 25 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.TestOutputTopic"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TestOutputTopic" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#60"
 , "c1" : "TestOutputTopic"
 , "c2" : "TestOutputTopic(TopologyTestDriver;String;Deserializer&lt;K&gt;;Deserializer&lt;V&gt;)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#79"
 , "c1" : "V"
 , "c2" : "readValue()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#89"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "readKeyValue()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#99"
 , "c1" : "TestRecord&lt;K,V&gt;"
 , "c2" : "readRecord()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#112"
 , "c1" : "List&lt;TestRecord&lt;K,V&gt;&gt;"
 , "c2" : "readRecordsToList()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#131"
 , "c1" : "Map&lt;K,V&gt;"
 , "c2" : "readKeyValuesToMap()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00149"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#149"
 , "c1" : "List&lt;KeyValue&lt;K,V&gt;&gt;"
 , "c2" : "readKeyValuesToList()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00164"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#164"
 , "c1" : "List&lt;V&gt;"
 , "c2" : "readValuesToList()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#179"
 , "c1" : "long"
 , "c2" : "getQueueSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00188"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#188"
 , "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00193"
 , "c5link" : "././qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#193"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN183119 the MagicNumber/String  'TopologyTestDriver cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN183119 the MagicNumber/String  'topicName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN183119 the MagicNumber/String  'keyDeserializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.TestOutputTopic.TestOutputTopic@POLYN183119 the MagicNumber/String  'valueDeserializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00079] For method readValue list of called methods Object monObjet|TestRecord readRecordN184169"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method readKeyValue list of called methods Object monObjet|TestRecord readRecordN184536"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00131] For method readKeyValuesToMap list of called methods Object monObjet|TestRecord readRecordN186530"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.TestOutputTopic.readKeyValuesToMap@POLYN186190 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.TestOutputTopic.readKeyValuesToMap@POLYN186190 the MagicNumber/String  'Null keys not allowed with readKeyValuesToMap method' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00149] For method readKeyValuesToList list of called methods Object monObjet|org.apache.kafka.streams.KeyValue readKeyValueN187409"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00164] For method readValuesToList list of called methods Object monObjet|V readValueN187946"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  'topic='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  'keyDeserializer=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  'valueDeserializer=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.TestOutputTopic.toString@POLYN188559 the MagicNumber/String  'size=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00079] Public method readValue is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method readKeyValue is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00112] Public method readRecordsToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00131] Public method readKeyValuesToMap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00149] Public method readKeyValuesToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00164] Public method readValuesToList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestOutputTopic.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
